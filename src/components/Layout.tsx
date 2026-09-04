import React from 'react';
import { NavLink, Outlet, useLocation, Link } from 'react-router-dom';
import { Moon, Sun, Menu, X, GraduationCap, LogIn, LogOut, User as UserIcon, ShieldAlert, Sparkles, Layers, Bookmark } from 'lucide-react';
import { useTheme } from '@/contexts/ThemeContext';
import { useAuth } from '@/contexts/AuthContext';
import { useProgress } from '@/contexts/ProgressContext';
import { Button } from './ui/Button';
import { FeedbackWidget } from './FeedbackWidget';
import { GlobalSearch } from './GlobalSearch';
import { NavDropdown } from './NavDropdown';
import { BookmarksDrawer } from './BookmarksDrawer';
import { gradesData } from '@/data/grades';

export function Layout() {
  const { theme, setTheme } = useTheme();
  const { user, profile, login, logout, loading } = useAuth();
  const { bookmarks } = useProgress();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);
  const [isBookmarksOpen, setIsBookmarksOpen] = React.useState(false);
  const location = useLocation();

  React.useEffect(() => {
    setIsMobileMenuOpen(false);
    window.scrollTo(0, 0);
  }, [location.pathname]);

  const stagesLinks = [
    { 
      name: 'Foundational (Pre-K–2)', 
      fullName: 'Foundational Stage (Ages 3–8 | Preschool to Grade 2)',
      badge: 'Ages 3–8',
      path: '/stage/foundational' 
    },
    { 
      name: 'Preparatory (Gr 3–5)', 
      fullName: 'Preparatory Stage (Ages 8–11 | Grades 3–5)',
      badge: 'Ages 8–11',
      path: '/stage/preparatory' 
    },
    { 
      name: 'Middle (Gr 6–8)', 
      fullName: 'Middle Stage (Ages 11–14 | Grades 6–8)',
      badge: 'Ages 11–14',
      path: '/stage/middle' 
    },
    { 
      name: 'Secondary (Gr 9–12)', 
      fullName: 'Secondary Stage (Ages 14–18 | Grades 9–12)',
      badge: 'Ages 14–18',
      path: '/stage/secondary' 
    },
  ];

  const gradesLinks = [
    { name: 'View All Grades (Dashboard)', fullName: 'View All 15 Grades (Pre-K to 12)', path: '/grades', badge: 'Overview' },
    ...gradesData.map(grade => ({
      name: grade.name,
      fullName: `${grade.name} (${grade.ageRange})`,
      path: `/grade/${grade.id}`,
      badge: grade.stageId.charAt(0).toUpperCase() + grade.stageId.slice(1)
    }))
  ];

  const toolsLinks = [
    { name: 'Teacher Resource Hub', path: '/resources' },
    { name: 'Teacher Toolkit', path: '/toolkit' },
    { name: 'School Planner', path: '/planner' },
    { name: 'Baseline Audit Report', path: '/audit' },
  ];

  const aboutLinks = [
    { name: 'About Subjects2Skills', path: '/about' },
    { name: 'v0.3 Content Roadmap', path: '/roadmap' },
    { name: 'Pedagogical Framework', path: '/about-framework' },
    { name: 'Changelog', path: '/changelog' },
  ];

  if (profile?.role === 'admin') {
    aboutLinks.push({ name: 'Admin Dashboard', path: '/admin' });
  }

  const navLinkClass = ({ isActive }: { isActive: boolean }) =>
    `px-2.5 py-1.5 rounded-lg text-xs lg:text-sm font-medium transition-colors whitespace-nowrap ${
      isActive
        ? 'bg-slate-100 text-indigo-700 dark:bg-slate-800 dark:text-indigo-300 font-semibold'
        : 'text-slate-600 hover:bg-slate-50 hover:text-slate-900 dark:text-slate-300 dark:hover:bg-slate-800/50 dark:hover:text-slate-50'
    }`;

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 dark:bg-slate-950 dark:text-slate-50 flex flex-col font-sans transition-colors duration-200">
      
      {/* Target Version Banner: v0.2 — Preparing for v0.3 */}
      <div className="bg-indigo-900 text-white px-4 py-2.5 text-xs font-medium border-b border-indigo-800 print:hidden relative">
        <div className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-2 text-center md:text-left">
          <div className="flex flex-wrap items-center justify-center md:justify-start gap-2">
            <span className="font-bold border border-indigo-400/50 px-2 py-0.5 rounded text-[11px] bg-indigo-800/80 tracking-wider flex items-center gap-1 text-indigo-200">
              <Sparkles className="w-3 h-3 text-amber-300" />
              v0.2 — Preparing for v0.3
            </span>
            <span className="text-slate-200 font-medium hidden sm:inline">
              Subjects organise knowledge. Skills organise capability.
            </span>
            <span className="text-indigo-300 text-[11px]">
              (Grade-wise curriculum preparation: Pre-school to Grade 12)
            </span>
          </div>

          <div className="flex items-center gap-3 text-[11px] text-indigo-200 shrink-0">
            <Link to="/roadmap" className="hover:text-white underline underline-offset-2">
              Content Roadmap
            </Link>
            <span>·</span>
            <Link to="/about" className="hover:text-white underline underline-offset-2">
              Trust & Transparency
            </Link>
          </div>
        </div>
      </div>

      <header className="sticky top-0 z-50 w-full border-b border-slate-200 bg-white/90 backdrop-blur-md dark:border-slate-800 dark:bg-slate-950/90 print:hidden">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="flex h-16 items-center justify-between gap-2">
            
            {/* Logo */}
            <Link to="/" className="flex items-center gap-2.5 shrink-0">
              <div className="w-9 h-9 rounded-xl bg-indigo-600 text-white flex items-center justify-center shadow-xs">
                <GraduationCap className="h-5 w-5" />
              </div>
              <div className="flex flex-col">
                <span className="text-base font-bold tracking-tight text-slate-900 dark:text-white leading-tight">
                  Subjects2Skills
                </span>
                <span className="text-[10px] font-semibold text-indigo-600 dark:text-indigo-400 uppercase tracking-wider">
                  CBSE Curriculum & Skills
                </span>
              </div>
            </Link>

            {/* Main Navigation (Preserved and complete) */}
            <nav className="hidden xl:flex items-center gap-1">
              <NavLink to="/" className={navLinkClass}>Home</NavLink>
              <NavDropdown label="Explore by Stage" items={stagesLinks} />
              <NavDropdown label="Explore by Grade" items={gradesLinks} />
              <NavLink to="/skill-progression" className={navLinkClass}>Skills</NavLink>
              <NavLink to="/activities" className={navLinkClass}>Activities</NavLink>
              <NavLink to="/assessment" className={navLinkClass}>Assessment</NavLink>
              <NavLink to="/resources" className={navLinkClass}>Teacher Resource Hub</NavLink>
              <NavLink to="/toolkit" className={navLinkClass}>Teacher Toolkit</NavLink>
              <NavLink to="/roadmap" className={navLinkClass}>Content Roadmap</NavLink>
              <NavLink to="/about" className={navLinkClass}>About</NavLink>
            </nav>

            {/* Compact Nav for Mid-Sized Screens */}
            <nav className="hidden md:flex xl:hidden items-center gap-1">
              <NavLink to="/" className={navLinkClass}>Home</NavLink>
              <NavDropdown label="Stages" items={stagesLinks} />
              <NavDropdown label="Grades" items={gradesLinks} />
              <NavLink to="/activities" className={navLinkClass}>Activities</NavLink>
              <NavLink to="/assessment" className={navLinkClass}>Assessment</NavLink>
              <NavDropdown label="More" items={[
                { name: 'Skill Progression', path: '/skill-progression' },
                { name: 'Teacher Resource Hub', path: '/resources' },
                { name: 'Teacher Toolkit', path: '/toolkit' },
                { name: 'Content Roadmap', path: '/roadmap' },
                { name: 'About Subjects2Skills', path: '/about' },
              ]} />
            </nav>

            {/* Utilities & Search */}
            <div className="flex items-center space-x-1 sm:space-x-2">
              <GlobalSearch />

              {/* Bookmarks Button */}
              <button
                onClick={() => setIsBookmarksOpen(true)}
                className="relative p-2 text-slate-600 dark:text-slate-300 hover:text-indigo-600 dark:hover:text-indigo-400 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors flex items-center justify-center min-h-[36px] min-w-[36px]"
                title="View Saved Bookmarks"
                aria-label="View Saved Bookmarks"
              >
                <Bookmark className="w-4 h-4" />
                {bookmarks.length > 0 && (
                  <span className="absolute -top-1 -right-1 bg-indigo-600 text-white text-[10px] font-bold rounded-full w-4 h-4 flex items-center justify-center">
                    {bookmarks.length}
                  </span>
                )}
              </button>

              {!loading && (
                <div className="hidden sm:flex items-center">
                  {user ? (
                    <Button variant="ghost" size="sm" onClick={logout} className="text-slate-600 dark:text-slate-400 flex items-center gap-1 text-xs">
                      <UserIcon className="h-3.5 w-3.5" />
                      <span className="hidden lg:inline">{profile?.displayName || user.email?.split('@')[0]}</span>
                      <LogOut className="h-3.5 w-3.5 ml-1" />
                    </Button>
                  ) : (
                    <Button variant="outline" size="sm" onClick={login} className="text-xs h-8 px-2.5 flex items-center gap-1.5">
                      <LogIn className="h-3.5 w-3.5" />
                      <span className="hidden sm:inline">Teacher Sign-in</span>
                    </Button>
                  )}
                </div>
              )}

              <Button
                variant="ghost"
                size="icon"
                onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
                aria-label="Toggle theme"
                className="w-8 h-8"
              >
                {theme === 'light' ? <Moon className="h-4 w-4" /> : <Sun className="h-4 w-4" />}
              </Button>

              <div className="md:hidden">
                <Button variant="ghost" size="icon" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="w-8 h-8">
                  {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
                </Button>
              </div>
            </div>

          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {isMobileMenuOpen && (
          <div className="md:hidden border-t border-slate-200 dark:border-slate-800 max-h-[80vh] overflow-y-auto bg-white dark:bg-slate-900">
            <div className="space-y-1 px-4 pb-4 pt-2">
              <NavLink to="/" className={navLinkClass}>Home</NavLink>
              <button
                onClick={() => { setIsBookmarksOpen(true); setIsMobileMenuOpen(false); }}
                className="w-full flex items-center justify-between px-2.5 py-2 text-xs font-medium text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg transition-colors"
              >
                <span className="flex items-center gap-2">
                  <Bookmark className="w-4 h-4 text-indigo-600 dark:text-indigo-400" />
                  Saved Bookmarks
                </span>
                {bookmarks.length > 0 && (
                  <span className="bg-indigo-100 text-indigo-800 dark:bg-indigo-950/60 dark:text-indigo-300 text-[10px] font-bold px-2 py-0.5 rounded-full">
                    {bookmarks.length}
                  </span>
                )}
              </button>
              <NavLink to="/grades" className={navLinkClass}>Explore All 15 Grades</NavLink>
              <NavLink to="/skill-progression" className={navLinkClass}>Skills Progression</NavLink>
              <NavLink to="/activities" className={navLinkClass}>Classroom Activities</NavLink>
              <NavLink to="/assessment" className={navLinkClass}>Evidence & Assessment Hub</NavLink>
              <NavLink to="/resources" className={navLinkClass}>Teacher Resource Hub</NavLink>
              <NavLink to="/toolkit" className={navLinkClass}>Teacher Toolkit</NavLink>
              <NavLink to="/roadmap" className={navLinkClass}>v0.3 Content Roadmap</NavLink>
              <NavLink to="/about" className={navLinkClass}>About & Governance</NavLink>

              <div className="py-2 border-t border-slate-100 dark:border-slate-800">
                <p className="px-2 text-[11px] font-bold text-slate-400 uppercase tracking-wider mb-1">Stages</p>
                {stagesLinks.map((link) => (
                  <NavLink
                    key={link.path}
                    to={link.path}
                    className="block px-2 py-1.5 text-xs text-slate-700 dark:text-slate-300 hover:text-indigo-600"
                  >
                    {link.fullName || link.name}
                  </NavLink>
                ))}
              </div>

              {!loading && (
                <div className="pt-3 border-t border-slate-200 dark:border-slate-800">
                  {user ? (
                    <Button variant="ghost" className="w-full justify-start text-xs text-slate-600 dark:text-slate-400" onClick={logout}>
                      <LogOut className="h-3.5 w-3.5 mr-2" />
                      Logout ({profile?.role})
                    </Button>
                  ) : (
                    <Button variant="outline" className="w-full justify-start text-xs" onClick={login}>
                      <LogIn className="h-3.5 w-3.5 mr-2" />
                      Teacher Sign-in
                    </Button>
                  )}
                </div>
              )}
            </div>
          </div>
        )}
      </header>

      <main className="flex-1">
        <Outlet />
      </main>

      {/* Comprehensive Trust & Governance Footer */}
      <footer className="border-t border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950 py-12 print:hidden text-xs">
        <div className="container mx-auto px-4 max-w-6xl space-y-8">
          
          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-8">
            <div className="space-y-3">
              <div className="flex items-center gap-2">
                <div className="w-6 h-6 rounded-lg bg-indigo-600 text-white flex items-center justify-center">
                  <GraduationCap className="h-4 w-4" />
                </div>
                <span className="font-bold text-slate-900 dark:text-white">Subjects2Skills</span>
              </div>
              <p className="text-slate-500 dark:text-slate-400 leading-relaxed text-[11px]">
                A public educational framework demonstrating how existing CBSE subjects can be connected to skills, pedagogy stages, classroom activities, assessment evidence, and free open resources.
              </p>
              <div className="inline-block px-2 py-1 rounded bg-indigo-50 dark:bg-indigo-950/60 text-indigo-700 dark:text-indigo-300 font-bold text-[10px]">
                v0.2 — Preparing for v0.3
              </div>
            </div>

            <div className="space-y-2">
              <h4 className="font-bold text-slate-900 dark:text-white uppercase tracking-wider text-[11px]">Curriculum</h4>
              <ul className="space-y-1.5 text-slate-600 dark:text-slate-400">
                <li><Link to="/grades" className="hover:underline">Explore by Grade (Pre-K–12)</Link></li>
                <li><Link to="/stage/foundational" className="hover:underline">Foundational Stage</Link></li>
                <li><Link to="/stage/preparatory" className="hover:underline">Preparatory Stage</Link></li>
                <li><Link to="/stage/middle" className="hover:underline">Middle Stage</Link></li>
                <li><Link to="/stage/secondary" className="hover:underline">Secondary Stage</Link></li>
                <li><Link to="/skill-progression" className="hover:underline">Skill Progression</Link></li>
              </ul>
            </div>

            <div className="space-y-2">
              <h4 className="font-bold text-slate-900 dark:text-white uppercase tracking-wider text-[11px]">Teaching & Assessment</h4>
              <ul className="space-y-1.5 text-slate-600 dark:text-slate-400">
                <li><Link to="/activities" className="hover:underline">Classroom Activities Bank</Link></li>
                <li><Link to="/assessment" className="hover:underline">Evidence & Rubrics Hub</Link></li>
                <li><Link to="/resources" className="hover:underline">Teacher Resource Hub</Link></li>
                <li><Link to="/toolkit" className="hover:underline">Teacher Toolkit</Link></li>
                <li><Link to="/planner" className="hover:underline">School Planner</Link></li>
              </ul>
            </div>

            <div className="space-y-2">
              <h4 className="font-bold text-slate-900 dark:text-white uppercase tracking-wider text-[11px]">Transparency & Quality</h4>
              <ul className="space-y-1.5 text-slate-600 dark:text-slate-400">
                <li><Link to="/about" className="hover:underline">About & Core Principles</Link></li>
                <li><Link to="/roadmap" className="hover:underline">v0.3 Content Roadmap</Link></li>
                <li><Link to="/audit" className="hover:underline">v0.2 Baseline Audit Report</Link></li>
                <li><Link to="/about#feedback" className="hover:underline">Submit Educator Feedback</Link></li>
              </ul>
            </div>
          </div>

          {/* Mandatory Trust & Independence Statements in Footer */}
          <div className="pt-6 border-t border-slate-100 dark:border-slate-800 space-y-3 text-[11px] text-slate-500 dark:text-slate-400">
            <div className="p-3.5 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 flex items-start gap-2.5">
              <ShieldAlert className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
              <p className="leading-relaxed">
                <strong>Disclaimer & Content Maturity:</strong> Content-status labels describe the maturity of Subjects2Skills material. 
                They do not represent approval, endorsement, or certification by CBSE, NCERT, or any government body. 
                Material is an independent educational design reference developed to support teachers, school leaders, and curriculum designers.
              </p>
            </div>

            <p className="leading-relaxed">
              <strong>Teacher Safety & Privacy Notice:</strong> Teachers should review all external tools, resources and links for age-appropriateness, accessibility, privacy, safety and school-policy compliance before classroom use.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-between gap-2 pt-2 text-slate-400">
              <span>© 2026 Subjects2Skills Framework. Built for Indian K–12 education.</span>
              <span>Subjects organise knowledge · Skills organise capability</span>
            </div>
          </div>

        </div>
      </footer>

      <FeedbackWidget />
      <BookmarksDrawer isOpen={isBookmarksOpen} onClose={() => setIsBookmarksOpen(false)} />
    </div>
  );
}
