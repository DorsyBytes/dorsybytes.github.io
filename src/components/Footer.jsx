import React from "react";
import { PROFILE } from "../data";

export default function Footer(){
  const year = new Date().getFullYear();
  return (
    <footer className="footer">
      <div className="container">
        © {year} {PROFILE.name}. Built with React & Vite. Hosted on GitHub Pages.
      </div>
    </footer>
  );
}
