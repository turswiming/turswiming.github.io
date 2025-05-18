import React from 'react';
import { bg, text, input, button, shadow } from '@/utils/colors';

export default function Contact() {
  return (
    <div className={`min-h-screen ${bg.page} py-12 px-4 sm:px-6 lg:px-8`}>
      <div className="max-w-7xl mx-auto">
        <div className="text-center">
          <h1 className={`text-4xl font-bold ${text.primary} sm:text-5xl md:text-6xl`}>
            Contact Me
          </h1>
          <p className={`mt-3 max-w-md mx-auto text-base ${text.secondary} sm:text-lg md:mt-5 md:text-xl md:max-w-3xl`}>
            Let&apos;s connect and discuss opportunities
          </p>
        </div>

        <div className="mt-12 max-w-lg mx-auto">
          {/* Contact Information */}
          <div className={`${bg.card} rounded-lg ${shadow.default} p-6 mb-8`}>
            <h2 className={`text-2xl font-semibold ${text.primary} mb-4`}>Contact Information</h2>
            <div className="space-y-4">
              <div className="flex items-center">
                <svg className="h-6 w-6 text-gray-400 dark:text-gray-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <a href="mailto:your.email@example.com" className="ml-3 text-gray-600 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400">
                  your.email@example.com
                </a>
              </div>
              <div className="flex items-center">
                <svg className="h-6 w-6 text-gray-400 dark:text-gray-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer" className="ml-3 text-gray-600 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400">
                  GitHub
                </a>
              </div>
              <div className="flex items-center">
                <svg className="h-6 w-6 text-gray-400 dark:text-gray-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer" className="ml-3 text-gray-600 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400">
                  LinkedIn
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <form className={`${bg.card} rounded-lg ${shadow.default} p-6`}>
            <h2 className={`text-2xl font-semibold ${text.primary} mb-4`}>Send a Message</h2>
            <div className="space-y-4">
              <div>
                <label htmlFor="name" className={`block text-sm font-medium ${text.secondary}`}>
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  className={`mt-1 block w-full rounded-md ${input.default}`}
                />
              </div>
              <div>
                <label htmlFor="email" className={`block text-sm font-medium ${text.secondary}`}>
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  className={`mt-1 block w-full rounded-md ${input.default}`}
                />
              </div>
              <div>
                <label htmlFor="message" className={`block text-sm font-medium ${text.secondary}`}>
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  className={`mt-1 block w-full rounded-md ${input.default}`}
                />
              </div>
              <div>
                <button
                  type="submit"
                  className={`w-full flex justify-center py-2 px-4 rounded-md ${button.primary}`}
                >
                  Send Message
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
} 