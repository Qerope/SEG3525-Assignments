"use client"

import { ArrowLeft, User, Database, BarChart3, Globe, Palette, Code, Sparkles } from "lucide-react"
import Link from "next/link"
import { useLanguage } from "../contexts/language-context"
import { translations } from "../utils/translations"

export default function DesignInfo() {
  const { language } = useLanguage()
  const t = translations[language]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center h-16">
            <Link href="/" className="flex items-center text-blue-600 hover:text-blue-800 mr-6">
              <ArrowLeft className="h-5 w-5 mr-2" />
              {t.backToDashboard}
            </Link>
            <h1 className="text-2xl font-bold text-gray-900">{t.designInfo}</h1>
          </div>
        </div>
      </header>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Designer Info */}
        <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
          <div className="flex items-center mb-4">
            <User className="h-6 w-6 text-blue-600 mr-3" />
            <h2 className="text-xl font-bold text-gray-900">{t.designer}</h2>
          </div>
          <div className="space-y-2">
            <p>
              <strong>{t.name}:</strong> Hamed Tavakoli Dastjerdi
            </p>
            <p>
              <strong>{t.studentId}:</strong> 300321356
            </p>
            <p>
              <strong>{t.linkto}:</strong>{" "}
              <a
                href="https://interactive-localized-data-bi.vercel.app/"
                className="text-blue-600 hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                https://interactive-localized-data-bi.vercel.app/
              </a>
            </p>
            <p>
              <strong>{t.portfolio}:</strong>{" "}
              <a
                href="https://qerope.github.io/SEG3525-Assignments/Devoir1/"
                className="text-blue-600 hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                https://qerope.github.io/SEG3525-Assignments/Devoir1/
              </a>
            </p>
            <p>
              <strong>{t.githubRepo}:</strong>{" "}
              <a
                href="https://github.com/Qerope/InteractiveLocalizedDataBI"
                className="text-blue-600 hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                https://github.com/Qerope/InteractiveLocalizedDataBI
              </a>
            </p>
          </div>
        </div>

        {/* Dashboard Goal & Data */}
        <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
          <div className="flex items-center mb-4">
            <Database className="h-6 w-6 text-green-600 mr-3" />
            <h2 className="text-xl font-bold text-gray-900">{t.dashboardGoalData}</h2>
          </div>
          <div className="space-y-4">
            <div>
              <h3 className="font-semibold text-gray-800 mb-2">{t.domain}</h3>
              <p className="text-gray-600">{t.domainDescription}</p>
            </div>
            <div>
              <h3 className="font-semibold text-gray-800 mb-2">{t.dataset}</h3>
              <p className="text-gray-600 mb-2">{t.datasetDescription}</p>
              <p className="text-sm text-gray-500">
                <strong>{t.source}:</strong>{" "}
                <a
                  href="https://www.kaggle.com/datasets/anandkushawaha/aviation-crashed-flights-data"
                  className="text-blue-600 hover:underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Kaggle - Aviation Crashed Flights Data
                </a>
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-gray-800 mb-2">{t.dataUsage}</h3>
              <p className="text-gray-600">{t.dataUsageDescription}</p>
            </div>
          </div>
        </div>

        {/* Design Reflection */}
        <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
          <div className="flex items-center mb-4">
            <BarChart3 className="h-6 w-6 text-purple-600 mr-3" />
            <h2 className="text-xl font-bold text-gray-900">{t.designReflection}</h2>
          </div>

          <div className="space-y-6">
            {/* Charts */}
            <div>
              <h3 className="font-semibold text-gray-800 mb-3">{t.chartsSection}</h3>
              <div className="space-y-3">
                <div>
                  <h4 className="font-medium text-gray-700">{t.lineChart}</h4>
                  <p className="text-gray-600 text-sm">{t.lineChartReason}</p>
                </div>
                <div>
                  <h4 className="font-medium text-gray-700">{t.pieChart}</h4>
                  <p className="text-gray-600 text-sm">{t.pieChartReason}</p>
                </div>
              </div>
            </div>

            {/* 3Cs */}
            <div>
              <h3 className="font-semibold text-gray-800 mb-3">{t.threeCsSection}</h3>
              <div className="space-y-3">
                <div>
                  <h4 className="font-medium text-gray-700">{t.context}</h4>
                  <p className="text-gray-600 text-sm">{t.contextDescription}</p>
                </div>
                <div>
                  <h4 className="font-medium text-gray-700">{t.clutterFree}</h4>
                  <p className="text-gray-600 text-sm">{t.clutterFreeDescription}</p>
                </div>
                <div>
                  <h4 className="font-medium text-gray-700">{t.contrast}</h4>
                  <p className="text-gray-600 text-sm">{t.contrastDescription}</p>
                </div>
              </div>
            </div>

            {/* Layout & Interactions */}
            <div>
              <h3 className="font-semibold text-gray-800 mb-3">{t.layoutInteractions}</h3>
              <p className="text-gray-600 text-sm">{t.layoutInteractionsDescription}</p>
            </div>
          </div>
        </div>

        {/* Internationalization */}
        <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
          <div className="flex items-center mb-4">
            <Globe className="h-6 w-6 text-blue-600 mr-3" />
            <h2 className="text-xl font-bold text-gray-900">{t.internationalization}</h2>
          </div>
          <div className="space-y-4">
            <div>
              <h3 className="font-semibold text-gray-800 mb-2">{t.languages}</h3>
              <p className="text-gray-600">{t.languagesDescription}</p>
            </div>
            <div>
              <h3 className="font-semibold text-gray-800 mb-2">{t.translations}</h3>
              <p className="text-gray-600">{t.translationsDescription}</p>
            </div>
            <div>
              <h3 className="font-semibold text-gray-800 mb-2">{t.challenges}</h3>
              <p className="text-gray-600">{t.challengesDescription}</p>
            </div>
            <div>
              <h3 className="font-semibold text-gray-800 mb-2">{t.localizedElements}</h3>
              <p className="text-gray-600">{t.localizedElementsDescription}</p>
            </div>
          </div>
        </div>

        {/* Visual Design */}
        <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
          <div className="flex items-center mb-4">
            <Palette className="h-6 w-6 text-pink-600 mr-3" />
            <h2 className="text-xl font-bold text-gray-900">{t.visualDesign}</h2>
          </div>
          <p className="text-gray-600">{t.visualDesignDescription}</p>
        </div>

        {/* Code & Implementation */}
        <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
          <div className="flex items-center mb-4">
            <Code className="h-6 w-6 text-gray-600 mr-3" />
            <h2 className="text-xl font-bold text-gray-900">{t.codeImplementation}</h2>
          </div>
          <p className="text-gray-600">{t.codeImplementationDescription}</p>
        </div>

        {/* AI Acknowledgment */}
        <div className="bg-white rounded-lg shadow-sm p-6">
          <div className="flex items-center mb-4">
            <Sparkles className="h-6 w-6 text-yellow-500 mr-3" />
            <h2 className="text-xl font-bold text-gray-900">{t.aiAcknowledgment}</h2>
          </div>
          <p className="text-gray-600">{t.aiAcknowledgmentDescription}</p>
        </div>
      </div>
    </div>
  )
}
