"use client"

import { useState } from "react"
import { ConfigProvider, Layout, Menu, Button, Card, Row, Col, Typography, Divider, Timeline } from "antd"
import {
  HomeOutlined,
  ScissorOutlined,
  CalendarOutlined,
  InfoCircleOutlined,
  PhoneOutlined,
  BgColorsOutlined,
  UserOutlined,
  DesktopOutlined,
  MobileOutlined,
} from "@ant-design/icons"
import { useRouter } from "next/navigation"

const { Header, Content, Footer } = Layout
const { Title, Paragraph, Text } = Typography

const modernTheme = {
  token: {
    colorPrimary: "#1a365d",
    colorBgContainer: "#ffffff",
    colorText: "#2d3748",
    borderRadius: 12,
    fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, sans-serif",
  },
}

const warmTheme = {
  token: {
    colorPrimary: "#744210",
    colorBgContainer: "#fffbf7",
    colorText: "#4a5568",
    borderRadius: 16,
    fontFamily: "'Playfair Display', Georgia, serif",
  },
}

export default function InfoPage() {
  const [currentTheme, setCurrentTheme] = useState("modern")
  const router = useRouter()

  const toggleTheme = () => {
    setCurrentTheme(currentTheme === "modern" ? "warm" : "modern")
  }

  const theme = currentTheme === "modern" ? modernTheme : warmTheme
  const bgStyle =
    currentTheme === "modern"
      ? { background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)", minHeight: "100vh" }
      : { background: "linear-gradient(135deg, #d4a574 0%, #8b4513 100%)", minHeight: "100vh" }

  const menuItems = [
    { key: "/", label: "Home", icon: <HomeOutlined /> },
    { key: "/services", label: "Services", icon: <ScissorOutlined /> },
    { key: "/booking", label: "Book Now", icon: <CalendarOutlined /> },
    { key: "/info", label: "Info", icon: <InfoCircleOutlined /> },
    { key: "/contact", label: "Contact", icon: <PhoneOutlined /> },
  ]

  return (
    <ConfigProvider theme={theme}>
      <div style={bgStyle}>
        <Layout style={{ background: "transparent", minHeight: "100vh" }}>
          <Header
            style={{
              background: currentTheme === "modern" ? "rgba(255,255,255,0.95)" : "rgba(255,251,247,0.95)",
              backdropFilter: "blur(10px)",
              borderBottom: `1px solid ${theme.token.colorPrimary}20`,
              position: "sticky",
              top: 0,
              zIndex: 1000,
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
            }}
          >
            <div style={{ display: "flex", alignItems: "center" }}>
              <Title
                level={3}
                style={{
                  margin: 0,
                  color: theme.token.colorPrimary,
                  fontFamily: currentTheme === "warm" ? "'Playfair Display', serif" : "'Inter', sans-serif",
                  fontWeight: currentTheme === "warm" ? 600 : 700,
                }}
              >
                Max Hair Studio
              </Title>
            </div>

            <Menu
              mode="horizontal"
              selectedKeys={["/info"]}
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
              style={{
                color: theme.token.colorPrimary,
                borderRadius: theme.token.borderRadius,
                padding: "8px 16px",
              }}
            >
              Switch Theme
            </Button>
          </Header>

          <Content style={{ padding: "0" }}>
            {/* Hero Section */}
            <div
              style={{
                padding: "80px 50px",
                textAlign: "center",
                color: "white",
                background:
                  currentTheme === "modern"
                    ? "linear-gradient(135deg, #1a365d 0%, #2c5282 100%)"
                    : "linear-gradient(135deg, #744210 0%, #975a16 100%)",
              }}
            >
              <Title
                level={1}
                style={{
                  color: "white",
                  fontSize: "3.5rem",
                  marginBottom: "20px",
                  fontFamily: currentTheme === "warm" ? "'Playfair Display', serif" : "'Inter', sans-serif",
                  fontWeight: currentTheme === "warm" ? 600 : 800,
                  textShadow: "0 2px 4px rgba(0,0,0,0.3)",
                }}
              >
                Project Information
              </Title>
              <Paragraph
                style={{
                  color: "rgba(255,255,255,0.9)",
                  fontSize: "1.2rem",
                  maxWidth: "700px",
                  margin: "0 auto",
                  lineHeight: 1.6,
                }}
              >
                User-Centered Design project for SEG3525 - Group 9
                <br />A comprehensive study in designing for different user personas
              </Paragraph>
            </div>

            {/* Project Details */}
            <div
              style={{
                padding: "80px 50px",
                background: theme.token.colorBgContainer,
              }}
            >
              <Title
                level={2}
                style={{
                  textAlign: "center",
                  marginBottom: "50px",
                  color: theme.token.colorPrimary,
                  fontSize: "2.5rem",
                }}
              >
                Project Overview
              </Title>

              <Card
                style={{
                  marginBottom: "50px",
                  borderRadius: theme.token.borderRadius,
                  border: `2px solid ${theme.token.colorPrimary}20`,
                  boxShadow: "0 8px 32px rgba(0,0,0,0.1)",
                }}
              >
                <Row gutter={[40, 40]}>
                  <Col xs={24} md={12}>
                    <Title level={3} style={{ color: theme.token.colorPrimary, marginBottom: "20px" }}>
                      Designers
                    </Title>
                    <div
                      style={{
                        background: currentTheme === "modern" ? "#f7fafc" : "#fef5e7",
                        padding: "20px",
                        borderRadius: theme.token.borderRadius,
                        border: `1px solid ${theme.token.colorPrimary}10`,
                      }}
                    >
                      <Paragraph style={{ fontSize: "16px", marginBottom: "8px" }}>
                        <strong>Group 9</strong>
                      </Paragraph>
                      <Paragraph style={{ fontSize: "16px", marginBottom: "8px" }}>Hamed Tavakoli Dastjerdi</Paragraph>
                      <Paragraph style={{ fontSize: "16px", marginBottom: "0" }}>Student #: 300321356</Paragraph>
                    </div>
                  </Col>
                  <Col xs={24} md={12}>
                    <Title level={3} style={{ color: theme.token.colorPrimary, marginBottom: "20px" }}>
                      Service Business
                    </Title>
                    <div
                      style={{
                        background: currentTheme === "modern" ? "#f7fafc" : "#fef5e7",
                        padding: "20px",
                        borderRadius: theme.token.borderRadius,
                        border: `1px solid ${theme.token.colorPrimary}10`,
                      }}
                    >
                      <Paragraph style={{ fontSize: "16px", marginBottom: "8px" }}>
                        <strong>Max Hair Studio</strong>
                      </Paragraph>
                      <Paragraph style={{ fontSize: "16px", marginBottom: "0" }}>
                        hair salon offering professional haircuts, styling, coloring, and treatments accessible
                        by appointment.
                      </Paragraph>
                    </div>
                  </Col>
                </Row>
              </Card>
            </div>

            {/* Personas Section */}
            <div
              style={{
                padding: "80px 50px",
                background: currentTheme === "modern" ? "#f8fafc" : "#fefcf9",
              }}
            >
              <Title
                level={2}
                style={{
                  textAlign: "center",
                  marginBottom: "50px",
                  color: theme.token.colorPrimary,
                  fontSize: "2.5rem",
                }}
              >
                Persona Design
              </Title>

              <Row gutter={[40, 40]}>
                <Col xs={24} lg={12}>
                  <Card
                    style={{
                      height: "100%",
                      borderRadius: theme.token.borderRadius,
                      border: `2px solid ${theme.token.colorPrimary}20`,
                      boxShadow: "0 8px 32px rgba(0,0,0,0.1)",
                      overflow: "hidden",
                    }}
                  >
                    <div
                      style={{
                        background:
                          currentTheme === "modern"
                            ? "linear-gradient(135deg, #667eea 0%, #764ba2 100%)"
                            : "linear-gradient(135deg, #d4a574 0%, #8b4513 100%)",
                        padding: "30px",
                        textAlign: "center",
                        marginBottom: "30px",
                        margin: "-24px -24px 30px -24px",
                      }}
                    >
                      <UserOutlined style={{ fontSize: "64px", color: "white", marginBottom: "16px" }} />
                      <Title level={2} style={{ color: "white", margin: 0, textShadow: "0 2px 4px rgba(0,0,0,0.3)" }}>
                        Lucy Chen
                      </Title>
                      <Text style={{ color: "rgba(255,255,255,0.9)", fontSize: "16px" }}>
                        The Efficient Professional
                      </Text>
                    </div>

                    <div style={{ padding: "0 10px" }}>
                      <Title level={4} style={{ color: theme.token.colorPrimary, marginBottom: "16px" }}>
                        Characteristics:
                      </Title>
                      <div style={{ marginBottom: "24px" }}>
                        <div
                          style={{
                            background: currentTheme === "modern" ? "#e6f3ff" : "#fef5e7",
                            padding: "12px",
                            borderRadius: "8px",
                            marginBottom: "8px",
                            border: `1px solid ${theme.token.colorPrimary}20`,
                          }}
                        >
                          <strong>Age & Role:</strong> 28, Marketing Professional at tech startup
                        </div>
                        <div
                          style={{
                            background: currentTheme === "modern" ? "#e6f3ff" : "#fef5e7",
                            padding: "12px",
                            borderRadius: "8px",
                            marginBottom: "8px",
                            border: `1px solid ${theme.token.colorPrimary}20`,
                          }}
                        >
                          <strong>Tech-savvy:</strong> Early adopter, uses apps for everything, expects seamless UX
                        </div>
                        <div
                          style={{
                            background: currentTheme === "modern" ? "#e6f3ff" : "#fef5e7",
                            padding: "12px",
                            borderRadius: "8px",
                            border: `1px solid ${theme.token.colorPrimary}20`,
                          }}
                        >
                          <strong>Time-conscious:</strong> Values speed and efficiency, busy schedule
                        </div>
                      </div>

                      <Title level={4} style={{ color: theme.token.colorPrimary, marginBottom: "16px" }}>
                        Technology Relationship:
                      </Title>
                      <Paragraph
                        style={{
                          background: currentTheme === "modern" ? "#f0f8ff" : "#fefaf5",
                          padding: "16px",
                          borderRadius: "8px",
                          marginBottom: "24px",
                          border: `1px solid ${theme.token.colorPrimary}15`,
                        }}
                      >
                        Lucy is a digital native who expects intuitive, fast interfaces. She uses mobile apps for
                        ride-sharing, food delivery, banking, and shopping. She gets frustrated with slow-loading pages
                        or complicated processes. She prefers minimal design with clear call-to-action buttons.
                      </Paragraph>

                      <Title level={4} style={{ color: theme.token.colorPrimary, marginBottom: "16px" }}>
                         Primary Goal:
                      </Title>
                      <div
                        style={{
                          background:
                            currentTheme === "modern"
                              ? "linear-gradient(135deg, #e6f3ff 0%, #cce7ff 100%)"
                              : "linear-gradient(135deg, #fef5e7 0%, #fde68a 100%)",
                          padding: "20px",
                          borderRadius: "12px",
                          border: `2px solid ${theme.token.colorPrimary}30`,
                          fontStyle: "italic",
                          fontSize: "16px",
                          lineHeight: 1.6,
                        }}
                      >
                        <strong>
                          "I want to quickly book an appointment for a short haircut with hairdresser Jessica on Monday,
                          May 27, at 2:00 PM. I need this done in under 3 minutes during my lunch break."
                        </strong>
                      </div>
                    </div>
                  </Card>
                </Col>

                <Col xs={24} lg={12}>
                  <Card
                    style={{
                      height: "100%",
                      borderRadius: theme.token.borderRadius,
                      border: `2px solid ${theme.token.colorPrimary}20`,
                      boxShadow: "0 8px 32px rgba(0,0,0,0.1)",
                      overflow: "hidden",
                    }}
                  >
                    <div
                      style={{
                        background:
                          currentTheme === "modern"
                            ? "linear-gradient(135deg, #667eea 0%, #764ba2 100%)"
                            : "linear-gradient(135deg, #d4a574 0%, #8b4513 100%)",
                        padding: "30px",
                        textAlign: "center",
                        marginBottom: "30px",
                        margin: "-24px -24px 30px -24px",
                      }}
                    >
                      <UserOutlined style={{ fontSize: "64px", color: "white", marginBottom: "16px" }} />
                      <Title level={2} style={{ color: "white", margin: 0, textShadow: "0 2px 4px rgba(0,0,0,0.3)" }}>
                        Margaret Thompson
                      </Title>
                      <Text style={{ color: "rgba(255,255,255,0.9)", fontSize: "16px" }}>The Thoughtful Explorer</Text>
                    </div>

                    <div style={{ padding: "0 10px" }}>
                      <Title level={4} style={{ color: theme.token.colorPrimary, marginBottom: "16px" }}>
                        Characteristics:
                      </Title>
                      <div style={{ marginBottom: "24px" }}>
                        <div
                          style={{
                            background: currentTheme === "modern" ? "#e6f3ff" : "#fef5e7",
                            padding: "12px",
                            borderRadius: "8px",
                            marginBottom: "8px",
                            border: `1px solid ${theme.token.colorPrimary}20`,
                          }}
                        >
                          <strong>Age & Role:</strong> 58, Retired High School Teacher
                        </div>
                        <div
                          style={{
                            background: currentTheme === "modern" ? "#e6f3ff" : "#fef5e7",
                            padding: "12px",
                            borderRadius: "8px",
                            marginBottom: "8px",
                            border: `1px solid ${theme.token.colorPrimary}20`,
                          }}
                        >
                          <strong>Detail-oriented:</strong> Reads reviews, compares options, wants full information
                        </div>
                        <div
                          style={{
                            background: currentTheme === "modern" ? "#e6f3ff" : "#fef5e7",
                            padding: "12px",
                            borderRadius: "8px",
                            border: `1px solid ${theme.token.colorPrimary}20`,
                          }}
                        >
                          <strong>Traditional:</strong> Values personal service, prefers phone calls, likes
                          familiarity
                        </div>
                      </div>

                      <Title level={4} style={{ color: theme.token.colorPrimary, marginBottom: "16px" }}>
                        Technology Relationship:
                      </Title>
                      <Paragraph
                        style={{
                          background: currentTheme === "modern" ? "#f0f8ff" : "#fefaf5",
                          padding: "16px",
                          borderRadius: "8px",
                          marginBottom: "24px",
                          border: `1px solid ${theme.token.colorPrimary}15`,
                        }}
                      >
                        Margaret has basic computer skills and uses the internet for research and email. She prefers
                        websites with clear navigation, detailed information, and larger text. She takes time to read
                        everything and appreciates step-by-step guidance. She often calls businesses to confirm online
                        information.
                      </Paragraph>

                      <Title level={4} style={{ color: theme.token.colorPrimary, marginBottom: "16px" }}>
                         Primary Goal:
                      </Title>
                      <div
                        style={{
                          background:
                            currentTheme === "modern"
                              ? "linear-gradient(135deg, #e6f3ff 0%, #cce7ff 100%)"
                              : "linear-gradient(135deg, #fef5e7 0%, #fde68a 100%)",
                          padding: "20px",
                          borderRadius: "12px",
                          border: `2px solid ${theme.token.colorPrimary}30`,
                          fontStyle: "italic",
                          fontSize: "16px",
                          lineHeight: 1.6,
                        }}
                      >
                        <strong>
                          "I want to explore the salon's services, learn about pricing and what each treatment includes,
                          read about the stylists, and then confidently book a color treatment appointment."
                        </strong>
                      </div>
                    </div>
                  </Card>
                </Col>
              </Row>
            </div>

            {/* Enhanced Storyboards Section */}
            <div
              style={{
                padding: "80px 50px",
                background: theme.token.colorBgContainer,
              }}
            >
              <Title
                level={2}
                style={{
                  textAlign: "center",
                  marginBottom: "50px",
                  color: theme.token.colorPrimary,
                  fontSize: "2.5rem",
                }}
              >
                Storyboards
              </Title>

              {/* Lucy's Enhanced Storyboard - Modern Theme */}
              <Card
                style={{
                  marginBottom: "60px",
                  borderRadius: theme.token.borderRadius,
                  border: `2px solid ${theme.token.colorPrimary}20`,
                  boxShadow: "0 12px 48px rgba(0,0,0,0.1)",
                  overflow: "hidden",
                }}
              >
                <div
                  style={{
                    background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
                    padding: "40px",
                    margin: "-24px -24px 40px -24px",
                    color: "white",
                    textAlign: "center",
                  }}
                >
                  <DesktopOutlined style={{ fontSize: "48px", marginBottom: "16px" }} />
                  <Title level={2} style={{ color: "white", margin: 0, textShadow: "0 2px 4px rgba(0,0,0,0.3)" }}>
                    Lucy's Journey - Modern Design Theme
                  </Title>
                  <Text style={{ color: "rgba(255,255,255,0.9)", fontSize: "18px" }}>
                    Fast, Efficient, Minimal Interface
                  </Text>
                </div>

                <div style={{ padding: "0 20px 20px" }}>
                  <Paragraph
                    style={{
                      fontSize: "18px",
                      marginBottom: "40px",
                      textAlign: "center",
                      background: "#f8fafc",
                      padding: "20px",
                      borderRadius: "12px",
                      border: "1px solid #e2e8f0",
                    }}
                  >
                    <strong> Scenario:</strong> Lucy, a busy marketing professional, needs to book a haircut during
                    her lunch break. She wants to book with Jessica for Monday, May 27, at 2:00 PM. She expects a quick,
                    streamlined process.
                  </Paragraph>

                  <Row gutter={[32, 32]}>
                    {/* Step 1 - Enhanced Homepage Mockup */}
                    <Col xs={24} lg={8}>
                      <Card
                        size="small"
                        style={{
                          textAlign: "center",
                          height: "100%",
                          border: "2px solid #e2e8f0",
                          borderRadius: "16px",
                        }}
                      >
                        <div
                          style={{
                            height: "520px",
                            background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
                            borderRadius: "12px",
                            display: "flex",
                            flexDirection: "column",
                            justifyContent: "center",
                            alignItems: "center",
                            color: "white",
                            marginBottom: "20px",
                            position: "relative",
                            overflow: "hidden",
                          }}
                        >
                          {/* Header */}
                          <div
                            style={{
                              position: "absolute",
                              top: 0,
                              left: 0,
                              right: 0,
                              background: "rgba(255,255,255,0.95)",
                              color: "#1a365d",
                              padding: "12px 20px",
                              display: "flex",
                              justifyContent: "space-between",
                              alignItems: "center",
                              fontSize: "14px",
                              fontWeight: "bold",
                            }}
                          >
                            <span>Max Hair Studio</span>
                            <div style={{ display: "flex", gap: "16px", fontSize: "10px" }}>
                              <span>Home</span>
                              <span>Services</span>
                              <span>Book</span>
                              <span>Contact</span>
                            </div>
                          </div>

                          {/* Hero Content */}
                          <div style={{ textAlign: "center", marginTop: "40px" }}>
                            <div style={{ fontSize: "24px", fontWeight: "bold", marginBottom: "12px" }}>
                              Transform Your Look
                            </div>
                            <div style={{ fontSize: "12px", marginBottom: "20px", opacity: 0.9 }}>
                              Expert stylists • Premium service • Book online
                            </div>
                            <div
                              style={{
                                background: "#1a365d",
                                color: "white",
                                padding: "12px 24px",
                                borderRadius: "8px",
                                fontSize: "14px",
                                fontWeight: "bold",
                                display: "inline-block",
                                boxShadow: "0 4px 12px rgba(0,0,0,0.2)",
                                cursor: "pointer",
                              }}
                            >
                              BOOK APPOINTMENT
                            </div>
                            <div
                              style={{
                                background: "rgba(255,255,255,0.2)",
                                color: "white",
                                padding: "12px 24px",
                                borderRadius: "8px",
                                fontSize: "14px",
                                display: "inline-block",
                                marginLeft: "12px",
                                border: "1px solid rgba(255,255,255,0.3)",
                              }}
                            >
                              View Services
                            </div>
                          </div>

                          {/* Quick Stats */}
                          <div
                            style={{
                              position: "absolute",
                              bottom: "20px",
                              left: "20px",
                              right: "20px",
                              display: "flex",
                              justifyContent: "space-around",
                              fontSize: "10px",
                              opacity: 0.8,
                            }}
                          >
                            <div>⭐ 4.9/5 Rating</div>
                            <div>⚡ Quick Booking</div>
                            <div>👥 Expert Team</div>
                          </div>
                        </div>

                        <Title level={4} style={{ color: "#1a365d", marginBottom: "12px" }}>
                          Step 1: Clean Landing Page
                        </Title>
                        <Text style={{ fontSize: "14px", lineHeight: 1.5 }}>
                          Lucy lands on a clean, modern homepage with minimal distractions. The prominent "BOOK
                          APPOINTMENT" button immediately catches her attention. The design uses plenty of white space
                          and clear typography that appeals to her preference for efficiency.
                        </Text>
                        <div
                          style={{
                            marginTop: "12px",
                            padding: "8px",
                            background: "#e6f3ff",
                            borderRadius: "6px",
                            fontSize: "12px",
                            color: "#1a365d",
                          }}
                        >
                          <strong>⏱️ Time spent:</strong> 5 seconds to find booking button
                        </div>
                      </Card>
                    </Col>

                    {/* Step 2 - Enhanced Service Selection */}
                    <Col xs={24} lg={8}>
                      <Card
                        size="small"
                        style={{
                          textAlign: "center",
                          height: "100%",
                          border: "2px solid #e2e8f0",
                          borderRadius: "16px",
                        }}
                      >
                        <div
                          style={{
                            height: "520px",
                            background: "#ffffff",
                            border: "2px solid #1a365d",
                            borderRadius: "12px",
                            display: "flex",
                            flexDirection: "column",
                            padding: "20px",
                            marginBottom: "20px",
                            position: "relative",
                          }}
                        >
                          {/* Progress Indicator */}
                          <div
                            style={{
                              display: "flex",
                              justifyContent: "center",
                              marginBottom: "20px",
                              gap: "8px",
                            }}
                          >
                            <div
                              style={{ width: "30px", height: "4px", background: "#1a365d", borderRadius: "2px" }}
                            ></div>
                            <div
                              style={{ width: "30px", height: "4px", background: "#e2e8f0", borderRadius: "2px" }}
                            ></div>
                            <div
                              style={{ width: "30px", height: "4px", background: "#e2e8f0", borderRadius: "2px" }}
                            ></div>
                            <div
                              style={{ width: "30px", height: "4px", background: "#e2e8f0", borderRadius: "2px" }}
                            ></div>
                          </div>

                          <div style={{ fontSize: "18px", fontWeight: "bold", marginBottom: "20px", color: "#1a365d" }}>
                            Select Service & Stylist
                          </div>

                          {/* Service Selection */}
                          <div style={{ marginBottom: "16px", textAlign: "left" }}>
                            <div style={{ fontSize: "12px", marginBottom: "8px", color: "#4a5568", fontWeight: "500" }}>
                              Choose Service:
                            </div>
                            <div
                              style={{
                                background: "#1a365d",
                                color: "white",
                                padding: "12px",
                                borderRadius: "8px",
                                fontSize: "12px",
                                marginBottom: "6px",
                                display: "flex",
                                justifyContent: "space-between",
                                alignItems: "center",
                              }}
                            >
                              <span>✓ Women's Cut & Style</span>
                              <span style={{ fontWeight: "bold" }}>$65</span>
                            </div>
                            <div style={{ fontSize: "10px", color: "#718096", marginBottom: "4px" }}>
                              Duration: 60 minutes
                            </div>
                          </div>

                          {/* Stylist Selection */}
                          <div style={{ marginBottom: "20px", textAlign: "left" }}>
                            <div style={{ fontSize: "12px", marginBottom: "8px", color: "#4a5568", fontWeight: "500" }}>
                              Choose Stylist:
                            </div>
                            <div
                              style={{
                                background: "#f7fafc",
                                border: "2px solid #1a365d",
                                padding: "12px",
                                borderRadius: "8px",
                                fontSize: "12px",
                                display: "flex",
                                justifyContent: "space-between",
                                alignItems: "center",
                              }}
                            >
                              <span>✓ Jessica Martinez - Senior Stylist</span>
                              <span style={{ color: "#1a365d" }}>⭐ 4.9</span>
                            </div>
                          </div>

                          {/* Next Button */}
                          <div style={{ marginTop: "auto" }}>
                            <div
                              style={{
                                background: "#1a365d",
                                color: "white",
                                padding: "12px 24px",
                                borderRadius: "8px",
                                fontSize: "14px",
                                fontWeight: "bold",
                                cursor: "pointer",
                                boxShadow: "0 2px 8px rgba(26, 54, 93, 0.3)",
                              }}
                            >
                              Continue to Date & Time →
                            </div>
                          </div>
                        </div>

                        <Title level={4} style={{ color: "#1a365d", marginBottom: "12px" }}>
                          Step 2: Streamlined Selection
                        </Title>
                        <Text style={{ fontSize: "14px", lineHeight: 1.5 }}>
                          Lucy quickly selects her preferred service and stylist. The interface shows clear pricing,
                          duration, and stylist ratings. The progress indicator helps her understand how many steps
                          remain. Everything is optimized for speed and clarity.
                        </Text>
                        <div
                          style={{
                            marginTop: "12px",
                            padding: "8px",
                            background: "#e6f3ff",
                            borderRadius: "6px",
                            fontSize: "12px",
                            color: "#1a365d",
                          }}
                        >
                          <strong>⏱️ Time spent:</strong> 30 seconds to make selections
                        </div>
                      </Card>
                    </Col>

                    {/* Step 3 - Enhanced Date/Time Selection */}
                    <Col xs={24} lg={8}>
                      <Card
                        size="small"
                        style={{
                          textAlign: "center",
                          height: "100%",
                          border: "2px solid #e2e8f0",
                          borderRadius: "16px",
                        }}
                      >
                        <div
                          style={{
                            height: "520px",
                            background: "#ffffff",
                            border: "2px solid #1a365d",
                            borderRadius: "12px",
                            display: "flex",
                            flexDirection: "column",
                            padding: "20px",
                            marginBottom: "20px",
                            position: "relative",
                          }}
                        >
                          {/* Progress Indicator */}
                          <div
                            style={{
                              display: "flex",
                              justifyContent: "center",
                              marginBottom: "20px",
                              gap: "8px",
                            }}
                          >
                            <div
                              style={{ width: "30px", height: "4px", background: "#1a365d", borderRadius: "2px" }}
                            ></div>
                            <div
                              style={{ width: "30px", height: "4px", background: "#1a365d", borderRadius: "2px" }}
                            ></div>
                            <div
                              style={{ width: "30px", height: "4px", background: "#e2e8f0", borderRadius: "2px" }}
                            ></div>
                            <div
                              style={{ width: "30px", height: "4px", background: "#e2e8f0", borderRadius: "2px" }}
                            ></div>
                          </div>

                          <div style={{ fontSize: "18px", fontWeight: "bold", marginBottom: "20px", color: "#1a365d" }}>
                            Choose Date & Time
                          </div>

                          {/* Calendar Widget */}
                          <div style={{ marginBottom: "16px", textAlign: "left" }}>
                            <div style={{ fontSize: "12px", marginBottom: "8px", color: "#4a5568", fontWeight: "500" }}>
                              Select Date:
                            </div>
                            <div
                              style={{
                                background: "#f7fafc",
                                border: "1px solid #e2e8f0",
                                borderRadius: "8px",
                                padding: "12px",
                                fontSize: "11px",
                              }}
                            >
                              <div
                                style={{
                                  display: "grid",
                                  gridTemplateColumns: "repeat(7, 1fr)",
                                  gap: "4px",
                                  textAlign: "center",
                                }}
                              >
                                <div style={{ fontWeight: "bold", color: "#4a5568" }}>S</div>
                                <div style={{ fontWeight: "bold", color: "#4a5568" }}>M</div>
                                <div style={{ fontWeight: "bold", color: "#4a5568" }}>T</div>
                                <div style={{ fontWeight: "bold", color: "#4a5568" }}>W</div>
                                <div style={{ fontWeight: "bold", color: "#4a5568" }}>T</div>
                                <div style={{ fontWeight: "bold", color: "#4a5568" }}>F</div>
                                <div style={{ fontWeight: "bold", color: "#4a5568" }}>S</div>
                                <div></div>
                                <div></div>
                                <div></div>
                                <div></div>
                                <div></div>
                                <div>24</div>
                                <div>25</div>
                                <div>26</div>
                                <div
                                  style={{
                                    background: "#1a365d",
                                    color: "white",
                                    borderRadius: "4px",
                                    padding: "4px",
                                  }}
                                >
                                  27
                                </div>
                                <div>28</div>
                                <div>29</div>
                                <div>30</div>
                                <div>31</div>
                              </div>
                            </div>
                          </div>

                          {/* Time Slots */}
                          <div style={{ marginBottom: "20px", textAlign: "left" }}>
                            <div style={{ fontSize: "12px", marginBottom: "8px", color: "#4a5568", fontWeight: "500" }}>
                              Available Times:
                            </div>
                            <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "6px" }}>
                              <div
                                style={{
                                  background: "#f7fafc",
                                  padding: "6px",
                                  borderRadius: "4px",
                                  fontSize: "10px",
                                  textAlign: "center",
                                }}
                              >
                                1:30 PM
                              </div>
                              <div
                                style={{
                                  background: "#1a365d",
                                  color: "white",
                                  padding: "6px",
                                  borderRadius: "4px",
                                  fontSize: "10px",
                                  textAlign: "center",
                                  fontWeight: "bold",
                                }}
                              >
                                2:00 PM ✓
                              </div>
                              <div
                                style={{
                                  background: "#f7fafc",
                                  padding: "6px",
                                  borderRadius: "4px",
                                  fontSize: "10px",
                                  textAlign: "center",
                                }}
                              >
                                2:30 PM
                              </div>
                            </div>
                          </div>

                          {/* Continue Button */}
                          <div style={{ marginTop: "auto" }}>
                            <div
                              style={{
                                background: "#1a365d",
                                color: "white",
                                padding: "12px 24px",
                                borderRadius: "8px",
                                fontSize: "14px",
                                fontWeight: "bold",
                                cursor: "pointer",
                                boxShadow: "0 2px 8px rgba(26, 54, 93, 0.3)",
                              }}
                            >
                              Continue to Details →
                            </div>
                          </div>
                        </div>

                        <Title level={4} style={{ color: "#1a365d", marginBottom: "12px" }}>
                          Step 3: Quick Date Selection
                        </Title>
                        <Text style={{ fontSize: "14px", lineHeight: 1.5 }}>
                          Lucy easily finds Monday, May 27th on the calendar and selects her preferred 2:00 PM time
                          slot. The interface shows available times clearly and highlights her selection. The process
                          remains fast and intuitive.
                        </Text>
                        <div
                          style={{
                            marginTop: "12px",
                            padding: "8px",
                            background: "#e6f3ff",
                            borderRadius: "6px",
                            fontSize: "12px",
                            color: "#1a365d",
                          }}
                        >
                          <strong>⏱️ Time spent:</strong> 20 seconds to select date/time
                        </div>
                      </Card>
                    </Col>
                  </Row>

                  {/* Additional Steps Row */}
                  <Row gutter={[32, 32]} style={{ marginTop: "32px" }}>
                    {/* Step 4 - Contact Info */}
                    <Col xs={24} lg={8}>
                      <Card
                        size="small"
                        style={{
                          textAlign: "center",
                          height: "100%",
                          border: "2px solid #e2e8f0",
                          borderRadius: "16px",
                        }}
                      >
                        <div
                          style={{
                            height: "520px",
                            background: "#ffffff",
                            border: "2px solid #1a365d",
                            borderRadius: "12px",
                            display: "flex",
                            flexDirection: "column",
                            padding: "20px",
                            marginBottom: "20px",
                          }}
                        >
                          <div style={{ fontSize: "16px", fontWeight: "bold", marginBottom: "16px", color: "#1a365d" }}>
                            Contact Information
                          </div>

                          <div style={{ textAlign: "left", flex: 1 }}>
                            <div style={{ marginBottom: "12px" }}>
                              <input
                                style={{
                                  width: "100%",
                                  padding: "8px",
                                  border: "1px solid #e2e8f0",
                                  borderRadius: "6px",
                                  fontSize: "12px",
                                }}
                                placeholder="First Name"
                                defaultValue="Lucy"
                              />
                            </div>
                            <div style={{ marginBottom: "12px" }}>
                              <input
                                style={{
                                  width: "100%",
                                  padding: "8px",
                                  border: "1px solid #e2e8f0",
                                  borderRadius: "6px",
                                  fontSize: "12px",
                                }}
                                placeholder="Last Name"
                                defaultValue="Chen"
                              />
                            </div>
                            <div style={{ marginBottom: "12px" }}>
                              <input
                                style={{
                                  width: "100%",
                                  padding: "8px",
                                  border: "1px solid #e2e8f0",
                                  borderRadius: "6px",
                                  fontSize: "12px",
                                }}
                                placeholder="Email"
                                defaultValue="lucy.chen@email.com"
                              />
                            </div>
                            <div style={{ marginBottom: "16px" }}>
                              <input
                                style={{
                                  width: "100%",
                                  padding: "8px",
                                  border: "1px solid #e2e8f0",
                                  borderRadius: "6px",
                                  fontSize: "12px",
                                }}
                                placeholder="Phone"
                                defaultValue="(613) 555-0123"
                              />
                            </div>
                          </div>

                          <div
                            style={{
                              background: "#1a365d",
                              color: "white",
                              padding: "12px 24px",
                              borderRadius: "8px",
                              fontSize: "14px",
                              fontWeight: "bold",
                              cursor: "pointer",
                            }}
                          >
                            Complete Booking
                          </div>
                        </div>

                        <Title level={5} style={{ color: "#1a365d", marginBottom: "8px" }}>
                          Step 4: Quick Form
                        </Title>
                        <Text style={{ fontSize: "13px" }}>
                          Minimal form with auto-fill suggestions for returning users.
                        </Text>
                      </Card>
                    </Col>

                    {/* Step 5 - Confirmation */}
                    <Col xs={24} lg={8}>
                      <Card
                        size="small"
                        style={{
                          textAlign: "center",
                          height: "100%",
                          border: "2px solid #e2e8f0",
                          borderRadius: "16px",
                        }}
                      >
                        <div
                          style={{
                            height: "520px",
                            background: "#ffffff",
                            border: "2px solid #1a365d",
                            borderRadius: "12px",
                            display: "flex",
                            flexDirection: "column",
                            justifyContent: "center",
                            alignItems: "center",
                            padding: "20px",
                            marginBottom: "20px",
                          }}
                        >
                          <div style={{ fontSize: "48px", color: "#10b981", marginBottom: "16px" }}>✓</div>
                          <div style={{ fontSize: "18px", fontWeight: "bold", marginBottom: "16px", color: "#1a365d" }}>
                            Booking Confirmed!
                          </div>
                          <div
                            style={{ fontSize: "12px", textAlign: "center", color: "#4a5568", marginBottom: "16px" }}
                          >
                            <div style={{ marginBottom: "4px" }}>
                              <strong>Service:</strong> Women's Cut & Style
                            </div>
                            <div style={{ marginBottom: "4px" }}>
                              <strong>Stylist:</strong> Jessica Martinez
                            </div>
                            <div style={{ marginBottom: "4px" }}>
                              <strong>Date:</strong> Monday, May 27, 2025
                            </div>
                            <div style={{ marginBottom: "4px" }}>
                              <strong>Time:</strong> 2:00 PM
                            </div>
                            <div style={{ marginBottom: "12px" }}>
                              <strong>Duration:</strong> 60 minutes
                            </div>
                          </div>
                          <div
                            style={{
                              background: "#10b981",
                              color: "white",
                              padding: "8px 16px",
                              borderRadius: "6px",
                              fontSize: "12px",
                              marginBottom: "12px",
                            }}
                          >
                            Confirmation sent to email
                          </div>
                          <div
                            style={{
                              background: "#f7fafc",
                              color: "#1a365d",
                              padding: "8px 16px",
                              borderRadius: "6px",
                              fontSize: "11px",
                              border: "1px solid #e2e8f0",
                            }}
                          >
                            Add to Calendar
                          </div>
                        </div>

                        <Title level={5} style={{ color: "#1a365d", marginBottom: "8px" }}>
                          Step 5: Instant Confirmation
                        </Title>
                        <Text style={{ fontSize: "13px" }}>Clear confirmation with calendar integration option.</Text>
                      </Card>
                    </Col>

                    {/* Summary */}
                    <Col xs={24} lg={8}>
                      <Card
                        style={{
                          height: "100%",
                          background: "linear-gradient(135deg, #e6f3ff 0%, #cce7ff 100%)",
                          border: "2px solid #1a365d",
                          borderRadius: "16px",
                        }}
                      >
                        <Title level={4} style={{ color: "#1a365d", textAlign: "center", marginBottom: "20px" }}>
                          Journey Summary
                        </Title>
                        <div style={{ fontSize: "14px", lineHeight: 1.6 }}>
                          <div style={{ marginBottom: "12px" }}>
                            <strong>Total Time:</strong> Under 2 minutes
                          </div>
                          <div style={{ marginBottom: "12px" }}>
                            <strong>Design Focus:</strong> Minimal, clean, efficient
                          </div>
                          <div style={{ marginBottom: "12px" }}>
                            <strong>Key Features:</strong>
                            <ul style={{ marginTop: "8px", paddingLeft: "20px" }}>
                              <li>Prominent CTA buttons</li>
                              <li>Progress indicators</li>
                              <li>Minimal form fields</li>
                              <li>Clear visual hierarchy</li>
                              <li>Fast loading times</li>
                            </ul>
                          </div>
                          <div
                            style={{
                              background: "rgba(26, 54, 93, 0.1)",
                              padding: "12px",
                              borderRadius: "8px",
                              marginTop: "16px",
                            }}
                          >
                            <strong>Success Metrics:</strong>
                            <br />
                            Lucy completed her booking in under 2 minutes during her lunch break, exactly as intended.
                          </div>
                        </div>
                      </Card>
                    </Col>
                  </Row>
                </div>
              </Card>

              {/* Margaret's Enhanced Storyboard - Warm Theme */}
              <Card
                style={{
                  marginBottom: "40px",
                  borderRadius: theme.token.borderRadius,
                  border: `2px solid ${theme.token.colorPrimary}20`,
                  boxShadow: "0 12px 48px rgba(0,0,0,0.1)",
                  overflow: "hidden",
                }}
              >
                <div
                  style={{
                    background: "linear-gradient(135deg, #d4a574 0%, #8b4513 100%)",
                    padding: "40px",
                    margin: "-24px -24px 40px -24px",
                    color: "white",
                    textAlign: "center",
                  }}
                >
                  <MobileOutlined style={{ fontSize: "48px", marginBottom: "16px" }} />
                  <Title level={2} style={{ color: "white", margin: 0, textShadow: "0 2px 4px rgba(0,0,0,0.3)" }}>
                    Margaret's Journey - Warm Design Theme
                  </Title>
                  <Text style={{ color: "rgba(255,255,255,0.9)", fontSize: "18px" }}>
                    Detailed, Informative, Comfortable Interface
                  </Text>
                </div>

                <div style={{ padding: "0 20px 20px" }}>
                  <Paragraph
                    style={{
                      fontSize: "18px",
                      marginBottom: "40px",
                      textAlign: "center",
                      background: "#fefcf9",
                      padding: "20px",
                      borderRadius: "12px",
                      border: "1px solid #e6d3a3",
                    }}
                  >
                    <strong> Scenario:</strong> Margaret, a retired teacher, wants to explore the salon thoroughly
                    before booking. She needs detailed information about services, pricing, and stylists to make an
                    informed decision about a color treatment.
                  </Paragraph>

                  <Row gutter={[32, 32]}>
                    {/* Step 1 - Enhanced Homepage Exploration */}
                    <Col xs={24} lg={8}>
                      <Card
                        size="small"
                        style={{
                          textAlign: "center",
                          height: "100%",
                          border: "2px solid #e6d3a3",
                          borderRadius: "16px",
                        }}
                      >
                        <div
                          style={{
                            height: "520px",
                            background: "linear-gradient(135deg, #d4a574 0%, #8b4513 100%)",
                            borderRadius: "12px",
                            display: "flex",
                            flexDirection: "column",
                            justifyContent: "center",
                            alignItems: "center",
                            color: "white",
                            marginBottom: "20px",
                            position: "relative",
                            overflow: "hidden",
                          }}
                        >
                          {/* Header */}
                          <div
                            style={{
                              position: "absolute",
                              top: 0,
                              left: 0,
                              right: 0,
                              background: "rgba(255,251,247,0.95)",
                              color: "#744210",
                              padding: "12px 20px",
                              display: "flex",
                              justifyContent: "space-between",
                              alignItems: "center",
                              fontSize: "14px",
                              fontWeight: "bold",
                              fontFamily: "serif",
                            }}
                          >
                            <span>Max Hair Studio</span>
                            <div style={{ display: "flex", gap: "20px", fontSize: "11px" }}>
                              <span>Home</span>
                              <span>About Us</span>
                              <span>Services</span>
                              <span>Our Team</span>
                              <span>Contact</span>
                            </div>
                          </div>

                          {/* Hero Content */}
                          <div style={{ textAlign: "center", marginTop: "50px", padding: "0 20px" }}>
                            <div
                              style={{
                                fontSize: "22px",
                                fontWeight: "600",
                                marginBottom: "12px",
                                fontFamily: "serif",
                                lineHeight: 1.3,
                              }}
                            >
                              Premium Hair Care Since 1995
                            </div>
                            <div style={{ fontSize: "13px", marginBottom: "16px", opacity: 0.9, lineHeight: 1.4 }}>
                              Expert stylists • Luxury treatments • Personalized service
                              <br />
                              "Where tradition meets modern elegance"
                            </div>

                            {/* Service Highlights */}
                            <div
                              style={{
                                background: "rgba(255,251,247,0.9)",
                                color: "#744210",
                                padding: "12px",
                                borderRadius: "12px",
                                marginBottom: "16px",
                                fontSize: "11px",
                                lineHeight: 1.4,
                              }}
                            >
                              <div style={{ fontWeight: "bold", marginBottom: "6px" }}>Our Specialties:</div>
                              <div>• Color Correction & Balayage</div>
                              <div>• Keratin Treatments</div>
                              <div>• Bridal & Special Events</div>
                            </div>

                            <div
                              style={{
                                background: "#744210",
                                color: "white",
                                padding: "12px 20px",
                                borderRadius: "12px",
                                fontSize: "13px",
                                fontWeight: "bold",
                                display: "inline-block",
                                marginRight: "8px",
                                boxShadow: "0 4px 12px rgba(0,0,0,0.2)",
                              }}
                            >
                              EXPLORE SERVICES
                            </div>
                          </div>

                          {/* Trust Indicators */}
                          <div
                            style={{
                              position: "absolute",
                              bottom: "15px",
                              left: "15px",
                              right: "15px",
                              background: "rgba(255,251,247,0.9)",
                              color: "#744210",
                              padding: "8px",
                              borderRadius: "8px",
                              fontSize: "9px",
                              display: "flex",
                              justifyContent: "space-around",
                            }}
                          >
                            <div>⭐ 4.9/5 (200+ reviews)</div>
                            <div>🏆 Award Winning</div>
                            <div>📞 (613) 555-HAIR</div>
                          </div>
                        </div>

                        <Title level={4} style={{ color: "#744210", marginBottom: "12px" }}>
                          Step 1: Welcoming Homepage
                        </Title>
                        <Text style={{ fontSize: "14px", lineHeight: 1.5 }}>
                          Margaret arrives at a warm, inviting homepage that emphasizes the salon's heritage and
                          expertise. She reads about their specialties and sees trust indicators like reviews and
                          awards. The design feels comfortable and professional, encouraging her to explore further.
                        </Text>
                        <div
                          style={{
                            marginTop: "12px",
                            padding: "8px",
                            background: "#fef5e7",
                            borderRadius: "6px",
                            fontSize: "12px",
                            color: "#744210",
                          }}
                        >
                          <strong>⏱️ Time spent:</strong> 45 seconds reading content
                        </div>
                      </Card>
                    </Col>

                    {/* Step 2 - Detailed Service Exploration */}
                    <Col xs={24} lg={8}>
                      <Card
                        size="small"
                        style={{
                          textAlign: "center",
                          height: "100%",
                          border: "2px solid #e6d3a3",
                          borderRadius: "16px",
                        }}
                      >
                        <div
                          style={{
                            height: "520px",
                            background: "#fffbf7",
                            border: "2px solid #744210",
                            borderRadius: "12px",
                            display: "flex",
                            flexDirection: "column",
                            padding: "16px",
                            marginBottom: "20px",
                            position: "relative",
                            overflow: "auto",
                          }}
                        >
                          <div
                            style={{
                              fontSize: "16px",
                              fontWeight: "bold",
                              marginBottom: "16px",
                              color: "#744210",
                              fontFamily: "serif",
                            }}
                          >
                            Hair Coloring Services
                          </div>

                          {/* Service Cards */}
                          <div style={{ flex: 1, textAlign: "left" }}>
                            <div
                              style={{
                                background: "#fef5e7",
                                padding: "12px",
                                borderRadius: "12px",
                                marginBottom: "10px",
                                border: "1px solid #e6d3a3",
                              }}
                            >
                              <div
                                style={{
                                  display: "flex",
                                  justifyContent: "space-between",
                                  alignItems: "center",
                                  marginBottom: "6px",
                                }}
                              >
                                <span style={{ fontWeight: "bold", fontSize: "12px", color: "#744210" }}>
                                  Full Color Treatment
                                </span>
                                <span
                                  style={{
                                    background: "#744210",
                                    color: "white",
                                    padding: "2px 8px",
                                    borderRadius: "6px",
                                    fontSize: "10px",
                                    fontWeight: "bold",
                                  }}
                                >
                                  $85
                                </span>
                              </div>
                              <div style={{ fontSize: "10px", color: "#5d4037", marginBottom: "4px" }}>
                                Complete color transformation with premium products
                              </div>
                              <div style={{ fontSize: "9px", color: "#8d6e63" }}>
                                ⏱️ Duration: 120 minutes | Includes: Consultation, color application, styling
                              </div>
                            </div>

                            <div
                              style={{
                                background: "#fef5e7",
                                padding: "12px",
                                borderRadius: "12px",
                                marginBottom: "10px",
                                border: "1px solid #e6d3a3",
                              }}
                            >
                              <div
                                style={{
                                  display: "flex",
                                  justifyContent: "space-between",
                                  alignItems: "center",
                                  marginBottom: "6px",
                                }}
                              >
                                <span style={{ fontWeight: "bold", fontSize: "12px", color: "#744210" }}>
                                  Highlights/Lowlights
                                </span>
                                <span
                                  style={{
                                    background: "#744210",
                                    color: "white",
                                    padding: "2px 8px",
                                    borderRadius: "6px",
                                    fontSize: "10px",
                                    fontWeight: "bold",
                                  }}
                                >
                                  $120
                                </span>
                              </div>
                              <div style={{ fontSize: "10px", color: "#5d4037", marginBottom: "4px" }}>
                                Partial or full highlights with expert placement
                              </div>
                              <div style={{ fontSize: "9px", color: "#8d6e63" }}>
                                ⏱️ Duration: 150 minutes | Includes: Foiling technique, toning, styling
                              </div>
                            </div>

                            <div
                              style={{
                                background: "#744210",
                                color: "white",
                                padding: "12px",
                                borderRadius: "12px",
                                marginBottom: "10px",
                              }}
                            >
                              <div
                                style={{
                                  display: "flex",
                                  justifyContent: "space-between",
                                  alignItems: "center",
                                  marginBottom: "6px",
                                }}
                              >
                                <span style={{ fontWeight: "bold", fontSize: "12px" }}>Color Correction</span>
                                <span
                                  style={{
                                    background: "rgba(255,255,255,0.3)",
                                    padding: "2px 8px",
                                    borderRadius: "6px",
                                    fontSize: "10px",
                                    fontWeight: "bold",
                                  }}
                                >
                                  $200+
                                </span>
                              </div>
                              <div style={{ fontSize: "10px", marginBottom: "4px", opacity: 0.9 }}>
                                Fix previous color mishaps with expert techniques
                              </div>
                              <div style={{ fontSize: "9px", opacity: 0.8 }}>
                                ⏱️ Duration: 240+ minutes | Consultation required
                              </div>
                            </div>
                          </div>

                          {/* Learn More Button */}
                          <div style={{ marginTop: "auto", textAlign: "center" }}>
                            <div
                              style={{
                                background: "#744210",
                                color: "white",
                                padding: "10px 16px",
                                borderRadius: "12px",
                                fontSize: "12px",
                                fontWeight: "bold",
                                cursor: "pointer",
                                boxShadow: "0 2px 8px rgba(116, 66, 16, 0.3)",
                              }}
                            >
                              Read More About Our Process
                            </div>
                          </div>
                        </div>

                        <Title level={4} style={{ color: "#744210", marginBottom: "12px" }}>
                          Step 2: Detailed Service Information
                        </Title>
                        <Text style={{ fontSize: "14px", lineHeight: 1.5 }}>
                          Margaret thoroughly explores the services page, reading detailed descriptions, pricing, and
                          what's included in each treatment. She appreciates the comprehensive information that helps
                          her understand the value and process of each service.
                        </Text>
                        <div
                          style={{
                            marginTop: "12px",
                            padding: "8px",
                            background: "#fef5e7",
                            borderRadius: "6px",
                            fontSize: "12px",
                            color: "#744210",
                          }}
                        >
                          <strong>⏱️ Time spent:</strong> 2 minutes reading details
                        </div>
                      </Card>
                    </Col>

                    {/* Step 3 - Stylist Information */}
                    <Col xs={24} lg={8}>
                      <Card
                        size="small"
                        style={{
                          textAlign: "center",
                          height: "100%",
                          border: "2px solid #e6d3a3",
                          borderRadius: "16px",
                        }}
                      >
                        <div
                          style={{
                            height: "520px",
                            background: "#fffbf7",
                            border: "2px solid #744210",
                            borderRadius: "12px",
                            display: "flex",
                            flexDirection: "column",
                            padding: "16px",
                            marginBottom: "20px",
                            position: "relative",
                          }}
                        >
                          <div
                            style={{
                              fontSize: "16px",
                              fontWeight: "bold",
                              marginBottom: "16px",
                              color: "#744210",
                              fontFamily: "serif",
                            }}
                          >
                            Meet Our Color Specialists
                          </div>

                          {/* Stylist Profiles */}
                          <div style={{ flex: 1, textAlign: "left" }}>
                            <div
                              style={{
                                background: "#fef5e7",
                                padding: "12px",
                                borderRadius: "12px",
                                marginBottom: "12px",
                                border: "2px solid #744210",
                              }}
                            >
                              <div style={{ display: "flex", alignItems: "center", marginBottom: "8px" }}>
                                <div
                                  style={{
                                    width: "32px",
                                    height: "32px",
                                    background: "#744210",
                                    borderRadius: "50%",
                                    marginRight: "8px",
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    color: "white",
                                    fontSize: "12px",
                                    fontWeight: "bold",
                                  }}
                                >
                                  SJ
                                </div>
                                <div>
                                  <div style={{ fontWeight: "bold", fontSize: "12px", color: "#744210" }}>
                                    Sarah Johnson
                                  </div>
                                  <div style={{ fontSize: "10px", color: "#8d6e63" }}>Master Color Specialist</div>
                                </div>
                              </div>
                              <div style={{ fontSize: "10px", color: "#5d4037", marginBottom: "6px" }}>
                                15+ years experience • Balayage expert • Color correction specialist
                              </div>
                              <div style={{ fontSize: "9px", color: "#8d6e63" }}>
                                ⭐ 4.9/5 rating (89 reviews) | 🎓 Advanced Redken certification
                              </div>
                            </div>

                            <div
                              style={{
                                background: "#fef5e7",
                                padding: "12px",
                                borderRadius: "12px",
                                marginBottom: "12px",
                                border: "1px solid #e6d3a3",
                              }}
                            >
                              <div style={{ display: "flex", alignItems: "center", marginBottom: "8px" }}>
                                <div
                                  style={{
                                    width: "32px",
                                    height: "32px",
                                    background: "#8d6e63",
                                    borderRadius: "50%",
                                    marginRight: "8px",
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    color: "white",
                                    fontSize: "12px",
                                    fontWeight: "bold",
                                  }}
                                >
                                  EC
                                </div>
                                <div>
                                  <div style={{ fontWeight: "bold", fontSize: "12px", color: "#744210" }}>
                                    Emily Chen
                                  </div>
                                  <div style={{ fontSize: "10px", color: "#8d6e63" }}>Senior Colorist</div>
                                </div>
                              </div>
                              <div style={{ fontSize: "10px", color: "#5d4037", marginBottom: "6px" }}>
                                10+ years experience • Natural color expert • Gentle techniques
                              </div>
                              <div style={{ fontSize: "9px", color: "#8d6e63" }}>
                                ⭐ 4.8/5 rating (67 reviews) | 🎓 Aveda certified
                              </div>
                            </div>
                          </div>

                          {/* Book Consultation Button */}
                          <div style={{ textAlign: "center" }}>
                            <div
                              style={{
                                background: "#744210",
                                color: "white",
                                padding: "10px 16px",
                                borderRadius: "12px",
                                fontSize: "12px",
                                fontWeight: "bold",
                                cursor: "pointer",
                                boxShadow: "0 2px 8px rgba(116, 66, 16, 0.3)",
                              }}
                            >
                              Book Color Consultation
                            </div>
                          </div>
                        </div>

                        <Title level={4} style={{ color: "#744210", marginBottom: "12px" }}>
                          Step 3: Stylist Research
                        </Title>
                        <Text style={{ fontSize: "14px", lineHeight: 1.5 }}>
                          Margaret reviews detailed stylist profiles, reading about their experience, specialties, and
                          client reviews. This information helps her feel confident about choosing the right
                          professional for her color treatment needs.
                        </Text>
                        <div
                          style={{
                            marginTop: "12px",
                            padding: "8px",
                            background: "#fef5e7",
                            borderRadius: "6px",
                            fontSize: "12px",
                            color: "#744210",
                          }}
                        >
                          <strong>⏱️ Time spent:</strong> 1.5 minutes reviewing stylists
                        </div>
                      </Card>
                    </Col>
                  </Row>

                  {/* Additional Steps Row */}
                  <Row gutter={[32, 32]} style={{ marginTop: "32px" }}>
                    {/* Step 4 - Detailed Booking */}
                    <Col xs={24} lg={8}>
                      <Card
                        size="small"
                        style={{
                          textAlign: "center",
                          height: "100%",
                          border: "2px solid #e6d3a3",
                          borderRadius: "16px",
                        }}
                      >
                        <div
                          style={{
                            height: "520px",
                            background: "#fffbf7",
                            border: "2px solid #744210",
                            borderRadius: "12px",
                            display: "flex",
                            flexDirection: "column",
                            padding: "16px",
                            marginBottom: "20px",
                          }}
                        >
                          <div
                            style={{
                              fontSize: "16px",
                              fontWeight: "bold",
                              marginBottom: "16px",
                              color: "#744210",
                              fontFamily: "serif",
                            }}
                          >
                            Book Your Appointment
                          </div>

                          <div style={{ textAlign: "left", flex: 1, fontSize: "11px" }}>
                            <div
                              style={{
                                background: "#fef5e7",
                                padding: "10px",
                                borderRadius: "8px",
                                marginBottom: "8px",
                                border: "1px solid #e6d3a3",
                              }}
                            >
                              <strong>Selected Service:</strong> Full Color Treatment ($85)
                              <br />
                              <span style={{ color: "#8d6e63" }}>
                                Duration: 120 minutes | Includes consultation & styling
                              </span>
                            </div>

                            <div
                              style={{
                                background: "#fef5e7",
                                padding: "10px",
                                borderRadius: "8px",
                                marginBottom: "8px",
                                border: "1px solid #e6d3a3",
                              }}
                            >
                              <strong>Chosen Stylist:</strong> Sarah Johnson
                              <br />
                              <span style={{ color: "#8d6e63" }}>Master Color Specialist | ⭐ 4.9/5 rating</span>
                            </div>

                            <div
                              style={{
                                background: "#fef5e7",
                                padding: "10px",
                                borderRadius: "8px",
                                marginBottom: "8px",
                                border: "1px solid #e6d3a3",
                              }}
                            >
                              <strong>Preferred Date:</strong> June 15, 2025 (Friday)
                              <br />
                              <span style={{ color: "#8d6e63" }}>Available times: 10:00 AM, 1:00 PM, 3:30 PM</span>
                            </div>

                            <div
                              style={{
                                background: "#744210",
                                color: "white",
                                padding: "8px",
                                borderRadius: "8px",
                                marginBottom: "8px",
                                textAlign: "center",
                              }}
                            >
                              <strong>Selected: 10:00 AM ✓</strong>
                            </div>
                          </div>

                          <div
                            style={{
                              background: "#744210",
                              color: "white",
                              padding: "10px 16px",
                              borderRadius: "12px",
                              fontSize: "12px",
                              fontWeight: "bold",
                              cursor: "pointer",
                            }}
                          >
                            Confirm Booking Details
                          </div>
                        </div>

                        <Title level={5} style={{ color: "#744210", marginBottom: "8px" }}>
                          Step 4: Informed Booking
                        </Title>
                        <Text style={{ fontSize: "13px" }}>
                          Detailed booking summary with all service information clearly displayed.
                        </Text>
                      </Card>
                    </Col>

                    {/* Step 5 - Comprehensive Confirmation */}
                    <Col xs={24} lg={8}>
                      <Card
                        size="small"
                        style={{
                          textAlign: "center",
                          height: "100%",
                          border: "2px solid #e6d3a3",
                          borderRadius: "16px",
                        }}
                      >
                        <div
                          style={{
                            height: "520px",
                            background: "#fffbf7",
                            border: "2px solid #744210",
                            borderRadius: "12px",
                            display: "flex",
                            flexDirection: "column",
                            justifyContent: "center",
                            alignItems: "center",
                            padding: "16px",
                            marginBottom: "20px",
                          }}
                        >
                          <div style={{ fontSize: "36px", color: "#10b981", marginBottom: "12px" }}>✓</div>
                          <div
                            style={{
                              fontSize: "16px",
                              fontWeight: "bold",
                              marginBottom: "12px",
                              color: "#744210",
                              fontFamily: "serif",
                            }}
                          >
                            Appointment Confirmed
                          </div>
                          <div
                            style={{
                              fontSize: "11px",
                              textAlign: "left",
                              color: "#5d4037",
                              marginBottom: "12px",
                              background: "#fef5e7",
                              padding: "12px",
                              borderRadius: "8px",
                              width: "100%",
                            }}
                          >
                            <div style={{ marginBottom: "4px" }}>
                              <strong>Service:</strong> Full Color Treatment
                            </div>
                            <div style={{ marginBottom: "4px" }}>
                              <strong>Stylist:</strong> Sarah Johnson
                            </div>
                            <div style={{ marginBottom: "4px" }}>
                              <strong>Date:</strong> Friday, June 15, 2025
                            </div>
                            <div style={{ marginBottom: "4px" }}>
                              <strong>Time:</strong> 10:00 AM - 12:00 PM
                            </div>
                            <div style={{ marginBottom: "4px" }}>
                              <strong>Price:</strong> $85.00
                            </div>
                            <div style={{ marginBottom: "8px" }}>
                              <strong>Location:</strong> 123 Beauty Street
                            </div>
                            <div style={{ fontSize: "10px", color: "#8d6e63" }}>Confirmation #: LHS-2025-0615-001</div>
                          </div>
                          <div
                            style={{
                              background: "#10b981",
                              color: "white",
                              padding: "6px 12px",
                              borderRadius: "6px",
                              fontSize: "10px",
                              marginBottom: "8px",
                            }}
                          >
                            Email & SMS confirmation sent
                          </div>
                          <div
                            style={{
                              background: "#744210",
                              color: "white",
                              padding: "6px 12px",
                              borderRadius: "6px",
                              fontSize: "10px",
                            }}
                          >
                            Preparation instructions included
                          </div>
                        </div>

                        <Title level={5} style={{ color: "#744210", marginBottom: "8px" }}>
                          Step 5: Detailed Confirmation
                        </Title>
                        <Text style={{ fontSize: "13px" }}>
                          Comprehensive confirmation with preparation instructions and contact details.
                        </Text>
                      </Card>
                    </Col>

                    {/* Summary */}
                    <Col xs={24} lg={8}>
                      <Card
                        style={{
                          height: "100%",
                          background: "linear-gradient(135deg, #fef5e7 0%, #fde68a 100%)",
                          border: "2px solid #744210",
                          borderRadius: "16px",
                        }}
                      >
                        <Title level={4} style={{ color: "#744210", textAlign: "center", marginBottom: "20px" }}>
                          Journey Summary
                        </Title>
                        <div style={{ fontSize: "14px", lineHeight: 1.6 }}>
                          <div style={{ marginBottom: "12px" }}>
                            <strong>Total Time:</strong> 6-8 minutes
                          </div>
                          <div style={{ marginBottom: "12px" }}>
                            <strong>Design Focus:</strong> Detailed, warm, informative
                          </div>
                          <div style={{ marginBottom: "12px" }}>
                            <strong>Key Features:</strong>
                            <ul style={{ marginTop: "8px", paddingLeft: "20px" }}>
                              <li>Comprehensive service details</li>
                              <li>Stylist profiles & reviews</li>
                              <li>Rich visual information</li>
                              <li>Trust indicators</li>
                              <li>Detailed confirmations</li>
                            </ul>
                          </div>
                          <div
                            style={{
                              background: "rgba(116, 66, 16, 0.1)",
                              padding: "12px",
                              borderRadius: "8px",
                              marginTop: "16px",
                            }}
                          >
                            <strong>Success Metrics:</strong>
                            <br />
                            Margaret felt fully informed and confident about her choice, leading to a successful booking
                            and high satisfaction.
                          </div>
                        </div>
                      </Card>
                    </Col>
                  </Row>
                </div>
              </Card>
            </div>

            {/* Design Report Section */}
            <div
              style={{
                padding: "80px 50px",
                background: currentTheme === "modern" ? "#f8fafc" : "#fefcf9",
              }}
            >
              <Title
                level={2}
                style={{
                  textAlign: "center",
                  marginBottom: "50px",
                  color: theme.token.colorPrimary,
                  fontSize: "2.5rem",
                }}
              >
                📋 Design Report
              </Title>

              <Card
                style={{
                  marginBottom: "40px",
                  borderRadius: theme.token.borderRadius,
                  border: `2px solid ${theme.token.colorPrimary}20`,
                  boxShadow: "0 8px 32px rgba(0,0,0,0.1)",
                }}
              >
                <Title level={3} style={{ color: theme.token.colorPrimary, marginBottom: "30px" }}>
                  High-Fidelity Prototype Design Choices
                </Title>

                <Title level={4} style={{ color: theme.token.colorPrimary, marginBottom: "20px" }}>
                  Relationship to Storyboards:
                </Title>
                <Paragraph style={{ fontSize: "16px", lineHeight: 1.7, marginBottom: "30px" }}>
                  The final prototype successfully integrates both storyboard approaches while maintaining distinct
                  visual personalities for each user type. The implementation demonstrates how the same functional
                  requirements can be presented through dramatically different design languages:
                </Paragraph>

                <Row gutter={[32, 32]} style={{ marginBottom: "40px" }}>
                  <Col xs={24} lg={12}>
                    <div
                      style={{
                        background: currentTheme === "modern" ? "#e6f3ff" : "#fef5e7",
                        padding: "24px",
                        borderRadius: theme.token.borderRadius,
                        border: `1px solid ${theme.token.colorPrimary}20`,
                        height: "100%",
                      }}
                    >
                      <Title level={5} style={{ color: theme.token.colorPrimary, marginBottom: "16px" }}>
                        Modern Theme (Lucy's Journey)
                      </Title>
                      <ul style={{ fontSize: "15px", lineHeight: 1.6 }}>
                        <li>
                          <strong>Visual Language:</strong> Clean lines, minimal design, efficient navigation
                        </li>
                        <li>
                          <strong>Color Palette:</strong> Cool blues (#1a365d) with high contrast whites
                        </li>
                        <li>
                          <strong>Typography:</strong> Inter font for modern, professional feel
                        </li>
                        <li>
                          <strong>Layout:</strong> Generous white space, prominent CTAs, streamlined forms
                        </li>
                        <li>
                          <strong>Interaction:</strong> Quick processes, progress indicators, minimal steps
                        </li>
                        <li>
                          <strong>Content Strategy:</strong> Concise copy, bullet points, clear pricing
                        </li>
                      </ul>
                    </div>
                  </Col>
                  <Col xs={24} lg={12}>
                    <div
                      style={{
                        background: currentTheme === "modern" ? "#fef5e7" : "#e6f3ff",
                        padding: "24px",
                        borderRadius: theme.token.borderRadius,
                        border: `1px solid ${theme.token.colorPrimary}20`,
                        height: "100%",
                      }}
                    >
                      <Title level={5} style={{ color: theme.token.colorPrimary, marginBottom: "16px" }}>
                        Warm Theme (Margaret's Journey)
                      </Title>
                      <ul style={{ fontSize: "15px", lineHeight: 1.6 }}>
                        <li>
                          <strong>Visual Language:</strong> Rich textures, detailed information, comfortable pacing
                        </li>
                        <li>
                          <strong>Color Palette:</strong> Warm browns (#744210) with cream backgrounds
                        </li>
                        <li>
                          <strong>Typography:</strong> Playfair Display for traditional, elegant feel
                        </li>
                        <li>
                          <strong>Layout:</strong> Comfortable padding, detailed cards, comprehensive information
                        </li>
                        <li>
                          <strong>Interaction:</strong> Thorough exploration, detailed confirmations, trust indicators
                        </li>
                        <li>
                          <strong>Content Strategy:</strong> Descriptive text, testimonials, expert credentials
                        </li>
                      </ul>
                    </div>
                  </Col>
                </Row>

                <Title level={4} style={{ color: theme.token.colorPrimary, marginBottom: "20px" }}>
                  Visual Design Principles Implementation:
                </Title>
                <Row gutter={[24, 24]}>
                  <Col xs={24} md={12} lg={6}>
                    <div
                      style={{
                        background: theme.token.colorBgContainer,
                        padding: "20px",
                        borderRadius: "12px",
                        textAlign: "center",
                        border: `1px solid ${theme.token.colorPrimary}15`,
                        height: "100%",
                      }}
                    >
                      <div style={{ fontSize: "32px", marginBottom: "12px" }}>Colour</div>
                      <Title level={5} style={{ marginBottom: "12px" }}>
                        Color & Consistency
                      </Title>
                      <Text style={{ fontSize: "14px" }}>
                        Two distinct color themes with consistent application across all components and states.
                      </Text>
                    </div>
                  </Col>
                  <Col xs={24} md={12} lg={6}>
                    <div
                      style={{
                        background: theme.token.colorBgContainer,
                        padding: "20px",
                        borderRadius: "12px",
                        textAlign: "center",
                        border: `1px solid ${theme.token.colorPrimary}15`,
                        height: "100%",
                      }}
                    >
                      <div style={{ fontSize: "32px", marginBottom: "12px" }}>Text</div>
                      <Title level={5} style={{ marginBottom: "12px" }}>
                        Typography
                      </Title>
                      <Text style={{ fontSize: "14px" }}>
                        Strategic font choices that reinforce each theme's personality while maintaining readability.
                      </Text>
                    </div>
                  </Col>
                  <Col xs={24} md={12} lg={6}>
                    <div
                      style={{
                        background: theme.token.colorBgContainer,
                        padding: "20px",
                        borderRadius: "12px",
                        textAlign: "center",
                        border: `1px solid ${theme.token.colorPrimary}15`,
                        height: "100%",
                      }}
                    >
                      <div style={{ fontSize: "32px", marginBottom: "12px" }}>Spacing</div>
                      <Title level={5} style={{ marginBottom: "12px" }}>
                        Layout & Space
                      </Title>
                      <Text style={{ fontSize: "14px" }}>
                        Thoughtful use of negative space and content density to match user preferences and needs.
                      </Text>
                    </div>
                  </Col>
                  <Col xs={24} md={12} lg={6}>
                    <div
                      style={{
                        background: theme.token.colorBgContainer,
                        padding: "20px",
                        borderRadius: "12px",
                        textAlign: "center",
                        border: `1px solid ${theme.token.colorPrimary}15`,
                        height: "100%",
                      }}
                    >
                      <div style={{ fontSize: "32px", marginBottom: "12px" }}>Design</div>
                      <Title level={5} style={{ marginBottom: "12px" }}>
                        Hierarchy & Balance
                      </Title>
                      <Text style={{ fontSize: "14px" }}>
                        Clear visual hierarchy with strategic contrast and balanced element placement throughout.
                      </Text>
                    </div>
                  </Col>
                </Row>
              </Card>

              <Card
                style={{
                  marginBottom: "40px",
                  borderRadius: theme.token.borderRadius,
                  border: `2px solid ${theme.token.colorPrimary}20`,
                  boxShadow: "0 8px 32px rgba(0,0,0,0.1)",
                }}
              >
                <Title level={3} style={{ color: theme.token.colorPrimary, marginBottom: "20px" }}>
                  Code Repository
                </Title>
                <div
                  style={{
                    background: currentTheme === "modern" ? "#f8fafc" : "#fefcf9",
                    padding: "20px",
                    borderRadius: "12px",
                    marginBottom: "20px",
                  }}
                >
                  <Paragraph style={{ fontSize: "16px", marginBottom: "12px" }}>
                    <strong>GitHub Repository:</strong>{" "}
                    <a
                      href="https://github.com/Qerope/SEG3525-Assignments"
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{ color: theme.token.colorPrimary, textDecoration: "underline" }}
                    >
                      https://github.com/Qerope/SEG3525-Assignments
                    </a>
                  </Paragraph>
                  <Paragraph style={{ fontSize: "16px", marginBottom: "12px" }}>
                    <strong>GitHub Pages:</strong>{" "}
                    <a
                      href="https://qerope.github.io/SEG3525-Assignments/Devoir2/"
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{ color: theme.token.colorPrimary, textDecoration: "underline" }}
                    >
                      https://qerope.github.io/SEG3525-Assignments/Devoir2/
                    </a>
                  </Paragraph>
                </div>

                <Title level={4} style={{ color: theme.token.colorPrimary, marginBottom: "16px" }}>
                   Technical Implementation Highlights:
                </Title>
                <Row gutter={[16, 16]}>
                  <Col xs={24} md={8}>
                    <div
                      style={{
                        background: currentTheme === "modern" ? "#e6f3ff" : "#fef5e7",
                        padding: "16px",
                        borderRadius: "8px",
                        border: `1px solid ${theme.token.colorPrimary}20`,
                      }}
                    >
                      <strong>React Architecture:</strong> Component design with proper state management and
                      hooks
                    </div>
                  </Col>
                  <Col xs={24} md={8}>
                    <div
                      style={{
                        background: currentTheme === "modern" ? "#e6f3ff" : "#fef5e7",
                        padding: "16px",
                        borderRadius: "8px",
                        border: `1px solid ${theme.token.colorPrimary}20`,
                      }}
                    >
                      <strong>Dynamic Theming:</strong> Real-time theme switching with consistent design tokens
                    </div>
                  </Col>
                  <Col xs={24} md={8}>
                    <div
                      style={{
                        background: currentTheme === "modern" ? "#e6f3ff" : "#fef5e7",
                        padding: "16px",
                        borderRadius: "8px",
                        border: `1px solid ${theme.token.colorPrimary}20`,
                      }}
                    >
                      <strong>Responsive Design:</strong> Mobile-responsive approach with adaptive layouts
                    </div>
                  </Col>
                </Row>
              </Card>

              <Card
                style={{
                  borderRadius: theme.token.borderRadius,
                  border: `2px solid ${theme.token.colorPrimary}20`,
                  boxShadow: "0 8px 32px rgba(0,0,0,0.1)",
                }}
              >
                <Title level={3} style={{ color: theme.token.colorPrimary, marginBottom: "30px" }}>
                  Generative AI
                </Title>

                <Timeline
                  items={[
                    {
                      dot: (
                        <div
                          style={{
                            width: "12px",
                            height: "12px",
                            borderRadius: "50%",
                            background: theme.token.colorPrimary,
                          }}
                        />
                      ),
                      children: (
                        <div style={{ marginBottom: "24px" }}>
                          <Title level={5} style={{ color: theme.token.colorPrimary, marginBottom: "12px" }}>
                            Prototype Development
                          </Title>
                          <div
                            style={{
                              background: currentTheme === "modern" ? "#f8fafc" : "#fefcf9",
                              padding: "16px",
                              borderRadius: "8px",
                              marginBottom: "12px",
                            }}
                          >
                            <Paragraph style={{ marginBottom: "8px" }}>
                              <strong> Tool Used:</strong> ChatGPT, Grok
                            </Paragraph>
                            <Paragraph style={{ marginBottom: "8px" }}>
                              <strong> Process:</strong> Help debugging react code and layout of this report
                            </Paragraph>
                          </div>
                        </div>
                      ),
                    },
                  ]}
                />
              </Card>
            </div>
          </Content>

          <Footer
            style={{
              textAlign: "center",
              background: theme.token.colorPrimary,
              color: "white",
              padding: "50px",
            }}
          >
            <Row gutter={[32, 32]} style={{ marginBottom: "30px" }}>
              <Col xs={24} md={8}>
                <Title level={4} style={{ color: "white", marginBottom: "16px" }}>
                  Project
                </Title>
                <Text style={{ color: "rgba(255,255,255,0.8)", fontSize: "14px" }}>
                  SEG3525 - User Interface Design
                  <br />
                  University of Ottawa
                  <br />
                  Summer 2025
                </Text>
              </Col>
              <Col xs={24} md={8}>
                <Title level={4} style={{ color: "white", marginBottom: "16px" }}>
                  Student
                </Title>
                <Text style={{ color: "rgba(255,255,255,0.8)", fontSize: "14px" }}>
                  Group 9
                  <br />
                  Hamed Tavakoli Dastjerdi
                  <br />
                  Student #: 300321356
                </Text>
              </Col>
              <Col xs={24} md={8}>
                <Title level={4} style={{ color: "white", marginBottom: "16px" }}>
                  Resources
                </Title>
                <Text style={{ color: "rgba(255,255,255,0.8)", fontSize: "14px" }}>
                  <a href="https://github.com/Qerope/SEG3525-Assignments" style={{ color: "white" }}>
                    GitHub Repository
                  </a>
                  <br />
                  React + TypeScript
                </Text>
              </Col>
            </Row>
            <Divider style={{ borderColor: "rgba(255,255,255,0.2)", margin: "30px 0" }} />
            <Text style={{ color: "rgba(255,255,255,0.6)", fontSize: "14px" }}>
              © 2025 Max Hair Studio - User-Centered Design Project | Designed by Group 9 - Hamed Tavakoli Dastjerdi 
            </Text>
          </Footer>
        </Layout>
      </div>
    </ConfigProvider>
  )
}
