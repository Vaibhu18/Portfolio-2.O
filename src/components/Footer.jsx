import React from "react";

const Footer = () => {
  return (
    <footer className="w-full py-6 mt-5 mb-20">
      <div className="flex justify-center items-center text-xs gap-2 leading-relaxed tracking-wide text-neutral-500 font-medium">
        <p>© {new Date().getFullYear()} Vaibhav Shinde.</p>
      </div>
    </footer>
  );
};

export default Footer;
