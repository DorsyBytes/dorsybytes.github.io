import React from "react";
import { SKILLS } from "../data";
import './about.scss';

export default function About(){
  return (
    <section id="about" className="section">
      <div className="container">
        <h2>About Me</h2>
        <div className="card" style={{display:"grid", gap:16}}>
          <p>
            I’m a frontend developer focused on building fast, accessible, and delightful web interfaces.
            Outside of coding, I enjoy playing video games and sometimes basketball and volleyball.
            I’m always curious and excited to explore new technology.
          </p>
          <div>
            {SKILLS.map(s => <span key={s} className="badge">{s}</span>)}
          </div>
        </div>
      </div>
    </section>
  );
}
