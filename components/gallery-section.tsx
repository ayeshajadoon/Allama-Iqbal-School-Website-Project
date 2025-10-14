"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"

const galleryImages = [
  {
    src: "/school-classroom-modern-learning.jpg",
    alt: "Modern Classroom",
    category: "Facilities",
  },
  {
    src: "/students-science-laboratory-experiment.jpg",
    alt: "Science Laboratory",
    category: "Facilities",
  },
  {
    src: "/school-library-students-reading.jpg",
    alt: "School Library",
    category: "Facilities",
  },
  {
    src: "/school-sports-day-students-activities.jpg",
    alt: "Sports Day",
    category: "Events",
  },
  {
    src: "/school-annual-function-performance.jpg",
    alt: "Annual Function",
    category: "Events",
  },
  {
    src: "/computer-lab-students-technology.jpg",
    alt: "Computer Lab",
    category: "Facilities",
  },
]

export function GallerySection() {
  const [selectedCategory, setSelectedCategory] = useState("All")
  const categories = ["All", "Facilities", "Events"]

  const filteredImages =
    selectedCategory === "All" ? galleryImages : galleryImages.filter((img) => img.category === selectedCategory)

  return (
    <section id="gallery" className="py-20 bg-gradient-to-br from-secondary/20 to-secondary/40">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 slide-up">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 drop-shadow-sm">School Gallery</h2>
          <p className="text-lg text-foreground/80 mb-8 drop-shadow-sm">
            Take a glimpse into our vibrant school life and modern facilities
          </p>

          {/* Category Filter */}
          <div className="flex justify-center space-x-4 mb-8">
            {categories.map((category) => (
              <Button
                key={category}
                variant={selectedCategory === category ? "default" : "outline"}
                onClick={() => setSelectedCategory(category)}
                size="sm"
                className="hover:scale-105 transition-transform duration-200 shadow-md hover:shadow-lg"
              >
                {category}
              </Button>
            ))}
          </div>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {filteredImages.map((image, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300 scale-in hover:scale-105"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <img
                src={image.src || "/placeholder.svg"}
                alt={image.alt}
                className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                <h3 className="text-white font-semibold drop-shadow-lg">{image.alt}</h3>
                <p className="text-white/90 text-sm drop-shadow-md">{image.category}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center fade-in">
          <Button
            size="lg"
            variant="outline"
            className="hover:scale-105 transition-transform duration-200 shadow-md hover:shadow-lg bg-transparent"
          >
            View More Photos
          </Button>
        </div>
      </div>
    </section>
  )
}
