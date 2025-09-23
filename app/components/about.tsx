"use client";
import React, { useEffect, useState } from "react";
import { MdVerified } from "react-icons/md";
import { FaTwitter, FaGithub, FaLinkedin, FaYoutube } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import Link from "next/link";
import { Download } from "lucide-react";
import { Separator } from "@/components/ui/separator";
import { motion } from "framer-motion";

export default function About() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    // Initial check
    checkMobile();

    // Add resize listener
    window.addEventListener("resize", checkMobile);

    // Clean up
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

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
      url: "https://www.youtube.com/@sankalpa02",
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
      className="px-4 py-6 space-y-4 mx-auto w-full max-w-2xl"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <motion.div className="space-y-3">
        <div className="flex items-center gap-2 flex-wrap">
          <motion.h2
            className={`${
              isMobile ? "text-4xl" : "text-6xl"
            } font-bold text-white`}
            variants={nameVariants}
          >
            Sankalpa Acharya
          </motion.h2>
          <motion.div variants={verifiedBadgeVariants}>
            <MdVerified className="text-blue-500 text-xl" />
          </motion.div>
        </div>
        {/* <motion.p className="text-sm text-gray-400" variants={itemVariants}>
          React • Linux • Golang • building{" "}
          <Link
            href="https://twitter.com/sankalpa_02"
            className="text-blue-400 hover:underline"
          >
            @sanku
          </Link>
        </motion.p> */}
        <motion.p
          className="text-sm text-muted-foreground"
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
          21 year old dev who&apos;s passionate about{" "}
          <span className="text-primary">Development</span> and{" "}
          <span className="text-primary">Security.</span> I love building
          applications that people use to build applications
        </motion.p>

        <p className="text-muted-foreground text-sm">
          In my free time, you can find me playing{" "}
          <a href="https://chess.com/" className="text-sm text-blue-400">
            @chess
          </a>{" "}
          watching movies or trying something new either in tech or outside of
          tech.
        </p>
        <p className="text-muted-foreground text-sm">
          If you love reading blogs then I write{" "}
          <a href="https://blog.sankalpa.info.np/" className="text-blue-400">
            @blogs
          </a>{" "}
          sometimes related to security and web development or the fun things I
          try.
        </p>
      </motion.div>
      <div className="mt-5 flex gap-3 flex-col md:flex-row">
        <div className="text-xs bg-card px-4 py-2 border flex rounded-md cursor-pointer items-center gap-2">
          <span className="relative flex size-3">
            {" "}
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-pink-400 opacity-75"></span>{" "}
            <span className="relative inline-flex size-3 rounded-full bg-pink-500"></span>
          </span>
          Available for new opportunities
        </div>
        <Link
          target="_blank"
          href={
            "https://drive.google.com/file/d/1YTuLH9gSwHH5I3gHyQyBb7TzpG1mDAmA/view?usp=sharing"
          }
        >
          <div className="text-xs bg-card px-4 py-2 border flex rounded-md cursor-pointer items-center gap-2">
            <Download size={15} />
            Download Resume
          </div>
        </Link>
      </div>
      <Separator />
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
    </motion.div>
  );
}
