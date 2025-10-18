"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { GraduationCap, Calendar, FileText } from "lucide-react"
import Link from "next/link"

export function AdmissionsSection() {
  const handleNavClick = (href: string) => {
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section id="admissions" className="py-20 bg-gradient-to-br from-background to-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 slide-up">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 drop-shadow-sm">Admissions Open</h2>
          <p className="text-xl text-foreground/80 mb-8 drop-shadow-sm">
            Join our community of learners and embark on a journey of academic excellence
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <Card className="scale-in text-center hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl bg-gradient-to-br from-background to-secondary/20">
            <CardContent className="p-6">
              <GraduationCap className="h-12 w-12 text-primary mx-auto mb-4 drop-shadow-sm" />
              <h3 className="text-xl font-semibold mb-2 drop-shadow-sm">Classes Available</h3>
              <p className="text-foreground/70">Playgroup to Matric</p>
            </CardContent>
          </Card>

          <Card className="scale-in text-center hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl bg-gradient-to-br from-background to-secondary/20">
            <CardContent className="p-6">
              <Calendar className="h-12 w-12 text-primary mx-auto mb-4 drop-shadow-sm" />
              <h3 className="text-xl font-semibold mb-2 drop-shadow-sm">Application Deadline</h3>
              <p className="text-foreground/70">May, 31st</p>
            </CardContent>
          </Card>

          <Card className="scale-in text-center hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl bg-gradient-to-br from-background to-secondary/20">
            <CardContent className="p-6">
              <FileText className="h-12 w-12 text-primary mx-auto mb-4 drop-shadow-sm" />
              <h3 className="text-xl font-semibold mb-2 drop-shadow-sm">Easy Process</h3>
              <p className="text-foreground/70">Simple online application</p>
            </CardContent>
          </Card>
        </div>

        <div className="text-center fade-in">
          <p className="text-lg mb-6 drop-shadow-sm text-foreground/80">
            Ready to give your child the best education? Learn more about our admission process, curriculum, and
            facilities.
          </p>
          <Link href="/academics">
            <Button
              size="lg"
              className="mr-4 hover:scale-105 transition-transform duration-200 shadow-lg hover:shadow-xl"
            >
              Learn More
            </Button>
          </Link>
          <a href="/Admission_Form.pdf" download>
            <Button
              size="lg"
              variant="outline"
              className="hover:scale-105 transition-transform duration-200 shadow-md hover:shadow-lg bg-transparent"
            >
              Download Application Form
            </Button>
          </a>
        </div>
      </div>
    </section>
  )
}
