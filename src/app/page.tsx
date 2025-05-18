import React from 'react';
import Link from 'next/link';
import { bg, text, shadow, transition } from '@/utils/colors';

export default function Home() {
  return (
    <div className={`min-h-screen ${bg.page} py-12 px-4 sm:px-6 lg:px-8`}>
      <div className="max-w-7xl mx-auto">
        {/* Hero Section */}
        <div className="text-center">
          <h1 className={`text-4xl font-bold ${text.primary} sm:text-5xl md:text-6xl`}>
            Your Name
          </h1>
          <p className={`mt-3 max-w-md mx-auto text-base ${text.secondary} sm:text-lg md:mt-5 md:text-xl md:max-w-3xl`}>
            Full Stack Developer | Tech Enthusiast | Problem Solver
          </p>
          <p className={`mt-3 max-w-md mx-auto text-base ${text.secondary} sm:text-lg md:mt-5 md:text-xl md:max-w-3xl`}>
            for now this is a mockup of my website. I will replace it with my real experience soon.
          </p>
        </div>

        {/* Experience Section */}
        <div className="mt-20">
          <h2 className={`text-3xl font-bold ${text.primary}`}>Experience</h2>
          <div className="mt-6 space-y-8">
            <div className={`${bg.card} p-6 rounded-lg ${shadow.default}`}>
              <h3 className={`text-xl font-semibold ${text.primary}`}>Senior Developer</h3>
              <p className={text.secondary}>Company Name • 2020 - Present</p>
              <p className={`mt-2 ${text.secondary}`}>
                Key responsibilities and achievements...
              </p>
            </div>
            {/* Add more experience items */}
          </div>
        </div>

        {/* Skills Section */}
        <div className="mt-20">
          <h2 className={`text-3xl font-bold ${text.primary}`}>Skills</h2>
          <div className="mt-6 grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4">
            <div className={`${bg.card} p-4 rounded-lg ${shadow.default} text-center`}>
              <h3 className={`font-semibold ${text.primary}`}>Frontend</h3>
              <p className={text.secondary}>React, Next.js, TypeScript</p>
            </div>
            <div className={`${bg.card} p-4 rounded-lg ${shadow.default} text-center`}>
              <h3 className={`font-semibold ${text.primary}`}>Backend</h3>
              <p className={text.secondary}>Node.js, Python, Java</p>
            </div>
            {/* Add more skill categories */}
          </div>
        </div>

        {/* Quick Links */}
        <div className="mt-20">
          <h2 className={`text-3xl font-bold ${text.primary}`}>Quick Links</h2>
          <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2">
            <Link 
              href="/blog" 
              className={`${bg.card} p-6 rounded-lg ${shadow.default} ${transition.default} hover:shadow-lg`}
            >
              <h3 className={`text-xl font-semibold ${text.primary}`}>Technical Blog</h3>
              <p className={text.secondary}>Read my latest articles</p>
            </Link>
            <Link 
              href="/projects" 
              className={`${bg.card} p-6 rounded-lg ${shadow.default} ${transition.default} hover:shadow-lg`}
            >
              <h3 className={`text-xl font-semibold ${text.primary}`}>Projects</h3>
              <p className={text.secondary}>View my work</p>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
