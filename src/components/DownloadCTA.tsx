import React from 'react';
import { AppleIcon, MessageSquare } from 'lucide-react';

const PlayStoreIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polygon points="4 1 20 12 4 23" />
    <path d="M20 12H4"/>
    <path d="M1 3v18a2 2 0 0 0 3 0V3a2 2 0 0 0-3 0Z"/>
    <line x1="4" y1="1" x2="4" y2="23"/>
  </svg>
);

const DownloadCTA = () => {
  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="bg-gradient-to-r from-blue-900 to-blue-800 rounded-3xl overflow-hidden shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            <div className="p-8 md:p-12 lg:p-16 flex flex-col justify-center">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Start Your Spine Health Journey Today
              </h2>
              <p className="text-blue-100 text-lg mb-8">
                Download SpineScan now and take the first step toward understanding and improving your spine health. Our AI-powered technology is ready to provide you with insights previously available only through clinical visits.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <button className="bg-white text-blue-900 hover:bg-blue-50 font-medium py-3 px-6 rounded-xl transition-colors flex items-center justify-center gap-2">
                  <AppleIcon size={22} />
                  <div className="text-left">
                    <div className="text-xs">Download on the</div>
                    <div className="font-semibold">App Store</div>
                  </div>
                </button>
                
                <button className="bg-white text-blue-900 hover:bg-blue-50 font-medium py-3 px-6 rounded-xl transition-colors flex items-center justify-center gap-2">
                  <PlayStoreIcon size={22} />
                  <div className="text-left">
                    <div className="text-xs">Get it on</div>
                    <div className="font-semibold">Google Play</div>
                  </div>
                </button>
              </div>
              
              <div className="flex items-center gap-4 text-blue-100">
              </div>
            </div>
            
            <div className="relative hidden lg:flex items-center justify-center p-8">
              <div className="absolute w-72 h-72 bg-blue-700/30 rounded-full blur-3xl"></div>
              <div className="relative z-10 transform -rotate-12">
                <div className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-[3rem] p-3 shadow-2xl">
                  <div className="bg-white rounded-[2.5rem] overflow-hidden w-64 pb-4">
                    <img 
                      src="https://raw.githubusercontent.com/Lalacol1993/NAIC-AHIS-website/refs/heads/main/img/Placeholder.png" 
                      alt="SpineScan App" 
                      className="w-full h-auto"
                    />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
    </section>
  );
};

export default DownloadCTA;
