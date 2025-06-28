import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { CheckCircle, Package, Truck, Calendar, Star } from "lucide-react"

export default function ConfirmationPage() {
  const orderNumber = "CC-" + Math.random().toString(36).substr(2, 9).toUpperCase()
  const estimatedDelivery = new Date(Date.now() + 7 * 24 * 60 * 60 * 1000).toLocaleDateString("en-US", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  })

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="border-b bg-white">
        <div className="container mx-auto px-4 py-4">
          <Link href="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">CC</span>
            </div>
            <span className="text-2xl font-bold text-blue-600">ComfortCraft</span>
          </Link>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        {/* Progress Indicator */}
        <div className="mb-8">
          <div className="flex items-center justify-center space-x-4 mb-4">
            <div className="flex items-center">
              <div className="w-8 h-8 bg-green-600 text-white rounded-full flex items-center justify-center text-sm font-medium">
                ✓
              </div>
              <span className="ml-2 text-green-600 font-medium">Cart</span>
            </div>
            <div className="w-16 h-0.5 bg-green-600"></div>
            <div className="flex items-center">
              <div className="w-8 h-8 bg-green-600 text-white rounded-full flex items-center justify-center text-sm font-medium">
                ✓
              </div>
              <span className="ml-2 text-green-600 font-medium">Checkout</span>
            </div>
            <div className="w-16 h-0.5 bg-green-600"></div>
            <div className="flex items-center">
              <div className="w-8 h-8 bg-green-600 text-white rounded-full flex items-center justify-center text-sm font-medium">
                ✓
              </div>
              <span className="ml-2 text-green-600 font-medium">Confirmed</span>
            </div>
          </div>
        </div>

        {/* Success Message */}
        <div className="text-center mb-12">
          <CheckCircle className="w-16 h-16 text-green-600 mx-auto mb-4" />
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Order Confirmed!</h1>
          <p className="text-xl text-gray-600 mb-4">
            Thank you for choosing ComfortCraft. Your furniture is on its way!
          </p>
          <div className="bg-green-50 border border-green-200 rounded-lg p-4 inline-block">
            <p className="text-green-800 font-medium">
              Order Number: <span className="font-bold">{orderNumber}</span>
            </p>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* Order Details */}
          <Card>
            <CardContent className="p-6">
              <h2 className="text-xl font-semibold mb-4 flex items-center">
                <Package className="w-5 h-5 mr-2 text-blue-600" />
                Order Details
              </h2>

              <div className="space-y-4">
                <div className="flex justify-between items-center pb-3 border-b">
                  <div>
                    <h3 className="font-medium">Scandinavian Oak Dining Table</h3>
                    <p className="text-sm text-gray-600">Quantity: 1</p>
                  </div>
                  <span className="font-semibold">$899</span>
                </div>

                <div className="flex justify-between items-center pb-3 border-b">
                  <div>
                    <h3 className="font-medium">Modern Leather Sofa</h3>
                    <p className="text-sm text-gray-600">Quantity: 1</p>
                  </div>
                  <span className="font-semibold">$1,299</span>
                </div>

                <div className="space-y-2 pt-2">
                  <div className="flex justify-between">
                    <span>Subtotal:</span>
                    <span>$2,198</span>
                  </div>
                  <div className="flex justify-between text-green-600">
                    <span>Shipping:</span>
                    <span>FREE</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Tax:</span>
                    <span>$175.84</span>
                  </div>
                  <div className="flex justify-between text-lg font-bold pt-2 border-t">
                    <span>Total:</span>
                    <span>$2,373.84</span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Delivery Information */}
          <Card>
            <CardContent className="p-6">
              <h2 className="text-xl font-semibold mb-4 flex items-center">
                <Truck className="w-5 h-5 mr-2 text-blue-600" />
                Delivery Information
              </h2>

              <div className="space-y-4">
                <div className="flex items-center p-3 bg-blue-50 rounded-lg">
                  <Calendar className="w-5 h-5 text-blue-600 mr-3" />
                  <div>
                    <p className="font-medium text-blue-900">Estimated Delivery</p>
                    <p className="text-blue-700">{estimatedDelivery}</p>
                  </div>
                </div>

                <div className="space-y-2">
                  <h3 className="font-medium">Delivery Address:</h3>
                  <p className="text-gray-700">
                    John Smith
                    <br />
                    123 Main Street
                    <br />
                    Anytown, ST 12345
                    <br />
                    (555) 123-4567
                  </p>
                </div>

                <div className="bg-gray-50 p-3 rounded-lg">
                  <h4 className="font-medium mb-2">What happens next?</h4>
                  <ul className="text-sm text-gray-700 space-y-1">
                    <li>• You'll receive an email confirmation shortly</li>
                    <li>• We'll notify you when your order ships</li>
                    <li>• Track your delivery with the provided link</li>
                    <li>• Our team will contact you to schedule delivery</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Action Buttons */}
        <div className="text-center mt-12 space-y-4">
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/products">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
                Continue Shopping
              </Button>
            </Link>
            <Link href="/survey">
              <Button size="lg" variant="outline" className="flex items-center bg-transparent">
                <Star className="w-4 h-4 mr-2" />
                Share Your Experience
              </Button>
            </Link>
          </div>

          <p className="text-gray-600">
            Questions about your order? Contact us at{" "}
            <a href="mailto:support@comfortcraft.com" className="text-blue-600 hover:underline">
              support@comfortcraft.com
            </a>
          </p>
        </div>

        {/* Call to Action for Survey */}
        <div className="mt-16 bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg p-8 text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Help Us Improve Your Experience! 🌟</h2>
          <p className="text-gray-700 mb-6 max-w-2xl mx-auto">
            Your feedback is incredibly valuable to us. Take a moment to share your thoughts about your shopping
            experience and help us serve you better in the future.
          </p>
          <Link href="/survey">
            <Button size="lg" className="bg-purple-600 hover:bg-purple-700">
              Take Our Quick Survey
            </Button>
          </Link>
        </div>
      </div>
    </div>
  )
}
