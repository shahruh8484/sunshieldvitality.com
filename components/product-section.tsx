import Image from "next/image"
import { ExternalLink, Check, Sun, Shield, Bone } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

const AMAZON_AFFILIATE_URL = "https://www.amazon.com/dp/B0DXDG34ZN?tag=YOUR_ASSOCIATE_TAG"

const features = [
  "10,000 IU Vitamin D3",
  "200 mcg Vitamin K2 (MK-7)",
  "300 Softgels Supply",
  "Non-GMO Formula",
  "Gluten-Free",
  "Extra Strength 2-in-1",
  "Easy to Swallow",
  "Premium Quality",
]

const benefits = [
  {
    icon: Shield,
    title: "Immune Support",
    description: "Vitamin D3 plays a crucial role in supporting your immune system, helping your body maintain its natural defenses year-round."
  },
  {
    icon: Bone,
    title: "Bone Health",
    description: "The powerful combination of D3 and K2 works synergistically to support calcium absorption and promote healthy bones and teeth."
  },
  {
    icon: Sun,
    title: "Energy & Mood",
    description: "Adequate Vitamin D levels are associated with improved energy levels and overall sense of well-being, especially during winter months."
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
                src="/images/d3k2-softgels.jpg"
                alt="Vitamin D3 K2 10,000 IU Softgels - 300 count bottle with golden softgels"
                width={400}
                height={400}
                className="object-contain rounded-lg"
                priority
              />
            </div>
            <div className="absolute -top-4 -right-4 bg-primary text-primary-foreground text-xs font-medium px-3 py-1 rounded-full">
              Best Value
            </div>
          </div>

          {/* Product Info */}
          <div>
            <span className="text-sm font-medium text-primary mb-2 block">Premium Supplement</span>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-4 text-balance">
              Vitamin D3 K2 10,000 IU Extra Strength
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Experience the powerful synergy of Vitamin D3 and K2 in one convenient softgel. 
              This extra-strength formula combines 10,000 IU of Vitamin D3 with 200 mcg of Vitamin K2 (MK-7) 
              to support immune function, bone health, and overall wellness. With 300 softgels per bottle, 
              you get an exceptional value for nearly a year of daily supplementation.
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
              Why Vitamin D3 + K2?
            </h3>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              The combination of Vitamin D3 and K2 offers synergistic benefits that support multiple aspects of your health.
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

        {/* Why D3 + K2 Together */}
        <div className="mt-20 bg-muted/30 rounded-2xl p-8 md:p-12">
          <h3 className="text-2xl font-serif font-bold text-foreground mb-6 text-center">
            The Science Behind D3 + K2
          </h3>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h4 className="font-medium text-foreground mb-3">Vitamin D3 (Cholecalciferol)</h4>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Vitamin D3 is the most bioavailable form of Vitamin D, naturally produced by your skin when exposed to sunlight. 
                It helps your body absorb calcium from food and supplements, supporting bone mineralization and immune function.
              </p>
            </div>
            <div>
              <h4 className="font-medium text-foreground mb-3">Vitamin K2 (MK-7)</h4>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Vitamin K2, particularly the MK-7 form, works alongside D3 to direct calcium to where it belongs - your bones and teeth - 
                while helping to keep it away from arteries and soft tissues where it could cause problems.
              </p>
            </div>
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
