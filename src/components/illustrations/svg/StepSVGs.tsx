import React from 'react';

interface StepSVGProps {
  className?: string;
  stepKey: string;
}

export const StepSVG: React.FC<StepSVGProps> = ({ className = "w-full h-auto", stepKey }) => {
  switch (stepKey) {
    // ================= GRADE 3 STEPS =================
    case 'g3-step-1':
      return (
        <svg viewBox="0 0 320 220" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} aria-hidden="true">
          <rect width="320" height="220" rx="12" fill="#F7F1E8" />
          <rect x="20" y="20" width="130" height="180" rx="8" fill="#FFFFFF" stroke="#0F2A43" strokeWidth="2" />
          <rect x="55" y="14" width="60" height="12" rx="3" fill="#D4A373" stroke="#0F2A43" strokeWidth="1.5" />
          {/* Tally Demo on Board */}
          <text x="35" y="48" fill="#0F2A43" fontSize="12" fontWeight="bold" fontFamily="sans-serif">Tally Bundle of 5</text>
          <path d="M45 70V110M55 70V110M65 70V110M75 70V110M40 100L80 75" stroke="#2563EB" strokeWidth="3" strokeLinecap="round" />
          <circle cx="60" cy="140" r="18" fill="#E0F2FE" stroke="#2563EB" strokeWidth="1.5" />
          <text x="56" y="145" fill="#1E3A8A" fontSize="14" fontWeight="bold" fontFamily="sans-serif">= 5</text>
          {/* Pencil */}
          <g transform="translate(180, 50) rotate(25)">
            <rect x="0" y="0" width="18" height="90" rx="2" fill="#F59E0B" stroke="#0F2A43" strokeWidth="2" />
            <path d="M0 90L9 110L18 90Z" fill="#D97706" stroke="#0F2A43" strokeWidth="2" />
            <path d="M6 103L9 110L12 103Z" fill="#1E293B" />
          </g>
          <text x="180" y="180" fill="#2B8C87" fontSize="12" fontWeight="bold" fontFamily="sans-serif">Pencils & Sheets Ready</text>
        </svg>
      );
    case 'g3-step-2':
      return (
        <svg viewBox="0 0 320 220" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} aria-hidden="true">
          <rect width="320" height="220" rx="12" fill="#F7F1E8" />
          {/* Ground pathway */}
          <path d="M0 160C100 150 220 155 320 150V220H0V160Z" fill="#E2DAC8" stroke="#0F2A43" strokeWidth="2" />
          {/* Neem tree */}
          <path d="M70 160V110" stroke="#78350F" strokeWidth="6" strokeLinecap="round" />
          <circle cx="70" cy="85" r="28" fill="#2B8C87" stroke="#0F2A43" strokeWidth="2" />
          {/* Walking feet / partner indicator */}
          <g transform="translate(140, 60)">
            {/* Spotter Arm pointing */}
            <circle cx="30" cy="20" r="14" fill="#BC8A5F" stroke="#0F2A43" strokeWidth="2" />
            <rect x="18" y="38" width="24" height="40" rx="4" fill="#C2410C" stroke="#0F2A43" strokeWidth="2" />
            <path d="M36 45L80 40" stroke="#BC8A5F" strokeWidth="6" strokeLinecap="round" />
            <circle cx="82" cy="40" r="3" fill="#BC8A5F" />
            {/* Partner with clipboard */}
            <circle cx="95" cy="30" r="13" fill="#D4A373" stroke="#0F2A43" strokeWidth="2" />
            <rect x="85" y="46" width="20" height="36" rx="4" fill="#1E3A8A" stroke="#0F2A43" strokeWidth="2" />
            <rect x="105" y="48" width="22" height="30" rx="2" fill="#92400E" stroke="#0F2A43" strokeWidth="1.5" />
          </g>
          {/* Dynamic Action arrow */}
          <path d="M210 145L250 145M250 145L240 138M250 145L240 152" stroke="#2563EB" strokeWidth="2.5" strokeLinecap="round" />
          <text x="140" y="195" fill="#0F2A43" fontSize="11" fontWeight="bold" fontFamily="sans-serif">Spot & Mark 1-for-1</text>
        </svg>
      );
    case 'g3-step-3':
      return (
        <svg viewBox="0 0 320 220" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} aria-hidden="true">
          <rect width="320" height="220" rx="12" fill="#F7F1E8" />
          <ellipse cx="160" cy="180" rx="130" ry="30" fill="#E2DAC8" stroke="#0F2A43" strokeWidth="2" />
          {/* Two clipboards side by side */}
          <rect x="50" y="40" width="90" height="120" rx="6" fill="#92400E" stroke="#0F2A43" strokeWidth="2" />
          <rect x="58" y="50" width="74" height="100" rx="3" fill="#FFFFFF" />
          <text x="66" y="70" fill="#0F2A43" fontSize="10" fontWeight="bold" fontFamily="sans-serif">Partner A: 7</text>
          <path d="M66 80V95M72 80V95M78 80V95M84 80V95M64 90L86 82" stroke="#2563EB" strokeWidth="2" strokeLinecap="round" />
          <path d="M66 105V120M72 105V120" stroke="#2563EB" strokeWidth="2" strokeLinecap="round" />

          <rect x="180" y="40" width="90" height="120" rx="6" fill="#92400E" stroke="#0F2A43" strokeWidth="2" />
          <rect x="188" y="50" width="74" height="100" rx="3" fill="#FFFFFF" />
          <text x="196" y="70" fill="#0F2A43" fontSize="10" fontWeight="bold" fontFamily="sans-serif">Partner B: 7</text>
          <path d="M196 80V95M202 80V95M208 80V95M214 80V95M194 90L216 82" stroke="#2563EB" strokeWidth="2" strokeLinecap="round" />
          <path d="M196 105V120M202 105V120" stroke="#2563EB" strokeWidth="2" strokeLinecap="round" />

          {/* Equal check sign */}
          <circle cx="160" cy="100" r="16" fill="#10B981" stroke="#0F2A43" strokeWidth="1.5" />
          <path d="M152 100L158 106L168 94" stroke="#FFFFFF" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
          <text x="110" y="200" fill="#0F2A43" fontSize="11" fontWeight="bold" fontFamily="sans-serif">Cross-Check & Verify</text>
        </svg>
      );
    case 'g3-step-4':
      return (
        <svg viewBox="0 0 320 220" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} aria-hidden="true">
          <rect width="320" height="220" rx="12" fill="#F7F1E8" />
          {/* A3 Poster sheet */}
          <rect x="30" y="20" width="260" height="150" rx="6" fill="#FFFFFF" stroke="#0F2A43" strokeWidth="2" />
          <text x="45" y="45" fill="#0F2A43" fontSize="11" fontWeight="bold" fontFamily="sans-serif">OUR PICTOGRAPH</text>
          {/* 3 Columns */}
          <line x1="115" y1="55" x2="115" y2="155" stroke="#E2E8F0" strokeWidth="2" />
          <line x1="200" y1="55" x2="200" y2="155" stroke="#E2E8F0" strokeWidth="2" />
          
          <text x="50" y="145" fill="#5E6B77" fontSize="9" fontFamily="sans-serif">Trees</text>
          <circle cx="70" cy="120" r="8" fill="#2B8C87" />
          <circle cx="70" cy="100" r="8" fill="#2B8C87" />
          <circle cx="70" cy="80" r="8" fill="#2B8C87" />
          <circle cx="70" cy="60" r="8" fill="#2B8C87" />

          <text x="135" y="145" fill="#5E6B77" fontSize="9" fontFamily="sans-serif">Bins</text>
          <circle cx="155" cy="120" r="8" fill="#E7853C" />
          <circle cx="155" cy="100" r="8" fill="#E7853C" />

          <text x="220" y="145" fill="#5E6B77" fontSize="9" fontFamily="sans-serif">Bicycles</text>
          <circle cx="245" cy="120" r="8" fill="#2563EB" />
          <circle cx="245" cy="100" r="8" fill="#2563EB" />
          <circle cx="245" cy="80" r="8" fill="#2563EB" />
          
          {/* Hand sticking dot */}
          <g transform="translate(240, 45)">
            <circle cx="5" cy="15" r="8" fill="#2563EB" stroke="#1D4ED8" strokeWidth="1.5" />
            <path d="M12 15L35 30" stroke="#D4A373" strokeWidth="6" strokeLinecap="round" />
          </g>
          <text x="90" y="195" fill="#0F2A43" fontSize="11" fontWeight="bold" fontFamily="sans-serif">Stick Uniform 1-to-1 Dots</text>
        </svg>
      );
    case 'g3-step-5':
      return (
        <svg viewBox="0 0 320 220" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} aria-hidden="true">
          <rect width="320" height="220" rx="12" fill="#F7F1E8" />
          {/* Student sharing verbally */}
          <circle cx="60" cy="80" r="22" fill="#BC8A5F" stroke="#0F2A43" strokeWidth="2" />
          <rect x="38" y="106" width="44" height="70" rx="6" fill="#C2410C" stroke="#0F2A43" strokeWidth="2" />
          {/* Speech Bubble */}
          <rect x="110" y="40" width="180" height="75" rx="10" fill="#FFFFFF" stroke="#2B8C87" strokeWidth="2" />
          <path d="M110 75L90 85L110 90V75Z" fill="#FFFFFF" stroke="#2B8C87" strokeWidth="2" />
          <text x="125" y="65" fill="#0F2A43" fontSize="11" fontWeight="bold" fontFamily="sans-serif">"We observed 4 trees,</text>
          <text x="125" y="82" fill="#0F2A43" fontSize="11" fontWeight="bold" fontFamily="sans-serif">2 bins, and 3 cycles.</text>
          <text x="125" y="100" fill="#2B8C87" fontSize="10" fontWeight="bold" fontFamily="sans-serif">Trees were most frequent!"</text>
          {/* Small listening crowd icons */}
          <circle cx="230" cy="165" r="14" fill="#D4A373" stroke="#0F2A43" strokeWidth="1.5" />
          <circle cx="270" cy="165" r="14" fill="#E0A96D" stroke="#0F2A43" strokeWidth="1.5" />
          <text x="90" y="200" fill="#0F2A43" fontSize="11" fontWeight="bold" fontFamily="sans-serif">Oral Presentation & Comparison</text>
        </svg>
      );

    // ================= GRADE 6 STEPS =================
    case 'g6-step-1':
      return (
        <svg viewBox="0 0 320 220" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} aria-hidden="true">
          <rect width="320" height="220" rx="12" fill="#FFFBEB" />
          {/* Cascading 5 Whys arrows */}
          <rect x="25" y="25" width="270" height="32" rx="6" fill="#FFFFFF" stroke="#CA8A04" strokeWidth="1.5" />
          <text x="35" y="45" fill="#713F12" fontSize="10" fontWeight="bold" fontFamily="sans-serif">1. Floor dusty at 2 PM</text>
          
          <path d="M160 58V72M160 72L155 67M160 72L165 67" stroke="#E7853C" strokeWidth="2" strokeLinecap="round" />
          <rect x="45" y="75" width="230" height="30" rx="6" fill="#FEF3C7" stroke="#CA8A04" strokeWidth="1.5" />
          <text x="55" y="94" fill="#713F12" fontSize="10" fontFamily="sans-serif">Why? Corridor swept dry at break</text>

          <path d="M160 106V120M160 120L155 115M160 120L165 115" stroke="#E7853C" strokeWidth="2" strokeLinecap="round" />
          <rect x="65" y="122" width="190" height="30" rx="6" fill="#FEE2E2" stroke="#DC2626" strokeWidth="1.5" />
          <text x="75" y="141" fill="#991B1B" fontSize="10" fontWeight="bold" fontFamily="sans-serif">Root: Need wet mop rota</text>
          <text x="95" y="195" fill="#0F2A43" fontSize="11" fontWeight="bold" fontFamily="sans-serif">Drill Down 5 Layers Deep</text>
        </svg>
      );
    case 'g6-step-2':
      return (
        <svg viewBox="0 0 320 220" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} aria-hidden="true">
          <rect width="320" height="220" rx="12" fill="#FFFBEB" />
          {/* 3 Topic sticky clusters */}
          <rect x="25" y="35" width="80" height="60" rx="4" fill="#BAE6FD" stroke="#0284C7" strokeWidth="1.5" />
          <text x="32" y="55" fill="#0369A1" fontSize="10" fontWeight="bold" fontFamily="sans-serif">Tap Leak</text>
          <text x="32" y="70" fill="#0369A1" fontSize="8" fontFamily="sans-serif">Wasted liters</text>

          <rect x="120" y="35" width="80" height="60" rx="4" fill="#BBF7D0" stroke="#16A34A" strokeWidth="1.5" />
          <text x="127" y="55" fill="#15803D" fontSize="10" fontWeight="bold" fontFamily="sans-serif">Canteen</text>
          <text x="127" y="70" fill="#15803D" fontSize="8" fontFamily="sans-serif">Plate queues</text>

          <rect x="215" y="35" width="80" height="60" rx="4" fill="#FED7AA" stroke="#EA580C" strokeWidth="1.5" />
          <text x="222" y="55" fill="#C2410C" fontSize="10" fontWeight="bold" fontFamily="sans-serif">Corridor</text>
          <text x="222" y="70" fill="#C2410C" fontSize="8" fontFamily="sans-serif">Break rush</text>

          {/* Chosen checkmark on Canteen */}
          <circle cx="160" cy="130" r="16" fill="#16A34A" />
          <path d="M152 130L157 135L168 124" stroke="#FFFFFF" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
          <text x="100" y="170" fill="#0F2A43" fontSize="11" fontWeight="bold" fontFamily="sans-serif">Team Selects 1 Focus</text>
        </svg>
      );
    case 'g6-step-3':
      return (
        <svg viewBox="0 0 320 220" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} aria-hidden="true">
          <rect width="320" height="220" rx="12" fill="#FFFBEB" />
          {/* Ethical Interview Scene */}
          <circle cx="70" cy="80" r="20" fill="#BC8A5F" stroke="#0F2A43" strokeWidth="2" />
          <rect x="50" y="105" width="40" height="60" rx="4" fill="#3B82F6" stroke="#0F2A43" strokeWidth="2" />
          {/* Clipboard */}
          <rect x="92" y="95" width="30" height="42" rx="3" fill="#FFFFFF" stroke="#0F2A43" strokeWidth="1.5" />
          
          {/* Worker being interviewed */}
          <circle cx="230" cy="80" r="22" fill="#D4A373" stroke="#0F2A43" strokeWidth="2" />
          <rect x="210" y="106" width="40" height="60" rx="4" fill="#059669" stroke="#0F2A43" strokeWidth="2" />
          
          {/* Speech dialogue */}
          <rect x="110" y="35" width="105" height="42" rx="6" fill="#FFFFFF" stroke="#059669" strokeWidth="1.5" />
          <text x="116" y="52" fill="#047857" fontSize="9" fontWeight="bold" fontFamily="sans-serif">"May we ask 2</text>
          <text x="116" y="65" fill="#047857" fontSize="9" fontWeight="bold" fontFamily="sans-serif">quick questions?"</text>
          <text x="80" y="195" fill="#0F2A43" fontSize="11" fontWeight="bold" fontFamily="sans-serif">Respectful Worker Interview</text>
        </svg>
      );
    case 'g6-step-4':
      return (
        <svg viewBox="0 0 320 220" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} aria-hidden="true">
          <rect width="320" height="220" rx="12" fill="#FFFBEB" />
          {/* Tree Diagram */}
          <path d="M160 150V90M160 90L120 50M160 90L200 50" stroke="#78350F" strokeWidth="6" strokeLinecap="round" />
          {/* Roots */}
          <path d="M160 150L130 180M160 150L190 180M160 150V185" stroke="#DC2626" strokeWidth="3" strokeLinecap="round" />
          {/* Sticky leaf notes */}
          <rect x="95" y="35" width="35" height="22" rx="3" fill="#86EFAC" stroke="#16A34A" strokeWidth="1" />
          <rect x="190" y="35" width="35" height="22" rx="3" fill="#86EFAC" stroke="#16A34A" strokeWidth="1" />
          <rect x="135" y="85" width="50" height="26" rx="3" fill="#FDE047" stroke="#CA8A04" strokeWidth="1.5" />
          <text x="142" y="102" fill="#713F12" fontSize="9" fontWeight="bold" fontFamily="sans-serif">TRUNK</text>
          <rect x="110" y="170" width="35" height="20" rx="3" fill="#FCA5A5" stroke="#DC2626" strokeWidth="1" />
          <rect x="175" y="170" width="35" height="20" rx="3" fill="#FCA5A5" stroke="#DC2626" strokeWidth="1" />
          <text x="80" y="210" fill="#0F2A43" fontSize="11" fontWeight="bold" fontFamily="sans-serif">Assemble Leaves, Trunk & Roots</text>
        </svg>
      );
    case 'g6-step-5':
      return (
        <svg viewBox="0 0 320 220" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} aria-hidden="true">
          <rect width="320" height="220" rx="12" fill="#FFFBEB" />
          {/* Poster on wall */}
          <rect x="50" y="25" width="220" height="120" rx="6" fill="#FFFFFF" stroke="#0F2A43" strokeWidth="2" />
          <text x="65" y="45" fill="#0F2A43" fontSize="11" fontWeight="bold" fontFamily="sans-serif">Team Water Poster</text>
          {/* Peer sticky notes */}
          <rect x="70" y="65" width="75" height="55" rx="3" fill="#FEF08A" stroke="#CA8A04" strokeWidth="1" />
          <text x="75" y="80" fill="#713F12" fontSize="8" fontWeight="bold" fontFamily="sans-serif">Warm Commendation:</text>
          <text x="75" y="94" fill="#713F12" fontSize="8" fontFamily="sans-serif">"Clear quote from</text>
          <text x="75" y="106" fill="#713F12" fontSize="8" fontFamily="sans-serif">canteen lead!"</text>

          <rect x="165" y="65" width="85" height="55" rx="3" fill="#DBEAFE" stroke="#2563EB" strokeWidth="1" />
          <text x="170" y="80" fill="#1E40AF" fontSize="8" fontWeight="bold" fontFamily="sans-serif">Clarifying Question:</text>
          <text x="170" y="94" fill="#1E40AF" fontSize="8" fontFamily="sans-serif">"Who maintains</text>
          <text x="170" y="106" fill="#1E40AF" fontSize="8" fontFamily="sans-serif">the tap washers?"</text>
          <text x="80" y="190" fill="#0F2A43" fontSize="11" fontWeight="bold" fontFamily="sans-serif">Gallery Walk & Peer Feedback</text>
        </svg>
      );

    // ================= GRADE 7 STEPS =================
    case 'g7-step-1':
      return (
        <svg viewBox="0 0 320 220" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} aria-hidden="true">
          <rect width="320" height="220" rx="12" fill="#F0F9FF" />
          {/* Faucet */}
          <path d="M80 30V65H130V90" stroke="#64748B" strokeWidth="12" strokeLinecap="round" strokeLinejoin="round" />
          <ellipse cx="130" cy="105" rx="3" ry="5" fill="#0284C7" />
          <ellipse cx="130" cy="120" rx="3" ry="5" fill="#0284C7" />
          {/* Measuring cylinder */}
          <rect x="115" y="130" width="30" height="60" rx="3" fill="#FFFFFF" fillOpacity="0.5" stroke="#0F2A43" strokeWidth="1.5" />
          <rect x="117" y="160" width="26" height="28" fill="#38BDF8" fillOpacity="0.8" />
          {/* Stopwatch */}
          <circle cx="210" cy="120" r="28" fill="#FFFFFF" stroke="#0F2A43" strokeWidth="2" />
          <path d="M210 98V120L222 120" stroke="#DC2626" strokeWidth="2.5" strokeLinecap="round" />
          <text x="195" y="165" fill="#0284C7" fontSize="11" fontWeight="bold" fontFamily="sans-serif">300 sec</text>
          <text x="75" y="205" fill="#0F2A43" fontSize="11" fontWeight="bold" fontFamily="sans-serif">Measure mL in 300 Seconds</text>
        </svg>
      );
    case 'g7-step-2':
      return (
        <svg viewBox="0 0 320 220" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} aria-hidden="true">
          <rect width="320" height="220" rx="12" fill="#F0F9FF" />
          <rect x="30" y="30" width="260" height="135" rx="8" fill="#FFFFFF" stroke="#0284C7" strokeWidth="2" />
          <text x="45" y="55" fill="#0F2A43" fontSize="12" fontWeight="bold" fontFamily="sans-serif">Extrapolation Math</text>
          <text x="45" y="78" fill="#475569" fontSize="10" fontFamily="sans-serif">1. Flow rate = mL ÷ 5 min = 20 mL/min</text>
          <text x="45" y="98" fill="#475569" fontSize="10" fontFamily="sans-serif">2. Hourly = 20 × 60 = 1,200 mL/hr</text>
          <text x="45" y="118" fill="#475569" fontSize="10" fontFamily="sans-serif">3. Daily = 1.2 L × 24 = 28.8 L/day</text>
          <text x="45" y="145" fill="#DC2626" fontSize="11" fontWeight="bold" fontFamily="sans-serif">Monthly = 864 Litres Lost!</text>
          <text x="75" y="195" fill="#0F2A43" fontSize="11" fontWeight="bold" fontFamily="sans-serif">Calculate 30-Day Extrapolation</text>
        </svg>
      );
    case 'g7-step-3':
      return (
        <svg viewBox="0 0 320 220" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} aria-hidden="true">
          <rect width="320" height="220" rx="12" fill="#F0F9FF" />
          {/* Layer Sequence Blueprint */}
          <rect x="70" y="25" width="180" height="145" rx="6" fill="#FFFFFF" stroke="#0F2A43" strokeWidth="2" />
          <rect x="80" y="35" width="160" height="28" fill="#CBD5E1" />
          <text x="90" y="52" fill="#1E293B" fontSize="10" fontWeight="bold" fontFamily="sans-serif">1. Coarse Gravel (Top)</text>
          
          <rect x="80" y="65" width="160" height="32" fill="#FDE68A" />
          <text x="90" y="84" fill="#78350F" fontSize="10" fontWeight="bold" fontFamily="sans-serif">2. River Sand (Middle)</text>

          <rect x="80" y="99" width="160" height="28" fill="#334155" />
          <text x="90" y="116" fill="#FFFFFF" fontSize="10" fontWeight="bold" fontFamily="sans-serif">3. Activated Charcoal</text>

          <rect x="80" y="129" width="160" height="24" fill="#E2E8F0" />
          <text x="90" y="145" fill="#475569" fontSize="9" fontWeight="bold" fontFamily="sans-serif">4. Muslin Plug (Neck)</text>
          <text x="70" y="195" fill="#0F2A43" fontSize="11" fontWeight="bold" fontFamily="sans-serif">Sequence by Particle Porosity</text>
        </svg>
      );
    case 'g7-step-4':
      return (
        <svg viewBox="0 0 320 220" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} aria-hidden="true">
          <rect width="320" height="220" rx="12" fill="#F0F9FF" />
          {/* Bottle Filter Assembly */}
          <path d="M120 40H200L195 110L175 150V165H145V150L125 110L120 40Z" fill="#FFFFFF" stroke="#0F2A43" strokeWidth="2" />
          <rect x="122" y="50" width="76" height="20" fill="#94A3B8" />
          <rect x="123" y="70" width="74" height="25" fill="#FDE68A" />
          <rect x="130" y="95" width="60" height="25" fill="#1E293B" />
          {/* Pouring muddy water */}
          <g transform="translate(60, 20)">
            <path d="M20 15L45 35L30 50L5 30Z" fill="#78350F" stroke="#0F2A43" strokeWidth="1.5" />
            <path d="M40 38L65 55" stroke="#78350F" strokeWidth="2.5" strokeDasharray="3 2" />
          </g>
          {/* Collecting beaker */}
          <rect x="140" y="172" width="40" height="28" rx="2" fill="#BAE6FD" stroke="#0F2A43" strokeWidth="1.5" />
          <text x="80" y="212" fill="#0F2A43" fontSize="11" fontWeight="bold" fontFamily="sans-serif">Pour Turbid Sample Gently</text>
        </svg>
      );
    case 'g7-step-5':
      return (
        <svg viewBox="0 0 320 220" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} aria-hidden="true">
          <rect width="320" height="220" rx="12" fill="#F0F9FF" />
          {/* Secchi comparison */}
          <rect x="40" y="40" width="80" height="90" rx="4" fill="#78350F" fillOpacity="0.8" stroke="#0F2A43" strokeWidth="2" />
          <text x="50" y="150" fill="#78350F" fontSize="10" fontWeight="bold" fontFamily="sans-serif">Before: Turbid</text>

          <path d="M140 85L170 85M170 85L160 78M170 85L160 92" stroke="#0284C7" strokeWidth="3" strokeLinecap="round" />

          <rect x="190" y="40" width="80" height="90" rx="4" fill="#BAE6FD" fillOpacity="0.8" stroke="#0F2A43" strokeWidth="2" />
          <circle cx="230" cy="85" r="14" fill="#FFFFFF" stroke="#0F2A43" strokeWidth="1" />
          <path d="M230 71V99M216 85H244" stroke="#0F2A43" strokeWidth="1.5" />
          <text x="195" y="150" fill="#0284C7" fontSize="10" fontWeight="bold" fontFamily="sans-serif">After: Clear Target</text>
          <text x="80" y="195" fill="#0F2A43" fontSize="11" fontWeight="bold" fontFamily="sans-serif">Secchi Disk Clarity Rating</text>
        </svg>
      );

    // ================= GRADE 8 STEPS =================
    case 'g8-step-1':
      return (
        <svg viewBox="0 0 320 220" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} aria-hidden="true">
          <rect width="320" height="220" rx="12" fill="#F5F3FF" />
          {/* Training Cards sorting */}
          <rect x="30" y="30" width="60" height="75" rx="4" fill="#FFFFFF" stroke="#4F46E5" strokeWidth="1.5" />
          <circle cx="60" cy="60" r="15" fill="#3B82F6" />
          <text x="45" y="95" fill="#1E3A8A" fontSize="8" fontWeight="bold" fontFamily="sans-serif">Sci-Fi</text>

          <rect x="105" y="30" width="60" height="75" rx="4" fill="#FFFFFF" stroke="#4F46E5" strokeWidth="1.5" />
          <circle cx="135" cy="60" r="15" fill="#10B981" />
          <text x="120" y="95" fill="#065F46" fontSize="8" fontWeight="bold" fontFamily="sans-serif">Nature</text>

          {/* Ambiguous Edge Case Card */}
          <rect x="200" y="30" width="75" height="75" rx="4" fill="#FEE2E2" stroke="#DC2626" strokeWidth="2" strokeDasharray="4 2" />
          <text x="215" y="65" fill="#DC2626" fontSize="20" fontWeight="bold" fontFamily="sans-serif">?</text>
          <text x="208" y="95" fill="#991B1B" fontSize="8" fontWeight="bold" fontFamily="sans-serif">Edge Case</text>
          <text x="75" y="180" fill="#0F2A43" fontSize="11" fontWeight="bold" fontFamily="sans-serif">Simulate Training & Edge Cases</text>
        </svg>
      );
    case 'g8-step-2':
      return (
        <svg viewBox="0 0 320 220" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} aria-hidden="true">
          <rect width="320" height="220" rx="12" fill="#F5F3FF" />
          {/* Problem selection whiteboard */}
          <rect x="40" y="30" width="240" height="120" rx="6" fill="#FFFFFF" stroke="#4F46E5" strokeWidth="2" />
          <rect x="55" y="45" width="210" height="25" rx="4" fill="#EDE9FE" />
          <text x="65" y="61" fill="#4338CA" fontSize="9" fontWeight="bold" fontFamily="sans-serif">A. Library Book Recommender</text>
          <rect x="55" y="78" width="210" height="25" rx="4" fill="#F1F5F9" />
          <text x="65" y="94" fill="#475569" fontSize="9" fontFamily="sans-serif">B. Noise Level Predictor</text>
          <rect x="55" y="111" width="210" height="25" rx="4" fill="#F1F5F9" />
          <text x="65" y="127" fill="#475569" fontSize="9" fontFamily="sans-serif">C. Lost & Found Classifier</text>
          <text x="90" y="190" fill="#0F2A43" fontSize="11" fontWeight="bold" fontFamily="sans-serif">Scope School Problem</text>
        </svg>
      );
    case 'g8-step-3':
      return (
        <svg viewBox="0 0 320 220" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} aria-hidden="true">
          <rect width="320" height="220" rx="12" fill="#F5F3FF" />
          {/* 50-Record Data Grid */}
          <rect x="30" y="25" width="260" height="135" rx="6" fill="#FFFFFF" stroke="#0F2A43" strokeWidth="1.5" />
          <rect x="30" y="25" width="260" height="25" fill="#4F46E5" />
          <text x="40" y="41" fill="#FFFFFF" fontSize="9" fontWeight="bold" fontFamily="sans-serif">Student | Preferred Genre | Language | Rating</text>
          <line x1="30" y1="75" x2="290" y2="75" stroke="#E2E8F0" />
          <line x1="30" y1="105" x2="290" y2="105" stroke="#E2E8F0" />
          <line x1="30" y1="135" x2="290" y2="135" stroke="#E2E8F0" />
          <text x="40" y="65" fill="#334155" fontSize="8" fontFamily="sans-serif">Rohan · Sci-Fi · English · 5/5</text>
          <text x="40" y="95" fill="#334155" fontSize="8" fontFamily="sans-serif">Ananya · History · Hindi · 4/5</text>
          <text x="40" y="125" fill="#DC2626" fontSize="8" fontWeight="bold" fontFamily="sans-serif">Missing: Non-English Fiction!</text>
          <text x="75" y="195" fill="#0F2A43" fontSize="11" fontWeight="bold" fontFamily="sans-serif">Curate Representative Dataset</text>
        </svg>
      );
    case 'g8-step-4':
      return (
        <svg viewBox="0 0 320 220" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} aria-hidden="true">
          <rect width="320" height="220" rx="12" fill="#F5F3FF" />
          {/* Peer Bias Audit Warning */}
          <rect x="40" y="30" width="240" height="120" rx="8" fill="#FEF2F2" stroke="#EF4444" strokeWidth="2" />
          <circle cx="80" cy="70" r="20" fill="#DC2626" />
          <text x="75" y="78" fill="#FFFFFF" fontSize="22" fontWeight="bold" fontFamily="sans-serif">!</text>
          <text x="115" y="65" fill="#991B1B" fontSize="11" fontWeight="bold" fontFamily="sans-serif">BIAS AUDIT FLAGGED</text>
          <text x="115" y="85" fill="#B91C1C" fontSize="9" fontFamily="sans-serif">• 90% English books in sample</text>
          <text x="115" y="100" fill="#B91C1C" fontSize="9" fontFamily="sans-serif">• Excludes Grade 6 readers</text>
          <text x="80" y="190" fill="#0F2A43" fontSize="11" fontWeight="bold" fontFamily="sans-serif">Audit for Exclusion & Blindspots</text>
        </svg>
      );
    case 'g8-step-5':
      return (
        <svg viewBox="0 0 320 220" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} aria-hidden="true">
          <rect width="320" height="220" rx="12" fill="#F5F3FF" />
          {/* Human Shield Safeguard */}
          <rect x="30" y="55" width="80" height="50" rx="4" fill="#DBEAFE" stroke="#2563EB" strokeWidth="1.5" />
          <text x="40" y="80" fill="#1E40AF" fontSize="9" fontWeight="bold" fontFamily="sans-serif">AI Prediction</text>
          <text x="40" y="95" fill="#1E40AF" fontSize="8" fontFamily="sans-serif">Confidence 72%</text>

          <path d="M115 80L145 80" stroke="#4F46E5" strokeWidth="2" />

          {/* Human Shield Gateway */}
          <g transform="translate(150, 45)">
            <path d="M30 0L60 15V45C60 65 30 75 30 75C30 75 0 65 0 45V15L30 0Z" fill="#10B981" stroke="#0F2A43" strokeWidth="2" />
            <circle cx="30" cy="30" r="10" fill="#FFFFFF" />
            <path d="M20 52C20 44 25 40 30 40C35 40 40 44 40 52" stroke="#FFFFFF" strokeWidth="2" />
          </g>

          <path d="M215 80L245 80" stroke="#10B981" strokeWidth="2" />
          <rect x="250" y="55" width="60" height="50" rx="4" fill="#DCFCE7" stroke="#16A34A" strokeWidth="1.5" />
          <text x="256" y="80" fill="#14532D" fontSize="9" fontWeight="bold" fontFamily="sans-serif">Human</text>
          <text x="256" y="95" fill="#14532D" fontSize="9" fontWeight="bold" fontFamily="sans-serif">Approved</text>
          <text x="75" y="195" fill="#0F2A43" fontSize="11" fontWeight="bold" fontFamily="sans-serif">Human-in-the-Loop Override</text>
        </svg>
      );

    // ================= GRADE 9 STEPS =================
    case 'g9-step-1':
      return (
        <svg viewBox="0 0 320 220" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} aria-hidden="true">
          <rect width="320" height="220" rx="12" fill="#F8FAFC" />
          <rect x="40" y="25" width="110" height="150" rx="4" fill="#FFFFFF" stroke="#0F2A43" strokeWidth="2" />
          <rect x="50" y="35" width="90" height="10" fill="#0F2A43" />
          <rect x="50" y="55" width="70" height="6" fill="#64748B" />
          <rect x="50" y="67" width="90" height="4" fill="#CBD5E1" />
          <rect x="50" y="75" width="85" height="4" fill="#CBD5E1" />
          <rect x="50" y="83" width="90" height="4" fill="#CBD5E1" />
          {/* Executive Summary Callout */}
          <rect x="170" y="40" width="120" height="60" rx="4" fill="#EDE9FE" stroke="#7C3AED" strokeWidth="1.5" />
          <text x="180" y="60" fill="#5B21B6" fontSize="9" fontWeight="bold" fontFamily="sans-serif">Executive Abstract:</text>
          <text x="180" y="75" fill="#5B21B6" fontSize="8" fontFamily="sans-serif">Decision-makers need</text>
          <text x="180" y="88" fill="#5B21B6" fontSize="8" fontFamily="sans-serif">actionable brevity.</text>
          <text x="70" y="200" fill="#0F2A43" fontSize="11" fontWeight="bold" fontFamily="sans-serif">Deconstruct 2-Page Memo Structure</text>
        </svg>
      );
    case 'g9-step-2':
      return (
        <svg viewBox="0 0 320 220" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} aria-hidden="true">
          <rect width="320" height="220" rx="12" fill="#F8FAFC" />
          {/* Stakeholder 3-Column Matrix */}
          <rect x="25" y="30" width="270" height="130" rx="6" fill="#FFFFFF" stroke="#0F2A43" strokeWidth="2" />
          <rect x="25" y="30" width="90" height="25" fill="#FEE2E2" />
          <text x="35" y="47" fill="#991B1B" fontSize="9" fontWeight="bold" fontFamily="sans-serif">Merchants</text>

          <rect x="115" y="30" width="90" height="25" fill="#DCFCE7" />
          <text x="130" y="47" fill="#14532D" fontSize="9" fontWeight="bold" fontFamily="sans-serif">Parents</text>

          <rect x="205" y="30" width="90" height="25" fill="#DBEAFE" />
          <text x="220" y="47" fill="#1E40AF" fontSize="9" fontWeight="bold" fontFamily="sans-serif">Commuters</text>

          <text x="35" y="75" fill="#334155" fontSize="8" fontFamily="sans-serif">• Needs customer parking</text>
          <text x="125" y="75" fill="#334155" fontSize="8" fontFamily="sans-serif">• Wants speed tables</text>
          <text x="215" y="75" fill="#334155" fontSize="8" fontFamily="sans-serif">• Wants fast transit flow</text>
          <text x="80" y="195" fill="#0F2A43" fontSize="11" fontWeight="bold" fontFamily="sans-serif">Map Competing Stakeholder Trade-offs</text>
        </svg>
      );
    case 'g9-step-3':
      return (
        <svg viewBox="0 0 320 220" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} aria-hidden="true">
          <rect width="320" height="220" rx="12" fill="#F8FAFC" />
          {/* Evidence Data & Citation */}
          <rect x="30" y="25" width="260" height="140" rx="6" fill="#FFFFFF" stroke="#0F2A43" strokeWidth="2" />
          <rect x="45" y="90" width="30" height="40" fill="#3B82F6" />
          <rect x="90" y="65" width="30" height="65" fill="#EF4444" />
          <text x="45" y="145" fill="#64748B" fontSize="8" fontFamily="sans-serif">Morning</text>
          <text x="90" y="145" fill="#64748B" fontSize="8" fontFamily="sans-serif">Afternoon</text>
          {/* Footnote Citation Box */}
          <rect x="140" y="45" width="140" height="75" rx="4" fill="#F1F5F9" />
          <text x="148" y="65" fill="#0F2A43" fontSize="9" fontWeight="bold" fontFamily="sans-serif">Empirical Footnote:</text>
          <text x="148" y="80" fill="#64748B" fontSize="8" fontFamily="sans-serif">[1] Ward 14 Traffic Audit,</text>
          <text x="148" y="92" fill="#64748B" fontSize="8" fontFamily="sans-serif">Oct 2024 (n = 420 vehicles)</text>
          <text x="85" y="200" fill="#0F2A43" fontSize="11" fontWeight="bold" fontFamily="sans-serif">Integrate Cited Statistical Data</text>
        </svg>
      );
    case 'g9-step-4':
      return (
        <svg viewBox="0 0 320 220" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} aria-hidden="true">
          <rect width="320" height="220" rx="12" fill="#F8FAFC" />
          {/* SMART Action Mandates */}
          <rect x="30" y="25" width="260" height="135" rx="6" fill="#FFFFFF" stroke="#0F2A43" strokeWidth="2" />
          <text x="45" y="48" fill="#0F2A43" fontSize="11" fontWeight="bold" fontFamily="sans-serif">SMART Recommendation Checklist</text>
          <circle cx="55" cy="70" r="8" fill="#10B981" />
          <text x="52" y="74" fill="#FFFFFF" fontSize="10" fontWeight="bold" fontFamily="sans-serif">S</text>
          <text x="70" y="73" fill="#334155" fontSize="9" fontFamily="sans-serif">Specific: Install 2 tabletop speed ramps</text>

          <circle cx="55" cy="95" r="8" fill="#3B82F6" />
          <text x="51" y="99" fill="#FFFFFF" fontSize="10" fontWeight="bold" fontFamily="sans-serif">M</text>
          <text x="70" y="98" fill="#334155" fontSize="9" fontFamily="sans-serif">Measurable: Reduce peak speed to 25 km/h</text>

          <circle cx="55" cy="120" r="8" fill="#F59E0B" />
          <text x="52" y="124" fill="#FFFFFF" fontSize="10" fontWeight="bold" fontFamily="sans-serif">A</text>
          <text x="70" y="123" fill="#334155" fontSize="9" fontFamily="sans-serif">Authority: Designated to Ward PWD Engineer</text>
          <text x="75" y="195" fill="#0F2A43" fontSize="11" fontWeight="bold" fontFamily="sans-serif">Draft Actionable SMART Mandates</text>
        </svg>
      );
    case 'g9-step-5':
      return (
        <svg viewBox="0 0 320 220" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} aria-hidden="true">
          <rect width="320" height="220" rx="12" fill="#F8FAFC" />
          {/* Legislative Hearing Defense */}
          <circle cx="65" cy="70" r="18" fill="#D4A373" stroke="#0F2A43" strokeWidth="2" />
          <rect x="48" y="90" width="34" height="60" rx="4" fill="#0F2A43" />
          <rect x="40" y="115" width="50" height="40" rx="2" fill="#64748B" stroke="#0F2A43" strokeWidth="1.5" />
          {/* Standing Committee questioning */}
          <rect x="150" y="45" width="140" height="65" rx="6" fill="#FEE2E2" stroke="#DC2626" strokeWidth="1.5" />
          <text x="160" y="65" fill="#991B1B" fontSize="9" fontWeight="bold" fontFamily="sans-serif">Committee Grill:</text>
          <text x="160" y="80" fill="#991B1B" fontSize="8" fontFamily="sans-serif">"Who pays for speed</text>
          <text x="160" y="92" fill="#991B1B" fontSize="8" fontFamily="sans-serif">ramps in Ward budget?"</text>
          <text x="75" y="195" fill="#0F2A43" fontSize="11" fontWeight="bold" fontFamily="sans-serif">Defend Before Peer Committee</text>
        </svg>
      );

    default:
      return (
        <svg viewBox="0 0 320 220" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} aria-hidden="true">
          <rect width="320" height="220" rx="12" fill="#F1F5F9" />
          <circle cx="160" cy="110" r="40" fill="#E2E8F0" stroke="#94A3B8" strokeWidth="2" />
          <text x="145" y="115" fill="#64748B" fontSize="14" fontWeight="bold" fontFamily="sans-serif">Step</text>
        </svg>
      );
  }
};
