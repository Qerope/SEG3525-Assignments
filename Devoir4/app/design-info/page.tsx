import Link from "next/link"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import {
  User,
  Target,
  Lightbulb,
  Search,
  ShoppingCart,
  MessageSquare,
  Palette,
  Users,
  Megaphone,
  Info,
  Heart,
  ExternalLink,
  Github,
  Globe,
} from "lucide-react"

export default function DesignInfoPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="border-b bg-white">
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
              <Link href="/survey" className="text-gray-700 hover:text-blue-600 transition-colors">
                Share Feedback
              </Link>
            </nav>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        {/* Page Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Design Information & Report</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Documentation of UI/UX design decisions, system architecture, and verbal communication
            strategies for the ComfortCraft e-commerce platform.
          </p>
        </div>

        {/* Designer Information */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center">
              <User className="w-6 h-6 mr-2 text-blue-600" />
              Designer Information
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-semibold mb-2">Project Details</h3>
                <ul className="space-y-1 text-gray-700">
                  <li>
                    <strong>Designer:</strong> Hamed Tavakoli Dastjerdi
                  </li>
                  <li>
                    <strong>Group:</strong> Group 9
                  </li>
                  <li>
                    <strong>Student Number:</strong> 300321356
                  </li>
                  <li>
                    <strong>Course:</strong> SEG3525 - UI/UX Design
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold mb-2">Project Links</h3>
                <div className="space-y-2">
                  <div className="flex items-center">
                    <Globe className="w-4 h-4 mr-2 text-blue-600" />
                    <Link
                      href="https://qerope.github.io/SEG3525-Assignments/Devoir1/"
                      className="text-blue-600 hover:underline"
                    >
                      qerope.github.io/SEG3525-Assignments/Devoir1
                    </Link>
                    <ExternalLink className="w-3 h-3 ml-1" />
                  </div>
                  <div className="flex items-center">
                    <Github className="w-4 h-4 mr-2 text-gray-700" />
                    <Link href="https://github.com/Qerope/ecommerce-app" className="text-blue-600 hover:underline">
                      github.com/Qerope/ecommerce-app
                    </Link>
                    <ExternalLink className="w-3 h-3 ml-1" />
                  </div>
                  <div className="flex items-center">
                    <Globe className="w-4 h-4 mr-2 text-green-600" />
                    <Link href="https://ecommerce-app-sandy-two.vercel.app/" className="text-blue-600 hover:underline">
                      ecommerce-app-sandy-two.vercel.app
                    </Link>
                    <ExternalLink className="w-3 h-3 ml-1" />
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* E-commerce Objective */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center">
              <Target className="w-6 h-6 mr-2 text-blue-600" />
              E-commerce Objective
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold mb-3">Project Overview</h3>
                <div className="bg-blue-50 p-4 rounded-lg">
                  <p className="text-blue-900 font-medium text-lg">ComfortCraft</p>
                  <p className="text-blue-800">Premium Furniture E-commerce Platform</p>
                </div>
                <p className="mt-4 text-gray-700">
                  ComfortCraft is a sophisticated furniture e-commerce platform designed to provide customers with an
                  exceptional online shopping experience for premium home furnishings. The platform specializes in
                  high-quality furniture pieces across multiple categories including living room, bedroom, dining room,
                  and office furniture.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-3">Inspirational Sites</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="border rounded-lg p-4">
                    <h4 className="font-medium mb-2">West Elm</h4>
                    <p className="text-sm text-gray-600 mb-2">
                      Inspired the clean, modern aesthetic and room-based product categorization. Their use of lifestyle
                      imagery and clear product filtering influenced our design approach.
                    </p>
                    <Badge variant="outline">Visual Design</Badge>
                  </div>
                  <div className="border rounded-lg p-4">
                    <h4 className="font-medium mb-2">Wayfair</h4>
                    <p className="text-sm text-gray-600 mb-2">
                      Influenced our comprehensive faceted search system and detailed product specifications. Their
                      customer review system and checkout flow provided valuable UX insights.
                    </p>
                    <Badge variant="outline">Functionality</Badge>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Interactive Process and System Image Design */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center">
              <Lightbulb className="w-6 h-6 mr-2 text-blue-600" />
              Interactive Process & System Image Design
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-8">
              {/* Follow Instructions Process */}
              <div>
                <h3 className="text-lg font-semibold mb-4 flex items-center">
                  <ShoppingCart className="w-5 h-5 mr-2 text-green-600" />
                  Follow-Instructions Process (Purchase Flow)
                </h3>
                <div className="bg-green-50 p-4 rounded-lg mb-4">
                  <h4 className="font-medium mb-2">Progress Feedback System</h4>
                  <p className="text-sm text-gray-700">
                    We implemented a clear 3-step progress indicator that shows users exactly where they are in the
                    purchase process: Cart → Checkout → Confirmation. Each step is visually distinct with color coding
                    (blue for current, green for completed, gray for upcoming).
                  </p>
                </div>
                <div className="grid md:grid-cols-3 gap-4">
                  <div className="border rounded-lg p-3">
                    <h5 className="font-medium text-sm">Step 1: Cart Review</h5>
                    <p className="text-xs text-gray-600">
                      Users can modify quantities, apply promo codes, and see cost breakdown
                    </p>
                  </div>
                  <div className="border rounded-lg p-3">
                    <h5 className="font-medium text-sm">Step 2: Checkout</h5>
                    <p className="text-xs text-gray-600">
                      Multi-step form with delivery info, payment details, and order review
                    </p>
                  </div>
                  <div className="border rounded-lg p-3">
                    <h5 className="font-medium text-sm">Step 3: Confirmation</h5>
                    <p className="text-xs text-gray-600">
                      Order summary, delivery timeline, and next steps clearly communicated
                    </p>
                  </div>
                </div>
              </div>

              <Separator />

              {/* Exploration Process */}
              <div>
                <h3 className="text-lg font-semibold mb-4 flex items-center">
                  <Search className="w-5 h-5 mr-2 text-purple-600" />
                  Exploration Process (Faceted Search)
                </h3>
                <div className="bg-purple-50 p-4 rounded-lg mb-4">
                  <h4 className="font-medium mb-2">Semantic Network & Filter Design</h4>
                  <p className="text-sm text-gray-700">
                    Our faceted search system is built around the furniture buyer's mental model, incorporating multiple
                    dimensions that customers naturally consider when shopping for furniture.
                  </p>
                </div>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                  <div className="border rounded-lg p-3">
                    <h5 className="font-medium text-sm mb-2">Room Category</h5>
                    <div className="flex flex-wrap gap-1">
                      <Badge variant="secondary" className="text-xs">
                        Living Room
                      </Badge>
                      <Badge variant="secondary" className="text-xs">
                        Bedroom
                      </Badge>
                      <Badge variant="secondary" className="text-xs">
                        Dining Room
                      </Badge>
                      <Badge variant="secondary" className="text-xs">
                        Office
                      </Badge>
                    </div>
                  </div>
                  <div className="border rounded-lg p-3">
                    <h5 className="font-medium text-sm mb-2">Material</h5>
                    <div className="flex flex-wrap gap-1">
                      <Badge variant="outline" className="text-xs">
                        Wood
                      </Badge>
                      <Badge variant="outline" className="text-xs">
                        Metal
                      </Badge>
                      <Badge variant="outline" className="text-xs">
                        Leather
                      </Badge>
                      <Badge variant="outline" className="text-xs">
                        Fabric
                      </Badge>
                    </div>
                  </div>
                  <div className="border rounded-lg p-3">
                    <h5 className="font-medium text-sm mb-2">Style</h5>
                    <div className="flex flex-wrap gap-1">
                      <Badge variant="outline" className="text-xs">
                        Modern
                      </Badge>
                      <Badge variant="outline" className="text-xs">
                        Traditional
                      </Badge>
                      <Badge variant="outline" className="text-xs">
                        Scandinavian
                      </Badge>
                      <Badge variant="outline" className="text-xs">
                        Industrial
                      </Badge>
                    </div>
                  </div>
                  <div className="border rounded-lg p-3">
                    <h5 className="font-medium text-sm mb-2">Price Range</h5>
                    <p className="text-xs text-gray-600">Interactive slider for budget-based filtering</p>
                  </div>
                  <div className="border rounded-lg p-3">
                    <h5 className="font-medium text-sm mb-2">Color</h5>
                    <p className="text-xs text-gray-600">Visual color selection for aesthetic matching</p>
                  </div>
                  <div className="border rounded-lg p-3">
                    <h5 className="font-medium text-sm mb-2">Size</h5>
                    <p className="text-xs text-gray-600">Dimensional categories for space planning</p>
                  </div>
                </div>
              </div>

              <Separator />

              {/* Communication Process */}
              <div>
                <h3 className="text-lg font-semibold mb-4 flex items-center">
                  <MessageSquare className="w-5 h-5 mr-2 text-orange-600" />
                  Communication Process (Survey System)
                </h3>
                <div className="bg-orange-50 p-4 rounded-lg mb-4">
                  <h4 className="font-medium mb-2">Non-Intrusive & Engaging Design</h4>
                  <p className="text-sm text-gray-700">
                    The survey is strategically positioned post-purchase and uses engaging, conversational language with
                    emoji and incentives to encourage participation without being pushy.
                  </p>
                </div>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="border rounded-lg p-3">
                    <h5 className="font-medium text-sm mb-2">Timing Strategy</h5>
                    <ul className="text-xs text-gray-600 space-y-1">
                      <li>• Post-purchase confirmation page</li>
                      <li>• Optional link in navigation</li>
                      <li>• Incentivized with discount code</li>
                    </ul>
                  </div>
                  <div className="border rounded-lg p-3">
                    <h5 className="font-medium text-sm mb-2">Engagement Techniques</h5>
                    <ul className="text-xs text-gray-600 space-y-1">
                      <li>• Friendly, conversational tone</li>
                      <li>• Visual progress indicators</li>
                      <li>• Immediate reward (discount code)</li>
                      <li>• Multiple question formats</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Verbal Communication Design */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center">
              <Users className="w-6 h-6 mr-2 text-blue-600" />
              Verbal Communication Design
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-8">
              {/* Writer/Reader Model */}
              <div>
                <h3 className="text-lg font-semibold mb-4 flex items-center">
                  <Palette className="w-5 h-5 mr-2 text-indigo-600" />
                  Writer/Reader Model
                </h3>
                <div className="bg-indigo-50 p-4 rounded-lg mb-4">
                  <h4 className="font-medium mb-2">Brand Voice & Consistency</h4>
                  <p className="text-sm text-gray-700">
                    ComfortCraft speaks as a knowledgeable, friendly furniture expert to design-conscious homeowners who
                    value quality and style. The tone is professional yet approachable, informative yet inspiring.
                  </p>
                </div>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="border rounded-lg p-4">
                    <h5 className="font-medium mb-2">Core Voice Attributes</h5>
                    <ul className="text-sm text-gray-700 space-y-1">
                      <li>
                        • <strong>Expert:</strong> Knowledgeable about furniture and design
                      </li>
                      <li>
                        • <strong>Approachable:</strong> Friendly and accessible language
                      </li>
                      <li>
                        • <strong>Quality-focused:</strong> Emphasizes craftsmanship and durability
                      </li>
                      <li>
                        • <strong>Inspiring:</strong> Helps customers envision their ideal space
                      </li>
                    </ul>
                  </div>
                  <div className="border rounded-lg p-4">
                    <h5 className="font-medium mb-2">Conversational Effects</h5>
                    <ul className="text-sm text-gray-700 space-y-1">
                      <li>• Survey uses "We'd love to hear from you!"</li>
                      <li>• Product descriptions use "you'll love"</li>
                      <li>• Confirmation page: "Thank you for choosing ComfortCraft"</li>
                      <li>• Consistent use of inclusive pronouns</li>
                    </ul>
                  </div>
                </div>
              </div>

              <Separator />

              {/* Communication Objectives */}
              <div>
                <h3 className="text-lg font-semibold mb-4">Three Communication Objectives</h3>

                <div className="space-y-6">
                  {/* Call to Action */}
                  <div className="border-l-4 border-red-500 pl-4">
                    <h4 className="font-semibold mb-2 flex items-center">
                      <Megaphone className="w-4 h-4 mr-2 text-red-500" />
                      Call to Action
                    </h4>
                    <div className="bg-red-50 p-3 rounded-lg mb-3">
                      <p className="text-sm text-red-800 font-medium">
                        Promotional language designed to drive immediate action and create urgency.
                      </p>
                    </div>
                    <div className="space-y-2 text-sm">
                      <div className="bg-white p-2 rounded border">
                        <strong>Example:</strong> "Transform Your Space with Premium Furniture! Save up to 40% on
                        selected items!"
                      </div>
                      <div className="bg-white p-2 rounded border">
                        <strong>Example:</strong> "⚡ Flash Sale: Free Delivery on Orders Over $500!"
                      </div>
                      <div className="bg-white p-2 rounded border">
                        <strong>Example:</strong> "Shop Now & Save Big! 🔥"
                      </div>
                    </div>
                  </div>

                  {/* Inform */}
                  <div className="border-l-4 border-blue-500 pl-4">
                    <h4 className="font-semibold mb-2 flex items-center">
                      <Info className="w-4 h-4 mr-2 text-blue-500" />
                      Inform
                    </h4>
                    <div className="bg-blue-50 p-3 rounded-lg mb-3">
                      <p className="text-sm text-blue-800 font-medium">
                        Clear, factual information to help customers make informed purchasing decisions.
                      </p>
                    </div>
                    <div className="space-y-2 text-sm">
                      <div className="bg-white p-2 rounded border">
                        <strong>Example:</strong> "Each piece undergoes rigorous quality testing. We offer a
                        comprehensive 5-year warranty on all structural components."
                      </div>
                      <div className="bg-white p-2 rounded border">
                        <strong>Example:</strong> "Made from premium solid oak wood, it features clean lines and a
                        natural finish that highlights the wood's beautiful grain patterns."
                      </div>
                      <div className="bg-white p-2 rounded border">
                        <strong>Example:</strong> "Dimensions: 72\" L x 36\" W x 30\" H | Weight: 85 lbs | Assembly
                        Required"
                      </div>
                    </div>
                  </div>

                  {/* Build Connection */}
                  <div className="border-l-4 border-green-500 pl-4">
                    <h4 className="font-semibold mb-2 flex items-center">
                      <Heart className="w-4 h-4 mr-2 text-green-500" />
                      Build Connection
                    </h4>
                    <div className="bg-green-50 p-3 rounded-lg mb-3">
                      <p className="text-sm text-green-800 font-medium">
                        Warm, engaging language that creates emotional connection and encourages participation.
                      </p>
                    </div>
                    <div className="space-y-2 text-sm">
                      <div className="bg-white p-2 rounded border">
                        <strong>Example:</strong> "We'd Love to Hear From You! ✨ Your experience matters deeply to us."
                      </div>
                      <div className="bg-white p-2 rounded border">
                        <strong>Example:</strong> "Thank You So Much! 💝 Your feedback means the world to us!"
                      </div>
                      <div className="bg-white p-2 rounded border">
                        <strong>Example:</strong> "Help us understand how we can make your furniture shopping journey
                        even more delightful and seamless."
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* High-Fidelity Prototype */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center">
              <Palette className="w-6 h-6 mr-2 text-blue-600" />
              High-Fidelity Prototype & Visual Design
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold mb-4">Visual Design Choices</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-medium mb-3">Color Palette</h4>
                    <div className="space-y-2">
                      <div className="flex items-center">
                        <div className="w-6 h-6 bg-blue-600 rounded mr-3"></div>
                        <span className="text-sm">Primary Blue (#3B82F6) - Trust, reliability</span>
                      </div>
                      <div className="flex items-center">
                        <div className="w-6 h-6 bg-gray-900 rounded mr-3"></div>
                        <span className="text-sm">Dark Gray (#111827) - Sophistication</span>
                      </div>
                      <div className="flex items-center">
                        <div className="w-6 h-6 bg-green-600 rounded mr-3"></div>
                        <span className="text-sm">Success Green (#059669) - Positive actions</span>
                      </div>
                      <div className="flex items-center">
                        <div className="w-6 h-6 bg-red-500 rounded mr-3"></div>
                        <span className="text-sm">Accent Red (#EF4444) - Urgency, sales</span>
                      </div>
                    </div>
                  </div>
                  <div>
                    <h4 className="font-medium mb-3">Typography & Layout</h4>
                    <ul className="text-sm text-gray-700 space-y-1">
                      <li>
                        • <strong>Font:</strong> Inter - Clean, modern, highly readable
                      </li>
                      <li>
                        • <strong>Hierarchy:</strong> Clear size differentiation for headings
                      </li>
                      <li>
                        • <strong>Spacing:</strong> Generous whitespace for premium feel
                      </li>
                      <li>
                        • <strong>Grid:</strong> Responsive 12-column layout system
                      </li>
                      <li>
                        • <strong>Cards:</strong> Consistent shadow and border radius
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Generative AI Acknowledgment */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center">
              <Lightbulb className="w-6 h-6 mr-2 text-purple-600" />
              Generative AI Acknowledgment
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="bg-purple-50 p-4 rounded-lg">
                <h4 className="font-medium mb-2">AI Tools Used & Interactions</h4>
                <p className="text-sm text-gray-700">
                  This project utilized ChatGPT mainly to help speed up the process of development where appropriate
                </p>
              </div>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="border rounded-lg p-4">
                  <h5 className="font-medium mb-2">Coding - ChatGPT</h5>
                  <ul className="text-sm text-gray-700 space-y-1">
                    <li>• React code debugging</li>
                    <li>• Product dummy info generation</li>
                    <li>• Other content generation</li>
                  </ul>
                </div>
                <div className="border rounded-lg p-4">
                  <h5 className="font-medium mb-2">Design - ChatGPT</h5>
                  <ul className="text-sm text-gray-700 space-y-1">
                    <li>• Dummy placeholder images/logos</li>
                    <li>• Report layout and writing improvement</li>
                    <li>• Start design inspirations help</li>
                  </ul>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Navigation Links */}
        <div className="text-center">
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/">
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium">
                Back to Home
              </button>
            </Link>
            <Link href="/products">
              <button className="border border-blue-600 text-blue-600 hover:bg-blue-50 px-6 py-3 rounded-lg font-medium">
                Browse Furniture
              </button>
            </Link>
            <Link href="/survey">
              <button className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-lg font-medium">
                Take Survey
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
