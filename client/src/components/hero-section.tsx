import { Shield, Check } from "lucide-react";
import { Link } from "wouter";

export default function HeroSection() {
  return (
    <section className="pt-20 pb-16 bg-gradient-to-br from-navy via-blue-800 to-blue-900 text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-black/40"></div>
      <div 
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1493238792000-8113da705763?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80')",
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
        className="absolute inset-0 opacity-20"
      ></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center min-h-[70vh]">
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="flex items-center space-x-2 text-emerald-400">
                <Shield className="w-6 h-6" />
                <span className="text-lg font-semibold">100% Dealer-Trick Proof</span>
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
                Don't Get <span className="text-emerald-400">Scammed</span> On Your First Car
              </h1>
              <p className="text-xl text-blue-100 leading-relaxed">
                Get insider protection from Jovan Acosta, an auto finance expert with 5+ years industry experience. 
                Your consultation could save you thousands in hidden fees and dealer manipulation.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Link 
                href="/booking" 
                className="bg-emerald hover:bg-emerald-600 text-white px-8 py-4 rounded-xl font-bold text-lg transition-all transform hover:scale-105 shadow-lg text-center inline-block"
              >
                <Shield className="inline w-5 h-5 mr-2" />
                Get Protected Now
              </Link>
              <Link 
                href="/services" 
                className="border-2 border-white text-white hover:bg-white hover:text-navy px-8 py-4 rounded-xl font-semibold text-lg transition-all text-center inline-block"
              >
                View Our Services
              </Link>
            </div>
            
            <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-6 space-y-2 sm:space-y-0 text-sm">
              <div className="flex items-center space-x-2">
                <Check className="text-emerald-400 w-4 h-4" />
                <span>Expert Auto Finance Background</span>
              </div>
              <div className="flex items-center space-x-2">
                <Check className="text-emerald-400 w-4 h-4" />
                <span>100% Online Consultation</span>
              </div>
              <div className="flex items-center space-x-2">
                <Check className="text-emerald-400 w-4 h-4" />
                <span>Same-Day Service</span>
              </div>
            </div>
          </div>
          
          <div className="hidden lg:block">
            <img 
              src="https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1526&q=80" 
              alt="Modern luxury car dealership showroom" 
              className="rounded-2xl shadow-2xl w-full h-auto" 
            />
          </div>
        </div>
      </div>
    </section>
  );
}
