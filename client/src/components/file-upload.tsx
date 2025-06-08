import { useState } from "react";
import { Upload, CloudUpload } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { apiRequest } from "@/lib/queryClient";

export default function FileUpload() {
  const [email, setEmail] = useState("");
  const [notes, setNotes] = useState("");
  const [files, setFiles] = useState<FileList | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFiles(e.target.files);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) {
      toast({
        title: "Error",
        description: "Please provide your email address.",
        variant: "destructive",
      });
      return;
    }

    setIsLoading(true);
    try {
      const formData = new FormData();
      formData.append('email', email);
      formData.append('notes', notes);
      
      if (files) {
        Array.from(files).forEach((file) => {
          formData.append('documents', file);
        });
      }

      const response = await fetch('/api/upload-documents', {
        method: 'POST',
        body: formData,
        credentials: 'include',
      });

      if (!response.ok) {
        throw new Error('Upload failed');
      }

      toast({
        title: "Success!",
        description: "Your documents have been submitted for review. We'll get back to you within 24 hours.",
      });
      
      setEmail("");
      setNotes("");
      setFiles(null);
      // Reset file input
      const fileInput = document.getElementById('contract-upload') as HTMLInputElement;
      if (fileInput) fileInput.value = '';
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to submit documents. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section className="py-20 bg-light-gray">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-2xl p-8 shadow-lg">
          <div className="text-center mb-8">
            <div className="w-16 h-16 bg-navy rounded-full flex items-center justify-center mx-auto mb-4">
              <Upload className="text-white w-8 h-8" />
            </div>
            <h3 className="text-2xl font-bold text-navy mb-4">Submit Your Contracts for Review</h3>
            <p className="text-gray-600">
              Upload your car purchase contracts, financing paperwork, or any documents you'd like us to review before your consultation.
            </p>
          </div>
          
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <Label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                Your Email
              </Label>
              <Input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="your.email@example.com"
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald focus:border-emerald"
              />
            </div>
            
            <div>
              <Label htmlFor="contract-upload" className="block text-sm font-semibold text-gray-700 mb-2">
                Upload Documents
              </Label>
              <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center hover:border-emerald transition-colors">
                <CloudUpload className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                <p className="text-gray-600 mb-2">Drag and drop your files here, or click to browse</p>
                <p className="text-sm text-gray-500 mb-4">Supports PDF, DOC, DOCX, JPG, PNG (Max 10MB per file)</p>
                <Input
                  id="contract-upload"
                  type="file"
                  multiple
                  accept=".pdf,.doc,.docx,.jpg,.jpeg,.png"
                  onChange={handleFileChange}
                  className="hidden"
                />
                <Label
                  htmlFor="contract-upload"
                  className="inline-block bg-emerald text-white px-6 py-2 rounded-lg font-semibold hover:bg-emerald-600 transition-colors cursor-pointer"
                >
                  Choose Files
                </Label>
                {files && files.length > 0 && (
                  <div className="mt-4 text-left">
                    <p className="text-sm font-semibold text-gray-700 mb-2">Selected files:</p>
                    {Array.from(files).map((file, index) => (
                      <p key={index} className="text-sm text-gray-600">• {file.name}</p>
                    ))}
                  </div>
                )}
              </div>
            </div>
            
            <div>
              <Label htmlFor="notes" className="block text-sm font-semibold text-gray-700 mb-2">
                Additional Notes (Optional)
              </Label>
              <Textarea
                id="notes"
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
                rows={4}
                placeholder="Any specific concerns or questions about your purchase?"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald focus:border-emerald"
              />
            </div>
            
            <Button
              type="submit"
              disabled={isLoading}
              className="w-full bg-navy text-white font-bold py-4 rounded-lg text-lg hover:bg-blue-800 transition-colors"
            >
              <Upload className="w-5 h-5 mr-2" />
              {isLoading ? "Submitting..." : "Submit for Review"}
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
}
