import Header from "@/components/header";
import Footer from "@/components/footer";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Calendar, Clock, Phone, CheckCircle, CreditCard } from "lucide-react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useMutation } from "@tanstack/react-query";
import { apiRequest } from "@/lib/queryClient";
import { useToast } from "@/hooks/use-toast";

const bookingSchema = z.object({
  service: z.string().min(1, "Please select a service"),
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email"),
  phone: z.string().min(10, "Please enter a valid phone number"),
  preferredDate: z.string().min(1, "Please select a preferred date"),
  preferredTime: z.string().min(1, "Please select a preferred time"),
  vehicleInfo: z.string().optional(),
  dealerInfo: z.string().optional(),
  additionalNotes: z.string().optional()
});

type BookingForm = z.infer<typeof bookingSchema>;

export default function Booking() {
  const [step, setStep] = useState(1);
  const { toast } = useToast();
  
  const form = useForm<BookingForm>({
    resolver: zodResolver(bookingSchema),
    defaultValues: {
      service: "",
      name: "",
      email: "",
      phone: "",
      preferredDate: "",
      preferredTime: "",
      vehicleInfo: "",
      dealerInfo: "",
      additionalNotes: ""
    }
  });

  const bookingMutation = useMutation({
    mutationFn: async (data: BookingForm) => {
      const response = await fetch("/api/booking", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
      });
      if (!response.ok) throw new Error("Booking failed");
      return response.json();
    },
    onSuccess: () => {
      setStep(4);
      toast({
        title: "Booking Confirmed!",
        description: "We'll contact you within 24 hours to confirm your appointment."
      });
    },
    onError: () => {
      toast({
        title: "Booking Failed",
        description: "Please try again or contact us directly.",
        variant: "destructive"
      });
    }
  });

  const services = [
    {
      id: "inspection",
      name: "Pre-Purchase Vehicle Inspection",
      price: "$149",
      duration: "2-3 hours",
      description: "Complete 200-point inspection analysis"
    },
    {
      id: "document-review", 
      name: "Dealer Document Review",
      price: "$99",
      duration: "1-2 hours",
      description: "Expert analysis of contracts and paperwork"
    },
    {
      id: "negotiation-support",
      name: "Live Dealer Negotiation Support", 
      price: "$199",
      duration: "Up to 4 hours",
      description: "Real-time guidance during dealership visit"
    },
    {
      id: "full-package",
      name: "Complete Protection Package",
      price: "$349",
      duration: "Full day support",
      description: "All services combined for maximum protection"
    }
  ];

  const timeSlots = [
    "9:00 AM", "10:00 AM", "11:00 AM", "12:00 PM",
    "1:00 PM", "2:00 PM", "3:00 PM", "4:00 PM", "5:00 PM"
  ];

  const onSubmit = (data: BookingForm) => {
    bookingMutation.mutate(data);
  };

  const nextStep = () => {
    if (step < 3) setStep(step + 1);
  };

  const prevStep = () => {
    if (step > 1) setStep(step - 1);
  };

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-b from-light-gray to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-navy mb-6">
              Book Your Consultation
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Schedule your car buying protection service and get expert guidance 
              throughout your purchase process.
            </p>
          </div>
        </div>
      </section>

      {/* Booking Steps */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Progress Indicator */}
          <div className="flex justify-center mb-12">
            <div className="flex items-center space-x-4">
              {[1, 2, 3, 4].map((stepNum) => (
                <div key={stepNum} className="flex items-center">
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center text-sm font-medium ${
                    stepNum <= step 
                      ? 'bg-emerald text-white' 
                      : 'bg-gray-200 text-gray-600'
                  }`}>
                    {stepNum < step ? <CheckCircle className="h-5 w-5" /> : stepNum}
                  </div>
                  {stepNum < 4 && (
                    <div className={`w-16 h-1 mx-2 ${
                      stepNum < step ? 'bg-emerald' : 'bg-gray-200'
                    }`} />
                  )}
                </div>
              ))}
            </div>
          </div>

          <form onSubmit={form.handleSubmit(onSubmit)}>
            {/* Step 1: Service Selection */}
            {step === 1 && (
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-emerald" />
                    Choose Your Service
                  </CardTitle>
                  <CardDescription>
                    Select the protection service that best fits your needs
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid gap-4">
                    {services.map((service) => (
                      <label key={service.id} className="cursor-pointer">
                        <input
                          type="radio"
                          value={service.id}
                          {...form.register("service")}
                          className="sr-only"
                        />
                        <div className={`p-4 border-2 rounded-lg transition-all ${
                          form.watch("service") === service.id
                            ? 'border-emerald bg-emerald/5'
                            : 'border-gray-200 hover:border-gray-300'
                        }`}>
                          <div className="flex justify-between items-start">
                            <div className="flex-1">
                              <h3 className="font-semibold text-navy">{service.name}</h3>
                              <p className="text-gray-600 text-sm mt-1">{service.description}</p>
                              <div className="flex items-center gap-4 mt-2 text-sm text-gray-500">
                                <span className="flex items-center gap-1">
                                  <Clock className="h-4 w-4" />
                                  {service.duration}
                                </span>
                              </div>
                            </div>
                            <div className="text-right">
                              <div className="text-2xl font-bold text-emerald">{service.price}</div>
                            </div>
                          </div>
                        </div>
                      </label>
                    ))}
                  </div>
                  {form.formState.errors.service && (
                    <p className="text-red-500 text-sm">{form.formState.errors.service.message}</p>
                  )}
                  <div className="flex justify-end">
                    <Button 
                      type="button" 
                      onClick={nextStep}
                      disabled={!form.watch("service")}
                      className="bg-emerald hover:bg-emerald/90"
                    >
                      Continue
                    </Button>
                  </div>
                </CardContent>
              </Card>
            )}

            {/* Step 2: Personal Information */}
            {step === 2 && (
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Phone className="h-5 w-5 text-emerald" />
                    Your Information
                  </CardTitle>
                  <CardDescription>
                    Tell us about yourself and your car buying situation
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="name">Full Name *</Label>
                      <Input 
                        id="name"
                        {...form.register("name")}
                        placeholder="Enter your full name"
                      />
                      {form.formState.errors.name && (
                        <p className="text-red-500 text-sm mt-1">{form.formState.errors.name.message}</p>
                      )}
                    </div>
                    <div>
                      <Label htmlFor="email">Email Address *</Label>
                      <Input 
                        id="email"
                        type="email"
                        {...form.register("email")}
                        placeholder="Enter your email"
                      />
                      {form.formState.errors.email && (
                        <p className="text-red-500 text-sm mt-1">{form.formState.errors.email.message}</p>
                      )}
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="phone">Phone Number *</Label>
                    <Input 
                      id="phone"
                      {...form.register("phone")}
                      placeholder="Enter your phone number"
                    />
                    {form.formState.errors.phone && (
                      <p className="text-red-500 text-sm mt-1">{form.formState.errors.phone.message}</p>
                    )}
                  </div>

                  <div>
                    <Label htmlFor="vehicleInfo">Vehicle Information</Label>
                    <Textarea 
                      id="vehicleInfo"
                      {...form.register("vehicleInfo")}
                      placeholder="Tell us about the vehicle you're interested in (make, model, year, price range, etc.)"
                      rows={3}
                    />
                  </div>

                  <div>
                    <Label htmlFor="dealerInfo">Dealership Information</Label>
                    <Textarea 
                      id="dealerInfo"
                      {...form.register("dealerInfo")}
                      placeholder="Dealership name, location, or any specific concerns you have"
                      rows={3}
                    />
                  </div>

                  <div className="flex justify-between">
                    <Button type="button" variant="outline" onClick={prevStep}>
                      Back
                    </Button>
                    <Button type="button" onClick={nextStep} className="bg-emerald hover:bg-emerald/90">
                      Continue
                    </Button>
                  </div>
                </CardContent>
              </Card>
            )}

            {/* Step 3: Schedule */}
            {step === 3 && (
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Calendar className="h-5 w-5 text-emerald" />
                    Schedule Your Consultation
                  </CardTitle>
                  <CardDescription>
                    Choose your preferred date and time for the consultation
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="preferredDate">Preferred Date *</Label>
                      <Input 
                        id="preferredDate"
                        type="date"
                        {...form.register("preferredDate")}
                        min={new Date().toISOString().split('T')[0]}
                      />
                      {form.formState.errors.preferredDate && (
                        <p className="text-red-500 text-sm mt-1">{form.formState.errors.preferredDate.message}</p>
                      )}
                    </div>
                    <div>
                      <Label htmlFor="preferredTime">Preferred Time *</Label>
                      <Select onValueChange={(value) => form.setValue("preferredTime", value)}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select time" />
                        </SelectTrigger>
                        <SelectContent>
                          {timeSlots.map((time) => (
                            <SelectItem key={time} value={time}>{time}</SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                      {form.formState.errors.preferredTime && (
                        <p className="text-red-500 text-sm mt-1">{form.formState.errors.preferredTime.message}</p>
                      )}
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="additionalNotes">Additional Notes</Label>
                    <Textarea 
                      id="additionalNotes"
                      {...form.register("additionalNotes")}
                      placeholder="Any additional information or special requests"
                      rows={3}
                    />
                  </div>

                  <div className="bg-light-gray p-4 rounded-lg">
                    <h4 className="font-semibold text-navy mb-2">Booking Summary</h4>
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span>Service:</span>
                        <span>{services.find(s => s.id === form.watch("service"))?.name}</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Price:</span>
                        <span className="font-semibold text-emerald">
                          {services.find(s => s.id === form.watch("service"))?.price}
                        </span>
                      </div>
                      <div className="flex justify-between">
                        <span>Duration:</span>
                        <span>{services.find(s => s.id === form.watch("service"))?.duration}</span>
                      </div>
                    </div>
                  </div>

                  <div className="flex justify-between">
                    <Button type="button" variant="outline" onClick={prevStep}>
                      Back
                    </Button>
                    <Button 
                      type="submit" 
                      disabled={bookingMutation.isPending}
                      className="bg-emerald hover:bg-emerald/90"
                    >
                      {bookingMutation.isPending ? "Booking..." : "Confirm Booking"}
                    </Button>
                  </div>
                </CardContent>
              </Card>
            )}

            {/* Step 4: Confirmation */}
            {step === 4 && (
              <Card>
                <CardContent className="text-center py-12">
                  <div className="w-16 h-16 bg-emerald/10 rounded-full flex items-center justify-center mx-auto mb-6">
                    <CheckCircle className="h-8 w-8 text-emerald" />
                  </div>
                  <h2 className="text-2xl font-bold text-navy mb-4">Booking Confirmed!</h2>
                  <p className="text-gray-600 mb-6">
                    Thank you for booking with Top Auto Advisors. We'll contact you within 24 hours 
                    to confirm your appointment and provide next steps.
                  </p>
                  <div className="bg-light-gray p-4 rounded-lg max-w-md mx-auto mb-6">
                    <h4 className="font-semibold text-navy mb-2">What's Next?</h4>
                    <ul className="text-sm text-gray-600 space-y-1 text-left">
                      <li>• You'll receive a confirmation email shortly</li>
                      <li>• Our team will call to confirm your appointment</li>
                      <li>• We'll send preparation materials before your consultation</li>
                      <li>• Payment will be processed on the day of service</li>
                    </ul>
                  </div>
                  <Button 
                    onClick={() => window.location.href = '/'}
                    className="bg-emerald hover:bg-emerald/90"
                  >
                    Return to Home
                  </Button>
                </CardContent>
              </Card>
            )}
          </form>
        </div>
      </section>

      <Footer />
    </div>
  );
}