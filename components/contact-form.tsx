"use client"

import type React from "react"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Mail, Phone, MapPin, Send, Clock, MessageSquare } from "lucide-react"
import { useToast } from "@/hooks/use-toast"

export function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const { toast } = useToast()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 2000))

    toast({
      title: "Message sent successfully! 🎉",
      description: "We'll get back to you within 24 hours.",
    })

    setIsSubmitting(false)

    // Reset form
    const form = e.target as HTMLFormElement
    form.reset()
  }

  return (
    <section id="contact" className="py-20 sm:py-32 bg-gray-900/30">
      <div className="container px-4">
        <div className="mx-auto max-w-2xl text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl text-primary text-glow">Get In Touch</h2>
          <p className="mt-4 text-lg text-gray-300">
            Ready to start your project? Let's discuss how we can help transform your digital presence.
          </p>
        </div>

        <div className="mx-auto max-w-6xl grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold mb-6 text-white">Let's Connect</h3>
              <p className="text-gray-300 mb-8">
                We're here to help bring your vision to life. Reach out to us through any of the channels below or fill
                out the form.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-center space-x-4 group hover:translate-x-2 transition-transform duration-300">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/20 group-hover:bg-primary/30 transition-colors glow-accent">
                  <Mail className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold text-white">Email</h4>
                  <p className="text-gray-400">hello@kriya.com</p>
                </div>
              </div>

              <div className="flex items-center space-x-4 group hover:translate-x-2 transition-transform duration-300">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/20 group-hover:bg-primary/30 transition-colors glow-accent">
                  <Phone className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold text-white">Phone</h4>
                  <p className="text-gray-400">+1 (555) 123-4567</p>
                </div>
              </div>

              <div className="flex items-center space-x-4 group hover:translate-x-2 transition-transform duration-300">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/20 group-hover:bg-primary/30 transition-colors glow-accent">
                  <MapPin className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold text-white">Office</h4>
                  <p className="text-gray-400">123 Digital Street, Tech City, TC 12345</p>
                </div>
              </div>

              <div className="flex items-center space-x-4 group hover:translate-x-2 transition-transform duration-300">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/20 group-hover:bg-primary/30 transition-colors glow-accent">
                  <Clock className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold text-white">Business Hours</h4>
                  <p className="text-gray-400">Mon - Fri: 9AM - 6PM EST</p>
                </div>
              </div>
            </div>

            {/* Quick Response Promise */}
            <div className="bg-primary/10 rounded-lg p-6 border border-primary/20 glow-accent">
              <div className="flex items-center space-x-3 mb-3">
                <MessageSquare className="h-5 w-5 text-primary" />
                <h4 className="font-semibold text-primary">Quick Response Guarantee</h4>
              </div>
              <p className="text-sm text-gray-300">
                We respond to all inquiries within 2 hours during business hours. For urgent matters, call us directly.
              </p>
            </div>
          </div>

          {/* Contact Form */}
          <Card className="shadow-xl hover:shadow-2xl transition-shadow duration-300 border-white/10 bg-gray-900/50 glow-accent">
            <CardHeader>
              <CardTitle className="text-white">Send us a message</CardTitle>
              <CardDescription className="text-gray-400">
                Fill out the form below and we'll get back to you as soon as possible.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="firstName" className="text-white">
                      First Name *
                    </Label>
                    <Input
                      id="firstName"
                      name="firstName"
                      required
                      className="bg-gray-800 border-white/20 text-white transition-all duration-300 focus:scale-105 focus:border-primary"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="lastName" className="text-white">
                      Last Name *
                    </Label>
                    <Input
                      id="lastName"
                      name="lastName"
                      required
                      className="bg-gray-800 border-white/20 text-white transition-all duration-300 focus:scale-105 focus:border-primary"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email" className="text-white">
                    Email *
                  </Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    required
                    className="bg-gray-800 border-white/20 text-white transition-all duration-300 focus:scale-105 focus:border-primary"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="phone" className="text-white">
                    Phone Number
                  </Label>
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    className="bg-gray-800 border-white/20 text-white transition-all duration-300 focus:scale-105 focus:border-primary"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="service" className="text-white">
                    Service Interested In *
                  </Label>
                  <Select name="service" required>
                    <SelectTrigger className="bg-gray-800 border-white/20 text-white transition-all duration-300 focus:scale-105 focus:border-primary">
                      <SelectValue placeholder="Select a service" />
                    </SelectTrigger>
                    <SelectContent className="bg-gray-800 border-white/20">
                      <SelectItem value="graphic-design" className="text-white hover:bg-primary/20">
                        Graphic Design
                      </SelectItem>
                      <SelectItem value="social-media" className="text-white hover:bg-primary/20">
                        Social Media Management
                      </SelectItem>
                      <SelectItem value="web-development" className="text-white hover:bg-primary/20">
                        Web Development
                      </SelectItem>
                      <SelectItem value="app-development" className="text-white hover:bg-primary/20">
                        App Development
                      </SelectItem>
                      <SelectItem value="marketing" className="text-white hover:bg-primary/20">
                        Marketing & Advertisement
                      </SelectItem>
                      <SelectItem value="consultation" className="text-white hover:bg-primary/20">
                        Free Consultation
                      </SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="budget" className="text-white">
                    Project Budget
                  </Label>
                  <Select name="budget">
                    <SelectTrigger className="bg-gray-800 border-white/20 text-white transition-all duration-300 focus:scale-105 focus:border-primary">
                      <SelectValue placeholder="Select budget range" />
                    </SelectTrigger>
                    <SelectContent className="bg-gray-800 border-white/20">
                      <SelectItem value="under-5k" className="text-white hover:bg-primary/20">
                        Under $5,000
                      </SelectItem>
                      <SelectItem value="5k-15k" className="text-white hover:bg-primary/20">
                        $5,000 - $15,000
                      </SelectItem>
                      <SelectItem value="15k-50k" className="text-white hover:bg-primary/20">
                        $15,000 - $50,000
                      </SelectItem>
                      <SelectItem value="50k-plus" className="text-white hover:bg-primary/20">
                        $50,000+
                      </SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message" className="text-white">
                    Project Details *
                  </Label>
                  <Textarea
                    id="message"
                    name="message"
                    placeholder="Tell us about your project, goals, timeline, and any specific requirements..."
                    className="min-h-[120px] bg-gray-800 border-white/20 text-white transition-all duration-300 focus:scale-105 focus:border-primary"
                    required
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full bg-primary text-black hover:bg-primary/90 hover:scale-105 transition-all duration-300 glow-accent"
                  disabled={isSubmitting}
                  size="lg"
                >
                  {isSubmitting ? (
                    <>
                      <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-black mr-2" />
                      Sending Message...
                    </>
                  ) : (
                    <>
                      Send Message
                      <Send className="ml-2 h-4 w-4" />
                    </>
                  )}
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
