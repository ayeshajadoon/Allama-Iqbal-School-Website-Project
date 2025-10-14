import { Card, CardContent } from "@/components/ui/card"
import { Users, Target, Award } from "lucide-react"

export function AboutSection() {
  return (
    <section id="about" className="py-20 bg-gradient-to-br from-secondary/20 to-secondary/40">
      <div className="container mx-auto px-4">
        {/* About Introduction */}
        <div className="text-center mb-16 slide-up">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-balance drop-shadow-sm">About Our School</h2>
          <p className="text-lg text-foreground/80 max-w-3xl mx-auto leading-relaxed drop-shadow-sm">
            Established with a vision to provide quality education, Allama Iqbal Model School has been nurturing young
            minds for over two decades. We combine traditional values with modern teaching methodologies to create
            well-rounded individuals.
          </p>
        </div>

        {/* Vision Section */}
        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div className="fade-in">
            <img
              src="/school-vision-modern-education.jpg"
              alt="Our Vision"
              className="rounded-lg shadow-xl w-full hover:shadow-2xl transition-shadow duration-300"
            />
          </div>
          <div className="slide-up">
            <h3 className="text-2xl font-bold mb-4 flex items-center drop-shadow-sm">
              <Target className="h-6 w-6 text-primary mr-2" />
              Our Vision
            </h3>
            <p className="text-foreground/80 leading-relaxed mb-6 drop-shadow-sm">
              To be a leading educational institution that empowers students with knowledge, skills, and values
              necessary to become responsible global citizens and future leaders.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <Card className="scale-in hover:scale-105 transition-transform duration-300 shadow-lg hover:shadow-xl">
                <CardContent className="p-4 text-center">
                  <Users className="h-8 w-8 text-primary mx-auto mb-2" />
                  <h4 className="font-semibold">Community</h4>
                </CardContent>
              </Card>
              <Card className="scale-in hover:scale-105 transition-transform duration-300 shadow-lg hover:shadow-xl">
                <CardContent className="p-4 text-center">
                  <Award className="h-8 w-8 text-primary mx-auto mb-2" />
                  <h4 className="font-semibold">Excellence</h4>
                </CardContent>
              </Card>
              <Card className="scale-in hover:scale-105 transition-transform duration-300 shadow-lg hover:shadow-xl">
                <CardContent className="p-4 text-center">
                  <Target className="h-8 w-8 text-primary mx-auto mb-2" />
                  <h4 className="font-semibold">Innovation</h4>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>

        {/* Principal's Message */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="slide-up order-2 md:order-1">
            <h3 className="text-2xl font-bold mb-4 drop-shadow-sm">Principal's Message</h3>
            <blockquote className="text-lg text-foreground/80 leading-relaxed italic mb-4 drop-shadow-sm bg-background/50 p-6 rounded-lg border-l-4 border-primary">
              "Education is not just about academic excellence; it's about shaping character, building confidence, and
              preparing our students for the challenges of tomorrow. At Allama Iqbal Model School, we are committed to
              providing a nurturing environment where every child can discover their potential and achieve their
              dreams."
            </blockquote>
            <div className="flex items-center">
              <div>
                <p className="font-semibold drop-shadow-sm">Khurram Bashir                </p>
                <p className="text-sm text-foreground/70">Principal</p>
              </div>
            </div>
          </div>
          <div className="fade-in order-1 md:order-2">
            <img
              src="/professional-principal-portrait.png"
              alt="Principal"
              className="rounded-lg shadow-xl w-full hover:shadow-2xl transition-shadow duration-300"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
