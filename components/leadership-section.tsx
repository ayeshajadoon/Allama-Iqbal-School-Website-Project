"use client"

const leadershipData = [
  {
    name: "Ms. Nighat Arif",
    role: "Principal",
    image: "/female.png",
  },
  {
    name: "Ms. Naseem Akhtar",
    role: "Vice Principal",
    image: "/female.png",
  },
  {
    name: "Ms. Ameena Bibi",
    role: "Coordinator",
    image: "/female.png",
  },
]

export function LeadershipSection() {
  return (
    <section className="py-20 bg-gradient-to-br from-background to-secondary/20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 slide-up">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Leadership</h2>
          <p className="text-lg text-foreground/80 mb-8 max-w-3xl mx-auto">
            Meet the people guiding Allama Iqbal Model High School towards excellence in education.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 fade-in">
          {leadershipData.map((leader, index) => (
            <div
              key={index}
              className="text-center scale-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="mb-6">
                <div className="w-44 h-44 mx-auto rounded-full overflow-hidden border-4 border-primary/30 shadow-xl">
                  <img
                    src={leader.image}
                    alt={leader.name}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <h3 className="text-2xl font-semibold mb-1 text-foreground">{leader.name}</h3>
              <p className="text-primary font-semibold text-base">{leader.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
