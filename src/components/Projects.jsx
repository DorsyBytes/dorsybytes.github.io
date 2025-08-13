import React from "react";
import { PROJECTS } from "../data";
import "./projects.scss"; 

export default function Projects() {
  return (
    <section id="projects" className="section">
      <div className="container">
        <h2>Projects</h2>
        <div className="grid grid-3">
          {PROJECTS.map(p => (
            <article key={p.id} className="card project-card">
              {/* Project Image */}
              <a href={p.url} target="_blank" rel="noreferrer" className="image-link">
                <img
                  src={p.image}
                  alt={`${p.name} screenshot`}
                  className="project-image"
                />
              </a>

              {/* Project Name at the Bottom */}
              <a className="project-name" href={p.url} target="_blank" rel="noreferrer">
                {p.name}
              </a>

              {/* Tech Badges */}
              <div className="tech-badges">
                {Array.isArray(p.tech) &&
                  p.tech.map((tech, index) => (
                    <span key={index} className="badge">
                      {tech}
                    </span>
                  ))}
              </div>

              {/* Description */}
              <p className="muted">{p.description}</p>

              {/* Updated Date */}
              <span className="muted updated-date">
                Updated {new Date(p.updated).toLocaleDateString()}
              </span>
              
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
