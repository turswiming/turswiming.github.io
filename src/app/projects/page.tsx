import React from 'react';
import Image from 'next/image';
import { bg, text, shadow, tag, transition } from '@/utils/colors';

const projects = [
  {
    id: 1,
    title: 'E-commerce Platform',
    description: 'A full-stack e-commerce platform built with Next.js and Node.js',
    technologies: ['Next.js', 'Node.js', 'MongoDB', 'Tailwind CSS'],
    image: 'https://via.placeholder.com/400x300',
    github: 'https://github.com/yourusername/project1',
    demo: 'https://demo.project1.com',
  },
  {
    id: 2,
    title: 'Task Management App',
    description: 'A collaborative task management application with real-time updates',
    technologies: ['React', 'Firebase', 'Material-UI'],
    image: 'https://via.placeholder.com/400x300',
    github: 'https://github.com/yourusername/project2',
    demo: 'https://demo.project2.com',
  },
  // Add more projects
];

export default function Projects() {
  return (
    <div className={`min-h-screen ${bg.page} py-12 px-4 sm:px-6 lg:px-8`}>
      <div className="max-w-7xl mx-auto">
        <div className="text-center">
          <h1 className={`text-4xl font-bold ${text.primary} sm:text-5xl md:text-6xl`}>
            Projects
          </h1>
          <p className={`mt-3 max-w-md mx-auto text-base ${text.secondary} sm:text-lg md:mt-5 md:text-xl md:max-w-3xl`}>
            A showcase of my recent work and personal projects
          </p>
        </div>

        <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <div key={project.id} className={`${bg.card} rounded-lg ${shadow.default} overflow-hidden`}>
              <div className="relative w-full h-48">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>
              <div className="p-6">
                <h3 className={`text-xl font-semibold ${text.primary}`}>{project.title}</h3>
                <p className={`mt-2 ${text.secondary}`}>{project.description}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span key={tech} className={`px-2 py-1 text-sm rounded ${tag.default}`}>
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="mt-6 flex space-x-4">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`${text.link} ${transition.default}`}
                  >
                    GitHub →
                  </a>
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`${text.link} ${transition.default}`}
                  >
                    Live Demo →
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
} 