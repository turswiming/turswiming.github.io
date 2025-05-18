import React from 'react';

export default function About() {
  return (
    <div className="min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 sm:text-5xl md:text-6xl">
            About Us
          </h1>
          <p className="mt-3 max-w-md mx-auto text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
            Learn more about our company and our mission.
          </p>
        </div>
        
        <div className="mt-10">
          <div className="prose prose-lg mx-auto">
            <h2>Our Story</h2>
            <p>
              We are a dedicated team passionate about creating amazing experiences
              for our users. Our journey began with a simple idea and has grown
              into something we&apos;re truly proud of.
            </p>
            
            <h2>Our Mission</h2>
            <p>
              To provide innovative solutions that make a positive impact on
              people&apos;s lives through technology and creativity.
            </p>
            
            <h2>Our Team</h2>
            <p>
              We are a diverse group of professionals who bring together
              different perspectives and skills to create something special.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
} 