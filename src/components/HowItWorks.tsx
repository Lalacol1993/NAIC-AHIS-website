import React, { useState } from 'react';
import { CheckCircle } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const HowItWorks = () => {
  const [activeStep, setActiveStep] = useState(1);
  const { t } = useTranslation();

  const steps = [
    {
      id: 1,
      title: t('howItWorks.steps.scan.title'),
      description: t('howItWorks.steps.scan.description'),
      image: "blob:https://onedrive.live.com/b42859ba-d1a7-4f84-9552-650039a054c5"
    },
    {
      id: 2,
      title: t('howItWorks.steps.analysis.title'),
      description: t('howItWorks.steps.analysis.description'),
      image: "https://images.pexels.com/photos/8438922/pexels-photo-8438922.jpeg"
    },
    {
      id: 3,
      title: t('howItWorks.steps.results.title'),
      description: t('howItWorks.steps.results.description'),
      image: "https://images.pexels.com/photos/6497109/pexels-photo-6497109.jpeg"
    },
    {
      id: 4,
      title: t('howItWorks.steps.action.title'),
      description: t('howItWorks.steps.action.description'),
      image: "https://images.pexels.com/photos/8942991/pexels-photo-8942991.jpeg"
    }
  ];

  return (
    <section id="how-it-works" className="py-16 md:py-24 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 dark:text-white">{t('howItWorks.title')}</h2>
          <p className="text-lg text-slate-700 dark:text-gray-300">
            {t('howItWorks.description')}
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          <div className="order-2 lg:order-1">
            <div className="bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-xl">
              <img 
                src={steps.find(step => step.id === activeStep)?.image} 
                alt={steps.find(step => step.id === activeStep)?.title} 
                className="w-full h-auto object-cover aspect-[4/3] transition-all duration-500"
              />
            </div>
          </div>
          
          <div className="order-1 lg:order-2">
            <div className="space-y-6">
              {steps.map((step) => (
                <div 
                  key={step.id}
                  className={`p-6 rounded-xl cursor-pointer transition-all duration-300 ${
                    activeStep === step.id 
                      ? 'bg-blue-800 text-white shadow-lg' 
                      : 'bg-white dark:bg-gray-800 hover:bg-blue-50 dark:hover:bg-gray-700 border border-gray-100 dark:border-gray-700'
                  }`}
                  onClick={() => setActiveStep(step.id)}
                >
                  <div className="flex items-start gap-4">
                    <div className={`flex-shrink-0 rounded-full h-8 w-8 flex items-center justify-center text-sm font-bold ${
                      activeStep === step.id 
                        ? 'bg-white text-blue-800' 
                        : 'bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200'
                    }`}>
                      {step.id}
                    </div>
                    
                    <div>
                      <h3 className="text-xl font-bold mb-2 dark:text-white">{step.title}</h3>
                      <p className={activeStep === step.id ? 'text-blue-100' : 'text-slate-600 dark:text-gray-300'}>
                        {step.description}
                      </p>
                      
                      {activeStep === step.id && (
                        <div className="mt-4 flex">
                          <span className="inline-flex items-center text-sm font-medium">
                            <CheckCircle size={16} className="mr-1" />
                            Currently viewing
                          </span>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
