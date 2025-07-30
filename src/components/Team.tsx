"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const team = [
  {
    name: "Ananya Gupta",
    role: "President",
    image: "/team/ananya.jpg",
    bio: "Visionary leader with a passion for social entrepreneurship.",
  },
  {
    name: "Rohan Mehta",
    role: "Vice President",
    image: "/team/rohan.jpg",
    bio: "Bridging innovation and impact through strategy.",
  },
  {
    name: "Sneha Iyer",
    role: "Operations Head",
    image: "/team/sneha.jpg",
    bio: "Driving project execution with precision and care.",
  },
  {
    name: "Arjun Singh",
    role: "Tech Lead",
    image: "/team/arjun.jpg",
    bio: "Building digital solutions to support real-world change.",
  },
  {
    name: "Divya Rao",
    role: "Marketing Head",
    image: "/team/divya.jpg",
    bio: "Crafting narratives that amplify our mission.",
  },
  {
    name: "Kabir Sharma",
    role: "Finance Lead",
    image: "/team/kabir.jpg",
    bio: "Ensuring sustainable impact through strategic funding.",
  },
];

export default function TeamPage() {
  return (
    <main className="bg-gradient-to-br from-yellow-50 to-white min-h-screen text-gray-800">
      {/* Navbar */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/60 backdrop-blur-md border-b border-yellow-200 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <Link href="/">
            <div className="flex items-center space-x-2 cursor-pointer">
              <img
                src="/images/logo.png"
                alt="Logo"
                className="h-10 w-10 object-contain"
              />
              <span className="font-bold text-yellow-500 text-xl">ENACTUS</span>
            </div>
          </Link>
          <div className="hidden md:flex space-x-6 text-sm font-medium">
            <Link href="#" className="hover:text-yellow-500 transition">
              Home
            </Link>
            <Link href="#projects" className="hover:text-yellow-500 transition">
              Projects
            </Link>
            <Link href="#contact" className="hover:text-yellow-500 transition">
              Contact
            </Link>
          </div>
        </div>
      </nav>

      {/* Header Section with Background Image */}
      <section className="relative h-[60vh] flex items-center justify-center text-center px-4 pt-20 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/background.png')" }}
        />
        <div className="absolute inset-0 bg-black/40" />
        <motion.div
          className="relative z-10 max-w-3xl mx-auto text-white"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4 text-yellow-400 drop-shadow-lg">
            Meet Our Team
          </h1>
          <p className="text-lg md:text-xl text-white/90">
            Passionate students building impactful change through action.
          </p>
        </motion.div>
      </section>

      {/* Team Grid Section */}
      <section className="max-w-7xl mx-auto px-4 py-20 text-center">
        <motion.p
          className="text-lg text-gray-600 mb-14 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Behind every impactful Enactus project is a passionate student team
          dedicated to driving change with entrepreneurial spirit.
        </motion.p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {team.map((member, i) => (
            <motion.div
              key={i}
              className="bg-white/80 border border-yellow-200 backdrop-blur-lg p-6 rounded-3xl shadow-xl flex flex-col items-center hover:shadow-2xl transition-all"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="relative w-28 h-28 mb-4">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-28 h-28 object-cover rounded-full border-4 border-yellow-300 shadow-md hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute bottom-0 right-0 w-5 h-5 bg-green-400 border-2 border-white rounded-full"></div>
              </div>
              <h3 className="text-lg font-semibold text-gray-800">
                {member.name}
              </h3>
              <p className="text-sm text-yellow-600 font-medium mb-2">
                {member.role}
              </p>
              <p className="text-sm text-gray-600 italic text-center">
                {member.bio}
              </p>
            </motion.div>
          ))}
        </div>
      </section>
    </main>
  );
}
