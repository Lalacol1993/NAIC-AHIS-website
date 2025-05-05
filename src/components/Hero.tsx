import React from 'react';
import { ArrowRight, Phone } from 'lucide-react';

const Hero = () => {
  return (
    <section className="pt-24 pb-16 md:pt-32 md:pb-24 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          <div className="w-full lg:w-1/2 lg:pr-8">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              Scan Your Spine.
              <span className="block mt-2 bg-gradient-to-r from-blue-800 to-teal-600 bg-clip-text text-transparent">
                Transform Your Health.
              </span>
            </h1>
            
            <p className="text-lg md:text-xl text-slate-700 mb-8 leading-relaxed">
              Revolutionary AI technology scans your spine through your phone camera, 
              identifies 33 critical points, and provides instant analysis for better health decisions.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6">
              <button className="bg-blue-800 hover:bg-blue-900 text-white font-medium py-3 px-8 rounded-full transition-all hover:shadow-lg flex items-center justify-center gap-2">
                <Phone size={20} />
                <span>Download App</span>
              </button>
              
              <button className="bg-transparent border-2 border-blue-800 text-blue-800 hover:bg-blue-50 font-medium py-3 px-8 rounded-full transition-all flex items-center justify-center gap-2">
                Learn More
                <ArrowRight size={18} />
              </button>
            </div>

            <div className="mt-8 flex items-center gap-4">
              <div className="flex -space-x-3">
                <img src="https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg" alt="User" className="w-10 h-10 rounded-full border-2 border-white object-cover" />
                <img src="https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg" alt="User" className="w-10 h-10 rounded-full border-2 border-white object-cover" />
                <img src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg" alt="User" className="w-10 h-10 rounded-full border-2 border-white object-cover" />
              </div>
              <p className="text-slate-700">
                <span className="font-semibold">50,000+</span> happy users and growing
              </p>
            </div>
          </div>
          
          <div className="w-full lg:w-1/2 relative">
            <div className="bg-gradient-to-br from-blue-800/20 to-teal-600/20 rounded-3xl p-3 shadow-2xl transform rotate-2 hover:rotate-0 transition-transform duration-500">
              <div className="relative bg-white rounded-2xl overflow-hidden shadow-md">
                <img 
                  src="https://images.pexels.com/photos/5473182/pexels-photo-5473182.jpeg" 
                  alt="SpineScan App" 
                  className="w-full h-auto" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent flex flex-col justify-end p-6">
                  <div className="inline-flex bg-teal-600/90 text-white text-sm font-medium px-3 py-1 rounded-full mb-2 max-w-max">
                    AI Powered
                  </div>
                  <h3 className="text-white text-xl font-bold">Analyzing spinal alignment</h3>
                  <p className="text-white/80 mt-1">33 points detected</p>
                </div>
              </div>
            </div>
          
                
              
            
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
