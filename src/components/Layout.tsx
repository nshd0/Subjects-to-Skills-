import React from 'react';
import { NavLink, Outlet, useLocation } from 'react-router-dom';
import { Moon, Sun, Menu, X, Search, GraduationCap } from 'lucide-react';
import { useTheme } from '@/contexts/ThemeContext';
import { Button } from './ui/Button';
import { FeedbackWidget } from './FeedbackWidget';
import { GlobalSearch } from './GlobalSearch';

export function Layout() {
  const { theme, setTheme } = useTheme();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);
  const location = useLocation();

  React.useEffect(() => {
    setIsMobileMenuOpen(false);
    window.scrollTo(0, 0);
  }, [location.pathname]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Foundational', path: '/stage/foundational' },
    { name: 'Preparatory', path: '/stage/preparatory' },
    { name: 'Middle', path: '/stage/middle' },
    { name: 'Secondary', path: '/stage/secondary' },
    { name: 'Skill Progression', path: '/skill-progression' },
    { name: 'Teacher Toolkit', path: '/toolkit' },
    { name: 'About', path: '/about' },
    { name: 'Roadmap', path: '/roadmap' },
    { name: 'Audit', path: '/audit' },
  ];

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 dark:bg-slate-950 dark:text-slate-50 flex flex-col font-sans transition-colors duration-200">
      {/* Prototype Banner */}
      <div className="bg-indigo-600 text-white px-4 py-2 text-center text-sm font-medium flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-4 print:hidden">
        <span><span className="font-bold">Subjects2Skills v0.1</span> — Public prototype</span>
        <span className="hidden sm:inline opacity-50">|</span>
        <span>We are collecting feedback to improve Version 0.2.</span>
        <NavLink to="/roadmap" className="bg-white/20 hover:bg-white/30 transition-colors px-3 py-1 rounded-full text-xs font-semibold ml-2">View v0.2 Roadmap</NavLink>
      </div>

      <header className="sticky top-0 z-50 w-full border-b border-slate-200 bg-white/80 backdrop-blur dark:border-slate-800 dark:bg-slate-950/80">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            <div className="flex items-center gap-2">
              <GraduationCap className="h-6 w-6 text-indigo-600 dark:text-indigo-400" />
              <span className="text-lg font-bold tracking-tight">Subjects2skills Navigator</span>
            </div>

            {/* Desktop Nav */}
            <nav className="hidden md:flex items-center space-x-1 lg:space-x-4">
              {navLinks.map((link) => (
                <NavLink
                  key={link.path}
                  to={link.path}
                  className={({ isActive }) =>
                    `px-3 py-2 rounded-md text-sm font-medium transition-colors ${
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
                  {link.name}
                </NavLink>
              ))}
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
