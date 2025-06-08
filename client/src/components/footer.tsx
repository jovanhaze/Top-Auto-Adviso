import { Shield, Mail, Clock, Video } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-navy text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-10 h-10 bg-emerald rounded-full flex items-center justify-center">
                <Shield className="text-white w-5 h-5" />
              </div>
              <div>
                <h3 className="text-xl font-bold">Top Auto Advisors</h3>
                <p className="text-blue-200 text-sm">Buy Smart. Drive Safe.</p>
              </div>
            </div>
            <p className="text-blue-100 text-sm">
              Protecting first-time car buyers from dealer scams and predatory contracts with insider auto finance expertise.
            </p>
          </div>
          
          <div>
            <h4 className="font-bold mb-4">Services</h4>
            <ul className="space-y-2 text-blue-100 text-sm">
              <li>Contract Review</li>
              <li>Dealer Protection Consultation</li>
              <li>Lemon Law Referrals</li>
              <li>Car Buying Strategy</li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold mb-4">Contact</h4>
            <div className="space-y-2 text-blue-100 text-sm">
              <p className="flex items-center">
                <Mail className="w-4 h-4 mr-2" />
                info@topautoadvisors.com
              </p>
              <p className="flex items-center">
                <Clock className="w-4 h-4 mr-2" />
                Available 7 days a week
              </p>
              <p className="flex items-center">
                <Video className="w-4 h-4 mr-2" />
                Online consultations only
              </p>
            </div>
          </div>
        </div>
        
        <div className="border-t border-blue-800 mt-8 pt-8 text-center">
          <p className="text-blue-200 text-sm">
            © 2024 Top Auto Advisors. All rights reserved. | We are not lawyers and do not provide legal advice.
          </p>
        </div>
      </div>
    </footer>
  );
}
