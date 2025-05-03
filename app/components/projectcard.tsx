"use client";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";

interface ProjectCardProps {
  title: string;
  description: string;
  imageUrl: string;
  buttonText: string;
  projectUrl: string;
  buttonLink: string;
}

export default function ProjectCard({
  title,
  description,
  imageUrl,
  buttonText,
  buttonLink,
  projectUrl,
}: ProjectCardProps) {
  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15,
      },
    },
    hover: {
      y: -8,
      boxShadow: "0px 10px 30px rgba(0,0,0,0.2)",
      borderColor: "#333333",
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 10,
      },
    },
  };

  // Button animation variants
  const buttonVariants = {
    initial: { scale: 1 },
    hover: {
      scale: 1.05,
      backgroundColor: "#f8f8f8",
      boxShadow: "0px 5px 15px rgba(0,0,0,0.2)",
      transition: {
        type: "spring",
        stiffness: 500,
        damping: 15,
      },
    },
    tap: { scale: 0.95 },
  };

  // Text container animation variants
  const textContainerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  // Text item animation variants
  const textItemVariants = {
    hidden: { opacity: 0, y: 10 },
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

  // Image animation variants
  const imageVariants = {
    hidden: { scale: 1.1, opacity: 0.8 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: { duration: 0.5 },
    },
    hover: {
      scale: 1.03,
      transition: { duration: 0.4 },
    },
  };

  return (
    <Link href={projectUrl}>
      <motion.div
        className="bg-[#12100f]/70 rounded-2xl shadow-xl overflow-hidden border border-neutral-800"
        variants={cardVariants}
        initial="hidden"
        animate="visible"
        whileHover="hover"
      >
        <div className="relative overflow-hidden">
          <motion.img
            src={imageUrl}
            alt={title}
            className="w-full object-cover rounded-t-2xl"
            variants={imageVariants}
            initial="hidden"
            animate="visible"
            whileHover="hover"
          />

          {/* Gradient overlay on hover with glow effect */}
          <motion.div
            className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0"
            initial={{ opacity: 0 }}
            whileHover={{
              opacity: 1,
              background:
                "linear-gradient(to top, rgba(0,0,0,0.7), rgba(25,25,25,0.3), transparent)",
            }}
            transition={{ duration: 0.4 }}
          />

          <motion.a
            href={buttonLink}
            target="_blank"
            rel="noopener noreferrer"
            className="absolute top-4 right-4 bg-white text-black text-xs font-semibold py-1 px-3 rounded-full"
            variants={buttonVariants}
            initial="initial"
            whileHover="hover"
            whileTap="tap"
          >
            {buttonText}
          </motion.a>
        </div>

        <motion.div
          className="p-4"
          variants={textContainerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.h3
            className="text-white text-lg font-semibold"
            variants={textItemVariants}
          >
            {title}
          </motion.h3>

          <motion.p
            className="text-sm text-gray-400 mt-1"
            variants={textItemVariants}
          >
            {description}
          </motion.p>
        </motion.div>
      </motion.div>
    </Link>
  );
}
