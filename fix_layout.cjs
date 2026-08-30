const fs = require('fs');
let content = fs.readFileSync('src/components/Layout.tsx', 'utf8');

// 1. Add imports
content = content.replace(
  "import { Moon, Sun, Menu, X, Search, GraduationCap } from 'lucide-react';",
  "import { Moon, Sun, Menu, X, Search, GraduationCap, LogIn, LogOut, User as UserIcon } from 'lucide-react';"
);
content = content.replace(
  "import { useTheme } from '@/contexts/ThemeContext';",
  "import { useTheme } from '@/contexts/ThemeContext';\nimport { useAuth } from '@/contexts/AuthContext';"
);

// 2. Add hook to component
content = content.replace(
  "const { theme, setTheme } = useTheme();",
  "const { theme, setTheme } = useTheme();\n  const { user, profile, login, logout, loading } = useAuth();"
);

// 3. Add Admin link
content = content.replace(
  "];\n\n  return (",
  "];\n\n  if (profile?.role === 'admin') {\n    navLinks.push({ name: 'Admin', path: '/admin' });\n  }\n\n  return ("
);

// 4. Update title capitalization
content = content.replace(
  "<span className=\"text-lg font-bold tracking-tight\">Subjects2skills Navigator</span>",
  "<span className=\"text-lg font-bold tracking-tight hidden lg:inline\">Subjects2Skills Navigator</span>\n              <span className=\"text-lg font-bold tracking-tight lg:hidden\">S2S</span>"
);

// 5. Update Desktop Nav styling to fit
content = content.replace(
  "className=\"hidden md:flex items-center space-x-1 lg:space-x-4\"",
  "className=\"hidden md:flex flex-wrap items-center gap-1 lg:gap-2\""
);
content = content.replace(
  "px-3 py-2 rounded-md text-sm font-medium transition-colors",
  "px-2 py-2 rounded-md text-sm font-medium transition-colors"
);

// 6. Inject Desktop Auth button
content = content.replace(
  "<GlobalSearch />",
  `<GlobalSearch />\n              {!loading && (\n                <div className="hidden sm:flex items-center">\n                  {user ? (\n                    <Button variant="ghost" size="sm" onClick={logout} className="text-slate-600 dark:text-slate-400 flex items-center gap-2">\n                      <UserIcon className="h-4 w-4" />\n                      <span className="hidden lg:inline">{profile?.displayName || user.email?.split('@')[0]}</span>\n                      <LogOut className="h-4 w-4 ml-1" />\n                    </Button>\n                  ) : (\n                    <Button variant="outline" size="sm" onClick={login} className="flex items-center gap-2">\n                      <LogIn className="h-4 w-4" />\n                      <span>Educator Login</span>\n                    </Button>\n                  )}\n                </div>\n              )}`
);

// 7. Inject Mobile Auth Button
content = content.replace(
  "</div>\n          </div>\n        )}\n      </header>",
  `  {!loading && (\n                <div className="mt-4 pt-4 border-t border-slate-200 dark:border-slate-800">\n                  {user ? (\n                    <Button variant="ghost" className="w-full justify-start text-slate-600 dark:text-slate-400" onClick={logout}>\n                      <LogOut className="h-4 w-4 mr-2" />\n                      Logout ({profile?.role})\n                    </Button>\n                  ) : (\n                    <Button variant="outline" className="w-full justify-start" onClick={login}>\n                      <LogIn className="h-4 w-4 mr-2" />\n                      Educator Login\n                    </Button>\n                  )}\n                </div>\n              )}\n            </div>\n          </div>\n        )}\n      </header>`
);

fs.writeFileSync('src/components/Layout.tsx', content);
