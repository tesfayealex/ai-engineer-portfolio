"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CheckCircle } from "lucide-react"
import { motion } from "framer-motion"
import portfolioConfig from "@/data/portfolio-config.json"

export function AvailabilitySection() {
  const { availability } = portfolioConfig

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  }

  return (
    <section id="availability" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Availability</h2>
          <p className="text-lg text-muted-foreground">Current availability for projects and opportunities</p>
        </div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
        >
          {availability.map((item, index) => (
            <AvailabilityCard key={index} {...item} index={index} />
          ))}
        </motion.div>
      </div>
    </section>
  )
}

function AvailabilityCard({ title, description, icon, status, index }) {
  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  }

  return (
    <motion.div variants={item}>
      <Card className="h-full hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
        <CardHeader className="pb-2">
          <div className="flex justify-between items-start">
            <div className="flex items-center gap-3">
              <span className="text-3xl">{icon}</span>
              <CardTitle>{title}</CardTitle>
            </div>
            <Badge variant={status === "Available" ? "default" : "secondary"}>{status}</Badge>
          </div>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground">{description}</p>

          <div className="mt-4 flex items-center text-sm text-primary">
            <CheckCircle className="w-4 h-4 mr-2" />
            <span>Ready to collaborate</span>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  )
}
