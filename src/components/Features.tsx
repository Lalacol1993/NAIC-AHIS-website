import React from 'react';
import { Camera, BrainCircuit, MessageSquare, Globe, Stethoscope, CalendarCheck } from 'lucide-react';

const FeatureCard = ({ icon, title, description }: { icon: React.ReactNode, title: string, description: string }) => (
  <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 border border-gray-100">
    <div className="h-12 w-12 bg-blue-100 text-blue-800 rounded-lg flex items-center justify-center mb-5">
      {icon}
    </div>
    <h3 className="text-xl font-bold mb-3">{title}</h3>
    <p className="text-slate-600">{description}</p>
  </div>
);

const Features = () => {
  return (
    <section id="features" className="py-16 md:py-24 bg-gradient-to-b from-white to-blue-50">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Advanced Features, Simple Experience</h2>
          <p className="text-lg text-slate-700">
            Our app combines cutting-edge technology with an intuitive interface to deliver a revolutionary spine health solution.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <FeatureCard 
            icon={<Camera size={24} />}
            title="AI Spine Scanning"
            description="Modern LIDAR technology allows us to accurately make a 3D model of your spine, and with the help of AI interpret the model into specialised advice just for you."
          />
          
          <FeatureCard 
            icon={<BrainCircuit size={24} />}
            title="Intelligent Analysis"
            description="AI algorithms analyze your spine's alignment and provide personalized insights and recommendations."
          />
          
          <FeatureCard 
            icon={<MessageSquare size={24} />}
            title="AI Health Assistant"
            description="Integrated chatbot answers your questions about spine health and guides you through recommended exercises."
          />
          
          <FeatureCard 
            icon={<Globe size={24} />}
            title="Multilingual Support"
            description="Full functionality in 3 languages with text-to-speech capability for enhanced accessibility."
          />
        </div>
      </div>
    </section>
  );
};

export default Features;
