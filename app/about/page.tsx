import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Card, CardContent } from "@/components/ui/card"
import { Sun, Bone, Heart, Shield, Users, Leaf } from "lucide-react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "About Vitamin D3 K2 | SunShield Vitality",
  description: "Learn about Vitamin D3 K2, their synergistic benefits, sources, and why supplementation may be important for your immune and bone health.",
}

const d3k2Facts = [
  {
    icon: Sun,
    title: "The Sunshine Vitamin",
    description: "Vitamin D3 is produced when your skin is exposed to sunlight. Many people are deficient due to indoor lifestyles, sunscreen use, and northern climates."
  },
  {
    icon: Bone,
    title: "Bone Health Support",
    description: "D3 enhances calcium absorption while K2 directs calcium to bones and teeth, preventing it from accumulating in arteries and soft tissues."
  },
  {
    icon: Shield,
    title: "Immune Function",
    description: "Vitamin D3 plays a crucial role in modulating the immune system, supporting both innate and adaptive immune responses."
  },
  {
    icon: Heart,
    title: "Cardiovascular Support",
    description: "Vitamin K2 helps maintain arterial flexibility by preventing calcium buildup in blood vessel walls, supporting heart health."
  },
  {
    icon: Users,
    title: "Who May Need More",
    description: "Those with limited sun exposure, darker skin tones, older adults, and people in northern latitudes often benefit from D3 K2 supplementation."
  },
  {
    icon: Leaf,
    title: "Natural Sources",
    description: "D3 is found in fatty fish, egg yolks, and fortified foods. K2 is found in fermented foods like natto, cheese, and grass-fed animal products."
  },
]

export default function AboutPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 py-12 md:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          {/* Hero Section */}
          <div className="text-center mb-16">
            <h1 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-6">
              About Vitamin D3 K2
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Vitamin D3 and K2 work together synergistically to support bone health, immune function, 
              and cardiovascular wellness. Learn why this powerful combination has become one of the 
              most important supplement pairings.
            </p>
          </div>

          {/* What is D3 K2 */}
          <section className="mb-16">
            <h2 className="text-2xl font-serif font-bold text-foreground mb-6">
              Understanding D3 and K2
            </h2>
            <div className="prose prose-neutral max-w-none">
              <p className="text-muted-foreground leading-relaxed mb-4">
                <strong>Vitamin D3 (Cholecalciferol)</strong> is a fat-soluble vitamin that your body produces 
                naturally when exposed to sunlight. It plays essential roles in calcium absorption, 
                immune function, mood regulation, and cellular health. Unfortunately, many people 
                worldwide are deficient due to limited sun exposure and modern indoor lifestyles.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-4">
                <strong>Vitamin K2 (Menaquinone)</strong>, particularly the MK-7 form, is essential for 
                proper calcium metabolism. It activates proteins that direct calcium to bones and teeth 
                while keeping it away from arteries and soft tissues where it could cause problems.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                When taken together, D3 and K2 work synergistically: D3 increases calcium absorption 
                from food, while K2 ensures that calcium goes where it&apos;s needed most - your bones - 
                rather than accumulating in blood vessels.
              </p>
            </div>
          </section>

          {/* Key Functions */}
          <section className="mb-16">
            <h2 className="text-2xl font-serif font-bold text-foreground mb-6">
              Key Functions & Benefits
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              {d3k2Facts.map((fact) => (
                <Card key={fact.title} className="border-border">
                  <CardContent className="pt-6">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <fact.icon className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-medium text-foreground mb-2">{fact.title}</h3>
                        <p className="text-sm text-muted-foreground leading-relaxed">
                          {fact.description}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          {/* Why High Potency */}
          <section className="mb-16">
            <h2 className="text-2xl font-serif font-bold text-foreground mb-6">
              Why 10,000 IU?
            </h2>
            <div className="bg-accent/30 rounded-xl p-6 md:p-8">
              <p className="text-muted-foreground leading-relaxed mb-4">
                While the recommended daily allowance (RDA) for Vitamin D is often set at 600-800 IU, 
                many healthcare professionals suggest that higher doses may be needed to achieve optimal 
                blood levels, especially for those who are deficient.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Considerations for higher-dose supplementation:
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2">
                <li>Individuals with documented Vitamin D deficiency</li>
                <li>Those with limited sun exposure or darker skin tones</li>
                <li>People living in northern latitudes</li>
                <li>Older adults with reduced skin synthesis</li>
                <li>Those with conditions affecting absorption</li>
              </ul>
              <p className="text-muted-foreground leading-relaxed mt-4 text-sm">
                <strong>Important:</strong> High-dose Vitamin D supplementation should be discussed with 
                a healthcare provider. Regular monitoring of blood levels may be recommended.
              </p>
            </div>
          </section>

          {/* About This Site */}
          <section className="mb-16">
            <h2 className="text-2xl font-serif font-bold text-foreground mb-6">
              About SunShield Vitality
            </h2>
            <div className="prose prose-neutral max-w-none">
              <p className="text-muted-foreground leading-relaxed mb-4">
                SunShield Vitality is dedicated to providing helpful, research-based information about 
                Vitamin D3 K2 supplementation. Our goal is to help you make informed decisions about 
                your health and wellness journey.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                We believe in transparency and honesty. As an Amazon Associate, we earn from qualifying 
                purchases made through our affiliate links. This helps support our website while allowing 
                us to continue providing valuable content to our readers at no additional cost to you.
              </p>
            </div>
          </section>

          {/* Important Disclaimer */}
          <section className="bg-muted/50 rounded-lg border border-border p-6">
            <h2 className="font-medium text-foreground mb-3">Important Notice</h2>
            <p className="text-sm text-muted-foreground leading-relaxed">
              The information provided on this website is for educational purposes only and is not 
              intended as medical advice. Always consult with a qualified healthcare professional 
              before starting any supplement regimen, especially if you are pregnant, nursing, taking 
              medication, or have a medical condition. Individual results may vary.
            </p>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  )
}
