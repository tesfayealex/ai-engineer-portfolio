import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"

export default function NotFound() {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Navigation />
      <main className="flex-grow flex items-center justify-center">
        <div className="max-w-md mx-auto px-4 py-16 text-center">
          <h2 className="text-4xl font-bold mb-4">Experience Not Found</h2>
          <p className="text-muted-foreground mb-8">
            Sorry, the experience you're looking for doesn't exist or has been removed.
          </p>
          <Button asChild>
            <Link href="/#resume">Return to Resume</Link>
          </Button>
        </div>
      </main>
      <Footer />
    </div>
  )
}
