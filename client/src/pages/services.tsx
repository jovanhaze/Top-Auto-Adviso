import Header from "@/components/header";
import Footer from "@/components/footer";
import { CheckCircle, Shield, FileText, Phone, Clock, DollarSign, Users, Star, Zap, Target, ArrowRight, CheckSquare, AlertTriangle, MessageSquare } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export default function Services() {
  const services = [
    {
      title: "Personal Consulting Session",
      description: "60-minute one-on-one consultation with auto finance expert",
      icon: <MessageSquare className="h-10 w-10 text-white" />,
      features: [
        "60-minute Zoom consultation",
        "Auto finance industry expertise",
        "Dealer negotiation strategies", 
        "Lawyer referrals when needed",
        "Ongoing email support for 30 days"
      ],
      price: "$49.99",
      originalPrice: "$99.99",
      duration: "60 minutes",
      badge: "MOST POPULAR",
      savings: "Save $3,000+ on average",
      gradient: "from-emerald-500 to-emerald-600",
      popular: true
    },
    {
      title: "Contract Review Service",
      description: "Professional contract analysis with detailed red flag detection",
      icon: <FileText className="h-10 w-10 text-white" />,
      features: [
        "Digital contract review within 24 hours",
        "Key points identification",
        "Important questions to ask dealer",
        "Red flag detection & warnings",
        "Clear guidance document with action steps"
      ],
      price: "$25.00",
      duration: "24-hour turnaround",
      badge: "QUICK TURNAROUND",
      savings: "Prevent costly mistakes",
      gradient: "from-blue-500 to-blue-600",
      popular: false
    }
  ];

  const benefits = [
    {
      title: "Industry Expertise",
      description: "5+ years experience in auto finance and collections",
      icon: <Shield className="h-8 w-8 text-emerald-600" />,
      highlight: "Real insider knowledge"
    },
    {
      title: "Nationwide Service", 
      description: "Fully remote team available across all 50 states",
      icon: <Target className="h-8 w-8 text-blue-600" />,
      highlight: "Available everywhere"
    },
    {
      title: "Expert Network",
      description: "Access to qualified lemon law attorneys when needed",
      icon: <Users className="h-8 w-8 text-purple-600" />,
      highlight: "Professional connections"
    },
    {
      title: "Quick Response",
      description: "Same-day consultations and 24-hour contract reviews",
      icon: <Zap className="h-8 w-8 text-orange-600" />,
      highlight: "Fast service"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Enhanced Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-blue-600 via-blue-700 to-emerald-600 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center">
            <div className="flex justify-center mb-6">
              <div className="bg-yellow-400 text-navy px-6 py-2 rounded-full font-bold text-sm">
                ⚡ STARTUP LAUNCH PRICING
              </div>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Professional Car Buying <span className="text-yellow-300">Protection</span>
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 max-w-4xl mx-auto mb-8">
              Expert services designed to save you <strong className="text-yellow-300">thousands</strong> and protect you from dealer manipulation tactics
            </p>
            <div className="flex flex-wrap justify-center gap-6 text-sm">
              <div className="flex items-center gap-2">
                <Shield className="h-5 w-5 text-emerald-300" />
                <span>Industry Expert Protection</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="h-5 w-5 text-emerald-300" />
                <span>Same-Day Availability</span>
              </div>
              <div className="flex items-center gap-2">
                <Star className="h-5 w-5 text-emerald-300" />
                <span>Nationwide Service</span>
              </div>
            </div>
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

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {services.map((service, index) => (
              <Card key={index} className={`relative h-full transition-all duration-300 hover:scale-105 hover:shadow-2xl ${
                service.popular ? 'ring-2 ring-emerald-400 shadow-xl' : 'shadow-lg'
              }`}>
                {service.badge && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-10">
                    <span className={`px-4 py-2 rounded-full font-bold text-sm ${
                      service.popular 
                        ? 'bg-emerald-400 text-white' 
                        : 'bg-blue-400 text-white'
                    }`}>
                      {service.badge}
                    </span>
                  </div>
                )}
                <CardHeader className="text-center pb-4">
                  <div className={`mx-auto mb-4 p-4 bg-gradient-to-r ${service.gradient} rounded-xl w-fit shadow-lg`}>
                    {service.icon}
                  </div>
                  <CardTitle className="text-2xl text-navy mb-2">{service.title}</CardTitle>
                  <CardDescription className="text-gray-600 text-lg">
                    {service.description}
                  </CardDescription>
                  <div className="mt-3 text-emerald-600 font-semibold">
                    {service.savings}
                  </div>
                </CardHeader>
                <CardContent className="pt-0">
                  <div className="text-center mb-6">
                    <div className="text-4xl font-bold text-emerald mb-2">{service.price}</div>
                    {service.originalPrice && (
                      <div className="text-gray-400 line-through text-xl mb-2">
                        Regular {service.originalPrice}
                      </div>
                    )}
                    <div className="text-sm text-gray-500 flex items-center justify-center gap-1">
                      <Clock className="h-4 w-4" />
                      {service.duration}
                    </div>
                  </div>
                  
                  <ul className="space-y-4 mb-8">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start gap-3">
                        <CheckSquare className="h-5 w-5 text-emerald-500 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700 text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <Button className={`w-full text-white font-bold py-3 text-lg transition-all duration-300 ${
                    service.popular 
                      ? 'bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-600 hover:to-emerald-700 shadow-lg hover:shadow-xl' 
                      : 'bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700'
                  }`}>
                    <ArrowRight className="w-5 h-5 mr-2" />
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

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-all duration-300 group">
                <CardContent className="p-6">
                  <div className="mx-auto mb-4 p-4 bg-white rounded-xl shadow-md group-hover:shadow-lg transition-all w-fit">
                    {benefit.icon}
                  </div>
                  <div className="text-xs text-emerald-600 font-semibold mb-2 uppercase tracking-wide">
                    {benefit.highlight}
                  </div>
                  <h3 className="font-bold text-navy mb-3 text-lg">{benefit.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{benefit.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="text-center mt-16">
            <div className="bg-gradient-to-r from-emerald-500 to-blue-600 rounded-2xl p-8 max-w-4xl mx-auto text-white shadow-2xl">
              <div className="flex justify-center mb-4">
                <AlertTriangle className="h-8 w-8 text-yellow-300" />
              </div>
              <h3 className="text-3xl font-bold mb-4">Don't Buy Without Protection</h3>
              <p className="text-emerald-100 mb-8 text-lg max-w-2xl mx-auto">
                Every day, first-time buyers lose thousands to dealer scams. Get expert protection now.
              </p>
              <div className="grid md:grid-cols-3 gap-6 mb-8">
                <div className="text-center bg-white/10 rounded-xl p-4 backdrop-blur">
                  <Phone className="h-6 w-6 mx-auto mb-2 text-yellow-300" />
                  <p className="font-bold text-lg">(937) 793-2179</p>
                  <p className="text-emerald-100 text-sm">Call for same-day help</p>
                </div>
                <div className="text-center bg-white/10 rounded-xl p-4 backdrop-blur">
                  <MessageSquare className="h-6 w-6 mx-auto mb-2 text-yellow-300" />
                  <p className="font-bold text-lg">info@topautoadvisors.com</p>
                  <p className="text-emerald-100 text-sm">Email us anytime</p>
                </div>
                <div className="text-center bg-white/10 rounded-xl p-4 backdrop-blur">
                  <Clock className="h-6 w-6 mx-auto mb-2 text-yellow-300" />
                  <p className="font-bold text-lg">Same Day</p>
                  <p className="text-emerald-100 text-sm">Available nationwide</p>
                </div>
              </div>
              <Button className="bg-yellow-400 hover:bg-yellow-500 text-navy px-8 py-4 text-lg font-bold rounded-xl shadow-lg hover:shadow-xl transition-all">
                <Shield className="w-6 h-6 mr-2" />
                Get Protected Now - Starting $25
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

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                step: "1",
                title: "Book Consultation",
                description: "Schedule your service online or by phone",
                icon: <Phone className="w-6 h-6" />,
                time: "2 minutes",
                color: "bg-emerald-500"
              },
              {
                step: "2", 
                title: "Share Details",
                description: "Provide vehicle and dealer information",
                icon: <FileText className="w-6 h-6" />,
                time: "5 minutes",
                color: "bg-blue-500"
              },
              {
                step: "3",
                title: "Expert Analysis",
                description: "Our team conducts thorough evaluation",
                icon: <Shield className="w-6 h-6" />,
                time: "24 hours",
                color: "bg-purple-500"
              },
              {
                step: "4",
                title: "Get Protected",
                description: "Receive detailed report and ongoing support",
                icon: <CheckSquare className="w-6 h-6" />,
                time: "Ongoing",
                color: "bg-orange-500"
              }
            ].map((item, index) => (
              <div key={index} className="text-center group">
                <div className={`w-16 h-16 ${item.color} text-white rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform shadow-lg`}>
                  {item.icon}
                </div>
                <div className="text-xs text-gray-500 mb-1 font-semibold">STEP {item.step}</div>
                <h3 className="font-bold text-navy mb-2 text-lg">{item.title}</h3>
                <p className="text-gray-600 text-sm mb-2">{item.description}</p>
                <div className="text-xs text-emerald-600 font-semibold">
                  ⏱️ {item.time}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}