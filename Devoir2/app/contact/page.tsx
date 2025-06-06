"use client"

import { useState } from "react"
import { ConfigProvider, Layout, Menu, Button, Card, Row, Col, Typography, Space, Form, Input, message } from "antd"
import {
  HomeOutlined,
  ScissorOutlined,
  CalendarOutlined,
  InfoCircleOutlined,
  PhoneOutlined,
  BgColorsOutlined,
  MailOutlined,
  EnvironmentOutlined,
  ClockCircleOutlined,
} from "@ant-design/icons"
import { useRouter } from "next/navigation"

const { Header, Content, Footer } = Layout
const { Title, Paragraph, Text } = Typography
const { TextArea } = Input

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

export default function ContactPage() {
  const [currentTheme, setCurrentTheme] = useState("modern")
  const [form] = Form.useForm()
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

  const handleSubmit = async (values: any) => {
    try {
      // Simulate form submission
      message.success("Thank you for your message! We'll get back to you soon.")
      form.resetFields()
    } catch (error) {
      message.error("Something went wrong. Please try again.")
    }
  }

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
              selectedKeys={["/contact"]}
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
                Contact Us
              </Title>
              <Paragraph
                style={{
                  color: "white",
                  fontSize: "1.1rem",
                  maxWidth: "600px",
                  margin: "0 auto",
                }}
              >
                Get in touch with us to schedule an appointment or ask any questions about our services.
              </Paragraph>
            </div>

            {/* Contact Information */}
            <div
              style={{
                padding: "60px 50px",
                background: theme.token.colorBgContainer,
              }}
            >
              <Row gutter={[32, 32]}>
                <Col xs={24} lg={8}>
                  <Card
                    style={{
                      textAlign: "center",
                      height: "100%",
                      borderRadius: theme.token.borderRadius,
                      border: `1px solid ${theme.token.colorPrimary}20`,
                    }}
                  >
                    <EnvironmentOutlined
                      style={{ fontSize: "48px", color: theme.token.colorPrimary, marginBottom: "16px" }}
                    />
                    <Title level={3} style={{ color: theme.token.colorPrimary }}>
                      Visit Us
                    </Title>
                    <Paragraph>
                      123 Beauty Street
                      <br />
                      Ottawa, ON K1A 0A6
                      <br />
                      Canada
                    </Paragraph>
                  </Card>
                </Col>

                <Col xs={24} lg={8}>
                  <Card
                    style={{
                      textAlign: "center",
                      height: "100%",
                      borderRadius: theme.token.borderRadius,
                      border: `1px solid ${theme.token.colorPrimary}20`,
                    }}
                  >
                    <PhoneOutlined
                      style={{ fontSize: "48px", color: theme.token.colorPrimary, marginBottom: "16px" }}
                    />
                    <Title level={3} style={{ color: theme.token.colorPrimary }}>
                      Call Us
                    </Title>
                    <Paragraph>
                      Phone: (613) 555-HAIR
                      <br />
                      Text: (613) 555-4247
                      <br />
                      Emergency: (613) 555-0911
                    </Paragraph>
                  </Card>
                </Col>

                <Col xs={24} lg={8}>
                  <Card
                    style={{
                      textAlign: "center",
                      height: "100%",
                      borderRadius: theme.token.borderRadius,
                      border: `1px solid ${theme.token.colorPrimary}20`,
                    }}
                  >
                    <ClockCircleOutlined
                      style={{ fontSize: "48px", color: theme.token.colorPrimary, marginBottom: "16px" }}
                    />
                    <Title level={3} style={{ color: theme.token.colorPrimary }}>
                      Hours
                    </Title>
                    <Paragraph>
                      Mon-Fri: 9AM - 8PM
                      <br />
                      Saturday: 9AM - 6PM
                      <br />
                      Sunday: 10AM - 5PM
                    </Paragraph>
                  </Card>
                </Col>
              </Row>
            </div>

            {/* Contact Form */}
            <div
              style={{
                padding: "60px 50px",
                background: currentTheme === "modern" ? "#f8f9fa" : "#f5f2ed",
              }}
            >
              <Row gutter={[32, 32]} justify="center">
                <Col xs={24} lg={12}>
                  <Card
                    style={{
                      borderRadius: theme.token.borderRadius,
                      border: `1px solid ${theme.token.colorPrimary}20`,
                    }}
                  >
                    <Title
                      level={2}
                      style={{ textAlign: "center", color: theme.token.colorPrimary, marginBottom: "30px" }}
                    >
                      Send Us a Message
                    </Title>
                    <Form form={form} layout="vertical" onFinish={handleSubmit}>
                      <Row gutter={16}>
                        <Col span={12}>
                          <Form.Item
                            name="firstName"
                            label="First Name"
                            rules={[{ required: true, message: "Please enter your first name" }]}
                          >
                            <Input size="large" />
                          </Form.Item>
                        </Col>
                        <Col span={12}>
                          <Form.Item
                            name="lastName"
                            label="Last Name"
                            rules={[{ required: true, message: "Please enter your last name" }]}
                          >
                            <Input size="large" />
                          </Form.Item>
                        </Col>
                      </Row>

                      <Form.Item
                        name="email"
                        label="Email"
                        rules={[
                          { required: true, message: "Please enter your email" },
                          { type: "email", message: "Please enter a valid email" },
                        ]}
                      >
                        <Input size="large" prefix={<MailOutlined />} />
                      </Form.Item>

                      <Form.Item
                        name="phone"
                        label="Phone Number"
                        rules={[{ required: true, message: "Please enter your phone number" }]}
                      >
                        <Input size="large" prefix={<PhoneOutlined />} />
                      </Form.Item>

                      <Form.Item
                        name="subject"
                        label="Subject"
                        rules={[{ required: true, message: "Please enter a subject" }]}
                      >
                        <Input size="large" />
                      </Form.Item>

                      <Form.Item
                        name="message"
                        label="Message"
                        rules={[{ required: true, message: "Please enter your message" }]}
                      >
                        <TextArea rows={5} placeholder="Tell us how we can help you..." />
                      </Form.Item>

                      <Form.Item>
                        <Button type="primary" htmlType="submit" size="large" block>
                          Send Message
                        </Button>
                      </Form.Item>
                    </Form>
                  </Card>
                </Col>

                <Col xs={24} lg={12}>
                  <div style={{ height: "100%", display: "flex", flexDirection: "column", justifyContent: "center" }}>
                    <Title level={2} style={{ color: theme.token.colorPrimary, marginBottom: "30px" }}>
                      Why Choose Max Hair Studio?
                    </Title>
                    <Space direction="vertical" size="large">
                      <div>
                        <Title level={4} style={{ color: theme.token.colorPrimary, marginBottom: "8px" }}>
                          Expert Stylists
                        </Title>
                        <Paragraph>
                          Our team of experienced professionals stays up-to-date with the latest trends and techniques.
                        </Paragraph>
                      </div>

                      <div>
                        <Title level={4} style={{ color: theme.token.colorPrimary, marginBottom: "8px" }}>
                          Premium Products
                        </Title>
                        <Paragraph>
                          We use only the highest quality products to ensure the best results for your hair.
                        </Paragraph>
                      </div>

                      <div>
                        <Title level={4} style={{ color: theme.token.colorPrimary, marginBottom: "8px" }}>
                          Personalized Service
                        </Title>
                        <Paragraph>Every client receives individualized attention and customized treatments.</Paragraph>
                      </div>

                      <div>
                        <Title level={4} style={{ color: theme.token.colorPrimary, marginBottom: "8px" }}>
                          Relaxing Environment
                        </Title>
                        <Paragraph>Enjoy a luxurious and comfortable atmosphere during your visit.</Paragraph>
                      </div>
                    </Space>

                    <div style={{ marginTop: "30px" }}>
                      <Button
                        type="primary"
                        size="large"
                        onClick={() => router.push("/booking")}
                        style={{ marginRight: "16px" }}
                      >
                        Book Appointment
                      </Button>
                      <Button size="large" onClick={() => router.push("/services")}>
                        View Services
                      </Button>
                    </div>
                  </div>
                </Col>
              </Row>
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
