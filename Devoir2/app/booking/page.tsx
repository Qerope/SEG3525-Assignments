"use client"

import { useState } from "react"
import { ConfigProvider, Layout, Menu, Button, Typography, Steps, message } from "antd"
import {
  HomeOutlined,
  ScissorOutlined,
  CalendarOutlined,
  InfoCircleOutlined,
  PhoneOutlined,
  BgColorsOutlined,
  UserOutlined,
  CheckCircleOutlined,
} from "@ant-design/icons"
import { useRouter } from "next/navigation"

const { Header, Content, Footer } = Layout
const { Title, Paragraph, Text } = Typography

const modernTheme = {
  token: {
    colorPrimary: "#2c3e50",
    colorBgContainer: "#ffffff",
    colorText: "#2c3e50",
    borderRadius: 8,
    fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, sans-serif",
  },
}

const warmTheme = {
  token: {
    colorPrimary: "#8b4513",
    colorBgContainer: "#faf7f2",
    colorText: "#5d4037",
    borderRadius: 12,
    fontFamily: "'Playfair Display', Georgia, serif",
  },
}

export default function BookingPage() {
  const [currentTheme, setCurrentTheme] = useState("modern")
  const [currentStep, setCurrentStep] = useState(0)
  const [bookingData, setBookingData] = useState({
    service: "",
    stylist: "",
    date: "",
    time: "",
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    notes: "",
  })
  const [errors, setErrors] = useState({})
  const router = useRouter()

  const toggleTheme = () => {
    setCurrentTheme(currentTheme === "modern" ? "warm" : "modern")
  }

  const theme = currentTheme === "modern" ? modernTheme : warmTheme

  const menuItems = [
    { key: "/", label: "Home", icon: <HomeOutlined /> },
    { key: "/services", label: "Services", icon: <ScissorOutlined /> },
    { key: "/booking", label: "Book Now", icon: <CalendarOutlined /> },
    { key: "/info", label: "Info", icon: <InfoCircleOutlined /> },
    { key: "/contact", label: "Contact", icon: <PhoneOutlined /> },
  ]

  const services = [
    { value: "womens-cut", label: "Women's Cut & Style", price: 65, duration: 60 },
    { value: "mens-cut", label: "Men's Cut & Style", price: 45, duration: 45 },
    { value: "childrens-cut", label: "Children's Cut", price: 35, duration: 30 },
    { value: "blowout", label: "Blowout & Style", price: 40, duration: 45 },
    { value: "full-color", label: "Full Color", price: 85, duration: 120 },
    { value: "highlights", label: "Highlights/Lowlights", price: 120, duration: 150 },
    { value: "balayage", label: "Balayage", price: 150, duration: 180 },
    { value: "deep-conditioning", label: "Deep Conditioning", price: 35, duration: 30 },
    { value: "keratin", label: "Keratin Treatment", price: 250, duration: 180 },
  ]

  const stylists = [
    { value: "jessica", label: "Jessica Martinez - Senior Stylist" },
    { value: "sarah", label: "Sarah Johnson - Color Specialist" },
    { value: "emily", label: "Emily Chen - Master Stylist" },
    { value: "michael", label: "Michael Brown - Men's Specialist" },
  ]

  const timeSlots = [
    "9:00 AM",
    "9:30 AM",
    "10:00 AM",
    "10:30 AM",
    "11:00 AM",
    "11:30 AM",
    "12:00 PM",
    "12:30 PM",
    "1:00 PM",
    "1:30 PM",
    "2:00 PM",
    "2:30 PM",
    "3:00 PM",
    "3:30 PM",
    "4:00 PM",
    "4:30 PM",
    "5:00 PM",
    "5:30 PM",
    "6:00 PM",
    "6:30 PM",
    "7:00 PM",
    "7:30 PM",
  ]

  const steps = [
    { title: "Select Service", icon: <ScissorOutlined /> },
    { title: "Choose Date & Time", icon: <CalendarOutlined /> },
    { title: "Personal Information", icon: <UserOutlined /> },
    { title: "Confirmation", icon: <CheckCircleOutlined /> },
  ]

  const validateStep = (step) => {
    const newErrors = {}

    if (step === 0) {
      if (!bookingData.service) newErrors.service = "Please select a service"
      if (!bookingData.stylist) newErrors.stylist = "Please select a stylist"
    } else if (step === 1) {
      if (!bookingData.date) newErrors.date = "Please select a date"
      if (!bookingData.time) newErrors.time = "Please select a time"
    } else if (step === 2) {
      if (!bookingData.firstName) newErrors.firstName = "Please enter your first name"
      if (!bookingData.lastName) newErrors.lastName = "Please enter your last name"
      if (!bookingData.email) newErrors.email = "Please enter your email"
      else if (!/\S+@\S+\.\S+/.test(bookingData.email)) newErrors.email = "Please enter a valid email"
      if (!bookingData.phone) newErrors.phone = "Please enter your phone number"
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleNext = () => {
    if (validateStep(currentStep)) {
      setCurrentStep(currentStep + 1)
    }
  }

  const handlePrevious = () => {
    setCurrentStep(currentStep - 1)
    setErrors({})
  }

  const handleSubmit = () => {
    if (validateStep(2)) {
      message.success("Appointment booked successfully!")
      setCurrentStep(currentStep + 1)

      setTimeout(() => {
        setBookingData({
          service: "",
          stylist: "",
          date: "",
          time: "",
          firstName: "",
          lastName: "",
          email: "",
          phone: "",
          notes: "",
        })
        setCurrentStep(0)
        setErrors({})
      }, 3000)
    }
  }

  const handleInputChange = (field, value) => {
    setBookingData({ ...bookingData, [field]: value })
    if (errors[field]) {
      setErrors({ ...errors, [field]: "" })
    }
  }

  const generateDateOptions = () => {
    const dates = []
    const today = new Date()
    for (let i = 1; i <= 30; i++) {
      const date = new Date(today)
      date.setDate(today.getDate() + i)
      dates.push({
        value: date.toISOString().split("T")[0],
        label: date.toLocaleDateString("en-US", {
          weekday: "long",
          year: "numeric",
          month: "long",
          day: "numeric",
        }),
      })
    }
    return dates
  }

  const renderStepContent = () => {
    switch (currentStep) {
      case 0:
        return (
          <div style={{ maxWidth: "600px", margin: "0 auto", padding: "24px" }}>
            <Title
              level={3}
              style={{
                textAlign: "center",
                color: theme.token.colorPrimary,
                marginBottom: "32px",
                fontFamily: theme.token.fontFamily,
              }}
            >
              Select Your Service
            </Title>

            <div>
              {/* Service Selection */}
              <div style={{ marginBottom: "24px" }}>
                <div
                  style={{
                    marginBottom: "8px",
                    color: "rgba(0, 0, 0, 0.88)",
                    fontSize: "14px",
                    fontWeight: "600",
                    lineHeight: "22px",
                  }}
                >
                  Service <span style={{ color: "#ff4d4f" }}>*</span>
                </div>
                <div style={{ position: "relative" }}>
                  <select
                    value={bookingData.service}
                    onChange={(e) => handleInputChange("service", e.target.value)}
                    style={{
                      width: "100%",
                      height: "40px",
                      padding: "4px 11px",
                      fontSize: "14px",
                      lineHeight: "1.5714285714285714",
                      color: "rgba(0, 0, 0, 0.88)",
                      backgroundColor: "#ffffff",
                      border: errors.service ? "1px solid #ff4d4f" : "1px solid #d9d9d9",
                      borderRadius: "6px",
                      outline: "none",
                      transition: "all 0.2s",
                      appearance: "none",
                      cursor: "pointer",
                      fontFamily: theme.token.fontFamily,
                      backgroundImage: `url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'%3e%3cpath fill='none' stroke='%23999' strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='m2 5 6 6 6-6'/%3e%3c/svg%3e")`,
                      backgroundRepeat: "no-repeat",
                      backgroundPosition: "right 12px center",
                      backgroundSize: "12px",
                      paddingRight: "32px",
                    }}
                    onFocus={(e) => {
                      e.target.style.borderColor = theme.token.colorPrimary
                      e.target.style.boxShadow = `0 0 0 2px ${theme.token.colorPrimary}1a`
                    }}
                    onBlur={(e) => {
                      e.target.style.borderColor = errors.service ? "#ff4d4f" : "#d9d9d9"
                      e.target.style.boxShadow = "none"
                    }}
                    onMouseEnter={(e) => {
                      if (!errors.service) {
                        e.target.style.borderColor = theme.token.colorPrimary
                      }
                    }}
                    onMouseLeave={(e) => {
                      if (document.activeElement !== e.target) {
                        e.target.style.borderColor = errors.service ? "#ff4d4f" : "#d9d9d9"
                      }
                    }}
                  >
                    <option value="" style={{ color: "#bfbfbf" }}>
                      Choose a service
                    </option>
                    {services.map((service) => (
                      <option key={service.value} value={service.value}>
                        {service.label} - ${service.price} ({service.duration} min)
                      </option>
                    ))}
                  </select>
                </div>
                {errors.service && (
                  <div style={{ color: "#ff4d4f", fontSize: "12px", marginTop: "4px" }}>{errors.service}</div>
                )}
              </div>

              {/* Stylist Selection */}
              <div style={{ marginBottom: "24px" }}>
                <div
                  style={{
                    marginBottom: "8px",
                    color: "rgba(0, 0, 0, 0.88)",
                    fontSize: "14px",
                    fontWeight: "600",
                    lineHeight: "22px",
                  }}
                >
                  Preferred Stylist <span style={{ color: "#ff4d4f" }}>*</span>
                </div>
                <div style={{ position: "relative" }}>
                  <select
                    value={bookingData.stylist}
                    onChange={(e) => handleInputChange("stylist", e.target.value)}
                    style={{
                      width: "100%",
                      height: "40px",
                      padding: "4px 11px",
                      fontSize: "14px",
                      lineHeight: "1.5714285714285714",
                      color: "rgba(0, 0, 0, 0.88)",
                      backgroundColor: "#ffffff",
                      border: errors.stylist ? "1px solid #ff4d4f" : "1px solid #d9d9d9",
                      borderRadius: "6px",
                      outline: "none",
                      transition: "all 0.2s",
                      appearance: "none",
                      cursor: "pointer",
                      fontFamily: theme.token.fontFamily,
                      backgroundImage: `url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'%3e%3cpath fill='none' stroke='%23999' strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='m2 5 6 6 6-6'/%3e%3c/svg%3e")`,
                      backgroundRepeat: "no-repeat",
                      backgroundPosition: "right 12px center",
                      backgroundSize: "12px",
                      paddingRight: "32px",
                    }}
                    onFocus={(e) => {
                      e.target.style.borderColor = theme.token.colorPrimary
                      e.target.style.boxShadow = `0 0 0 2px ${theme.token.colorPrimary}1a`
                    }}
                    onBlur={(e) => {
                      e.target.style.borderColor = errors.stylist ? "#ff4d4f" : "#d9d9d9"
                      e.target.style.boxShadow = "none"
                    }}
                    onMouseEnter={(e) => {
                      if (!errors.stylist) {
                        e.target.style.borderColor = theme.token.colorPrimary
                      }
                    }}
                    onMouseLeave={(e) => {
                      if (document.activeElement !== e.target) {
                        e.target.style.borderColor = errors.stylist ? "#ff4d4f" : "#d9d9d9"
                      }
                    }}
                  >
                    <option value="" style={{ color: "#bfbfbf" }}>
                      Choose your stylist
                    </option>
                    {stylists.map((stylist) => (
                      <option key={stylist.value} value={stylist.value}>
                        {stylist.label}
                      </option>
                    ))}
                  </select>
                </div>
                {errors.stylist && (
                  <div style={{ color: "#ff4d4f", fontSize: "12px", marginTop: "4px" }}>{errors.stylist}</div>
                )}
              </div>
            </div>
          </div>
        )

      case 1:
        return (
          <div style={{ maxWidth: "600px", margin: "0 auto", padding: "24px" }}>
            <Title
              level={3}
              style={{
                textAlign: "center",
                color: theme.token.colorPrimary,
                marginBottom: "32px",
                fontFamily: theme.token.fontFamily,
              }}
            >
              Choose Date & Time
            </Title>

            <div>
              {/* Date Selection */}
              <div style={{ marginBottom: "24px" }}>
                <div
                  style={{
                    marginBottom: "8px",
                    color: "rgba(0, 0, 0, 0.88)",
                    fontSize: "14px",
                    fontWeight: "600",
                    lineHeight: "22px",
                  }}
                >
                  Appointment Date <span style={{ color: "#ff4d4f" }}>*</span>
                </div>
                <div style={{ position: "relative" }}>
                  <select
                    value={bookingData.date}
                    onChange={(e) => handleInputChange("date", e.target.value)}
                    style={{
                      width: "100%",
                      height: "40px",
                      padding: "4px 11px",
                      fontSize: "14px",
                      lineHeight: "1.5714285714285714",
                      color: "rgba(0, 0, 0, 0.88)",
                      backgroundColor: "#ffffff",
                      border: errors.date ? "1px solid #ff4d4f" : "1px solid #d9d9d9",
                      borderRadius: "6px",
                      outline: "none",
                      transition: "all 0.2s",
                      appearance: "none",
                      cursor: "pointer",
                      fontFamily: theme.token.fontFamily,
                      backgroundImage: `url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'%3e%3cpath fill='none' stroke='%23999' strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='m2 5 6 6 6-6'/%3e%3c/svg%3e")`,
                      backgroundRepeat: "no-repeat",
                      backgroundPosition: "right 12px center",
                      backgroundSize: "12px",
                      paddingRight: "32px",
                    }}
                    onFocus={(e) => {
                      e.target.style.borderColor = theme.token.colorPrimary
                      e.target.style.boxShadow = `0 0 0 2px ${theme.token.colorPrimary}1a`
                    }}
                    onBlur={(e) => {
                      e.target.style.borderColor = errors.date ? "#ff4d4f" : "#d9d9d9"
                      e.target.style.boxShadow = "none"
                    }}
                    onMouseEnter={(e) => {
                      if (!errors.date) {
                        e.target.style.borderColor = theme.token.colorPrimary
                      }
                    }}
                    onMouseLeave={(e) => {
                      if (document.activeElement !== e.target) {
                        e.target.style.borderColor = errors.date ? "#ff4d4f" : "#d9d9d9"
                      }
                    }}
                  >
                    <option value="" style={{ color: "#bfbfbf" }}>
                      Select a date
                    </option>
                    {generateDateOptions().map((date) => (
                      <option key={date.value} value={date.value}>
                        {date.label}
                      </option>
                    ))}
                  </select>
                </div>
                {errors.date && (
                  <div style={{ color: "#ff4d4f", fontSize: "12px", marginTop: "4px" }}>{errors.date}</div>
                )}
              </div>

              {/* Time Selection */}
              <div style={{ marginBottom: "24px" }}>
                <div
                  style={{
                    marginBottom: "8px",
                    color: "rgba(0, 0, 0, 0.88)",
                    fontSize: "14px",
                    fontWeight: "600",
                    lineHeight: "22px",
                  }}
                >
                  Appointment Time <span style={{ color: "#ff4d4f" }}>*</span>
                </div>
                <div style={{ position: "relative" }}>
                  <select
                    value={bookingData.time}
                    onChange={(e) => handleInputChange("time", e.target.value)}
                    style={{
                      width: "100%",
                      height: "40px",
                      padding: "4px 11px",
                      fontSize: "14px",
                      lineHeight: "1.5714285714285714",
                      color: "rgba(0, 0, 0, 0.88)",
                      backgroundColor: "#ffffff",
                      border: errors.time ? "1px solid #ff4d4f" : "1px solid #d9d9d9",
                      borderRadius: "6px",
                      outline: "none",
                      transition: "all 0.2s",
                      appearance: "none",
                      cursor: "pointer",
                      fontFamily: theme.token.fontFamily,
                      backgroundImage: `url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'%3e%3cpath fill='none' stroke='%23999' strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='m2 5 6 6 6-6'/%3e%3c/svg%3e")`,
                      backgroundRepeat: "no-repeat",
                      backgroundPosition: "right 12px center",
                      backgroundSize: "12px",
                      paddingRight: "32px",
                    }}
                    onFocus={(e) => {
                      e.target.style.borderColor = theme.token.colorPrimary
                      e.target.style.boxShadow = `0 0 0 2px ${theme.token.colorPrimary}1a`
                    }}
                    onBlur={(e) => {
                      e.target.style.borderColor = errors.time ? "#ff4d4f" : "#d9d9d9"
                      e.target.style.boxShadow = "none"
                    }}
                    onMouseEnter={(e) => {
                      if (!errors.time) {
                        e.target.style.borderColor = theme.token.colorPrimary
                      }
                    }}
                    onMouseLeave={(e) => {
                      if (document.activeElement !== e.target) {
                        e.target.style.borderColor = errors.time ? "#ff4d4f" : "#d9d9d9"
                      }
                    }}
                  >
                    <option value="" style={{ color: "#bfbfbf" }}>
                      Choose a time slot
                    </option>
                    {timeSlots.map((time) => (
                      <option key={time} value={time}>
                        {time}
                      </option>
                    ))}
                  </select>
                </div>
                {errors.time && (
                  <div style={{ color: "#ff4d4f", fontSize: "12px", marginTop: "4px" }}>{errors.time}</div>
                )}
              </div>
            </div>
          </div>
        )

      case 2:
        const inputStyle = (hasError) => ({
          width: "100%",
          height: "40px",
          padding: "4px 11px",
          fontSize: "14px",
          lineHeight: "1.5714285714285714",
          color: "rgba(0, 0, 0, 0.88)",
          backgroundColor: "#ffffff",
          border: hasError ? "1px solid #ff4d4f" : "1px solid #d9d9d9",
          borderRadius: "6px",
          outline: "none",
          transition: "all 0.2s",
          fontFamily: theme.token.fontFamily,
        })

        const handleInputFocus = (e, hasError) => {
          e.target.style.borderColor = theme.token.colorPrimary
          e.target.style.boxShadow = `0 0 0 2px ${theme.token.colorPrimary}1a`
        }

        const handleInputBlur = (e, hasError) => {
          e.target.style.borderColor = hasError ? "#ff4d4f" : "#d9d9d9"
          e.target.style.boxShadow = "none"
        }

        const handleInputHover = (e, hasError) => {
          if (!hasError) {
            e.target.style.borderColor = theme.token.colorPrimary
          }
        }

        const handleInputLeave = (e, hasError) => {
          if (document.activeElement !== e.target) {
            e.target.style.borderColor = hasError ? "#ff4d4f" : "#d9d9d9"
          }
        }

        return (
          <div style={{ maxWidth: "600px", margin: "0 auto", padding: "24px" }}>
            <Title
              level={3}
              style={{
                textAlign: "center",
                color: theme.token.colorPrimary,
                marginBottom: "32px",
                fontFamily: theme.token.fontFamily,
              }}
            >
              Personal Information
            </Title>

            <div>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px", marginBottom: "24px" }}>
                <div>
                  <div
                    style={{
                      marginBottom: "8px",
                      color: "rgba(0, 0, 0, 0.88)",
                      fontSize: "14px",
                      fontWeight: "600",
                      lineHeight: "22px",
                    }}
                  >
                    First Name <span style={{ color: "#ff4d4f" }}>*</span>
                  </div>
                  <input
                    type="text"
                    value={bookingData.firstName}
                    onChange={(e) => handleInputChange("firstName", e.target.value)}
                    style={inputStyle(errors.firstName)}
                    placeholder="Enter your first name"
                    onFocus={(e) => handleInputFocus(e, errors.firstName)}
                    onBlur={(e) => handleInputBlur(e, errors.firstName)}
                    onMouseEnter={(e) => handleInputHover(e, errors.firstName)}
                    onMouseLeave={(e) => handleInputLeave(e, errors.firstName)}
                  />
                  {errors.firstName && (
                    <div style={{ color: "#ff4d4f", fontSize: "12px", marginTop: "4px" }}>{errors.firstName}</div>
                  )}
                </div>

                <div>
                  <div
                    style={{
                      marginBottom: "8px",
                      color: "rgba(0, 0, 0, 0.88)",
                      fontSize: "14px",
                      fontWeight: "600",
                      lineHeight: "22px",
                    }}
                  >
                    Last Name <span style={{ color: "#ff4d4f" }}>*</span>
                  </div>
                  <input
                    type="text"
                    value={bookingData.lastName}
                    onChange={(e) => handleInputChange("lastName", e.target.value)}
                    style={inputStyle(errors.lastName)}
                    placeholder="Enter your last name"
                    onFocus={(e) => handleInputFocus(e, errors.lastName)}
                    onBlur={(e) => handleInputBlur(e, errors.lastName)}
                    onMouseEnter={(e) => handleInputHover(e, errors.lastName)}
                    onMouseLeave={(e) => handleInputLeave(e, errors.lastName)}
                  />
                  {errors.lastName && (
                    <div style={{ color: "#ff4d4f", fontSize: "12px", marginTop: "4px" }}>{errors.lastName}</div>
                  )}
                </div>
              </div>

              <div style={{ marginBottom: "24px" }}>
                <div
                  style={{
                    marginBottom: "8px",
                    color: "rgba(0, 0, 0, 0.88)",
                    fontSize: "14px",
                    fontWeight: "600",
                    lineHeight: "22px",
                  }}
                >
                  Email <span style={{ color: "#ff4d4f" }}>*</span>
                </div>
                <input
                  type="email"
                  value={bookingData.email}
                  onChange={(e) => handleInputChange("email", e.target.value)}
                  style={inputStyle(errors.email)}
                  placeholder="Enter your email address"
                  onFocus={(e) => handleInputFocus(e, errors.email)}
                  onBlur={(e) => handleInputBlur(e, errors.email)}
                  onMouseEnter={(e) => handleInputHover(e, errors.email)}
                  onMouseLeave={(e) => handleInputLeave(e, errors.email)}
                />
                {errors.email && (
                  <div style={{ color: "#ff4d4f", fontSize: "12px", marginTop: "4px" }}>{errors.email}</div>
                )}
              </div>

              <div style={{ marginBottom: "24px" }}>
                <div
                  style={{
                    marginBottom: "8px",
                    color: "rgba(0, 0, 0, 0.88)",
                    fontSize: "14px",
                    fontWeight: "600",
                    lineHeight: "22px",
                  }}
                >
                  Phone Number <span style={{ color: "#ff4d4f" }}>*</span>
                </div>
                <input
                  type="tel"
                  value={bookingData.phone}
                  onChange={(e) => handleInputChange("phone", e.target.value)}
                  style={inputStyle(errors.phone)}
                  placeholder="Enter your phone number"
                  onFocus={(e) => handleInputFocus(e, errors.phone)}
                  onBlur={(e) => handleInputBlur(e, errors.phone)}
                  onMouseEnter={(e) => handleInputHover(e, errors.phone)}
                  onMouseLeave={(e) => handleInputLeave(e, errors.phone)}
                />
                {errors.phone && (
                  <div style={{ color: "#ff4d4f", fontSize: "12px", marginTop: "4px" }}>{errors.phone}</div>
                )}
              </div>

              <div style={{ marginBottom: "24px" }}>
                <div
                  style={{
                    marginBottom: "8px",
                    color: "rgba(0, 0, 0, 0.88)",
                    fontSize: "14px",
                    fontWeight: "600",
                    lineHeight: "22px",
                  }}
                >
                  Special Requests or Notes (Optional)
                </div>
                <textarea
                  value={bookingData.notes}
                  onChange={(e) => handleInputChange("notes", e.target.value)}
                  style={{
                    ...inputStyle(),
                    height: "80px",
                    resize: "none",
                    paddingTop: "8px",
                    paddingBottom: "8px",
                  }}
                  placeholder="Any special requests or notes for your stylist..."
                  onFocus={(e) => handleInputFocus(e, false)}
                  onBlur={(e) => handleInputBlur(e, false)}
                  onMouseEnter={(e) => handleInputHover(e, false)}
                  onMouseLeave={(e) => handleInputLeave(e, false)}
                />
              </div>
            </div>
          </div>
        )

      case 3:
        const selectedService = services.find((s) => s.value === bookingData.service)
        const selectedStylist = stylists.find((s) => s.value === bookingData.stylist)
        const selectedDate = new Date(bookingData.date).toLocaleDateString("en-US", {
          weekday: "long",
          year: "numeric",
          month: "long",
          day: "numeric",
        })

        return (
          <div style={{ maxWidth: "600px", margin: "0 auto", padding: "24px" }}>
            <Title
              level={3}
              style={{
                textAlign: "center",
                color: theme.token.colorPrimary,
                marginBottom: "32px",
                fontFamily: theme.token.fontFamily,
              }}
            >
              Confirm Your Appointment
            </Title>

            <div
              style={{
                background: "#fafafa",
                border: "1px solid #f0f0f0",
                borderRadius: "8px",
                padding: "24px",
              }}
            >
              {[
                { label: "Service", value: selectedService?.label },
                { label: "Stylist", value: selectedStylist?.label },
                { label: "Date", value: selectedDate },
                { label: "Time", value: bookingData.time },
                { label: "Duration", value: `${selectedService?.duration} minutes` },
                { label: "Price", value: `$${selectedService?.price}`, isPrice: true },
                { label: "Name", value: `${bookingData.firstName} ${bookingData.lastName}` },
                { label: "Email", value: bookingData.email },
                { label: "Phone", value: bookingData.phone },
                ...(bookingData.notes ? [{ label: "Notes", value: bookingData.notes }] : []),
              ].map((item, index) => (
                <div
                  key={index}
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "flex-start",
                    padding: "12px 0",
                    borderBottom: index < 9 ? "1px solid #f0f0f0" : "none",
                  }}
                >
                  <span style={{ fontWeight: "600", color: "rgba(0, 0, 0, 0.88)", minWidth: "120px" }}>
                    {item.label}:
                  </span>
                  <span
                    style={{
                      textAlign: "right",
                      color: item.isPrice ? theme.token.colorPrimary : "rgba(0, 0, 0, 0.88)",
                      fontWeight: item.isPrice ? "600" : "400",
                      flex: 1,
                      marginLeft: "16px",
                    }}
                  >
                    {item.value}
                  </span>
                </div>
              ))}
            </div>
          </div>
        )

      case 4:
        return (
          <div style={{ maxWidth: "600px", margin: "0 auto", padding: "24px", textAlign: "center" }}>
            <CheckCircleOutlined style={{ fontSize: "64px", color: "#52c41a", marginBottom: "24px" }} />
            <Title level={2} style={{ color: "#52c41a", marginBottom: "16px" }}>
              Appointment Confirmed!
            </Title>
            <Paragraph style={{ fontSize: "16px", marginBottom: "16px" }}>
              Thank you for booking with Luxe Hair Studio. We've sent a confirmation email to {bookingData.email}.
            </Paragraph>
            <Paragraph style={{ marginBottom: "32px" }}>
              We look forward to seeing you on{" "}
              {new Date(bookingData.date).toLocaleDateString("en-US", {
                weekday: "long",
                year: "numeric",
                month: "long",
                day: "numeric",
              })}{" "}
              at {bookingData.time}.
            </Paragraph>
            <Button type="primary" size="large" onClick={() => router.push("/")}>
              Return to Home
            </Button>
          </div>
        )

      default:
        return null
    }
  }

  return (
    <ConfigProvider theme={theme}>
      <div style={{ minHeight: "100vh", background: "#f5f5f5" }}>
        <Layout style={{ minHeight: "100vh", background: "transparent" }}>
          <Header
            style={{
              background: currentTheme === "modern" ? "rgba(255,255,255,0.95)" : "rgba(250,247,242,0.95)",
              backdropFilter: "blur(10px)",
              borderBottom: `1px solid ${theme.token.colorPrimary}20`,
              position: "sticky",
              top: 0,
              zIndex: 100,
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <div style={{ display: "flex", alignItems: "center" }}>
              <Title
                level={3}
                style={{
                  margin: 0,
                  color: theme.token.colorPrimary,
                  fontFamily: currentTheme === "warm" ? "'Playfair Display', serif" : "'Inter', sans-serif",
                }}
              >
                Luxe Hair Studio
              </Title>
            </div>

            <Menu
              mode="horizontal"
              selectedKeys={["/booking"]}
              items={menuItems.map((item) => ({
                ...item,
                onClick: () => router.push(item.key),
              }))}
              style={{
                background: "transparent",
                border: "none",
                flex: 1,
                justifyContent: "center",
              }}
            />

            <Button
              icon={<BgColorsOutlined />}
              onClick={toggleTheme}
              type="text"
              style={{ color: theme.token.colorPrimary }}
            >
              Switch Theme
            </Button>
          </Header>

          <Content style={{ padding: "40px 20px", background: "transparent" }}>
            <div style={{ maxWidth: "900px", margin: "0 auto" }}>
              <Title
                level={1}
                style={{
                  textAlign: "center",
                  color: theme.token.colorPrimary,
                  marginBottom: "40px",
                  fontFamily: currentTheme === "warm" ? "'Playfair Display', serif" : "'Inter', sans-serif",
                }}
              >
                Book Your Appointment
              </Title>

              <div
                style={{
                  background: theme.token.colorBgContainer,
                  borderRadius: theme.token.borderRadius,
                  boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
                  border: "none",
                  padding: "40px",
                }}
              >
                <Steps current={currentStep} items={steps} style={{ marginBottom: "40px" }} />

                {renderStepContent()}

                {currentStep < 4 && (
                  <div
                    style={{
                      textAlign: "center",
                      marginTop: "40px",
                      paddingTop: "24px",
                      borderTop: "1px solid #f0f0f0",
                    }}
                  >
                    <div style={{ display: "flex", justifyContent: "center", gap: "16px" }}>
                      {currentStep > 0 && (
                        <Button size="large" onClick={handlePrevious}>
                          Previous
                        </Button>
                      )}
                      {currentStep < 3 && (
                        <Button type="primary" size="large" onClick={handleNext}>
                          Next
                        </Button>
                      )}
                      {currentStep === 3 && (
                        <Button type="primary" size="large" onClick={handleSubmit}>
                          Confirm Booking
                        </Button>
                      )}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </Content>

          <Footer
            style={{
              textAlign: "center",
              background: theme.token.colorPrimary,
              color: "white",
              padding: "40px 50px",
            }}
          >
            <Text style={{ color: "rgba(255,255,255,0.6)" }}>
              © 2025 Luxe Hair Studio. All rights reserved. | Designed by Group 9 - Hamed Tavakoli Dastjerdi
            </Text>
          </Footer>
        </Layout>
      </div>
    </ConfigProvider>
  )
}
