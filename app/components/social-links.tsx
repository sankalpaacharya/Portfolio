"use client";
import React from "react";
import { FaTwitter, FaGithub, FaLinkedin, FaYoutube } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import Link from "next/link";
import { motion } from "framer-motion";

export default function SocialLinks() {
  const socialLinks = [
    {
      name: "Twitter",
      url: "https://twitter.com/sankalpa_02",
      icon: <FaTwitter className="text-white text-lg" />,
    },
    {
      name: "GitHub",
      url: "https://github.com/sankalpaacharya",
      icon: <FaGithub className="text-white text-lg" />,
    },
    {
      name: "LinkedIn",
      url: "https://linkedin.com/in/sankalpa02",
      icon: <FaLinkedin className="text-white text-lg" />,
    },
    {
      name: "YouTube",
      url: "https://www.youtube.com/@sankalpa02",
      icon: <FaYoutube className="text-white text-lg" />,
    },
    {
      name: "Email",
      url: "mail:sankalpaacharya01@gmail.com",
      icon: <IoMdMail className="text-white text-lg" />,
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

  const socialIconVariants = {
    hidden: { opacity: 0 },
    visible: (i: number) => ({
      opacity: 1,
      transition: {
        delay: 0.1 + i * 0.05,
        duration: 0.3,
      },
    }),
    hover: {
      scale: 1.05,
      transition: {
        duration: 0.2,
      },
    },
    tap: { scale: 0.98 },
  };

  return (
    <motion.div
      className="flex gap-3 pt-2"
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
            className="p-2.5 rounded-md transition-colors bg-card text-xs inline-flex gap-2 items-center justify-center border"
            target="_blank"
            rel="noopener noreferrer"
            aria-label={social.name}
          >
            {social.icon}
            {social.name}
          </Link>
        </motion.div>
      ))}
    </motion.div>
  );
}
