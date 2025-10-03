import React from 'react';
import sharkvideo from '../assets/video/shark.mp4';
export default function Home() {
  return (
    <div className="relative h-screen w-full overflow-hidden">
      
      {/* Background Video */}
      <video 
        className="absolute inset-0 w-full h-full object-cover"
        autoPlay
        loop
        muted
        playsInline
      >
        <source src={sharkvideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Overlay for text readability */}
      <div className="absolute inset-0 bg-black/20"></div>
      
      {/* Main Content */}
      <div className="relative z-10 h-full flex flex-col justify-center items-center text-center px-6 md:px-8">
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
           SAVING SHARKS FROM SPACE 
        </h1>
        <p className="text-xl md:text-2xl text-white mb-8 max-w-2xl">
          Using satellite intelligence and modern technology to protect sharks, track ocean health, and secure the future of our marine ecosystem.
        </p>
        <button 
          className="px-8 py-4 bg-[#02427A] text-white font-semibold text-lg rounded-full hover:bg-[#023663] transition-colors duration-300"
        >
          Launch Mission
        </button>
      </div>
    </div>
  );
}
