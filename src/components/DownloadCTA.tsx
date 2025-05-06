import React from 'react';
import { AppleIcon, PhoneIcon, MessageSquare } from 'lucide-react';

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
                <div className="flex -space-x-3">
                  <img src="https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg" alt="User" className="w-10 h-10 rounded-full border-2 border-blue-800" />
                  <img src="https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg" alt="User" className="w-10 h-10 rounded-full border-2 border-blue-800" />
                  <img src="https://images.pexels.com/photos/4462782/pexels-photo-4462782.jpeg" alt="User" className="w-10 h-10 rounded-full border-2 border-blue-800" />
                </div>
              </div>
            </div>
            
            <div className="relative hidden lg:flex items-center justify-center p-8">
              <div className="absolute w-72 h-72 bg-blue-700/30 rounded-full blur-3xl"></div>
              <div className="relative z-10 transform -rotate-12">
                <div className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-[3rem] p-3 shadow-2xl">
                  <div className="bg-white rounded-[2.5rem] overflow-hidden w-64 pb-4">
                    <div className="w-full h-12 bg-slate-800 flex items-center justify-center">
                      <div className="w-24 h-6 bg-slate-700 rounded-full"></div>
                    </div>
                    <img 
                      src="https://images.pexels.com/photos/5453811/pexels-photo-5453811.jpeg" 
                      alt="SpineScan App" 
                      className="w-full h-auto"
                    />
                    <div className="flex justify-around mt-4 px-4">
                      <div className="w-10 h-10 rounded-full bg-blue-800 flex items-center justify-center text-white">
                        <PhoneIcon size={18} />
                      </div>
                      <div className="w-16 h-16 rounded-full bg-teal-600 -mt-10 border-4 border-white flex items-center justify-center text-white">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke="currentColor" strokeWidth="2" />
                          <path d="M8 13L10.5 15.5L16 10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      </div>
                      <div className="w-10 h-10 rounded-full bg-blue-800 flex items-center justify-center text-white">
                        <MessageSquare size={18} />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="absolute right-16 bottom-16 bg-white rounded-lg shadow-lg p-3 transform rotate-12">
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 rounded-full bg-green-500 flex items-center justify-center text-white">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M5 13L9 17L19 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-medium">Scan Complete</p>
                    <p className="text-sm text-gray-500">33 points detected</p>
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
