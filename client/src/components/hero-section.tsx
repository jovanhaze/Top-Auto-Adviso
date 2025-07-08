import { Shield, Users, Clock, CheckCircle } from "lucide-react";
import { Link } from "wouter";

export default function HeroSection() {
  return (
    <section className="hero-section">
      <div className="hero-background"></div>
      
      <div className="hero-container">
        <div className="hero-content">
          <div className="hero-text">
            <div className="hero-badge">
              <Shield className="hero-badge-icon" />
              <span className="hero-badge-text">100% Dealer-Trick Proof</span>
            </div>
            
            <h1 className="hero-headline">
              Don't Get <span className="hero-highlight">Scammed</span> On Your First Car
            </h1>
            
            <div className="hero-urgent">
              Every 8 minutes, a first-time buyer gets scammed. Don't be next.
            </div>
            
            <p className="hero-subheadline">
              Get insider protection from our team of ex-auto finance professionals. We've helped hundreds of buyers avoid thousands in scams, hidden fees, and dealer traps.
            </p>
            
            <div className="hero-buttons">
              <Link href="/booking" className="hero-btn-primary">
                <Shield className="hero-btn-icon" />
                Get Protected Now – $49.99
              </Link>
              <Link href="/services" className="hero-btn-secondary">
                Watch How It Works
              </Link>
            </div>
            
            <div className="hero-features">
              <div className="hero-feature">
                <Users className="hero-feature-icon" />
                <span>Auto Finance Experts</span>
              </div>
              <div className="hero-feature">
                <CheckCircle className="hero-feature-icon" />
                <span>100% Online</span>
              </div>
              <div className="hero-feature">
                <Clock className="hero-feature-icon" />
                <span>Same-Day Help</span>
              </div>
            </div>
          </div>
          
          <div className="hero-visual">
            <div className="dealer-proof-shield">
              <Shield className="shield-icon" />
              <div className="shield-text">DEALER-PROOF</div>
              <div className="shield-subtext">PROTECTION</div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .hero-section {
          position: relative;
          padding: 5rem 0 4rem;
          background: linear-gradient(135deg, #1e3a8a 0%, #1e40af 50%, #1d4ed8 100%);
          color: white;
          overflow: hidden;
          min-height: 80vh;
          display: flex;
          align-items: center;
        }

        .hero-background {
          position: absolute;
          inset: 0;
          background-image: url('https://images.unsplash.com/photo-1493238792000-8113da705763?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80');
          background-size: cover;
          background-position: center;
          opacity: 0.15;
        }

        .hero-container {
          position: relative;
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 1rem;
          width: 100%;
        }

        .hero-content {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 3rem;
          align-items: center;
        }

        .hero-text {
          text-align: left;
        }

        .hero-badge {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          color: #6ee7b7;
          margin-bottom: 1rem;
        }

        .hero-badge-icon {
          width: 1.5rem;
          height: 1.5rem;
        }

        .hero-badge-text {
          font-size: 1.125rem;
          font-weight: 600;
        }

        .hero-headline {
          font-size: 4.5rem;
          font-weight: bold;
          line-height: 1.1;
          margin-bottom: 1rem;
        }

        .hero-highlight {
          color: #6ee7b7;
        }

        .hero-urgent {
          background: rgba(239, 68, 68, 0.9);
          color: white;
          padding: 0.75rem 1rem;
          border-radius: 0.5rem;
          font-weight: 600;
          margin-bottom: 1.5rem;
          display: inline-block;
          border-left: 4px solid #fbbf24;
        }

        .hero-subheadline {
          font-size: 1.125rem;
          line-height: 1.7;
          color: #bfdbfe;
          margin-bottom: 2rem;
        }

        .hero-buttons {
          display: flex;
          flex-direction: column;
          gap: 1rem;
          margin-bottom: 2rem;
        }

        .hero-btn-primary {
          background: #10b981;
          color: white;
          padding: 1rem 2rem;
          border-radius: 0.75rem;
          font-weight: bold;
          font-size: 1.125rem;
          text-decoration: none;
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          transition: all 0.3s ease;
          transform: scale(1);
          box-shadow: 0 10px 30px rgba(16, 185, 129, 0.3);
          text-align: center;
          justify-content: center;
        }

        .hero-btn-primary:hover {
          background: #059669;
          transform: scale(1.05);
          box-shadow: 0 15px 40px rgba(16, 185, 129, 0.4);
        }

        .hero-btn-secondary {
          border: 2px solid white;
          color: white;
          padding: 1rem 2rem;
          border-radius: 0.75rem;
          font-weight: 600;
          font-size: 1.125rem;
          text-decoration: none;
          transition: all 0.3s ease;
          text-align: center;
          display: inline-block;
        }

        .hero-btn-secondary:hover {
          background: white;
          color: #1e3a8a;
        }

        .hero-btn-icon {
          width: 1.25rem;
          height: 1.25rem;
        }

        .hero-features {
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }

        .hero-feature {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          color: #bfdbfe;
        }

        .hero-feature-icon {
          width: 1.25rem;
          height: 1.25rem;
          color: #6ee7b7;
        }

        .hero-visual {
          display: flex;
          justify-content: center;
          align-items: center;
        }

        .dealer-proof-shield {
          position: relative;
          background: linear-gradient(145deg, #10b981, #059669);
          border-radius: 50%;
          width: 200px;
          height: 200px;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          animation: glowPulse 3s ease-in-out infinite;
          box-shadow: 0 0 30px rgba(16, 185, 129, 0.5);
        }

        @keyframes glowPulse {
          0% { box-shadow: 0 0 20px #10b981; }
          50% { box-shadow: 0 0 40px #10b981, 0 0 60px #10b981; }
          100% { box-shadow: 0 0 20px #10b981; }
        }

        .shield-icon {
          width: 3rem;
          height: 3rem;
          color: white;
          margin-bottom: 0.5rem;
        }

        .shield-text {
          font-weight: bold;
          font-size: 0.875rem;
          color: white;
          text-align: center;
          line-height: 1;
        }

        .shield-subtext {
          font-weight: 600;
          font-size: 0.75rem;
          color: #d1fae5;
          text-align: center;
        }

        /* Mobile Responsiveness */
        @media (max-width: 1024px) {
          .hero-content {
            grid-template-columns: 1fr;
            gap: 2rem;
            text-align: center;
          }

          .hero-text {
            text-align: center;
          }

          .hero-headline {
            font-size: 3.5rem;
          }

          .hero-buttons {
            flex-direction: column;
            align-items: center;
          }

          .hero-features {
            flex-direction: row;
            justify-content: center;
            flex-wrap: wrap;
          }
        }

        @media (max-width: 768px) {
          .hero-section {
            padding: 4rem 0 3rem;
          }

          .hero-headline {
            font-size: 2.5rem;
          }

          .hero-buttons {
            width: 100%;
          }

          .hero-btn-primary,
          .hero-btn-secondary {
            width: 100%;
          }

          .dealer-proof-shield {
            width: 150px;
            height: 150px;
          }

          .shield-icon {
            width: 2rem;
            height: 2rem;
          }

          .hero-features {
            flex-direction: column;
            align-items: center;
          }
        }

        @media (max-width: 640px) {
          .hero-headline {
            font-size: 2rem;
          }

          .hero-container {
            padding: 0 0.75rem;
          }
        }
      `}</style>
    </section>
  );
}