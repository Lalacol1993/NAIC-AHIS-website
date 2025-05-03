import React, { useState } from 'react';
import { MapPin, Search, Phone, Calendar } from 'lucide-react';

const clinics = [
  {
    id: 1,
    name: "SpineHealth Center",
    address: "123 Main Street, New York, NY",
    distance: "2.3 miles away",
    rating: 4.9,
    reviewCount: 128,
    specialties: ["Chiropractic", "Physical Therapy"],
    image: "https://images.pexels.com/photos/305566/pexels-photo-305566.jpeg"
  },
  {
    id: 2,
    name: "Back & Posture Clinic",
    address: "456 Park Avenue, New York, NY",
    distance: "3.7 miles away",
    rating: 4.7,
    reviewCount: 95,
    specialties: ["Orthopedics", "Rehabilitation"],
    image: "https://images.pexels.com/photos/247786/pexels-photo-247786.jpeg"
  },
  {
    id: 3,
    name: "Align Spine Institute",
    address: "789 Broadway, New York, NY",
    distance: "4.2 miles away",
    rating: 4.8,
    reviewCount: 112,
    specialties: ["Chiropractic", "Massage Therapy"],
    image: "https://images.pexels.com/photos/1692693/pexels-photo-1692693.jpeg"
  }
];

const PartnerClinics = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedLocation, setSelectedLocation] = useState("New York, NY");
  
  const locations = ["New York, NY", "Los Angeles, CA", "Chicago, IL", "Houston, TX"];

  return (
    <section id="clinics" className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Partner Clinics Near You</h2>
          <p className="text-lg text-slate-700">
            Connect with our network of specialized healthcare providers for in-person treatment when needed.
          </p>
        </div>
        
        <div className="bg-white rounded-xl shadow-md p-6 mb-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="relative">
              <label htmlFor="search" className="block text-sm font-medium text-gray-700 mb-1">Search by specialty</label>
              <div className="relative">
                <input
                  type="text"
                  id="search"
                  placeholder="e.g., Chiropractic, Physical Therapy"
                  className="w-full px-4 py-3 pl-10 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
              </div>
            </div>
            
            <div>
              <label htmlFor="location" className="block text-sm font-medium text-gray-700 mb-1">Location</label>
              <div className="relative">
                <select
                  id="location"
                  className="w-full px-4 py-3 pl-10 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 appearance-none"
                  value={selectedLocation}
                  onChange={(e) => setSelectedLocation(e.target.value)}
                >
                  {locations.map((location) => (
                    <option key={location} value={location}>{location}</option>
                  ))}
                </select>
                <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
              </div>
            </div>
            
            <div className="flex items-end">
              <button className="w-full bg-blue-800 hover:bg-blue-900 text-white font-medium py-3 px-6 rounded-lg transition-colors">
                Find Clinics
              </button>
            </div>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {clinics.map((clinic) => (
            <div key={clinic.id} className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow">
              <div className="h-48 overflow-hidden">
                <img src={clinic.image} alt={clinic.name} className="w-full h-full object-cover transition-transform duration-500 hover:scale-105" />
              </div>
              
              <div className="p-6">
                <div className="flex justify-between items-start mb-3">
                  <h3 className="text-xl font-bold">{clinic.name}</h3>
                  <div className="bg-blue-100 text-blue-800 text-sm font-medium px-2.5 py-0.5 rounded">
                    {clinic.rating} ★
                  </div>
                </div>
                
                <div className="flex items-start gap-2 text-slate-600 mb-3">
                  <MapPin size={18} className="flex-shrink-0 mt-0.5" />
                  <div>
                    <p>{clinic.address}</p>
                    <p className="text-sm">{clinic.distance}</p>
                  </div>
                </div>
                
                <div className="mb-4">
                  <p className="text-sm text-slate-500">{clinic.reviewCount} verified reviews</p>
                  <div className="flex flex-wrap gap-2 mt-2">
                    {clinic.specialties.map((specialty, index) => (
                      <span key={index} className="bg-teal-100 text-teal-800 text-xs font-medium px-2.5 py-0.5 rounded">
                        {specialty}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div className="flex gap-3">
                  <button className="flex-1 bg-transparent border border-blue-800 text-blue-800 hover:bg-blue-50 font-medium py-2 rounded-lg transition-colors flex items-center justify-center gap-1">
                    <Phone size={16} />
                    <span>Call</span>
                  </button>
                  <button className="flex-1 bg-blue-800 hover:bg-blue-900 text-white font-medium py-2 rounded-lg transition-colors flex items-center justify-center gap-1">
                    <Calendar size={16} />
                    <span>Book</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-10">
          <button className="bg-transparent border-2 border-blue-800 text-blue-800 hover:bg-blue-50 font-medium py-3 px-8 rounded-full transition-all inline-flex items-center gap-2">
            View More Clinics
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M8 3L7.29289 3.70711L10.5858 7H3V8H10.5858L7.29289 11.2929L8 12L12 8L8 3Z" fill="currentColor"/>
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
};

export default PartnerClinics;