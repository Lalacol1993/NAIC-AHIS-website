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
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const changeLanguage = (langCode: string) => {
    i18n.changeLanguage(langCode);
    setLanguageMenuOpen(false);
  };

  return (
    <header 
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-white shadow-md py-3' : 'bg-transparent py-5'
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <div className="flex items-center">
          <span className="text-2xl font-bold bg-gradient-to-r from-primary-600 to-primary-800 bg-clip-text text-transparent">
            BlueJay²
          </span>
        </div>

        <nav className="hidden md:flex items-center space-x-8 text-lg">
          <a href="#features" className="font-medium hover:text-primary-700 transition-colors">{t('nav.features')}</a>
          <a href="#how-it-works" className="font-medium hover:text-primary-700 transition-colors">{t('nav.howItWorks')}</a>
          <a href="#benefits" className="font-medium hover:text-primary-700 transition-colors">{t('nav.benefits')}</a>
          <a href="#faq" className="font-medium hover:text-primary-700 transition-colors">{t('nav.faq')}</a>
          
          <div className="relative">
            <button 
              className="flex items-center space-x-1 font-medium hover:text-primary-700 transition-colors"
              onClick={() => setLanguageMenuOpen(!languageMenuOpen)}
            >
              <Globe size={20} />
              <span>{languages.find(lang => lang.code === i18n.language)?.name || 'English'}</span>
              <ChevronDown size={16} />
            </button>
            
            {languageMenuOpen && (
              <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg py-1 z-50">
                {languages.map((language) => (
                  <button
                    key={language.code}
                    className={`block w-full text-left px-4 py-2 hover:bg-primary-50 ${
                      language.code === i18n.language ? 'text-primary-700 font-medium' : ''
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

        <button className="hidden md:block bg-primary-600 hover:bg-primary-700 text-white font-medium py-3 px-6 rounded-lg text-lg transition-all hover:shadow-lg">
          {t('nav.downloadApp')}
        </button>

        <button
          className="md:hidden text-secondary-600 focus:outline-none"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {isMenuOpen && (
        <div className="md:hidden bg-white shadow-lg absolute top-full left-0 w-full">
          <div className="container mx-auto px-4 py-3 flex flex-col space-y-4 text-lg">
            <a href="#features" className="font-medium py-2" onClick={() => setIsMenuOpen(false)}>{t('nav.features')}</a>
            <a href="#how-it-works" className="font-medium py-2" onClick={() => setIsMenuOpen(false)}>{t('nav.howItWorks')}</a>
            <a href="#benefits" className="font-medium py-2" onClick={() => setIsMenuOpen(false)}>{t('nav.benefits')}</a>
            <a href="#faq" className="font-medium py-2" onClick={() => setIsMenuOpen(false)}>{t('nav.faq')}</a>
            
            <div className="relative py-2">
              <button 
                className="flex items-center space-x-1 font-medium"
                onClick={(e) => {
                  e.stopPropagation();
                  setLanguageMenuOpen(!languageMenuOpen);
                }}
              >
                <Globe size={20} />
                <span>{languages.find(lang => lang.code === i18n.language)?.name || 'English'}</span>
                <ChevronDown size={16} />
              </button>
              
              {languageMenuOpen && (
                <div className="mt-2 bg-primary-50 rounded-lg py-1 pl-6">
                  {languages.map((language) => (
                    <button
                      key={language.code}
                      className={`block w-full text-left py-2 ${
                        language.code === i18n.language ? 'text-primary-700 font-medium' : ''
                      }`}
                      onClick={() => changeLanguage(language.code)}
                    >
                      {language.name}
                    </button>
                  ))}
                </div>
              )}
            </div>
            
            <button className="bg-primary-600 hover:bg-primary-700 text-white font-medium py-3 px-6 rounded-lg transition-all hover:shadow-lg">
              {t('nav.downloadApp')}
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
