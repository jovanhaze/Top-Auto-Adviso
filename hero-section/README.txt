TOP AUTO ADVISORS – HERO SECTION (README)

📁 /hero-section/

- hero.html → Main markup for Hero Header. Mobile responsive.
- hero.css → Styles only for this section. Modular and reusable.
- /assets/shield.svg → Dealer-Proof Shield icon.
- /assets/icons/ → SVG icons for bullet features.

✏️ To Update:
- Text: Edit in hero.html under <div class="hero-text">
- Shield Graphic: Replace shield.svg in assets/
- Styles: All animations and layout in hero.css

📋 Current Implementation:
- Built as React TSX component with embedded CSS-in-JS
- Located at: client/src/components/hero-section.tsx
- Features: Animated glowing shield, team-based messaging, mobile responsive
- Updated messaging: Removed personal name, made team-focused
- Added urgent trust-building message: "Every 8 minutes, a first-time buyer gets scammed"

🎨 Key Features Implemented:
✅ Increased headline font size by 30% (4.5rem on desktop)
✅ Bold, left-aligned on desktop, center on mobile
✅ Team-based subtext instead of personal name
✅ Animated "Dealer-Proof Shield" badge with CSS glow animation
✅ Urgent message for trust building
✅ CTA buttons unchanged: "Get Protected Now – $49.99" and "Watch How It Works"
✅ SVG icons for Auto Finance Experts, 100% Online, Same-Day Help
✅ Fully mobile responsive with proper breakpoints
✅ Clean semantic HTML with custom class names
✅ Modular CSS with @keyframes glowPulse animation