import { useState } from "react";
import { Download, Lock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";
import { apiRequest } from "@/lib/queryClient";

export default function LeadMagnet() {
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setIsLoading(true);
    try {
      const response = await apiRequest("POST", "/api/download-guide", { email });
      const data = await response.json();
      
      if (data.downloadUrl) {
        // Create download link
        const link = document.createElement('a');
        link.href = data.downloadUrl;
        link.download = '5-shady-car-dealer-tricks.pdf';
        link.click();
      }

      toast({
        title: "Success!",
        description: "Your free guide has been downloaded. Check your email for future tips!",
      });
      setEmail("");
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to download guide. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section className="py-20 bg-navy text-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="mb-8">
          <div className="w-24 h-24 bg-emerald rounded-full flex items-center justify-center mx-auto mb-6">
            <Download className="text-white w-12 h-12" />
          </div>
          <h2 className="text-4xl font-bold mb-4">Free Download: 5 Shady Car Dealer Tricks</h2>
          <p className="text-xl text-blue-100 mb-8">
            Get our insider report revealing the most common scams dealers use on first-time buyers
          </p>
        </div>
        
        <form onSubmit={handleSubmit} className="max-w-md mx-auto space-y-4">
          <Input
            type="email"
            placeholder="Enter your email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="w-full px-6 py-4 rounded-lg text-navy font-medium text-lg border-0 focus:ring-4 focus:ring-emerald/50"
          />
          <Button
            type="submit"
            disabled={isLoading}
            className="w-full bg-emerald hover:bg-emerald-600 text-white px-8 py-4 rounded-lg font-bold text-lg transition-all transform hover:scale-105"
          >
            <Download className="w-5 h-5 mr-2" />
            {isLoading ? "Preparing Download..." : "Download Free Protection Guide"}
          </Button>
        </form>
        
        <p className="text-sm text-blue-200 mt-4">
          <Lock className="inline w-4 h-4 mr-1" />
          We respect your privacy. No spam, just valuable car buying tips.
        </p>
      </div>
    </section>
  );
}
