import React from "react";
import { PROFILE } from "../data";

export default function Contact(){
  return (
    <section id="contact" className="section">
      <div className="container">
        <h2>Contact</h2>
        <div className="card" style={{display:"grid", gap:12}}>
          <p className="muted">Want to collaborate or say hi? Reach out:</p>
          <div style={{display:"flex", gap:12, flexWrap:"wrap"}}>
            <a className="btn" href={`mailto:${PROFILE.email}`}>{PROFILE.email}</a>
            <a className="btn" href={`https://github.com/${PROFILE.github}`} target="_blank" rel="noreferrer">GitHub</a>
            <a className="btn" href={PROFILE.linkedin} target="_blank" rel="noreferrer">LinkedIn</a>
          </div>
        </div>
      </div>
    </section>
  );
}
