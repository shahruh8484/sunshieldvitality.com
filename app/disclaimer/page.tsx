import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Disclaimer | B12 Vitality Hub",
  description: "Important disclaimers and disclosures for B12 Vitality Hub, including affiliate disclosure and health information disclaimer.",
}

export default function DisclaimerPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 py-12 md:py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <h1 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-8">
            Disclaimer
          </h1>
          <p className="text-sm text-muted-foreground mb-8">
            Last Updated: March 10, 2026
          </p>

          <div className="prose prose-neutral max-w-none space-y-8">
            {/* Amazon Affiliate Disclosure - REQUIRED */}
            <section className="bg-accent/30 p-6 rounded-lg border border-border">
              <h2 className="text-xl font-semibold text-foreground mb-4">
                Amazon Affiliate Disclosure
              </h2>
              <p className="text-foreground leading-relaxed mb-4 font-medium">
                As an Amazon Associate I earn from qualifying purchases.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-4">
                B12 Vitality Hub is a participant in the Amazon Services LLC Associates Program, 
                an affiliate advertising program designed to provide a means for sites to earn 
                advertising fees by advertising and linking to Amazon.com.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                This means that when you click on product links on this website and make a purchase 
                on Amazon, we may receive a small commission at no additional cost to you. This 
                commission helps us maintain and operate this website to provide you with valuable 
                content about Vitamin B-12 supplementation.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-foreground mb-4">
                Health and Medical Disclaimer
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                The content provided on B12 Vitality Hub is for informational and educational purposes 
                only. It is not intended to be a substitute for professional medical advice, diagnosis, 
                or treatment.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-4 font-medium">
                Important notices:
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-3">
                <li>
                  <strong>Not Medical Advice:</strong> The information on this website should not be 
                  considered medical advice. Always consult with a qualified healthcare professional 
                  before starting any supplement regimen or making changes to your health routine.
                </li>
                <li>
                  <strong>Individual Results May Vary:</strong> Dietary supplements affect individuals 
                  differently. Results mentioned or implied on this website are not guaranteed and may 
                  vary from person to person.
                </li>
                <li>
                  <strong>FDA Disclaimer:</strong> These statements have not been evaluated by the 
                  Food and Drug Administration. Products discussed on this website are not intended 
                  to diagnose, treat, cure, or prevent any disease.
                </li>
                <li>
                  <strong>Consult Your Doctor:</strong> If you are pregnant, nursing, taking medication, 
                  or have a medical condition, consult your physician before using any dietary supplement.
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-foreground mb-4">
                Product Information Disclaimer
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                We strive to provide accurate and up-to-date information about the products featured 
                on our website. However:
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2">
                <li>Product information, prices, and availability are subject to change without notice</li>
                <li>We are not responsible for any errors or omissions in product descriptions</li>
                <li>Always verify product details on Amazon before making a purchase</li>
                <li>Product images are for illustrative purposes only</li>
                <li>We do not manufacture, sell, or ship any products directly</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-foreground mb-4">
                Editorial Independence
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                While we may earn commissions from affiliate links, our editorial content is based on 
                our own research and opinions. We are committed to providing honest and helpful information 
                to our readers. Our affiliate relationships do not influence our editorial coverage or 
                product recommendations.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-foreground mb-4">
                External Links Disclaimer
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                This website contains links to external websites, including Amazon.com. We are not 
                responsible for the content, privacy policies, or practices of any third-party websites. 
                When you leave our website, you do so at your own risk and should review the terms and 
                privacy policies of each website you visit.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-foreground mb-4">
                Limitation of Liability
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                B12 Vitality Hub and its owners, operators, and contributors shall not be held liable 
                for any damages arising from the use of this website or the products discussed herein. 
                This includes, but is not limited to, direct, indirect, incidental, punitive, and 
                consequential damages.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-foreground mb-4">
                Changes to This Disclaimer
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                We reserve the right to update or change this disclaimer at any time. Changes will be 
                effective immediately upon posting to this page. We encourage you to review this 
                disclaimer periodically for any updates.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-foreground mb-4">Contact Us</h2>
              <p className="text-muted-foreground leading-relaxed">
                If you have any questions about this Disclaimer, please contact us at:{" "}
                <a href="/contact" className="text-primary hover:underline">
                  Contact Page
                </a>
              </p>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
