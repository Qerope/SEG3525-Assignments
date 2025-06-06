"use client"

import { useState } from "react"
import { ConfigProvider, Layout, Menu, Button, Card, Row, Col, Typography, Space, Divider, Tag } from "antd"
import {
  HomeOutlined,
  ScissorOutlined,
  CalendarOutlined,
  InfoCircleOutlined,
  PhoneOutlined,
  BgColorsOutlined,
  ClockCircleOutlined,
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

export default function ServicesPage() {
  const [currentTheme, setCurrentTheme] = useState("modern")
  const router = useRouter()

  const toggleTheme = () => {
    setCurrentTheme(currentTheme === "modern" ? "warm" : "modern")
  }

  const theme = currentTheme === "modern" ? modernTheme : warmTheme
  const bgStyle =
    currentTheme === "modern"
      ? { background: "linear-gradient(135deg, rgb(26, 54, 93) 0%, rgb(44, 82, 130) 100%)", minHeight: "100vh" }
      : { background: "linear-gradient(135deg, #d4a574 0%, #8b4513 100%)", minHeight: "100vh" }

  const menuItems = [
    { key: "/", label: "Home", icon: <HomeOutlined /> },
    { key: "/services", label: "Services", icon: <ScissorOutlined /> },
    { key: "/booking", label: "Book Now", icon: <CalendarOutlined /> },
    { key: "/info", label: "Info", icon: <InfoCircleOutlined /> },
    { key: "/contact", label: "Contact", icon: <PhoneOutlined /> },
  ]

  const serviceCategories = [
    {
      category: "Haircuts & Styling",
      services: [
        {
          name: "Women's Cut & Style",
          price: "$65",
          duration: "60 min",
          description: "Professional cut with wash and style",
        },
        {
          name: "Men's Cut & Style",
          price: "$45",
          duration: "45 min",
          description: "Classic or modern cuts with styling",
        },
        { name: "Children's Cut", price: "$35", duration: "30 min", description: "Gentle cuts for kids under 12" },
        { name: "Blowout & Style", price: "$40", duration: "45 min", description: "Professional blowout and styling" },
      ],
    },
    {
      category: "Hair Coloring",
      services: [
        { name: "Full Color", price: "$85", duration: "120 min", description: "Complete color transformation" },
        { name: "Root Touch-up", price: "$65", duration: "90 min", description: "Refresh your roots" },
        { name: "Highlights/Lowlights", price: "$120", duration: "150 min", description: "Partial or full highlights" },
        { name: "Balayage", price: "$150", duration: "180 min", description: "Hand-painted highlights" },
        { name: "Color Correction", price: "$200", duration: "240 min", description: "Fix previous color mishaps" },
      ],
    },
    {
      category: "Hair Treatments",
      services: [
        { name: "Deep Conditioning", price: "$35", duration: "30 min", description: "Intensive moisture treatment" },
        { name: "Keratin Treatment", price: "$250", duration: "180 min", description: "Smoothing and strengthening" },
        { name: "Scalp Treatment", price: "$45", duration: "45 min", description: "Therapeutic scalp care" },
        { name: "Hair Mask", price: "$25", duration: "20 min", description: "Nourishing hair mask" },
      ],
    },
    {
      category: "Special Occasions",
      services: [
        { name: "Bridal Hair", price: "$150", duration: "120 min", description: "Wedding day styling" },
        { name: "Prom/Formal Updo", price: "$85", duration: "90 min", description: "Elegant formal styling" },
        { name: "Special Event Styling", price: "$75", duration: "75 min", description: "Custom styling for events" },
      ],
    },
  ]

  return (
    <ConfigProvider theme={theme}>
      <div style={bgStyle}>
        <Layout style={{ background: "transparent", minHeight: "100vh" }}>
          <Header
            style={{
              background: currentTheme === "modern" ? "rgba(255,255,255,0.95)" : "rgba(250,247,242,0.95)",
              backdropFilter: "blur(10px)",
              borderBottom: `1px solid ${theme.token.colorPrimary}20`,
              position: "sticky",
              top: 0,
              zIndex: 1000,
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
                Max Hair Studio
              </Title>
            </div>

            <Menu
              mode="horizontal"
              selectedKeys={["/services"]}
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

          <Content style={{ padding: "0" }}>
            {/* Hero Section */}
            <div
              style={{
                padding: "60px 50px",
                textAlign: "center",
                color: "white",
              }}
            >
              <Title
                level={1}
                style={{
                  color: "white",
                  fontSize: "3rem",
                  marginBottom: "20px",
                  fontFamily: currentTheme === "warm" ? "'Playfair Display', serif" : "'Inter', sans-serif",
                }}
              >
                Our Services
              </Title>
              <Paragraph
                style={{
                  color: "white",
                  fontSize: "1.1rem",
                  maxWidth: "600px",
                  margin: "0 auto",
                }}
              >
                Discover our comprehensive range of professional hair services, tailored to enhance your natural beauty.
              </Paragraph>
            </div>

            {/* Services Section */}
            <div
              style={{
                padding: "60px 50px",
                background: theme.token.colorBgContainer,
              }}
            >
              {serviceCategories.map((category, categoryIndex) => (
                <div key={categoryIndex} style={{ marginBottom: "60px" }}>
                  <Title
                    level={2}
                    style={{
                      color: theme.token.colorPrimary,
                      marginBottom: "30px",
                      textAlign: "center",
                    }}
                  >
                    {category.category}
                  </Title>
                  <Row gutter={[24, 24]}>
                    {category.services.map((service, serviceIndex) => (
                      <Col xs={24} md={12} lg={8} key={serviceIndex}>
                        <Card
                          hoverable
                          style={{
                            height: "100%",
                            borderRadius: theme.token.borderRadius,
                            border: `1px solid ${theme.token.colorPrimary}20`,
                          }}
                          actions={[
                            <Button type="primary" onClick={() => router.push("/booking")} key="book">
                              Book Now
                            </Button>,
                          ]}
                        >
                          <Card.Meta
                            title={
                              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                                <Text style={{ color: theme.token.colorPrimary, fontSize: "16px", fontWeight: "bold" }}>
                                  {service.name}
                                </Text>
                                <Tag color={theme.token.colorPrimary} style={{ fontSize: "14px", fontWeight: "bold" }}>
                                  {service.price}
                                </Tag>
                              </div>
                            }
                            description={
                              <div>
                                <Paragraph style={{ marginBottom: "8px", fontSize: "14px" }}>
                                  {service.description}
                                </Paragraph>
                                <div style={{ display: "flex", alignItems: "center", color: theme.token.colorPrimary }}>
                                  <ClockCircleOutlined style={{ marginRight: "4px" }} />
                                  <Text style={{ fontSize: "12px" }}>{service.duration}</Text>
                                </div>
                              </div>
                            }
                          />
                        </Card>
                      </Col>
                    ))}
                  </Row>
                  {categoryIndex < serviceCategories.length - 1 && (
                    <Divider style={{ margin: "40px 0", borderColor: theme.token.colorPrimary }} />
                  )}
                </div>
              ))}
            </div>

            {/* Call to Action */}
            <div
              style={{
                padding: "60px 50px",
                background: currentTheme === "modern" ? "#f8f9fa" : "#f5f2ed",
                textAlign: "center",
              }}
            >
              <Title level={2} style={{ color: theme.token.colorPrimary, marginBottom: "20px" }}>
                Ready to Transform Your Look?
              </Title>
              <Paragraph style={{ fontSize: "16px", marginBottom: "30px", maxWidth: "600px", margin: "0 auto 30px" }}>
                Book your appointment today and experience the luxury of professional hair care.
              </Paragraph>
              <Space size="large">
                <Button
                  type="primary"
                  size="large"
                  onClick={() => router.push("/booking")}
                  style={{ height: "45px", fontSize: "16px", padding: "0 25px" }}
                >
                  Book Appointment
                </Button>
                <Button
                  size="large"
                  onClick={() => router.push("/contact")}
                  style={{ height: "45px", fontSize: "16px", padding: "0 25px" }}
                >
                  Contact Us
                </Button>
              </Space>
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
              © 2025 Max Hair Studio. All rights reserved. | Designed by Group 9 - Hamed Tavakoli Dastjerdi
            </Text>
          </Footer>
        </Layout>
      </div>
    </ConfigProvider>
  )
}
