import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, Satellite, Waves, Activity, Mail, Home, User, Briefcase } from 'lucide-react';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { to: '/', label: 'Mission Control', icon: Home, section: 'home' },
    { to: '/about', label: 'Intelligence', icon: User, section: 'about' },
    { to: '/projects', label: 'Operations', icon: Briefcase, section: 'projects' },
    { to: '/contact', label: 'Communications', icon: Mail, section: 'Contact' },
  ];

  return (
    <>
      {/* Top Navbar */}
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled
            ? 'bg-slate-900/95 backdrop-blur-lg border-b border-cyan-400/20 shadow-2xl shadow-cyan-500/10'
            : 'bg-gradient-to-r from-slate-900/40 via-slate-800/30 to-slate-900/40 backdrop-blur-sm'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link to="/" className="group flex items-center gap-4">
              <div className="relative">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-cyan-500 to-blue-600 shadow-lg shadow-cyan-500/25 flex items-center justify-center group-hover:scale-110 transition-all duration-300">
                  <Satellite className="w-6 h-6 text-white animate-pulse" />
                </div>
                <div className="absolute -inset-1 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-xl blur opacity-20 group-hover:opacity-40 transition-opacity duration-300"></div>
              </div>
              <div className="hidden md:block">
                <div className="text-2xl font-black bg-gradient-to-r from-cyan-400 to-blue-300 bg-clip-text text-transparent">
                  FRONT2SPACE
                </div>
                <div className="text-xs text-cyan-400 font-mono tracking-wider">
                  OCEAN INTELLIGENCE
                </div>
              </div>
            </Link>

            {/* Desktop Menu */}
            <div className="hidden lg:flex items-center gap-2">
              {navItems.map((item) => {
                const Icon = item.icon;
                return (
                  <Link
                    key={item.to}
                    to={item.to}
                    className={`group relative px-6 py-3 rounded-full transition-all duration-300 ${
                      activeSection === item.section
                        ? 'bg-cyan-500/20 text-cyan-300 shadow-lg shadow-cyan-500/20'
                        : 'text-slate-300 hover:text-cyan-300 hover:bg-slate-800/50'
                    }`}
                    onClick={() => setActiveSection(item.section)}
                  >
                    <div className="flex items-center gap-3">
                      <Icon className="w-4 h-4" />
                      <span className="font-semibold">{item.label}</span>
                    </div>
                  </Link>
                );
              })}
            </div>

            {/* Right Section */}
            <div className="flex items-center gap-4">
              <div className="hidden md:flex items-center gap-3 px-4 py-2 rounded-full bg-slate-800/50 border border-slate-700/50 backdrop-blur-sm">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                <span className="text-green-400 text-sm font-mono">OPERATIONAL</span>
                <Activity className="w-4 h-4 text-green-400" />
              </div>

              {/* Mobile Toggle */}
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="lg:hidden p-3 rounded-xl bg-slate-800/50 border border-slate-700/50 backdrop-blur-sm text-cyan-400 hover:bg-slate-700/50 transition-all duration-300"
              >
                {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Data Stream Indicator */}
        <div
          className={`h-1 bg-gradient-to-r from-transparent via-cyan-400 to-transparent transition-all duration-500 ${
            isScrolled ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <div className="h-full bg-gradient-to-r from-cyan-400 to-blue-500 animate-pulse" />
        </div>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`fixed inset-0 z-40 lg:hidden transition-all duration-500 ${
          isMobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        <div
          className="absolute inset-0 bg-slate-900/80 backdrop-blur-lg"
          onClick={() => setIsMobileMenuOpen(false)}
        />
        <div
          className={`absolute top-0 right-0 h-full w-80 bg-gradient-to-b from-slate-900 to-slate-800 border-l border-cyan-400/20 shadow-2xl transform transition-transform duration-500 ${
            isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          {/* Header */}
          <div className="p-6 border-b border-slate-700/50 flex items-center justify-between">
            <div>
              <div className="text-xl font-black text-cyan-300">NAVIGATION</div>
              <div className="text-xs text-slate-400 font-mono">Mission Control Panel</div>
            </div>
            <button
              onClick={() => setIsMobileMenuOpen(false)}
              className="p-2 rounded-lg bg-slate-800 text-cyan-400 hover:bg-slate-700 transition-colors duration-200"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Items */}
          <div className="p-6 space-y-4">
            {navItems.map((item, index) => {
              const Icon = item.icon;
              return (
                <Link
                  key={item.to}
                  to={item.to}
                  onClick={() => {
                    setActiveSection(item.section);
                    setIsMobileMenuOpen(false);
                  }}
                  className={`group flex items-center gap-4 p-4 rounded-xl transition-all duration-300 ${
                    activeSection === item.section
                      ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-400/30'
                      : 'text-slate-300 hover:text-cyan-300 hover:bg-slate-800/50'
                  }`}
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div
                    className={`p-2 rounded-lg bg-gradient-to-br ${
                      activeSection === item.section
                        ? 'from-cyan-500 to-blue-600'
                        : 'from-slate-700 to-slate-600 group-hover:from-cyan-600 group-hover:to-blue-700'
                    }`}
                  >
                    <Icon className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <div className="font-semibold">{item.label}</div>
                    <div className="text-xs text-slate-400 font-mono">Access {item.section}</div>
                  </div>
                </Link>
              );
            })}
          </div>

          {/* Footer */}
          <div className="absolute bottom-6 left-6 right-6">
            <div className="p-4 rounded-xl bg-slate-800/50 border border-slate-700/50 backdrop-blur-sm">
              <div className="flex items-center gap-3 mb-2">
                <Waves className="w-4 h-4 text-cyan-400" />
                <span className="text-cyan-300 font-semibold text-sm">
                  Ocean Intelligence Active
                </span>
              </div>
              <div className="text-xs text-slate-400 font-mono">
                Satellite data stream operational
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
