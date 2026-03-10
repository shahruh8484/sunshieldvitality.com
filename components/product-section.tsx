import Image from "next/image"
import { ExternalLink, Check, Leaf, Sparkles, Zap } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

const AMAZON_AFFILIATE_URL = "https://www.amazon.com/INNOTECH-Nutrition-Vitamin-B-12-Spray/dp/B0FT3X5NPX?tag=YOUR_ASSOCIATE_TAG"

const features = [
  "Sugar-Free Formula",
  "Gluten-Free",
  "Dairy-Free",
  "Vegan Friendly",
  "Wheat-Free",
  "Non-GMO",
  "Wild Berry Flavor",
  "30mL Convenient Size",
]

const benefits = [
  {
    icon: Zap,
    title: "Energy Support",
    description: "Vitamin B-12 plays a crucial role in energy production, helping convert food into usable energy for your body."
  },
  {
    icon: Sparkles,
    title: "Mental Clarity",
    description: "Supports cognitive function and mental clarity, helping you stay focused and sharp throughout the day."
  },
  {
    icon: Leaf,
    title: "Clean Ingredients",
    description: "Made with high-quality ingredients, free from common allergens and artificial additives."
  },
]

export function ProductSection() {
  return (
    <section className="py-16 md:py-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Product Hero */}
        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          {/* Product Visual */}
          <div className="relative">
            <div className="aspect-square bg-gradient-to-br from-accent/30 to-primary/10 rounded-2xl flex items-center justify-center p-4 overflow-hidden">
              <Image
                src="/images/b12-spray-hero.jpg"
                alt="INNOTECH Nutrition Vitamin B-12 Oral Spray - 30mL bottle with spray nozzle"
                width={400}
                height={400}
                className="object-contain rounded-lg"
                priority
              />
            </div>
            <div className="absolute -top-4 -right-4 bg-primary text-primary-foreground text-xs font-medium px-3 py-1 rounded-full">
              Featured Product
            </div>
          </div>

          {/* Product Info */}
          <div>
            <span className="text-sm font-medium text-primary mb-2 block">INNOTECH Nutrition</span>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-4 text-balance">
              Vitamin B-12 Oral Spray
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Experience the convenience of sublingual B-12 absorption with this easy-to-use oral spray. 
              Designed for those who prefer an alternative to traditional capsules or tablets, 
              this spray delivers Vitamin B-12 directly for efficient absorption.
            </p>

            {/* Features Grid */}
            <div className="grid grid-cols-2 gap-2 mb-8">
              {features.map((feature) => (
                <div key={feature} className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-primary flex-shrink-0" />
                  <span className="text-sm text-foreground">{feature}</span>
                </div>
              ))}
            </div>

            {/* CTA Button */}
            <Button asChild size="lg" className="w-full sm:w-auto">
              <a 
                href={AMAZON_AFFILIATE_URL}
                target="_blank"
                rel="noopener noreferrer sponsored"
                className="inline-flex items-center gap-2"
              >
                View on Amazon
                <ExternalLink className="w-4 h-4" />
              </a>
            </Button>
            <p className="text-xs text-muted-foreground mt-3">
              * As an Amazon Associate I earn from qualifying purchases
            </p>
          </div>
        </div>

        {/* Benefits Section */}
        <div className="mt-20">
          <div className="text-center mb-12">
            <h3 className="text-2xl md:text-3xl font-serif font-bold text-foreground mb-4">
              Why Consider Vitamin B-12?
            </h3>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Vitamin B-12 is an essential nutrient that plays important roles in many bodily functions.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {benefits.map((benefit) => (
              <Card key={benefit.title} className="border-border bg-card">
                <CardContent className="pt-6">
                  <div className="w-12 h-12 rounded-lg bg-accent flex items-center justify-center mb-4">
                    <benefit.icon className="w-6 h-6 text-accent-foreground" />
                  </div>
                  <h4 className="font-medium text-foreground mb-2">{benefit.title}</h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {benefit.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Disclaimer */}
        <div className="mt-12 p-4 bg-muted/50 rounded-lg border border-border">
          <p className="text-xs text-muted-foreground text-center leading-relaxed">
            <strong>Disclaimer:</strong> These statements have not been evaluated by the Food and Drug Administration. 
            This product is not intended to diagnose, treat, cure, or prevent any disease. 
            Always consult with a healthcare professional before starting any supplement regimen.
          </p>
        </div>
      </div>
    </section>
  )
}
