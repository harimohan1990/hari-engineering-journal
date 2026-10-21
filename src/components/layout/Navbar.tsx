import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Terminal, Search, Menu, X } from 'lucide-react';
import { ThemeToggle } from './ThemeToggle';
import { SearchModal } from '../common/SearchModal';
import { GithubIcon } from '../common/SocialIcons';

export const Navbar: React.FC = () => {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { label: 'Articles', path: '/posts' },
    { label: 'Projects', path: '/projects' },
    { label: 'About & Contact', path: '/about' },
  ];

  const isActive = (path: string) => {
    if (path === '/posts') {
      return location.pathname === '/posts' || location.pathname.startsWith('/posts/');
    }
    return location.pathname === path;
  };

  return (
    <>
      <header className="sticky top-0 z-40 w-full backdrop-blur-md bg-dark-bg/85 dark:bg-dark-bg/85 light:bg-white/85 border-b border-dark-border/80 dark:border-dark-border/80 light:border-slate-200 transition-colors">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <Link
              to="/"
              className="flex items-center space-x-3 group focus:outline-none focus:ring-2 focus:ring-brand-500 rounded-lg p-1"
            >
              <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-brand-500/20 to-cyanBrand-500/20 border border-brand-500/40 flex items-center justify-center text-brand-400 group-hover:border-brand-400 transition-colors shadow-sm">
                <Terminal className="w-5 h-5 text-brand-400" />
              </div>
              <div className="flex flex-col">
                <div className="flex items-center space-x-2">
                  <span className="font-bold text-base sm:text-lg tracking-tight text-slate-100 light:text-slate-900 group-hover:text-brand-400 transition-colors">
                    Backend Engineering Journal
                  </span>
                  <span className="inline-flex items-center px-1.5 py-0.2 text-[10px] font-mono font-medium rounded bg-brand-950 text-brand-400 border border-brand-800/40 hidden sm:inline-block">
                    PROD
                  </span>
                </div>
                <span className="text-[11px] text-slate-400 hidden md:block">
                  Distributed Systems • Cloud • AI Infrastructure
                </span>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-1 lg:space-x-2">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`px-3 py-1.5 rounded-lg text-sm font-medium transition-colors ${
                    isActive(link.path)
                      ? 'text-brand-400 light:text-brand-600 bg-brand-950/40 light:bg-brand-50 border border-brand-800/30'
                      : 'text-slate-300 light:text-slate-600 hover:text-slate-100 light:hover:text-slate-900 hover:bg-dark-surface/60 light:hover:bg-slate-100'
                  }`}
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            {/* Actions: Search, GitHub, Theme, Mobile toggle */}
            <div className="flex items-center space-x-2 sm:space-x-3">
              {/* Search button */}
              <button
                type="button"
                onClick={() => setIsSearchOpen(true)}
                className="flex items-center space-x-2 text-xs sm:text-sm text-slate-400 hover:text-slate-200 bg-dark-surface/90 hover:bg-dark-elevated px-2.5 py-1.5 rounded-lg border border-dark-border transition-all light:bg-slate-100 light:text-slate-600 light:hover:bg-slate-200 light:border-slate-200"
                aria-label="Search articles"
              >
                <Search className="w-4 h-4 text-brand-400" />
                <span className="hidden sm:inline">Search...</span>
                <kbd className="hidden lg:inline-block font-mono text-[10px] bg-dark-bg px-1.5 py-0.5 rounded border border-dark-border text-slate-400 light:bg-white light:border-slate-300">
                  ⌘K
                </kbd>
              </button>

              {/* GitHub Link */}
              <a
                href="https://github.com/harimohan1990/hari-engineering-journal"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub Repository"
                className="p-2 rounded-lg text-slate-400 hover:text-white light:hover:text-slate-900 hover:bg-dark-surface light:hover:bg-slate-100 border border-transparent hover:border-dark-border light:hover:border-slate-200 transition-colors hidden sm:flex"
              >
                <GithubIcon size={18} />
              </a>

              {/* Theme Toggle */}
              <ThemeToggle />

              {/* Mobile menu trigger */}
              <button
                type="button"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="p-2 rounded-lg text-slate-400 hover:text-white md:hidden hover:bg-dark-surface border border-transparent hover:border-dark-border"
                aria-label="Toggle navigation menu"
              >
                {isMobileMenuOpen ? (
                  <X className="w-5 h-5" />
                ) : (
                  <Menu className="w-5 h-5" />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {isMobileMenuOpen && (
          <div className="md:hidden border-t border-dark-border bg-dark-surface/95 backdrop-blur-md px-4 pt-3 pb-5 space-y-2 light:bg-white light:border-slate-200">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setIsMobileMenuOpen(false)}
                className={`block px-3 py-2 rounded-lg text-base font-medium transition-colors ${
                  isActive(link.path)
                    ? 'text-brand-400 bg-brand-950/40 border border-brand-800/40'
                    : 'text-slate-300 hover:bg-dark-elevated light:text-slate-700 light:hover:bg-slate-100'
                }`}
              >
                {link.label}
              </Link>
            ))}
            <div className="pt-2 border-t border-dark-border light:border-slate-200 flex items-center justify-between">
              <a
                href="https://github.com/harimohan1990/hari-engineering-journal"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 text-sm text-slate-400 hover:text-white py-1"
              >
                <GithubIcon size={16} />
                <span>GitHub Repository</span>
              </a>
            </div>
          </div>
        )}
      </header>

      {/* Global Search Modal */}
      <SearchModal
        isOpen={isSearchOpen}
        onClose={() => setIsSearchOpen(false)}
      />
    </>
  );
};
