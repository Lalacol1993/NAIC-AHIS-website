import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const FAQ = () => {
  const { t } = useTranslation();
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: t('faq.accuracy.question'),
      answer: t('faq.accuracy.answer')
    },
    {
      question: t('faq.privacy.question'),
      answer: t('faq.privacy.answer')
    },
    {
      question: t('faq.languages.question'),
      answer: t('faq.languages.answer')
    },
    {
      question: t('faq.scanFrequency.question'),
      answer: t('faq.scanFrequency.answer')
    }
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-16 md:py-24 bg-gradient-to-b from-blue-50 to-white dark:from-gray-900 dark:to-gray-800">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 dark:text-white">{t('faq.title')}</h2>
          <p className="text-lg text-slate-700 dark:text-gray-300">
            {t('faq.description')}
          </p>
        </div>

        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden"
            >
              <button
                className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors dark:text-white"
                onClick={() => toggleFAQ(index)}
              >
                <span className="font-medium text-lg">{faq.question}</span>
                {openIndex === index ? (
                  <ChevronUp size={20} className="text-blue-800 dark:text-blue-400" />
                ) : (
                  <ChevronDown size={20} className="text-blue-800 dark:text-blue-400" />
                )}
              </button>
              
              {openIndex === index && (
                <div className="px-6 py-4 bg-gray-50 dark:bg-gray-700">
                  <p className="text-slate-700 dark:text-gray-300">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
          
        <div className="mt-12 bg-white dark:bg-gray-800 p-8 rounded-xl shadow-md text-center">
          <h3 className="text-xl font-bold mb-4 dark:text-white">{t('faq.contact.title')}</h3>
          <p className="text-slate-700 dark:text-gray-300 mb-6">
            {t('faq.contact.description')}
          </p>
          <button className="bg-blue-800 hover:bg-blue-900 text-white font-medium py-3 px-8 rounded-lg transition-colors">
            {t('faq.contact.button')}
          </button>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
