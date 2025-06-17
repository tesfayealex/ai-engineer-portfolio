"use client"

import { Card, CardContent } from "@/components/ui/card"
import portfolioConfig from "@/data/portfolio-config.json"

export function AboutSection() {
  const { personal, education, certifications } = portfolioConfig

  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">About Me</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Passionate about creating intelligent systems that solve real-world problems
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-6">
            <div className="prose prose-lg dark:prose-invert max-w-none">
              <p className="text-muted-foreground leading-relaxed">{personal.bio}</p>
              <p className="text-muted-foreground leading-relaxed">
                With over 5 years of experience in the AI field, I've had the privilege of working on cutting-edge
                projects that span from computer vision and natural language processing to large-scale machine learning
                infrastructure. My passion lies in bridging the gap between theoretical AI research and practical,
                scalable solutions.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <Card>
                <CardContent className="p-4">
                  <h4 className="font-semibold mb-2">Education</h4>
                  <div className="space-y-2">
                    {education.map((edu, index) => (
                      <div key={index} className="text-sm">
                        <p className="font-medium">{edu.degree}</p>
                        <p className="text-muted-foreground">
                          {edu.school} • {edu.year}
                        </p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-4">
                  <h4 className="font-semibold mb-2">Certifications</h4>
                  <div className="space-y-1">
                    {certifications.slice(0, 3).map((cert, index) => (
                      <p key={index} className="text-sm text-muted-foreground">
                        • {cert}
                      </p>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Right Animation */}
          <div className="flex justify-center">
            <div className="relative w-80 h-80">
              {/* Central AI Brain */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-32 h-32 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center animate-pulse-slow">
                  <span className="text-4xl text-white">🧠</span>
                </div>
              </div>

              {/* Orbiting Skills */}
              <div className="absolute inset-0 animate-spin-slow">
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                  <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center">
                    <span className="text-2xl">🤖</span>
                  </div>
                </div>
                <div className="absolute top-1/2 right-0 transform translate-x-1/2 -translate-y-1/2">
                  <div className="w-16 h-16 bg-purple-100 dark:bg-purple-900 rounded-full flex items-center justify-center">
                    <span className="text-2xl">📊</span>
                  </div>
                </div>
                <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2">
                  <div className="w-16 h-16 bg-green-100 dark:bg-green-900 rounded-full flex items-center justify-center">
                    <span className="text-2xl">⚡</span>
                  </div>
                </div>
                <div className="absolute top-1/2 left-0 transform -translate-x-1/2 -translate-y-1/2">
                  <div className="w-16 h-16 bg-pink-100 dark:bg-pink-900 rounded-full flex items-center justify-center">
                    <span className="text-2xl">🔬</span>
                  </div>
                </div>
              </div>

              {/* Connecting Lines */}
              <div className="absolute inset-0 opacity-30">
                <svg className="w-full h-full" viewBox="0 0 320 320">
                  <circle
                    cx="160"
                    cy="160"
                    r="120"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1"
                    strokeDasharray="5,5"
                    className="animate-pulse"
                  />
                  <circle
                    cx="160"
                    cy="160"
                    r="80"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1"
                    strokeDasharray="3,3"
                    className="animate-pulse"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
