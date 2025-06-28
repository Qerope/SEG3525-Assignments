"use client"

import { useState, useMemo } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"
import { Slider } from "@/components/ui/slider"
import { Star, Filter, Grid, List, Search, ShoppingCart } from "lucide-react"

// Custom SVG for furniture placeholder
const FurnitureSVG = ({ className = "w-full h-48" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 400 300" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="400" height="300" fill="#f8fafc" />
    <rect x="50" y="80" width="300" height="140" rx="8" fill="#e2e8f0" />
    <rect x="70" y="100" width="80" height="60" rx="4" fill="#cbd5e1" />
    <rect x="170" y="100" width="80" height="60" rx="4" fill="#cbd5e1" />
    <rect x="270" y="100" width="60" height="60" rx="4" fill="#cbd5e1" />
    <rect x="70" y="180" width="260" height="20" rx="2" fill="#94a3b8" />
    <circle cx="80" cy="240" r="8" fill="#64748b" />
    <circle cx="320" cy="240" r="8" fill="#64748b" />
    <text x="200" y="270" textAnchor="middle" className="fill-slate-600 text-sm font-medium">
      ComfortCraft
    </text>
  </svg>
)

const products = [
  {
    id: 1,
    name: "Scandinavian Oak Dining Table",
    price: 899,
    originalPrice: 1199,
    rating: 4.8,
    reviews: 124,
    category: "Dining Room",
    material: "Wood",
    style: "Scandinavian",
    color: "Natural",
    size: "Large",
  },
  {
    id: 2,
    name: "Modern Leather Sofa",
    price: 1299,
    originalPrice: 1599,
    rating: 4.9,
    reviews: 89,
    category: "Living Room",
    material: "Leather",
    style: "Modern",
    color: "Black",
    size: "Large",
  },
  {
    id: 3,
    name: "Industrial Metal Bookshelf",
    price: 449,
    originalPrice: 599,
    rating: 4.7,
    reviews: 156,
    category: "Office",
    material: "Metal",
    style: "Industrial",
    color: "Black",
    size: "Medium",
  },
  {
    id: 4,
    name: "Traditional Wooden Bed Frame",
    price: 699,
    originalPrice: 899,
    rating: 4.6,
    reviews: 203,
    category: "Bedroom",
    material: "Wood",
    style: "Traditional",
    color: "Brown",
    size: "Queen",
  },
  {
    id: 5,
    name: "Modern Glass Coffee Table",
    price: 349,
    originalPrice: 449,
    rating: 4.5,
    reviews: 78,
    category: "Living Room",
    material: "Glass",
    style: "Modern",
    color: "Clear",
    size: "Medium",
  },
  {
    id: 6,
    name: "Ergonomic Office Chair",
    price: 299,
    originalPrice: 399,
    rating: 4.8,
    reviews: 312,
    category: "Office",
    material: "Fabric",
    style: "Modern",
    color: "Gray",
    size: "Standard",
  },
]

const filterOptions = {
  categories: ["Living Room", "Bedroom", "Dining Room", "Office"],
  materials: ["Wood", "Metal", "Leather", "Fabric", "Glass"],
  styles: ["Modern", "Traditional", "Scandinavian", "Industrial"],
  colors: ["Natural", "Black", "Brown", "Gray", "White", "Clear"],
  sizes: ["Small", "Medium", "Large", "Queen", "King", "Standard"],
}

export default function ProductsPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedCategories, setSelectedCategories] = useState<string[]>([])
  const [selectedMaterials, setSelectedMaterials] = useState<string[]>([])
  const [selectedStyles, setSelectedStyles] = useState<string[]>([])
  const [selectedColors, setSelectedColors] = useState<string[]>([])
  const [selectedSizes, setSelectedSizes] = useState<string[]>([])
  const [priceRange, setPriceRange] = useState([0, 2000])
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid")
  const [showFilters, setShowFilters] = useState(false)

  // Replace the FilterSection component and filter UI with this improved version:

  const FilterDropdown = ({
    title,
    options,
    selected,
    onSelect,
    placeholder = "Select...",
  }: {
    title: string
    options: string[]
    selected: string
    onSelect: (value: string) => void
    placeholder?: string
  }) => (
    <div className="space-y-2">
      <Label className="font-semibold text-gray-900">{title}</Label>
      <select
        value={selected}
        onChange={(e) => onSelect(e.target.value)}
        className="w-full p-2 border border-gray-300 rounded-md bg-white focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
      >
        <option value="">{placeholder}</option>
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  )

  const FilterCheckboxGroup = ({
    title,
    options,
    selected,
    filterType,
    onFilterChange,
  }: {
    title: string
    options: string[]
    selected: string[]
    filterType: string
    onFilterChange: (filterType: string, value: string, checked: boolean) => void
  }) => (
    <div className="space-y-3">
      <h3 className="font-semibold text-gray-900">{title}</h3>
      <div className="space-y-2 max-h-32 overflow-y-auto">
        {options.map((option) => (
          <div key={option} className="flex items-center space-x-2">
            <Checkbox
              id={`${filterType}-${option}`}
              checked={selected.includes(option)}
              onCheckedChange={(checked) => onFilterChange(filterType, option, checked as boolean)}
            />
            <Label htmlFor={`${filterType}-${option}`} className="text-sm">
              {option}
            </Label>
          </div>
        ))}
      </div>
    </div>
  )

  // Update the state management for single-select dropdowns
  const [selectedCategory, setSelectedCategory] = useState("")
  const [selectedStyle, setSelectedStyle] = useState("")
  const [selectedMaterial, setSelectedMaterial] = useState("")

  const handleFilterChange = (filterType: string, value: string, checked: boolean) => {
    const setters = {
      categories: setSelectedCategories,
      materials: setSelectedMaterials,
      styles: setSelectedStyles,
      colors: setSelectedColors,
      sizes: setSelectedSizes,
    }

    const setter = setters[filterType as keyof typeof setters]
    if (setter) {
      setter((prev) => (checked ? [...prev, value] : prev.filter((item) => item !== value)))
    }
  }

  // Update the filteredProducts logic
  const filteredProducts = useMemo(() => {
    return products.filter((product) => {
      const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase())
      const matchesCategory = !selectedCategory || product.category === selectedCategory
      const matchesMaterial = !selectedMaterial || product.material === selectedMaterial
      const matchesStyle = !selectedStyle || product.style === selectedStyle
      const matchesColor = selectedColors.length === 0 || selectedColors.includes(product.color)
      const matchesSize = selectedSizes.length === 0 || selectedSizes.includes(product.size)
      const matchesPrice = product.price >= priceRange[0] && product.price <= priceRange[1]

      return (
        matchesSearch &&
        matchesCategory &&
        matchesMaterial &&
        matchesStyle &&
        matchesColor &&
        matchesSize &&
        matchesPrice
      )
    })
  }, [searchTerm, selectedCategory, selectedMaterial, selectedStyle, selectedColors, selectedSizes, priceRange])

  // Update the clearAllFilters function
  const clearAllFilters = () => {
    setSelectedCategory("")
    setSelectedMaterial("")
    setSelectedStyle("")
    setSelectedColors([])
    setSelectedSizes([])
    setPriceRange([0, 2000])
    setSearchTerm("")
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="border-b bg-white sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">CC</span>
              </div>
              <span className="text-2xl font-bold text-blue-600">ComfortCraft</span>
            </Link>

            <nav className="hidden md:flex items-center space-x-8">
              <Link href="/" className="text-gray-700 hover:text-blue-600 transition-colors">
                Home
              </Link>
              <Link href="/design-info" className="text-gray-700 hover:text-blue-600 transition-colors">
                Design Info
              </Link>
              <Link href="/survey" className="text-gray-700 hover:text-blue-600 transition-colors">
                Share Feedback
              </Link>
            </nav>

            <Link href="/cart">
              <Button variant="outline" size="sm">
                Cart (0)
              </Button>
            </Link>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        {/* Page Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Discover Your Perfect Furniture</h1>
          <p className="text-gray-600">
            Explore our extensive collection using our smart search filters. Find exactly what you need for every room
            in your home.
          </p>
        </div>

        {/* Search and View Controls */}
        <div className="flex flex-col lg:flex-row gap-4 mb-6">
          <div className="flex-1 relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
            <Input
              placeholder="Search furniture by name, style, or material..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10"
            />
          </div>
          <div className="flex gap-2">
            <Button variant="outline" onClick={() => setShowFilters(!showFilters)} className="lg:hidden">
              <Filter className="w-4 h-4 mr-2" />
              Filters
            </Button>
            <Button variant={viewMode === "grid" ? "default" : "outline"} onClick={() => setViewMode("grid")} size="sm">
              <Grid className="w-4 h-4" />
            </Button>
            <Button variant={viewMode === "list" ? "default" : "outline"} onClick={() => setViewMode("list")} size="sm">
              <List className="w-4 h-4" />
            </Button>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Filters Sidebar - Faceted Search Implementation */}
          <div className={`lg:w-64 space-y-6 ${showFilters ? "block" : "hidden lg:block"}`}>
            {/* Replace the filter sidebar content with this improved version: */}
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-lg font-semibold">Refine Your Search</h2>
                <Button variant="ghost" size="sm" onClick={clearAllFilters}>
                  Clear All
                </Button>
              </div>

              <div className="space-y-6">
                {/* Price Range */}
                <div className="space-y-3">
                  <h3 className="font-semibold text-gray-900">Price Range</h3>
                  <div className="px-2">
                    <Slider
                      value={priceRange}
                      onValueChange={setPriceRange}
                      max={2000}
                      min={0}
                      step={50}
                      className="w-full"
                    />
                    <div className="flex justify-between text-sm text-gray-600 mt-2">
                      <span>${priceRange[0]}</span>
                      <span>${priceRange[1]}</span>
                    </div>
                  </div>
                </div>

                {/* Category Dropdown */}
                <FilterDropdown
                  title="Room Category"
                  options={filterOptions.categories}
                  selected={selectedCategory}
                  onSelect={setSelectedCategory}
                  placeholder="All Categories"
                />

                {/* Style Dropdown */}
                <FilterDropdown
                  title="Furniture Style"
                  options={filterOptions.styles}
                  selected={selectedStyle}
                  onSelect={setSelectedStyle}
                  placeholder="All Styles"
                />

                {/* Material Dropdown */}
                <FilterDropdown
                  title="Material"
                  options={filterOptions.materials}
                  selected={selectedMaterial}
                  onSelect={setSelectedMaterial}
                  placeholder="All Materials"
                />

                {/* Color Checkboxes (multi-select makes sense) */}
                <FilterCheckboxGroup
                  title="Color"
                  options={filterOptions.colors}
                  selected={selectedColors}
                  filterType="colors"
                  onFilterChange={handleFilterChange}
                />

                {/* Size Checkboxes (multi-select makes sense) */}
                <FilterCheckboxGroup
                  title="Size"
                  options={filterOptions.sizes}
                  selected={selectedSizes}
                  filterType="sizes"
                  onFilterChange={handleFilterChange}
                />
              </div>
            </div>
          </div>

          {/* Products Grid */}
          <div className="flex-1">
            <div className="flex items-center justify-between mb-6">
              <p className="text-gray-600">
                Showing {filteredProducts.length} of {products.length} products
              </p>
            </div>

            {filteredProducts.length === 0 ? (
              <div className="text-center py-12">
                <p className="text-gray-500 text-lg mb-4">No products match your current filters.</p>
                <Button onClick={clearAllFilters} variant="outline">
                  Clear Filters & Browse All
                </Button>
              </div>
            ) : (
              <div
                className={viewMode === "grid" ? "grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6" : "space-y-4"}
              >
                {filteredProducts.map((product) => (
                  <Card
                    key={product.id}
                    className={`overflow-hidden hover:shadow-lg transition-shadow ${
                      viewMode === "list" ? "flex flex-row" : ""
                    }`}
                  >
                    <div className={viewMode === "list" ? "w-48 flex-shrink-0" : ""}>
                      <FurnitureSVG className={viewMode === "list" ? "w-full h-32" : "w-full h-48"} />
                    </div>
                    <CardContent className={`p-6 ${viewMode === "list" ? "flex-1" : ""}`}>
                      <div className="flex gap-2 mb-2">
                        <Badge variant="secondary">{product.category}</Badge>
                        <Badge variant="outline">{product.material}</Badge>
                      </div>
                      <h3 className="text-xl font-semibold mb-2">{product.name}</h3>
                      <div className="flex items-center mb-2">
                        <div className="flex items-center">
                          {[...Array(5)].map((_, i) => (
                            <Star
                              key={i}
                              className={`w-4 h-4 ${i < Math.floor(product.rating) ? "text-yellow-400 fill-current" : "text-gray-300"}`}
                            />
                          ))}
                        </div>
                        <span className="text-sm text-gray-600 ml-2">
                          {product.rating} ({product.reviews} reviews)
                        </span>
                      </div>
                      <div className="flex items-center justify-between mb-4">
                        <div>
                          <span className="text-2xl font-bold text-blue-600">${product.price}</span>
                          <span className="text-lg text-gray-500 line-through ml-2">${product.originalPrice}</span>
                        </div>
                      </div>
                      <div className="flex gap-2 mb-4">
                        <Badge variant="outline">{product.style}</Badge>
                        <Badge variant="outline">{product.color}</Badge>
                        <Badge variant="outline">{product.size}</Badge>
                      </div>
                      <div className="flex gap-2">
                        <Link href={`/products/${product.id}`} className="flex-1">
                          <Button variant="outline" className="w-full bg-transparent">
                            View Details
                          </Button>
                        </Link>
                        <Button className="flex-1 bg-blue-600 hover:bg-blue-700">
                          <ShoppingCart className="w-4 h-4 mr-2" />
                          Add to Cart
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
