import { Shield } from "lucide-react";

export default function Header() {
  return (
    <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-sm border-b border-gray-100 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-navy rounded-full flex items-center justify-center">
              <Shield className="text-white w-5 h-5" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-navy">Top Auto Advisors</h1>
              <p className="text-xs text-gray-600">Buy Smart. Drive Safe.</p>
            </div>
          </div>
          <a 
            href="#pricing" 
            className="bg-emerald text-white px-6 py-2 rounded-lg font-semibold hover:bg-emerald-600 transition-colors"
          >
            Get Protected Today
          </a>
        </div>
      </div>
    </nav>
  );
}
