"use client";
import Link from "next/link";
import { useState, useEffect, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

const projectSlides = [
  {
    title: "Community Impact",
    description:
      "Transforming lives through sustainable business solutions that address real community challenges and create lasting positive change.",
    category: "Social Enterprise",
  },
  {
    title: "Green Innovation",
    description:
      "Leading environmental initiatives that combine entrepreneurship with sustainability to protect our planet&apos;s future.",
    category: "Environmental",
  },
  {
    title: "Economic Empowerment",
    description:
      "Creating opportunities for underserved communities through innovative business models and skill development programs.",
    category: "Economic Development",
  },
];

const floatingIcons = [
  "💡",
  "🌟",
  "🚀",
  "💼",
  "🌍",
  "📈",
  "🤝",
  "⚡",
  "🎯",
  "💎",
  "🔥",
  "✨",
  "🌱",
  "🏆",
  "💪",
  "🎨",
];

const navItems = [
  { name: "Home", href: "#home" },
  { name: "Projects", href: "#projects" },
  { name: "Impact", href: "#impact" },
  { name: "Events", href: "#events" },
  { name: "Team", href: "/team" },
  { name: "Contact", href: "#contact" },
];

// Floating Icons Component
const FloatingIcons = () => {
  const icons = useMemo(() => {
    return Array.from({ length: 20 }, (_, i) => {
      const randomFactor = Math.random();
      const size = randomFactor < 0.1 ? 50 : randomFactor > 0.9 ? 20 : 30;

      return {
        icon: floatingIcons[Math.floor(Math.random() * floatingIcons.length)],
        x: `${Math.floor(Math.random() * 95)}%`,
        y: `${Math.floor(Math.random() * 95)}%`,
        delay: Math.random() * 3,
        duration: Math.random() * 6 + 10,
        size,
      };
    });
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {icons.map((icon, index) => (
        <motion.div
          key={index}
          initial={{ y: "120vh", opacity: 0 }}
          animate={{
            y: "-20vh",
            opacity: [0, 0.4, 0.6, 0.4, 0],
            x: [
              0,
              Math.random() * 20 - 10,
              Math.random() * -15,
              Math.random() * 20,
            ],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: icon.duration,
            repeat: Infinity,
            repeatType: "loop",
            delay: icon.delay,
            ease: "easeInOut",
          }}
          className="absolute select-none"
          style={{
            left: icon.x,
            top: icon.y,
            fontSize: `${icon.size}px`,
            filter: "drop-shadow(0 2px 4px rgba(0,0,0,0.1))",
          }}
        >
          {icon.icon}
        </motion.div>
      ))}
    </div>
  );
};

export default function Home() {
  const [projectIndex, setProjectIndex] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Auto-rotate projects
  useEffect(() => {
    const interval = setInterval(() => {
      setProjectIndex((prev) => (prev + 1) % projectSlides.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <main className="min-h-screen overflow-x-hidden relative">
      {/* Floating Icons */}
      <FloatingIcons />
      {/* Navbar */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/10 backdrop-blur-lg border-b border-white/20 shadow-xl">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <motion.div
              className="flex items-center space-x-3"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <img
                src="/images/logo1.png"
                alt="Enactus Logo"
                className="w-25 h-25 object-contain"
              />
            </motion.div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-6">
              {navItems.map((item, index) => (
                <motion.a
                  key={item.name}
                  href={item.href}
                  className="text-zinc-300 hover:text-yellow-600 px-3 py-2 text-sm font-medium transition-colors duration-200"
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  {item.name}
                </motion.a>
              ))}
            </div>

            {/* Desktop CTA */}
            <motion.div
              className="hidden md:flex items-center space-x-4"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <button className="text-zinc-300 hover:text-yellow-600 px-3 py-2 text-sm font-medium transition-colors duration-200">
                Sign in
              </button>
              <button className="bg-black hover:bg-gray-800 text-white px-4 py-2 rounded-lg font-medium text-sm transition-all duration-300">
                Join Us
              </button>
            </motion.div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-gray-700 hover:text-yellow-600 p-2"
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden bg-white/20 backdrop-blur-lg border-t border-white/20"
            >
              <div className="px-4 py-4 space-y-2">
                {navItems.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className="block text-gray-700 hover:text-yellow-600 px-3 py-2 text-base font-medium"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.name}
                  </a>
                ))}
                <div className="flex flex-col space-y-2 px-3 pt-4">
                  <button className="text-left text-gray-700 hover:text-yellow-600 py-2 text-base font-medium">
                    Sign in
                  </button>
                  <button className="bg-black text-white px-4 py-2 rounded-lg font-medium text-sm">
                    Join Us
                  </button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
      {/* Hero Section - Cursor Style */}
      <section className="relative min-h-screen flex flex-col items-center justify-center px-4 pt-20 overflow-hidden">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('/background1.png')",
          }}
        />
        {/* Subtle dark overlay */}
        <div className="absolute inset-0 bg-black/40" />
        <div className="relative z-10 text-center max-w-6xl mx-auto">
          <motion.h1
            className="text-6xl md:text-8xl lg:text-10xl font-bold text-white leading-tight mb-8"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            A Heart For Business
            <br />
            <span className="text-6xl md:text-8xl lg:text-10xl">
              A Heart For The World
            </span>
          </motion.h1>

          <motion.p
            className="text-xl md:text-2xl text-white/90 mb-12 max-w-4xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Built to make you extraordinarily impactful. Enactus is the best way
            to create change through entrepreneurial action.
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <button className="bg-black hover:bg-gray-800 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 flex items-center justify-center space-x-2">
              <span>🪟</span>
              <span>Start Your Project</span>
            </button>
            <button className="border-2 border-white/30 text-white hover:bg-white/10 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 backdrop-blur-sm">
              All Programs
            </button>
          </motion.div>
        </div>
        {/* Floating Project Interface */}
        // Updated Hero Section - Less CS, More College-Society Style
        <motion.div
          className="relative z-10 w-full max-w-5xl mx-auto"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6 }}
        >
          <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl shadow-2xl overflow-hidden">
            {/* Interface Header */}
            <div className="flex items-center justify-between p-4 border-b border-white/20">
              <div className="flex items-center space-x-3">
                <div className="flex space-x-2">
                  <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                  <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                  <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                </div>
                <span className="text-white/80 text-sm font-medium">
                  enactus-projects.local
                </span>
              </div>
              <div className="text-white/60 text-sm">🌱 Social Initiatives</div>
            </div>

            {/* Friendly Content */}
            <div className="p-6">
              <div className="grid md:grid-cols-2 gap-8">
                <div className="text-white/90 text-left space-y-3">
                  <h3 className="text-2xl font-semibold text-white">
                    Community Gardens Initiative 🌻
                  </h3>
                  <p className="text-white/80">
                    A student-led project focused on building sustainable
                    community gardens across local neighborhoods. The initiative
                    brings together volunteers, schools, and residents to grow
                    food, build green spaces, and educate youth.
                  </p>
                  <ul className="list-disc list-inside text-white/70">
                    <li>🧑‍🌾 2,500+ lives impacted</li>
                    <li>🌿 $45,000 in revenue generated through eco-sales</li>
                    <li>📈 Sustainability score: 9.2</li>
                  </ul>
                </div>
                <div className="bg-white/5 rounded-lg p-4 border border-white/10">
                  <h4 className="text-white/80 text-lg mb-3">
                    💬 Student Reflection
                  </h4>
                  <p className="text-white/70 text-sm">
                    “Working on this project helped me understand the power of
                    small actions creating large-scale change. It felt amazing
                    to see the smiles on families’ faces when the garden first
                    bloomed.”
                  </p>
                  <div className="mt-4 text-xs text-white/50">
                    – Priya, Project Lead
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </section>
      {/* Second Section - Tab Feature */}
      // updated project section
      <section id="projects" className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto text-center">
          <motion.h2
            className="text-4xl md:text-5xl font-bold text-gray-900 mb-6"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            Our Projects
          </motion.h2>
          <motion.p
            className="text-lg text-gray-600 mb-12 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Enactus leads meaningful projects that empower communities through
            entrepreneurship. Explore the initiatives we&apos;re proud of:
          </motion.p>

          <div className="grid md:grid-cols-2 gap-10">
            {[
              {
                name: "Project Dharang",
                description:
                  "Women-led initiative that empowers underserved communities.",
                href: "/projects/dharang",
                image: "/projects/dharang.jpg",
              },
              {
                name: "Project Ikhtiyaar",
                description:
                  "Addresses an often-overlooked waste stream-used coffee grounds-by repurposing them into eco-friendly materials.",
                href: "/projects/ikhtiyaar",
                image: "/projects/ikhtiyaar.jpg",
              },
              {
                name: "Project Riwayat",
                description:
                  "Reimagines construction by converting fabric waste and organic materials into durable, lightweight, and sustainable bricks. ",
                href: "/projects/riwayat",
                image: "/projects/riwayat.jpg",
              },
              {
                name: "Project Noorani",
                description:
                  "This initiative upcycles floral waste collected from the Yamuna banks and urban temples into naturally dyed fabrics and handcrafted stationery.",
                href: "/projects/noorani",
                image: "/projects/noorani.jpg",
              },
            ].map((project, i) => (
              <motion.a
                key={i}
                href={project.href}
                className="rounded-2xl overflow-hidden bg-white shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all border border-gray-200"
                whileHover={{ scale: 1.02 }}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                viewport={{ once: true }}
              >
                <img
                  src={project.image}
                  alt={project.name}
                  className="w-full h-56 object-cover"
                />
                <div className="p-6 text-left">
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">
                    {project.name}
                  </h3>
                  <p className="text-gray-600 text-sm">{project.description}</p>
                </div>
              </motion.a>
            ))}
          </div>
        </div>
      </section>
      {/* Impact Statistics */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Global Impact
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Students worldwide are creating real change through
              entrepreneurial action
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { number: "500K+", label: "Lives Impacted", icon: "👥" },
              { number: "75+", label: "Countries", icon: "🌐" },
              { number: "1,700+", label: "Universities", icon: "🎓" },
              { number: "$2M+", label: "Revenue Generated", icon: "💰" },
            ].map((stat, index) => (
              <motion.div
                key={index}
                className="text-center"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="text-4xl mb-3">{stat.icon}</div>
                <div className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      {/* CTA Section */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h2
            className="text-4xl md:text-5xl font-bold text-gray-900 mb-6"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            Ready to change the world?
          </motion.h2>
          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <button className="bg-black hover:bg-gray-800 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300">
              Start Your Project
            </button>
            <button className="border-2 border-gray-300 text-gray-700 hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300">
              Learn More
            </button>
          </motion.div>
        </div>
      </section>
      {/* Footer */}
      <footer className="bg-white border-t border-gray-200 py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-12">
            {/* Brand */}
            <div className="md:col-span-2">
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-8 h-8 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-sm">E</span>
                </div>
                <span className="text-xl font-bold text-gray-900">ENACTUS</span>
              </div>
              <p className="text-gray-600 max-w-md">
                Enabling progress through entrepreneurial action. Join the
                global community of student changemakers.
              </p>
            </div>

            {/* Links */}
            <div>
              <h4 className="font-semibold text-gray-900 mb-4">Product</h4>
              <ul className="space-y-2 text-gray-600">
                <li>
                  <a href="#" className="hover:text-gray-900 transition-colors">
                    Projects
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-gray-900 transition-colors">
                    Events
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-gray-900 transition-colors">
                    Competitions
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-gray-900 transition-colors">
                    Resources
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-gray-900 mb-4">Company</h4>
              <ul className="space-y-2 text-gray-600">
                <li>
                  <a href="#" className="hover:text-gray-900 transition-colors">
                    About
                  </a>
                </li>
                <li>
                  <a
                    href="/team"
                    className="hover:text-gray-900 transition-colors"
                  >
                    Team
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-gray-900 transition-colors">
                    Careers
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-gray-900 transition-colors">
                    Contact
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-200 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-500 text-sm">
              © 2024 Enactus. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a
                href="#"
                className="text-gray-400 hover:text-gray-600 transition-colors"
              >
                <span className="sr-only">Twitter</span>
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M6.29 18.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0020 3.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.073 4.073 0 01.8 7.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 010 16.407a11.616 11.616 0 006.29 1.84" />
                </svg>
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-gray-600 transition-colors"
              >
                <span className="sr-only">LinkedIn</span>
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z"
                    clipRule="evenodd"
                  />
                </svg>
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-gray-600 transition-colors"
              >
                <span className="sr-only">Instagram</span>
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M12.017 0H7.984C3.467 0 0 3.467 0 7.984v4.032C0 16.532 3.467 20 7.984 20h4.032C16.532 20 20 16.532 20 12.017V7.984C20 3.467 16.532 0 12.017 0zm0 18.016H7.984C4.592 18.016 1.984 15.408 1.984 12.017V7.984C1.984 4.592 4.592 1.984 7.984 1.984h4.032c3.408 0 6.017 2.608 6.017 6V12.017c0 3.408-2.608 6.016-6.016 6.016z"
                    clipRule="evenodd"
                  />
                  <path d="M10 5.077a4.923 4.923 0 100 9.846 4.923 4.923 0 000-9.846zm0 8.154a3.23 3.23 0 110-6.462 3.23 3.23 0 010 6.462zM14.615 6.231a1.154 1.154 0 11-2.308 0 1.154 1.154 0 012.308 0z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}
