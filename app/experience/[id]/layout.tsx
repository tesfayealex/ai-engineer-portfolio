import type React from "react"
import type { Metadata } from "next"
import portfolioConfig from "@/data/portfolio-config.json"

export async function generateMetadata({ params }: { params: { id: string } }): Promise<Metadata> {
  const experience = portfolioConfig.experience.find((exp) => exp.id === params.id)

  if (!experience) {
    return {
      title: "Experience Not Found",
    }
  }

  return {
    title: `${experience.position} at ${experience.company} | ${portfolioConfig.personal.name}`,
    description: experience.description,
  }
}

export default function ExperienceLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
