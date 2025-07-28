import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Palette,
  Share2,
  Code,
  Smartphone,
  TrendingUp,
  Users,
  Award,
  ArrowRight,
  Heart,
  MessageCircle,
  Share,
  ExternalLink,
  Megaphone,
  Zap,
  Shield,
  Clock,
  CheckCircle,
  Star,
  Lightbulb,
  Rocket,
  Globe,
  PenTool,
} from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { ThemeToggle } from "@/components/theme-toggle"
import { MobileMenu } from "@/components/mobile-menu"
import { ContactForm } from "@/components/contact-form"
import { AnimatedCounter } from "@/components/animated-counter"
import { SmoothScroll } from "@/components/smooth-scroll"

export default function KriyaWebsite() {
  return (
    <div className="min-h-screen bg-black text-white">
      <SmoothScroll />

      {/* Navigation */}
      <nav className="sticky top-0 z-50 w-full border-b border-white/10 bg-black/95 backdrop-blur supports-[backdrop-filter]:bg-black/80">
        <div className="container flex h-16 items-center justify-between px-4">
          <div className="flex items-center space-x-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary text-black font-bold glow-accent">
              K
            </div>
            <span className="text-xl font-bold text-primary text-glow">Kriya</span>
          </div>

          <div className="hidden md:flex items-center space-x-6">
            <Link href="#home" className="text-sm font-medium hover:text-primary transition-colors relative group">
              Home
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all group-hover:w-full"></span>
            </Link>
            <Link href="#services" className="text-sm font-medium hover:text-primary transition-colors relative group">
              Services
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all group-hover:w-full"></span>
            </Link>
            <Link href="#portfolio" className="text-sm font-medium hover:text-primary transition-colors relative group">
              Portfolio
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all group-hover:w-full"></span>
            </Link>
            <Link href="#about" className="text-sm font-medium hover:text-primary transition-colors relative group">
              About
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all group-hover:w-full"></span>
            </Link>
            <Link href="#contact" className="text-sm font-medium hover:text-primary transition-colors relative group">
              Contact
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all group-hover:w-full"></span>
            </Link>
          </div>

          <div className="flex items-center space-x-4">
            {/* <ThemeToggle /> */}
            <Button
              variant="outline"
              size="sm"
              className="hidden sm:flex border-primary/30 text-primary hover:bg-primary hover:text-black hover:scale-105 transition-all glow-accent bg-transparent"
            >
              <Link href="#contact">Get Quote</Link>
            </Button>
            <Button
              size="sm"
              className="bg-primary text-black hover:bg-primary/90 hover:scale-105 transition-all glow-accent"
            >
              <Link href="#contact">Start Project</Link>
            </Button>
            <MobileMenu />
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative overflow-hidden py-20 sm:py-32">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-black to-primary/10" />

        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary/20 rounded-full blur-3xl animate-pulse glow-accent"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-primary/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>

        <div className="container relative px-4">
          <div className="mx-auto max-w-4xl text-center">
            <Badge variant="secondary" className="mb-4 animate-bounce bg-primary/20 text-primary border-primary/30">
              🚀 Transforming Ideas into Digital Reality
            </Badge>
            <h1 className="text-4xl font-bold tracking-tight sm:text-6xl lg:text-7xl animate-fade-in">
              Elevate Your
              <span className="bg-gradient-to-r from-primary via-primary/80 to-primary bg-clip-text text-transparent animate-gradient bg-[length:200%_200%] text-glow">
                {" "}
                Digital Presence
              </span>
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-300 sm:text-xl animate-fade-in-delay max-w-3xl mx-auto">
              From stunning graphic designs to powerful web applications, Kriya delivers comprehensive digital solutions
              that drive growth and engagement for your business. Let's create something extraordinary together.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in-delay-2">
              <Button
                size="lg"
                className="w-full sm:w-auto group bg-primary text-black hover:bg-primary/90 hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl glow-accent"
              >
                <Link href="#contact" className="flex items-center">
                  Start Your Project
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="w-full sm:w-auto border-primary/30 text-primary hover:bg-primary hover:text-black hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl glow-accent bg-transparent"
              >
                <Link href="#portfolio">View Our Work</Link>
              </Button>
            </div>

            {/* Trust indicators */}
            <div className="mt-16 flex flex-wrap items-center justify-center gap-8 opacity-60">
              <div className="text-sm font-medium text-gray-400">Trusted by 150+ companies</div>
              <div className="flex items-center space-x-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-primary text-primary" />
                ))}
                <span className="text-sm ml-2 text-gray-400">4.9/5 rating</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gray-900/50 border-y border-white/10">
        <div className="container px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center group hover:scale-105 transition-transform duration-300">
              <div className="text-3xl sm:text-4xl font-bold text-primary mb-2 text-glow">
                <AnimatedCounter end={150} suffix="+" />
              </div>
              <p className="text-sm text-gray-400">Projects Completed</p>
            </div>
            <div className="text-center group hover:scale-105 transition-transform duration-300">
              <div className="text-3xl sm:text-4xl font-bold text-primary mb-2 text-glow">
                <AnimatedCounter end={98} suffix="%" />
              </div>
              <p className="text-sm text-gray-400">Client Satisfaction</p>
            </div>
            <div className="text-center group hover:scale-105 transition-transform duration-300">
              <div className="text-3xl sm:text-4xl font-bold text-primary mb-2 text-glow">
                <AnimatedCounter end={50} suffix="+" />
              </div>
              <p className="text-sm text-gray-400">Team Members</p>
            </div>
            <div className="text-center group hover:scale-105 transition-transform duration-300">
              <div className="text-3xl sm:text-4xl font-bold text-primary mb-2 text-glow">
                <AnimatedCounter end={5} suffix=" Years" />
              </div>
              <p className="text-sm text-gray-400">Experience</p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 sm:py-32">
        <div className="container px-4">
          <div className="mx-auto max-w-2xl text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl text-primary text-glow">Why Choose Kriya?</h2>
            <p className="mt-4 text-lg text-gray-300">
              We combine creativity, technology, and strategy to deliver exceptional results that drive your business
              forward.
            </p>
          </div>

          <div className="mx-auto mt-16 grid max-w-6xl grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            <Card className="border-white/10 bg-gray-900/50 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 group relative overflow-hidden glow-accent">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <CardHeader className="relative z-10">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/20 group-hover:bg-primary/30 transition-all duration-300 group-hover:scale-110 glow-accent">
                  <TrendingUp className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="group-hover:text-primary transition-colors">Growth-Focused</CardTitle>
              </CardHeader>
              <CardContent className="relative z-10">
                <CardDescription className="text-gray-400">
                  Every solution we create is designed to drive measurable growth and ROI for your business with
                  data-driven strategies.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="border-white/10 bg-gray-900/50 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 group relative overflow-hidden glow-accent">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <CardHeader className="relative z-10">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/20 group-hover:bg-primary/30 transition-all duration-300 group-hover:scale-110 glow-accent">
                  <Users className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="group-hover:text-primary transition-colors">Expert Team</CardTitle>
              </CardHeader>
              <CardContent className="relative z-10">
                <CardDescription className="text-gray-400">
                  Our diverse team of designers, developers, and strategists brings years of experience and cutting-edge
                  expertise.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="border-white/10 bg-gray-900/50 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 group relative overflow-hidden glow-accent">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <CardHeader className="relative z-10">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/20 group-hover:bg-primary/30 transition-all duration-300 group-hover:scale-110 glow-accent">
                  <Award className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="group-hover:text-primary transition-colors">Quality Assured</CardTitle>
              </CardHeader>
              <CardContent className="relative z-10">
                <CardDescription className="text-gray-400">
                  We maintain the highest standards of quality in every project we deliver, with rigorous testing and
                  optimization.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="border-white/10 bg-gray-900/50 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 group relative overflow-hidden glow-accent">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <CardHeader className="relative z-10">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/20 group-hover:bg-primary/30 transition-all duration-300 group-hover:scale-110 glow-accent">
                  <Zap className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="group-hover:text-primary transition-colors">Fast Delivery</CardTitle>
              </CardHeader>
              <CardContent className="relative z-10">
                <CardDescription className="text-gray-400">
                  Quick turnaround times without compromising quality. We understand the importance of meeting
                  deadlines.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="border-white/10 bg-gray-900/50 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 group relative overflow-hidden glow-accent">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <CardHeader className="relative z-10">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/20 group-hover:bg-primary/30 transition-all duration-300 group-hover:scale-110 glow-accent">
                  <Shield className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="group-hover:text-primary transition-colors">Secure & Reliable</CardTitle>
              </CardHeader>
              <CardContent className="relative z-10">
                <CardDescription className="text-gray-400">
                  Enterprise-grade security and reliability ensure your digital assets are protected and always
                  available.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="border-white/10 bg-gray-900/50 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 group relative overflow-hidden glow-accent">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <CardHeader className="relative z-10">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/20 group-hover:bg-primary/30 transition-all duration-300 group-hover:scale-110 glow-accent">
                  <Clock className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="group-hover:text-primary transition-colors">24/7 Support</CardTitle>
              </CardHeader>
              <CardContent className="relative z-10">
                <CardDescription className="text-gray-400">
                  Round-the-clock support ensures your business never stops. We're always here when you need us most.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 sm:py-32 bg-gray-900/30">
        <div className="container px-4">
          <div className="mx-auto max-w-2xl text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl text-primary text-glow">Our Services</h2>
            <p className="mt-4 text-lg text-gray-300">
              Comprehensive digital solutions tailored to your business needs and goals
            </p>
          </div>

          <div className="mx-auto mt-16 grid max-w-7xl grid-cols-1 gap-8 lg:grid-cols-2 xl:grid-cols-3">
            {/* Graphic Design */}
            <Card className="group hover:shadow-2xl transition-all duration-500 hover:-translate-y-4 relative overflow-hidden border-white/10 bg-gray-900/50 glow-accent">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="absolute top-0 left-0 w-full h-1 bg-primary transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
              <CardHeader className="relative z-10">
                <div className="flex items-center space-x-4">
                  <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-primary/20 text-primary group-hover:scale-110 transition-transform duration-300 shadow-lg glow-accent">
                    <Palette className="h-7 w-7" />
                  </div>
                  <div>
                    <CardTitle className="text-xl group-hover:text-primary transition-colors">Graphic Design</CardTitle>
                    <CardDescription className="text-gray-400">Visual identity & branding</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="relative z-10">
                <p className="text-gray-300 mb-6">
                  Create stunning visual identities that capture your brand essence and resonate with your target
                  audience across all platforms.
                </p>
                <ul className="space-y-3 text-sm">
                  <li className="flex items-center group-hover:translate-x-2 transition-transform duration-300">
                    <div className="h-2 w-2 rounded-full bg-primary mr-3" />
                    <span className="text-gray-400">Logo Design & Brand Identity</span>
                  </li>
                  <li className="flex items-center group-hover:translate-x-2 transition-transform duration-300 delay-75">
                    <div className="h-2 w-2 rounded-full bg-primary mr-3" />
                    <span className="text-gray-400">Marketing Materials & Collaterals</span>
                  </li>
                  <li className="flex items-center group-hover:translate-x-2 transition-transform duration-300 delay-150">
                    <div className="h-2 w-2 rounded-full bg-primary mr-3" />
                    <span className="text-gray-400">UI/UX Design & Prototyping</span>
                  </li>
                  <li className="flex items-center group-hover:translate-x-2 transition-transform duration-300 delay-225">
                    <div className="h-2 w-2 rounded-full bg-primary mr-3" />
                    <span className="text-gray-400">Print & Digital Design</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* Social Media Management */}
            <Card className="group hover:shadow-2xl transition-all duration-500 hover:-translate-y-4 relative overflow-hidden border-white/10 bg-gray-900/50 glow-accent">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="absolute top-0 left-0 w-full h-1 bg-primary transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
              <CardHeader className="relative z-10">
                <div className="flex items-center space-x-4">
                  <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-primary/20 text-primary group-hover:scale-110 transition-transform duration-300 shadow-lg glow-accent">
                    <Share2 className="h-7 w-7" />
                  </div>
                  <div>
                    <CardTitle className="text-xl group-hover:text-primary transition-colors">
                      Social Media Management
                    </CardTitle>
                    <CardDescription className="text-gray-400">Engage & grow your audience</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="relative z-10">
                <p className="text-gray-300 mb-6">
                  Build meaningful connections with your audience through strategic social media presence and engaging
                  content.
                </p>
                <ul className="space-y-3 text-sm">
                  <li className="flex items-center group-hover:translate-x-2 transition-transform duration-300">
                    <div className="h-2 w-2 rounded-full bg-primary mr-3" />
                    <span className="text-gray-400">Content Strategy & Creation</span>
                  </li>
                  <li className="flex items-center group-hover:translate-x-2 transition-transform duration-300 delay-75">
                    <div className="h-2 w-2 rounded-full bg-primary mr-3" />
                    <span className="text-gray-400">Community Management</span>
                  </li>
                  <li className="flex items-center group-hover:translate-x-2 transition-transform duration-300 delay-150">
                    <div className="h-2 w-2 rounded-full bg-primary mr-3" />
                    <span className="text-gray-400">Analytics & Performance Tracking</span>
                  </li>
                  <li className="flex items-center group-hover:translate-x-2 transition-transform duration-300 delay-225">
                    <div className="h-2 w-2 rounded-full bg-primary mr-3" />
                    <span className="text-gray-400">Paid Social Advertising</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* Web Development */}
            <Card className="group hover:shadow-2xl transition-all duration-500 hover:-translate-y-4 relative overflow-hidden border-white/10 bg-gray-900/50 glow-accent">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="absolute top-0 left-0 w-full h-1 bg-primary transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
              <CardHeader className="relative z-10">
                <div className="flex items-center space-x-4">
                  <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-primary/20 text-primary group-hover:scale-110 transition-transform duration-300 shadow-lg glow-accent">
                    <Code className="h-7 w-7" />
                  </div>
                  <div>
                    <CardTitle className="text-xl group-hover:text-primary transition-colors">
                      Web Development
                    </CardTitle>
                    <CardDescription className="text-gray-400">Modern & scalable websites</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="relative z-10">
                <p className="text-gray-300 mb-6">
                  Build fast, secure, and scalable web applications that deliver exceptional user experiences and drive
                  conversions.
                </p>
                <ul className="space-y-3 text-sm">
                  <li className="flex items-center group-hover:translate-x-2 transition-transform duration-300">
                    <div className="h-2 w-2 rounded-full bg-primary mr-3" />
                    <span className="text-gray-400">Custom Website Development</span>
                  </li>
                  <li className="flex items-center group-hover:translate-x-2 transition-transform duration-300 delay-75">
                    <div className="h-2 w-2 rounded-full bg-primary mr-3" />
                    <span className="text-gray-400">E-commerce Solutions</span>
                  </li>
                  <li className="flex items-center group-hover:translate-x-2 transition-transform duration-300 delay-150">
                    <div className="h-2 w-2 rounded-full bg-primary mr-3" />
                    <span className="text-gray-400">CMS & Database Integration</span>
                  </li>
                  <li className="flex items-center group-hover:translate-x-2 transition-transform duration-300 delay-225">
                    <div className="h-2 w-2 rounded-full bg-primary mr-3" />
                    <span className="text-gray-400">Performance Optimization</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* App Development */}
            <Card className="group hover:shadow-2xl transition-all duration-500 hover:-translate-y-4 relative overflow-hidden border-white/10 bg-gray-900/50 glow-accent">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="absolute top-0 left-0 w-full h-1 bg-primary transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
              <CardHeader className="relative z-10">
                <div className="flex items-center space-x-4">
                  <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-primary/20 text-primary group-hover:scale-110 transition-transform duration-300 shadow-lg glow-accent">
                    <Smartphone className="h-7 w-7" />
                  </div>
                  <div>
                    <CardTitle className="text-xl group-hover:text-primary transition-colors">
                      App Development
                    </CardTitle>
                    <CardDescription className="text-gray-400">Native & cross-platform apps</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="relative z-10">
                <p className="text-gray-300 mb-6">
                  Develop powerful mobile applications that engage users and drive business growth across all platforms.
                </p>
                <ul className="space-y-3 text-sm">
                  <li className="flex items-center group-hover:translate-x-2 transition-transform duration-300">
                    <div className="h-2 w-2 rounded-full bg-primary mr-3" />
                    <span className="text-gray-400">iOS & Android Development</span>
                  </li>
                  <li className="flex items-center group-hover:translate-x-2 transition-transform duration-300 delay-75">
                    <div className="h-2 w-2 rounded-full bg-primary mr-3" />
                    <span className="text-gray-400">Cross-platform Solutions</span>
                  </li>
                  <li className="flex items-center group-hover:translate-x-2 transition-transform duration-300 delay-150">
                    <div className="h-2 w-2 rounded-full bg-primary mr-3" />
                    <span className="text-gray-400">App Store Optimization</span>
                  </li>
                  <li className="flex items-center group-hover:translate-x-2 transition-transform duration-300 delay-225">
                    <div className="h-2 w-2 rounded-full bg-primary mr-3" />
                    <span className="text-gray-400">Maintenance & Updates</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* Marketing & Advertisement */}
            <Card className="group hover:shadow-2xl transition-all duration-500 hover:-translate-y-4 relative overflow-hidden border-white/10 bg-gray-900/50 lg:col-span-2 xl:col-span-1 glow-accent">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="absolute top-0 left-0 w-full h-1 bg-primary transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
              <CardHeader className="relative z-10">
                <div className="flex items-center space-x-4">
                  <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-primary/20 text-primary group-hover:scale-110 transition-transform duration-300 shadow-lg glow-accent">
                    <Megaphone className="h-7 w-7" />
                  </div>
                  <div>
                    <CardTitle className="text-xl group-hover:text-primary transition-colors">
                      Marketing & Advertisement
                    </CardTitle>
                    <CardDescription className="text-gray-400">Digital & offline campaigns</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="relative z-10">
                <p className="text-gray-300 mb-6">
                  Comprehensive marketing strategies that combine digital innovation with traditional advertising
                  effectiveness to maximize your reach.
                </p>
                <ul className="space-y-3 text-sm">
                  <li className="flex items-center group-hover:translate-x-2 transition-transform duration-300">
                    <div className="h-2 w-2 rounded-full bg-primary mr-3" />
                    <span className="text-gray-400">Digital Marketing Campaigns</span>
                  </li>
                  <li className="flex items-center group-hover:translate-x-2 transition-transform duration-300 delay-75">
                    <div className="h-2 w-2 rounded-full bg-primary mr-3" />
                    <span className="text-gray-400">Print & Outdoor Advertising</span>
                  </li>
                  <li className="flex items-center group-hover:translate-x-2 transition-transform duration-300 delay-150">
                    <div className="h-2 w-2 rounded-full bg-primary mr-3" />
                    <span className="text-gray-400">Brand Strategy & Positioning</span>
                  </li>
                  <li className="flex items-center group-hover:translate-x-2 transition-transform duration-300 delay-225">
                    <div className="h-2 w-2 rounded-full bg-primary mr-3" />
                    <span className="text-gray-400">SEO & Content Marketing</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>

          {/* Service CTA */}
          <div className="text-center mt-16">
            <p className="text-gray-300 mb-6">
              Need a custom solution? We create tailored digital strategies for unique business needs.
            </p>
            <Button
              size="lg"
              className="bg-primary text-black hover:bg-primary/90 hover:scale-105 transition-all duration-300 glow-accent"
            >
              <Link href="#contact">Discuss Your Project</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 sm:py-32">
        <div className="container px-4">
          <div className="mx-auto max-w-6xl">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-6 text-primary text-glow">
                  About Kriya
                </h2>
                <p className="text-lg text-gray-300 mb-6">
                  Founded with a vision to bridge the gap between creativity and technology, Kriya has been at the
                  forefront of digital innovation for over 5 years. We believe that every business deserves a digital
                  presence that not only looks exceptional but also drives real, measurable results.
                </p>
                <p className="text-gray-400 mb-8">
                  Our team of passionate designers, developers, and strategists work collaboratively to transform your
                  ideas into powerful digital experiences that engage your audience, build trust, and grow your business
                  sustainably.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="flex items-center space-x-3 group hover:translate-x-2 transition-transform duration-300">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/20 group-hover:bg-primary/30 transition-colors glow-accent">
                      <Zap className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-white">Fast Delivery</h4>
                      <p className="text-sm text-gray-400">Quick turnaround times</p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-3 group hover:translate-x-2 transition-transform duration-300">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/20 group-hover:bg-primary/30 transition-colors glow-accent">
                      <Shield className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-white">Secure & Reliable</h4>
                      <p className="text-sm text-gray-400">Enterprise-grade security</p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-3 group hover:translate-x-2 transition-transform duration-300">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/20 group-hover:bg-primary/30 transition-colors glow-accent">
                      <Clock className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-white">24/7 Support</h4>
                      <p className="text-sm text-gray-400">Always here to help</p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-3 group hover:translate-x-2 transition-transform duration-300">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/20 group-hover:bg-primary/30 transition-colors glow-accent">
                      <CheckCircle className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-white">Quality Guaranteed</h4>
                      <p className="text-sm text-gray-400">100% satisfaction promise</p>
                    </div>
                  </div>
                </div>

                <div className="mt-8">
                  <Button
                    size="lg"
                    className="bg-primary text-black hover:bg-primary/90 hover:scale-105 transition-all duration-300 glow-accent"
                  >
                    <Link href="#contact">Learn More About Us</Link>
                  </Button>
                </div>
              </div>

              <div className="relative">
                <div className="aspect-square relative rounded-2xl overflow-hidden shadow-2xl border border-white/10 glow-accent">
                  <Image
                    src="/placeholder.svg?height=500&width=500&text=Kriya+Team+at+Work"
                    alt="Kriya team collaborating on projects"
                    fill
                    className="object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="absolute -bottom-6 -right-6 bg-primary text-black p-6 rounded-2xl shadow-xl glow-accent">
                  <div className="text-2xl font-bold">5+</div>
                  <div className="text-sm opacity-90">Years Experience</div>
                </div>
                <div className="absolute -top-6 -left-6 bg-gray-900 border border-white/20 shadow-lg p-4 rounded-xl">
                  <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 bg-primary rounded-full animate-pulse"></div>
                    <span className="text-sm font-medium text-white">Currently Online</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 sm:py-32 bg-gray-900/30">
        <div className="container px-4">
          <div className="mx-auto max-w-2xl text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl text-primary text-glow">Our Process</h2>
            <p className="mt-4 text-lg text-gray-300">
              A streamlined approach that ensures your project is delivered on time, on budget, and beyond expectations.
            </p>
          </div>

          <div className="mx-auto max-w-6xl grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center group">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/20 mx-auto mb-4 group-hover:bg-primary/30 transition-colors group-hover:scale-110 duration-300 glow-accent">
                <Lightbulb className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-lg font-semibold mb-2 text-white">1. Discovery</h3>
              <p className="text-sm text-gray-400">
                We start by understanding your business, goals, and target audience to create the perfect strategy.
              </p>
            </div>

            <div className="text-center group">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/20 mx-auto mb-4 group-hover:bg-primary/30 transition-colors group-hover:scale-110 duration-300 glow-accent">
                <PenTool className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-lg font-semibold mb-2 text-white">2. Design</h3>
              <p className="text-sm text-gray-400">
                Our creative team crafts beautiful, user-centered designs that align with your brand and objectives.
              </p>
            </div>

            <div className="text-center group">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/20 mx-auto mb-4 group-hover:bg-primary/30 transition-colors group-hover:scale-110 duration-300 glow-accent">
                <Code className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-lg font-semibold mb-2 text-white">3. Development</h3>
              <p className="text-sm text-gray-400">
                We bring designs to life with clean, efficient code and cutting-edge technology solutions.
              </p>
            </div>

            <div className="text-center group">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/20 mx-auto mb-4 group-hover:bg-primary/30 transition-colors group-hover:scale-110 duration-300 glow-accent">
                <Rocket className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-lg font-semibold mb-2 text-white">4. Launch</h3>
              <p className="text-sm text-gray-400">
                We deploy your project with thorough testing and provide ongoing support for continued success.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Social Media Posts Section */}
      <section id="portfolio" className="py-20 sm:py-32">
        <div className="container px-4">
          <div className="mx-auto max-w-2xl text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl text-primary text-glow">
              Latest Social Media Highlights
            </h2>
            <p className="mt-4 text-lg text-gray-300">
              See what's trending and engaging our community across social platforms
            </p>
          </div>

          <div className="mx-auto mt-16 grid max-w-6xl grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {/* Post 1 */}
            <Card className="overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group border-white/10 bg-gray-900/50 glow-accent">
              <div className="aspect-square relative overflow-hidden">
                <Image
                  src="/placeholder.svg?height=300&width=300&text=E-commerce+Platform+Design"
                  alt="Web Design Showcase"
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-4 left-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <Badge variant="secondary" className="bg-primary/20 text-primary border-primary/30">
                    Web Design
                  </Badge>
                </div>
              </div>
              <CardContent className="p-4">
                <p className="text-sm text-gray-300 mb-3">
                  "Just launched this stunning e-commerce platform for our client! 🚀 Clean design meets powerful
                  functionality with 40% improved conversion rates."
                </p>
                <div className="flex items-center justify-between text-sm text-gray-400">
                  <div className="flex items-center space-x-4">
                    <div className="flex items-center space-x-1 hover:text-red-400 transition-colors cursor-pointer">
                      <Heart className="h-4 w-4" />
                      <span>124</span>
                    </div>
                    <div className="flex items-center space-x-1 hover:text-blue-400 transition-colors cursor-pointer">
                      <MessageCircle className="h-4 w-4" />
                      <span>23</span>
                    </div>
                    <div className="flex items-center space-x-1 hover:text-primary transition-colors cursor-pointer">
                      <Share className="h-4 w-4" />
                      <span>12</span>
                    </div>
                  </div>
                  <Button variant="ghost" size="sm" className="hover:scale-110 transition-transform text-primary">
                    <ExternalLink className="h-4 w-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Post 2 */}
            <Card className="overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group border-white/10 bg-gray-900/50 glow-accent">
              <div className="aspect-square relative overflow-hidden">
                <Image
                  src="/placeholder.svg?height=300&width=300&text=Mobile+App+Interface"
                  alt="Mobile App Design"
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-4 left-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <Badge variant="secondary" className="bg-primary/20 text-primary border-primary/30">
                    App Design
                  </Badge>
                </div>
              </div>
              <CardContent className="p-4">
                <p className="text-sm text-gray-300 mb-3">
                  "Mobile-first design approach in action! 📱 This app interface prioritizes user experience and
                  accessibility with 5-star App Store ratings."
                </p>
                <div className="flex items-center justify-between text-sm text-gray-400">
                  <div className="flex items-center space-x-4">
                    <div className="flex items-center space-x-1 hover:text-red-400 transition-colors cursor-pointer">
                      <Heart className="h-4 w-4" />
                      <span>89</span>
                    </div>
                    <div className="flex items-center space-x-1 hover:text-blue-400 transition-colors cursor-pointer">
                      <MessageCircle className="h-4 w-4" />
                      <span>15</span>
                    </div>
                    <div className="flex items-center space-x-1 hover:text-primary transition-colors cursor-pointer">
                      <Share className="h-4 w-4" />
                      <span>8</span>
                    </div>
                  </div>
                  <Button variant="ghost" size="sm" className="hover:scale-110 transition-transform text-primary">
                    <ExternalLink className="h-4 w-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Post 3 */}
            <Card className="overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group border-white/10 bg-gray-900/50 glow-accent">
              <div className="aspect-square relative overflow-hidden">
                <Image
                  src="/placeholder.svg?height=300&width=300&text=Brand+Identity+Design"
                  alt="Brand Identity Design"
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-4 left-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <Badge variant="secondary" className="bg-primary/20 text-primary border-primary/30">
                    Branding
                  </Badge>
                </div>
              </div>
              <CardContent className="p-4">
                <p className="text-sm text-gray-300 mb-3">
                  "Brand identity that tells a story! 🎨 From concept to execution, every detail matters in creating
                  memorable brands that resonate with audiences."
                </p>
                <div className="flex items-center justify-between text-sm text-gray-400">
                  <div className="flex items-center space-x-4">
                    <div className="flex items-center space-x-1 hover:text-red-400 transition-colors cursor-pointer">
                      <Heart className="h-4 w-4" />
                      <span>156</span>
                    </div>
                    <div className="flex items-center space-x-1 hover:text-blue-400 transition-colors cursor-pointer">
                      <MessageCircle className="h-4 w-4" />
                      <span>31</span>
                    </div>
                    <div className="flex items-center space-x-1 hover:text-primary transition-colors cursor-pointer">
                      <Share className="h-4 w-4" />
                      <span>18</span>
                    </div>
                  </div>
                  <Button variant="ghost" size="sm" className="hover:scale-110 transition-transform text-primary">
                    <ExternalLink className="h-4 w-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="text-center mt-12">
            <Button
              variant="outline"
              size="lg"
              className="border-primary/30 text-primary hover:bg-primary hover:text-black hover:scale-105 transition-all duration-300 glow-accent bg-transparent"
            >
              <Link href="#contact">View Full Portfolio</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 sm:py-32 bg-gray-900/30">
        <div className="container px-4">
          <div className="mx-auto max-w-2xl text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl text-primary text-glow">
              What Our Clients Say
            </h2>
            <p className="mt-4 text-lg text-gray-300">
              Don't just take our word for it - hear from our satisfied clients who've experienced the Kriya difference
            </p>
          </div>

          <div className="mx-auto max-w-6xl grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-white/10 bg-gray-900/50 glow-accent">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-primary text-primary" />
                  ))}
                </div>
                <p className="text-gray-300 mb-4">
                  "Kriya transformed our online presence completely. The new website not only looks amazing but has
                  increased our conversions by 150%. Their team is incredibly professional and responsive."
                </p>
                <div className="flex items-center">
                  <div className="h-10 w-10 rounded-full bg-primary flex items-center justify-center mr-3 text-black font-semibold">
                    JS
                  </div>
                  <div>
                    <p className="font-semibold text-white">John Smith</p>
                    <p className="text-sm text-gray-400">CEO, TechStart Inc.</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-white/10 bg-gray-900/50 glow-accent">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-primary text-primary" />
                  ))}
                </div>
                <p className="text-gray-300 mb-4">
                  "The team at Kriya is incredibly creative and professional. They delivered our mobile app ahead of
                  schedule and exceeded all expectations. The user feedback has been phenomenal!"
                </p>
                <div className="flex items-center">
                  <div className="h-10 w-10 rounded-full bg-primary flex items-center justify-center mr-3 text-black font-semibold">
                    MJ
                  </div>
                  <div>
                    <p className="font-semibold text-white">Maria Johnson</p>
                    <p className="text-sm text-gray-400">Founder, EcoLife Solutions</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-white/10 bg-gray-900/50 glow-accent">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-primary text-primary" />
                  ))}
                </div>
                <p className="text-gray-300 mb-4">
                  "Outstanding work on our brand identity and marketing campaigns. Our brand recognition has improved
                  significantly since working with Kriya. They truly understand modern marketing."
                </p>
                <div className="flex items-center">
                  <div className="h-10 w-10 rounded-full bg-primary flex items-center justify-center mr-3 text-black font-semibold">
                    RB
                  </div>
                  <div>
                    <p className="font-semibold text-white">Robert Brown</p>
                    <p className="text-sm text-gray-400">Marketing Director, RetailPlus</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <ContactForm />

      {/* CTA Section */}
      <section className="py-20 sm:py-32 bg-gradient-to-br from-primary/20 via-black to-primary/10 relative overflow-hidden">
        <div className="absolute inset-0 bg-black/40" />
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-transparent via-primary/10 to-transparent transform -skew-x-12 animate-pulse" />
        </div>
        <div className="container px-4 relative z-10">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4 text-primary text-glow">
              Ready to Transform Your Digital Presence?
            </h2>
            <p className="text-lg text-gray-300 mb-8">
              Let's collaborate to bring your vision to life with our comprehensive digital solutions. Join 150+
              satisfied clients who've experienced the Kriya difference.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button
                size="lg"
                className="bg-primary text-black hover:bg-primary/90 hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl glow-accent"
              >
                <Link href="#contact" className="flex items-center">
                  Get Started Today
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-primary/30 text-primary hover:bg-primary hover:text-black hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl glow-accent bg-transparent"
              >
                <Link href="#contact">Schedule Free Consultation</Link>
              </Button>
            </div>
            <p className="text-sm text-gray-400 mt-6">
              🎉 Free consultation • 💰 No hidden fees • ⚡ Quick response guaranteed
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/10 bg-gray-900/50">
        <div className="container px-4 py-12">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-4">
            {/* Company Info */}
            <div className="lg:col-span-2">
              <div className="flex items-center space-x-2 mb-4">
                <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary text-black font-bold glow-accent">
                  K
                </div>
                <span className="text-xl font-bold text-primary text-glow">Kriya</span>
              </div>
              <p className="text-gray-300 mb-6 max-w-md">
                Transforming ideas into digital reality through innovative design, development, and strategic digital
                solutions. We're your partners in digital success.
              </p>
              <div className="flex space-x-4">
                <Button
                  variant="ghost"
                  size="icon"
                  className="hover:scale-110 transition-transform hover:bg-primary/20 text-primary"
                >
                  <Share2 className="h-4 w-4" />
                </Button>
                <Button
                  variant="ghost"
                  size="icon"
                  className="hover:scale-110 transition-transform hover:bg-primary/20 text-primary"
                >
                  <MessageCircle className="h-4 w-4" />
                </Button>
                <Button
                  variant="ghost"
                  size="icon"
                  className="hover:scale-110 transition-transform hover:bg-primary/20 text-primary"
                >
                  <Code className="h-4 w-4" />
                </Button>
                <Button
                  variant="ghost"
                  size="icon"
                  className="hover:scale-110 transition-transform hover:bg-primary/20 text-primary"
                >
                  <Globe className="h-4 w-4" />
                </Button>
              </div>
            </div>

            {/* Services */}
            <div>
              <h3 className="font-semibold mb-4 text-white">Services</h3>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>
                  <Link
                    href="#services"
                    className="hover:text-primary transition-colors hover:translate-x-1 inline-block"
                  >
                    Graphic Design
                  </Link>
                </li>
                <li>
                  <Link
                    href="#services"
                    className="hover:text-primary transition-colors hover:translate-x-1 inline-block"
                  >
                    Social Media Management
                  </Link>
                </li>
                <li>
                  <Link
                    href="#services"
                    className="hover:text-primary transition-colors hover:translate-x-1 inline-block"
                  >
                    Web Development
                  </Link>
                </li>
                <li>
                  <Link
                    href="#services"
                    className="hover:text-primary transition-colors hover:translate-x-1 inline-block"
                  >
                    App Development
                  </Link>
                </li>
                <li>
                  <Link
                    href="#services"
                    className="hover:text-primary transition-colors hover:translate-x-1 inline-block"
                  >
                    Marketing & Advertisement
                  </Link>
                </li>
              </ul>
            </div>

            {/* Company */}
            <div>
              <h3 className="font-semibold mb-4 text-white">Company</h3>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>
                  <Link href="#about" className="hover:text-primary transition-colors hover:translate-x-1 inline-block">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link
                    href="#portfolio"
                    className="hover:text-primary transition-colors hover:translate-x-1 inline-block"
                  >
                    Portfolio
                  </Link>
                </li>
                <li>
                  <Link
                    href="#contact"
                    className="hover:text-primary transition-colors hover:translate-x-1 inline-block"
                  >
                    Careers
                  </Link>
                </li>
                <li>
                  <Link
                    href="#contact"
                    className="hover:text-primary transition-colors hover:translate-x-1 inline-block"
                  >
                    Contact
                  </Link>
                </li>
                <li>
                  <Link
                    href="#portfolio"
                    className="hover:text-primary transition-colors hover:translate-x-1 inline-block"
                  >
                    Blog
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-white/10 mt-8 pt-8 flex flex-col sm:flex-row items-center justify-between">
            <p className="text-sm text-gray-400">
              © {new Date().getFullYear()} Kriya Digital Solutions. All rights reserved.
            </p>
            <div className="flex space-x-4 mt-4 sm:mt-0">
              <Link href="#" className="text-sm text-gray-400 hover:text-primary transition-colors">
                Privacy Policy
              </Link>
              <Link href="#" className="text-sm text-gray-400 hover:text-primary transition-colors">
                Terms of Service
              </Link>
              <Link href="#" className="text-sm text-gray-400 hover:text-primary transition-colors">
                Cookie Policy
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
