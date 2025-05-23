import React from 'react';
import { Shield, Zap, MessageCircle, Sparkles, LineChart, Clock } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const BenefitItem = ({ icon, title, description }: { icon: React.ReactNode, title: string, description: string }) => (
  <div className="flex items-start gap-4">
    <div className="flex-shrink-0 mt-1">
      <div className="h-10 w-10 bg-teal-100 dark:bg-teal-900 text-teal-700 dark:text-teal-200 rounded-lg flex items-center justify-center">
        {icon}
      </div>
    </div>
    <div>
      <h3 className="text-lg font-semibold mb-2 dark:text-white">{title}</h3>
      <p className="text-slate-600 dark:text-gray-300">{description}</p>
    </div>
  </div>
);

const Benefits = () => {
  const { t } = useTranslation();

  return (
    <section id="benefits" className="py-16 md:py-24 bg-gradient-to-b from-blue-50 to-white dark:from-gray-900 dark:to-gray-800">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 dark:text-white">{t('benefits.title')}</h2>
          <p className="text-lg text-slate-700 dark:text-gray-300">
            {t('benefits.description')}
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
          <BenefitItem 
            icon={<Shield size={24} />}
            title={t('benefits.items.nonInvasive.title')}
            description={t('benefits.items.nonInvasive.description')}
          />
          
          <BenefitItem 
            icon={<Zap size={24} />}
            title={t('benefits.items.instant.title')}
            description={t('benefits.items.instant.description')}
          />
          
          <BenefitItem 
            icon={<MessageCircle size={24} />}
            title={t('benefits.items.support.title')}
            description={t('benefits.items.support.description')}
          />
          
          <BenefitItem 
            icon={<Sparkles size={24} />}
            title={t('benefits.items.personalized.title')}
            description={t('benefits.items.personalized.description')}
          />
          
          <BenefitItem 
            icon={<LineChart size={24} />}
            title={t('benefits.items.tracking.title')}
            description={t('benefits.items.tracking.description')}
          />
          
          <BenefitItem 
            icon={<Clock size={24} />}
            title={t('benefits.items.detection.title')}
            description={t('benefits.items.detection.description')}
          />
        </div>
        
        <div className="mt-16 bg-gradient-to-r from-blue-800 to-teal-600 rounded-2xl overflow-hidden shadow-xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 items-center">
            <div className="p-8 md:p-12">
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">{t('benefits.network.title')}</h3>
              <p className="text-blue-100 mb-6">
                {t('benefits.network.description')}
              </p>
              <ul className="space-y-3 text-white">
                {t('benefits.network.features', { returnObjects: true }).map((item: string, index: number) => (
                  <li key={index} className="flex items-center">
                    <svg className="h-5 w-5 mr-2 text-teal-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="h-full flex justify-center lg:justify-start items-center">
              <img 
                src="https://raw.githubusercontent.com/Lalacol1993/NAIC-AHIS-website/refs/heads/main/img/Bluejay%20X%20Redcrescent.png" 
                alt="Professional healthcare" 
                className="w-full h-full object-cover max-w-[400px] ml-0 lg:ml-8"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Benefits;
