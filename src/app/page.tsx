import React from 'react';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Hero Section */}
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 sm:text-5xl md:text-6xl">
            Your Name
          </h1>
          <p className="mt-3 max-w-md mx-auto text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
            Full Stack Developer | Tech Enthusiast | Problem Solver
          </p>
          <p className='mt-3 max-w-md mx-auto text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl'>
            for now this is a mockup of my website. I will replace it with my real experience soon.
          </p>
        </div>

        {/* Experience Section */}
        <div className="mt-20">
          <h2 className="text-3xl font-bold text-gray-900">Experience</h2>
          <div className="mt-6 space-y-8">
            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="text-xl font-semibold">Senior Developer</h3>
              <p className="text-gray-600">Company Name • 2020 - Present</p>
              <p className="mt-2 text-gray-700">
                Key responsibilities and achievements...
              </p>
            </div>
            {/* Add more experience items */}
          </div>
        </div>

        {/* Skills Section */}
        <div className="mt-20">
          <h2 className="text-3xl font-bold text-gray-900">Skills</h2>
          <div className="mt-6 grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4">
            <div className="bg-white p-4 rounded-lg shadow text-center">
              <h3 className="font-semibold">Frontend</h3>
              <p className="text-gray-600">React, Next.js, TypeScript</p>
            </div>
            <div className="bg-white p-4 rounded-lg shadow text-center">
              <h3 className="font-semibold">Backend</h3>
              <p className="text-gray-600">Node.js, Python, Java</p>
            </div>
            {/* Add more skill categories */}
          </div>
        </div>

        {/* Quick Links */}
        <div className="mt-20">
          <h2 className="text-3xl font-bold text-gray-900">Quick Links</h2>
          <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2">
            <Link href="/blog" className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition">
              <h3 className="text-xl font-semibold">Technical Blog</h3>
              <p className="text-gray-600">Read my latest articles</p>
            </Link>
            <Link href="/projects" className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition">
              <h3 className="text-xl font-semibold">Projects</h3>
              <p className="text-gray-600">View my work</p>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
