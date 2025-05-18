import React from 'react';
import Link from 'next/link';

const blogPosts = [
  {
    id: 1,
    title: 'Getting Started with Next.js 13',
    excerpt: 'Learn about the new features and improvements in Next.js 13...',
    date: '2024-03-15',
    category: 'Web Development',
  },
  {
    id: 2,
    title: 'Understanding React Server Components',
    excerpt: 'A deep dive into React Server Components and their benefits...',
    date: '2024-03-10',
    category: 'React',
  },
  // Add more blog posts
];

export default function Blog() {
  return (
    <div className="min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 sm:text-5xl md:text-6xl">
            Technical Blog
          </h1>
          <p className="mt-3 max-w-md mx-auto text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
            Sharing knowledge and experiences in software development
          </p>
        </div>

        <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {blogPosts.map((post) => (
            <article key={post.id} className="bg-white rounded-lg shadow overflow-hidden">
              <div className="p-6">
                <div className="flex items-center text-sm text-gray-500">
                  <span>{post.date}</span>
                  <span className="mx-2">•</span>
                  <span>{post.category}</span>
                </div>
                <Link href={`/blog/${post.id}`} className="block mt-2">
                  <h2 className="text-xl font-semibold text-gray-900 hover:text-indigo-600">
                    {post.title}
                  </h2>
                  <p className="mt-3 text-gray-600">{post.excerpt}</p>
                </Link>
                <div className="mt-4">
                  <Link
                    href={`/blog/${post.id}`}
                    className="text-indigo-600 hover:text-indigo-500"
                  >
                    Read more →
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
} 