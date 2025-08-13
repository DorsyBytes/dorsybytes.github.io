import React from "react";
import { PROFILE } from "../data";

export default function Hero(){
  return (
    <header className="section hero">
      <div className="container">
        <p>Hello, I’m</p>
        <h1>{PROFILE.name} — <span>{PROFILE.title}</span></h1>
        <p className="muted" style={{maxWidth:720}}>
          {PROFILE.tagline}
        </p>
        <div className="hero-actions">
          <a className="btn" href="#projects">View Projects</a>
          <a className="btn" href={`mailto:${PROFILE.email}`}>Email Me</a>
          <a className="btn" href={PROFILE.linkedin} target="_blank" rel="noreferrer">LinkedIn</a>
        </div>
      </div>
    </header>
  );
}
