"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Checkbox } from "@/components/ui/checkbox"
import { Star, Heart, Send, Gift } from "lucide-react"

export default function SurveyPage() {
  const [formData, setFormData] = useState({
    overallRating: "",
    easeOfUse: "",
    productSelection: "",
    checkoutExperience: "",
    favoriteFeatures: [] as string[],
    improvements: "",
    recommend: "",
    additionalComments: "",
    email: "",
    newsletter: false,
  })

  const [submitted, setSubmitted] = useState(false)
  const [currentStep, setCurrentStep] = useState(1)

  const handleInputChange = (field: string, value: string | boolean | string[]) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  const handleFeatureToggle = (feature: string, checked: boolean) => {
    setFormData((prev) => ({
      ...prev,
      favoriteFeatures: checked
        ? [...prev.favoriteFeatures, feature]
        : prev.favoriteFeatures.filter((f) => f !== feature),
    }))
  }

  const handleSubmit = () => {
    setSubmitted(true)
  }

  const features = [
    "Easy product search and filtering",
    "Detailed product information",
    "High-quality product images",
    "Simple checkout process",
    "Clear pricing and shipping info",
    "Responsive customer service",
    "Fast website loading",
    "Mobile-friendly design",
  ]

  if (submitted) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-purple-50 via-blue-50 to-indigo-50">
        {/* Header */}
        <header className="border-b bg-white/80 backdrop-blur-sm">
          <div className="container mx-auto px-4 py-4">
            <Link href="/" className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">CC</span>
              </div>
              <span className="text-2xl font-bold text-blue-600">ComfortCraft</span>
            </Link>
          </div>
        </header>

        <div className="container mx-auto px-4 py-16 text-center">
          <div className="max-w-2xl mx-auto">
            {/* Success Animation */}
            <div className="relative mb-8">
              <div className="w-24 h-24 bg-gradient-to-r from-green-400 to-green-600 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                <Heart className="w-12 h-12 text-white animate-pulse" />
              </div>
              <div className="absolute inset-0 w-24 h-24 bg-green-400 rounded-full mx-auto animate-ping opacity-20"></div>
            </div>

            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Thank You So Much!
              <span className="text-green-600">💝</span>
            </h1>

            <p className="text-xl text-gray-700 mb-8 leading-relaxed">
              Your feedback is incredibly valuable to us! We're thrilled that you took the time to share your thoughts.
              Your insights help us create even better experiences for furniture lovers like yourself.
            </p>

            {/* Reward Card */}
            <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl p-8 shadow-2xl mb-8 text-white">
              <Gift className="w-16 h-16 mx-auto mb-4 text-yellow-300" />
              <h2 className="text-2xl font-bold mb-3">Special Thank You Gift!</h2>
              <p className="text-purple-100 mb-4 text-lg">
                As a token of our appreciation, enjoy 15% off your next purchase:
              </p>
              <div className="bg-white/20 backdrop-blur-sm border-2 border-white/30 rounded-xl p-6 inline-block">
                <div className="text-3xl font-bold text-yellow-300 mb-2">THANKYOU15</div>
                <p className="text-sm text-purple-100">Valid for 30 days • No minimum purchase</p>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/products">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-8 py-4 shadow-lg"
                >
                  Continue Shopping
                </Button>
              </Link>
              <Link href="/">
                <Button size="lg" variant="outline" className="px-8 py-4 bg-transparent">
                  Back to Home
                </Button>
              </Link>
            </div>

            {/* Additional Info */}
            <div className="mt-12 bg-white/60 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <h3 className="font-semibold text-gray-900 mb-3">What happens next?</h3>
              <div className="grid md:grid-cols-3 gap-4 text-sm text-gray-700">
                <div>
                  <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-2">
                    <span className="text-blue-600 font-bold">1</span>
                  </div>
                  <p>We'll review your feedback carefully</p>
                </div>
                <div>
                  <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-2">
                    <span className="text-purple-600 font-bold">2</span>
                  </div>
                  <p>Your discount code is ready to use</p>
                </div>
                <div>
                  <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-2">
                    <span className="text-green-600 font-bold">3</span>
                  </div>
                  <p>We'll implement improvements based on your input</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50">
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
              <Link href="/design-info" className="text-gray-700 hover:text-blue-600 transition-colors">
                Design Info
              </Link>
            </nav>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        <div className="max-w-3xl mx-auto">
          {/* Header Section - Build Connection */}
          <div className="text-center mb-12">
            <Star className="w-12 h-12 text-yellow-500 mx-auto mb-4" />
            <h1 className="text-3xl font-bold text-gray-900 mb-4">We'd Love to Hear From You! ✨</h1>
            <p className="text-xl text-gray-700 mb-6">
              Your experience matters deeply to us. Help us understand how we can make your furniture shopping journey
              even more delightful and seamless.
            </p>
            <div className="bg-white rounded-lg p-4 inline-block shadow-sm">
              <p className="text-purple-700 font-medium">🎁 Complete our survey and get a special discount code!</p>
            </div>
          </div>

          <Card className="shadow-lg">
            <CardHeader>
              <CardTitle className="text-2xl text-center">Share Your ComfortCraft Experience</CardTitle>
              <p className="text-center text-gray-600">
                This will only take 3-4 minutes of your time, and every response helps us improve!
              </p>
            </CardHeader>
            <CardContent className="space-y-8">
              {/* Overall Rating */}
              <div>
                <Label className="text-lg font-semibold mb-4 block">
                  How would you rate your overall experience with ComfortCraft? ⭐
                </Label>
                <RadioGroup
                  value={formData.overallRating}
                  onValueChange={(value) => handleInputChange("overallRating", value)}
                  className="flex flex-wrap gap-4"
                >
                  {["Excellent", "Very Good", "Good", "Fair", "Poor"].map((rating) => (
                    <div key={rating} className="flex items-center space-x-2">
                      <RadioGroupItem value={rating} id={`overall-${rating}`} />
                      <Label htmlFor={`overall-${rating}`}>{rating}</Label>
                    </div>
                  ))}
                </RadioGroup>
              </div>

              {/* Ease of Use */}
              <div>
                <Label className="text-lg font-semibold mb-4 block">
                  How easy was it to find and browse products on our website? 🔍
                </Label>
                <RadioGroup
                  value={formData.easeOfUse}
                  onValueChange={(value) => handleInputChange("easeOfUse", value)}
                  className="flex flex-wrap gap-4"
                >
                  {["Very Easy", "Easy", "Neutral", "Difficult", "Very Difficult"].map((ease) => (
                    <div key={ease} className="flex items-center space-x-2">
                      <RadioGroupItem value={ease} id={`ease-${ease}`} />
                      <Label htmlFor={`ease-${ease}`}>{ease}</Label>
                    </div>
                  ))}
                </RadioGroup>
              </div>

              {/* Product Selection */}
              <div>
                <Label className="text-lg font-semibold mb-4 block">
                  What do you think about our furniture selection and variety? 🛋️
                </Label>
                <RadioGroup
                  value={formData.productSelection}
                  onValueChange={(value) => handleInputChange("productSelection", value)}
                  className="flex flex-wrap gap-4"
                >
                  {["Excellent variety", "Good selection", "Adequate", "Limited options", "Poor selection"].map(
                    (selection) => (
                      <div key={selection} className="flex items-center space-x-2">
                        <RadioGroupItem value={selection} id={`selection-${selection}`} />
                        <Label htmlFor={`selection-${selection}`}>{selection}</Label>
                      </div>
                    ),
                  )}
                </RadioGroup>
              </div>

              {/* Checkout Experience */}
              <div>
                <Label className="text-lg font-semibold mb-4 block">
                  How was your checkout and payment experience? 💳
                </Label>
                <RadioGroup
                  value={formData.checkoutExperience}
                  onValueChange={(value) => handleInputChange("checkoutExperience", value)}
                  className="flex flex-wrap gap-4"
                >
                  {["Smooth & Quick", "Good", "Okay", "Confusing", "Frustrating"].map((checkout) => (
                    <div key={checkout} className="flex items-center space-x-2">
                      <RadioGroupItem value={checkout} id={`checkout-${checkout}`} />
                      <Label htmlFor={`checkout-${checkout}`}>{checkout}</Label>
                    </div>
                  ))}
                </RadioGroup>
              </div>

              {/* Favorite Features */}
              <div>
                <Label className="text-lg font-semibold mb-4 block">
                  Which features did you find most helpful? (Select all that apply) ✨
                </Label>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {features.map((feature) => (
                    <div key={feature} className="flex items-center space-x-2">
                      <Checkbox
                        id={`feature-${feature}`}
                        checked={formData.favoriteFeatures.includes(feature)}
                        onCheckedChange={(checked) => handleFeatureToggle(feature, checked as boolean)}
                      />
                      <Label htmlFor={`feature-${feature}`} className="text-sm">
                        {feature}
                      </Label>
                    </div>
                  ))}
                </div>
              </div>

              {/* Recommendation */}
              <div>
                <Label className="text-lg font-semibold mb-4 block">
                  Would you recommend ComfortCraft to friends and family? 👥
                </Label>
                <RadioGroup
                  value={formData.recommend}
                  onValueChange={(value) => handleInputChange("recommend", value)}
                  className="flex flex-wrap gap-4"
                >
                  {["Definitely", "Probably", "Maybe", "Probably Not", "Definitely Not"].map((recommend) => (
                    <div key={recommend} className="flex items-center space-x-2">
                      <RadioGroupItem value={recommend} id={`recommend-${recommend}`} />
                      <Label htmlFor={`recommend-${recommend}`}>{recommend}</Label>
                    </div>
                  ))}
                </RadioGroup>
              </div>

              {/* Improvements */}
              <div>
                <Label htmlFor="improvements" className="text-lg font-semibold mb-4 block">
                  What could we improve to make your experience even better? 💡
                </Label>
                <Textarea
                  id="improvements"
                  placeholder="Share your ideas and suggestions... Every detail helps us grow!"
                  value={formData.improvements}
                  onChange={(e) => handleInputChange("improvements", e.target.value)}
                  className="min-h-[100px]"
                />
              </div>

              {/* Additional Comments */}
              <div>
                <Label htmlFor="additionalComments" className="text-lg font-semibold mb-4 block">
                  Any other thoughts you'd like to share with us? 💭
                </Label>
                <Textarea
                  id="additionalComments"
                  placeholder="We're all ears! Tell us anything else that's on your mind..."
                  value={formData.additionalComments}
                  onChange={(e) => handleInputChange("additionalComments", e.target.value)}
                  className="min-h-[100px]"
                />
              </div>

              {/* Email for Follow-up */}
              <div>
                <Label htmlFor="email" className="text-lg font-semibold mb-4 block">
                  Email (Optional - for discount code and updates) 📧
                </Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="your.email@example.com"
                  value={formData.email}
                  onChange={(e) => handleInputChange("email", e.target.value)}
                />
              </div>

              {/* Newsletter Signup */}
              <div className="flex items-center space-x-2">
                <Checkbox
                  id="newsletter"
                  checked={formData.newsletter}
                  onCheckedChange={(checked) => handleInputChange("newsletter", checked as boolean)}
                />
                <Label htmlFor="newsletter">
                  I'd love to receive updates about new furniture collections and special offers! 📬
                </Label>
              </div>

              {/* Submit Button */}
              <div className="text-center pt-6">
                <Button
                  onClick={handleSubmit}
                  size="lg"
                  className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white px-12 py-3"
                >
                  <Send className="w-5 h-5 mr-2" />
                  Submit My Feedback & Get My Discount!
                </Button>
                <p className="text-sm text-gray-600 mt-3">Thank you for taking the time to help us improve! 🙏</p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
