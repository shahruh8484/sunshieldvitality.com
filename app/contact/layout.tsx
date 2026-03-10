import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Contact Us | SunShield Vitality",
  description: "Get in touch with SunShield Vitality. Have questions about Vitamin D3 K2? We'd love to hear from you.",
}

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
