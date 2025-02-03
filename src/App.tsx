import React, { useState } from 'react';
import { 
  Github, 
  Linkedin, 
  Mail, 
  Moon, 
  Sun,
  ExternalLink,
  Code2,
  Award,
  Briefcase,
  GraduationCap,
  MapPin,
  Send,
  Heart
} from 'lucide-react';
import { TechStack } from './components/TechStack';
import { ProjectCard } from './components/ProjectCard';
import { SocialLink } from './components/SocialLink';

function App() {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.documentElement.classList.toggle('dark');
  };

  const projects = [
    {
      title: "E-Commerce Platform",
      description: "A full-featured e-commerce solution with real-time inventory management",
      image: "https://images.unsplash.com/photo-1661956602116-aa6865609028?auto=format&fit=crop&q=80&w=800",
      tech: ["React", "Firebase", "Tailwind CSS"],
      demoUrl: "https://demo.example.com",
      githubUrl: "https://github.com/example",
      features: ["Real-time updates", "Responsive design", "Payment integration"]
    },
    {
      title: "Cloud Management Dashboard",
      description: "Enterprise cloud resource management system",
      image: "https://images.unsplash.com/photo-1667372393119-3d4c48d07fc9?auto=format&fit=crop&q=80&w=800",
      tech: ["TypeScript", "AWS", "React"],
      demoUrl: "https://demo.example.com",
      githubUrl: "https://github.com/example",
      features: ["Resource monitoring", "Cost optimization", "Multi-cloud support"]
    },
    {
      title: "AI-Powered Analytics Platform",
      description: "Data visualization and analytics platform with ML capabilities",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800",
      tech: ["Python", "React", "GCP"],
      demoUrl: "https://demo.example.com",
      githubUrl: "https://github.com/tholumuzikhuboni",
      features: ["ML predictions", "Interactive dashboards", "Real-time analytics"]
    }
  ];

  return (
    <div className={`min-h-screen transition-colors duration-300 ${darkMode ? 'dark bg-gray-900' : 'bg-gray-50'}`}>
      {/* Header */}
      <header className="fixed w-full bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm z-50 border-b border-gray-200 dark:border-gray-700 shadow-sm">
        <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold">TK</span>
            </div>
            <span className="text-xl font-bold dark:text-white">Tholumuzi</span>
          </div>
          <button
            onClick={toggleDarkMode}
            className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
          >
            {darkMode ? <Sun className="text-white" /> : <Moon />}
          </button>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6">
        <div className="container mx-auto flex flex-col md:flex-row items-center justify-between">
          <div className="md:w-1/2">
            <h1 className="text-5xl font-bold mb-6 dark:text-white">
              Tholumuzi Khuboni
            </h1>
            <h2 className="text-2xl text-gray-600 dark:text-gray-300 mb-8">
              Front-End Developer
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 mb-8">
              Crafting exceptional digital experiences through clean, efficient, and scalable code.
            </p>
            <div className="flex gap-4">
              <SocialLink href="https://github.com/tholumuzikhuboni" icon={<Github />} label="GitHub" />
              <SocialLink href="https://linkedin.com/tholumuzikhuboni" icon={<Linkedin />} label="LinkedIn" />
              <SocialLink href="mailto:khuboni@tholumuzi.co.za" icon={<Mail />} label="Email" />
            </div>
          </div>
          <div className="md:w-1/2 mt-12 md:mt-0">
            <div className="relative mx-auto w-64 h-64">
              <div className="absolute inset-0 rounded-full animate-border bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500"></div>
              <img
                src="https://github.com/tholumuzikhuboni/blog/blob/ebb7ce9ba4980e8fe810f6da363d0017f69fa7dd/author/images/image.jpg"
                alt="Tholumuzi Khuboni"
                className="absolute inset-[3px] rounded-full w-[calc(100%-6px)] h-[calc(100%-6px)] object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-white dark:bg-gray-800">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold mb-16 text-center dark:text-white">About Me</h2>
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              <div className="bg-gray-50 dark:bg-gray-700 p-8 rounded-xl shadow-lg transform hover:-translate-y-1 transition-transform duration-300">
                <div className="mb-6 flex justify-center">
                  <div className="p-3 bg-blue-100 dark:bg-blue-900 rounded-full">
                    <Briefcase className="w-8 h-8 text-blue-600 dark:text-blue-300" />
                  </div>
                </div>
                <h3 className="text-xl font-semibold mb-4 text-center dark:text-white">Experience</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Over 3 years of experience building user friendly web applications.
                </p>
              </div>
              
              <div className="bg-gray-50 dark:bg-gray-700 p-8 rounded-xl shadow-lg transform hover:-translate-y-1 transition-transform duration-300">
                <div className="mb-6 flex justify-center">
                  <div className="p-3 bg-purple-100 dark:bg-purple-900 rounded-full">
                    <Award className="w-8 h-8 text-purple-600 dark:text-purple-300" />
                  </div>
                </div>
                <h3 className="text-xl font-semibold mb-4 text-center dark:text-white">Achievements</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Led multiple successful projects and received recognition for innovative solutions.
                </p>
              </div>
              
              <div className="bg-gray-50 dark:bg-gray-700 p-8 rounded-xl shadow-lg transform hover:-translate-y-1 transition-transform duration-300">
                <div className="mb-6 flex justify-center">
                  <div className="p-3 bg-green-100 dark:bg-green-900 rounded-full">
                    <GraduationCap className="w-8 h-8 text-green-600 dark:text-green-300" />
                  </div>
                </div>
                <h3 className="text-xl font-semibold mb-4 text-center dark:text-white">Education</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Dimploma in IT with continuous professional development.
                </p>
              </div>
            </div>
            
            <div className="mt-16 bg-gray-50 dark:bg-gray-700 p-8 rounded-xl shadow-lg">
              <h3 className="text-2xl font-semibold mb-6 dark:text-white">My Journey</h3>
              <div className="space-y-6">
                <p className="text-gray-600 dark:text-gray-300">
                  I started my journey in web development with a passion for creating intuitive user interfaces. 
                  Over the years, I've evolved into a full-stack developer with a strong focus on front-end technologies.
                </p>
                <p className="text-gray-600 dark:text-gray-300">
                  My approach combines technical expertise with creative problem-solving, ensuring that every project 
                  not only meets but exceeds client expectations. I believe in writing clean, maintainable code and 
                  staying current with industry best practices.
                </p>
                <p className="text-gray-600 dark:text-gray-300">
                  When I'm not coding, I contribute to open-source projects and mentor aspiring developers, 
                  sharing my knowledge and experience with the community.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-20 dark:bg-gray-900">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold mb-12 text-center dark:text-white">Technical Skills</h2>
          <TechStack />
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-20 bg-white dark:bg-gray-800">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold mb-12 text-center dark:text-white">Featured Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <ProjectCard key={index} {...project} />
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 dark:bg-gray-900">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-4 dark:text-white">Get in Touch</h2>
              <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                Have a project in mind or want to discuss opportunities? I'm always excited to connect and collaborate on interesting projects.
              </p>
            </div>
            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl overflow-hidden transform hover:scale-[1.02] transition-transform duration-300">
              <div className="grid md:grid-cols-2">
                <div className="p-8 bg-gradient-to-br from-blue-600 via-blue-500 to-purple-500 text-white relative overflow-hidden">
                  <div className="relative z-10">
                    <h3 className="text-3xl font-bold mb-6">Let's Connect</h3>
                    <p className="mb-8 text-white/90 text-lg">
                      Ready to bring your ideas to life? Let's create something amazing together.
                    </p>
                    <div className="space-y-6">
                      <div className="flex items-center space-x-4 hover:translate-x-2 transition-transform">
                        <Mail className="w-6 h-6" />
                        <a href="mailto:contact@example.com" className="text-lg hover:underline">
                          khuboni@tholumuzi.co.za
                        </a>
                      </div>
                      <div className="flex items-center space-x-4 hover:translate-x-2 transition-transform">
                        <MapPin className="w-6 h-6" />
                        <span className="text-lg">Johannesburg, South Africa</span>
                      </div>
                    </div>
                    <div className="mt-12 flex space-x-6">
                      <a href="https://github.com" target="_blank" rel="noopener noreferrer"
                        className="p-3 bg-white/20 rounded-full hover:bg-white/30 transition-all duration-300 hover:scale-110">
                        <Github className="w-6 h-6" />
                      </a>
                      <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer"
                        className="p-3 bg-white/20 rounded-full hover:bg-white/30 transition-all duration-300 hover:scale-110">
                        <Linkedin className="w-6 h-6" />
                      </a>
                    </div>
                  </div>
                  {/* Decorative circles */}
                  <div className="absolute -bottom-16 -right-16 w-48 h-48 bg-white/10 rounded-full"></div>
                  <div className="absolute -top-8 -left-8 w-32 h-32 bg-white/10 rounded-full"></div>
                </div>
                <div className="p-8 md:p-12">
                  <form className="space-y-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                        Name
                      </label>
                      <input
                        type="text"
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 outline-none transition-all duration-300"
                        placeholder="Your name"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                        Email
                      </label>
                      <input
                        type="email"
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 outline-none transition-all duration-300"
                        placeholder="your@email.com"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                        Message
                      </label>
                      <textarea
                        rows={4}
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 outline-none transition-all duration-300 resize-none"
                        placeholder="Tell me about your project..."
                      ></textarea>
                    </div>
                    <button
                      type="submit"
                      className="w-full py-4 px-6 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-lg hover:opacity-90 transition-all duration-300 transform hover:scale-[1.02] flex items-center justify-center space-x-3 font-medium"
                    >
                      <Send className="w-5 h-5" />
                      <span>Send Message</span>
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-16 bg-white dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
            <div className="md:col-span-2">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl flex items-center justify-center transform hover:rotate-12 transition-transform duration-300">
                  <span className="text-white font-bold text-lg">TK</span>
                </div>
                <span className="text-2xl font-bold dark:text-white">Tholumuzi</span>
              </div>
              <p className="text-gray-600 dark:text-gray-400 mb-6 max-w-md">
                Passionate front-end developer dedicated to crafting beautiful and functional web experiences that make a difference.
              </p>
              <div className="flex space-x-4">
                <a href="https://github.com/tholumuzikhuboni" target="_blank" rel="noopener noreferrer"
                  className="p-2 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors">
                  <Github className="w-6 h-6" />
                </a>
                <a href="https://linkedin.com/tholumuzikhuboni" target="_blank" rel="noopener noreferrer"
                  className="p-2 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors">
                  <Linkedin className="w-6 h-6" />
                </a>
                <a href="mailto:khuboni@tholumuzi.co.za"
                  className="p-2 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors">
                  <Mail className="w-6 h-6" />
                </a>
              </div>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-6 dark:text-white">Quick Links</h3>
              <ul className="space-y-4">
                <li>
                  <a href="#" className="text-gray-600 dark:text-gray-400 hover:text-blue-500 dark:hover:text-blue-400 transition-colors flex items-center space-x-2 group">
                    <span className="w-1.5 h-1.5 bg-gray-400 rounded-full group-hover:bg-blue-500 transition-colors"></span>
                    <span>Portfolio</span>
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-600 dark:text-gray-400 hover:text-blue-500 dark:hover:text-blue-400 transition-colors flex items-center space-x-2 group">
                    <span className="w-1.5 h-1.5 bg-gray-400 rounded-full group-hover:bg-blue-500 transition-colors"></span>
                    <span>Blog</span>
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-600 dark:text-gray-400 hover:text-blue-500 dark:hover:text-blue-400 transition-colors flex items-center space-x-2 group">
                    <span className="w-1.5 h-1.5 bg-gray-400 rounded-full group-hover:bg-blue-500 transition-colors"></span>
                    <span>Resources</span>
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-6 dark:text-white">Contact</h3>
              <ul className="space-y-4">
                <li>
                  <a href="mailto:contact@example.com" 
                    className="text-gray-600 dark:text-gray-400 hover:text-blue-500 dark:hover:text-blue-400 transition-colors flex items-center space-x-2">
                    <Mail className="w-5 h-5" />
                    <span>contact@example.com</span>
                  </a>
                </li>
                <li className="text-gray-600 dark:text-gray-400 flex items-center space-x-2">
                  <MapPin className="w-5 h-5" />
                  <span>Cape Town, South Africa</span>
                </li>
              </ul>
            </div>
          </div>
          <div className="mt-16 pt-8 border-t border-gray-200 dark:border-gray-700">
            <div className="text-center space-y-4">
              <div className="flex items-center justify-center space-x-2 text-gray-600 dark:text-gray-400">
                <span>Made with</span>
                <Heart className="w-4 h-4 text-red-500 fill-current" />
                <span>by Tholumuzi Khuboni</span>
              </div>
              <p className="text-sm text-gray-500 dark:text-gray-500">
                © {new Date().getFullYear()} All rights reserved. Crafted with passion and precision.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;