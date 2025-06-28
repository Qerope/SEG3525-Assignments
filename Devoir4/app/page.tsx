import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Star, ShoppingCart, Truck, Shield, Award, ArrowRight } from "lucide-react"

// Custom SVG Components for placeholders
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
      ComfortCraft Furniture
    </text>
  </svg>
)

const LogoSVG = ({ className = "w-8 h-8" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="40" height="40" rx="8" fill="#3b82f6" />
    <rect x="8" y="12" width="24" height="16" rx="2" fill="white" />
    <rect x="12" y="16" width="4" height="4" fill="#3b82f6" />
    <rect x="20" y="16" width="4" height="4" fill="#3b82f6" />
    <rect x="28" y="16" width="4" height="4" fill="#3b82f6" />
    <rect x="12" y="22" width="16" height="2" fill="#3b82f6" />
  </svg>
)

const featuredProducts = [
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
  },
]

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="border-b bg-white sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center space-x-2">
              <LogoSVG />
              <span className="text-2xl font-bold text-blue-600">ComfortCraft</span>
            </Link>

            <nav className="hidden md:flex items-center space-x-8">
              <Link href="/products" className="text-gray-700 hover:text-blue-600 transition-colors">
                Browse Furniture
              </Link>
              <Link href="/design-info" className="text-gray-700 hover:text-blue-600 transition-colors">
                Design Info
              </Link>
              <Link href="/survey" className="text-gray-700 hover:text-blue-600 transition-colors">
                Share Feedback
              </Link>
            </nav>

            <div className="flex items-center space-x-4">
              <Link href="/cart">
                <Button variant="outline" size="sm" className="relative bg-transparent">
                  <ShoppingCart className="w-4 h-4" />
                  <span className="ml-2">Cart</span>
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section - Improved */}
      <section className="relative bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 py-24 overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <svg className="w-full h-full" viewBox="0 0 100 100" fill="none">
            <defs>
              <pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse">
                <path d="M 10 0 L 0 0 0 10" fill="none" stroke="white" strokeWidth="0.5" />
              </pattern>
            </defs>
            <rect width="100" height="100" fill="url(#grid)" />
          </svg>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="text-white space-y-8">
              <div className="space-y-6">
                <div className="inline-flex items-center bg-blue-600/20 backdrop-blur-sm border border-blue-400/30 rounded-full px-4 py-2">
                  <span className="text-blue-300 text-sm font-medium">✨ Premium Furniture Collection</span>
                </div>

                <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
                  Transform Your
                  <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
                    Living Space
                  </span>
                </h1>

                <p className="text-xl text-gray-300 leading-relaxed max-w-lg">
                  Discover handcrafted furniture that combines timeless elegance with modern comfort. Each piece is
                  designed to elevate your home and reflect your unique style.
                </p>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/products">
                  <Button
                    size="lg"
                    className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-8 py-4 text-lg font-semibold shadow-xl hover:shadow-2xl transition-all duration-300"
                  >
                    Explore Collection
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Button>
                </Link>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-2 border-white/30 text-white hover:bg-white/10 backdrop-blur-sm px-8 py-4 text-lg font-semibold bg-transparent"
                >
                  Watch Our Story
                </Button>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-8 pt-8 border-t border-white/20">
                <div>
                  <div className="text-3xl font-bold text-blue-400">10K+</div>
                  <div className="text-gray-400 text-sm">Happy Customers</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-blue-400">500+</div>
                  <div className="text-gray-400 text-sm">Premium Products</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-blue-400">5★</div>
                  <div className="text-gray-400 text-sm">Average Rating</div>
                </div>
              </div>
            </div>

            {/* Right Content - Hero Image */}
            <div className="relative">
              <div className="relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm rounded-3xl p-8 border border-white/20">
                <FurnitureSVG className="w-full h-96" />

                {/* Floating Elements */}
                <div className="absolute -top-4 -right-4 bg-red-500 text-white px-4 py-2 rounded-full text-sm font-bold shadow-lg">
                  40% OFF
                </div>

                <div className="absolute -bottom-4 -left-4 bg-white/90 backdrop-blur-sm text-gray-900 px-4 py-3 rounded-xl shadow-lg">
                  <div className="flex items-center space-x-2">
                    <Truck className="w-4 h-4 text-green-600" />
                    <span className="text-sm font-medium">Free Delivery</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Promotional Banner */}
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-r from-red-600 to-red-500 text-white py-3">
          <div className="container mx-auto px-4">
            <div className="flex items-center justify-center space-x-4 text-center">
              <span className="font-semibold">🔥 Limited Time: Winter Sale - Up to 40% Off + Free Shipping!</span>
              <Link href="/products">
                <Button size="sm" variant="secondary" className="bg-white text-red-600 hover:bg-gray-100">
                  Shop Now
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section - Inform */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Why Choose ComfortCraft?</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Truck className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Free Delivery</h3>
              <p className="text-gray-600">
                We provide complimentary delivery service for all orders above $500. Our professional team ensures safe
                handling of your furniture.
              </p>
            </div>
            <div className="text-center">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Quality Guarantee</h3>
              <p className="text-gray-600">
                Each piece undergoes rigorous quality testing. We offer a comprehensive 5-year warranty on all
                structural components.
              </p>
            </div>
            <div className="text-center">
              <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Expert Craftsmanship</h3>
              <p className="text-gray-600">
                Our skilled artisans use premium materials and time-tested techniques to create furniture that lasts
                generations.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Featured Collections</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Explore our carefully curated selection of premium furniture pieces, each designed to enhance your living
              experience.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {featuredProducts.map((product) => (
              <Card key={product.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                <div className="relative">
                  <FurnitureSVG />
                  <Badge className="absolute top-4 left-4 bg-red-500">
                    Save ${product.originalPrice - product.price}
                  </Badge>
                </div>
                <CardContent className="p-6">
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
                    <Badge variant="secondary">{product.category}</Badge>
                    <Badge variant="outline">{product.material}</Badge>
                  </div>
                  <Link href={`/products/${product.id}`}>
                    <Button className="w-full bg-blue-600 hover:bg-blue-700">View Details</Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link href="/products">
              <Button size="lg" variant="outline" className="px-8 bg-transparent">
                Browse All Furniture
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Transform Your Home?</h2>
          <p className="text-xl mb-8 opacity-90">
            Join thousands of satisfied customers who've created their dream spaces with ComfortCraft.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/products">
              <Button size="lg" variant="secondary" className="px-8">
                Start Shopping Now!
              </Button>
            </Link>
            <Link href="/survey">
              <Button
                size="lg"
                variant="outline"
                className="px-8 text-white border-white hover:bg-white hover:text-blue-600 bg-transparent"
              >
                Share Your Experience
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <LogoSVG className="w-8 h-8" />
                <span className="text-xl font-bold">ComfortCraft</span>
              </div>
              <p className="text-gray-400">Creating beautiful, comfortable spaces with premium furniture since 2020.</p>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <Link href="/products" className="hover:text-white">
                    Browse Furniture
                  </Link>
                </li>
                <li>
                  <Link href="/design-info" className="hover:text-white">
                    Design Info
                  </Link>
                </li>
                <li>
                  <Link href="/survey" className="hover:text-white">
                    Customer Survey
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Categories</h3>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <Link href="/products?category=living-room" className="hover:text-white">
                    Living Room
                  </Link>
                </li>
                <li>
                  <Link href="/products?category=bedroom" className="hover:text-white">
                    Bedroom
                  </Link>
                </li>
                <li>
                  <Link href="/products?category=dining-room" className="hover:text-white">
                    Dining Room
                  </Link>
                </li>
                <li>
                  <Link href="/products?category=office" className="hover:text-white">
                    Office
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Contact</h3>
              <p className="text-gray-400">
                Email: hello@comfortcraft.com
                <br />
                Phone: (555) 123-4567
                <br />
                Mon-Fri: 9AM-6PM EST
              </p>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 ComfortCraft. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
