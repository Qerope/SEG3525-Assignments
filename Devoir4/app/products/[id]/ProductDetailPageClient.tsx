"use client"

import { useState } from "react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Star, ShoppingCart, Heart, Share2, Truck, Shield, RotateCcw } from "lucide-react"
import { Label } from "@/components/ui/label"

// Custom SVG for furniture placeholder
const FurnitureSVG = ({ className = "w-full h-96" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 600 400" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="600" height="400" fill="#f8fafc" />
    <rect x="75" y="100" width="450" height="200" rx="12" fill="#e2e8f0" />
    <rect x="100" y="130" width="120" height="80" rx="6" fill="#cbd5e1" />
    <rect x="240" y="130" width="120" height="80" rx="6" fill="#cbd5e1" />
    <rect x="380" y="130" width="90" height="80" rx="6" fill="#cbd5e1" />
    <rect x="100" y="230" width="370" height="30" rx="3" fill="#94a3b8" />
    <circle cx="120" cy="320" r="12" fill="#64748b" />
    <circle cx="450" cy="320" r="12" fill="#64748b" />
    <text x="300" y="360" textAnchor="middle" className="fill-slate-600 text-lg font-medium">
      ComfortCraft Premium
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
    material: "Solid Oak Wood",
    style: "Scandinavian",
    color: "Natural Oak",
    size: 'Large (72" x 36")',
    description:
      "This beautifully crafted dining table combines Scandinavian minimalism with exceptional functionality. Made from premium solid oak wood, it features clean lines and a natural finish that highlights the wood's beautiful grain patterns.",
    features: [
      "Solid oak construction for durability",
      "Seats 6-8 people comfortably",
      "Natural oil finish protects and enhances wood grain",
      "Easy assembly with included hardware",
      "Sustainable sourcing certified",
    ],
    specifications: {
      Dimensions: '72" L x 36" W x 30" H',
      Weight: "85 lbs",
      Material: "Solid Oak Wood",
      Finish: "Natural Oil",
      Assembly: "Required (30-45 minutes)",
      Warranty: "5 years structural",
    },
    inStock: true,
    stockCount: 12,
  },
]

export default function ProductDetailPageClient({ params }: { params: { id: string } }) {
  const router = useRouter()
  const [quantity, setQuantity] = useState(1)
  const [selectedImage, setSelectedImage] = useState(0)

  const product = products[0] // Using first product as example

  const handleAddToCart = () => {
    // Add to cart logic here
    router.push("/cart")
  }

  return (
    <div className="min-h-screen bg-white">
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
              <Link href="/products" className="text-gray-700 hover:text-blue-600 transition-colors">
                Browse Furniture
              </Link>
              <Link href="/design-info" className="text-gray-700 hover:text-blue-600 transition-colors">
                Design Info
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

      {/* Breadcrumb */}
      <div className="container mx-auto px-4 py-4">
        <nav className="text-sm text-gray-600">
          <Link href="/" className="hover:text-blue-600">
            Home
          </Link>
          <span className="mx-2">/</span>
          <Link href="/products" className="hover:text-blue-600">
            Products
          </Link>
          <span className="mx-2">/</span>
          <span className="text-gray-900">{product.name}</span>
        </nav>
      </div>

      <div className="container mx-auto px-4 py-8">
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Product Images */}
          <div className="space-y-4">
            <div className="aspect-square bg-gray-100 rounded-lg overflow-hidden">
              <FurnitureSVG />
            </div>
            <div className="grid grid-cols-4 gap-2">
              {[...Array(4)].map((_, i) => (
                <button
                  key={i}
                  className={`aspect-square bg-gray-100 rounded-lg overflow-hidden border-2 ${
                    selectedImage === i ? "border-blue-600" : "border-transparent"
                  }`}
                  onClick={() => setSelectedImage(i)}
                >
                  <FurnitureSVG className="w-full h-full" />
                </button>
              ))}
            </div>
          </div>

          {/* Product Info */}
          <div className="space-y-6">
            <div>
              <div className="flex gap-2 mb-2">
                <Badge variant="secondary">{product.category}</Badge>
                <Badge variant="outline">{product.style}</Badge>
              </div>
              <h1 className="text-3xl font-bold text-gray-900 mb-4">{product.name}</h1>

              <div className="flex items-center mb-4">
                <div className="flex items-center">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`w-5 h-5 ${i < Math.floor(product.rating) ? "text-yellow-400 fill-current" : "text-gray-300"}`}
                    />
                  ))}
                </div>
                <span className="text-gray-600 ml-2">
                  {product.rating} ({product.reviews} customer reviews)
                </span>
              </div>

              <div className="flex items-center gap-4 mb-6">
                <span className="text-3xl font-bold text-blue-600">${product.price}</span>
                <span className="text-xl text-gray-500 line-through">${product.originalPrice}</span>
                <Badge className="bg-red-500">Save ${product.originalPrice - product.price}</Badge>
              </div>

              <p className="text-gray-700 leading-relaxed mb-6">{product.description}</p>

              {/* Stock Status */}
              <div className="flex items-center gap-2 mb-6">
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                <span className="text-green-700 font-medium">In Stock ({product.stockCount} available)</span>
              </div>

              {/* Quantity and Add to Cart */}
              <div className="space-y-4 mb-6">
                <div className="flex items-center gap-4">
                  <div>
                    <Label htmlFor="quantity" className="text-sm font-medium text-gray-700 mb-2 block">
                      Quantity
                    </Label>
                    <div className="flex items-center border rounded-lg">
                      <button
                        className="px-4 py-2 hover:bg-gray-100 transition-colors"
                        onClick={() => setQuantity(Math.max(1, quantity - 1))}
                      >
                        -
                      </button>
                      <span className="px-4 py-2 border-x min-w-[4rem] text-center font-medium">{quantity}</span>
                      <button
                        className="px-4 py-2 hover:bg-gray-100 transition-colors"
                        onClick={() => setQuantity(quantity + 1)}
                      >
                        +
                      </button>
                    </div>
                  </div>

                  <div className="flex-1">
                    <Label className="text-sm font-medium text-gray-700 mb-2 block">Total Price</Label>
                    <div className="text-2xl font-bold text-blue-600">
                      ${(product.price * quantity).toLocaleString()}
                    </div>
                  </div>
                </div>

                <Button
                  size="lg"
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white py-4"
                  onClick={handleAddToCart}
                >
                  <ShoppingCart className="w-5 h-5 mr-2" />
                  Add to Cart - ${(product.price * quantity).toLocaleString()}
                </Button>
              </div>

              <div className="flex gap-3 mb-6">
                <Button variant="outline" size="sm" className="flex-1 bg-transparent">
                  <Heart className="w-4 h-4 mr-2" />
                  Add to Wishlist
                </Button>
                <Button variant="outline" size="sm" className="flex-1 bg-transparent">
                  <Share2 className="w-4 h-4 mr-2" />
                  Share Product
                </Button>
              </div>
            </div>

            {/* Service Features */}
            <div className="grid grid-cols-3 gap-4 py-6 border-t">
              <div className="text-center">
                <Truck className="w-8 h-8 text-blue-600 mx-auto mb-2" />
                <p className="text-sm font-medium">Free Delivery</p>
                <p className="text-xs text-gray-600">Orders over $500</p>
              </div>
              <div className="text-center">
                <Shield className="w-8 h-8 text-green-600 mx-auto mb-2" />
                <p className="text-sm font-medium">5-Year Warranty</p>
                <p className="text-xs text-gray-600">Structural guarantee</p>
              </div>
              <div className="text-center">
                <RotateCcw className="w-8 h-8 text-purple-600 mx-auto mb-2" />
                <p className="text-sm font-medium">30-Day Returns</p>
                <p className="text-xs text-gray-600">Hassle-free policy</p>
              </div>
            </div>
          </div>
        </div>

        {/* Product Details Tabs */}
        <div className="mt-16">
          <Tabs defaultValue="features" className="w-full">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="features">Features & Benefits</TabsTrigger>
              <TabsTrigger value="specifications">Specifications</TabsTrigger>
              <TabsTrigger value="reviews">Customer Reviews</TabsTrigger>
            </TabsList>

            <TabsContent value="features" className="mt-6">
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-4">Key Features</h3>
                  <ul className="space-y-3">
                    {product.features.map((feature, index) => (
                      <li key={index} className="flex items-start">
                        <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="specifications" className="mt-6">
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-4">Technical Specifications</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {Object.entries(product.specifications).map(([key, value]) => (
                      <div key={key} className="flex justify-between py-2 border-b">
                        <span className="font-medium text-gray-900">{key}:</span>
                        <span className="text-gray-700">{value}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="reviews" className="mt-6">
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-4">Customer Reviews</h3>
                  <div className="space-y-6">
                    <div className="border-b pb-4">
                      <div className="flex items-center mb-2">
                        <div className="flex items-center">
                          {[...Array(5)].map((_, i) => (
                            <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                          ))}
                        </div>
                        <span className="ml-2 font-medium">Sarah M.</span>
                        <span className="ml-2 text-gray-500 text-sm">Verified Purchase</span>
                      </div>
                      <p className="text-gray-700">
                        "Absolutely love this dining table! The quality is exceptional and it looks beautiful in our
                        dining room. Assembly was straightforward and the finish is gorgeous."
                      </p>
                    </div>
                    <div className="border-b pb-4">
                      <div className="flex items-center mb-2">
                        <div className="flex items-center">
                          {[...Array(5)].map((_, i) => (
                            <Star
                              key={i}
                              className={`w-4 h-4 ${i < 4 ? "text-yellow-400 fill-current" : "text-gray-300"}`}
                            />
                          ))}
                        </div>
                        <span className="ml-2 font-medium">Mike R.</span>
                        <span className="ml-2 text-gray-500 text-sm">Verified Purchase</span>
                      </div>
                      <p className="text-gray-700">
                        "Great table, very sturdy and well-made. The only minor issue was that delivery took a bit
                        longer than expected, but the quality makes up for it."
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  )
}
