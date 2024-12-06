import React from 'react';
import { Heart } from 'lucide-react';

export function Hero() {
  return (
    <div className="relative h-screen">
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1519225421980-715cb0215aed?auto=format&fit=crop&q=80")',
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50" />
      </div>
      <div className="relative h-full flex flex-col items-center justify-center text-white text-center px-4">
        <Heart className="w-16 h-16 mb-8 animate-pulse text-pink-400" />
        <h1 className="text-5xl md:text-7xl font-bold mb-4 font-serif">Sarah & John</h1>
        <p className="text-xl md:text-2xl mb-8">Are getting married!</p>
        <p className="text-lg md:text-xl font-light">Join us in celebrating our special day</p>
      </div>
    </div>
  );
}