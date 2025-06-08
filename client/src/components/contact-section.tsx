import { useState } from "react";
import { AlertTriangle, Gavel, Shield, Handshake } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { apiRequest } from "@/lib/queryClient";

export default function ContactSection() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email || !message) {
      toast({
        title: "Error",
        description: "Please fill in all fields.",
        variant: "destructive",
      });
      return;
    }

    setIsLoading(true);
    try {
      await apiRequest("POST", "/api/contact", { name, email, message });
      
      toast({
        title: "Message Sent!",
        description: "Thank you for your message. We'll get back to you within 24 hours.",
      });
      
      setName("");
      setEmail("");
      setMessage("");
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to send message. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-bold text-navy mb-6">Contact Top Auto Advisors</h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <Input
                  type="text"
                  placeholder="Your Name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald focus:border-emerald"
                />
              </div>
              <div>
                <Input
                  type="email"
                  placeholder="Your Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald focus:border-emerald"
                />
              </div>
              <div>
                <Textarea
                  rows={4}
                  placeholder="Your Message"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald focus:border-emerald"
                />
              </div>
              <Button
                type="submit"
                disabled={isLoading}
                className="w-full bg-emerald text-white font-semibold py-3 rounded-lg hover:bg-emerald-600 transition-colors"
              >
                {isLoading ? "Sending..." : "Send Message"}
              </Button>
            </form>
          </div>
          
          <div>
            <h3 className="text-2xl font-bold text-navy mb-6">Important Legal Disclaimer</h3>
            <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6 mb-6">
              <div className="flex items-start space-x-3">
                <AlertTriangle className="text-yellow-600 w-6 h-6 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-bold text-yellow-800 mb-2">Legal Notice</h4>
                  <p className="text-yellow-700 text-sm leading-relaxed">
                    <strong>We are not lawyers and do not provide legal advice.</strong> Our service consists of consultation, 
                    contract review from an auto finance perspective, and general guidance based on industry experience. 
                    If you need legal representation or advice, we can refer you to qualified lemon law attorneys in your area.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="space-y-6">
              <div>
                <h4 className="font-semibold text-navy mb-3">Contact Information</h4>
                <div className="space-y-2">
                  <div className="flex items-center space-x-3">
                    <span className="text-emerald font-semibold">Phone:</span>
                    <span className="text-gray-700">(937) 793-2179</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <span className="text-emerald font-semibold">Email:</span>
                    <span className="text-gray-700">info@topautoadvisors.com</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <span className="text-emerald font-semibold">Service:</span>
                    <span className="text-gray-700">Nationwide (Remote Team)</span>
                  </div>
                </div>
              </div>
              
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <Gavel className="text-emerald w-5 h-5" />
                  <span className="text-gray-700">Lemon law attorney referrals available</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Shield className="text-emerald w-5 h-5" />
                  <span className="text-gray-700">5+ years auto finance experience</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Handshake className="text-emerald w-5 h-5" />
                  <span className="text-gray-700">Fully remote nomadic team</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
