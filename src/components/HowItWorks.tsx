import React, { useState } from 'react';
import { CheckCircle } from 'lucide-react';

const steps = [
  {
    id: 1,
    title: "Scan Your Back",
    description: "Position your phone camera as guided and capture a clear image of your back. Our app will walk you through the perfect positioning.",
    image: "https://images.pexels.com/photos/5473182/pexels-photo-5473182.jpeg"
  },
  {
    id: 2,
    title: "AI Analysis",
    description: "Our advanced AI identifies 33 key points along your spine and analyzes their alignment, curvature, and positioning.",
    image: "https://images.pexels.com/photos/8438922/pexels-photo-8438922.jpeg"
  },
  {
    id: 3,
    title: "Get Your Results",
    description: "Receive a comprehensive report with visualizations of your spine's condition and personalized recommendations.",
    image: "https://images.pexels.com/photos/6497109/pexels-photo-6497109.jpeg"
  },
  {
    id: 4,
    title: "Take Action",
    description: "Follow guided exercises, chat with our AI assistant, or book an appointment with a nearby partnering clinic for professional care.",
    image: "https://images.pexels.com/photos/8942991/pexels-photo-8942991.jpeg"
  }
];

const HowItWorks = () => {
  const [activeStep, setActiveStep] = useState(1);

  return (
    <section id="how-it-works" className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">How SpineScan Works</h2>
          <p className="text-lg text-slate-700">
            Our intuitive process takes you from scanning to actionable insights in minutes.
            Experience the future of spine health assessment.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          <div className="order-2 lg:order-1">
            <div className="bg-white rounded-2xl overflow-hidden shadow-xl">
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
                      : 'bg-white hover:bg-blue-50 border border-gray-100'
                  }`}
                  onClick={() => setActiveStep(step.id)}
                >
                  <div className="flex items-start gap-4">
                    <div className={`flex-shrink-0 rounded-full h-8 w-8 flex items-center justify-center text-sm font-bold ${
                      activeStep === step.id 
                        ? 'bg-white text-blue-800' 
                        : 'bg-blue-100 text-blue-800'
                    }`}>
                      {step.id}
                    </div>
                    
                    <div>
                      <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                      <p className={activeStep === step.id ? 'text-blue-100' : 'text-slate-600'}>
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