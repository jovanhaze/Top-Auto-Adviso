import { useEffect } from "react";
import Header from "@/components/header";
import HeroSection from "@/components/hero-section";
import ProcessSteps from "@/components/process-steps";
import Testimonials from "@/components/testimonials";
import LeadMagnet from "@/components/lead-magnet";
import PricingSection from "@/components/pricing-section";
import ContactSection from "@/components/contact-section";
import FAQSection from "@/components/faq-section";
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
      
      {/* Trust Builders */}
      <section className="py-16 bg-light-gray border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-2xl font-bold text-navy mb-4">Why Car Buyers Choose Us</h2>
            <p className="text-gray-600">Real protection from ex-auto finance professionals</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center justify-items-center">
            <div className="text-center">
              <div className="w-16 h-16 bg-emerald/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="h-8 w-8 text-emerald" />
              </div>
              <div className="text-2xl font-bold text-emerald">24-Hour</div>
              <div className="text-gray-600">Response Guarantee</div>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-emerald/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="h-8 w-8 text-emerald" />
              </div>
              <div className="text-2xl font-bold text-navy">100%</div>
              <div className="text-gray-600">Transparent Reviews</div>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-emerald/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-emerald" />
              </div>
              <div className="text-2xl font-bold text-emerald">Ex-Finance</div>
              <div className="text-gray-600">Pro Insider Advice</div>
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
          <div className="grid md:grid-cols-2 gap-8 mb-12 max-w-4xl mx-auto">
            <div className="text-center p-6 bg-light-gray rounded-lg relative">
              <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                <span className="bg-yellow-400 text-navy px-3 py-1 rounded-full font-bold text-xs">50% OFF LAUNCH</span>
              </div>
              <div className="w-12 h-12 bg-emerald/10 rounded-full flex items-center justify-center mx-auto mb-4 mt-2">
                <Shield className="h-6 w-6 text-emerald" />
              </div>
              <h3 className="font-semibold text-navy mb-2">Personal Consulting</h3>
              <p className="text-gray-600 text-sm mb-4">60-minute consultation with auto finance expert</p>
              <div className="space-y-1">
                <div className="text-2xl font-bold text-emerald">$49.99</div>
                <div className="text-gray-400 line-through text-sm">Regular $99.99</div>
              </div>
            </div>
            <div className="text-center p-6 bg-light-gray rounded-lg">
              <div className="w-12 h-12 bg-emerald/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="h-6 w-6 text-emerald" />
              </div>
              <h3 className="font-semibold text-navy mb-2">Contract Review</h3>
              <p className="text-gray-600 text-sm mb-4">Digital contract analysis with key guidance</p>
              <div className="text-2xl font-bold text-emerald">$25.00</div>
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
      
      {/* Blog Section Placeholder */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-navy mb-4">Car Buying Insights</h2>
          <div className="bg-white rounded-xl p-12 shadow-lg">
            <div className="w-16 h-16 bg-emerald/10 rounded-full flex items-center justify-center mx-auto mb-6">
              <Shield className="h-8 w-8 text-emerald" />
            </div>
            <h3 className="text-xl font-bold text-navy mb-4">Coming Soon</h3>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Real scam stories, car buying hacks, and negotiation tips from our team of ex-auto finance professionals. 
              Get insider knowledge to protect yourself in the dealer showroom.
            </p>
          </div>
        </div>
      </section>

      <FAQSection />
      <ContactSection />
      <Footer />
    </div>
  );
}
