import React from 'react';
import { Facebook, Twitter, Instagram, Youtube, Mail, PhoneCall } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-slate-900 text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <div className="mb-4">
              <span className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-teal-400 bg-clip-text text-transparent">
                SpineScan
              </span>
            </div>
            <p className="text-slate-300 mb-6">
              Revolutionary spine health technology in the palm of your hand. Scan, analyze, and improve your spine health with AI-powered insights.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-slate-300 hover:text-teal-400 transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-slate-300 hover:text-teal-400 transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-slate-300 hover:text-teal-400 transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-slate-300 hover:text-teal-400 transition-colors">
                <Youtube size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Explore</h3>
            <ul className="space-y-3">
              <li><a href="#features" className="text-slate-300 hover:text-white transition-colors">Features</a></li>
              <li><a href="#how-it-works" className="text-slate-300 hover:text-white transition-colors">How It Works</a></li>
              <li><a href="#benefits" className="text-slate-300 hover:text-white transition-colors">Benefits</a></li>
              <li><a href="#faq" className="text-slate-300 hover:text-white transition-colors">FAQ</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Company</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-slate-300 hover:text-white transition-colors">About Us</a></li>
              <li><a href="#" className="text-slate-300 hover:text-white transition-colors">Press & Media</a></li>
              <li><a href="#" className="text-slate-300 hover:text-white transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="text-slate-300 hover:text-white transition-colors">Terms of Service</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <ul className="space-y-3">
              <li className="flex items-center gap-3">
                <Mail size={18} className="text-teal-400" />
                <a href="mailto:info@spinescan.io" className="text-slate-300 hover:text-white transition-colors">
                  support@bluejay2.com
                </a>
              </li>
              <li className="flex items-center gap-3">
                <PhoneCall size={18} className="text-teal-400" />
                <a href="tel:+18005551234" className="text-slate-300 hover:text-white transition-colors">
                  +607 1237465
                </a>
              </li>
            </ul>
            
            <div className="mt-6">
              <h4 className="font-medium mb-3">Download App</h4>
              <div className="flex flex-col sm:flex-row gap-3">
                <a href="#" className="bg-slate-800 hover:bg-slate-700 p-2 rounded-lg flex items-center gap-2 transition-colors">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 20.94c1.5 0 2.75 1.06 4 1.06 3 0 6-8 6-12.22A4.91 4.91 0 0 0 17 5c-2.22 0-4 1.44-5 2-1-.56-2.78-2-5-2a4.9 4.9 0 0 0-5 4.78C2 14 5 22 8 22c1.25 0 2.5-1.06 4-1.06Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M10 2c1 .5 2 2 2 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  <span>App Store</span>
                </a>
                <a href="#" className="bg-slate-800 hover:bg-slate-700 p-2 rounded-lg flex items-center gap-2 transition-colors">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <polygon points="4 1 20 12 4 23" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M20 12H4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M1 3v18a2 2 0 0 0 3 0V3a2 2 0 0 0-3 0Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    <line x1="4" y1="1" x2="4" y2="23" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  <span>Google Play</span>
                </a>
              </div>
            </div>
          </div>
        </div>
        
        <div className="pt-8 border-t border-slate-800 text-slate-400 flex flex-col md:flex-row justify-between items-center">
          <p>&copy; {new Date().getFullYear()} SpineScan. All rights reserved.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-white transition-colors">Privacy</a>
            <a href="#" className="hover:text-white transition-colors">Terms</a>
            <a href="#" className="hover:text-white transition-colors">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
