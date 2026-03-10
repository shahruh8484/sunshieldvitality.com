"use client"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Field, FieldGroup, FieldLabel } from "@/components/ui/field"
import { Mail, MessageSquare } from "lucide-react"
import { useState } from "react"

export default function ContactPage() {
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    // In a real implementation, you would send the form data to a server
    setIsSubmitted(true)
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 py-12 md:py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <h1 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-4">
              Contact Us
            </h1>
            <p className="text-muted-foreground max-w-xl mx-auto">
              Have questions, feedback, or suggestions? We&apos;d love to hear from you. 
              Fill out the form below and we&apos;ll get back to you as soon as possible.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Contact Info */}
            <div className="space-y-4">
              <Card className="border-border">
                <CardContent className="pt-6">
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Mail className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-medium text-foreground">Email</h3>
                      <p className="text-sm text-muted-foreground mt-1">
                        contact@sunshieldvitality.com
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-border">
                <CardContent className="pt-6">
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <MessageSquare className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-medium text-foreground">Response Time</h3>
                      <p className="text-sm text-muted-foreground mt-1">
                        We typically respond within 1-2 business days
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Contact Form */}
            <div className="md:col-span-2">
              <Card className="border-border">
                <CardHeader>
                  <CardTitle>Send us a message</CardTitle>
                  <CardDescription>
                    Fill out the form and we&apos;ll be in touch soon.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  {isSubmitted ? (
                    <div className="text-center py-8">
                      <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                        <Mail className="w-8 h-8 text-primary" />
                      </div>
                      <h3 className="text-lg font-medium text-foreground mb-2">
                        Thank you for your message!
                      </h3>
                      <p className="text-muted-foreground">
                        We&apos;ve received your inquiry and will get back to you soon.
                      </p>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit}>
                      <FieldGroup>
                        <Field>
                          <FieldLabel htmlFor="name">Name</FieldLabel>
                          <Input 
                            id="name" 
                            name="name"
                            placeholder="Your name" 
                            required 
                          />
                        </Field>

                        <Field>
                          <FieldLabel htmlFor="email">Email</FieldLabel>
                          <Input 
                            id="email" 
                            name="email"
                            type="email" 
                            placeholder="your@email.com" 
                            required 
                          />
                        </Field>

                        <Field>
                          <FieldLabel htmlFor="subject">Subject</FieldLabel>
                          <Input 
                            id="subject" 
                            name="subject"
                            placeholder="What is this regarding?" 
                            required 
                          />
                        </Field>

                        <Field>
                          <FieldLabel htmlFor="message">Message</FieldLabel>
                          <textarea 
                            id="message"
                            name="message"
                            rows={5}
                            placeholder="Your message..."
                            required
                            className="flex w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 resize-none"
                          />
                        </Field>

                        <Button type="submit" className="w-full">
                          Send Message
                        </Button>
                      </FieldGroup>
                    </form>
                  )}
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Additional Info */}
          <div className="mt-12 p-6 bg-muted/50 rounded-lg border border-border">
            <h2 className="font-medium text-foreground mb-3">Before You Contact Us</h2>
            <p className="text-sm text-muted-foreground mb-4">
              Please note that we are an informational website and Amazon affiliate. 
              We do not sell products directly and cannot help with:
            </p>
            <ul className="list-disc list-inside text-sm text-muted-foreground space-y-1">
              <li>Order status, shipping, or delivery inquiries (please contact Amazon directly)</li>
              <li>Product returns or refunds (please contact Amazon directly)</li>
              <li>Medical advice or health consultations (please consult a healthcare professional)</li>
            </ul>
            <p className="text-sm text-muted-foreground mt-4">
              For Amazon-related inquiries, please visit{" "}
              <a 
                href="https://www.amazon.com/gp/help/customer/contact-us" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-primary hover:underline"
              >
                Amazon Customer Service
              </a>
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
