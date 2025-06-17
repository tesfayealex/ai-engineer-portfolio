"use client"

import { Button } from "@/components/ui/button"
import { Github, Linkedin, Mail, Twitter } from "lucide-react"
import Image from "next/image"
import portfolioConfig from "@/data/portfolio-config.json"

export function HeroSection() {
  const { personal, social } = portfolioConfig

  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-16 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 dark:from-blue-950 dark:via-purple-950 dark:to-pink-950">
        <div className="absolute inset-0 bg-[url('/placeholder.svg?height=800&width=1200')] bg-cover bg-center opacity-10">
          <div className="absolute inset-0 bg-gradient-to-r from-background/80 to-background/60" />
        </div>

        {/* Floating Code Elements */}
        <div className="absolute top-20 left-10 animate-float">
          <div className="bg-primary/10 backdrop-blur-sm rounded-lg p-3 text-xs font-mono">
            <span className="text-blue-600">const</span> <span className="text-purple-600">ai</span> ={" "}
            <span className="text-green-600">'future'</span>
          </div>
        </div>

        <div className="absolute top-40 right-20 animate-float-delayed">
          <div className="bg-primary/10 backdrop-blur-sm rounded-lg p-3 text-xs font-mono">
            <span className="text-red-600">import</span> <span className="text-blue-600">tensorflow</span>{" "}
            <span className="text-red-600">as</span> <span className="text-blue-600">tf</span>
          </div>
        </div>

        <div className="absolute bottom-32 left-20 animate-float">
          <div className="bg-primary/10 backdrop-blur-sm rounded-lg p-3 text-xs font-mono">
            <span className="text-purple-600">model</span>.<span className="text-blue-600">fit</span>(
            <span className="text-green-600">X, y</span>)
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Left Content */}
          <div className="flex-1 space-y-8">
            <div className="space-y-6">
              <div className="space-y-2">
                <p className="text-lg text-muted-foreground font-medium">Hello, I'm</p>
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
                  <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                    {personal.name}
                  </span>
                </h1>
                <h2 className="text-xl sm:text-2xl text-muted-foreground font-medium">{personal.title}</h2>
              </div>
              <p className="text-lg text-muted-foreground max-w-2xl leading-relaxed">{personal.tagline}</p>
              <p className="text-base text-muted-foreground max-w-2xl">{personal.bio}</p>
            </div>

            {/* Social Media Links */}
            <div className="space-y-4">
              <p className="text-sm font-medium text-muted-foreground">Connect with me:</p>
              <div className="flex flex-wrap gap-4">
                <Button variant="outline" size="lg" asChild className="group">
                  <a href={social.github} target="_blank" rel="noopener noreferrer">
                    <Github className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
                    GitHub
                  </a>
                </Button>
                <Button variant="outline" size="lg" asChild className="group">
                  <a href={social.linkedin} target="_blank" rel="noopener noreferrer">
                    <Linkedin className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
                    LinkedIn
                  </a>
                </Button>
                <Button variant="outline" size="lg" asChild className="group">
                  <a href={social.twitter} target="_blank" rel="noopener noreferrer">
                    <Twitter className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
                    Twitter
                  </a>
                </Button>
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
                  asChild
                >
                  <a href={`mailto:${personal.email}`}>
                    <Mail className="w-5 h-5 mr-2" />
                    Get In Touch
                  </a>
                </Button>
              </div>
            </div>
          </div>

          {/* Right Image */}
          <div className="flex-shrink-0">
            <div className="relative">
              {/* Amoeba-shaped container */}
              <div className="w-80 h-80 lg:w-96 lg:h-96 relative">
                <div
                  className="w-full h-full bg-gradient-to-br from-blue-600 via-purple-600 to-pink-600 p-1 animate-pulse-slow"
                  style={{
                    clipPath: "polygon(30% 0%, 70% 0%, 100% 30%, 100% 70%, 70% 100%, 30% 100%, 0% 70%, 0% 30%)",
                    borderRadius: "60% 40% 30% 70% / 60% 30% 70% 40%",
                  }}
                >
                  <div
                    className="w-full h-full bg-background p-2"
                    style={{
                      clipPath: "polygon(30% 0%, 70% 0%, 100% 30%, 100% 70%, 70% 100%, 30% 100%, 0% 70%, 0% 30%)",
                      borderRadius: "60% 40% 30% 70% / 60% 30% 70% 40%",
                    }}
                  >
                    <Image
                      src={personal.avatar || "/placeholder.svg?height=400&width=400"}
                      alt={personal.name}
                      width={400}
                      height={400}
                      className="w-full h-full object-cover"
                      style={{
                        clipPath: "polygon(30% 0%, 70% 0%, 100% 30%, 100% 70%, 70% 100%, 30% 100%, 0% 70%, 0% 30%)",
                        borderRadius: "60% 40% 30% 70% / 60% 30% 70% 40%",
                      }}
                    />
                  </div>
                </div>
              </div>

              {/* Floating AI Badge */}
              <div className="absolute -bottom-6 -right-6 w-20 h-20 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center shadow-lg animate-bounce-slow">
                <span className="text-white font-bold text-lg">AI</span>
              </div>

              {/* Tech Stack Indicators */}
              <div className="absolute -top-4 -left-4 bg-white dark:bg-gray-800 rounded-full p-3 shadow-lg animate-float">
                <span className="text-2xl">🤖</span>
              </div>
              <div className="absolute top-10 -right-8 bg-white dark:bg-gray-800 rounded-full p-3 shadow-lg animate-float-delayed">
                <span className="text-2xl">⚡</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
