import { Shield, Check, Clock, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";

export default function PricingSection() {
  const consultingFeatures = [
    "60-minute personalized consultation",
    "Auto finance industry expertise",
    "Dealer negotiation strategies",
    "Lawyer referrals when needed",
    "Ongoing email support"
  ];

  const reviewFeatures = [
    "Digital contract review",
    "Key points identification",
    "Important questions to ask dealer",
    "Red flag detection",
    "Clear guidance document"
  ];

  return (
    <section id="pricing" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-navy mb-4">Our Services & Pricing</h2>
          <p className="text-xl text-gray-600">
            Professional auto buying protection from an industry expert with 5+ years experience.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {/* Consulting Service */}
          <div className="bg-emerald rounded-2xl p-8 text-white relative transform hover:scale-105 transition-all shadow-xl">
            <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
              <span className="bg-yellow-400 text-navy px-4 py-2 rounded-full font-bold text-sm">50% OFF LAUNCH</span>
            </div>
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold mb-2">Personal Consulting</h3>
              <div className="text-5xl font-bold mb-2">$49.99</div>
              <div className="text-emerald-200 line-through text-xl">Regular $99.99</div>
              <p className="text-emerald-100 mt-4">Launch special - 50% off for early clients</p>
            </div>
            
            <ul className="space-y-3 mb-8">
              {consultingFeatures.map((feature, index) => (
                <li key={index} className="flex items-center">
                  <Check className="w-5 h-5 mr-3" />
                  {feature}
                </li>
              ))}
            </ul>
            
            <Link
              href="/booking"
              className="block w-full bg-white text-emerald font-bold py-4 rounded-xl text-center text-lg hover:bg-gray-100 transition-colors"
            >
              <Shield className="inline w-5 h-5 mr-2" />
              Get Protected Now
            </Link>
          </div>
          
          {/* Document Review */}
          <div className="bg-white border-2 border-gray-200 rounded-2xl p-8 hover:border-emerald transition-all">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-navy mb-2">Contract Review</h3>
              <div className="text-5xl font-bold text-navy mb-2">$25.00</div>
              <p className="text-gray-600 mt-4">Digital contract analysis & guidance</p>
            </div>
            
            <ul className="space-y-3 mb-8 text-gray-700">
              {reviewFeatures.map((feature, index) => (
                <li key={index} className="flex items-center">
                  <Check className="w-5 h-5 mr-3 text-emerald" />
                  {feature}
                </li>
              ))}
            </ul>
            
            <Link
              href="/booking"
              className="block w-full bg-emerald text-white py-4 rounded-xl text-lg font-semibold hover:bg-emerald/90 transition-colors text-center"
            >
              <Shield className="inline w-5 h-5 mr-2" />
              Book Contract Review
            </Link>
          </div>
        </div>
        
        {/* Contact Information */}
        <div className="bg-light-gray rounded-2xl p-8 text-center">
          <h3 className="text-2xl font-bold text-navy mb-6">Ready to Get Protected?</h3>
          <p className="text-gray-600 mb-6">
            As a fully remote team, we're available nationwide to help you make smart car buying decisions.
          </p>
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <div className="bg-white rounded-lg p-6">
              <h4 className="font-semibold text-navy mb-2">Call Us Directly</h4>
              <p className="text-emerald text-xl font-bold">(937) 793-2179</p>
            </div>
            <div className="bg-white rounded-lg p-6">
              <h4 className="font-semibold text-navy mb-2">Email Us</h4>
              <p className="text-emerald text-lg font-semibold">info@topautoadvisors.com</p>
            </div>
          </div>
          <Link
            href="/booking"
            className="bg-emerald text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-emerald/90 transition-colors inline-block"
          >
            <Calendar className="inline w-5 h-5 mr-2" />
            Book Your Service Now
          </Link>
        </div>
      </div>
    </section>
  );
}
