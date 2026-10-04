import React, { useState, useEffect } from 'react';
import { Link, NavLink, useNavigate, useLocation } from 'react-router-dom';
import { 
  Menu, 
  X, 
  Sun, 
  Moon, 
  Search, 
  Zap, 
  BookOpen, 
  FileText, 
  Layers, 
  Sparkles,
  ArrowRight
} from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
import { trackEvent } from '../utils/analytics';

interface NavbarProps {
  onOpenLeadModal?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenLeadModal }) => {
  const { theme, toggleTheme } = useTheme();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  const handleStartLearningClick = () => {
    trackEvent('start_learning_click', { source: 'navbar_cta', path: location.pathname });
    navigate('/courses');
  };

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Courses', path: '/courses' },
    { name: 'Resources', path: '/resources' },
    { name: 'Blog', path: '/blog' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <header 
      className={`sticky top-0 z-40 w-full transition-all duration-200 ${
        isScrolled
          ? 'bg-white/95 dark:bg-[#0a0f1d]/95 backdrop-blur-md shadow-sm border-b border-slate-200/80 dark:border-slate-800'
          : 'bg-white/80 dark:bg-[#0a0f1d]/80 backdrop-blur-sm border-b border-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Brand Logo */}
          <Link 
            to="/" 
            className="flex items-center gap-3 group focus:outline-none focus:ring-2 focus:ring-brand-blue-500 rounded-lg p-1"
            onClick={() => trackEvent('brand_logo_click', { destination: '/' })}
          >
            <div className="relative w-10 h-10 rounded-xl bg-gradient-to-tr from-brand-blue-700 via-brand-purple-600 to-brand-cyan-500 p-0.5 shadow-md group-hover:shadow-glow-cyan transition-all duration-300 flex items-center justify-center">
              <div className="w-full h-full bg-slate-900 rounded-[10px] flex items-center justify-center">
                <Zap className="w-5 h-5 text-brand-cyan-400 group-hover:scale-110 transition-transform duration-200" />
              </div>
            </div>
            <div className="flex flex-col">
              <div className="flex items-center gap-1">
                <span className="font-extrabold text-xl tracking-tight text-slate-900 dark:text-white font-['Plus_Jakarta_Sans']">
                  SkillSprint
                </span>
                <span className="text-xl font-bold bg-gradient-to-r from-brand-cyan-500 to-brand-purple-500 bg-clip-text text-transparent">
                  India
                </span>
              </div>
              <span className="text-[10px] uppercase tracking-wider font-semibold text-slate-600 dark:text-slate-300 hidden sm:block">
                Learn Skills • Build Your Career
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-1 lg:gap-2">
            {navLinks.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                className={({ isActive }) =>
                  `px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                    isActive
                      ? 'text-brand-blue-600 dark:text-brand-cyan-400 bg-brand-blue-50 dark:bg-slate-800/80 font-semibold'
                      : 'text-slate-700 dark:text-slate-200 hover:text-brand-blue-600 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800/50'
                  }`
                }
              >
                {link.name}
              </NavLink>
            ))}
          </nav>

          {/* Right Action Icons & CTA */}
          <div className="flex items-center gap-2 sm:gap-3">
            
            {/* Global Search Shortcut */}
            <Link
              to="/search"
              aria-label="Search courses, blogs, and resources"
              className="p-2 text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-brand-blue-500"
              onClick={() => trackEvent('search_shortcut_click', { path: location.pathname })}
            >
              <Search className="w-5 h-5" />
            </Link>

            {/* Dark Mode Toggle */}
            <button
              onClick={toggleTheme}
              aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
              className="p-2 text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-brand-purple-500"
            >
              {theme === 'dark' ? (
                <Sun className="w-5 h-5 text-amber-400" />
              ) : (
                <Moon className="w-5 h-5 text-slate-600" />
              )}
            </button>

            {/* Start Learning CTA Button (Desktop) */}
            <button
              id="navbar-start-learning-btn"
              onClick={handleStartLearningClick}
              className="hidden sm:inline-flex items-center gap-2 px-5 py-2.5 rounded-xl font-semibold text-sm text-white bg-gradient-to-r from-brand-blue-600 via-brand-purple-600 to-brand-cyan-600 hover:from-brand-blue-700 hover:via-brand-purple-700 hover:to-brand-cyan-700 shadow-md hover:shadow-soft-lg active:scale-95 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brand-blue-500"
            >
              <span>Start Learning</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            {/* Mobile Hamburger Button */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-expanded={mobileMenuOpen}
              aria-label="Toggle mobile menu"
              className="md:hidden p-2 rounded-lg text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors focus:outline-none focus:ring-2 focus:ring-brand-blue-500"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white dark:bg-[#0a0f1d] border-b border-slate-200 dark:border-slate-800 px-4 pt-3 pb-6 space-y-3 shadow-xl animate-in slide-in-from-top duration-200">
          <div className="grid grid-cols-1 gap-1">
            {navLinks.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                className={({ isActive }) =>
                  `flex items-center justify-between px-4 py-3 rounded-xl text-base font-medium transition-colors ${
                    isActive
                      ? 'bg-brand-blue-50 dark:bg-slate-800 text-brand-blue-700 dark:text-brand-cyan-400 font-semibold'
                      : 'text-slate-700 dark:text-slate-200 hover:bg-slate-50 dark:hover:bg-slate-800/50'
                  }`
                }
              >
                <span>{link.name}</span>
                <ArrowRight className="w-4 h-4 opacity-50" />
              </NavLink>
            ))}
          </div>

          <div className="pt-2 border-t border-slate-100 dark:border-slate-800 space-y-2">
            <button
              onClick={handleStartLearningClick}
              className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl text-white font-semibold text-base bg-gradient-to-r from-brand-blue-600 to-brand-purple-600 shadow-md active:scale-98 transition-all"
            >
              <span>Explore Courses</span>
              <ArrowRight className="w-4 h-4" />
            </button>
            
            <Link
              to="/campaign/digital-marketing"
              className="w-full flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl text-brand-purple-600 dark:text-brand-cyan-400 bg-brand-purple-50 dark:bg-slate-800/80 font-medium text-sm text-center"
              onClick={() => trackEvent('mobile_menu_free_starter_kit_click')}
            >
              <Sparkles className="w-4 h-4" />
              <span>Free Starter Guide (Special)</span>
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};
