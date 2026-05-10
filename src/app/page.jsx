import AboutMe from "@/components/AboutMe";
import Certificates from "@/components/Certificates";
import Education from "@/components/Education";
import GetInTouch from "@/components/GetInTouch";
import HeroSection from "@/components/HeroSection";
import OpenSource from "@/components/OpenSource";
import Projects from "@/components/Projects";
import SkillsAndTech from "@/components/SkillsAndTech";
import React from "react";

const Page = () => {
  return (
    <div className="relative min-h-screen">
      <HeroSection />
      <AboutMe />
      <SkillsAndTech />
      <Projects />
      <OpenSource />
      <Education />
      <Certificates />
      <GetInTouch />
    </div>
  );
};

export default Page;
