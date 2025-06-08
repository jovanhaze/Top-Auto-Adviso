import Header from "@/components/header";
import Footer from "@/components/footer";
import { Award, Users, Target, Shield } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export default function About() {
  const values = [
    {
      icon: <Shield className="h-8 w-8 text-emerald" />,
      title: "Protection First",
      description: "Every decision we make prioritizes protecting our clients from dealer manipulation and overcharging."
    },
    {
      icon: <Target className="h-8 w-8 text-emerald" />,
      title: "Transparency",
      description: "We believe in complete honesty about pricing, processes, and what you can expect from our services."
    },
    {
      icon: <Users className="h-8 w-8 text-emerald" />,
      title: "Client Success",
      description: "Your success is our success. We're not satisfied until you drive away with confidence and savings."
    },
    {
      icon: <Award className="h-8 w-8 text-emerald" />,
      title: "Expertise",
      description: "Years of automotive industry experience combined with consumer advocacy training."
    }
  ];

  const stats = [
    { number: "500+", label: "Clients Protected" },
    { number: "$2.4M", label: "Total Savings Generated" },
    { number: "98%", label: "Client Satisfaction Rate" },
    { number: "5+", label: "Years Experience" }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-b from-light-gray to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-navy mb-6">
              About Top Auto Advisors
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We're on a mission to level the playing field between first-time car buyers 
              and dealerships, ensuring every transaction is fair, transparent, and beneficial to you.
            </p>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-navy mb-6">Our Story</h2>
              <div className="space-y-4 text-gray-700">
                <p>
                  Top Auto Advisors was founded after witnessing countless first-time car buyers 
                  fall victim to predatory dealer practices. We saw families overpaying by thousands, 
                  getting trapped in unfavorable financing, and walking away feeling defeated.
                </p>
                <p>
                  Our founder, with over a decade of experience in automotive sales and consumer 
                  advocacy, decided to bridge this knowledge gap. We believe that with the right 
                  guidance and protection, anyone can navigate the car buying process successfully.
                </p>
                <p>
                  Today, we've helped hundreds of families save money, avoid scams, and drive away 
                  with confidence. Every success story motivates us to continue fighting for fair 
                  and transparent car buying experiences.
                </p>
              </div>
            </div>
            <div className="bg-light-gray p-8 rounded-lg">
              <h3 className="text-2xl font-bold text-navy mb-6">Our Mission</h3>
              <p className="text-gray-700 mb-6">
                To empower first-time car buyers with the knowledge, tools, and support needed 
                to make confident purchasing decisions while protecting them from dealer manipulation.
              </p>
              <div className="grid grid-cols-2 gap-4">
                {stats.map((stat, index) => (
                  <div key={index} className="text-center">
                    <div className="text-2xl font-bold text-emerald">{stat.number}</div>
                    <div className="text-sm text-gray-600">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-20 bg-light-gray">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-navy mb-4">Our Values</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              These core values guide every interaction and decision we make in serving our clients.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <Card key={index} className="text-center">
                <CardContent className="p-6">
                  <div className="mx-auto mb-4 p-3 bg-emerald/10 rounded-full w-fit">
                    {value.icon}
                  </div>
                  <h3 className="font-semibold text-navy mb-3">{value.title}</h3>
                  <p className="text-gray-600 text-sm">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-navy mb-4">Meet Our Team</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Our experienced advisors bring decades of combined automotive and consumer advocacy experience.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Founder Card */}
            <Card className="text-center">
              <CardContent className="p-6">
                <div className="w-24 h-24 bg-gradient-to-br from-emerald to-emerald/80 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <span className="text-white text-2xl font-bold">CEO</span>
                </div>
                <h3 className="font-semibold text-navy mb-2">Founder & Lead Advisor</h3>
                <p className="text-emerald text-sm mb-3">10+ Years Automotive Experience</p>
                <p className="text-gray-600 text-sm">
                  Former automotive sales manager turned consumer advocate. Specializes in 
                  contract negotiation and dealer relationship management.
                </p>
              </CardContent>
            </Card>

            {/* Senior Advisor Card */}
            <Card className="text-center">
              <CardContent className="p-6">
                <div className="w-24 h-24 bg-gradient-to-br from-navy to-navy/80 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <span className="text-white text-2xl font-bold">SA</span>
                </div>
                <h3 className="font-semibold text-navy mb-2">Senior Automotive Advisor</h3>
                <p className="text-emerald text-sm mb-3">8+ Years Industry Experience</p>
                <p className="text-gray-600 text-sm">
                  Certified automotive technician and former finance manager. Expert in 
                  vehicle inspections and financing analysis.
                </p>
              </CardContent>
            </Card>

            {/* Consumer Advocate Card */}
            <Card className="text-center">
              <CardContent className="p-6">
                <div className="w-24 h-24 bg-gradient-to-br from-emerald to-emerald/80 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <span className="text-white text-2xl font-bold">CA</span>
                </div>
                <h3 className="font-semibold text-navy mb-2">Consumer Rights Advocate</h3>
                <p className="text-emerald text-sm mb-3">Legal & Consumer Protection</p>
                <p className="text-gray-600 text-sm">
                  Former consumer protection attorney specializing in automotive law and 
                  unfair business practices.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-light-gray">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-navy mb-4">Why Choose Us</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We're not just another consulting service - we're your dedicated advocates in the car buying process.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-emerald/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="h-8 w-8 text-emerald" />
              </div>
              <h3 className="font-semibold text-navy mb-3">Proven Track Record</h3>
              <p className="text-gray-600 text-sm">
                Over 500 successful consultations with an average savings of $4,800 per client.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-emerald/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-emerald" />
              </div>
              <h3 className="font-semibold text-navy mb-3">Personal Approach</h3>
              <p className="text-gray-600 text-sm">
                Every client gets individualized attention and a customized strategy for their situation.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-emerald/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="h-8 w-8 text-emerald" />
              </div>
              <h3 className="font-semibold text-navy mb-3">Satisfaction Guarantee</h3>
              <p className="text-gray-600 text-sm">
                We stand behind our work with a 100% satisfaction guarantee on all services.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}