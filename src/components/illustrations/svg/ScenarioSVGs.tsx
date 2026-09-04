import React from 'react';

interface ScenarioSVGProps {
  className?: string;
}

// ================= GRADE 3: NEIGHBOURHOOD DATA WALK SCENARIO =================
export const Grade3ScenarioSVG: React.FC<ScenarioSVGProps> = ({ className = "w-full h-auto" }) => {
  return (
    <svg 
      viewBox="0 0 800 450" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-label="Grade 3 Neighbourhood Data Walk scenario illustration"
      role="img"
    >
      <rect width="800" height="450" rx="16" fill="#F7F1E8" />
      
      {/* Sky & Background Horizon */}
      <path d="M0 0H800V320C800 320 620 300 400 305C180 310 0 320 0 320V0Z" fill="#E8F1F2" />
      
      {/* Distant School Building / Shaded Veranda */}
      <rect x="60" y="140" width="220" height="150" rx="4" fill="#E2E8F0" stroke="#0F2A43" strokeWidth="2" />
      <path d="M40 140L170 80L300 140H40Z" fill="#C2410C" stroke="#0F2A43" strokeWidth="2" />
      <rect x="85" y="180" width="35" height="50" rx="2" fill="#FFFFFF" stroke="#0F2A43" strokeWidth="2" />
      <rect x="150" y="180" width="35" height="50" rx="2" fill="#FFFFFF" stroke="#0F2A43" strokeWidth="2" />
      <path d="M210 180H260V290H210V180Z" fill="#0F2A43" />
      
      {/* Veranda Teacher Figure (Encouraging Facilitator) */}
      <circle cx="235" cy="165" r="14" fill="#D4A373" stroke="#0F2A43" strokeWidth="2" />
      <path d="M225 155C225 155 235 150 245 155C245 160 245 165 240 168" stroke="#0F2A43" strokeWidth="2" fill="#0F2A43" />
      <path d="M220 180C220 180 230 178 235 178C240 178 250 180 250 220H220V180Z" fill="#2B8C87" stroke="#0F2A43" strokeWidth="2" />
      {/* Teacher speech bubble */}
      <rect x="255" y="140" width="135" height="36" rx="8" fill="#FFFFFF" stroke="#2B8C87" strokeWidth="2" />
      <text x="265" y="162" fill="#0F2A43" fontSize="12" fontWeight="bold" fontFamily="sans-serif">Spot & Tally in 5s!</text>
      <path d="M255 160L245 165L255 170V160Z" fill="#FFFFFF" stroke="#2B8C87" strokeWidth="2" />

      {/* School Perimeter Pathway Ground */}
      <path d="M0 310C180 300 400 310 800 300V450H0V310Z" fill="#F1ECE1" stroke="#0F2A43" strokeWidth="2" />
      <path d="M120 450L320 310H460L240 450H120Z" fill="#E2DAC8" stroke="#D1C7B2" strokeWidth="1.5" strokeDasharray="6 4" />

      {/* Feature 1: Flowering Neem Tree */}
      <path d="M680 340C680 310 660 250 655 190C665 180 675 160 670 140C650 100 580 80 540 110C510 130 500 170 520 200C510 230 525 280 535 340H680Z" fill="#2B8C87" fillOpacity="0.15" />
      <path d="M610 340V220C610 220 590 190 580 170M610 210C610 210 630 180 645 165" stroke="#78350F" strokeWidth="10" strokeLinecap="round" />
      {/* Foliage Canopy */}
      <circle cx="560" cy="140" r="45" fill="#2B8C87" stroke="#0F2A43" strokeWidth="2" />
      <circle cx="630" cy="130" r="42" fill="#226763" stroke="#0F2A43" strokeWidth="2" />
      <circle cx="600" cy="95" r="40" fill="#38A39E" stroke="#0F2A43" strokeWidth="2" />
      {/* Little yellow blossoms */}
      <circle cx="550" cy="130" r="4" fill="#FBBF24" />
      <circle cx="610" cy="110" r="4" fill="#FBBF24" />
      <circle cx="640" cy="140" r="4" fill="#FBBF24" />
      <circle cx="580" cy="160" r="4" fill="#FBBF24" />

      {/* Feature 2: Clean School Waste Bin */}
      <rect x="470" y="275" width="36" height="50" rx="5" fill="#2B8C87" stroke="#0F2A43" strokeWidth="2" />
      <path d="M465 275H511V268H465V275Z" fill="#0F2A43" />
      <path d="M488 285V310M480 290V310M496 290V310" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round" />

      {/* Feature 3: Campus Bicycle Stand */}
      <circle cx="710" cy="350" r="28" stroke="#0F2A43" strokeWidth="3" fill="#FFFFFF" />
      <circle cx="775" cy="350" r="28" stroke="#0F2A43" strokeWidth="3" fill="#FFFFFF" />
      <path d="M710 350L735 320L755 350L775 350M735 320L745 295H760M745 295L755 350" stroke="#0F2A43" strokeWidth="3" strokeLinecap="round" />
      <circle cx="735" cy="320" r="5" fill="#E7853C" />

      {/* Student 1: The Spotter (Girl with braids, pointing) */}
      <g transform="translate(320, 210)">
        {/* Shadow */}
        <ellipse cx="40" cy="180" rx="30" ry="8" fill="#0F2A43" fillOpacity="0.12" />
        {/* Legs */}
        <rect x="25" y="115" width="10" height="60" rx="5" fill="#0F2A43" />
        <rect x="42" y="115" width="10" height="60" rx="5" fill="#0F2A43" />
        <ellipse cx="30" cy="175" rx="9" ry="5" fill="#1E293B" />
        <ellipse cx="47" cy="175" rx="9" ry="5" fill="#1E293B" />
        {/* Skirt / Tunic */}
        <path d="M15 80L22 120H58L65 80Z" fill="#C2410C" stroke="#0F2A43" strokeWidth="2" />
        {/* Shirt */}
        <path d="M20 40H60V85H20V40Z" fill="#FFFFFF" stroke="#0F2A43" strokeWidth="2" />
        <path d="M35 40V70L40 78L45 70V40" fill="#2B8C87" stroke="#0F2A43" strokeWidth="1.5" />
        {/* Head & Face */}
        <circle cx="40" cy="22" r="18" fill="#BC8A5F" stroke="#0F2A43" strokeWidth="2" />
        {/* Hair with side braid */}
        <path d="M22 22C22 10 32 4 44 4C56 4 60 14 58 24C52 18 36 18 22 22Z" fill="#1E293B" />
        <path d="M54 22C58 28 64 36 62 48" stroke="#1E293B" strokeWidth="5" strokeLinecap="round" />
        {/* Eyes & Smile */}
        <circle cx="45" cy="20" r="2" fill="#0F2A43" />
        <path d="M43 28C45 30 49 30 51 28" stroke="#0F2A43" strokeWidth="1.5" strokeLinecap="round" />
        {/* Arm pointing forward */}
        <path d="M50 48L85 42" stroke="#BC8A5F" strokeWidth="8" strokeLinecap="round" />
        <circle cx="87" cy="42" r="4" fill="#BC8A5F" />
      </g>

      {/* Student 2: The Tally Recorder (Boy with clipboard & spectacles) */}
      <g transform="translate(230, 225)">
        {/* Shadow */}
        <ellipse cx="35" cy="165" rx="28" ry="7" fill="#0F2A43" fillOpacity="0.12" />
        {/* Legs */}
        <rect x="20" y="105" width="11" height="55" rx="5" fill="#0F2A43" />
        <rect x="38" y="105" width="11" height="55" rx="5" fill="#0F2A43" />
        <ellipse cx="25" cy="160" rx="9" ry="5" fill="#1E293B" />
        <ellipse cx="43" cy="160" rx="9" ry="5" fill="#1E293B" />
        {/* Shorts / Uniform */}
        <rect x="16" y="70" width="38" height="40" rx="4" fill="#1E3A8A" stroke="#0F2A43" strokeWidth="2" />
        <rect x="18" y="32" width="34" height="42" rx="4" fill="#FFFFFF" stroke="#0F2A43" strokeWidth="2" />
        {/* Head & Spectacles */}
        <circle cx="35" cy="18" r="16" fill="#D4A373" stroke="#0F2A43" strokeWidth="2" />
        <path d="M22 18C22 8 30 3 42 4C49 5 51 12 50 18C44 14 30 14 22 18Z" fill="#1E293B" />
        {/* Spectacles frame */}
        <rect x="36" y="15" width="10" height="8" rx="2" stroke="#0F2A43" strokeWidth="1.5" fill="none" />
        {/* Clipboard held in hands */}
        <rect x="42" y="45" width="38" height="52" rx="4" fill="#92400E" stroke="#0F2A43" strokeWidth="2" />
        <rect x="52" y="42" width="18" height="6" rx="2" fill="#D1D5DB" stroke="#0F2A43" strokeWidth="1" />
        <rect x="45" y="50" width="32" height="44" rx="2" fill="#FFFFFF" />
        {/* Visible Tally Marks on the Sheet! */}
        <path d="M50 56V66M54 56V66M58 56V66M62 56V66M48 64L64 58" stroke="#2563EB" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M50 72V80M54 72V80M58 72V80" stroke="#2563EB" strokeWidth="1.5" strokeLinecap="round" />
        {/* Arm holding pencil */}
        <path d="M30 45L48 60" stroke="#D4A373" strokeWidth="7" strokeLinecap="round" />
      </g>

      {/* Informational Callout Badge / Legend */}
      <g transform="translate(480, 20)">
        <rect width="300" height="90" rx="12" fill="#FFFFFF" stroke="#0F2A43" strokeWidth="2" filter="drop-shadow(0 4px 6px rgba(0,0,0,0.05))" />
        <rect x="12" y="12" width="28" height="28" rx="6" fill="#2B8C87" />
        <text x="21" y="31" fill="#FFFFFF" fontSize="16" fontWeight="bold" fontFamily="sans-serif">1</text>
        <text x="48" y="27" fill="#0F2A43" fontSize="14" fontWeight="bold" fontFamily="sans-serif">Data Detective Roles</text>
        <text x="48" y="45" fill="#5E6B77" fontSize="11" fontFamily="sans-serif">Spotter: Scans perimeter features</text>
        <text x="48" y="60" fill="#5E6B77" fontSize="11" fontFamily="sans-serif">Recorder: Logs 5-bundle tally marks</text>
        <text x="48" y="75" fill="#2B8C87" fontSize="11" fontWeight="600" fontFamily="sans-serif">Target: Trees, Waste Bins & Bicycles</text>
      </g>
    </svg>
  );
};

// ================= GRADE 6: COMMUNITY PROBLEM EXPLORER SCENARIO =================
export const Grade6ScenarioSVG: React.FC<ScenarioSVGProps> = ({ className = "w-full h-auto" }) => {
  return (
    <svg 
      viewBox="0 0 800 450" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-label="Grade 6 Community Problem Explorer scenario illustration"
      role="img"
    >
      <rect width="800" height="450" rx="16" fill="#FDFBF7" />
      
      {/* Classroom Background Wall & Windows */}
      <rect x="0" y="0" width="800" height="280" fill="#F1F5F9" />
      <rect x="60" y="30" width="160" height="110" rx="8" fill="#E2E8F0" stroke="#CBD5E1" strokeWidth="2" />
      <path d="M140 30V140M60 85H220" stroke="#94A3B8" strokeWidth="2" />
      
      {/* Green School Chalkboard with "5 Whys" Method */}
      <rect x="460" y="25" width="280" height="130" rx="8" fill="#1E392A" stroke="#854D0E" strokeWidth="6" />
      <text x="480" y="55" fill="#FEF08A" fontSize="13" fontWeight="bold" fontFamily="sans-serif">5 Whys Root-Cause Method</text>
      <path d="M480 70L500 70L490 80" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round" />
      <text x="510" y="75" fill="#FFFFFF" fontSize="11" fontFamily="sans-serif">1. Classroom floor is dusty</text>
      <text x="510" y="95" fill="#FFFFFF" fontSize="11" fontFamily="sans-serif">2. Why? Corridor swept dry at break</text>
      <text x="510" y="115" fill="#A7F3D0" fontSize="11" fontFamily="sans-serif">3. Root: Need wet-mop schedule</text>

      {/* Classroom Floor */}
      <rect x="0" y="280" width="800" height="170" fill="#E5E7EB" stroke="#0F2A43" strokeWidth="2" />
      
      {/* Large Central Collaborative Team Table */}
      <ellipse cx="400" cy="360" rx="340" ry="75" fill="#D97706" fillOpacity="0.15" />
      <ellipse cx="400" cy="350" rx="330" ry="65" fill="#F8FAFC" stroke="#0F2A43" strokeWidth="3" />
      
      {/* Large Problem Tree Butcher Paper Sheet on Table */}
      <rect x="220" y="305" width="360" height="90" rx="6" fill="#FFFBEB" stroke="#B45309" strokeWidth="2" />
      
      {/* Mini Tree Diagram on the Butcher Paper */}
      <path d="M380 380V345C380 345 365 330 350 325M380 345C380 345 395 330 410 325" stroke="#78350F" strokeWidth="4" strokeLinecap="round" />
      {/* Tree Roots */}
      <path d="M380 380L360 392M380 380L400 392M380 380V395" stroke="#DC2626" strokeWidth="2.5" strokeLinecap="round" />
      {/* Sticky Notes on Tree */}
      <rect x="330" y="315" width="22" height="15" fill="#86EFAC" stroke="#16A34A" strokeWidth="1" />
      <rect x="405" y="315" width="22" height="15" fill="#86EFAC" stroke="#16A34A" strokeWidth="1" />
      <rect x="370" y="338" width="24" height="16" fill="#FDE047" stroke="#CA8A04" strokeWidth="1" />
      <rect x="350" y="380" width="20" height="12" fill="#FCA5A5" stroke="#DC2626" strokeWidth="1" />
      <rect x="390" y="380" width="20" height="12" fill="#FCA5A5" stroke="#DC2626" strokeWidth="1" />
      
      {/* Student 1 (Left - Scribe with glasses and yellow sweater) */}
      <g transform="translate(140, 200)">
        <ellipse cx="40" cy="180" rx="30" ry="8" fill="#0F2A43" fillOpacity="0.12" />
        <rect x="20" y="100" width="40" height="50" rx="6" fill="#EAB308" stroke="#0F2A43" strokeWidth="2" />
        <circle cx="40" cy="55" r="22" fill="#D4A373" stroke="#0F2A43" strokeWidth="2" />
        <path d="M22 55C22 35 35 30 50 30C62 30 65 42 62 55C52 48 35 48 22 55Z" fill="#1E293B" />
        <rect x="32" y="52" width="12" height="10" rx="2" stroke="#0F2A43" strokeWidth="1.5" fill="none" />
        <rect x="48" y="52" width="12" height="10" rx="2" stroke="#0F2A43" strokeWidth="1.5" fill="none" />
        {/* Arm drawing with marker */}
        <path d="M45 110L90 135" stroke="#D4A373" strokeWidth="8" strokeLinecap="round" />
        <rect x="88" y="130" width="15" height="6" rx="2" fill="#2563EB" />
      </g>

      {/* Student 2 (Wheelchair user, smiling with interview quote card) */}
      <g transform="translate(260, 160)">
        {/* Wheelchair back and wheels */}
        <circle cx="30" cy="140" r="30" stroke="#0F2A43" strokeWidth="4" fill="none" />
        <path d="M30 140L45 110H20V60" stroke="#0F2A43" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
        <rect x="15" y="80" width="45" height="45" rx="6" fill="#2563EB" stroke="#0F2A43" strokeWidth="2" />
        <circle cx="38" cy="45" r="20" fill="#BC8A5F" stroke="#0F2A43" strokeWidth="2" />
        <path d="M20 45C20 28 32 25 48 25C58 25 60 35 58 45C48 38 32 38 20 45Z" fill="#0F172A" />
        {/* Holding Interview Quote Card */}
        <rect x="52" y="90" width="55" height="35" rx="4" fill="#FFFFFF" stroke="#E7853C" strokeWidth="2" />
        <text x="58" y="105" fill="#E7853C" fontSize="8" fontWeight="bold" fontFamily="sans-serif">"QUOTE"</text>
        <text x="58" y="118" fill="#1E293B" fontSize="7" fontFamily="sans-serif">Canteen Staff</text>
      </g>

      {/* Student 3 (Right - Systems Thinker, placing root causes) */}
      <g transform="translate(560, 190)">
        <ellipse cx="40" cy="180" rx="30" ry="8" fill="#0F2A43" fillOpacity="0.12" />
        <rect x="20" y="95" width="40" height="55" rx="6" fill="#0D9488" stroke="#0F2A43" strokeWidth="2" />
        <circle cx="40" cy="50" r="20" fill="#E0A96D" stroke="#0F2A43" strokeWidth="2" />
        <path d="M22 50C22 32 35 28 50 28C62 28 62 40 60 50Z" fill="#1E293B" />
        <path d="M30 100L-10 135" stroke="#E0A96D" strokeWidth="8" strokeLinecap="round" />
        <rect x="-20" y="130" width="16" height="14" rx="2" fill="#F87171" stroke="#DC2626" strokeWidth="1" />
      </g>

      {/* Informational Callout Badge */}
      <g transform="translate(30, 20)">
        <rect width="270" height="80" rx="10" fill="#FFFFFF" stroke="#0F2A43" strokeWidth="2" filter="drop-shadow(0 4px 6px rgba(0,0,0,0.05))" />
        <rect x="12" y="12" width="26" height="26" rx="5" fill="#E7853C" />
        <text x="20" y="30" fill="#FFFFFF" fontSize="15" fontWeight="bold" fontFamily="sans-serif">6</text>
        <text x="46" y="26" fill="#0F2A43" fontSize="13" fontWeight="bold" fontFamily="sans-serif">Problem Tree Anatomy</text>
        <text x="46" y="42" fill="#16A34A" fontSize="11" fontWeight="600" fontFamily="sans-serif">• Leaves = Visible Symptoms</text>
        <text x="46" y="55" fill="#CA8A04" fontSize="11" fontWeight="600" fontFamily="sans-serif">• Trunk = Daily Bottleneck</text>
        <text x="46" y="68" fill="#DC2626" fontSize="11" fontWeight="600" fontFamily="sans-serif">• Roots = Structural Causes</text>
      </g>
    </svg>
  );
};

// ================= GRADE 7: WATER AUDIT & FILTRATION SCENARIO =================
export const Grade7ScenarioSVG: React.FC<ScenarioSVGProps> = ({ className = "w-full h-auto" }) => {
  return (
    <svg 
      viewBox="0 0 800 450" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-label="Grade 7 Water Audit and Filtration Challenge scenario illustration"
      role="img"
    >
      <rect width="800" height="450" rx="16" fill="#F0F9FF" />
      
      {/* Science Wet Lab Wall & Tile Backsplash */}
      <rect x="0" y="0" width="800" height="260" fill="#E0F2FE" />
      {/* Tiled Grid Lines */}
      <path d="M0 65H800M0 130H800M0 195H800M100 0V260M200 0V260M300 0V260M400 0V260M500 0V260M600 0V260M700 0V260" stroke="#BAE6FD" strokeWidth="1" />
      
      {/* Safety Lab Protocol Poster on Wall */}
      <rect x="60" y="30" width="180" height="90" rx="6" fill="#FFFFFF" stroke="#0284C7" strokeWidth="2" />
      <rect x="70" y="40" width="20" height="20" rx="4" fill="#DC2626" />
      <text x="76" y="55" fill="#FFFFFF" fontSize="14" fontWeight="bold" fontFamily="sans-serif">!</text>
      <text x="96" y="52" fill="#0F2A43" fontSize="11" fontWeight="bold" fontFamily="sans-serif">Safety Precaution</text>
      <text x="96" y="68" fill="#475569" fontSize="9" fontFamily="sans-serif">Filtered water is non-potable.</text>
      <text x="96" y="80" fill="#DC2626" fontSize="9" fontWeight="bold" fontFamily="sans-serif">Requires boiling before drink.</text>

      {/* Lab Countertop with Drainage Sink */}
      <rect x="0" y="250" width="800" height="30" fill="#334155" stroke="#0F2A43" strokeWidth="2" />
      <rect x="0" y="280" width="800" height="170" fill="#1E293B" />
      
      {/* Lab Station 1: Tap Drip Audit Area (Left) */}
      <g transform="translate(80, 150)">
        {/* Faucet Pipe */}
        <path d="M60 0V50H110V80" stroke="#94A3B8" strokeWidth="16" strokeLinecap="round" strokeLinejoin="round" />
        <circle cx="110" cy="50" r="14" fill="#0284C7" stroke="#0F2A43" strokeWidth="2" />
        {/* Dripping Water Drops */}
        <ellipse cx="110" cy="95" rx="3" ry="5" fill="#38BDF8" />
        <ellipse cx="110" cy="115" rx="4" ry="7" fill="#38BDF8" />
        {/* Measuring Cylinder */}
        <rect x="92" y="130" width="36" height="90" rx="4" fill="#FFFFFF" fillOpacity="0.4" stroke="#0F2A43" strokeWidth="2" />
        {/* Graduation Marks */}
        <path d="M92 150H105M92 170H105M92 190H105M92 210H105" stroke="#0284C7" strokeWidth="1.5" />
        <rect x="94" y="180" width="32" height="38" rx="2" fill="#38BDF8" fillOpacity="0.7" />
        {/* Stopwatch Display */}
        <circle cx="165" cy="170" r="22" fill="#FFFFFF" stroke="#0F2A43" strokeWidth="2" />
        <path d="M165 152V170L175 170" stroke="#DC2626" strokeWidth="2" strokeLinecap="round" />
        <text x="145" y="205" fill="#BAE6FD" fontSize="10" fontWeight="bold" fontFamily="sans-serif">300s Audit</text>
      </g>

      {/* Lab Station 2: Inverted Bottle Gravity Filtration Column (Center-Right) */}
      <g transform="translate(360, 100)">
        {/* Ring Stand Base & Rod */}
        <rect x="20" y="260" width="120" height="16" rx="3" fill="#64748B" stroke="#0F2A43" strokeWidth="2" />
        <rect x="75" y="30" width="10" height="230" fill="#64748B" stroke="#0F2A43" strokeWidth="2" />
        {/* Ring Clamp */}
        <path d="M85 90H140" stroke="#0F2A43" strokeWidth="4" />
        <ellipse cx="170" cy="90" rx="35" ry="10" fill="none" stroke="#0F2A43" strokeWidth="3" />

        {/* Clear Cut 2L Inverted Bottle */}
        <path d="M135 60H205L205 130L180 200V225H160V200L135 130V60Z" fill="#FFFFFF" fillOpacity="0.3" stroke="#0F2A43" strokeWidth="2.5" />
        
        {/* Layer 1 (Top): Coarse Gravel */}
        <path d="M136 75H204V105H136V75Z" fill="#CBD5E1" stroke="#94A3B8" strokeWidth="1" />
        <circle cx="145" cy="85" r="5" fill="#64748B" />
        <circle cx="160" cy="92" r="6" fill="#475569" />
        <circle cx="175" cy="84" r="5" fill="#64748B" />
        <circle cx="192" cy="90" r="5.5" fill="#334155" />
        <text x="215" y="93" fill="#0F2A43" fontSize="10" fontWeight="bold" fontFamily="sans-serif">1. Coarse Gravel</text>

        {/* Layer 2: Clean River Sand */}
        <path d="M136 105H204V145H136V105Z" fill="#FDE68A" stroke="#F59E0B" strokeWidth="1" />
        <text x="215" y="128" fill="#0F2A43" fontSize="10" fontWeight="bold" fontFamily="sans-serif">2. River Sand</text>

        {/* Layer 3: Activated Charcoal Bits */}
        <path d="M145 145H195L180 180H160L145 145Z" fill="#1E293B" stroke="#0F172A" strokeWidth="1" />
        <text x="215" y="165" fill="#0F2A43" fontSize="10" fontWeight="bold" fontFamily="sans-serif">3. Charcoal</text>

        {/* Layer 4: Clean Muslin Cloth / Cotton Plug */}
        <rect x="160" y="200" width="20" height="15" fill="#F8FAFC" stroke="#CBD5E1" strokeWidth="1" />
        <text x="215" y="210" fill="#0F2A43" fontSize="10" fontWeight="bold" fontFamily="sans-serif">4. Muslin Plug</text>

        {/* Collecting Beaker with Clean Filtrate */}
        <rect x="150" y="235" width="40" height="40" rx="3" fill="#E0F2FE" fillOpacity="0.8" stroke="#0F2A43" strokeWidth="2" />
        <path d="M170 226V240" stroke="#38BDF8" strokeWidth="2" strokeDasharray="3 2" />
        <ellipse cx="170" cy="245" rx="15" ry="4" fill="#38BDF8" fillOpacity="0.5" />
      </g>

      {/* Student (Investigator Pouring Turbid Water) */}
      <g transform="translate(230, 80)">
        <ellipse cx="40" cy="260" rx="25" ry="7" fill="#0F2A43" fillOpacity="0.15" />
        {/* Lab Apron & Body */}
        <rect x="20" y="120" width="45" height="120" rx="6" fill="#FFFFFF" stroke="#0F2A43" strokeWidth="2" />
        <circle cx="42" cy="70" r="22" fill="#BC8A5F" stroke="#0F2A43" strokeWidth="2" />
        <path d="M25 70C25 45 35 40 55 40C68 40 68 55 65 70Z" fill="#1E293B" />
        {/* Safety Goggles */}
        <rect x="35" y="65" width="24" height="12" rx="4" fill="#BAE6FD" fillOpacity="0.6" stroke="#0284C7" strokeWidth="1.5" />
        {/* Arm holding beaker pouring dirty water */}
        <path d="M45 130L95 100" stroke="#BC8A5F" strokeWidth="8" strokeLinecap="round" />
        {/* Beaker tilted */}
        <path d="M95 90L115 110L100 125L80 105Z" fill="#78350F" fillOpacity="0.8" stroke="#0F2A43" strokeWidth="2" />
        <path d="M110 115L135 130" stroke="#78350F" strokeWidth="3" strokeDasharray="4 2" />
      </g>

      {/* Informational Math Callout Badge */}
      <g transform="translate(520, 20)">
        <rect width="250" height="95" rx="10" fill="#FFFFFF" stroke="#0F2A43" strokeWidth="2" filter="drop-shadow(0 4px 6px rgba(0,0,0,0.05))" />
        <rect x="12" y="12" width="26" height="26" rx="5" fill="#0F2A43" />
        <text x="20" y="30" fill="#FFFFFF" fontSize="15" fontWeight="bold" fontFamily="sans-serif">7</text>
        <text x="46" y="26" fill="#0F2A43" fontSize="12" fontWeight="bold" fontFamily="sans-serif">Audit Projection Formula</text>
        <text x="46" y="44" fill="#0284C7" fontSize="11" fontFamily="sans-serif">Rate = (mL in 300s) ÷ 5 = mL/min</text>
        <text x="46" y="60" fill="#0F2A43" fontSize="11" fontFamily="sans-serif">Daily = (Rate × 60 × 24) ÷ 1000 L</text>
        <text x="46" y="76" fill="#DC2626" fontSize="11" fontWeight="bold" fontFamily="sans-serif">Monthly = Daily × 30 Days</text>
      </g>
    </svg>
  );
};

// ================= GRADE 8: AI ETHICS STUDIO SCENARIO =================
export const Grade8ScenarioSVG: React.FC<ScenarioSVGProps> = ({ className = "w-full h-auto" }) => {
  return (
    <svg 
      viewBox="0 0 800 450" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-label="Grade 8 AI Ethics Design Studio scenario illustration"
      role="img"
    >
      <rect width="800" height="450" rx="16" fill="#F5F3FF" />
      
      {/* Studio Grid Wall */}
      <rect x="0" y="0" width="800" height="260" fill="#EDE9FE" />
      <path d="M0 50H800M0 100H800M0 150H800M0 200H800M100 0V260M200 0V260M300 0V260M400 0V260M500 0V260M600 0V260M700 0V260" stroke="#DDD6FE" strokeWidth="1" />
      
      {/* Studio Floor */}
      <rect x="0" y="260" width="800" height="190" fill="#F8FAFC" stroke="#0F2A43" strokeWidth="2" />
      
      {/* Large AI Design Canvas Board (Center Wall Mount) */}
      <g transform="translate(190, 20)">
        <rect width="420" height="210" rx="10" fill="#FFFFFF" stroke="#4F46E5" strokeWidth="3" filter="drop-shadow(0 6px 12px rgba(79,70,229,0.1))" />
        <rect x="10" y="10" width="400" height="28" rx="6" fill="#4F46E5" />
        <text x="25" y="29" fill="#FFFFFF" fontSize="13" fontWeight="bold" fontFamily="sans-serif">RESPONSIBLE AI DESIGN CANVAS · Grade 8</text>
        
        {/* 4 Quadrants Divider */}
        <line x1="210" y1="45" x2="210" y2="200" stroke="#CBD5E1" strokeWidth="2" strokeDasharray="4 4" />
        <line x1="15" y1="122" x2="405" y2="122" stroke="#CBD5E1" strokeWidth="2" strokeDasharray="4 4" />
        
        {/* Quadrant 1: Input Data (Blue) */}
        <rect x="25" y="52" width="80" height="18" rx="3" fill="#DBEAFE" />
        <text x="32" y="65" fill="#1E40AF" fontSize="10" fontWeight="bold" fontFamily="sans-serif">1. INPUT DATA</text>
        <rect x="25" y="75" width="45" height="36" rx="3" fill="#93C5FD" stroke="#1D4ED8" strokeWidth="1" />
        <text x="30" y="96" fill="#1E3A8A" fontSize="8" fontFamily="sans-serif">Genres</text>
        <rect x="75" y="75" width="45" height="36" rx="3" fill="#93C5FD" stroke="#1D4ED8" strokeWidth="1" />
        <text x="80" y="96" fill="#1E3A8A" fontSize="8" fontFamily="sans-serif">History</text>

        {/* Quadrant 2: Model Task (Yellow) */}
        <rect x="225" y="52" width="85" height="18" rx="3" fill="#FEF3C7" />
        <text x="232" y="65" fill="#B45309" fontSize="10" fontWeight="bold" fontFamily="sans-serif">2. MODEL TASK</text>
        <rect x="225" y="75" width="55" height="36" rx="3" fill="#FDE047" stroke="#CA8A04" strokeWidth="1" />
        <text x="230" y="96" fill="#713F12" fontSize="8" fontFamily="sans-serif">Pattern Match</text>

        {/* Quadrant 3: Bias Blindspot (Red) */}
        <rect x="25" y="130" width="85" height="18" rx="3" fill="#FEE2E2" />
        <text x="32" y="143" fill="#B91C1C" fontSize="10" fontWeight="bold" fontFamily="sans-serif">3. BIAS AUDIT</text>
        <rect x="25" y="152" width="60" height="42" rx="3" fill="#FCA5A5" stroke="#DC2626" strokeWidth="1" />
        <text x="30" y="172" fill="#7F1D1D" fontSize="8" fontWeight="bold" fontFamily="sans-serif">Language Skew!</text>

        {/* Quadrant 4: Human Shield Safeguard (Green) */}
        <rect x="225" y="130" width="95" height="18" rx="3" fill="#DCFCE7" />
        <text x="232" y="143" fill="#15803D" fontSize="10" fontWeight="bold" fontFamily="sans-serif">4. HUMAN SHIELD</text>
        <rect x="225" y="152" width="65" height="42" rx="3" fill="#86EFAC" stroke="#16A34A" strokeWidth="1" />
        <text x="230" y="172" fill="#14532D" fontSize="8" fontWeight="bold" fontFamily="sans-serif">Teacher Review</text>
      </g>

      {/* Design Desk & Trio Collaboration */}
      <ellipse cx="400" cy="380" rx="360" ry="60" fill="#E2E8F0" stroke="#0F2A43" strokeWidth="3" />
      
      {/* Student 1: Data Architect (Left with laptop) */}
      <g transform="translate(140, 240)">
        <rect x="20" y="90" width="40" height="60" rx="6" fill="#3B82F6" stroke="#0F2A43" strokeWidth="2" />
        <circle cx="40" cy="45" r="20" fill="#D4A373" stroke="#0F2A43" strokeWidth="2" />
        <path d="M22 45C22 25 35 22 55 22C65 22 65 35 62 45Z" fill="#1E293B" />
        {/* Laptop */}
        <path d="M70 120L95 100H135L110 120Z" fill="#CBD5E1" stroke="#0F2A43" strokeWidth="2" />
        <rect x="95" y="70" width="40" height="30" rx="2" fill="#0F172A" stroke="#0F2A43" strokeWidth="2" />
        <rect x="98" y="73" width="34" height="24" fill="#38BDF8" />
      </g>

      {/* Student 2: Ethics Auditor (Pointing at Canvas with Red Sticky) */}
      <g transform="translate(360, 210)">
        <rect x="20" y="95" width="42" height="65" rx="6" fill="#8B5CF6" stroke="#0F2A43" strokeWidth="2" />
        <circle cx="41" cy="50" r="21" fill="#BC8A5F" stroke="#0F2A43" strokeWidth="2" />
        <path d="M24 50C24 30 35 25 55 25C65 25 68 38 65 50Z" fill="#0F172A" />
        {/* Arm holding sticky up toward canvas */}
        <path d="M45 105L70 45" stroke="#BC8A5F" strokeWidth="8" strokeLinecap="round" />
        <rect x="65" y="35" width="18" height="18" rx="2" fill="#EF4444" stroke="#B91C1C" strokeWidth="1" />
      </g>

      {/* Student 3: UX Safeguard Lead (Right with tablet wireframe) */}
      <g transform="translate(580, 240)">
        <rect x="20" y="90" width="40" height="60" rx="6" fill="#10B981" stroke="#0F2A43" strokeWidth="2" />
        <circle cx="40" cy="45" r="20" fill="#E0A96D" stroke="#0F2A43" strokeWidth="2" />
        <path d="M22 45C22 25 35 22 55 22C65 22 65 35 62 45Z" fill="#1E293B" />
        {/* Tablet in Hands */}
        <rect x="-10" y="100" width="36" height="48" rx="4" fill="#1E293B" stroke="#0F2A43" strokeWidth="2" />
        <rect x="-7" y="104" width="30" height="40" rx="2" fill="#FFFFFF" />
        <circle cx="8" cy="120" r="6" fill="#16A34A" />
      </g>

      {/* Informational Callout Badge */}
      <g transform="translate(20, 20)">
        <rect width="150" height="90" rx="8" fill="#FFFFFF" stroke="#0F2A43" strokeWidth="2" filter="drop-shadow(0 4px 6px rgba(0,0,0,0.05))" />
        <text x="12" y="24" fill="#4F46E5" fontSize="11" fontWeight="bold" fontFamily="sans-serif">AUDIT CRITERIA</text>
        <text x="12" y="42" fill="#0F2A43" fontSize="10" fontFamily="sans-serif">• Data Skew Test</text>
        <text x="12" y="58" fill="#0F2A43" fontSize="10" fontFamily="sans-serif">• Privacy Boundaries</text>
        <text x="12" y="74" fill="#16A34A" fontSize="10" fontWeight="bold" fontFamily="sans-serif">• Human Override</text>
      </g>
    </svg>
  );
};

// ================= GRADE 9: POLICY BRIEF SEMINAR SCENARIO =================
export const Grade9ScenarioSVG: React.FC<ScenarioSVGProps> = ({ className = "w-full h-auto" }) => {
  return (
    <svg 
      viewBox="0 0 800 450" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-label="Grade 9 Evidence-Based Policy Brief scenario illustration"
      role="img"
    >
      <rect width="800" height="450" rx="16" fill="#F8FAFC" />
      
      {/* Legislative Seminar Chamber Wall */}
      <rect x="0" y="0" width="800" height="240" fill="#0F2A43" />
      
      {/* Municipal Ward Map & Traffic Data Charts on Chamber Screen */}
      <rect x="180" y="20" width="440" height="170" rx="8" fill="#1E3A5F" stroke="#334E68" strokeWidth="2" />
      <text x="200" y="45" fill="#F7F1E8" fontSize="13" fontWeight="bold" fontFamily="sans-serif">MUNICIPAL WARD 14 · PEDESTRIAN SAFETY SURVEY</text>
      
      {/* Mini Street Map Vector */}
      <path d="M200 70H340V170H200V70Z" fill="#243B53" stroke="#486581" strokeWidth="1" />
      <path d="M200 110H340M270 70V170" stroke="#F0B429" strokeWidth="4" strokeDasharray="6 3" />
      <circle cx="270" cy="110" r="12" fill="#E12D39" fillOpacity="0.4" stroke="#E12D39" strokeWidth="2" />
      <text x="264" y="114" fill="#FFFFFF" fontSize="9" fontWeight="bold" fontFamily="sans-serif">!</text>
      <text x="210" y="160" fill="#9FB3C8" fontSize="9" fontFamily="sans-serif">High Conflict Zone</text>

      {/* Speed Data Bar Graph */}
      <rect x="360" y="70" width="240" height="100" rx="4" fill="#102A43" stroke="#243B53" strokeWidth="1" />
      <text x="370" y="90" fill="#9FB3C8" fontSize="10" fontFamily="sans-serif">Peak Speed (km/h) vs Safe Limit</text>
      <rect x="380" y="140" width="30" height="20" fill="#3EBD93" />
      <rect x="425" y="115" width="30" height="45" fill="#F0B429" />
      <rect x="470" y="100" width="30" height="60" fill="#E12D39" />
      <line x1="370" y1="135" x2="520" y2="135" stroke="#FFFFFF" strokeWidth="1.5" strokeDasharray="3 3" />
      <text x="525" y="138" fill="#FFFFFF" fontSize="8" fontFamily="sans-serif">Limit (25)</text>

      {/* Chamber Floor */}
      <rect x="0" y="240" width="800" height="210" fill="#D9E2EC" stroke="#0F2A43" strokeWidth="2" />
      
      {/* Presentation Podium (Center Left) */}
      <rect x="180" y="270" width="80" height="130" rx="4" fill="#627D98" stroke="#0F2A43" strokeWidth="2" />
      <rect x="170" y="260" width="100" height="15" rx="3" fill="#334E68" stroke="#0F2A43" strokeWidth="2" />
      <rect x="195" y="250" width="45" height="12" rx="2" fill="#FFFFFF" stroke="#0F2A43" strokeWidth="1" />
      
      {/* Student Presenter at Podium (Grade 9 Researcher) */}
      <g transform="translate(190, 165)">
        <rect x="10" y="85" width="40" height="90" rx="6" fill="#102A43" stroke="#0F2A43" strokeWidth="2" />
        <circle cx="30" cy="45" r="20" fill="#D4A373" stroke="#0F2A43" strokeWidth="2" />
        <path d="M12 45C12 25 25 20 45 20C58 20 60 32 58 45Z" fill="#1E293B" />
        {/* Arm gesturing to screen */}
        <path d="M35 95L90 60" stroke="#D4A373" strokeWidth="7" strokeLinecap="round" />
      </g>

      {/* Standing Legislative Committee Desks (Right) */}
      <rect x="420" y="310" width="340" height="90" rx="6" fill="#486581" stroke="#0F2A43" strokeWidth="3" />
      
      {/* Committee Member 1 (Shopkeepers Advocate Role) */}
      <circle cx="480" cy="275" r="18" fill="#BC8A5F" stroke="#0F2A43" strokeWidth="2" />
      <rect x="460" y="295" width="40" height="30" rx="4" fill="#E12D39" />
      <text x="455" y="335" fill="#FFFFFF" fontSize="9" fontWeight="bold" fontFamily="sans-serif">Merchants</text>

      {/* Committee Member 2 (Parent Association Advocate) */}
      <circle cx="580" cy="275" r="18" fill="#E0A96D" stroke="#0F2A43" strokeWidth="2" />
      <rect x="560" y="295" width="40" height="30" rx="4" fill="#3EBD93" />
      <text x="560" y="335" fill="#FFFFFF" fontSize="9" fontWeight="bold" fontFamily="sans-serif">Parents</text>

      {/* Committee Member 3 (Ward Councillor / Teacher Facilitator) */}
      <circle cx="680" cy="270" r="20" fill="#D4A373" stroke="#0F2A43" strokeWidth="2" />
      <rect x="660" y="292" width="40" height="35" rx="4" fill="#F0B429" />
      <text x="655" y="335" fill="#FFFFFF" fontSize="9" fontWeight="bold" fontFamily="sans-serif">Councillor</text>

      {/* 2-Page Policy Brief Dossier Icon on Desk */}
      <rect x="430" y="325" width="22" height="30" rx="2" fill="#FFFFFF" stroke="#0F2A43" strokeWidth="1.5" />
      <line x1="434" y1="332" x2="448" y2="332" stroke="#0F2A43" strokeWidth="1" />
      <line x1="434" y1="338" x2="448" y2="338" stroke="#0F2A43" strokeWidth="1" />
      <line x1="434" y1="344" x2="444" y2="344" stroke="#0F2A43" strokeWidth="1" />

      {/* Informational Callout Badge */}
      <g transform="translate(20, 20)">
        <rect width="145" height="90" rx="8" fill="#FFFFFF" stroke="#0F2A43" strokeWidth="2" filter="drop-shadow(0 4px 6px rgba(0,0,0,0.05))" />
        <text x="12" y="24" fill="#0F2A43" fontSize="11" fontWeight="bold" fontFamily="sans-serif">BRIEF ANATOMY</text>
        <text x="12" y="42" fill="#486581" fontSize="10" fontFamily="sans-serif">1. Exec Summary</text>
        <text x="12" y="58" fill="#486581" fontSize="10" fontFamily="sans-serif">2. Empirical Data</text>
        <text x="12" y="74" fill="#E12D39" fontSize="10" fontWeight="bold" fontFamily="sans-serif">3. SMART Mandate</text>
      </g>
    </svg>
  );
};
