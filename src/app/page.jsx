import AboutMe from "@/components/AboutMe";
import Certificates from "@/components/Certificates";
import Education from "@/components/Education";
import Experience from "@/components/Experience";
import GetInTouch from "@/components/GetInTouch";
import HeroSection from "@/components/HeroSection";
import OpenSource from "@/components/OpenSource";
import Projects from "@/components/Projects";
import Resumes from "@/components/Resumes";
import SkillsAndTech from "@/components/SkillsAndTech";
import React from "react";

const Page = () => {
  return (
    <div className="relative min-h-screen">
      <HeroSection />
      <AboutMe />
      <Experience />
      <SkillsAndTech />
      <Projects />
      <OpenSource />
      <Education />
      <Certificates />
      <Resumes />
      <GetInTouch />
    </div>
  );
};

export default Page;
