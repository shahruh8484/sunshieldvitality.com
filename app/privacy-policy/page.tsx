import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Privacy Policy | Realgood Essentials",
  description: "Privacy Policy for Realgood Essentials. Learn how we collect, use, and protect your personal information.",
}

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 py-12 md:py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <h1 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-8">
            Privacy Policy
          </h1>
          <p className="text-sm text-muted-foreground mb-8">
            Last Updated: March 10, 2026
          </p>

          <div className="prose prose-neutral max-w-none space-y-8">
            <section>
              <h2 className="text-xl font-semibold text-foreground mb-4">Introduction</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Welcome to Realgood Essentials (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;). We are committed to protecting your 
                privacy and ensuring the security of your personal information. This Privacy Policy explains 
                how we collect, use, disclose, and safeguard your information when you visit our website.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                By using our website, you agree to the collection and use of information in accordance 
                with this policy.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-foreground mb-4">Information We Collect</h2>
              <h3 className="text-lg font-medium text-foreground mb-2">Automatically Collected Information</h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                When you visit our website, we may automatically collect certain information about your 
                device, including:
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2 mb-4">
                <li>IP address</li>
                <li>Browser type and version</li>
                <li>Operating system</li>
                <li>Pages you visit on our site</li>
                <li>Time and date of your visit</li>
                <li>Time spent on pages</li>
                <li>Referring website addresses</li>
              </ul>

              <h3 className="text-lg font-medium text-foreground mb-2">Cookies and Tracking Technologies</h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                We use cookies and similar tracking technologies to track activity on our website and 
                hold certain information. Cookies are files with small amounts of data which may include 
                an anonymous unique identifier.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                You can instruct your browser to refuse all cookies or to indicate when a cookie is 
                being sent. However, if you do not accept cookies, you may not be able to use some 
                portions of our website.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-foreground mb-4">How We Use Your Information</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                We may use the information we collect in various ways, including to:
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2">
                <li>Operate and maintain our website</li>
                <li>Improve and personalize your experience</li>
                <li>Analyze how you use our website</li>
                <li>Develop new products, services, and features</li>
                <li>Communicate with you for customer service purposes</li>
                <li>Send you marketing and promotional communications (with your consent)</li>
                <li>Prevent fraudulent transactions and monitor against theft</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-foreground mb-4">Third-Party Services</h2>
              <h3 className="text-lg font-medium text-foreground mb-2">Amazon Associates Program</h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Realgood Essentials is a participant in the Amazon Services LLC Associates Program, an 
                affiliate advertising program designed to provide a means for sites to earn advertising 
                fees by advertising and linking to Amazon.com.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-4">
                As an Amazon Associate, we earn from qualifying purchases. When you click on Amazon 
                links on our website and make a purchase, we may receive a commission at no additional 
                cost to you.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Amazon may collect certain information when you click our affiliate links. Please refer 
                to Amazon&apos;s Privacy Notice for information on their data collection practices:{" "}
                <a 
                  href="https://www.amazon.com/privacy" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-primary hover:underline"
                >
                  Amazon Privacy Notice
                </a>
              </p>

              <h3 className="text-lg font-medium text-foreground mb-2 mt-6">Analytics Services</h3>
              <p className="text-muted-foreground leading-relaxed">
                We may use third-party analytics services to help understand how visitors use our website. 
                These services collect information sent by your browser, including IP address, browser type, 
                and the pages you visit on our website.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-foreground mb-4">Data Security</h2>
              <p className="text-muted-foreground leading-relaxed">
                We implement appropriate technical and organizational security measures designed to protect 
                the security of any personal information we process. However, please note that no method of 
                transmission over the Internet or method of electronic storage is 100% secure.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-foreground mb-4">Your Privacy Rights</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Depending on your location, you may have certain rights regarding your personal information, including:
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2">
                <li>The right to access personal information we hold about you</li>
                <li>The right to request correction of inaccurate personal information</li>
                <li>The right to request deletion of your personal information</li>
                <li>The right to opt-out of marketing communications</li>
                <li>The right to data portability</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-foreground mb-4">Children&apos;s Privacy</h2>
              <p className="text-muted-foreground leading-relaxed">
                Our website is not intended for children under 13 years of age. We do not knowingly collect 
                personal information from children under 13. If you are a parent or guardian and believe 
                your child has provided us with personal information, please contact us.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-foreground mb-4">Changes to This Privacy Policy</h2>
              <p className="text-muted-foreground leading-relaxed">
                We may update our Privacy Policy from time to time. We will notify you of any changes by 
                posting the new Privacy Policy on this page and updating the &quot;Last Updated&quot; date. We 
                encourage you to review this Privacy Policy periodically for any changes.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-foreground mb-4">Contact Us</h2>
              <p className="text-muted-foreground leading-relaxed">
                If you have any questions about this Privacy Policy, please contact us at:{" "}
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
