"use client";
import React from "react";
import { MdVerified } from "react-icons/md";
import { FaTwitter, FaGithub, FaLinkedin, FaYoutube } from "react-icons/fa";
import { SiDevdotto } from "react-icons/si";
import Link from "next/link";
import { motion } from "framer-motion";

export default function About() {
  const socialLinks = [
    {
      name: "Twitter",
      url: "https://twitter.com/sanku",
      icon: <FaTwitter className="text-white text-lg" />,
    },
    {
      name: "GitHub",
      url: "https://github.com/sanku",
      icon: <FaGithub className="text-white text-lg" />,
    },
    {
      name: "LinkedIn",
      url: "https://linkedin.com/in/sanku",
      icon: <FaLinkedin className="text-white text-lg" />,
    },
    {
      name: "YouTube",
      url: "https://youtube.com/@sanku",
      icon: <FaYoutube className="text-white text-lg" />,
    },
    {
      name: "Dev.to",
      url: "https://dev.to/sanku",
      icon: <SiDevdotto className="text-white text-lg" />,
    },
  ];

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15,
      },
    },
  };

  const nameVariants = {
    hidden: { opacity: 0, x: -30 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 20,
        duration: 0.7,
      },
    },
  };

  const socialIconVariants = {
    hidden: { scale: 0, opacity: 0 },
    visible: (i: number) => ({
      scale: 1,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 260,
        damping: 20,
        delay: 0.8 + i * 0.1,
      },
    }),
    hover: {
      scale: 1.2,
      y: -5,
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 10,
      },
    },
    tap: { scale: 0.9 },
  };

  const verifiedBadgeVariants = {
    hidden: { scale: 0, opacity: 0 },
    visible: {
      scale: [1, 1.2, 1],
      opacity: 1,
      transition: {
        delay: 0.3,
        duration: 0.5,
        times: [0, 0.5, 1],
      },
    },
  };

  return (
    <motion.div
      className="py-6 space-y-4 max-w-2xl"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <motion.div className="space-y-3">
        <div className="flex items-center gap-2">
          <motion.h2
            className="text-6xl font-bold text-white"
            variants={nameVariants}
          >
            Sankalpa Acharya
          </motion.h2>
          <motion.div variants={verifiedBadgeVariants}>
            <MdVerified className="text-blue-500 text-xl" />
          </motion.div>
        </div>

        <motion.p className="text-sm text-gray-400" variants={itemVariants}>
          React • Linux • Golang • building{" "}
          <Link
            href="https://twitter.com/sanku"
            className="text-blue-400 hover:underline"
          >
            @sanku
          </Link>
        </motion.p>

        <motion.p
          className="text-lg text-gray-300 leading-relaxed"
          variants={itemVariants}
          initial={{ opacity: 0, y: 20 }}
          animate={{
            opacity: 1,
            y: 0,
            transition: {
              delay: 0.5,
              duration: 0.7,
              ease: "easeOut",
            },
          }}
        >
          3rd-year Computer Science student driven to build software that lasts.
          Skilled in React, Golang, and Linux systems. I believe in creating
          solutions that are fast, reliable, and built to make a difference.
          Whenever I feel like to share my knowledge I write{" "}
          <Link className="text-blue-400" href={""}>
            @blogs
          </Link>
          .
        </motion.p>
      </motion.div>

      <motion.div
        className="flex gap-3 pt-2 mt-5"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        {socialLinks.map((social, index) => (
          <motion.div
            key={social.name}
            custom={index}
            variants={socialIconVariants}
            whileHover="hover"
            whileTap="tap"
          >
            <Link
              href={social.url}
              className="bg-gray-900 p-2.5 rounded-md hover:bg-gray-800 transition-colors inline-block"
              target="_blank"
              rel="noopener noreferrer"
              aria-label={social.name}
            >
              {social.icon}
            </Link>
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
}
