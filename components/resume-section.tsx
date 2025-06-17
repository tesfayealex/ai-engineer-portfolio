"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, MapPin, GraduationCap, Briefcase, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import portfolioConfig from "@/data/portfolio-config.json"

export function ResumeSection() {
  const { experience, education } = portfolioConfig
  const [hoveredItem, setHoveredItem] = useState<string | null>(null)

  return (
    <section id="resume" className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">My Journey</h2>
          <p className="text-lg text-muted-foreground">Professional experience and educational background</p>
        </div>

        {/* Experience Timeline */}
        <div className="mb-20">
          <div className="flex items-center gap-3 mb-12">
            <Briefcase className="w-8 h-8 text-primary" />
            <h3 className="text-2xl font-bold">Professional Experience</h3>
          </div>

          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-600 to-purple-600"></div>

            <div className="space-y-12">
              {experience.map((exp, index) => (
                <div
                  key={index}
                  className="relative transition-all duration-300"
                  onMouseEnter={() => setHoveredItem(`exp-${index}`)}
                  onMouseLeave={() => setHoveredItem(null)}
                >
                  {/* Timeline Dot */}
                  <div
                    className={`absolute left-6 w-4 h-4 rounded-full border-4 border-background transition-all duration-300 z-10 ${
                      hoveredItem === `exp-${index}`
                        ? "bg-gradient-to-r from-blue-400 to-purple-400 scale-125 shadow-lg"
                        : "bg-gradient-to-r from-blue-600 to-purple-600"
                    }`}
                  ></div>

                  <div className="ml-20">
                    <Link href={`/experience/${exp.id}`} className="block">
                      <Card
                        className={`transition-all duration-300 cursor-pointer ${
                          hoveredItem === `exp-${index}`
                            ? "shadow-xl -translate-y-2 border-primary/30 bg-primary/5"
                            : "hover:shadow-lg"
                        }`}
                      >
                        <CardContent className="p-6">
                          <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4 mb-4">
                            <div>
                              <h4
                                className={`text-xl font-semibold transition-colors duration-300 ${
                                  hoveredItem === `exp-${index}` ? "text-primary" : "text-foreground"
                                }`}
                              >
                                {exp.position}
                              </h4>
                              <h5 className="text-lg font-medium text-muted-foreground">{exp.company}</h5>
                            </div>
                            <div className="flex flex-col lg:items-end gap-2">
                              <div className="flex items-center text-muted-foreground">
                                <Calendar className="w-4 h-4 mr-2" />
                                {exp.duration}
                              </div>
                              <div className="flex items-center text-muted-foreground">
                                <MapPin className="w-4 h-4 mr-2" />
                                {exp.location}
                              </div>
                            </div>
                          </div>

                          <p className="text-muted-foreground mb-4">{exp.description}</p>

                          <div className="space-y-3">
                            <h6 className="font-medium">Key Achievements:</h6>
                            <ul className="space-y-2">
                              {exp.achievements.map((achievement, achIndex) => (
                                <li key={achIndex} className="flex items-start">
                                  <Badge
                                    variant="outline"
                                    className={`mr-3 mt-0.5 px-2 py-0.5 text-xs transition-colors duration-300 ${
                                      hoveredItem === `exp-${index}` ? "border-primary text-primary" : ""
                                    }`}
                                  >
                                    {achIndex + 1}
                                  </Badge>
                                  <span className="text-muted-foreground">{achievement}</span>
                                </li>
                              ))}
                            </ul>
                          </div>

                          <div className="mt-6 flex justify-end">
                            <Button
                              variant="ghost"
                              size="sm"
                              className={`group ${
                                hoveredItem === `exp-${index}` ? "text-primary" : "text-muted-foreground"
                              }`}
                            >
                              View Details
                              <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
                            </Button>
                          </div>
                        </CardContent>
                      </Card>
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Education Timeline */}
        <div>
          <div className="flex items-center gap-3 mb-12">
            <GraduationCap className="w-8 h-8 text-primary" />
            <h3 className="text-2xl font-bold">Education</h3>
          </div>

          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-purple-600 to-pink-600"></div>

            <div className="space-y-12">
              {education.map((edu, index) => (
                <div
                  key={index}
                  className="relative transition-all duration-300"
                  onMouseEnter={() => setHoveredItem(`edu-${index}`)}
                  onMouseLeave={() => setHoveredItem(null)}
                >
                  {/* Timeline Dot */}
                  <div
                    className={`absolute left-6 w-4 h-4 rounded-full border-4 border-background transition-all duration-300 z-10 ${
                      hoveredItem === `edu-${index}`
                        ? "bg-gradient-to-r from-purple-400 to-pink-400 scale-125 shadow-lg"
                        : "bg-gradient-to-r from-purple-600 to-pink-600"
                    }`}
                  ></div>

                  <div className="ml-20">
                    <Card
                      className={`transition-all duration-300 ${
                        hoveredItem === `edu-${index}`
                          ? "shadow-xl -translate-y-2 border-primary/30 bg-primary/5"
                          : "hover:shadow-lg"
                      }`}
                    >
                      <CardContent className="p-6">
                        <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4">
                          <div>
                            <h4
                              className={`text-xl font-semibold transition-colors duration-300 ${
                                hoveredItem === `edu-${index}` ? "text-primary" : "text-foreground"
                              }`}
                            >
                              {edu.degree}
                            </h4>
                            <h5 className="text-lg font-medium text-muted-foreground">{edu.school}</h5>
                            <p className="text-muted-foreground mt-2">Specialized in {edu.focus}</p>
                          </div>
                          <div className="flex items-center text-muted-foreground">
                            <Calendar className="w-4 h-4 mr-2" />
                            {edu.year}
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
