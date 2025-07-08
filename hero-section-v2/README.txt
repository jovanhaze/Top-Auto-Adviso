TOP AUTO ADVISORS – HERO SECTION v2

📁 /hero-section-v2/

- hero.html → Hero markup
- hero.css → Dedicated styles  
- /assets/icons → Icons for bullets
- /assets/shield.svg → Dealer-Proof Shield icon

✏️ UPDATE INSTRUCTIONS
- To edit headline text → hero.html line 12–16
- To update icon bullets → hero.html line 42–48
- To replace shield → swap shield.svg inside /assets/

📋 LAYOUT ARCHITECTURE
3-Column Flex Layout (Desktop):
- Left 2/3: Text Block (headline, urgent message, subtext, CTAs)
- Center: Shield & Feature Bullets (300px shield with glow animation)
- Right 1/3: Visual fade overlay space

Mobile Layout: Stack top-down
Text ➝ Shield ➝ Bullets ➝ CTAs

🎨 KEY SPECIFICATIONS IMPLEMENTED
✅ Headline: 60px desktop / 34px mobile (increased 30%+)
✅ Subheadline: 20px with 1.6 line height  
✅ Shield: 1.5x larger (300px) with pulse-glow animation
✅ Bullets: Repositioned below shield in horizontal cards
✅ 3-column flex layout with proper visual balance
✅ Enhanced typography hierarchy
✅ Improved spacing and visual flow
✅ Full mobile responsiveness

🔧 ANIMATIONS
- Glow animation: 2.5s infinite ease-in-out
- Button hover effects with scale and shadow
- Responsive breakpoints at 1200px, 768px, 640px

📱 MOBILE BEHAVIOR
- Text centers and stacks vertically
- Shield scales down appropriately  
- Feature bullets stack in column layout
- Buttons expand to full width
- Visual space hidden on mobile