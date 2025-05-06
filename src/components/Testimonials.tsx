import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    name: "Dr. Sarah Johnson",
    title: "Orthopedic Specialist",
    quote: "SpineScan has revolutionized my practice. Being able to review patient scans before they even arrive for their appointment has streamlined our workflow and improved treatment outcomes.",
    image: "https://images.pexels.com/photos/5214959/pexels-photo-5214959.jpeg",
    rating: 5
  },
  {
    id: 2,
    name: "Michael Thompson",
    title: "Physical Therapist",
    quote: "As a physical therapist, having access to SpineScan's detailed analysis helps me create more targeted treatment plans. The progress tracking feature also keeps patients motivated throughout their recovery journey.",
    image: "https://images.pexels.com/photos/5327585/pexels-photo-5327585.jpeg",
    rating: 5
  },
  {
    id: 3,
    name: "Jennifer Williams",
    title: "User - Recovered from Chronic Back Pain",
    quote: "After years of unexplained back pain, SpineScan identified an alignment issue my doctors had missed. The recommended exercises and specialist referral have made a world of difference. I'm finally pain-free!",
    image: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg",
    rating: 5
  },
  {
    id: 4,
    name: "Robert Chen",
    title: "Chiropractor",
    quote: "The precision of SpineScan's 33-point detection system is impressive. It helps me show patients exactly what's happening with their spine and makes explaining treatment plans much more effective.",
    image: "https://images.pexels.com/photos/5454800/pexels-photo-5454800.jpeg",
    rating: 5
  }
];

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [autoplay, setAutoplay] = useState(true);
  
  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };
  
  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  useEffect(() => {
    let interval: number | null = null;
    
    if (autoplay) {
      interval = window.setInterval(() => {
        nextTestimonial();
      }, 5000);
    }
    
    return () => {
      if (interval) clearInterval(interval);
    };
  }, [autoplay]);

  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">What Our Users Say</h2>
          <p className="text-lg text-slate-700">
            SpineScan is trusted by healthcare professionals and individuals alike.
          </p>
        </div>
        
        <div className="max-w-6xl mx-auto relative">
          <div className="relative overflow-hidden bg-white rounded-2xl shadow-xl">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {testimonials.map((testimonial) => (
                <div 
                  key={testimonial.id} 
                  className="w-full flex-shrink-0 grid grid-cols-1 md:grid-cols-2"
                >
                  <div className="bg-gradient-to-br from-blue-800 to-teal-600 text-white p-8 md:p-12 flex flex-col justify-center">
                    <div className="flex mb-4">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} size={20} fill="currentColor" className="text-yellow-300" />
                      ))}
                    </div>
                    <blockquote className="text-xl md:text-2xl italic mb-6 text-blue-100">
                      "{testimonial.quote}"
                    </blockquote>
                    <div>
                      <p className="font-bold text-lg">{testimonial.name}</p>
                      <p className="text-blue-200">{testimonial.title}</p>
                    </div>
                  </div>
                  <div className="hidden md:block">
                    <img 
                      src={testimonial.image} 
                      alt={testimonial.name} 
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              ))}
            </div>
            
            <div className="absolute bottom-8 right-8 flex space-x-2">
              <button 
                className="h-10 w-10 rounded-full bg-white/20 backdrop-blur-sm text-white flex items-center justify-center hover:bg-white/30 transition-colors"
                onClick={prevTestimonial}
                onMouseEnter={() => setAutoplay(false)}
                onMouseLeave={() => setAutoplay(true)}
              >
                <ChevronLeft size={20} />
              </button>
              <button 
                className="h-10 w-10 rounded-full bg-white/20 backdrop-blur-sm text-white flex items-center justify-center hover:bg-white/30 transition-colors"
                onClick={nextTestimonial}
                onMouseEnter={() => setAutoplay(false)}
                onMouseLeave={() => setAutoplay(true)}
              >
                <ChevronRight size={20} />
              </button>
            </div>
            
            <div className="absolute bottom-8 left-8 flex space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  className={`h-2 rounded-full transition-all ${
                    currentIndex === index ? 'w-8 bg-white' : 'w-2 bg-white/40'
                  }`}
                  onClick={() => setCurrentIndex(index)}
                  onMouseEnter={() => setAutoplay(false)}
                  onMouseLeave={() => setAutoplay(true)}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;