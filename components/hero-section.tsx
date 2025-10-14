"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight } from "lucide-react"

const slides = [
  {
    image: "/modern-school-exterior.png",
    title: "Welcome to Excellence",
    subtitle: "State-of-the-art facilities for comprehensive education",
  },
  {
    image: "/classroom-study-session.png",
    title: "Nurturing Young Minds",
    subtitle: "Dedicated teachers fostering academic growth",
  },
  {
    image: "/school-sports-activities-playground.jpg",
    title: "Holistic Development",
    subtitle: "Sports and activities for well-rounded growth",
  },
]

export function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [])

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)
  }

  const handleNavClick = (href: string) => {
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Slider */}
      <div className="absolute inset-0">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentSlide ? "opacity-100" : "opacity-0"
            }`}
          >
            <img src={slide.image || "/placeholder.svg"} alt={slide.title} className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-b from-primary/70 via-primary/60 to-primary/80" />
          </div>
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
        <div className="fade-in">
          <div className="w-30 h-30 bg-white rounded-full flex items-center justify-center mx-auto mb-6 shadow-2xl">
            <span className="text-primary font-bold text-2xl"> <img src="logo.png" alt="" /> </span>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-4 text-balance drop-shadow-2xl">
             Allama Iqbal Model High School
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-balance opacity-95 drop-shadow-lg">
            Nurturing Minds, Building Futures
          </p>
          <div className="slide-up">
            <p className="text-lg mb-8 max-w-2xl mx-auto leading-relaxed drop-shadow-md">
              {slides[currentSlide].subtitle}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                variant="secondary"
                className="text-primary shadow-lg hover:shadow-xl transition-all duration-300"
                onClick={() => handleNavClick("#about")}
              >
                Learn More About Us
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-primary bg-white/10 backdrop-blur-sm shadow-lg hover:shadow-xl transition-all duration-300"
                onClick={() => handleNavClick("#admissions")}
              >
                Admissions Open
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Slider Controls */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-20 p-2 rounded-full bg-white/20 hover:bg-white/30 transition-colors"
      >
        <ChevronLeft className="h-6 w-6 text-white" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-20 p-2 rounded-full bg-white/20 hover:bg-white/30 transition-colors"
      >
        <ChevronRight className="h-6 w-6 text-white" />
      </button>

      {/* Slide Indicators */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-colors ${index === currentSlide ? "bg-white" : "bg-white/50"}`}
          />
        ))}
      </div>
    </section>
  )
}
