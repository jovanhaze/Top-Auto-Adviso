import { ChevronDown, HelpCircle, Camera, Clock, AlertTriangle, DollarSign } from "lucide-react";
import { useState } from "react";

export default function FAQSection() {
  const [openItems, setOpenItems] = useState<number[]>([]);

  const toggleItem = (index: number) => {
    setOpenItems(prev => 
      prev.includes(index) 
        ? prev.filter(item => item !== index)
        : [...prev, index]
    );
  };

  const faqs = [
    {
      icon: <HelpCircle className="w-5 h-5 text-emerald-600" />,
      question: "What exactly do you do?",
      answer: "We review your contract or offer before you sign anything, explain every fee, and help you avoid getting scammed. It's like having an ex-dealer on your side."
    },
    {
      icon: <Camera className="w-5 h-5 text-blue-600" />,
      question: "How do I send you my paperwork?",
      answer: "Just text us a photo or upload it through our secure form. We accept photos, PDFs, screenshots — whatever you've got."
    },
    {
      icon: <Clock className="w-5 h-5 text-purple-600" />,
      question: "How fast do I get help?",
      answer: "Most buyers get a same-day Zoom review — sometimes within the hour. We also offer emergency calls if you're stuck at the dealership."
    },
    {
      icon: <AlertTriangle className="w-5 h-5 text-orange-600" />,
      question: "Can you tell me if a car is a lemon?",
      answer: "Yes. We'll flag red flags like accident history, shady wording, or sketchy warranties. We're not mechanics — but we know scam signals from miles away."
    },
    {
      icon: <DollarSign className="w-5 h-5 text-emerald-600" />,
      question: "Why is there a fee?",
      answer: "Because this advice can save you $2,000 to $10,000. $49.99 is cheaper than any mistake you could make without it."
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-navy mb-4">Frequently Asked Questions</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Get quick answers to common questions about our car buying protection services
          </p>
        </div>
        
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div 
              key={index} 
              className="border border-gray-200 rounded-xl overflow-hidden hover:shadow-md transition-all duration-300"
            >
              <button
                onClick={() => toggleItem(index)}
                className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
              >
                <div className="flex items-center gap-3">
                  <div className="flex-shrink-0">
                    {faq.icon}
                  </div>
                  <h3 className="font-bold text-navy text-lg">{faq.question}</h3>
                </div>
                <ChevronDown 
                  className={`w-5 h-5 text-gray-400 transition-transform duration-300 ${
                    openItems.includes(index) ? 'transform rotate-180' : ''
                  }`}
                />
              </button>
              
              {openItems.includes(index) && (
                <div className="px-6 pb-4">
                  <div className="ml-8 pt-2 border-t border-gray-100">
                    <p className="text-gray-700 leading-relaxed">{faq.answer}</p>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <p className="text-gray-600 mb-6">Still have questions? We're here to help.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="tel:(937) 793-2179" 
              className="bg-emerald-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-emerald-700 transition-colors"
            >
              Call (937) 793-2179
            </a>
            <a 
              href="mailto:info@topautoadvisors.com" 
              className="border border-emerald-600 text-emerald-600 px-6 py-3 rounded-lg font-semibold hover:bg-emerald-50 transition-colors"
            >
              Email Us
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}