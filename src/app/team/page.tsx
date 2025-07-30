"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

const navItems = [
  { name: "Home", href: "/" },
  { name: "Projects", href: "#projects" },
  { name: "Impact", href: "#impact" },
  { name: "Events", href: "#events" },
  { name: "Team", href: "/team" },
  { name: "Contact", href: "#contact" },
];
type TeamMember = {
  name: string;
  role: string;
  image?: string;
};

const team: TeamMember[] = [
  { name: "Naavya Arya", role: "President" },
  { name: "Disha Gurjar", role: "Vice President" },
  { name: "Yashika Sachdeva", role: "General Secretary" },
  { name: "Aanya Suri", role: "Social Media & Marketing Head" },
  { name: "Shruti", role: "Social Media & Marketing Head" },
  { name: "Avani", role: "Sponsorship Head" },
  { name: "Janika", role: "Sponsorship Head" },
  { name: "Pranjali Nangia", role: "HR & Logistics Head" },
  { name: "Kishika", role: "HR & Logistics Head" },
  { name: "Navya Chandok", role: "Project Head – Dharang" },
  { name: "Shreem Bindal", role: "Project Head – Dharang" },
  { name: "Tanya Gupta", role: "Project Head – Noorani" },
  { name: "Naina Tiberwal", role: "Project Head – Noorani" },
  { name: "Divyanshi Rastogi", role: "Research Head – Noorani" },
  { name: "Paavani Khurana", role: "Project Head – Ikhtiyaar" },
  { name: "Devanshi", role: "Project Head – Ikhtiyaar" },
  { name: "Ananya", role: "Research Head – Ikhtiyaar" },
  { name: "Vidita Bajaj", role: "Project Director – Riwayat" },
  { name: "Bhumi Gaur", role: "Project Head – Riwayat" },
  { name: "Kavya", role: "Project Head – Riwayat" },
  { name: "Anvi Chawla", role: "Project Director – Nitara" },
  { name: "Rahnuma Firdous", role: "Project Director – Nitara" },
  { name: "Fathima Amal", role: "Project Director – Nitara" },
  { name: "Sayli Patil", role: "Project Head – Nitara" },
  { name: "Gargi Pitambar Upadhyay", role: "Project Head – Nitara" },
];

export default function TeamPage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
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

      {/* Team Section */}
      <main className="bg-white min-h-screen py-24 px-4">
        <section className="max-w-6xl mx-auto text-center">
          <motion.h1
            className="text-4xl md:text-5xl font-bold text-gray-900 mb-6"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Meet Our Team
          </motion.h1>

          <motion.p
            className="text-lg text-gray-600 mb-12 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Behind every impactful Enactus project is a passionate student team
            dedicated to making change happen.
          </motion.p>

          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-10">
            {team.map((member, i) => (
              <motion.div
                key={i}
                className="bg-white/80 border border-yellow-200 backdrop-blur-lg p-6 rounded-2xl shadow-lg flex flex-col items-center"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                viewport={{ once: true }}
              >
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-24 h-24 rounded-full object-cover mb-4 border-2 border-yellow-300"
                />
                <h3 className="text-lg font-semibold text-gray-900">
                  {member.name}
                </h3>
                <p className="text-sm text-gray-600">{member.role}</p>
              </motion.div>
            ))}
          </div>
        </section>
      </main>
    </>
  );
}
