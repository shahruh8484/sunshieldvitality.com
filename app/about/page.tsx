import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Card, CardContent } from "@/components/ui/card"
import { Beaker, Brain, Heart, Pill, Users, Leaf } from "lucide-react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "About Vitamin B-12 | B12 Vitality Hub",
  description: "Learn about Vitamin B-12, its benefits, sources, and why supplementation may be important for your health and wellness.",
}

const b12Facts = [
  {
    icon: Brain,
    title: "Neurological Function",
    description: "Vitamin B-12 is essential for maintaining healthy nerve cells and supporting proper neurological function throughout the body."
  },
  {
    icon: Heart,
    title: "Red Blood Cell Formation",
    description: "B-12 plays a vital role in the production of red blood cells, which carry oxygen throughout your body."
  },
  {
    icon: Beaker,
    title: "DNA Synthesis",
    description: "This vitamin is crucial for DNA synthesis, the process by which your body creates new cells."
  },
  {
    icon: Pill,
    title: "Energy Metabolism",
    description: "B-12 helps convert the food you eat into glucose, providing energy for your daily activities."
  },
  {
    icon: Users,
    title: "Who May Need More",
    description: "Vegetarians, vegans, older adults, and those with certain digestive conditions may benefit from B-12 supplementation."
  },
  {
    icon: Leaf,
    title: "Natural Sources",
    description: "B-12 is naturally found in animal products like meat, fish, eggs, and dairy. Plant-based eaters may need to supplement."
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
              About Vitamin B-12
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Vitamin B-12, also known as cobalamin, is a water-soluble vitamin that plays essential 
              roles in many bodily functions. Learn more about this important nutrient and why it 
              matters for your health.
            </p>
          </div>

          {/* What is B-12 */}
          <section className="mb-16">
            <h2 className="text-2xl font-serif font-bold text-foreground mb-6">
              What is Vitamin B-12?
            </h2>
            <div className="prose prose-neutral max-w-none">
              <p className="text-muted-foreground leading-relaxed mb-4">
                Vitamin B-12 is one of eight B vitamins that help the body convert food into fuel, 
                which is used to produce energy. Like other B vitamins, B-12 is water-soluble, meaning 
                the body does not store it and excess amounts are excreted through urine.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-4">
                B-12 is unique among vitamins because it contains a metal ion—cobalt. This is why 
                compounds with vitamin B-12 activity are collectively called &quot;cobalamins.&quot; The most 
                common forms in supplements are cyanocobalamin and methylcobalamin.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Since B-12 is primarily found in animal products, individuals following plant-based 
                diets or those with absorption issues may not get adequate amounts from food alone, 
                making supplementation an important consideration.
              </p>
            </div>
          </section>

          {/* Key Functions */}
          <section className="mb-16">
            <h2 className="text-2xl font-serif font-bold text-foreground mb-6">
              Key Functions & Benefits
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              {b12Facts.map((fact) => (
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

          {/* Why Oral Spray */}
          <section className="mb-16">
            <h2 className="text-2xl font-serif font-bold text-foreground mb-6">
              Why Consider an Oral Spray?
            </h2>
            <div className="bg-accent/30 rounded-xl p-6 md:p-8">
              <p className="text-muted-foreground leading-relaxed mb-4">
                Vitamin B-12 oral sprays offer a convenient alternative to traditional capsules or 
                tablets. The sublingual (under the tongue) delivery method allows the vitamin to be 
                absorbed directly through the mucous membranes in the mouth.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Some potential advantages of oral spray supplementation include:
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2">
                <li>Easy to use—no water needed</li>
                <li>Convenient for those who have difficulty swallowing pills</li>
                <li>Pleasant flavors make daily supplementation enjoyable</li>
                <li>Portable and travel-friendly</li>
              </ul>
            </div>
          </section>

          {/* About This Site */}
          <section className="mb-16">
            <h2 className="text-2xl font-serif font-bold text-foreground mb-6">
              About B12 Vitality Hub
            </h2>
            <div className="prose prose-neutral max-w-none">
              <p className="text-muted-foreground leading-relaxed mb-4">
                B12 Vitality Hub is dedicated to providing helpful, research-based information about 
                Vitamin B-12 supplementation. Our goal is to help you make informed decisions about 
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
