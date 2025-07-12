"use client"

import { useState, useMemo, useEffect } from "react"
import {
  LineChart,
  Line,
  PieChart,
  Pie,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  Brush,
} from "recharts"
import { Plane, Filter, Calendar, Building2, Wrench, Eye, EyeOff } from "lucide-react"
import { useLanguage } from "./contexts/language-context"
import { translations } from "./utils/translations"
import LanguageSelector from "./components/language-selector"
import Link from "next/link"

interface CrashData {
  date: string
  type: string
  registration: string
  operator: string
  fat: number
  location: string
  dmg: string
}

type ComparisonType = "operator" | "timeRange" | "aircraftType" | "damageType"

export default function Dashboard() {
  const { language } = useLanguage()
  const t = translations[language]
  const [aviationData, setAviationData] = useState<CrashData[]>([])
  const [loading, setLoading] = useState(true)

 
  const [comparisonMode, setComparisonMode] = useState(false)

 
  const [comparisonType, setComparisonType] = useState<ComparisonType>("timeRange")
  const [comparison1, setComparison1] = useState<string>("")
  const [comparison2, setComparison2] = useState<string>("")

 
  const [singleFilter, setSingleFilter] = useState<string>("all")

 
  const [hiddenDataKeys, setHiddenDataKeys] = useState<Set<string>>(new Set())

 
  const getDamageTypeLabel = (dmg: string) => {
    const mapping: { [key: string]: string } = {
      sub: t.substantialDamage,
      "w/o": t.totalLoss,
      non: t.minorDamage,
    }
    return mapping[dmg] || dmg
  }

 
  useEffect(() => {
    const loadData = async () => {
      try {
        const response = await fetch("/data/aviation-crashes.csv")
        const csvText = await response.text()

        const lines = csvText.trim().split("\n")
        const data = lines.slice(1).map((line) => {
          const values = line.split(",")
          return {
            date: values[1],
            type: values[2],
            registration: values[3],
            operator: values[4].replace("\"", ""),
            fat: Number.parseInt(values[5]) || 0,
            location: values[6].replace(/"/g, ""),
            dmg: values[7],
          }
        })

        setAviationData(data)

       
        setSingleFilter("all")

       
        const operators = [...new Set(data.map((item) => item.operator))].sort()
        if (operators.length >= 2) {
          setComparison1(operators[0])
          setComparison2(operators[1])
        }
      } catch (error) {
        console.error("Error loading CSV data:", error)
      } finally {
        setLoading(false)
      }
    }

    loadData()
  }, [])

 
  const getComparisonOptions = (type: ComparisonType) => {
    switch (type) {
      case "operator":
        return [...new Set(aviationData.map((item) => item.operator))].sort()
      case "timeRange":
        return ["2018-2020", "2020-2022", "2022-2024"]
      case "aircraftType":
        return [...new Set(aviationData.map((item) => item.type))].sort()
      case "damageType":
        return ["sub", "w/o", "non"]
      default:
        return []
    }
  }

 
  const getSingleOptions = () => {
    const options = ["all", ...getComparisonOptions(comparisonType)]
    return options
  }

 
  const filterDataByComparison = (comparisonValue: string) => {
    if (comparisonValue === "all") return aviationData

    switch (comparisonType) {
      case "operator":
        return aviationData.filter((item) => item.operator === comparisonValue)
      case "timeRange":
        const [startYear, endYear] = comparisonValue.split("-").map(Number)
        return aviationData.filter((item) => {
          const year = new Date(item.date).getFullYear()
          return year >= startYear && year <= endYear
        })
      case "aircraftType":
        return aviationData.filter((item) => item.type === comparisonValue)
      case "damageType":
        return aviationData.filter((item) => item.dmg === comparisonValue)
      default:
        return aviationData
    }
  }

 
  const { lineChartData, barChartData, stats1, stats2, singleStats } = useMemo(() => {
    if (comparisonMode) {
     
      if (!comparison1 || !comparison2) {
        return { lineChartData: [], barChartData: [], stats1: null, stats2: null, singleStats: null, pieChartData: [] }
      }

      const data1 = filterDataByComparison(comparison1)
      const data2 = filterDataByComparison(comparison2)

     
      const yearData1: { [key: string]: { crashes: number; fatalities: number } } = {}
      const yearData2: { [key: string]: { crashes: number; fatalities: number } } = {}

      data1.forEach((item) => {
        const year = new Date(item.date).getFullYear().toString()
        if (!yearData1[year]) yearData1[year] = { crashes: 0, fatalities: 0 }
        yearData1[year].crashes += 1
        yearData1[year].fatalities += item.fat
      })

      data2.forEach((item) => {
        const year = new Date(item.date).getFullYear().toString()
        if (!yearData2[year]) yearData2[year] = { crashes: 0, fatalities: 0 }
        yearData2[year].crashes += 1
        yearData2[year].fatalities += item.fat
      })

      const allYears = [...new Set([...Object.keys(yearData1), ...Object.keys(yearData2)])].sort()
      const lineData = allYears.map((year) => ({
        year,
        [`${t.crashes} (${comparison1})`]: yearData1[year]?.crashes || 0,
        [`${t.fatalities} (${comparison1})`]: yearData1[year]?.fatalities || 0,
        [`${t.crashes} (${comparison2})`]: yearData2[year]?.crashes || 0,
        [`${t.fatalities} (${comparison2})`]: yearData2[year]?.fatalities || 0,
      }))

     
     
     

     
     
     

     
     
     

     
     
     
     
     
     
     
     
     
     
     

      const calculateStats = (data: CrashData[]) => ({
        totalCrashes: data.length,
        totalFatalities: data.reduce((sum, item) => sum + item.fat, 0),
        avgFatalities: data.length > 0 ? (data.reduce((sum, item) => sum + item.fat, 0) / data.length).toFixed(1) : "0",
        fatalCrashes: data.filter((item) => item.fat > 0).length,
      })

      return {
        lineChartData: lineData,
        barChartData: [],
        stats1: calculateStats(data1),
        stats2: calculateStats(data2),
        singleStats: null,
        pieChartData: [],
      }
    } else {
     
      const filteredData = filterDataByComparison(singleFilter)

     
      const yearData: { [key: string]: { crashes: number; fatalities: number } } = {}

      filteredData.forEach((item) => {
        const year = new Date(item.date).getFullYear().toString()
        if (!yearData[year]) yearData[year] = { crashes: 0, fatalities: 0 }
        yearData[year].crashes += 1
        yearData[year].fatalities += item.fat
      })

      const lineData = Object.entries(yearData)
        .map(([year, data]) => ({
          year,
          [t.crashes]: data.crashes,
          [t.fatalities]: data.fatalities,
        }))
        .sort((a, b) => Number.parseInt(a.year) - Number.parseInt(b.year))

     
     

     
     
     
     
     
     
     

     
     
     
     
     
     
     
     
     
     

      const calculateSingleStats = (data: CrashData[]) => ({
        totalCrashes: data.length,
        totalFatalities: data.reduce((sum, item) => sum + item.fat, 0),
        avgFatalities: data.length > 0 ? (data.reduce((sum, item) => sum + item.fat, 0) / data.length).toFixed(1) : "0",
        fatalCrashes: data.filter((item) => item.fat > 0).length,
      })

      return {
        lineChartData: lineData,
        barChartData: [],
        stats1: null,
        stats2: null,
        singleStats: calculateSingleStats(filteredData),
        pieChartData: [],
      }
    }
  }, [aviationData, comparison1, comparison2, comparisonType, singleFilter, comparisonMode, t])

 
  const pieChartData = useMemo(() => {
    const data = comparisonMode
      ? comparison1 && comparison2
        ? [...filterDataByComparison(comparison1), ...filterDataByComparison(comparison2)]
        : []
      : filterDataByComparison(singleFilter)

    const damageCount = { sub: 0, "w/o": 0, non: 0 }

    data.forEach((item) => {
      if (damageCount.hasOwnProperty(item.dmg)) {
        damageCount[item.dmg as keyof typeof damageCount]++
      }
    })

    return [
      {
        name: getDamageTypeLabel("sub"),
        value: damageCount.sub,
        color: "#f59e0b",
        rawName: "sub",
      },
      {
        name: getDamageTypeLabel("w/o"),
        value: damageCount["w/o"],
        color: "#ef4444",
        rawName: "w/o",
      },
      {
        name: getDamageTypeLabel("non"),
        value: damageCount.non,
        color: "#10b981",
        rawName: "non",
      },
    ].filter((item) => item.value > 0)
  }, [aviationData, comparison1, comparison2, comparisonType, singleFilter, comparisonMode, t])

 
  useEffect(() => {
    const options = getComparisonOptions(comparisonType)
    if (comparisonMode && options.length >= 2) {
      setComparison1(options[0])
      setComparison2(options[1])
    }
    if (!comparisonMode) {
      setSingleFilter("all")
    }
  }, [comparisonType, aviationData, comparisonMode])

 
  const getAvailableOptions2 = () => {
    const allOptions = getComparisonOptions(comparisonType)
    return allOptions.filter((option) => option !== comparison1)
  }

 
  const toggleDataKeyVisibility = (dataKey: string) => {
    const newHiddenKeys = new Set(hiddenDataKeys)
    if (newHiddenKeys.has(dataKey)) {
      newHiddenKeys.delete(dataKey)
    } else {
      newHiddenKeys.add(dataKey)
    }
    setHiddenDataKeys(newHiddenKeys)
  }

 
  const CustomLineTooltip = ({ active, payload, label }: any) => {
    if (active && payload && payload.length) {
      return (
        <div className="bg-white p-4 border border-gray-200 rounded-lg shadow-xl">
          <p className="font-semibold text-gray-900 mb-3">{`${t.year}: ${label}`}</p>
          <div className="space-y-2">
            {payload
              .filter((entry: any) => !hiddenDataKeys.has(entry.dataKey))
              .map((entry: any, index: number) => (
                <div key={index} className="flex items-center justify-between min-w-48">
                  <div className="flex items-center">
                    <div className="w-3 h-3 rounded-full mr-2" style={{ backgroundColor: entry.color }} />
                    <span className="text-sm font-medium">{entry.dataKey}</span>
                  </div>
                  <span className="text-sm font-bold ml-4">
                    {entry.value.toLocaleString(language === "ru" ? "ru-RU" : "en-US")}
                  </span>
                </div>
              ))}
          </div>
        </div>
      )
    }
    return null
  }

  const CustomBarTooltip = ({ active, payload, label }: any) => {
    if (active && payload && payload.length) {
      const data = payload[0].payload
      return (
        <div className="bg-white p-4 border border-gray-200 rounded-lg shadow-xl max-w-sm">
          <p className="font-semibold text-gray-900 mb-3">{data.fullType}</p>
          <div className="space-y-2">
            {payload
              .filter((entry: any) => !hiddenDataKeys.has(entry.dataKey))
              .map((entry: any, index: number) => (
                <div key={index} className="flex items-center justify-between">
                  <div className="flex items-center">
                    <div className="w-3 h-3 rounded-full mr-2" style={{ backgroundColor: entry.color }} />
                    <span className="text-sm font-medium">{entry.dataKey}</span>
                  </div>
                  <span className="text-sm font-bold ml-4">
                    {entry.value.toLocaleString(language === "ru" ? "ru-RU" : "en-US")}
                  </span>
                </div>
              ))}
          </div>
        </div>
      )
    }
    return null
  }

  const CustomPieTooltip = ({ active, payload }: any) => {
    if (active && payload && payload.length) {
      const data = payload[0].payload
      return (
        <div className="bg-white p-4 border border-gray-200 rounded-lg shadow-xl">
          <p className="font-semibold text-gray-900 mb-2">{data.name}</p>
          <div className="space-y-1">
            <div className="flex items-center justify-between">
              <span className="text-xsm text-gray-600">{t.crashes}:</span>
              <span className="text-sm font-bold">
                {data.value.toLocaleString(language === "ru" ? "ru-RU" : "en-US")}
              </span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm text-gray-600">{t.percentage}:</span>
              <span className="text-sm font-bold">
                {((data.value / pieChartData.reduce((sum, item) => sum + item.value, 0)) * 100).toFixed(1)}%
              </span>
            </div>
          </div>
        </div>
      )
    }
    return null
  }

  const CustomLegend = ({ payload }: any) => {
    if (!payload) return null

    return (<div className="flex flex-wrap justify-center gap-2 mt-2">
      {payload.map((entry: any, index: number) => {
        const isHidden = hiddenDataKeys.has(entry.dataKey || entry.value);
        return (
          <button
            key={index}
            onClick={() => toggleDataKeyVisibility(entry.dataKey || entry.value)}
            className={`flex items-center space-x-1 px-2 py-1 rounded-md border transition-all transform hover:scale-105 ${isHidden
                ? "bg-gray-100 border-gray-300 text-gray-400 opacity-60"
                : "bg-white border-gray-200 text-gray-700 hover:bg-gray-50 shadow-sm"
              }`}
          >
            {isHidden ? <EyeOff className="h-3 w-3" /> : <Eye className="h-3 w-3" />}
            <div
              className="w-3 h-3 rounded-full border"
              style={{
                backgroundColor: isHidden ? "#ccc" : entry.color,
                borderColor: isHidden ? "#999" : entry.color,
              }}
            />
            <span className="text-xs font-medium">
              {isHidden ? `${t.showItem} ${entry.dataKey || entry.value}` : entry.dataKey || entry.value}
            </span>
          </button>
        );
      })}
    </div>

    )
  }

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 flex items-center justify-center">
        <div className="text-center">
          <Plane className="h-12 w-12 text-blue-600 animate-pulse mx-auto mb-4" />
          <p className="text-lg text-gray-600">{t.loading || "Loading..."}</p>
        </div>
      </div>
    )
  }

  const comparisonOptions = getComparisonOptions(comparisonType)
  const singleOptions = getSingleOptions()

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      
      <header className="bg-white shadow-sm border-b sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-3">
              <Plane className="h-8 w-8 text-blue-600" />
              <h1 className="text-xl sm:text-2xl font-bold text-gray-900">{t.dashboardTitle}</h1>
            </div>
            <div className="flex items-center space-x-4">
              <Link
                href="/design-info"
                className="text-blue-600 hover:text-blue-800 font-medium flex items-center space-x-1 transition-colors"
              >
                <span className="hidden sm:inline">{t.designInfo}</span>
                <span className="sm:hidden">Info</span>
              </Link>
              <LanguageSelector />
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8">
        
        <div className="bg-white rounded-lg shadow-sm p-4 sm:p-6 mb-6 sm:mb-8"><div className="flex items-center justify-between mb-6">
          <h3 className="text-lg font-semibold text-gray-900 flex items-center">
            <Filter className="h-5 w-5 mr-2 text-blue-600" />
            {t.analysisMode}
          </h3>

          <div className="flex items-center space-x-3">
            <span className={`text-sm font-medium ${!comparisonMode ? "text-blue-600" : "text-gray-500"}`}>
              {t.singleMode}
            </span>
            <button
              onClick={() => setComparisonMode(!comparisonMode)}
              className={`relative inline-flex h-8 w-14 items-center rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 ${comparisonMode ? "bg-blue-600" : "bg-gray-300"
                }`}
            >
              <span
                className={`inline-block h-6 w-6 transform rounded-full bg-white transition-transform ${comparisonMode ? "translate-x-7" : "translate-x-1"
                  }`}
              />
            </button>
            <span className={`text-sm font-medium ${comparisonMode ? "text-blue-600" : "text-gray-500"}`}>
              {t.comparisonMode}
            </span>
          </div>
        </div>


          {comparisonMode ? (
            <>
              
              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 mb-3">{t.step1ChooseType}</label>
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
                  {[
                    { value: "operator", label: t.operator, icon: Building2 },
                    { value: "timeRange", label: t.timeRange, icon: Calendar },
                    { value: "aircraftType", label: t.aircraftType, icon: Plane },
                    { value: "damageType", label: t.damageType, icon: Wrench },
                  ].map(({ value, label, icon: Icon }) => (
                    <button
                      key={value}
                      onClick={() => setComparisonType(value as ComparisonType)}
                      className={`p-3 rounded-lg border-2 transition-all flex items-center justify-center space-x-2 ${comparisonType === value
                        ? "border-blue-500 bg-blue-50 text-blue-700"
                        : "border-gray-200 hover:border-gray-300 text-gray-600"
                        }`}
                    >
                      <Icon className="h-4 w-4" />
                      <span className="text-sm font-medium">{label}</span>
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="text-xs font-medium text-blue-600 uppercase tracking-wide">
                      {t.comparison} A
                    </label>
                    <select
                      value={comparison1}
                      onChange={(e) => setComparison1(e.target.value)}
                      className="w-full px-4 py-3 border-2 border-blue-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors bg-blue-50"
                    >
                      {comparisonOptions.map((option) => (
                        <option key={option} value={option}>
                          {comparisonType === "damageType" ? getDamageTypeLabel(option) : option}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-medium text-red-600 uppercase tracking-wide">{t.comparison} B</label>
                    <select
                      value={comparison2}
                      onChange={(e) => setComparison2(e.target.value)}
                      className="w-full px-4 py-3 border-2 border-red-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-red-500 transition-colors bg-red-50"
                    >
                      {getAvailableOptions2().map((option) => (
                        <option key={option} value={option}>
                          {comparisonType === "damageType" ? getDamageTypeLabel(option) : option}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
              </div>
            </>
          ) : (
            <>
              
              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 mb-3">{t.step1ChooseType}</label>
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
                  {[
                    { value: "operator", label: t.operator, icon: Building2 },
                    { value: "timeRange", label: t.timeRange, icon: Calendar },
                    { value: "aircraftType", label: t.aircraftType, icon: Plane },
                    { value: "damageType", label: t.damageType, icon: Wrench },
                  ].map(({ value, label, icon: Icon }) => (
                    <button
                      key={value}
                      onClick={() => setComparisonType(value as ComparisonType)}
                      className={`p-3 rounded-lg border-2 transition-all flex items-center justify-center space-x-2 ${comparisonType === value
                        ? "border-blue-500 bg-blue-50 text-blue-700"
                        : "border-gray-200 hover:border-gray-300 text-gray-600"
                        }`}
                    >
                      <Icon className="h-4 w-4" />
                      <span className="text-sm font-medium">{label}</span>
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-3">{t.selectFilter}</label>
                <select
                  value={singleFilter}
                  onChange={(e) => setSingleFilter(e.target.value)}
                  className="w-full max-w-md px-4 py-3 border-2 border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                >
                  <option value="all">{t.showAll}</option>
                  {getComparisonOptions(comparisonType).map((option) => (
                    <option key={option} value={option}>
                      {comparisonType === "damageType" ? getDamageTypeLabel(option) : option}
                    </option>
                  ))}
                </select>
              </div>
            </>
          )}
        </div>
        
        {comparisonMode && stats1 && stats2 ? (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6 sm:mb-8">
            
            <div className="bg-gradient-to-r from-blue-50 to-blue-100 rounded-lg p-6 border-l-4 border-blue-500">
              <h4 className="text-lg font-semibold text-blue-800 mb-4 flex items-center">
                <div className="w-4 h-4 bg-blue-500 rounded-full mr-2" />
                {comparisonType === "damageType" ? getDamageTypeLabel(comparison1) : comparison1}
              </h4>
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center">
                  <p className="text-2xl font-bold text-blue-900">
                    {stats1.totalCrashes.toLocaleString(language === "ru" ? "ru-RU" : "en-US")}
                  </p>
                  <p className="text-sm text-blue-700">{t.totalCrashes}</p>
                </div>
                <div className="text-center">
                  <p className="text-2xl font-bold text-blue-900">
                    {stats1.totalFatalities.toLocaleString(language === "ru" ? "ru-RU" : "en-US")}
                  </p>
                  <p className="text-sm text-blue-700">{t.totalFatalities}</p>
                </div>
              </div>
            </div>

            
            <div className="bg-gradient-to-r from-red-50 to-red-100 rounded-lg p-6 border-l-4 border-red-500">
              <h4 className="text-lg font-semibold text-red-800 mb-4 flex items-center">
                <div className="w-4 h-4 bg-red-500 rounded-full mr-2" />
                {comparisonType === "damageType" ? getDamageTypeLabel(comparison2) : comparison2}
              </h4>
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center">
                  <p className="text-2xl font-bold text-red-900">
                    {stats2.totalCrashes.toLocaleString(language === "ru" ? "ru-RU" : "en-US")}
                  </p>
                  <p className="text-sm text-red-700">{t.totalCrashes}</p>
                </div>
                <div className="text-center">
                  <p className="text-2xl font-bold text-red-900">
                    {stats2.totalFatalities.toLocaleString(language === "ru" ? "ru-RU" : "en-US")}
                  </p>
                  <p className="text-sm text-red-700">{t.totalFatalities}</p>
                </div>
              </div>
            </div>
          </div>
        ) : (
          singleStats && (
            <div className="bg-gradient-to-r from-blue-50 to-blue-100 rounded-lg p-6 border-l-4 border-blue-500 mb-6 sm:mb-8">
              <h4 className="text-lg font-semibold text-blue-800 mb-4">
                {singleFilter === "all"
                  ? t.allData
                  : comparisonType === "damageType"
                    ? getDamageTypeLabel(singleFilter)
                    : singleFilter}
              </h4>
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                <div className="text-center">
                  <p className="text-2xl font-bold text-blue-900">
                    {singleStats.totalCrashes.toLocaleString(language === "ru" ? "ru-RU" : "en-US")}
                  </p>
                  <p className="text-sm text-blue-700">{t.totalCrashes}</p>
                </div>
                <div className="text-center">
                  <p className="text-2xl font-bold text-blue-900">
                    {singleStats.totalFatalities.toLocaleString(language === "ru" ? "ru-RU" : "en-US")}
                  </p>
                  <p className="text-sm text-blue-700">{t.totalFatalities}</p>
                </div>
                <div className="text-center">
                  <p className="text-2xl font-bold text-blue-900">{singleStats.avgFatalities}</p>
                  <p className="text-sm text-blue-700">{t.avgFatalities}</p>
                </div>
                <div className="text-center">
                  <p className="text-2xl font-bold text-blue-900">
                    {singleStats.fatalCrashes.toLocaleString(language === "ru" ? "ru-RU" : "en-US")}
                  </p>
                  <p className="text-sm text-blue-700">{t.fatalCrashes}</p>
                </div>
              </div>
            </div>
          )
        )}
        
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-6 sm:gap-8">
          <div className="bg-white rounded-lg shadow-sm p-4 sm:p-6 hover:shadow-md transition-shadow">
            <h3 className="text-lg font-semibold text-gray-900 mb-2">{t.crashesByYear}</h3>
            <p className="text-sm text-gray-600 mb-6">{t.lineChartDescription}</p>
            <div className="h-80 sm:h-96">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={lineChartData} margin={{ top: 5, right: 30, left: 20, bottom: 60 }}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                  <XAxis dataKey="year" stroke="#666" fontSize={12} tick={{ fontSize: 11 }} />
                  <YAxis stroke="#666" fontSize={12} tick={{ fontSize: 11 }} />
                  <Tooltip content={<CustomLineTooltip />} />
                  <Legend content={<CustomLegend />} />
                  <Brush dataKey="year" height={30} stroke="#8884d8" />

                  {comparisonMode ? (
                    <>
                      {!hiddenDataKeys.has(`${t.crashes} (${comparison1})`) && (
                        <Line
                          type="monotone"
                          dataKey={`${t.crashes} (${comparison1})`}
                          stroke="#3b82f6"
                          strokeWidth={3}
                          dot={{ fill: "#3b82f6", strokeWidth: 2, r: 5 }}
                          activeDot={{ r: 7, stroke: "#3b82f6", strokeWidth: 2, fill: "#ffffff" }}
                        />
                      )}
                      {!hiddenDataKeys.has(`${t.fatalities} (${comparison1})`) && (
                        <Line
                          type="monotone"
                          dataKey={`${t.fatalities} (${comparison1})`}
                          stroke="#1d4ed8"
                          strokeWidth={2}
                          strokeDasharray="5 5"
                          dot={{ fill: "#1d4ed8", strokeWidth: 2, r: 4 }}
                          activeDot={{ r: 6, stroke: "#1d4ed8", strokeWidth: 2, fill: "#ffffff" }}
                        />
                      )}
                      {!hiddenDataKeys.has(`${t.crashes} (${comparison2})`) && (
                        <Line
                          type="monotone"
                          dataKey={`${t.crashes} (${comparison2})`}
                          stroke="#ef4444"
                          strokeWidth={3}
                          dot={{ fill: "#ef4444", strokeWidth: 2, r: 5 }}
                          activeDot={{ r: 7, stroke: "#ef4444", strokeWidth: 2, fill: "#ffffff" }}
                        />
                      )}
                      {!hiddenDataKeys.has(`${t.fatalities} (${comparison2})`) && (
                        <Line
                          type="monotone"
                          dataKey={`${t.fatalities} (${comparison2})`}
                          stroke="#dc2626"
                          strokeWidth={2}
                          strokeDasharray="5 5"
                          dot={{ fill: "#dc2626", strokeWidth: 2, r: 4 }}
                          activeDot={{ r: 6, stroke: "#dc2626", strokeWidth: 2, fill: "#ffffff" }}
                        />
                      )}
                    </>
                  ) : (
                    <>
                      {!hiddenDataKeys.has(t.crashes) && (
                        <Line
                          type="monotone"
                          dataKey={t.crashes}
                          stroke="#3b82f6"
                          strokeWidth={3}
                          dot={{ fill: "#3b82f6", strokeWidth: 2, r: 5 }}
                          activeDot={{ r: 7, stroke: "#3b82f6", strokeWidth: 2, fill: "#ffffff" }}
                        />
                      )}
                      {!hiddenDataKeys.has(t.fatalities) && (
                        <Line
                          type="monotone"
                          dataKey={t.fatalities}
                          stroke="#ef4444"
                          strokeWidth={3}
                          dot={{ fill: "#ef4444", strokeWidth: 2, r: 5 }}
                          activeDot={{ r: 7, stroke: "#ef4444", strokeWidth: 2, fill: "#ffffff" }}
                        />
                      )}
                    </>
                  )}
                </LineChart>
              </ResponsiveContainer>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-sm p-4 sm:p-6 hover:shadow-md transition-shadow">
            <h3 className="text-lg font-semibold text-gray-900 mb-2">{t.damageSeverityDistribution}</h3>
            <p className="text-sm text-gray-600 mb-6">{t.pieChartDescription}</p>
            <div className="h-80 sm:h-96">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
                  <Pie
                    data={pieChartData}
                    cx="50%"
                    cy="50%"
                    labelLine={false}
                    label={({ name, percent }) => `${(percent * 100).toFixed(1)}%`}
                    outerRadius={120}
                    fill="#8884d8"
                    dataKey="value"
                    animationBegin={0}
                    animationDuration={800}
                  >
                    {pieChartData.map((entry, index) => (
                      <Cell
                        key={`cell-${index}`}
                        fill={entry.color}
                        stroke={entry.color}
                        strokeWidth={2}
                        style={{
                          filter: hiddenDataKeys.has(entry.name) ? "opacity(0.3)" : "none",
                          cursor: "pointer",
                        }}
                        onClick={() => toggleDataKeyVisibility(entry.name)}
                      />
                    ))}
                  </Pie>
                  <Tooltip content={<CustomPieTooltip />} />
                  <Legend content={<CustomLegend />} />
                </PieChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>

        
        <div className="mt-6 sm:mt-8 bg-gray-50 rounded-lg p-4">
          <p className="text-sm text-gray-600">
            <strong>{t.dataSource}:</strong> {t.dataSourceText}
          </p>
        </div>
      </div>
    </div>
  )
}
