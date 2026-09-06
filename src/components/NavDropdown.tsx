import React, { useState, useRef, useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface NavDropdownProps {
  label: string;
  to?: string;
  items: { name: string; fullName?: string; path: string; badge?: string }[];
}

export function NavDropdown({ label, to, items }: NavDropdownProps) {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const location = useLocation();

  const isActive = (to && (location.pathname === to || location.pathname.startsWith(to + '/'))) || 
    items.some(item => location.pathname === item.path || location.pathname.startsWith(item.path + '/'));

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  return (
    <div className="relative inline-flex items-center" ref={dropdownRef}>
      {to ? (
        <NavLink
          to={to}
          className={`inline-flex items-center px-2.5 py-1.5 rounded-l-md text-xs lg:text-sm font-medium transition-colors ${
            isActive
              ? 'bg-slate-100 text-indigo-700 dark:bg-slate-800 dark:text-indigo-300 font-semibold'
              : 'text-slate-600 hover:bg-slate-50 hover:text-slate-900 dark:text-slate-300 dark:hover:bg-slate-800/50 dark:hover:text-slate-50'
          }`}
        >
          {label}
        </NavLink>
      ) : (
        <button
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          className={`inline-flex items-center px-2.5 py-1.5 rounded-l-md text-xs lg:text-sm font-medium transition-colors ${
            isActive || isOpen
              ? 'bg-slate-100 text-indigo-700 dark:bg-slate-800 dark:text-indigo-300 font-semibold'
              : 'text-slate-600 hover:bg-slate-50 hover:text-slate-900 dark:text-slate-300 dark:hover:bg-slate-800/50 dark:hover:text-slate-50'
          }`}
        >
          {label}
        </button>
      )}

      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        aria-label={`Toggle ${label} menu`}
        className={`p-1.5 rounded-r-md text-xs transition-colors border-l border-slate-200/60 dark:border-slate-800 ${
          isActive || isOpen
            ? 'bg-slate-100 text-indigo-700 dark:bg-slate-800 dark:text-indigo-300'
            : 'text-slate-500 hover:bg-slate-50 dark:text-slate-400 dark:hover:bg-slate-800/50'
        }`}
      >
        <ChevronDown className={`h-3.5 w-3.5 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} />
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 5 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 5 }}
            transition={{ duration: 0.15 }}
            className="absolute left-0 mt-1 w-64 max-h-80 overflow-y-auto rounded-md shadow-lg bg-white dark:bg-slate-900 ring-1 ring-black ring-opacity-5 dark:ring-white/10 z-50 focus:outline-none"
          >
            <div className="py-1">
              {items.map((item) => (
                <NavLink
                  key={item.path}
                  to={item.path}
                  className={({ isActive }) =>
                    `block px-4 py-2 text-sm ${
                      isActive
                        ? 'bg-slate-50 text-indigo-700 dark:bg-slate-800 dark:text-indigo-300 font-medium'
                        : 'text-slate-700 hover:bg-slate-100 dark:text-slate-300 dark:hover:bg-slate-800'
                    }`
                  }
                  title={item.fullName || item.name}
                >
                  <div className="flex justify-between items-center">
                    <span>{item.name}</span>
                    {item.badge && (
                      <span className="text-[10px] font-semibold bg-indigo-50 text-indigo-700 dark:bg-indigo-900/30 dark:text-indigo-300 px-1.5 py-0.5 rounded ml-2">
                        {item.badge}
                      </span>
                    )}
                  </div>
                </NavLink>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
