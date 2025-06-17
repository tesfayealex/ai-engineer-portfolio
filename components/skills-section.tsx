"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ChevronDown, ChevronRight } from "lucide-react"
import portfolioConfig from "@/data/portfolio-config.json"

export function SkillsSection() {
  const { skills } = portfolioConfig

  // Group categories by rows (2 per row in desktop view)
  const categoriesByRow = skills.categories.reduce((rows, category, index) => {
    const rowIndex = Math.floor(index / 2)
    if (!rows[rowIndex]) rows[rowIndex] = []
    rows[rowIndex].push(category)
    return rows
  }, [] as any[])

  // Initialize with first row expanded by default
  const [expandedRows, setExpandedRows] = useState<number[]>([0])

  const toggleRow = (rowIndex: number) => {
    setExpandedRows((prev) => {
      if (prev.includes(rowIndex)) {
        // If row is expanded, collapse it
        return prev.filter((idx) => idx !== rowIndex)
      } else {
        // If row is collapsed, expand it
        return [...prev, rowIndex]
      }
    })
  }

  const getSkillLevel = (level: number) => {
    if (level >= 90) return "Expert"
    if (level >= 75) return "Advanced"
    if (level >= 60) return "Intermediate"
    if (level >= 40) return "Fair"
    return "Beginner"
  }

  const getSkillColor = (level: number) => {
    if (level >= 90) return "bg-green-500"
    if (level >= 75) return "bg-blue-500"
    if (level >= 60) return "bg-yellow-500"
    if (level >= 40) return "bg-orange-500"
    return "bg-red-500"
  }

  return (
    <section id="skills" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Skills & Expertise</h2>
          <p className="text-lg text-muted-foreground">
            Technologies and tools I work with to build intelligent systems
          </p>
        </div>

        {categoriesByRow.map((row, rowIndex) => (
          <div key={rowIndex} className="mb-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
              {row.map((category, categoryIndex) => {
                const isRowExpanded = expandedRows.includes(rowIndex)

                return (
                  <Card
                    key={categoryIndex}
                    className="group hover:shadow-lg transition-all duration-300 overflow-hidden"
                  >
                    <CardHeader
                      className="cursor-pointer select-none transition-colors hover:bg-muted/50"
                      onClick={() => toggleRow(rowIndex)}
                    >
                      <CardTitle className="flex items-center justify-between text-lg">
                        <div className="flex items-center gap-3">
                          <span className="text-2xl">{category.icon}</span>
                          <span>{category.name}</span>
                        </div>
                        <div className="transition-transform duration-300">
                          {isRowExpanded ? <ChevronDown className="w-5 h-5" /> : <ChevronRight className="w-5 h-5" />}
                        </div>
                      </CardTitle>
                    </CardHeader>

                    {/* Animated content container with proper height calculation */}
                    <div
                      className={`transition-all duration-300 ease-in-out overflow-hidden ${
                        isRowExpanded ? "opacity-100" : "opacity-0"
                      }`}
                      style={{
                        maxHeight: isRowExpanded ? `${category.skills.length * 70 + 32}px` : "0px",
                      }}
                    >
                      <CardContent className="pt-0 pb-6 space-y-4">
                        {category.skills.map((skill, skillIndex) => (
                          <div key={skillIndex} className="space-y-2">
                            <div className="flex justify-between items-center">
                              <span className="text-sm font-medium">{skill.name}</span>
                              <div className="flex items-center gap-2">
                                <span className="text-xs text-muted-foreground">{getSkillLevel(skill.level)}</span>
                                <span className="text-xs font-medium">{skill.level}%</span>
                              </div>
                            </div>
                            <div className="relative">
                              <div className="h-2 w-full bg-secondary rounded-full overflow-hidden">
                                <div
                                  className={`h-full rounded-full transition-all duration-1000 ease-out ${getSkillColor(
                                    skill.level,
                                  )}`}
                                  style={{
                                    width: isRowExpanded ? `${skill.level}%` : "0%",
                                    transitionDelay: isRowExpanded ? `${skillIndex * 100 + 200}ms` : "0ms",
                                  }}
                                />
                              </div>
                            </div>
                          </div>
                        ))}
                      </CardContent>
                    </div>
                  </Card>
                )
              })}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
