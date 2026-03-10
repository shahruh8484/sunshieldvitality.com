import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Contact Us | Realgood Essentials",
  description: "Get in touch with Realgood Essentials. Have questions about Vitamin D3 K2? We'd love to hear from you.",
}

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
