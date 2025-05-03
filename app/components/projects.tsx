import React from "react";
import ProjectCard from "./projectcard";

export default function Projects() {
  return (
    <div className="mt-20">
      <h2 className="text-3xl text-shadow-lg font-bold text-gray-300">
        Projects
      </h2>
      <div className="circle-gradient mt-10" />
      <div className="space-y-3 flex gap-5 flex-col mt-5">
        <ProjectCard
          title="Weride.live"
          description="Making vehicle sharing easier and more comfortable for hostel students."
          imageUrl="/images/weride.png"
          buttonLink="https://weride.live"
          buttonText="Website"
        />
        <ProjectCard
          title="Cleaner"
          description="An webapp to clean github repository so that you dont have to manually delete all of them"
          imageUrl="https://www.sankalpa.info.np/_astro/repo-deleter.Dq60gM2z_miB0p.webp"
          buttonLink="https://repo-deleter.vercel.app/"
          buttonText="Website"
        />
      </div>
    </div>
  );
}
