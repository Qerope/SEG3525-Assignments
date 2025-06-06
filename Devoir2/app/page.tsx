"use client"

import { useState } from "react"
import { ConfigProvider, Layout, Menu, Button, Card, Row, Col, Typography, Space, Rate, Avatar } from "antd"
import {
  HomeOutlined,
  ScissorOutlined,
  CalendarOutlined,
  InfoCircleOutlined,
  PhoneOutlined,
  BgColorsOutlined,
} from "@ant-design/icons"
import { useRouter } from "next/navigation"

const { Header, Content, Footer } = Layout
const { Title, Paragraph, Text } = Typography

// Enhanced theme configurations
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

export default function HomePage() {
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

  const services = [
    {
      title: "Haircuts & Styling",
      description: "Professional cuts and styling for all hair types",
      price: "From $45",
      image: "/placeholder.svg?height=200&width=300",
    },
    {
      title: "Hair Coloring",
      description: "Full color, highlights, and color correction",
      price: "From $85",
      image: "/placeholder.svg?height=200&width=300",
    },
    {
      title: "Hair Treatments",
      description: "Deep conditioning and repair treatments",
      price: "From $35",
      image: "/placeholder.svg?height=200&width=300",
    },
  ]

  const testimonials = [
    {
      name: "Sarah Johnson",
      rating: 5,
      comment: "Amazing service! Jessica gave me the perfect cut.",
      avatar: "/placeholder.svg?height=40&width=40",
    },
    {
      name: "Emily Chen",
      rating: 5,
      comment: "Love my new color! The team is so professional.",
      avatar: "/placeholder.svg?height=40&width=40",
    },
    {
      name: "Maria Rodriguez",
      rating: 5,
      comment: "Best salon experience I've ever had!",
      avatar: "/placeholder.svg?height=40&width=40",
    },
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
                Luxe Hair Studio
              </Title>
            </div>

            <Menu
              mode="horizontal"
              selectedKeys={["/"]}
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
            {/* Enhanced Hero Section */}
            <div
              style={{
                padding: "100px 50px",
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
                  fontSize: "4rem",
                  marginBottom: "24px",
                  fontFamily: currentTheme === "warm" ? "'Playfair Display', serif" : "'Inter', sans-serif",
                  fontWeight: currentTheme === "warm" ? 600 : 800,
                  textShadow: "0 2px 4px rgba(0,0,0,0.3)",
                  lineHeight: 1.2,
                }}
              >
                Transform Your Look
              </Title>
              <Paragraph
                style={{
                  color: "rgba(255,255,255,0.9)",
                  fontSize: "1.3rem",
                  marginBottom: "50px",
                  maxWidth: "700px",
                  margin: "0 auto 50px",
                  lineHeight: 1.6,
                }}
              >
                Experience luxury hair care with our expert stylists. Book your appointment today and discover your
                perfect style at Ottawa's premier salon.
              </Paragraph>
              <Space size="large">
                <Button
                  type="primary"
                  size="large"
                  onClick={() => router.push("/booking")}
                  style={{
                    height: "60px",
                    fontSize: "18px",
                    padding: "0 40px",
                    borderRadius: theme.token.borderRadius,
                    fontWeight: "bold",
                    boxShadow: "0 4px 16px rgba(0,0,0,0.2)",
                  }}
                >
                  Book Appointment
                </Button>
                <Button
                  size="large"
                  onClick={() => router.push("/services")}
                  style={{
                    height: "60px",
                    fontSize: "18px",
                    padding: "0 40px",
                    background: "rgba(255,255,255,0.15)",
                    borderColor: "rgba(255,255,255,0.5)",
                    color: "white",
                    borderRadius: theme.token.borderRadius,
                    fontWeight: "bold",
                    backdropFilter: "blur(10px)",
                  }}
                >
                  View Services
                </Button>
              </Space>
            </div>

            {/* Enhanced Services Section */}
            <div
              style={{
                padding: "100px 50px",
                background: theme.token.colorBgContainer,
              }}
            >
              <Title
                level={2}
                style={{
                  textAlign: "center",
                  marginBottom: "60px",
                  color: theme.token.colorPrimary,
                  fontSize: "2.5rem",
                  fontWeight: currentTheme === "warm" ? 600 : 700,
                }}
              >
                Our Services
              </Title>
              <Row gutter={[40, 40]} justify="center">
                {services.map((service, index) => (
                  <Col xs={24} md={8} key={index}>
                    <Card
                      hoverable
                      cover={
                        <img
                          alt={service.title}
                          src={service.image || "/placeholder.svg"}
                          style={{ height: "240px", objectFit: "cover" }}
                        />
                      }
                      style={{
                        height: "100%",
                        borderRadius: theme.token.borderRadius,
                        border: `2px solid ${theme.token.colorPrimary}20`,
                        boxShadow: "0 8px 32px rgba(0,0,0,0.1)",
                        overflow: "hidden",
                      }}
                      bodyStyle={{ padding: "24px" }}
                    >
                      <Card.Meta
                        title={
                          <Text
                            style={{
                              color: theme.token.colorPrimary,
                              fontSize: "20px",
                              fontWeight: "bold",
                              fontFamily: currentTheme === "warm" ? "'Playfair Display', serif" : "'Inter', sans-serif",
                            }}
                          >
                            {service.title}
                          </Text>
                        }
                        description={
                          <div>
                            <Paragraph style={{ marginBottom: "16px", fontSize: "15px", lineHeight: 1.6 }}>
                              {service.description}
                            </Paragraph>
                            <Text
                              strong
                              style={{
                                color: theme.token.colorPrimary,
                                fontSize: "18px",
                                background: currentTheme === "modern" ? "#f0f8ff" : "#fef5e7",
                                padding: "8px 12px",
                                borderRadius: "8px",
                                display: "inline-block",
                              }}
                            >
                              {service.price}
                            </Text>
                          </div>
                        }
                      />
                    </Card>
                  </Col>
                ))}
              </Row>
            </div>

            {/* Enhanced Testimonials Section */}
            <div
              style={{
                padding: "100px 50px",
                background: currentTheme === "modern" ? "#f8fafc" : "#fefcf9",
              }}
            >
              <Title
                level={2}
                style={{
                  textAlign: "center",
                  marginBottom: "60px",
                  color: theme.token.colorPrimary,
                  fontSize: "2.5rem",
                  fontWeight: currentTheme === "warm" ? 600 : 700,
                }}
              >
                What Our Clients Say
              </Title>
              <Row gutter={[40, 40]} justify="center">
                {testimonials.map((testimonial, index) => (
                  <Col xs={24} md={8} key={index}>
                    <Card
                      style={{
                        textAlign: "center",
                        height: "100%",
                        borderRadius: theme.token.borderRadius,
                        border: `2px solid ${theme.token.colorPrimary}20`,
                        boxShadow: "0 8px 32px rgba(0,0,0,0.1)",
                        background: theme.token.colorBgContainer,
                      }}
                      bodyStyle={{ padding: "32px" }}
                    >
                      <Avatar size={80} src={testimonial.avatar} style={{ marginBottom: "20px" }} />
                      <Title
                        level={4}
                        style={{
                          color: theme.token.colorPrimary,
                          marginBottom: "12px",
                          fontFamily: currentTheme === "warm" ? "'Playfair Display', serif" : "'Inter', sans-serif",
                        }}
                      >
                        {testimonial.name}
                      </Title>
                      <Rate
                        disabled
                        defaultValue={testimonial.rating}
                        style={{ marginBottom: "20px", fontSize: "18px" }}
                      />
                      <Paragraph
                        style={{
                          fontSize: "16px",
                          fontStyle: "italic",
                          lineHeight: 1.6,
                          color: theme.token.colorText,
                        }}
                      >
                        "{testimonial.comment}"
                      </Paragraph>
                    </Card>
                  </Col>
                ))}
              </Row>
            </div>
          </Content>

          <Footer
            style={{
              textAlign: "center",
              background: theme.token.colorPrimary,
              color: "white",
              padding: "60px 50px",
            }}
          >
            <Row gutter={[40, 40]}>
              <Col xs={24} md={8}>
                <Title level={4} style={{ color: "white", marginBottom: "20px" }}>
                  Luxe Hair Studio
                </Title>
                <Paragraph style={{ color: "rgba(255,255,255,0.8)", fontSize: "15px", lineHeight: 1.6 }}>
                  Premium hair care services
                  <br />
                  123 Beauty Street
                  <br />
                  Ottawa, ON K1A 0A6
                  <br />
                  (613) 555-HAIR
                </Paragraph>
              </Col>
              <Col xs={24} md={8}>
                <Title level={4} style={{ color: "white", marginBottom: "20px" }}>
                  Hours
                </Title>
                <Paragraph style={{ color: "rgba(255,255,255,0.8)", fontSize: "15px", lineHeight: 1.6 }}>
                  Monday - Friday: 9AM - 8PM
                  <br />
                  Saturday: 9AM - 6PM
                  <br />
                  Sunday: 10AM - 5PM
                </Paragraph>
              </Col>
              <Col xs={24} md={8}>
                <Title level={4} style={{ color: "white", marginBottom: "20px" }}>
                  Follow Us
                </Title>
                <Space>
                  <Button type="link" style={{ color: "white", fontSize: "15px" }}>
                    Instagram
                  </Button>
                  <Button type="link" style={{ color: "white", fontSize: "15px" }}>
                    Facebook
                  </Button>
                  <Button type="link" style={{ color: "white", fontSize: "15px" }}>
                    Twitter
                  </Button>
                </Space>
              </Col>
            </Row>
            <div
              style={{
                marginTop: "40px",
                paddingTop: "30px",
                borderTop: "1px solid rgba(255,255,255,0.2)",
              }}
            >
              <Text style={{ color: "rgba(255,255,255,0.6)", fontSize: "14px" }}>
                © 2025 Luxe Hair Studio. All rights reserved. | Designed by Group 9 - Hamed Tavakoli Dastjerdi
              </Text>
            </div>
          </Footer>
        </Layout>
      </div>
    </ConfigProvider>
  )
}
