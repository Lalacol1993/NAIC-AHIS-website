import React from 'react';
import { Camera, BrainCircuit, MessageSquare, Globe, Stethoscope, CalendarCheck } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const FeatureCard = ({ icon, title, description }: { icon: React.ReactNode, title: string, description: string }) => (
  <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 border border-gray-100 dark:border-gray-700">
    <div className="h-12 w-12 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-lg flex items-center justify-center mb-5">
      {icon}
    </div>
    <h3 className="text-xl font-bold mb-3 dark:text-white">{title}</h3>
    <p className="text-slate-600 dark:text-gray-300">{description}</p>
  </div>
);

const Features = () => {
  const { t } = useTranslation();
  
  return (
    <section id="features" className="py-16 md:py-24 bg-gradient-to-b from-white to-blue-50 dark:from-gray-900 dark:to-gray-800">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 dark:text-white">{t('features.title')}</h2>
          <p className="text-lg text-slate-700 dark:text-gray-300">
            {t('features.description')}
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <FeatureCard 
            icon={<Camera size={24} />}
            title={t('features.spineScanning.title')}
            description={t('features.spineScanning.description')}
          />
          
          <FeatureCard 
            icon={<BrainCircuit size={24} />}
            title={t('features.analysis.title')}
            description={t('features.analysis.description')}
          />
          
          <FeatureCard 
            icon={<MessageSquare size={24} />}
            title={t('features.assistant.title')}
            description={t('features.assistant.description')}
          />
          
          <FeatureCard 
            icon={<Globe size={24} />}
            title={t('features.multilingual.title')}
            description={t('features.multilingual.description')}
          />
        </div>
      </div>
    </section>
  );
};

export default Features;
