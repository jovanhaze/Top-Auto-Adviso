import { Shield, Menu, X } from "lucide-react";
import { Link, useLocation } from "wouter";
import { useState } from "react";
import carLogoPath from "@assets/topautoadvisors-car-icon-centered_1751939753490.png";

export default function Header() {
  const [location] = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navigation = [
    { name: "Home", href: "/", current: location === "/" },
    { name: "Services", href: "/services", current: location === "/services" },
    { name: "About", href: "/about", current: location === "/about" },
    { name: "Contact", href: "/#contact", current: false }
  ];

  return (
    <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-sm border-b border-gray-100 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3">
            <div className="w-12 h-8 flex-shrink-0 bg-transparent">
              <img 
                src={carLogoPath} 
                alt="Top Auto Advisors Car Icon" 
                className="w-full h-full object-contain"
                style={{ filter: 'drop-shadow(0 1px 2px rgba(0, 0, 0, 0.1))' }}
              />
            </div>
            <div className="flex flex-col justify-center">
              <h1 className="text-xl font-bold text-navy leading-tight">Top Auto Advisors</h1>
              <p className="text-xs text-gray-600 leading-tight mt-0.5">Drive Smart.</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`text-sm font-medium transition-colors ${
                  item.current
                    ? 'text-emerald border-b-2 border-emerald'
                    : 'text-gray-700 hover:text-emerald'
                }`}
              >
                {item.name}
              </Link>
            ))}
            <Link 
              href="/booking"
              className="bg-emerald text-white px-6 py-2 rounded-lg font-semibold hover:bg-emerald/90 transition-colors"
            >
              Book Now
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-gray-700 hover:text-emerald"
            >
              {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-100">
            <div className="flex flex-col space-y-3">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`text-sm font-medium px-3 py-2 rounded-md transition-colors ${
                    item.current
                      ? 'text-emerald bg-emerald/10'
                      : 'text-gray-700 hover:text-emerald hover:bg-gray-50'
                  }`}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <Link 
                href="/booking"
                className="bg-emerald text-white px-3 py-2 rounded-lg font-semibold hover:bg-emerald/90 transition-colors text-center"
                onClick={() => setMobileMenuOpen(false)}
              >
                Book Now
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
