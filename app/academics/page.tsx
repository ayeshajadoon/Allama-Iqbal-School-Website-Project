import { Navigation } from "@/components/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  BookOpen,
  Users,
  Microscope,
  Computer,
  Trophy,
  Music,
  Palette,
  Download,
  Calendar,
  FileText,
  CheckCircle,
} from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function AcademicsPage() {
  const classes = [
    { name: "Playgroup", age: "4-5 years", description: "Early childhood development with play-based learning" },
    {
      name: "Primary",
      age: "5-10 years",
      description: "Foundation building in core subjects with creative activities",
    },
    { name: "Middle", age: "11-13 years", description: "Comprehensive curriculum preparing for higher education" },
    { name: "High", age: "14-16 years", description: "Matriculation preparation with specialized subject focus" },
  ]

  const subjects = {
    primary: ["English", "Urdu", "Mathematics", "Science", "Computer Science", "Social Studies", "Islamic Studies", "Nazra Quran"],
    middle: [
      "English", "Urdu", "Mathematics", "Science", "Computer Science", "Social Studies", "Islamic Studies", "Mutalah Quran"],
    high: [
      "English",
      "Urdu",
      "Mathematics",
      "Physics",
      "Chemistry",
      "Biology",
      "Computer Science",
      "Pakistan Studies",
      "Islamic Studies",
    ],
  }

  const facilities = [
    { icon: BookOpen, name: "Library", description: "Well-stocked library with over 5000 books and digital resources" },
    {
      icon: Computer,
      name: "Computer Lab",
      description: "Modern computer lab with latest software and internet access",
    },
    { icon: Users, name: "Playground", description: "Spacious playground for sports and recreational activities" },
    {
      icon: Microscope,
      name: "Science Lab",
      description: "Fully equipped laboratories for Physics, Chemistry, and Biology",
    },
  ]

  const activities = [
    { icon: Trophy, name: "Debates", description: "Regular debate competitions to enhance communication skills" },
    { icon: Users, name: "Sports", description: "Cricket, Football, Basketball, and other sports activities" },
    { icon: Music, name: "Cultural Events", description: "Annual functions, talent shows, and cultural celebrations" },
    { icon: Palette, name: "Arts & Crafts", description: "Creative workshops and art competitions" },
  ]

  const admissionSteps = [
    "Fill out the admission application form",
    "Submit required documents",
    "Attend entrance test/interview",
    "Receive admission confirmation",
    "Complete fee payment and enrollment",
  ]

  const requiredDocuments = [
    "Birth Certificate",
    "Previous School Leaving Certificate",
    "Academic Transcripts",
    "Passport Size Photographs",
    "CNIC Copy of Parents/Guardian",
  ]

  return (
    <main className="min-h-screen">
      <Navigation />

      {/* Header */}
      <section className="pt-24 pb-12 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="text-center slide-up">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Academics & Admissions</h1>
            <p className="text-xl opacity-90 max-w-2xl mx-auto">
              Comprehensive education programs designed to nurture academic excellence and character development
            </p>
          </div>
        </div>
      </section>

      {/* Classes Offered */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 slide-up">Classes Offered</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {classes.map((cls, index) => (
              <Card key={index} className="scale-in" style={{ animationDelay: `${index * 0.1}s` }}>
                <CardHeader>
                  <CardTitle className="text-xl">{cls.name}</CardTitle>
                  <Badge variant="secondary">{cls.age}</Badge>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{cls.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Curriculum */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 slide-up">Curriculum</h2>
          <div className="space-y-8">
            <Card className="fade-in">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <BookOpen className="h-6 w-6 mr-2 text-primary" />
                  Primary Level Subjects
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {subjects.primary.map((subject, index) => (
                    <Badge key={index} variant="outline">
                      {subject}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="fade-in">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <BookOpen className="h-6 w-6 mr-2 text-primary" />
                  Middle Level Subjects
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {subjects.middle.map((subject, index) => (
                    <Badge key={index} variant="outline">
                      {subject}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="fade-in">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <BookOpen className="h-6 w-6 mr-2 text-primary" />
                  High Level Subjects
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {subjects.high.map((subject, index) => (
                    <Badge key={index} variant="outline">
                      {subject}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Facilities */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 slide-up">Our Facilities</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {facilities.map((facility, index) => (
              <Card key={index} className="text-center scale-in" style={{ animationDelay: `${index * 0.1}s` }}>
                <CardContent className="p-6">
                  <facility.icon className="h-12 w-12 text-primary mx-auto mb-4" />
                  <h3 className="text-xl font-semibold mb-2">{facility.name}</h3>
                  <p className="text-muted-foreground text-sm">{facility.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Co-curricular Activities */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 slide-up">Co-curricular Activities</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {activities.map((activity, index) => (
              <Card key={index} className="text-center scale-in" style={{ animationDelay: `${index * 0.1}s` }}>
                <CardContent className="p-6">
                  <activity.icon className="h-12 w-12 text-primary mx-auto mb-4" />
                  <h3 className="text-xl font-semibold mb-2">{activity.name}</h3>
                  <p className="text-muted-foreground text-sm">{activity.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Uniform */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 slide-up">School Uniform</h2>
          
          <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
            {/* Boys Uniform */}
            <Card className="fade-in overflow-hidden">
              <div className="relative w-full h-64 md:h-80">
                <Image
                  src="/placeholder.jpg"
                  alt="Boys School Uniform"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
              <CardHeader>
                <CardTitle className="text-2xl">Boys Uniform</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <p className="text-muted-foreground">
                  <strong>Shirt:</strong> Blue cotton shirt.
                </p>
                <p className="text-muted-foreground">
                  <strong>Trousers:</strong> Navy blue trousers with proper fit and length.
                </p>
                <p className="text-muted-foreground">
                  <strong>Belt:</strong> Black leather belt with simple buckle (optional for younger students).
                </p>
                <p className="text-muted-foreground">
                  <strong>Shoes:</strong> Black school shoes (joggers not allowed) with black socks.
                </p>
                <p className="text-muted-foreground">
                  <strong>Additional:</strong> Navy-blue tie is must.
                </p>
              </CardContent>
            </Card>

            {/* Girls Uniform */}
            <Card className="fade-in overflow-hidden">
              <div className="relative w-full h-64 md:h-80">
                <Image
                  src="/female.png"
                  alt="Girls School Uniform"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
              <CardHeader>
                <CardTitle className="text-2xl">Girls Uniform</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <p className="text-muted-foreground">
                  <strong>Shirt:</strong> Blue cotton shirt with school logo embroidered on the right pocket.
                </p>
                <p className="text-muted-foreground">
                  <strong>Trousers:</strong> White shalwar
                </p>
                <p className="text-muted-foreground">
                  <strong>Dupatta:</strong> Plain white dupatta with a navy blue lace border, neatly draped in a folded (pleated) style.
                </p>
                <p className="text-muted-foreground">
                  <strong>Shoes:</strong> Black school shoes (joggers not allowed) with black socks.
                </p>
                <p className="text-muted-foreground">
                  <strong>Winter:</strong> Navy Blue coat with navy blue scarf.
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="mt-8 text-center">
            <p className="text-muted-foreground text-sm">
              All uniforms must be clean, well-fitted, and properly maintained. Uniforms can be purchased from Sunny Garments or Usman Garments located in Haripur.
            </p>
          </div>
        </div>
      </section>

      {/* Admissions */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 slide-up">Admissions</h2>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Admission Process */}
            <Card className="fade-in">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <FileText className="h-6 w-6 mr-2 text-primary" />
                  Admission Process
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {admissionSteps.map((step, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <div className="w-6 h-6 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm font-bold mt-0.5">
                        {index + 1}
                      </div>
                      <p className="text-muted-foreground">{step}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Required Documents */}
            <Card className="fade-in">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <CheckCircle className="h-6 w-6 mr-2 text-primary" />
                  Required Documents
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {requiredDocuments.map((doc, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <CheckCircle className="h-4 w-4 text-primary" />
                      <p className="text-muted-foreground">{doc}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Important Dates & Actions */}
          <div className="mt-12 text-center space-y-6 slide-up">
            <Card className="max-w-md mx-auto">
              <CardContent className="p-6">
                <Calendar className="h-8 w-8 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">Important Dates</h3>
                <p className="text-muted-foreground mb-2">Admissions Open: April, 1st</p>
                <p className="text-muted-foreground">Application Deadline: May 31st</p>
              </CardContent>
            </Card>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/Admission_Form.pdf" download className="flex justify-center w-full sm:w-auto">
                <Button
                  size="lg"
                  className="flex items-center transition-transform duration-200 hover:scale-105 hover:shadow-lg w-full sm:w-auto justify-center"
                >
                  <Download className="h-4 w-4 mr-2" />
                  Download Application Form
                </Button>
              </a>
              <Link href="/#contact">
                <Button size="lg" variant="outline">
                  Contact Admissions Office
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
