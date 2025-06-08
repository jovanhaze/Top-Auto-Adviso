import { Shield, Check, Clock, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function PricingSection() {
  const features = [
    "60-minute Zoom consultation",
    "Complete contract review",
    "Dealer question checklist",
    "Lemon law referrals",
    "Email follow-up support"
  ];

  return (
    <section id="pricing" className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-navy mb-4">Choose Your Protection Level</h2>
          <p className="text-xl text-gray-600">
            Invest $50 to potentially save thousands. It's the smartest insurance policy for car buyers.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {/* Promo Pricing */}
          <div className="bg-emerald rounded-2xl p-8 text-white relative transform hover:scale-105 transition-all shadow-xl">
            <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
              <span className="bg-yellow-400 text-navy px-4 py-2 rounded-full font-bold text-sm">BEST VALUE</span>
            </div>
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold mb-2">Promo Protection</h3>
              <div className="text-5xl font-bold mb-2">$49.99</div>
              <div className="text-emerald-200 line-through text-xl">Regular $99</div>
              <p className="text-emerald-100 mt-4">Limited time offer for new clients</p>
            </div>
            
            <ul className="space-y-3 mb-8">
              {features.map((feature, index) => (
                <li key={index} className="flex items-center">
                  <Check className="w-5 h-5 mr-3" />
                  {feature}
                </li>
              ))}
            </ul>
            
            <a
              href="https://buy.stripe.com/test_dRmcN65lv48Z9UZfhp2cg00"
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full bg-white text-emerald font-bold py-4 rounded-xl text-center text-lg hover:bg-gray-100 transition-colors"
            >
              <Shield className="inline w-5 h-5 mr-2" />
              Get Protected Now
            </a>
          </div>
          
          {/* Regular Pricing */}
          <div className="bg-white border-2 border-gray-200 rounded-2xl p-8 hover:border-emerald transition-all">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-navy mb-2">Standard Protection</h3>
              <div className="text-5xl font-bold text-navy mb-2">$99.00</div>
              <p className="text-gray-600 mt-4">Full-price consultation service</p>
            </div>
            
            <ul className="space-y-3 mb-8 text-gray-700">
              {features.map((feature, index) => (
                <li key={index} className="flex items-center">
                  <Check className="w-5 h-5 text-emerald mr-3" />
                  {feature}
                </li>
              ))}
            </ul>
            
            <Button className="w-full bg-navy text-white font-bold py-4 rounded-xl text-lg hover:bg-blue-800 transition-colors">
              <Shield className="w-5 h-5 mr-2" />
              Choose Standard
            </Button>
          </div>
        </div>
        
        {/* Booking Calendar */}
        <div className="bg-light-gray rounded-2xl p-8">
          <h3 className="text-2xl font-bold text-navy text-center mb-6">Book Your Consultation</h3>
          <div className="text-center">
            <p className="text-gray-600 mb-6">
              After payment, schedule your consultation at a time that works for you. Same-day appointments available.
            </p>
            
            {/* Google Calendar Booking Placeholder */}
            <div className="bg-white rounded-xl p-8 border-2 border-dashed border-gray-300">
              <Calendar className="w-16 h-16 text-emerald mx-auto mb-4" />
              <h4 className="text-xl font-semibold text-navy mb-2">Schedule Your Session</h4>
              <p className="text-gray-600 mb-6">Google Calendar booking integration will appear here</p>
              <Button className="bg-emerald text-white px-8 py-3 rounded-lg font-semibold hover:bg-emerald-600 transition-colors">
                <Clock className="w-5 h-5 mr-2" />
                View Available Times
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
