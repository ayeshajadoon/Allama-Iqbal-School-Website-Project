"use client"

import type React from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { MapPin, Phone, Mail, Facebook, MessageCircle, Youtube, Instagram } from "lucide-react"

const TikTokIcon = () => (
  <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor">
    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" />
  </svg>
)

export function ContactSection() {

  return (
    <section id="contact" className="py-20 bg-primary text-primary-foreground">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 slide-up">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 drop-shadow-lg">Contact Us</h2>
          <p className="text-lg opacity-90 mb-8 drop-shadow-md">
            Get in touch with us for admissions, inquiries, or any questions
          </p>
        </div>

        <div className="space-y-8 fade-in">
          {/* Row 1: Address | Phone */}
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="bg-primary-foreground/10 border-primary-foreground/20">
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <MapPin className="h-6 w-6 text-primary-foreground mt-1" />
                  <div>
                    <h3 className="text-primary-foreground font-semibold mb-2">Address</h3>
                    <p className="text-primary-foreground opacity-90">
                      Mohallah Haji Imam Pir,
                      <br />
                      Sarai Saleh, Haripur
                      <br />
                      Kpk, Pakistan
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-primary-foreground/10 border-primary-foreground/20">
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <Phone className="h-6 w-6 text-primary-foreground mt-1" />
                  <div>
                    <h3 className="text-primary-foreground font-semibold mb-2">Phone</h3>
                    <p className="text-primary-foreground opacity-90">+92 312 5912464</p>
                    <p className="text-primary-foreground opacity-90">+92 333 5041611</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Row 2: Email | Social */}
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="bg-primary-foreground/10 border-primary-foreground/20">
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <Mail className="h-6 w-6 text-primary-foreground mt-1" />
                  <div>
                    <h3 className="text-primary-foreground font-semibold mb-2">Email</h3>
                    <p className="text-primary-foreground opacity-90">aimssaraisaleh@gmail.com</p>
                    <p className="text-primary-foreground opacity-90 break-all">allama.iqbal.model.school786@gmail.com</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-primary-foreground/10 border-primary-foreground/20">
              <CardContent className="p-6">
                <h3 className="text-primary-foreground font-semibold mb-4">Follow Us</h3>
                <div className="flex space-x-4">
                  <Button asChild size="sm" variant="secondary" className="p-2 hover:scale-110 transition-transform">
                    <a href="https://www.facebook.com/share/1GDZUt11A5/" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="no-underline">
                      <Facebook className="h-4 w-4" />
                    </a>
                  </Button>
                  <Button asChild size="sm" variant="secondary" className="p-2 hover:scale-110 transition-transform">
                    <a href="https://youtube.com/@allamiqbalmodelschool?si=OHBZyG0pOs_k_kl0" target="_blank" rel="noopener noreferrer" aria-label="YouTube" className="no-underline">
                      <Youtube className="h-4 w-4" />
                    </a>
                  </Button>
                  <Button asChild size="sm" variant="secondary" className="p-2 hover:scale-110 transition-transform">
                    <a href="https://www.instagram.com/allamaiqbalmodelschool?utm_source=qr&igsh=MWF3OTA4bXE0MGJqaw==" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="no-underline">
                      <Instagram className="h-4 w-4" />
                    </a>
                  </Button>
                  <Button asChild size="sm" variant="secondary" className="p-2 hover:scale-110 transition-transform">
                    <a href="http://tiktok.com/@allamaiqbalmodelschool" target="_blank" rel="noopener noreferrer" aria-label="TikTok" className="no-underline">
                      <TikTokIcon />
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Google Maps Embed */}
        <div className="mt-12 fade-in">
          <Card className="bg-primary-foreground/10 border-primary-foreground/20">
            <CardContent className="p-0">
              <div className="w-full h-64 rounded-lg overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3443.690820415131!2d72.9780563150012!3d33.98800262623098!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38dfb3a196d3b8d7%3A0x3fbc40c64e02a3d2!2sAllama%20Iqbal%20Model%20Middle%20School!5e0!3m2!1sen!2s!4v1707760830000"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="School Location"
              />

              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
