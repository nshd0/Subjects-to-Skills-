import React from 'react';
import { NavLink, Outlet, useLocation } from 'react-router-dom';
import { Moon, Sun, Menu, X, Search, GraduationCap, LogIn, LogOut, User as UserIcon } from 'lucide-react';
import { useTheme } from '@/contexts/ThemeContext';
import { useAuth } from '@/contexts/AuthContext';
import { Button } from './ui/Button';
import { FeedbackWidget } from './FeedbackWidget';
import { GlobalSearch } from './GlobalSearch';
import { NavDropdown } from './NavDropdown';

export function Layout() {
  const { theme, setTheme } = useTheme();
  const { user, profile, login, logout, loading } = useAuth();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);
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

  const toolsLinks = [
    { name: 'Resource Hub', path: '/resources' },
    { name: 'Teacher Toolkit', path: '/toolkit' },
    { name: 'School Planner', path: '/planner' },
    { name: 'Skill Progression', path: '/skill-progression' },
    { name: 'Coverage', path: '/coverage' },
  ];

  const aboutLinks = [
    { name: 'About', path: '/about' },
    { name: 'Roadmap', path: '/roadmap' },
    { name: 'Audit', path: '/audit' },
  ];

  if (profile?.role === 'admin') {
    aboutLinks.push({ name: 'Admin', path: '/admin' });
  }

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 dark:bg-slate-950 dark:text-slate-50 flex flex-col font-sans transition-colors duration-200">
      {/* Prototype Banner */}
      <div className="bg-indigo-700 dark:bg-indigo-900 text-white px-4 py-3 text-center text-sm font-medium flex flex-col items-center justify-center gap-1 print:hidden relative">
        <div className="flex items-center gap-2">
          <span className="font-bold border border-white/30 px-2 py-0.5 rounded text-xs bg-white/10 tracking-wider">v0.3 PUBLIC BETA</span>
          <span>Subjects2Skills Curriculum-Translation Framework</span>
        </div>
        <p className="text-indigo-100 text-xs mt-1 max-w-4xl">
          Connecting CBSE/NCERT-aligned subject learning, skills, pedagogy, assessment and classroom practice. 
          <span className="font-semibold block sm:inline sm:ml-1">This is not an official CBSE or NCERT portal.</span>
        </p>
        <NavLink to="/about-framework" className="text-white underline hover:text-indigo-200 transition-colors text-xs mt-1">About this framework</NavLink>
      </div>

      <header className="sticky top-0 z-50 w-full border-b border-slate-200 bg-white/80 backdrop-blur dark:border-slate-800 dark:bg-slate-950/80 print:hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            <div className="flex items-center gap-2">
              <GraduationCap className="h-6 w-6 text-indigo-600 dark:text-indigo-400" />
              <span className="text-lg font-bold tracking-tight hidden lg:inline">Subjects2Skills Navigator</span>
              <span className="text-lg font-bold tracking-tight lg:hidden">S2S</span>
            </div>

            {/* Desktop Nav */}
            <nav className="hidden md:flex flex-wrap items-center gap-1 lg:gap-2">
              <NavLink
                to="/"
                className={({ isActive }) =>
                  `px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                    isActive
                      ? 'bg-slate-100 text-indigo-700 dark:bg-slate-800 dark:text-indigo-300'
                      : 'text-slate-600 hover:bg-slate-50 hover:text-slate-900 dark:text-slate-300 dark:hover:bg-slate-800/50 dark:hover:text-slate-50'
                  }`
                }
              >
                Home
              </NavLink>
              <NavDropdown label="Stages" items={stagesLinks} />
              <NavDropdown label="Tools & Resources" items={toolsLinks} />
              <NavDropdown label="About" items={aboutLinks} />
            </nav>

            <div className="flex items-center space-x-2 md:space-x-4 ml-auto lg:ml-0">
              <GlobalSearch />
              {!loading && (
                <div className="hidden sm:flex items-center">
                  {user ? (
                    <Button variant="ghost" size="sm" onClick={logout} className="text-slate-600 dark:text-slate-400 flex items-center gap-2">
                      <UserIcon className="h-4 w-4" />
                      <span className="hidden lg:inline">{profile?.displayName || user.email?.split('@')[0]}</span>
                      <LogOut className="h-4 w-4 ml-1" />
                    </Button>
                  ) : (
                    <Button variant="outline" size="sm" onClick={login} className="flex items-center gap-2">
                      <LogIn className="h-4 w-4" />
                      <span>Educator Login</span>
                    </Button>
                  )}
                </div>
              )}
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
                aria-label="Toggle theme"
              >
                {theme === 'light' ? <Moon className="h-5 w-5" /> : <Sun className="h-5 w-5" />}
              </Button>
              <div className="md:hidden">
                <Button variant="ghost" size="icon" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
                  {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile Nav */}
        {isMobileMenuOpen && (
          <div className="md:hidden border-t border-slate-200 dark:border-slate-800 max-h-[75vh] overflow-y-auto">
            <div className="space-y-1 px-4 pb-3 pt-2">
              <NavLink
                to="/"
                className={({ isActive }) =>
                  `block px-3 py-2 rounded-md text-base font-medium ${
                    isActive
                      ? 'bg-slate-100 text-indigo-700 dark:bg-slate-800 dark:text-indigo-300'
                      : 'text-slate-600 hover:bg-slate-50 hover:text-slate-900 dark:text-slate-300 dark:hover:bg-slate-800/50 dark:hover:text-slate-50'
                  }`
                }
              >
                Home
              </NavLink>
              
              <div className="py-2">
                <p className="px-3 text-xs font-semibold text-slate-400 uppercase tracking-wider mb-1">Stages</p>
                {stagesLinks.map((link) => (
                  <NavLink
                    key={link.path}
                    to={link.path}
                    className={({ isActive }) =>
                      `block px-3 py-2 rounded-md text-base font-medium ${
                        isActive
                          ? 'bg-slate-100 text-indigo-700 dark:bg-slate-800 dark:text-indigo-300'
                          : 'text-slate-600 hover:bg-slate-50 hover:text-slate-900 dark:text-slate-300 dark:hover:bg-slate-800/50 dark:hover:text-slate-50'
                      }`
                    }
                  >
                    {link.fullName || link.name}
                  </NavLink>
                ))}
              </div>

              <div className="py-2">
                <p className="px-3 text-xs font-semibold text-slate-400 uppercase tracking-wider mb-1">Tools & Resources</p>
                {toolsLinks.map((link) => (
                  <NavLink
                    key={link.path}
                    to={link.path}
                    className={({ isActive }) =>
                      `block px-3 py-2 rounded-md text-base font-medium ${
                        isActive
                          ? 'bg-slate-100 text-indigo-700 dark:bg-slate-800 dark:text-indigo-300'
                          : 'text-slate-600 hover:bg-slate-50 hover:text-slate-900 dark:text-slate-300 dark:hover:bg-slate-800/50 dark:hover:text-slate-50'
                      }`
                    }
                  >
                    {link.name}
                  </NavLink>
                ))}
              </div>

              <div className="py-2">
                <p className="px-3 text-xs font-semibold text-slate-400 uppercase tracking-wider mb-1">About</p>
                {aboutLinks.map((link) => (
                  <NavLink
                    key={link.path}
                    to={link.path}
                    className={({ isActive }) =>
                      `block px-3 py-2 rounded-md text-base font-medium ${
                        isActive
                          ? 'bg-slate-100 text-indigo-700 dark:bg-slate-800 dark:text-indigo-300'
                          : 'text-slate-600 hover:bg-slate-50 hover:text-slate-900 dark:text-slate-300 dark:hover:bg-slate-800/50 dark:hover:text-slate-50'
                      }`
                    }
                  >
                    {link.name}
                  </NavLink>
                ))}
              </div>

              {!loading && (
                <div className="mt-4 pt-4 border-t border-slate-200 dark:border-slate-800">
                  {user ? (
                    <Button variant="ghost" className="w-full justify-start text-slate-600 dark:text-slate-400" onClick={logout}>
                      <LogOut className="h-4 w-4 mr-2" />
                      Logout ({profile?.role})
                    </Button>
                  ) : (
                    <Button variant="outline" className="w-full justify-start" onClick={login}>
                      <LogIn className="h-4 w-4 mr-2" />
                      Educator Login
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

      <footer className="border-t border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950 py-8 mt-12 print:hidden">
        <div className="container mx-auto px-4 text-center text-sm text-slate-500 dark:text-slate-400">
          <p>A public framework demonstrating skill-centred curriculum mapping.</p>
          <p className="mt-2">For design reference only. Verify with official CBSE guidance.</p>
        </div>
      </footer>
      <FeedbackWidget />
    </div>
  );
}
