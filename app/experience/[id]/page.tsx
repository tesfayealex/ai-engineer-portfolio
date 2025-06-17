"use client"

import { notFound } from "next/navigation"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Calendar, MapPin, ArrowLeft, ExternalLink } from "lucide-react"
import Link from "next/link"
import portfolioConfig from "@/data/portfolio-config.json"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { useEffect } from "react"

export default function ExperiencePage({ params }: { params: { id: string } }) {
  const experience = portfolioConfig.experience.find((exp) => exp.id === params.id)

  useEffect(() => {
    // Scroll to top when component mounts
    window.scrollTo(0, 0)
  }, [])

  if (!experience) {
    notFound()
  }

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main>
        <section className="py-20 pt-32">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-8">
              <Link href="/#resume">
                <Button variant="ghost" size="sm" className="group mb-6">
                  <ArrowLeft className="w-4 h-4 mr-2 transition-transform group-hover:-translate-x-1" />
                  Back to Profile
                </Button>
              </Link>

              <div className="space-y-4">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                  <div>
                    <h1 className="text-3xl font-bold text-primary">{experience.position}</h1>
                    <h2 className="text-2xl font-medium">{experience.company}</h2>
                  </div>
                  <div className="flex flex-col md:items-end gap-2">
                    <div className="flex items-center text-muted-foreground">
                      <Calendar className="w-5 h-5 mr-2" />
                      {experience.duration}
                    </div>
                    <div className="flex items-center text-muted-foreground">
                      <MapPin className="w-5 h-5 mr-2" />
                      {experience.location}
                    </div>
                  </div>
                </div>

                <div className="mt-4">
                  <p className="text-muted-foreground">{experience.description}</p>
                </div>

                <div className="mt-6 space-y-4">
                  <h3 className="font-medium text-lg">Key Achievements:</h3>
                  <ul className="space-y-3">
                    {experience.achievements.map((achievement, index) => (
                      <li key={index} className="flex items-start">
                        <Badge variant="outline" className="mr-3 mt-0.5 px-2 py-0.5 text-xs">
                          {index + 1}
                        </Badge>
                        <span className="text-muted-foreground">{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            <div className="mt-16">
              <h2 className="text-2xl font-bold mb-8">Products & Projects</h2>

              <div className="space-y-16">
                {experience.products.map((product, productIndex) => (
                  <div key={productIndex} className="space-y-8 pb-8 border-b last:border-b-0 last:pb-0">
                    <h3 className="text-xl font-semibold text-primary">{product.name}</h3>

                    {/* Product Section */}
                    <Card>
                      <CardHeader>
                        <CardTitle className="text-lg">Product</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-muted-foreground">{product.description}</p>
                      </CardContent>
                    </Card>

                    {/* Details Section */}
                    <Card>
                      <CardHeader>
                        <CardTitle className="text-lg">Details</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-muted-foreground">{product.details}</p>
                      </CardContent>
                    </Card>

                    {/* Technical Summary Section */}
                    <Card>
                      <CardHeader>
                        <CardTitle className="text-lg">Technical Summary</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="flex flex-wrap gap-3">
                          {product.technicalSummary.map((tech, index) => (
                            <a key={index} href={tech.link} target="_blank" rel="noopener noreferrer" className="group">
                              <Badge
                                variant="outline"
                                className="px-3 py-1 text-sm transition-colors hover:bg-primary/10 hover:border-primary"
                              >
                                {tech.name}
                                <ExternalLink className="w-3 h-3 ml-1 opacity-0 group-hover:opacity-100 transition-opacity" />
                              </Badge>
                            </a>
                          ))}
                        </div>
                      </CardContent>
                    </Card>

                    {/* Product Link Section (Conditional) */}
                    {product.productLink && (
                      <Card>
                        <CardHeader>
                          <CardTitle className="text-lg">Product Link</CardTitle>
                        </CardHeader>
                        <CardContent>
                          <Button asChild>
                            <a href={product.productLink} target="_blank" rel="noopener noreferrer">
                              <ExternalLink className="w-4 h-4 mr-2" />
                              Visit {product.name}
                            </a>
                          </Button>
                        </CardContent>
                      </Card>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
