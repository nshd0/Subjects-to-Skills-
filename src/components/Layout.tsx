import React from 'react';
import { NavLink, Outlet, useLocation } from 'react-router-dom';
import { Moon, Sun, Menu, X, Search, GraduationCap, LogIn, LogOut, User as UserIcon } from 'lucide-react';
import { useTheme } from '@/contexts/ThemeContext';
import { useAuth } from '@/contexts/AuthContext';
import { Button } from './ui/Button';
import { FeedbackWidget } from './FeedbackWidget';
import { GlobalSearch } from './GlobalSearch';

export function Layout() {
  const { theme, setTheme } = useTheme();
  const { user, profile, login, logout, loading } = useAuth();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);
  const location = useLocation();

  React.useEffect(() => {
    setIsMobileMenuOpen(false);
    window.scrollTo(0, 0);
  }, [location.pathname]);

  const navLinks = [
    { name: 'Home', path: '/' },
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
    { name: 'Skill Progression', path: '/skill-progression' },
    { name: 'Teacher Toolkit', path: '/toolkit' },
    { name: 'About', path: '/about' },
    { name: 'Roadmap', path: '/roadmap' },
    { name: 'Audit', path: '/audit' },
  ];

  if (profile?.role === 'admin') {
    navLinks.push({ name: 'Admin', path: '/admin' });
  }

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 dark:bg-slate-950 dark:text-slate-50 flex flex-col font-sans transition-colors duration-200">
      {/* Prototype Banner */}
      <div className="bg-indigo-600 text-white px-4 py-2 text-center text-sm font-medium flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-4 print:hidden">
        <span><span className="font-bold">Subjects2Skills v0.2</span> — Live Data Platform</span>
        <span className="hidden sm:inline opacity-50">|</span>
        <span>Fully backed by Firestore with real-time feedback telemetry.</span>
        <NavLink to="/roadmap" className="bg-white/20 hover:bg-white/30 transition-colors px-3 py-1 rounded-full text-xs font-semibold ml-2">View v0.3 Roadmap</NavLink>
      </div>

      <header className="sticky top-0 z-50 w-full border-b border-slate-200 bg-white/80 backdrop-blur dark:border-slate-800 dark:bg-slate-950/80">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            <div className="flex items-center gap-2">
              <GraduationCap className="h-6 w-6 text-indigo-600 dark:text-indigo-400" />
              <span className="text-lg font-bold tracking-tight hidden lg:inline">Subjects2Skills Navigator</span>
              <span className="text-lg font-bold tracking-tight lg:hidden">S2S</span>
            </div>

            {/* Desktop Nav */}
            <nav className="hidden md:flex flex-wrap items-center gap-1 lg:gap-2">
              {navLinks.map((link) => (
                <NavLink
                  key={link.path}
                  to={link.path}
                  title={link.fullName || link.name}
                  className={({ isActive }) =>
                    `px-2 py-2 rounded-md text-sm font-medium transition-colors ${
                      isActive
                        ? 'bg-slate-100 text-indigo-700 dark:bg-slate-800 dark:text-indigo-300'
                        : 'text-slate-600 hover:bg-slate-50 hover:text-slate-900 dark:text-slate-300 dark:hover:bg-slate-800/50 dark:hover:text-slate-50'
                    }`
                  }
                >
                  {link.name}
                </NavLink>
              ))}
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
          <div className="md:hidden border-t border-slate-200 dark:border-slate-800">
            <div className="space-y-1 px-4 pb-3 pt-2">
              {navLinks.map((link) => (
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

      <footer className="border-t border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950 py-8 mt-12">
        <div className="container mx-auto px-4 text-center text-sm text-slate-500 dark:text-slate-400">
          <p>A public framework demonstrating skill-centred curriculum mapping.</p>
          <p className="mt-2">For design reference only. Verify with official CBSE guidance.</p>
        </div>
      </footer>
      <FeedbackWidget />
    </div>
  );
}
