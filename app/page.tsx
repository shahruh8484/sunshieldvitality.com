import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { HeroSection } from "@/components/hero-section"
import { ProductSection } from "@/components/product-section"
import { Card, CardContent } from "@/components/ui/card"
import { BookOpen, Shield, Heart } from "lucide-react"

const educationalContent = [
  {
    icon: BookOpen,
    title: "What is Vitamin B-12?",
    content: "Vitamin B-12 (cobalamin) is a water-soluble vitamin essential for red blood cell formation, neurological function, and DNA synthesis. It's naturally found in animal products and is often supplemented by those with dietary restrictions."
  },
  {
    icon: Shield,
    title: "Who May Benefit?",
    content: "Individuals following vegetarian or vegan diets, older adults, and those with certain digestive conditions may have difficulty absorbing B-12 from food sources. Supplementation can help ensure adequate intake."
  },
  {
    icon: Heart,
    title: "Signs of B-12 Deficiency",
    content: "Common signs may include fatigue, weakness, constipation, loss of appetite, and neurological changes. If you experience these symptoms, consult with a healthcare provider for proper evaluation."
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
                Understanding Vitamin B-12
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Educational information to help you make informed decisions about B-12 supplementation.
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
