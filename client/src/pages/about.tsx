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
    { number: "5+", label: "Years Auto Finance Experience" },
    { number: "Nationwide", label: "Remote Service Coverage" },
    { number: "Expert", label: "Industry Insider Knowledge" },
    { number: "New", label: "Business Launch" }
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
              We're on a mission to protect first-time car buyers from dealer scams, hidden fees, 
              and predatory practices. Every day without protection, buyers lose thousands to dealership manipulation.
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
                  Top Auto Advisors was founded by Jovan Acosta after witnessing countless first-time car buyers 
                  fall victim to predatory dealer practices. With 5+ years in auto finance and collections, 
                  he saw families overpaying by thousands, getting trapped in unfavorable financing, and walking away feeling defeated.
                </p>
                <p>
                  What started as helping friends and family evolved into a mission: to protect every first-time buyer 
                  from the manipulation tactics that cost people their savings. We believe that with insider knowledge 
                  and professional guidance, anyone can avoid these costly traps.
                </p>
                <p>
                  <strong>The reality is harsh:</strong> Without protection, first-time buyers lose an average of $3,000-$5,000 
                  to hidden fees, inflated prices, and predatory financing. Some lose their entire down payment to lemon cars 
                  or get stuck with payments they can't afford.
                </p>
                <p>
                  We're here to change that. Every consultation, every contract review, every piece of advice is designed 
                  to save you thousands and give you the confidence to drive away with a fair deal.
                </p>
              </div>
            </div>
            <div className="bg-gradient-to-br from-red-50 to-orange-50 p-8 rounded-lg border border-red-200">
              <h3 className="text-2xl font-bold text-red-700 mb-6">⚠️ The Cost of Going Unprotected</h3>
              <div className="space-y-4 text-gray-700">
                <p className="font-semibold text-red-600">Every 8 minutes, a first-time buyer gets scammed.</p>
                <ul className="space-y-2 text-sm">
                  <li>• Hidden fees: $1,500-$3,000 extra</li>
                  <li>• Inflated prices: $2,000-$5,000 above market value</li>
                  <li>• Predatory financing: Years of unnecessary payments</li>
                  <li>• Lemon cars: Thousands in repair costs</li>
                  <li>• Dealer add-ons: $500-$2,000 in useless products</li>
                </ul>
                <p className="font-semibold text-red-700">
                  Our $49.99 consultation can save you $3,000-$10,000. The math is simple.
                </p>
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
                  <span className="text-white text-lg font-bold">JA</span>
                </div>
                <h3 className="font-semibold text-navy mb-2">Jovan Acosta</h3>
                <p className="text-emerald text-sm mb-3">Founder & Lead Advisor</p>
                <p className="text-gray-600 text-sm">
                  5+ years in auto finance, from customer service to collections. Specializes in 
                  helping first-time buyers avoid costly mistakes and dealer manipulation.
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
              <h3 className="font-semibold text-navy mb-3">Industry Expertise</h3>
              <p className="text-gray-600 text-sm">
                5+ years of real-world experience in auto finance and collections, 
                with deep knowledge of dealer tactics and consumer protection.
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