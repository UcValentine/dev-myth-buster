import React from "react";

export const Footer = () => {
  return (
    <footer className="bg-gradient-to-b from-slate-900 to-slate-950 text-center py-6">
      <p className="text-slate-300 text-base md:text-lg font-medium tracking-wide">
        Built by{" "}
        <a
          href="https://www.linkedin.com/in/valentine-onah/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-emerald-400 hover:underline"
        >
          Valentine Onah
        </a>
      </p>
    </footer>
  );
};
