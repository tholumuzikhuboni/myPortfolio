import React from 'react';
import { Code2 } from 'lucide-react';

interface Technology {
  name: string;
  proficiency: number;
  description: string;
  icon: string;
}

const technologies: Technology[] = [
  {
    name: "React.js",
    proficiency: 90,
    description: "Building complex, interactive UIs with React ecosystem",
    icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original.svg"
  },
  {
    name: "TypeScript",
    proficiency: 85,
    description: "Type-safe development for scalable applications",
    icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/typescript/typescript-original.svg"
  },
  {
    name: "JavaScript",
    proficiency: 95,
    description: "Core language for web development",
    icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg"
  },
  {
    name: "Python",
    proficiency: 80,
    description: "Backend development and data processing",
    icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/python/python-original.svg"
  },
  {
    name: "Google Cloud",
    proficiency: 75,
    description: "Cloud infrastructure and serverless solutions",
    icon: "https://www.vectorlogo.zone/logos/google_cloud/google_cloud-icon.svg"
  },
  {
    name: "Tailwind CSS",
    proficiency: 90,
    description: "Rapid UI development with utility classes",
    icon: "https://www.vectorlogo.zone/logos/tailwindcss/tailwindcss-icon.svg"
  }
];

export const TechStack: React.FC = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {technologies.map((tech) => (
        <div
          key={tech.name}
          className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
        >
          <div className="flex items-center mb-4">
            <img
              src={tech.icon}
              alt={tech.name}
              className="w-12 h-12 mr-4"
            />
            <h3 className="text-xl font-semibold dark:text-white">{tech.name}</h3>
          </div>
          <div className="mb-4">
            <div className="h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
              <div
                className="h-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full transition-all duration-500"
                style={{ width: `${tech.proficiency}%` }}
              />
            </div>
            <div className="mt-1 text-sm text-gray-600 dark:text-gray-400 text-right">
              {tech.proficiency}%
            </div>
          </div>
          <p className="text-gray-600 dark:text-gray-300">{tech.description}</p>
        </div>
      ))}
    </div>
  );
};