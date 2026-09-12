const fs = require('fs');
let code = fs.readFileSync('src/components/Layout.tsx', 'utf8');

// Desktop
code = code.replace(
  '<div id="tour-step-map"><NavDropdown label="Grades"',
  '<div id="tour-step-map-desktop"><NavDropdown label="Grades"'
);
code = code.replace(
  '<div id="tour-step-planner"><NavDropdown label="Teach & Plan"',
  '<div id="tour-step-planner-desktop"><NavDropdown label="Teach & Plan"'
);
code = code.replace(
  '<div id="tour-step-assess"><NavDropdown label="Assess"',
  '<div id="tour-step-assess-desktop"><NavDropdown label="Assess"'
);
code = code.replace(
  '<div id="tour-step-resources"><NavDropdown label="Resources"',
  '<div id="tour-step-resources-desktop"><NavDropdown label="Resources"'
);

// Compact
code = code.replace(
  '<div id="tour-step-map"><NavDropdown label="Grades"',
  '<div id="tour-step-map-compact"><NavDropdown label="Grades"'
);
code = code.replace(
  '<div id="tour-step-planner"><NavDropdown label="Teach & Plan"',
  '<div id="tour-step-planner-compact"><NavDropdown label="Teach & Plan"'
);
code = code.replace(
  '<div id="tour-step-assess"><NavDropdown label="Assess"',
  '<div id="tour-step-assess-compact"><NavDropdown label="Assess"'
);
code = code.replace(
  '<NavDropdown label="More" items={[',
  '<div id="tour-step-resources-compact"><NavDropdown label="More" items={['
);
// close the div for compact resources
code = code.replace(
  '...aboutLinks,\n              ]} />\n            </nav>',
  '...aboutLinks,\n              ]} /></div>\n            </nav>'
);

// Mobile
code = code.replace(
  '<NavLink to="/grades" className={mobileNavLinkClass} onClick={() => setIsMobileMenuOpen(false)}>Explore by Grade</NavLink>',
  '<NavLink id="tour-step-map-mobile" to="/grades" className={mobileNavLinkClass} onClick={() => setIsMobileMenuOpen(false)}>Explore by Grade</NavLink>'
);
code = code.replace(
  '<NavLink to="/planner" className={mobileNavLinkClass} onClick={() => setIsMobileMenuOpen(false)}>Unit & Lesson Planner (v0.4)</NavLink>',
  '<NavLink id="tour-step-planner-mobile" to="/planner" className={mobileNavLinkClass} onClick={() => setIsMobileMenuOpen(false)}>Unit & Lesson Planner (v0.4)</NavLink>'
);
code = code.replace(
  '<NavLink to="/assessment" className={mobileNavLinkClass} onClick={() => setIsMobileMenuOpen(false)}>Assessment Hub</NavLink>',
  '<NavLink id="tour-step-assess-mobile" to="/assessment" className={mobileNavLinkClass} onClick={() => setIsMobileMenuOpen(false)}>Assessment Hub</NavLink>'
);
code = code.replace(
  '<NavLink to="/resources" className={mobileNavLinkClass} onClick={() => setIsMobileMenuOpen(false)}>Teacher Resources</NavLink>',
  '<NavLink id="tour-step-resources-mobile" to="/resources" className={mobileNavLinkClass} onClick={() => setIsMobileMenuOpen(false)}>Teacher Resources</NavLink>'
);

// Feature Flags leaks
code = code.replace(
  '<li><Link to="/how-it-works" className="hover:underline text-indigo-600 dark:text-indigo-400 font-semibold">How It Works</Link></li>',
  '{FEATURES.ENABLE_HOW_IT_WORKS && (<li><Link to="/how-it-works" className="hover:underline text-indigo-600 dark:text-indigo-400 font-semibold">How It Works</Link></li>)}'
);

code = code.replace(
  '<button onClick={() => setIsTourOpen(true)} className="text-indigo-600 dark:text-indigo-400 hover:underline font-semibold">\n                Replay onboarding tour\n              </button>',
  '{FEATURES.ENABLE_ONBOARDING_TOUR && (\n                <button onClick={() => { setIsTourOpen(true); if (window.innerWidth < 768) setIsMobileMenuOpen(true); }} className="text-indigo-600 dark:text-indigo-400 hover:underline font-semibold">\n                  Replay onboarding tour\n                </button>\n              )}'
);

code = code.replace(
  '<OnboardingPrompt onStartTour={() => setIsTourOpen(true)} />',
  '<OnboardingPrompt onStartTour={() => { setIsTourOpen(true); if (window.innerWidth < 768) setIsMobileMenuOpen(true); }} />'
);

fs.writeFileSync('src/components/Layout.tsx', code);
