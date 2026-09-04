import React from 'react';

interface EvidenceSVGProps {
  className?: string;
  activityId: string;
}

export const EvidenceSVG: React.FC<EvidenceSVGProps> = ({ className = "w-full h-auto", activityId }) => {
  const normalized = activityId.toLowerCase();
  
  if (normalized.includes('g3') || normalized.includes('neighbourhood') || normalized.includes('data-walk')) {
    return (
      <svg viewBox="0 0 600 400" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} aria-label="Completed Grade 3 Pictograph Poster Evidence" role="img">
          <rect width="600" height="400" rx="12" fill="#FDFBF7" stroke="#0F2A43" strokeWidth="2" />
          
          {/* Header Banner */}
          <rect x="25" y="20" width="550" height="60" rx="8" fill="#0F2A43" />
          <text x="45" y="48" fill="#F7F1E8" fontSize="18" fontWeight="bold" fontFamily="sans-serif">OUR SCHOOL ENVIRONMENT PICTOGRAPH</text>
          <text x="45" y="68" fill="#2B8C87" fontSize="12" fontFamily="sans-serif">Grade 3 Data Detectives · Section B · Date: October 14</text>
          
          {/* Legend Key Pill */}
          <g transform="translate(400, 30)">
            <rect width="160" height="40" rx="6" fill="#1E3A5F" stroke="#2B8C87" strokeWidth="1.5" />
            <circle cx="25" cy="20" r="10" fill="#2B8C87" />
            <text x="45" y="24" fill="#FFFFFF" fontSize="11" fontWeight="bold" fontFamily="sans-serif">= 1 Count Observed</text>
          </g>

          {/* Main Chart Grid */}
          <rect x="25" y="95" width="550" height="240" rx="8" fill="#FFFFFF" stroke="#E2E8F0" strokeWidth="1.5" />
          
          {/* 3 Categories Columns */}
          {/* Column 1: Neem Trees */}
          <rect x="50" y="115" width="140" height="200" rx="6" fill="#F0FDF4" stroke="#86EFAC" strokeWidth="1.5" />
          <text x="75" y="140" fill="#166534" fontSize="14" fontWeight="bold" fontFamily="sans-serif">Neem Trees</text>
          <text x="105" y="160" fill="#15803D" fontSize="12" fontWeight="bold" fontFamily="sans-serif">( 4 )</text>
          {/* 4 Green Tree Dots */}
          <circle cx="120" cy="190" r="14" fill="#2B8C87" stroke="#0F2A43" strokeWidth="1.5" />
          <circle cx="120" cy="225" r="14" fill="#2B8C87" stroke="#0F2A43" strokeWidth="1.5" />
          <circle cx="120" cy="260" r="14" fill="#2B8C87" stroke="#0F2A43" strokeWidth="1.5" />
          <circle cx="120" cy="295" r="14" fill="#2B8C87" stroke="#0F2A43" strokeWidth="1.5" />

          {/* Column 2: Waste Bins */}
          <rect x="230" y="115" width="140" height="200" rx="6" fill="#FFF7ED" stroke="#FDBA74" strokeWidth="1.5" />
          <text x="258" y="140" fill="#9A3412" fontSize="14" fontWeight="bold" fontFamily="sans-serif">Waste Bins</text>
          <text x="288" y="160" fill="#C2410C" fontSize="12" fontWeight="bold" fontFamily="sans-serif">( 2 )</text>
          {/* 2 Orange Bin Dots */}
          <circle cx="295" cy="260" r="14" fill="#E7853C" stroke="#0F2A43" strokeWidth="1.5" />
          <circle cx="295" cy="295" r="14" fill="#E7853C" stroke="#0F2A43" strokeWidth="1.5" />

          {/* Column 3: Bicycles */}
          <rect x="410" y="115" width="140" height="200" rx="6" fill="#EFF6FF" stroke="#93C5FD" strokeWidth="1.5" />
          <text x="445" y="140" fill="#1E40AF" fontSize="14" fontWeight="bold" fontFamily="sans-serif">Bicycles</text>
          <text x="472" y="160" fill="#2563EB" fontSize="12" fontWeight="bold" fontFamily="sans-serif">( 3 )</text>
          {/* 3 Blue Cycle Dots */}
          <circle cx="475" cy="225" r="14" fill="#2563EB" stroke="#0F2A43" strokeWidth="1.5" />
          <circle cx="475" cy="260" r="14" fill="#2563EB" stroke="#0F2A43" strokeWidth="1.5" />
          <circle cx="475" cy="295" r="14" fill="#2563EB" stroke="#0F2A43" strokeWidth="1.5" />

          {/* Footer Reflection Sentence & Signatures */}
          <rect x="25" y="345" width="550" height="42" rx="6" fill="#F8FAFC" stroke="#E2E8F0" strokeWidth="1" />
          <text x="40" y="370" fill="#0F2A43" fontSize="11" fontWeight="bold" fontFamily="sans-serif">Conclusion: Trees are the most frequent feature (4). We noticed zero water taps in the outer sports lane.</text>
          <text x="440" y="370" fill="#5E6B77" fontSize="10" fontFamily="sans-serif">Team: Aarav & Priya</text>
        </svg>
      );
    }

  if (normalized.includes('g6') || normalized.includes('community') || normalized.includes('problem-tree')) {
    return (
      <svg viewBox="0 0 600 400" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} aria-label="Completed Grade 6 Problem Tree Poster Evidence" role="img">
          <rect width="600" height="400" rx="12" fill="#FDFBF7" stroke="#0F2A43" strokeWidth="2" />
          
          {/* Header */}
          <rect x="25" y="20" width="550" height="45" rx="6" fill="#0F2A43" />
          <text x="40" y="47" fill="#F7F1E8" fontSize="16" fontWeight="bold" fontFamily="sans-serif">COMMUNITY PROBLEM TREE · CANTEEN CONGESTION AUDIT</text>
          
          {/* Background Tree Trunk & Branches */}
          <path d="M300 240V160M300 160C260 140 200 120 140 100M300 160C340 140 400 120 460 100" stroke="#78350F" strokeWidth="12" strokeLinecap="round" />
          {/* Roots */}
          <path d="M300 260C280 290 220 310 160 330M300 260V340M300 260C320 290 380 310 440 330" stroke="#DC2626" strokeWidth="8" strokeLinecap="round" />

          {/* SECTION 1: LEAVES (Visible Symptoms) */}
          <g transform="translate(60, 75)">
            <rect width="140" height="55" rx="6" fill="#DCFCE7" stroke="#16A34A" strokeWidth="1.5" />
            <text x="10" y="20" fill="#15803D" fontSize="10" fontWeight="bold" fontFamily="sans-serif">Symptom 1 (Observation)</text>
            <text x="10" y="36" fill="#166534" fontSize="9" fontFamily="sans-serif">25-minute queue during</text>
            <text x="10" y="48" fill="#166534" fontSize="9" fontFamily="sans-serif">lunch break for hot meals</text>
          </g>

          <g transform="translate(390, 75)">
            <rect width="150" height="55" rx="6" fill="#DCFCE7" stroke="#16A34A" strokeWidth="1.5" />
            <text x="10" y="20" fill="#15803D" fontSize="10" fontWeight="bold" fontFamily="sans-serif">Symptom 2 (Quote Card)</text>
            <text x="10" y="36" fill="#166534" fontSize="9" fontFamily="sans-serif">"Students drop plates</text>
            <text x="10" y="48" fill="#166534" fontSize="9" fontFamily="sans-serif">rushing back to class" - Staff</text>
          </g>

          {/* SECTION 2: TRUNK (Core Operational Bottleneck) */}
          <g transform="translate(180, 180)">
            <rect width="240" height="55" rx="8" fill="#FEF08A" stroke="#CA8A04" strokeWidth="2" />
            <text x="15" y="22" fill="#854D0E" fontSize="11" fontWeight="bold" fontFamily="sans-serif">CORE BOTTLENECK (THE TRUNK)</text>
            <text x="15" y="40" fill="#713F12" fontSize="10" fontFamily="sans-serif">Single token counter handling payment AND food handover simultaneously</text>
          </g>

          {/* SECTION 3: ROOTS (Underlying Structural Causes) */}
          <g transform="translate(60, 310)">
            <rect width="140" height="60" rx="6" fill="#FEE2E2" stroke="#DC2626" strokeWidth="1.5" />
            <text x="10" y="20" fill="#991B1B" fontSize="10" fontWeight="bold" fontFamily="sans-serif">Root Cause 1 (Policy)</text>
            <text x="10" y="36" fill="#7F1D1D" fontSize="9" fontFamily="sans-serif">Synchronized bell: 600</text>
            <text x="10" y="48" fill="#7F1D1D" fontSize="9" fontFamily="sans-serif">students arrive in 3 mins</text>
          </g>

          <g transform="translate(230, 320)">
            <rect width="140" height="60" rx="6" fill="#FEE2E2" stroke="#DC2626" strokeWidth="1.5" />
            <text x="10" y="20" fill="#991B1B" fontSize="10" fontWeight="bold" fontFamily="sans-serif">Root Cause 2 (Physical)</text>
            <text x="10" y="36" fill="#7F1D1D" fontSize="9" fontFamily="sans-serif">No pre-paid coupon</text>
            <text x="10" y="48" fill="#7F1D1D" fontSize="9" fontFamily="sans-serif">or token dispenser lane</text>
          </g>

          <g transform="translate(400, 310)">
            <rect width="145" height="60" rx="6" fill="#FEE2E2" stroke="#DC2626" strokeWidth="1.5" />
            <text x="10" y="20" fill="#991B1B" fontSize="10" fontWeight="bold" fontFamily="sans-serif">Root Cause 3 (Staffing)</text>
            <text x="10" y="36" fill="#7F1D1D" fontSize="9" fontFamily="sans-serif">Only 2 staff members</text>
            <text x="10" y="48" fill="#7F1D1D" fontSize="9" fontFamily="sans-serif">serving 8 food options</text>
          </g>
        </svg>
      );
    }

  if (normalized.includes('g7') || normalized.includes('water')) {
    return (
      <svg viewBox="0 0 600 400" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} aria-label="Completed Grade 7 Water Lab Report & Cross-Section Evidence" role="img">
          <rect width="600" height="400" rx="12" fill="#F0F9FF" stroke="#0F2A43" strokeWidth="2" />
          
          {/* Header */}
          <rect x="20" y="20" width="560" height="45" rx="6" fill="#0F2A43" />
          <text x="35" y="47" fill="#F7F1E8" fontSize="16" fontWeight="bold" fontFamily="sans-serif">SCIENCE LAB RECORD · WATER AUDIT & MULTI-LAYER FILTRATION</text>

          {/* Left Panel: Filter Cross-Section Blueprint */}
          <g transform="translate(30, 80)">
            <rect width="240" height="300" rx="8" fill="#FFFFFF" stroke="#0284C7" strokeWidth="1.5" />
            <text x="15" y="25" fill="#0F2A43" fontSize="12" fontWeight="bold" fontFamily="sans-serif">GRAVITY COLUMN BLUEPRINT</text>
            
            {/* Cut bottle graphic with labeled layers */}
            <path d="M40 50H160L155 120L130 180V205H110V180L85 120L40 50Z" fill="#F8FAFC" stroke="#0F2A43" strokeWidth="2" />
            {/* Layers */}
            <rect x="42" y="58" width="116" height="30" fill="#94A3B8" />
            <text x="165" y="75" fill="#334155" fontSize="9" fontWeight="bold" fontFamily="sans-serif">1. Coarse Gravel</text>

            <rect x="44" y="88" width="112" height="35" fill="#FDE68A" />
            <text x="165" y="108" fill="#B45309" fontSize="9" fontWeight="bold" fontFamily="sans-serif">2. River Sand</text>

            <rect x="55" y="123" width="90" height="35" fill="#1E293B" />
            <text x="165" y="145" fill="#0F172A" fontSize="9" fontWeight="bold" fontFamily="sans-serif">3. Charcoal Bits</text>

            <rect x="110" y="180" width="20" height="15" fill="#CBD5E1" />
            <text x="145" y="192" fill="#475569" fontSize="9" fontWeight="bold" fontFamily="sans-serif">4. Muslin Plug</text>

            {/* Filtrate Beaker */}
            <rect x="100" y="220" width="40" height="35" rx="3" fill="#BAE6FD" stroke="#0284C7" strokeWidth="1.5" />
            <text x="15" y="280" fill="#16A34A" fontSize="10" fontWeight="bold" fontFamily="sans-serif">Filtration Speed: 100 mL in 4.2 mins</text>
          </g>

          {/* Right Panel: Audit Extrapolation Table & Secchi Results */}
          <g transform="translate(290, 80)">
            <rect width="280" height="300" rx="8" fill="#FFFFFF" stroke="#0284C7" strokeWidth="1.5" />
            <text x="15" y="25" fill="#0F2A43" fontSize="12" fontWeight="bold" fontFamily="sans-serif">TAP LEAK AUDIT COMPUTATION</text>
            
            {/* Table */}
            <rect x="15" y="40" width="250" height="120" rx="4" fill="#F8FAFC" stroke="#E2E8F0" strokeWidth="1" />
            <text x="25" y="60" fill="#475569" fontSize="9" fontFamily="sans-serif">Tap Location: Science Block Tap #4</text>
            <text x="25" y="80" fill="#475569" fontSize="9" fontFamily="sans-serif">Measured Volume: 150 mL in 300 seconds</text>
            <text x="25" y="100" fill="#0284C7" fontSize="10" fontWeight="bold" fontFamily="sans-serif">Flow Rate: 30 mL / min</text>
            <text x="25" y="120" fill="#0284C7" fontSize="10" fontWeight="bold" fontFamily="sans-serif">Daily Loss: 43.2 Litres / day</text>
            <text x="25" y="145" fill="#DC2626" fontSize="11" fontWeight="bold" fontFamily="sans-serif">Monthly Waste: 1,296 Litres Lost!</text>

            {/* Turbidity secchi card */}
            <text x="15" y="185" fill="#0F2A43" fontSize="11" fontWeight="bold" fontFamily="sans-serif">WATER CLARITY TEST (SECCHI RATING)</text>
            <rect x="15" y="200" width="115" height="50" rx="4" fill="#FEF3C7" stroke="#CA8A04" strokeWidth="1" />
            <text x="25" y="220" fill="#854D0E" fontSize="9" fontWeight="bold" fontFamily="sans-serif">Sample Input:</text>
            <text x="25" y="235" fill="#713F12" fontSize="9" fontFamily="sans-serif">Turbid pond water (1/5)</text>

            <rect x="150" y="200" width="115" height="50" rx="4" fill="#DCFCE7" stroke="#16A34A" strokeWidth="1" />
            <text x="160" y="220" fill="#15803D" fontSize="9" fontWeight="bold" fontFamily="sans-serif">Filtrate Output:</text>
            <text x="160" y="235" fill="#14532D" fontSize="9" fontFamily="sans-serif">Clear suspended (4.5/5)</text>

            <text x="15" y="280" fill="#DC2626" fontSize="9" fontWeight="bold" fontFamily="sans-serif">* Safety notice: Chemical disinfections still required.</text>
          </g>
        </svg>
      );
    }

  if (normalized.includes('g8') || normalized.includes('ai')) {
    return (
      <svg viewBox="0 0 600 400" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} aria-label="Completed Grade 8 Responsible AI Design Canvas Evidence" role="img">
          <rect width="600" height="400" rx="12" fill="#F5F3FF" stroke="#4F46E5" strokeWidth="2" />
          
          {/* Header */}
          <rect x="20" y="15" width="560" height="40" rx="6" fill="#4F46E5" />
          <text x="35" y="40" fill="#FFFFFF" fontSize="15" fontWeight="bold" fontFamily="sans-serif">RESPONSIBLE AI SOLUTION CANVAS · SCHOOL LIBRARY ASSISTANT</text>
          
          {/* Quadrant 1: Input Data (Top-Left) */}
          <g transform="translate(20, 65)">
            <rect width="270" height="150" rx="6" fill="#FFFFFF" stroke="#3B82F6" strokeWidth="1.5" />
            <rect width="270" height="26" rx="6" fill="#DBEAFE" />
            <text x="12" y="18" fill="#1E40AF" fontSize="10" fontWeight="bold" fontFamily="sans-serif">1. INPUT DATASET & FEATURES</text>
            <text x="12" y="45" fill="#1E293B" fontSize="9" fontFamily="sans-serif">• 600 anonymized student check-out records</text>
            <text x="12" y="65" fill="#1E293B" fontSize="9" fontFamily="sans-serif">• Features: Grade, Genre, Language, Reading time</text>
            <text x="12" y="85" fill="#1E293B" fontSize="9" fontFamily="sans-serif">• Privacy: Excludes student names & IDs</text>
            <rect x="12" y="105" width="246" height="32" rx="4" fill="#EFF6FF" />
            <text x="20" y="125" fill="#2563EB" fontSize="9" fontWeight="bold" fontFamily="sans-serif">Balanced: 50% English / 50% Regional Titles</text>
          </g>

          {/* Quadrant 2: Model Task & Logic (Top-Right) */}
          <g transform="translate(310, 65)">
            <rect width="270" height="150" rx="6" fill="#FFFFFF" stroke="#F59E0B" strokeWidth="1.5" />
            <rect width="270" height="26" rx="6" fill="#FEF3C7" />
            <text x="12" y="18" fill="#B45309" fontSize="10" fontWeight="bold" fontFamily="sans-serif">2. MODEL TASK & CONFIDENCE LOGIC</text>
            <text x="12" y="45" fill="#1E293B" fontSize="9" fontFamily="sans-serif">• Algorithm: Nearest Neighbor Recommendation</text>
            <text x="12" y="65" fill="#1E293B" fontSize="9" fontFamily="sans-serif">• Confidence Score Threshold: 75% match</text>
            <text x="12" y="85" fill="#1E293B" fontSize="9" fontFamily="sans-serif">• Output: Suggests 3 related books with reasons</text>
            <rect x="12" y="105" width="246" height="32" rx="4" fill="#FFFBEB" />
            <text x="20" y="125" fill="#D97706" fontSize="9" fontWeight="bold" fontFamily="sans-serif">Transparency: Shows "Why this book?" button</text>
          </g>

          {/* Quadrant 3: Bias Blindspots Flagged (Bottom-Left) */}
          <g transform="translate(20, 225)">
            <rect width="270" height="155" rx="6" fill="#FFFFFF" stroke="#EF4444" strokeWidth="1.5" />
            <rect width="270" height="26" rx="6" fill="#FEE2E2" />
            <text x="12" y="18" fill="#B91C1C" fontSize="10" fontWeight="bold" fontFamily="sans-serif">3. PEER BIAS AUDIT & BLINDSPOTS</text>
            <text x="12" y="45" fill="#991B1B" fontSize="9" fontWeight="bold" fontFamily="sans-serif">[FLAG 1] Gender Stereotype Risk:</text>
            <text x="12" y="60" fill="#4B5563" fontSize="8" fontFamily="sans-serif">Model initially over-recommended STEM to male cards.</text>
            <text x="12" y="80" fill="#991B1B" fontSize="9" fontWeight="bold" fontFamily="sans-serif">[FLAG 2] Grade Disparity:</text>
            <text x="12" y="95" fill="#4B5563" fontSize="8" fontFamily="sans-serif">Younger reader loans were under-sampled.</text>
            <rect x="12" y="115" width="246" height="30" rx="4" fill="#FEF2F2" />
            <text x="20" y="133" fill="#DC2626" fontSize="9" fontWeight="bold" fontFamily="sans-serif">Mitigation: De-linked gender from prompt vectors</text>
          </g>

          {/* Quadrant 4: Human Shield Safeguard (Bottom-Right) */}
          <g transform="translate(310, 225)">
            <rect width="270" height="155" rx="6" fill="#FFFFFF" stroke="#10B981" strokeWidth="1.5" />
            <rect width="270" height="26" rx="6" fill="#DCFCE7" />
            <text x="12" y="18" fill="#15803D" fontSize="10" fontWeight="bold" fontFamily="sans-serif">4. HUMAN-IN-THE-LOOP SAFEGUARDS</text>
            <text x="12" y="45" fill="#14532D" fontSize="9" fontWeight="bold" fontFamily="sans-serif">1. Teacher / Librarian Override:</text>
            <text x="12" y="60" fill="#4B5563" fontSize="8" fontFamily="sans-serif">Librarian reviews AI recommendations weekly.</text>
            <text x="12" y="80" fill="#14532D" fontSize="9" fontWeight="bold" fontFamily="sans-serif">2. Student Feedback Flag:</text>
            <text x="12" y="95" fill="#4B5563" fontSize="8" fontFamily="sans-serif">Students can click "Not relevant" to retrain weight.</text>
            <rect x="12" y="115" width="246" height="30" rx="4" fill="#F0FDF4" />
            <text x="20" y="133" fill="#16A34A" fontSize="9" fontWeight="bold" fontFamily="sans-serif">Safeguard: Never blocks manual student requests</text>
          </g>
        </svg>
      );
    }

  if (normalized.includes('g9') || normalized.includes('policy')) {
    return (
      <svg viewBox="0 0 600 400" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} aria-label="Completed Grade 9 Municipal Policy Brief Dossier Evidence" role="img">
          <rect width="600" height="400" rx="12" fill="#F8FAFC" stroke="#0F2A43" strokeWidth="2" />
          
          {/* Header */}
          <rect x="20" y="20" width="560" height="48" rx="6" fill="#0F2A43" />
          <text x="35" y="42" fill="#F7F1E8" fontSize="14" fontWeight="bold" fontFamily="sans-serif">POLICY MEMO: PEDESTRIAN SAFETY RE-DESIGN AROUND WARD 14 SCHOOLS</text>
          <text x="35" y="58" fill="#94A3B8" fontSize="10" fontFamily="sans-serif">Submitted to: Ward Municipal Councillor & Traffic Police · Grade 9 Research Cohort</text>

          {/* Left Page (Page 1 of Memo) */}
          <g transform="translate(30, 80)">
            <rect width="255" height="300" rx="6" fill="#FFFFFF" stroke="#CBD5E1" strokeWidth="1.5" />
            <rect x="15" y="15" width="225" height="20" fill="#E2E8F0" />
            <text x="22" y="29" fill="#0F2A43" fontSize="9" fontWeight="bold" fontFamily="sans-serif">SECTION 1: EXECUTIVE STATEMENT</text>
            <text x="15" y="55" fill="#334155" fontSize="8" fontFamily="sans-serif">Between 1:30 PM - 2:15 PM, 420 vehicles traverse</text>
            <text x="15" y="68" fill="#334155" fontSize="8" fontFamily="sans-serif">School Gate 2 at an average speed of 41 km/h.</text>
            <text x="15" y="81" fill="#DC2626" fontSize="8" fontWeight="bold" fontFamily="sans-serif">This exceeds the 25 km/h school zone threshold.</text>

            <rect x="15" y="100" width="225" height="18" fill="#E2E8F0" />
            <text x="22" y="113" fill="#0F2A43" fontSize="9" fontWeight="bold" fontFamily="sans-serif">SECTION 2: EMPIRICAL EVIDENCE & MAP</text>
            
            {/* Speed graph snippet */}
            <rect x="15" y="125" width="225" height="95" rx="4" fill="#F8FAFC" stroke="#E2E8F0" />
            <text x="25" y="142" fill="#0F2A43" fontSize="8" fontWeight="bold" fontFamily="sans-serif">Observed Speeds vs Safety Ceiling</text>
            <rect x="35" y="180" width="25" height="30" fill="#3EBD93" />
            <rect x="75" y="160" width="25" height="50" fill="#F0B429" />
            <rect x="115" y="150" width="25" height="60" fill="#E12D39" />
            <line x1="25" y1="175" x2="160" y2="175" stroke="#0F2A43" strokeWidth="1" strokeDasharray="3 2" />
            <text x="165" y="178" fill="#0F2A43" fontSize="8" fontFamily="sans-serif">25 km/h limit</text>

            {/* Footnote */}
            <text x="15" y="240" fill="#64748B" fontSize="7" fontFamily="sans-serif">[1] 5-Day Radar Audit (n=420), Oct 12-16.</text>
            <text x="15" y="252" fill="#64748B" fontSize="7" fontFamily="sans-serif">[2] Interview with 18 local shopkeepers.</text>
            <text x="180" y="285" fill="#94A3B8" fontSize="8" fontFamily="sans-serif">Page 1/2</text>
          </g>

          {/* Right Page (Page 2 of Memo) */}
          <g transform="translate(315, 80)">
            <rect width="255" height="300" rx="6" fill="#FFFFFF" stroke="#CBD5E1" strokeWidth="1.5" />
            <rect x="15" y="15" width="225" height="20" fill="#E2E8F0" />
            <text x="22" y="29" fill="#0F2A43" fontSize="9" fontWeight="bold" fontFamily="sans-serif">SECTION 3: STAKEHOLDER MATRIX</text>
            <text x="15" y="55" fill="#334155" fontSize="8" fontFamily="sans-serif">• Parents: Priority on zebra crossings & warden.</text>
            <text x="15" y="70" fill="#334155" fontSize="8" fontFamily="sans-serif">• Shopkeepers: Retain loading bays until 1 PM.</text>
            <text x="15" y="85" fill="#334155" fontSize="8" fontFamily="sans-serif">• Auto-drivers: Request dedicated drop-off pocket.</text>

            <rect x="15" y="105" width="225" height="18" fill="#DCFCE7" stroke="#16A34A" strokeWidth="1" />
            <text x="22" y="118" fill="#14532D" fontSize="9" fontWeight="bold" fontFamily="sans-serif">SECTION 4: SMART RECOMMENDATIONS</text>
            
            <rect x="15" y="130" width="225" height="110" rx="4" fill="#F0FDF4" />
            <text x="22" y="148" fill="#15803D" fontSize="8" fontWeight="bold" fontFamily="sans-serif">R1: Elevated Tabletop Zebra Crossing</text>
            <text x="22" y="160" fill="#334155" fontSize="7.5" fontFamily="sans-serif">Ward Engineering budget (Est. ₹45,000).</text>

            <text x="22" y="178" fill="#15803D" fontSize="8" fontWeight="bold" fontFamily="sans-serif">R2: Staggered Departure Bell by 12 Mins</text>
            <text x="22" y="190" fill="#334155" fontSize="7.5" fontFamily="sans-serif">Primary and Middle wings exit in 2 batches.</text>

            <text x="22" y="208" fill="#15803D" fontSize="8" fontWeight="bold" fontFamily="sans-serif">R3: Student Traffic Warden Squad</text>
            <text x="22" y="220" fill="#334155" fontSize="7.5" fontFamily="sans-serif">Guided by PT teacher; high-vis vests.</text>

            <rect x="15" y="255" width="225" height="25" rx="3" fill="#0F2A43" />
            <text x="25" y="271" fill="#FFFFFF" fontSize="8" fontWeight="bold" fontFamily="sans-serif">Committee Vote: Approved 4-1 (Unanimous Support)</text>
            <text x="180" y="285" fill="#94A3B8" fontSize="8" fontFamily="sans-serif">Page 2/2</text>
          </g>
        </svg>
      );
    }

  return (
    <svg viewBox="0 0 600 400" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} aria-label="Evidence Artifact" role="img">
      <rect width="600" height="400" rx="12" fill="#F8FAFC" stroke="#E2E8F0" strokeWidth="2" />
      <text x="200" y="200" fill="#64748B" fontSize="16" fontFamily="sans-serif">Evidence Visual Artifact</text>
    </svg>
  );
};
