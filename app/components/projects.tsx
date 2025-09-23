import React from "react";
import ProjectCard from "./projectcard";

export default function Projects() {
  return (
    <div className="mt-20">
      <h2 className="text-3xl text-shadow-lg font-bold text-gray-300">
        Projects
      </h2>
      <div className="circle-gradient mt-10" />
      <div className="space-y-3 grid grid-cols-1 gap-5  mt-5">
        <ProjectCard
          title="Still"
          description="Your AI that tracks spending and roasts your unnecessary expenses."
          imageUrl="/images/still.png"
          buttonLink="https://fixyourspend.vercel.app"
          buttonText="Website"
        />
        <ProjectCard
          title="Weride.live"
          description="Making vehicle sharing easier and more comfortable for hostel students."
          imageUrl="/images/weride.png"
          buttonLink="https://weride.live"
          buttonText="Website"
        />
        <ProjectCard
          title="Shadcn Collection"
          description="ShadCN UI doesn’t come with a code block component, so I built one!"
          imageUrl="/images/shadcncollections.png"
          buttonLink="https://shadcn-collections.vercel.app/"
          buttonText="Website"
        />
        <ProjectCard
          title="Cleaner"
          description="An webapp to clean github repository so that you dont have to manually delete all of them"
          imageUrl="/images/repodeleter.png"
          buttonLink="https://repo-deleter.vercel.app/"
          buttonText="Website"
        />
      </div>
    </div>
  );
}
