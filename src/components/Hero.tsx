import React from 'react';
import { ArrowRight, Phone } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const Hero = () => {
  const { t } = useTranslation();
  
  return (
    <section id="hero" className="pt-24 pb-16 md:pt-32 md:pb-24 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          <div className="w-full lg:w-1/2 lg:pr-8">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              {t('hero.title')}
              <span className="block mt-2 bg-gradient-to-r from-blue-600 to-teal-500 bg-clip-text text-transparent dark:from-blue-400 dark:to-teal-300">
                {t('hero.subtitle')}
              </span>
            </h1>
            
            <p className="text-lg md:text-xl text-slate-700 dark:text-slate-300 mb-8 leading-relaxed">
              {t('hero.description')}
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6">
              <button className="bg-blue-800 hover:bg-blue-900 text-white font-medium py-3 px-8 rounded-full transition-all hover:shadow-lg flex items-center justify-center gap-2">
                <Phone size={20} />
                <span>{t('hero.downloadButton')}</span>
              </button>
              
              <button className="bg-transparent border-2 border-blue-800 text-blue-800 hover:bg-blue-50 font-medium py-3 px-8 rounded-full transition-all flex items-center justify-center gap-2 dark:border-blue-400 dark:text-blue-400 dark:hover:bg-blue-900/20">
                {t('hero.learnMoreButton')}
                <ArrowRight size={18} />
              </button>
            </div>
          </div>
          
          <div className="w-full lg:w-1/2 relative">
            <div className="bg-gradient-to-br from-blue-800/20 to-teal-600/20 rounded-3xl p-3 shadow-2xl transform rotate-2 hover:rotate-0 transition-transform duration-500">
              <div className="relative bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-md">
                <img 
                  src="https://raw.githubusercontent.com/Lalacol1993/NAIC-AHIS-website/refs/heads/main/img/2D%20Scan%20Blue.png" 
                  alt="SpineScan App" 
                  className="w-full h-auto" 
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
