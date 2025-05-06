import React from 'react';
import { Shield, Zap, MessageCircle, Sparkles, LineChart, Clock } from 'lucide-react';

const BenefitItem = ({ icon, title, description }: { icon: React.ReactNode, title: string, description: string }) => (
  <div className="flex items-start gap-4">
    <div className="flex-shrink-0 mt-1">
      <div className="h-10 w-10 bg-teal-100 text-teal-700 rounded-lg flex items-center justify-center">
        {icon}
      </div>
    </div>
    <div>
      <h3 className="text-lg font-semibold mb-2">{title}</h3>
      <p className="text-slate-600">{description}</p>
    </div>
  </div>
);

const Benefits = () => {
  return (
    <section id="benefits" className="py-16 md:py-24 bg-gradient-to-b from-blue-50 to-white">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Benefits of SpineScan</h2>
          <p className="text-lg text-slate-700">
            Our app offers more than just a diagnosis—it's a comprehensive solution for your spine health journey.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
          <BenefitItem 
            icon={<Shield size={24} />}
            title="Non-Invasive Assessment"
            description="Get a spine analysis without radiation or invasive procedures, all from the comfort of your home."
          />
          
          <BenefitItem 
            icon={<Zap size={24} />}
            title="Instant Results"
            description="Receive immediate analysis and recommendations without waiting days for traditional diagnostic results."
          />
          
          <BenefitItem 
            icon={<MessageCircle size={24} />}
            title="24/7 AI Support"
            description="Access our intelligent chatbot anytime with questions about your spine health, posture, or recommended exercises."
          />
          
          <BenefitItem 
            icon={<Sparkles size={24} />}
            title="Personalized Guidance"
            description="Get customized recommendations based on your unique spine profile and specific health concerns."
          />
          
          <BenefitItem 
            icon={<LineChart size={24} />}
            title="Progress Tracking"
            description="Monitor improvements over time with detailed progress reports and comparison analytics."
          />
          
          <BenefitItem 
            icon={<Clock size={24} />}
            title="Early Detection"
            description="Identify potential spine issues before they become serious problems, enabling proactive care."
          />
        </div>
        
        <div className="mt-16 bg-gradient-to-r from-blue-800 to-teal-600 rounded-2xl overflow-hidden shadow-xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 items-center">
            <div className="p-8 md:p-12">
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">Professional Clinical Network</h3>
              <p className="text-blue-100 mb-6">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent rutrum maximus mauris sed sodales.
                </p>
              <ul className="space-y-3 text-white">
                {['Verified spine specialists', 'Direct appointment booking', 'Shared diagnostic data', 'Integrated care planning'].map((item, index) => (
                  <li key={index} className="flex items-center">
                    <svg className="h-5 w-5 mr-2 text-teal-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="h-full">
              <img 
                src="https://raw.githubusercontent.com/Lalacol1993/NAIC-AHIS-website/refs/heads/main/img/Placeholder.png" 
                alt="Professional healthcare" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Benefits;
