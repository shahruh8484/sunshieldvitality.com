import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Terms of Service | SunShield Vitality",
  description: "Terms of Service for SunShield Vitality. Read our terms and conditions for using our website.",
}

export default function TermsPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 py-12 md:py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <h1 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-8">
            Terms of Service
          </h1>
          <p className="text-sm text-muted-foreground mb-8">
            Last Updated: March 10, 2026
          </p>

          <div className="prose prose-neutral max-w-none space-y-8">
            <section>
              <h2 className="text-xl font-semibold text-foreground mb-4">Agreement to Terms</h2>
              <p className="text-muted-foreground leading-relaxed">
                By accessing or using SunShield Vitality (&quot;the Website&quot;), you agree to be bound by these 
                Terms of Service (&quot;Terms&quot;). If you disagree with any part of these terms, you may not 
                access the Website.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-foreground mb-4">Description of Service</h2>
              <p className="text-muted-foreground leading-relaxed">
                SunShield Vitality is an informational website that provides educational content about 
                Vitamin D3 K2 supplementation. We also participate in affiliate marketing programs, 
                including the Amazon Services LLC Associates Program, where we may earn commissions 
                from qualifying purchases made through our links.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-foreground mb-4">Affiliate Disclosure</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                SunShield Vitality is a participant in the Amazon Services LLC Associates Program, an 
                affiliate advertising program designed to provide a means for sites to earn advertising 
                fees by advertising and linking to Amazon.com.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                As an Amazon Associate, we earn from qualifying purchases. This means that when you 
                click on links to various products on this site and make a purchase, we may receive 
                a small commission. There is no additional cost to you. These commissions help support 
                the operation of this website.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-foreground mb-4">No Medical Advice</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                The content on this Website is for informational and educational purposes only and is 
                not intended as medical advice, diagnosis, or treatment. The information provided should 
                not be used as a substitute for professional medical advice.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Always seek the advice of your physician or other qualified health provider with any 
                questions you may have regarding a medical condition or before starting any dietary 
                supplement regimen.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-foreground mb-4">Product Information</h2>
              <p className="text-muted-foreground leading-relaxed">
                We make every effort to display accurate information about the products featured on 
                our Website. However, product information, availability, and prices are subject to 
                change without notice. We do not guarantee the accuracy, completeness, or timeliness 
                of any product information. Please verify all product details on the merchant&apos;s 
                website before making a purchase.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-foreground mb-4">Intellectual Property Rights</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Unless otherwise stated, we own the intellectual property rights for all original 
                content on SunShield Vitality. All intellectual property rights are reserved.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                You may not:
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2 mt-2">
                <li>Republish material from this Website without attribution</li>
                <li>Sell, rent, or sub-license material from the Website</li>
                <li>Reproduce, duplicate, or copy material for commercial purposes</li>
                <li>Redistribute content from this Website without permission</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-foreground mb-4">User Conduct</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                When using our Website, you agree not to:
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2">
                <li>Use the Website in any way that violates applicable laws or regulations</li>
                <li>Engage in any conduct that restricts or inhibits anyone&apos;s use of the Website</li>
                <li>Attempt to gain unauthorized access to any portion of the Website</li>
                <li>Use any automated system to access the Website</li>
                <li>Introduce any viruses, malware, or other harmful material</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-foreground mb-4">External Links</h2>
              <p className="text-muted-foreground leading-relaxed">
                This Website may contain links to external websites, including Amazon.com. We have no 
                control over the content and practices of these sites and cannot accept responsibility 
                for their respective privacy policies or content. These links are provided for your 
                convenience, and the inclusion of any link does not imply endorsement by us.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-foreground mb-4">Disclaimer of Warranties</h2>
              <p className="text-muted-foreground leading-relaxed">
                This Website is provided on an &quot;as is&quot; and &quot;as available&quot; basis without any 
                representations or warranties, express or implied. We make no representations or 
                warranties in relation to this Website or the information and materials provided.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-foreground mb-4">Limitation of Liability</h2>
              <p className="text-muted-foreground leading-relaxed">
                In no event shall SunShield Vitality, nor any of its officers, directors, employees, 
                or agents, be liable to you for anything arising out of or in any way connected with 
                your use of this Website, whether such liability is under contract, tort, or otherwise. 
                SunShield Vitality shall not be liable for any indirect, consequential, or special 
                liability arising out of or in any way related to your use of this Website.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-foreground mb-4">Indemnification</h2>
              <p className="text-muted-foreground leading-relaxed">
                You agree to indemnify and hold harmless SunShield Vitality and its affiliates, officers, 
                directors, employees, and agents from and against any claims, liabilities, damages, 
                losses, and expenses, arising out of or in any way connected with your use of this 
                Website or violation of these Terms.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-foreground mb-4">Changes to Terms</h2>
              <p className="text-muted-foreground leading-relaxed">
                We reserve the right to modify these Terms at any time. We will notify you of any 
                changes by posting the new Terms on this page and updating the &quot;Last Updated&quot; date. 
                Your continued use of the Website after any such changes constitutes your acceptance 
                of the new Terms.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-foreground mb-4">Governing Law</h2>
              <p className="text-muted-foreground leading-relaxed">
                These Terms shall be governed and construed in accordance with applicable laws, 
                without regard to its conflict of law provisions.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-foreground mb-4">Contact Us</h2>
              <p className="text-muted-foreground leading-relaxed">
                If you have any questions about these Terms of Service, please contact us at:{" "}
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
