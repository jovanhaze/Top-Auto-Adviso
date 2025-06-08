import Header from "@/components/header";
import Footer from "@/components/footer";
import { CheckCircle, Shield, FileText, Phone, Clock, DollarSign } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export default function Services() {
  const services = [
    {
      title: "Pre-Purchase Vehicle Inspection",
      description: "Complete 200-point inspection analysis before you buy",
      icon: <Shield className="h-8 w-8 text-emerald" />,
      features: [
        "Engine and transmission evaluation",
        "Safety systems check",
        "Hidden damage detection",
        "Market value assessment",
        "Maintenance history review"
      ],
      price: "$149",
      duration: "2-3 hours"
    },
    {
      title: "Dealer Document Review",
      description: "Expert analysis of all paperwork and contracts",
      icon: <FileText className="h-8 w-8 text-emerald" />,
      features: [
        "Contract terms analysis",
        "Hidden fee identification",
        "Interest rate verification",
        "Warranty review",
        "Trade-in value assessment"
      ],
      price: "$99",
      duration: "1-2 hours"
    },
    {
      title: "Live Dealer Negotiation Support",
      description: "Real-time guidance during your dealership visit",
      icon: <Phone className="h-8 w-8 text-emerald" />,
      features: [
        "Phone support during negotiation",
        "Price strategy coaching",
        "Red flag alerts",
        "Counter-offer guidance",
        "Walk-away recommendations"
      ],
      price: "$199",
      duration: "Up to 4 hours"
    }
  ];

  const addOns = [
    {
      title: "Extended Warranty Analysis",
      description: "Detailed review of extended warranty options",
      price: "$49"
    },
    {
      title: "Financing Options Comparison",
      description: "Compare dealer financing vs. external options",
      price: "$79"
    },
    {
      title: "Insurance Guidance",
      description: "Recommendations for optimal coverage",
      price: "$39"
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

          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="relative h-full">
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

      {/* Add-On Services */}
      <section className="py-20 bg-light-gray">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-navy mb-4">Add-On Services</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Enhance your protection with these specialized services that can be added 
              to any core service package.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {addOns.map((addon, index) => (
              <Card key={index}>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="font-semibold text-navy">{addon.title}</h3>
                    <span className="text-emerald font-bold">{addon.price}</span>
                  </div>
                  <p className="text-gray-600 text-sm mb-4">{addon.description}</p>
                  <Button variant="outline" size="sm" className="w-full">
                    Add to Service
                  </Button>
                </CardContent>
              </Card>
            ))}
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