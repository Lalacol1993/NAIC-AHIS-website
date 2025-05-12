import React, { useState, useEffect } from 'react';
import { Menu, X, ChevronDown, Globe } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [languageMenuOpen, setLanguageMenuOpen] = useState(false);
  const { t, i18n } = useTranslation();

  const languages = [
    { code: 'en', name: 'English' },
    { code: 'ms', name: 'Bahasa Malaysia' },
    { code: 'zh', name: '中文' }
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const changeLanguage = (langCode: string) => {
    i18n.changeLanguage(langCode);
    setLanguageMenuOpen(false);
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const headerOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
      setIsMenuOpen(false);
    }
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled ? 'bg-white/80 dark:bg-gray-900/80 backdrop-blur-md shadow-md' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <button
            onClick={() => scrollToSection('hero')}
            className="text-2xl font-bold bg-gradient-to-r from-primary-600 to-primary-800 bg-clip-text text-transparent hover:opacity-80 transition-all duration-300 hover:scale-105 active:scale-95 transform"
          >
            BlueJay²
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8 text-lg">
            <button
              onClick={() => scrollToSection('features')}
              className="font-medium text-gray-800 dark:text-gray-200 hover:text-primary-700 dark:hover:text-primary-400 transition-all duration-300 relative group"
            >
              {t('nav.features')}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary-600 dark:bg-primary-400 group-hover:w-full transition-all duration-300"></span>
            </button>
            <button
              onClick={() => scrollToSection('how-it-works')}
              className="font-medium text-gray-800 dark:text-gray-200 hover:text-primary-700 dark:hover:text-primary-400 transition-all duration-300 relative group"
            >
              {t('nav.howItWorks')}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary-600 dark:bg-primary-400 group-hover:w-full transition-all duration-300"></span>
            </button>
            <button
              onClick={() => scrollToSection('benefits')}
              className="font-medium text-gray-800 dark:text-gray-200 hover:text-primary-700 dark:hover:text-primary-400 transition-all duration-300 relative group"
            >
              {t('nav.benefits')}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary-600 dark:bg-primary-400 group-hover:w-full transition-all duration-300"></span>
            </button>
            <button
              onClick={() => scrollToSection('faq')}
              className="font-medium text-gray-800 dark:text-gray-200 hover:text-primary-700 dark:hover:text-primary-400 transition-all duration-300 relative group"
            >
              {t('nav.faq')}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary-600 dark:bg-primary-400 group-hover:w-full transition-all duration-300"></span>
            </button>
            
            <div className="relative">
              <button
                className="flex items-center space-x-1 font-medium text-gray-800 dark:text-gray-200 hover:text-primary-700 dark:hover:text-primary-400 transition-all duration-300 hover:scale-105 active:scale-95 transform"
                onClick={() => setLanguageMenuOpen(!languageMenuOpen)}
              >
                <Globe size={20} className="transition-transform duration-300 group-hover:rotate-12" />
                <span>{languages.find(lang => lang.code === i18n.language)?.name || 'English'}</span>
                <ChevronDown size={16} className={`transition-transform duration-300 ${languageMenuOpen ? 'rotate-180' : ''}`} />
              </button>
              
              {languageMenuOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-white dark:bg-gray-800 rounded-lg shadow-lg py-1 z-50 animate-fadeIn">
                  {languages.map((language) => (
                    <button
                      key={language.code}
                      className={`block w-full text-left px-4 py-2 hover:bg-primary-50 dark:hover:bg-gray-700 text-gray-800 dark:text-gray-200 transition-all duration-200 hover:translate-x-1 transform ${
                        language.code === i18n.language ? 'text-primary-700 dark:text-primary-400 font-medium' : ''
                      }`}
                      onClick={() => changeLanguage(language.code)}
                    >
                      {language.name}
                    </button>
                  ))}
                </div>
              )}
            </div>
          </nav>

          <button className="hidden md:block bg-primary-600 hover:bg-primary-700 text-white font-medium py-3 px-6 rounded-lg text-lg transition-all duration-300 hover:shadow-lg hover:scale-105 active:scale-95 transform">
            {t('nav.downloadApp')}
          </button>

          <button
            className="md:hidden text-gray-800 dark:text-gray-200 focus:outline-none transition-all duration-300 hover:scale-110 active:scale-95 transform"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden bg-white dark:bg-gray-800 shadow-lg absolute top-full left-0 w-full animate-slideDown">
          <div className="container mx-auto px-4 py-3 flex flex-col space-y-4 text-lg">
            <button 
              onClick={() => scrollToSection('features')}
              className="font-medium py-2 text-gray-800 dark:text-gray-200 text-left transition-all duration-300 hover:translate-x-2 transform hover:text-primary-700 dark:hover:text-primary-400"
            >
              {t('nav.features')}
            </button>
            <button 
              onClick={() => scrollToSection('how-it-works')}
              className="font-medium py-2 text-gray-800 dark:text-gray-200 text-left transition-all duration-300 hover:translate-x-2 transform hover:text-primary-700 dark:hover:text-primary-400"
            >
              {t('nav.howItWorks')}
            </button>
            <button 
              onClick={() => scrollToSection('benefits')}
              className="font-medium py-2 text-gray-800 dark:text-gray-200 text-left transition-all duration-300 hover:translate-x-2 transform hover:text-primary-700 dark:hover:text-primary-400"
            >
              {t('nav.benefits')}
            </button>
            <button 
              onClick={() => scrollToSection('faq')}
              className="font-medium py-2 text-gray-800 dark:text-gray-200 text-left transition-all duration-300 hover:translate-x-2 transform hover:text-primary-700 dark:hover:text-primary-400"
            >
              {t('nav.faq')}
            </button>
            
            <div className="relative py-2">
              <button 
                className="flex items-center space-x-1 font-medium text-gray-800 dark:text-gray-200 transition-all duration-300 hover:translate-x-2 transform hover:text-primary-700 dark:hover:text-primary-400"
                onClick={(e) => {
                  e.stopPropagation();
                  setLanguageMenuOpen(!languageMenuOpen);
                }}
              >
                <Globe size={20} className="transition-transform duration-300 group-hover:rotate-12" />
                <span>{languages.find(lang => lang.code === i18n.language)?.name || 'English'}</span>
                <ChevronDown size={16} className={`transition-transform duration-300 ${languageMenuOpen ? 'rotate-180' : ''}`} />
              </button>
              
              {languageMenuOpen && (
                <div className="mt-2 bg-primary-50 dark:bg-gray-700 rounded-lg py-1 pl-6 animate-fadeIn">
                  {languages.map((language) => (
                    <button
                      key={language.code}
                      className={`block w-full text-left py-2 text-gray-800 dark:text-gray-200 transition-all duration-200 hover:translate-x-2 transform ${
                        language.code === i18n.language ? 'text-primary-700 dark:text-primary-400 font-medium' : ''
                      }`}
                      onClick={() => changeLanguage(language.code)}
                    >
                      {language.name}
                    </button>
                  ))}
                </div>
              )}
            </div>
            
            <button className="bg-primary-600 hover:bg-primary-700 text-white font-medium py-3 px-6 rounded-lg transition-all duration-300 hover:shadow-lg hover:scale-105 active:scale-95 transform">
              {t('nav.downloadApp')}
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
