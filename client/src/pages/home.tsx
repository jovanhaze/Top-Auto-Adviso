import { useEffect } from "react";
import Header from "@/components/header";
import HeroSection from "@/components/hero-section";
import ProcessSteps from "@/components/process-steps";
import Testimonials from "@/components/testimonials";
import LeadMagnet from "@/components/lead-magnet";
import PricingSection from "@/components/pricing-section";
import ContactSection from "@/components/contact-section";
import Footer from "@/components/footer";
import { Link } from "wouter";
import { Shield, Users, Award, Clock } from "lucide-react";

export default function Home() {
  useEffect(() => {
    // Smooth scrolling for anchor links
    const handleAnchorClick = (e: Event) => {
      const target = e.target as HTMLAnchorElement;
      if (target.getAttribute('href')?.startsWith('#')) {
        e.preventDefault();
        const element = document.querySelector(target.getAttribute('href') || '');
        if (element) {
          element.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          });
        }
      }
    };

    document.addEventListener('click', handleAnchorClick);
    return () => document.removeEventListener('click', handleAnchorClick);
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <HeroSection />
      
      {/* Trust Indicators */}
      <section className="py-16 bg-light-gray border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-2xl font-bold text-navy mb-4">Trusted by Car Buyers Nationwide</h2>
            <p className="text-gray-600">Join hundreds of satisfied clients who've saved thousands with our protection services</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center justify-items-center">
            <div className="text-center">
              <div className="w-16 h-16 bg-emerald/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-emerald" />
              </div>
              <div className="text-3xl font-bold text-navy">500+</div>
              <div className="text-gray-600">Buyers Protected</div>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-emerald/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="h-8 w-8 text-emerald" />
              </div>
              <div className="text-3xl font-bold text-emerald">$2.4M</div>
              <div className="text-gray-600">Total Savings</div>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-emerald/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="h-8 w-8 text-emerald" />
              </div>
              <div className="text-3xl font-bold text-navy">98%</div>
              <div className="text-gray-600">Satisfaction Rate</div>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-emerald/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="h-8 w-8 text-emerald" />
              </div>
              <div className="text-3xl font-bold text-emerald">24hr</div>
              <div className="text-gray-600">Response Time</div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-navy mb-4">Our Protection Services</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Comprehensive car buying protection to save you thousands and protect you from dealer manipulation.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="text-center p-6 bg-light-gray rounded-lg">
              <div className="w-12 h-12 bg-emerald/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="h-6 w-6 text-emerald" />
              </div>
              <h3 className="font-semibold text-navy mb-2">Pre-Purchase Inspection</h3>
              <p className="text-gray-600 text-sm mb-4">Complete 200-point vehicle analysis before you buy</p>
              <div className="text-2xl font-bold text-emerald">$149</div>
            </div>
            <div className="text-center p-6 bg-light-gray rounded-lg">
              <div className="w-12 h-12 bg-emerald/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="h-6 w-6 text-emerald" />
              </div>
              <h3 className="font-semibold text-navy mb-2">Document Review</h3>
              <p className="text-gray-600 text-sm mb-4">Expert analysis of contracts and paperwork</p>
              <div className="text-2xl font-bold text-emerald">$99</div>
            </div>
            <div className="text-center p-6 bg-light-gray rounded-lg">
              <div className="w-12 h-12 bg-emerald/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="h-6 w-6 text-emerald" />
              </div>
              <h3 className="font-semibold text-navy mb-2">Live Support</h3>
              <p className="text-gray-600 text-sm mb-4">Real-time guidance during dealer visits</p>
              <div className="text-2xl font-bold text-emerald">$199</div>
            </div>
          </div>
          <div className="text-center">
            <Link 
              href="/services" 
              className="bg-emerald text-white px-8 py-3 rounded-lg font-semibold hover:bg-emerald/90 transition-colors inline-block"
            >
              View All Services
            </Link>
          </div>
        </div>
      </section>

      <ProcessSteps />
      <Testimonials />
      <LeadMagnet />
      <PricingSection />
      <ContactSection />
      <Footer />
    </div>
  );
}
