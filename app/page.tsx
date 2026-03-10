import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { HeroSection } from "@/components/hero-section"
import { ProductSection } from "@/components/product-section"
import { Card, CardContent } from "@/components/ui/card"
import { BookOpen, Shield, Heart } from "lucide-react"

const educationalContent = [
  {
    icon: BookOpen,
    title: "What is Vitamin D3?",
    content: "Vitamin D3 (cholecalciferol) is a fat-soluble vitamin that your body produces when exposed to sunlight. It's essential for calcium absorption, bone health, immune function, and mood regulation. Many people are deficient, especially during winter months."
  },
  {
    icon: Shield,
    title: "Why Add Vitamin K2?",
    content: "Vitamin K2 (MK-7) works synergistically with D3 to direct calcium to your bones and teeth while keeping it away from arteries. This combination maximizes the benefits of D3 supplementation and supports cardiovascular health."
  },
  {
    icon: Heart,
    title: "Who May Benefit?",
    content: "Those with limited sun exposure, darker skin tones, older adults, and people living in northern latitudes often have lower D3 levels. If you spend most time indoors or use sunscreen regularly, supplementation may be beneficial."
  },
]

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <HeroSection />
        <ProductSection />
        
        {/* Educational Content Section */}
        <section className="py-16 md:py-24 bg-muted/30">
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <div className="text-center mb-12">
              <h2 className="text-2xl md:text-3xl font-serif font-bold text-foreground mb-4">
                Understanding Vitamin D3 K2
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Educational information to help you make informed decisions about D3 K2 supplementation.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {educationalContent.map((item) => (
                <Card key={item.title} className="border-border bg-card">
                  <CardContent className="pt-6">
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                      <item.icon className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="font-medium text-foreground mb-3">{item.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {item.content}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="mt-8 p-4 bg-card rounded-lg border border-border">
              <p className="text-sm text-muted-foreground text-center">
                <strong>Note:</strong> The information provided on this website is for educational purposes only 
                and is not intended as medical advice. Always consult with a qualified healthcare provider 
                before making changes to your diet or supplement routine.
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
