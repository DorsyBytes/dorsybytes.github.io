import React from "react";
import { PROFILE } from "../data";

export default function Navbar(){
  return (
    <nav className="nav">
      <div className="container nav-inner">
        <a href="#" aria-label="home" style={{fontWeight:700}}>
          {PROFILE.name.split(" ")[0]}<span style={{color:"var(--accent)"}}>.</span>
        </a>
        <div style={{display:"flex", gap:16}}>
          <a href="#about">About</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
          <a className="badge" href={`https://github.com/${PROFILE.github}`} target="_blank" rel="noreferrer">GitHub</a>
        </div>
      </div>
    </nav>
  )
}
