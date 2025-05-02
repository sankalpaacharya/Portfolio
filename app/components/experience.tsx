"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

export default function Experience() {
  // Animation variants for container
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  // Animation variants for each experience card
  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 12,
      },
    },
    hover: {
      scale: 1.03,
      boxShadow: "0 10px 30px rgba(0, 0, 0, 0.15)",
      transition: { type: "spring", stiffness: 400, damping: 10 },
    },
  };

  // Animation variants for the logo
  const logoVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: { type: "spring", stiffness: 300, delay: 0.1 },
    },
    hover: {
      rotate: [0, 10, -10, 0],
      transition: { duration: 0.5, ease: "easeInOut" },
    },
  };

  // Text reveal animation
  const textVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <section className="my-20">
      <motion.h2
        className="text-4xl font-bold mb-8"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
        Experience
      </motion.h2>

      <motion.div
        className="space-y-6"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Unstuck Experience */}
        <motion.div
          className="bg-gray-500/10 bg-opacity-40 rounded-xl p-6 relative overflow-hidden"
          variants={cardVariants}
          whileHover="hover"
        >
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-pink-500/10 opacity-0"
            initial={{ opacity: 0 }}
            whileHover={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
          />

          <div className="flex items-center gap-4 relative z-10">
            <motion.div
              className="flex-shrink-0 w-12 h-12 rounded-md overflow-hidden bg-gray-800 flex items-center justify-center"
              variants={logoVariants}
              whileHover="hover"
            >
              <Image
                src="/images/unstuck.png"
                alt="Unstuck Logo"
                width={48}
                height={48}
                className="object-contain"
              />
            </motion.div>
            <div className="flex-grow">
              <div className="flex flex-col md:flex-row md:justify-between md:items-center">
                <motion.h3
                  className="text-xl font-semibold"
                  variants={textVariants}
                >
                  Full Stack AI Developer
                </motion.h3>
                <motion.span
                  className="text-gray-400 text-sm md:text-base"
                  variants={textVariants}
                >
                  San Francisco, CA
                </motion.span>
              </div>
              <motion.h4 className="text-blue-400 mt-1" variants={textVariants}>
                Unstuck
              </motion.h4>
            </div>
          </div>
        </motion.div>

        {/* NOX Experience */}
        <motion.div
          className="bg-gray-500/10 bg-opacity-40 rounded-xl p-6 relative overflow-hidden"
          variants={cardVariants}
          whileHover="hover"
        >
          {/* Hover gradient effect */}
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 opacity-0"
            initial={{ opacity: 0 }}
            whileHover={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
          />

          <div className="flex items-center gap-4 relative z-10">
            <motion.div
              className="flex-shrink-0 w-12 h-12 rounded-md overflow-hidden bg-gray-800 flex items-center justify-center"
              variants={logoVariants}
              whileHover="hover"
            >
              <Image
                src="/images/nox.png"
                alt="NOX Logo"
                width={48}
                height={48}
                className="object-contain"
              />
            </motion.div>
            <div className="flex-grow">
              <div className="flex flex-col md:flex-row md:justify-between md:items-center">
                <motion.h3
                  className="text-xl font-semibold"
                  variants={textVariants}
                >
                  Full Stack Developer
                </motion.h3>
                <motion.span
                  className="text-gray-400 text-sm md:text-base"
                  variants={textVariants}
                >
                  San Francisco, CA
                </motion.span>
              </div>
              <motion.h4 className="text-blue-400 mt-1" variants={textVariants}>
                NOX • OpenAI-backed
              </motion.h4>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
