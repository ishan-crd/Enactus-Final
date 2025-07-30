"use client";
import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";

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
  { name: "Home", href: "/" },
  { name: "Projects", href: "#projects" },
  { name: "Impact", href: "#impact" },
  { name: "Events", href: "#events" },
  { name: "Team", href: "/team" },
  { name: "Contact", href: "#contact" },
];

// Floating Icons Component
const FloatingIcons = () => {
  const icons = useMemo(() => {
    return Array.from({ length: 12 }, (_, i) => {
      const size = Math.random() < 0.1 ? 35 : Math.random() > 0.9 ? 15 : 22;

      return {
        icon: floatingIcons[Math.floor(Math.random() * floatingIcons.length)],
        x: `${Math.floor(Math.random() * 95)}%`,
        y: `${Math.floor(Math.random() * 95)}%`,
        delay: Math.random() * 4,
        duration: Math.random() * 10 + 15,
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
            opacity: [0, 0.2, 0.4, 0.2, 0],
            x: [
              0,
              Math.random() * 10 - 5,
              Math.random() * -8,
              Math.random() * 12,
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
            filter: "drop-shadow(0 1px 2px rgba(0,0,0,0.05))",
          }}
        >
          {icon.icon}
        </motion.div>
      ))}
    </div>
  );
};

export default function Riwayat() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <main className="min-h-screen bg-gray-50 relative overflow-x-hidden">
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
                className="h-8 w-auto"
              />
            </motion.div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-6">
              {navItems.map((item, index) => (
                <motion.a
                  key={item.name}
                  href={item.href}
                  className="text-gray-700 hover:text-yellow-600 px-3 py-2 text-sm font-medium transition-colors duration-200"
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
              <button className="text-gray-700 hover:text-yellow-600 px-3 py-2 text-sm font-medium transition-colors duration-200">
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

      {/* Content */}
      <div className="relative z-10 pt-20">
        {/* Header Section */}
        <motion.div
          className="max-w-4xl mx-auto px-6 py-12"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Breadcrumb */}
          <div className="flex items-center space-x-2 text-sm text-gray-500 mb-6">
            <a href="/" className="hover:text-yellow-600 transition-colors">
              Enactus
            </a>
            <span>/</span>
            <a
              href="#projects"
              className="hover:text-yellow-600 transition-colors"
            >
              Projects
            </a>
            <span>/</span>
            <span className="text-gray-900">Project Riwayat</span>
          </div>

          {/* Title Section */}
          <div className="mb-8">
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-12 h-12 bg-gradient-to-br from-pink-400 to-orange-500 rounded-xl flex items-center justify-center">
                <span className="text-2xl">🎨</span>
              </div>
              <div>
                <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
                  Project Riwayat
                </h1>
                <p className="text-lg text-gray-600 mt-1">
                  Empowering Women Through Traditional Crafts
                </p>
              </div>
            </div>

            {/* Tags */}
            <div className="flex flex-wrap gap-2 mb-6">
              {[
                "Women Empowerment",
                "Rural Development",
                "Traditional Crafts",
                "Sustainable Income",
              ].map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 bg-yellow-100 text-yellow-700 text-sm font-medium rounded-full"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Hero Image */}
        <motion.div
          className="max-w-6xl mx-auto px-6 mb-12"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="relative group cursor-pointer overflow-hidden rounded-2xl shadow-2xl">
            <img
              src="/projects/riwayat.jpg"
              alt="Project Riwayat"
              className="w-full h-96 md:h-[500px] object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </div>
        </motion.div>

        {/* Main Content */}
        <div className="max-w-4xl mx-auto px-6 space-y-16">
          {/* Overview Section */}
          <motion.section
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
                <span className="text-2xl mr-3">📖</span>
                Project Overview
              </h2>
              <div className="prose prose-lg max-w-none">
                <p className="text-gray-700 leading-8 mb-6">
                  Project Riwayat reimagines construction by converting fabric
                  waste and organic materials into durable, lightweight, and
                  sustainable bricks. These eco-bricks offer excellent thermal
                  insulation and are suitable for applications such as low-cost
                  housing, pavements, outdoor furniture, and public
                  infrastructure. Designed to ease pressure on landfills and
                  reduce reliance on traditional building materials, Riwayat
                  supports green architecture and urban sustainability.
                </p>
                <p className="text-gray-700 leading-8 mb-6">
                  Currently collaborating with Nef’s Finds to collect textile
                  scraps, the project aligns with our mission of promoting a
                  circular economy. Every brick manufactured represents a fusion
                  of engineering innovation and environmental consciousness.
                  Riwayat is not only an answer to growing urban waste but also
                  a step toward responsible city planning. As the demand for
                  affordable and eco-friendly construction rises, this
                  initiative positions itself at the intersection of technology,
                  sustainability, and community welfare.
                </p>
                <div className="bg-yellow-50 border-l-4 border-yellow-400 p-6 rounded-r-lg">
                  <p className="text-yellow-800 font-medium">
                    "Project Riwayat has not just given us income, but dignity
                    and recognition for our traditional skills."
                    <span className="block text-sm mt-2 text-yellow-600">
                      - Sunita Devi, Lead Artisan
                    </span>
                  </p>
                </div>
              </div>
            </div>
          </motion.section>

          {/* Problem & Solution */}
          <motion.section
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-red-50 rounded-2xl p-8 border border-red-100">
                <h3 className="text-2xl font-bold text-red-800 mb-4 flex items-center">
                  <span className="text-xl mr-3">❌</span>
                  The Problem
                </h3>
                <ul className="space-y-3 text-red-700">
                  <li className="flex items-start">
                    <span className="text-red-500 mr-3 mt-1">•</span>
                    Traditional crafts losing relevance in modern markets
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-500 mr-3 mt-1">•</span>
                    Women artisans lacking direct market access
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-500 mr-3 mt-1">•</span>
                    Limited income opportunities in rural areas
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-500 mr-3 mt-1">•</span>
                    Skills being passed down informally without quality
                    standards
                  </li>
                </ul>
              </div>

              <div className="bg-green-50 rounded-2xl p-8 border border-green-100">
                <h3 className="text-2xl font-bold text-green-800 mb-4 flex items-center">
                  <span className="text-xl mr-3">✅</span>
                  Our Solution
                </h3>
                <ul className="space-y-3 text-green-700">
                  <li className="flex items-start">
                    <span className="text-green-500 mr-3 mt-1">•</span>
                    Modernized product designs while preserving traditional
                    techniques
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-3 mt-1">•</span>
                    Digital marketplace connecting artisans directly to
                    customers
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-3 mt-1">•</span>
                    Skill development workshops and quality certification
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-3 mt-1">•</span>
                    Sustainable business model ensuring fair wages
                  </li>
                </ul>
              </div>
            </div>
          </motion.section>

          {/* Call to Action */}
          <motion.section
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="bg-gradient-to-r from-yellow-400 to-orange-500 rounded-2xl p-8 text-center text-white">
              <h2 className="text-3xl font-bold mb-4">
                Want to Support Project Riwayat?
              </h2>
              <p className="text-xl mb-8 opacity-90">
                Join us in empowering more women artisans and preserving
                traditional crafts.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-white text-yellow-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-300">
                  Purchase Products
                </button>
                <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-yellow-600 transition-colors duration-300">
                  Become a Partner
                </button>
              </div>
            </div>
          </motion.section>
        </div>

        {/* Footer Spacing */}
        <div className="h-20"></div>
      </div>
    </main>
  );
}
