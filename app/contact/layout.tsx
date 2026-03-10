import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Contact Us | B12 Vitality Hub",
  description: "Get in touch with B12 Vitality Hub. Have questions about Vitamin B-12? We'd love to hear from you.",
}

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
