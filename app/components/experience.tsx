"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { motion, Variants } from "framer-motion";

interface ExperienceData {
  id: string;
  title: string;
  company: string;
  location: string;
  logo: string;
  logoAlt: string;
  gradientFrom: string;
  gradientTo: string;
}

interface ExperienceCardProps {
  experience: ExperienceData;
  isMobile: boolean;
  cardVariants: Variants;
  logoVariants: Variants;
  textVariants: Variants;
}

const ExperienceCard: React.FC<ExperienceCardProps> = ({
  experience,
  isMobile,
  cardVariants,
  logoVariants,
  textVariants,
}) => {
  return (
    <motion.div
      className="bg-gray-500/10 bg-opacity-40 rounded-xl p-4 md:p-6 relative overflow-hidden"
      variants={cardVariants}
      whileHover="hover"
    >
      <motion.div
        className={`absolute inset-0 bg-gradient-to-r ${experience.gradientFrom} ${experience.gradientTo} opacity-0`}
        initial={{ opacity: 0 }}
        whileHover={{ opacity: 1 }}
        transition={{ duration: 0.3 }}
      />

      <div className="flex flex-col sm:flex-row sm:items-center gap-3 md:gap-4 relative z-10">
        <motion.div
          className="flex-shrink-0 w-10 h-10 md:w-12 md:h-12 rounded-md overflow-hidden bg-gray-800 flex items-center justify-center"
          variants={logoVariants}
          whileHover="hover"
        >
          <Image
            src={experience.logo}
            alt={experience.logoAlt}
            width={isMobile ? 40 : 48}
            height={isMobile ? 40 : 48}
            className="object-contain"
          />
        </motion.div>
        <div className="flex-grow">
          <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-1">
            <motion.h3
              className="text-lg md:text-xl font-semibold"
              variants={textVariants}
            >
              {experience.title}
            </motion.h3>
            <motion.span
              className="text-gray-400 text-xs md:text-sm"
              variants={textVariants}
            >
              {experience.location}
            </motion.span>
          </div>
          <motion.h4
            className="text-blue-400 text-sm md:text-base mt-1"
            variants={textVariants}
          >
            {experience.company}
          </motion.h4>
        </div>
      </div>
    </motion.div>
  );
};

export default function Experience() {
  const [isMobile, setIsMobile] = useState(false);

  // Experience data
  const experiences: ExperienceData[] = [
    {
      id: "unstuck",
      title: "Full Stack AI Developer",
      company: "Unstuck",
      location: "San Francisco, CA",
      logo: "/images/unstuck.png",
      logoAlt: "Unstuck Logo",
      gradientFrom: "from-purple-500/10",
      gradientTo: "to-pink-500/10",
    },
    {
      id: "nox",
      title: "Full Stack Developer",
      company: "NOX • OpenAI-backed",
      location: "San Francisco, CA",
      logo: "/images/nox.png",
      logoAlt: "NOX Logo",
      gradientFrom: "from-blue-500/10",
      gradientTo: "to-purple-500/10",
    },
  ];

  // Check if viewport is mobile on component mount and window resize
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  // Animation variants
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const cardVariants: Variants = {
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
      scale: isMobile ? 1.01 : 1.03,
      boxShadow: "0 10px 30px rgba(0, 0, 0, 0.15)",
      transition: { type: "spring", stiffness: 400, damping: 10 },
    },
  };

  const logoVariants: Variants = {
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

  const textVariants: Variants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <section className="my-12 md:my-20 px-4 md:px-0 w-full max-w-2xl mx-auto">
      <motion.h2
        className={`${
          isMobile ? "text-3xl" : "text-4xl"
        } font-bold mb-6 md:mb-8`}
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
        Experience
      </motion.h2>

      <motion.div
        className="space-y-4 md:space-y-6"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {experiences.map((experience) => (
          <ExperienceCard
            key={experience.id}
            experience={experience}
            isMobile={isMobile}
            cardVariants={cardVariants}
            logoVariants={logoVariants}
            textVariants={textVariants}
          />
        ))}
      </motion.div>
    </section>
  );
}
