import { useEffect } from "react";
import Header from "@/components/header";
import HeroSection from "@/components/hero-section";
import ProcessSteps from "@/components/process-steps";
import Testimonials from "@/components/testimonials";
import LeadMagnet from "@/components/lead-magnet";
import PricingSection from "@/components/pricing-section";
import FileUpload from "@/components/file-upload";
import ContactSection from "@/components/contact-section";
import Footer from "@/components/footer";

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
      <section className="py-12 bg-light-gray border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <p className="text-gray-600 font-medium">Trusted by first-time car buyers across the country</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center justify-items-center">
            <div className="text-center">
              <div className="text-3xl font-bold text-navy">500+</div>
              <div className="text-gray-600">Buyers Protected</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-emerald">$2.4M</div>
              <div className="text-gray-600">Savings Generated</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-navy">98%</div>
              <div className="text-gray-600">Satisfaction Rate</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-emerald">24hr</div>
              <div className="text-gray-600">Response Time</div>
            </div>
          </div>
        </div>
      </section>

      <ProcessSteps />
      <Testimonials />
      <LeadMagnet />
      <PricingSection />
      <FileUpload />
      <ContactSection />
      <Footer />
    </div>
  );
}
