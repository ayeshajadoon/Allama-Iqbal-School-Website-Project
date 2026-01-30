"use client"

import { useEffect, useMemo, useState } from "react"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { ChevronLeft, ChevronRight } from "lucide-react"

const galleryImages = [
  {
    src: "/2.jpg",
    alt: "Modern Classroom",
    category: "Facilities",
  },
  {
    src: "/1.jpg",
    alt: "Science Laboratory",
    category: "Facilities",
  },
  {
    src: "/4.jpg",
    alt: "School Library",
    category: "Facilities",
  },
  {
    src: "/e1.jpg",
    alt: "Sports Day",
    category: "Events",
  },
  {
    src: "/e5.jpg",
    alt: "Annual Function",
    category: "Events",
  },
  {
    src: "/e2.jpg",
    category: "Events",
  },
  {
    src: "/e3.jpg",
    category: "Events",
  },
  {
    src: "/e4.jpg",
    category: "Events",
  },
  {
    src: "/e6.jpg",
    alt: "Annual Function",
    category: "Events",
  },
  {
    src: "/3.jpg",
    alt: "Computer Lab",
    category: "Facilities",
  },
]

export function GallerySection() {
  const categories = useMemo(
    () => Array.from(new Set(galleryImages.map((i) => i.category))),
    [],
  )
  const [isOpen, setIsOpen] = useState(false)
  const [activeCategory, setActiveCategory] = useState<string | null>(null)
  const [activeIndex, setActiveIndex] = useState(0)
  const [mode, setMode] = useState<"grid" | "viewer">("grid")
  const activeImages = useMemo(
    () => (activeCategory ? galleryImages.filter((i) => i.category === activeCategory) : []),
    [activeCategory],
  )

  const showNext = () => {
    if (activeImages.length === 0) return
    setActiveIndex((prev) => (prev + 1) % activeImages.length)
  }

  const showPrev = () => {
    if (activeImages.length === 0) return
    setActiveIndex((prev) => (prev - 1 + activeImages.length) % activeImages.length)
  }

  useEffect(() => {
    if (!isOpen || mode !== "viewer") return
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") {
        e.preventDefault()
        showNext()
      } else if (e.key === "ArrowLeft") {
        e.preventDefault()
        showPrev()
      }
    }
    window.addEventListener("keydown", onKeyDown)
    return () => window.removeEventListener("keydown", onKeyDown)
  }, [isOpen, mode, activeImages.length])

  return (
    <section id="gallery" className="py-20 bg-gradient-to-br from-secondary/20 to-secondary/40">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 slide-up">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 drop-shadow-sm">School Gallery</h2>
          <p className="text-lg text-foreground/80 mb-8 drop-shadow-sm">
            Take a glimpse into our vibrant school life and modern facilities
          </p>
        </div>

        {/* Category Preview Tiles */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {categories.map((category, catIdx) => {
            const cover = galleryImages.find((i) => i.category === category)
            return (
              <button
                key={category}
                onClick={() => {
                  setActiveCategory(category)
                  setIsOpen(true)
                  setActiveIndex(0)
                  setMode("grid")
                }}
                className="group text-left relative overflow-hidden rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300 scale-in hover:scale-105 focus:outline-none"
                style={{ animationDelay: `${catIdx * 0.1}s` }}
              >
                <img
                  src={(cover && cover.src) || "/placeholder.svg"}
                  alt={category}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <h3 className="text-white font-semibold drop-shadow-lg">{category}</h3>
                  <p className="text-white/90 text-sm drop-shadow-md">Click to view photos</p>
                </div>
              </button>
            )
          })}
        </div>

        <div className="text-center fade-in">
          <Button
            size="lg"
            variant="outline"
            className="hover:scale-105 transition-transform duration-200 shadow-md hover:shadow-lg bg-transparent"
            onClick={() => {
              setActiveCategory(categories[0] || null)
              setIsOpen(true)
              setMode("grid")
            }}
          >
            View Photos
          </Button>
        </div>

        {/* Lightbox Modal */}
        <Dialog open={isOpen} onOpenChange={setIsOpen}>
          <DialogContent className="max-w-5xl">
            <DialogHeader>
              <DialogTitle>{activeCategory || "Gallery"}</DialogTitle>
            </DialogHeader>
            {activeImages.length > 0 ? (
              mode === "grid" ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                  {activeImages.map((img, idx) => (
                    <button
                      key={idx}
                      className="overflow-hidden rounded-md focus:outline-none"
                      onClick={() => {
                        setActiveIndex(idx)
                        setMode("viewer")
                      }}
                    >
                      <img src={img.src} alt={img.alt} className="w-full h-48 object-cover" />
                    </button>
                  ))}
                </div>
              ) : (
                <div className="relative">
                  <img
                    src={activeImages[activeIndex].src}
                    alt={activeImages[activeIndex].alt}
                    className="w-full h-[60vh] object-cover rounded-md"
                  />
                  <div className="absolute inset-0 flex items-center justify-between px-2">
                    <button
                      aria-label="Previous image"
                      onClick={showPrev}
                      className="p-2 rounded-full bg-black/40 hover:bg-black/60 text-white transition-colors"
                    >
                      <ChevronLeft className="h-6 w-6" />
                    </button>
                    <button
                      aria-label="Next image"
                      onClick={showNext}
                      className="p-2 rounded-full bg-black/40 hover:bg-black/60 text-white transition-colors"
                    >
                      <ChevronRight className="h-6 w-6" />
                    </button>
                  </div>
                  <div className="mt-3 text-sm opacity-80 text-center">
                    {activeIndex + 1} / {activeImages.length}
                    <button
                      className="ml-4 underline text-sm"
                      onClick={() => setMode("grid")}
                    >
                      Back to grid
                    </button>
                  </div>
                </div>
              )
            ) : (
              <p className="opacity-70">No images available for this category.</p>
            )}
          </DialogContent>
        </Dialog>
      </div>
    </section>
  )
}
