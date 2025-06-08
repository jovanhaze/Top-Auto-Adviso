import Header from "@/components/header";
import Footer from "@/components/footer";
import { CheckCircle, Shield, FileText, Phone, Clock, DollarSign } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export default function Services() {
  const services = [
    {
      title: "Personal Consulting Session",
      description: "60-minute personalized consultation with auto finance expert",
      icon: <Phone className="h-8 w-8 text-emerald" />,
      features: [
        "60-minute Zoom consultation",
        "Auto finance industry expertise",
        "Dealer negotiation strategies", 
        "Lawyer referrals when needed",
        "Ongoing email support"
      ],
      price: "$49.99",
      originalPrice: "$99.99",
      duration: "60 minutes",
      badge: "50% OFF LAUNCH"
    },
    {
      title: "Contract Review Service",
      description: "Digital contract analysis with key insights and guidance",
      icon: <FileText className="h-8 w-8 text-emerald" />,
      features: [
        "Digital contract review",
        "Key points identification",
        "Important questions to ask dealer",
        "Red flag detection",
        "Clear guidance document"
      ],
      price: "$25.00",
      duration: "Digital format required",
      badge: null
    }
  ];

  const benefits = [
    {
      title: "Industry Expertise",
      description: "5+ years experience in auto finance and collections",
      icon: <Shield className="h-6 w-6 text-emerald" />
    },
    {
      title: "Nationwide Service",
      description: "Fully remote team available across the United States",
      icon: <CheckCircle className="h-6 w-6 text-emerald" />
    },
    {
      title: "Lawyer Referrals",
      description: "Access to qualified lemon law attorneys when needed",
      icon: <DollarSign className="h-6 w-6 text-emerald" />
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-b from-light-gray to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-navy mb-6">
              Our Services
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive car buying protection services designed to save you thousands 
              and protect you from dealer manipulation tactics.
            </p>
          </div>
        </div>
      </section>

      {/* Main Services */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-navy mb-4">Core Services</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Choose the level of protection that fits your needs. All services include 
              our satisfaction guarantee and expert support.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {services.map((service, index) => (
              <Card key={index} className="relative h-full">
                {service.badge && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-10">
                    <span className="bg-yellow-400 text-navy px-4 py-2 rounded-full font-bold text-sm">
                      {service.badge}
                    </span>
                  </div>
                )}
                <CardHeader className="text-center pb-4">
                  <div className="mx-auto mb-4 p-3 bg-emerald/10 rounded-full w-fit">
                    {service.icon}
                  </div>
                  <CardTitle className="text-xl text-navy">{service.title}</CardTitle>
                  <CardDescription className="text-gray-600">
                    {service.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="pt-0">
                  <div className="text-center mb-6">
                    <div className="text-3xl font-bold text-emerald mb-2">{service.price}</div>
                    {service.originalPrice && (
                      <div className="text-gray-400 line-through text-lg mb-2">
                        Regular {service.originalPrice}
                      </div>
                    )}
                    <div className="text-sm text-gray-500 flex items-center justify-center gap-1">
                      <Clock className="h-4 w-4" />
                      {service.duration}
                    </div>
                  </div>
                  
                  <ul className="space-y-3 mb-8">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start gap-3">
                        <CheckCircle className="h-5 w-5 text-emerald mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <Button className="w-full bg-emerald hover:bg-emerald/90 text-white">
                    Book This Service
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-light-gray">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-navy mb-4">Why Choose Top Auto Advisors</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Founded by Jovan Acosta, bringing real-world auto finance experience 
              to protect first-time car buyers nationwide.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <Card key={index} className="text-center">
                <CardContent className="p-6">
                  <div className="mx-auto mb-4 p-3 bg-emerald/10 rounded-full w-fit">
                    {benefit.icon}
                  </div>
                  <h3 className="font-semibold text-navy mb-3">{benefit.title}</h3>
                  <p className="text-gray-600 text-sm">{benefit.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <div className="bg-white rounded-xl p-8 max-w-2xl mx-auto">
              <h3 className="text-2xl font-bold text-navy mb-4">Ready to Get Protected?</h3>
              <p className="text-gray-600 mb-6">
                Contact us directly or book your consultation online. As a fully remote team, 
                we're available to help you nationwide.
              </p>
              <div className="grid md:grid-cols-2 gap-4 mb-6">
                <div className="text-center">
                  <p className="text-emerald font-bold text-lg">(937) 793-2179</p>
                  <p className="text-gray-600 text-sm">Call us directly</p>
                </div>
                <div className="text-center">
                  <p className="text-emerald font-bold text-lg">info@topautoadvisors.com</p>
                  <p className="text-gray-600 text-sm">Email us anytime</p>
                </div>
              </div>
              <Button className="bg-emerald hover:bg-emerald/90 text-white px-8 py-3">
                Book Your Service Now
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Process Overview */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-navy mb-4">How It Works</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Our streamlined process ensures you get expert protection every step of the way.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              {
                step: "1",
                title: "Book Consultation",
                description: "Schedule your service online or by phone"
              },
              {
                step: "2", 
                title: "Share Details",
                description: "Provide vehicle and dealer information"
              },
              {
                step: "3",
                title: "Expert Analysis",
                description: "Our team conducts thorough evaluation"
              },
              {
                step: "4",
                title: "Get Protected",
                description: "Receive detailed report and ongoing support"
              }
            ].map((item, index) => (
              <div key={index} className="text-center">
                <div className="w-12 h-12 bg-emerald text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                  {item.step}
                </div>
                <h3 className="font-semibold text-navy mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}