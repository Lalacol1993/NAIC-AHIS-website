import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const faqs = [
  {
    question: "How accurate is the spine scanning technology?",
    answer: "Our AI-powered scanning technology has been clinically validated to detect spine points with up to 97% accuracy compared to professional assessments. The technology has been tested against traditional methods such as X-rays and professional physical examinations with excellent correlation. However, it's important to note that SpineScan is designed as a screening and monitoring tool, not a replacement for medical imaging when clinically indicated."
  },
  {
    question: "Is my health data private and secure?",
    answer: "Absolutely. We take data privacy extremely seriously. All your health data is encrypted end-to-end and stored securely in compliance with HIPAA regulations. Your data is never sold to third parties, and you have complete control over who can access your information. You can also choose to delete your data at any time through the app settings."
  },
  {
    question: "What languages does the AI chatbot support?",
    answer: "Currently, our AI chatbot supports English, Bahasa Melayu, and 中文 with both text and voice interaction. We're continuously working to add more languages to make spine health information accessible to people worldwide. Each language version is specially trained on medical terminology to ensure accuracy in health communications."
  },
  {
    question: "How often should I scan my spine?",
    answer: "For general monitoring, we recommend scanning once every 2-4 weeks. However, if you're following a specific treatment plan or rehabilitation program, your healthcare provider might recommend more frequent scans to track progress. The app will send you gentle reminders based on your personalized schedule."
  },
  {
    question: "Can children use SpineScan?",
    answer: "SpineScan is primarily designed for adults and teenagers (13+). The app can be used for younger children, but should be administered by a parent or guardian. We've included special guidelines for scanning children's spines, as their proportions and anatomy differ slightly from adults. Always consult with a pediatric specialist before making health decisions based on scan results for children."
  },
  {
    question: "What if I don't have anyone to help me take the scan?",
    answer: "We've designed SpineScan with this in mind. The app includes a self-scanning mode with clear voice instructions and visual guides to help you position your phone correctly. Using the timer function or voice commands, you can trigger the scan without needing to touch the screen. We also provide accessories like phone stands (sold separately) that can make self-scanning even easier."
  }
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Frequently Asked Questions</h2>
          <p className="text-lg text-slate-700">
            Find answers to common questions about SpineScan technology and functionality.
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div 
                key={index} 
                className="bg-white rounded-xl overflow-hidden shadow-sm border border-gray-100"
              >
                <button
                  className="w-full px-6 py-5 text-left flex justify-between items-center focus:outline-none"
                  onClick={() => toggleFAQ(index)}
                >
                  <h3 className="text-lg font-semibold text-slate-900">{faq.question}</h3>
                  {openIndex === index ? 
                    <ChevronUp className="text-blue-800" size={20} /> : 
                    <ChevronDown className="text-slate-500" size={20} />
                  }
                </button>
                
                {openIndex === index && (
                  <div className="px-6 pb-5">
                    <div className="border-t border-gray-100 pt-4">
                      <p className="text-slate-700 leading-relaxed">{faq.answer}</p>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
          
          <div className="mt-12 bg-white p-8 rounded-xl shadow-md text-center">
            <h3 className="text-xl font-bold mb-4">Still have questions?</h3>
            <p className="text-slate-700 mb-6">
              Our support team is ready to help you with any questions you might have about SpineScan.
            </p>
            <button className="bg-blue-800 hover:bg-blue-900 text-white font-medium py-3 px-8 rounded-lg transition-colors">
              Contact Support
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
