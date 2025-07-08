import { Shield, Users, Clock, CheckCircle } from "lucide-react";
import { Link } from "wouter";

/**
 * Hero Section Component - Top Auto Advisors
 * 
 * Features:
 * - 3-column responsive layout (Text | Shield & Features | Visual Space)
 * - Animated dealer-proof shield with glow effect
 * - Mobile-first responsive design
 * - Conversion-optimized CTAs
 * - Trust-building urgent messaging
 */
export default function HeroSection() {
  return (
    <section className="hero-section">
      <div className="hero-background" />
      
      <div className="hero-container">
        <div className="hero-layout">
          {/* Text Block - Primary Content */}
          <div className="hero-text-block">
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
          </div>
          
          {/* Shield & Features - Visual Anchor */}
          <div className="hero-center-block">
            <div className="dealer-proof-shield">
              <Shield className="shield-icon" />
              <div className="shield-text">DEALER-PROOF</div>
              <div className="shield-subtext">PROTECTION</div>
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
          
          {/* Visual Space - Right Balance */}
          <div className="hero-visual-space">
            <div className="hero-fade-overlay" />
          </div>
        </div>
      </div>

      <style>{`
        /* ==========================================================================
           HERO SECTION - TOP AUTO ADVISORS
           3-Column Layout: Text | Shield & Features | Visual Space
           ========================================================================== */

        .hero-section {
          position: relative;
          padding: 6rem 0 5rem;
          background: transparent;
          color: #1e3a8a;
          overflow: hidden;
          min-height: 85vh;
          display: flex;
          align-items: center;
        }

        .hero-background {
          position: absolute;
          inset: 0;
          background-image: url('https://images.unsplash.com/photo-1493238792000-8113da705763?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80');
          background-size: cover;
          background-position: center;
          opacity: 0.08;
        }

        .hero-container {
          position: relative;
          max-width: 1400px;
          margin: 0 auto;
          padding: 0 2rem;
          width: 100%;
        }

        .hero-layout {
          display: flex;
          gap: 3rem;
          align-items: center;
          min-height: 70vh;
        }

        /* ==========================================================================
           TEXT BLOCK - Primary Content Area (Left 2/3)
           ========================================================================== */
        .hero-text-block {
          flex: 2;
          max-width: 600px;
        }

        .hero-badge {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          color: #10b981;
          margin-bottom: 1.5rem;
        }

        .hero-badge-icon {
          width: 1.75rem;
          height: 1.75rem;
        }

        .hero-badge-text {
          font-size: 1.25rem;
          font-weight: 700;
        }

        .hero-headline {
          font-size: 3.75rem;
          font-weight: 900;
          line-height: 1.1;
          margin-bottom: 1.5rem;
          letter-spacing: -0.02em;
          color: #1e3a8a;
        }

        .hero-highlight {
          color: #ef4444;
        }

        .hero-urgent {
          background: rgba(239, 68, 68, 0.95);
          color: white;
          padding: 1rem 1.5rem;
          border-radius: 0.75rem;
          font-weight: 700;
          font-size: 1rem;
          margin-bottom: 2rem;
          display: inline-block;
          border-left: 5px solid #fbbf24;
          box-shadow: 0 4px 15px rgba(239, 68, 68, 0.3);
        }

        .hero-subheadline {
          font-size: 1.25rem;
          line-height: 1.6;
          color: #64748b;
          margin-bottom: 2.5rem;
          font-weight: 400;
        }

        .hero-buttons {
          display: flex;
          flex-direction: column;
          gap: 1rem;
          margin-bottom: 2rem;
        }

        .hero-btn-primary {
          background: linear-gradient(145deg, #10b981, #059669);
          color: white;
          padding: 1.25rem 2.5rem;
          border-radius: 1rem;
          font-weight: 800;
          font-size: 1.2rem;
          text-decoration: none;
          display: inline-flex;
          align-items: center;
          gap: 0.75rem;
          transition: all 0.3s ease;
          transform: scale(1);
          box-shadow: 0 12px 35px rgba(16, 185, 129, 0.4);
          text-align: center;
          justify-content: center;
          border: none;
        }

        .hero-btn-primary:hover {
          transform: scale(1.05) translateY(-2px);
          box-shadow: 0 20px 50px rgba(16, 185, 129, 0.5);
        }

        .hero-btn-secondary {
          border: 3px solid #1e3a8a;
          color: #1e3a8a;
          padding: 1.25rem 2.5rem;
          border-radius: 1rem;
          font-weight: 700;
          font-size: 1.2rem;
          text-decoration: none;
          transition: all 0.3s ease;
          text-align: center;
          display: inline-block;
          background: transparent;
        }

        .hero-btn-secondary:hover {
          background: #1e3a8a;
          color: white;
          transform: translateY(-2px);
        }

        .hero-btn-icon {
          width: 1.5rem;
          height: 1.5rem;
        }

        /* ==========================================================================
           SHIELD & FEATURES - Visual Anchor (Center)
           ========================================================================== */
        .hero-center-block {
          flex: 1;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 2rem;
          margin-left: 8%;
          justify-content: center;
        }

        .dealer-proof-shield {
          position: relative;
          background: linear-gradient(145deg, #10b981, #059669);
          border-radius: 50%;
          width: 300px;
          height: 300px;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          animation: glow 2.5s infinite ease-in-out;
          box-shadow: 0 0 30px rgba(16, 185, 129, 0.6);
        }

        @keyframes glow {
          0%, 100% { 
            box-shadow: 0 0 20px #10b981, 0 0 40px rgba(16, 185, 129, 0.3); 
            transform: scale(1);
          }
          50% { 
            box-shadow: 0 0 40px #10b981, 0 0 80px rgba(16, 185, 129, 0.5); 
            transform: scale(1.02);
          }
        }

        .shield-icon {
          width: 60%;
          height: auto;
          color: white;
          margin-bottom: 0.75rem;
          display: block;
          min-width: 6rem;
          min-height: 6rem;
        }

        .shield-text {
          font-weight: 900;
          font-size: 1.1rem;
          color: white;
          text-align: center;
          line-height: 1;
          letter-spacing: 0.05em;
        }

        .shield-subtext {
          font-weight: 700;
          font-size: 0.9rem;
          color: #d1fae5;
          text-align: center;
          letter-spacing: 0.1em;
        }

        .hero-features {
          display: flex;
          gap: 1.5rem;
          flex-wrap: wrap;
          justify-content: center;
        }

        .hero-feature {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 0.5rem;
          color: #bfdbfe;
          text-align: center;
          padding: 1rem;
          background: rgba(255, 255, 255, 0.1);
          border-radius: 1rem;
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255, 255, 255, 0.2);
          min-width: 120px;
        }

        .hero-feature-icon {
          width: 2rem;
          height: 2rem;
          color: #6ee7b7;
        }

        .hero-feature span {
          font-size: 0.9rem;
          font-weight: 600;
        }

        /* ==========================================================================
           VISUAL SPACE - Right Balance (Right 1/3)
           ========================================================================== */
        .hero-visual-space {
          flex: 1;
          height: 100%;
          position: relative;
        }

        .hero-fade-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(90deg, transparent 0%, rgba(16, 185, 129, 0.1) 100%);
          border-radius: 2rem;
        }

        /* ==========================================================================
           RESPONSIVE DESIGN - Mobile First Approach
           ========================================================================== */
        @media (max-width: 1200px) {
          .hero-layout {
            flex-direction: column;
            gap: 3rem;
            text-align: center;
          }

          .hero-text-block {
            flex: none;
            max-width: none;
            order: 1;
          }

          .hero-center-block {
            margin-left: 0;
            order: 2;
          }

          .hero-headline {
            font-size: 3.5rem;
          }

          .dealer-proof-shield {
            width: 250px;
            height: 250px;
          }

          .hero-features {
            flex-direction: row;
            justify-content: center;
            flex-wrap: wrap;
            gap: 1rem;
          }

          .hero-visual-space {
            display: none;
          }
        }

        @media (max-width: 768px) {
          .hero-section {
            padding: 4rem 0 3rem;
            min-height: auto;
          }

          .hero-container {
            padding: 0 1rem;
          }

          .hero-layout {
            gap: 2.5rem;
          }

          .hero-headline {
            font-size: 2.125rem;
            margin-bottom: 1rem;
          }

          .hero-subheadline {
            font-size: 1.125rem;
            margin-bottom: 2rem;
          }

          .hero-urgent {
            font-size: 0.9rem;
            padding: 0.875rem 1.25rem;
            margin-bottom: 1.5rem;
          }

          .hero-buttons {
            width: 100%;
            gap: 0.75rem;
          }

          .hero-btn-primary,
          .hero-btn-secondary {
            width: 100%;
            padding: 1rem 2rem;
            font-size: 1.1rem;
          }

          .dealer-proof-shield {
            width: 200px;
            height: 200px;
          }

          .shield-icon {
            width: 55%;
            height: auto;
            min-width: 4rem;
            min-height: 4rem;
          }

          .shield-text {
            font-size: 1rem;
          }

          .shield-subtext {
            font-size: 0.8rem;
          }

          .hero-features {
            flex-direction: column;
            align-items: center;
            gap: 1rem;
            margin-top: 1.5rem;
          }

          .hero-feature {
            width: 100%;
            max-width: 280px;
            padding: 0.875rem;
          }

          .hero-feature-icon {
            width: 1.75rem;
            height: 1.75rem;
          }

          .hero-feature span {
            font-size: 0.875rem;
          }
        }

        @media (max-width: 640px) {
          .hero-section {
            padding: 3rem 0 2.5rem;
          }

          .hero-container {
            padding: 0 0.75rem;
          }

          .hero-headline {
            font-size: 2rem;
            line-height: 1.2;
          }

          .hero-subheadline {
            font-size: 1rem;
            line-height: 1.5;
          }

          .hero-badge-text {
            font-size: 1.125rem;
          }

          .hero-urgent {
            font-size: 0.875rem;
            padding: 0.75rem 1rem;
          }

          .dealer-proof-shield {
            width: 180px;
            height: 180px;
          }

          .shield-icon {
            min-width: 3.5rem;
            min-height: 3.5rem;
          }

          .shield-text {
            font-size: 0.9rem;
          }

          .shield-subtext {
            font-size: 0.75rem;
          }

          .hero-feature {
            max-width: 240px;
            padding: 0.75rem;
          }
        }

        @media (max-width: 480px) {
          .hero-headline {
            font-size: 1.75rem;
          }

          .hero-subheadline {
            font-size: 0.95rem;
          }

          .hero-btn-primary,
          .hero-btn-secondary {
            padding: 0.875rem 1.5rem;
            font-size: 1rem;
          }

          .dealer-proof-shield {
            width: 160px;
            height: 160px;
          }

          .hero-features {
            gap: 0.75rem;
          }

          .hero-feature {
            max-width: 200px;
            padding: 0.625rem;
          }
        }
      `}</style>
    </section>
  );
}