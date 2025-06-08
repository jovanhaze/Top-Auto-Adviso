import { CalendarCheck, File, HelpCircle, Gavel } from "lucide-react";

export default function ProcessSteps() {
  const steps = [
    {
      icon: CalendarCheck,
      title: "1. Book Your Session",
      description: "Schedule a 60-minute Zoom consultation at your convenience. Same-day appointments available.",
      bgColor: "bg-emerald"
    },
    {
      icon: File,
      title: "2. Contract Review",
      description: "Send us your contracts and paperwork. We'll identify hidden fees, predatory terms, and red flags.",
      bgColor: "bg-navy"
    },
    {
      icon: HelpCircle,
      title: "3. Dealer Questions",
      description: "Get the exact questions to ask dealers to protect yourself and ensure you're getting a fair deal.",
      bgColor: "bg-emerald"
    },
    {
      icon: Gavel,
      title: "4. Legal Referrals",
      description: "If needed, we'll connect you with qualified lemon law attorneys in your area.",
      bgColor: "bg-navy"
    }
  ];

  return (
    <section id="how-it-works" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-navy mb-4">Your Dealer-Proof Protection Process</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            From contract review to lemon law referrals, we've got your back every step of the way
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div key={index} className="text-center group">
                <div className={`w-20 h-20 ${step.bgColor} rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform`}>
                  <Icon className="text-white w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold text-navy mb-4">{step.title}</h3>
                <p className="text-gray-600">
                  {step.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
