import React from "react";
import cover from "../assets/cs17cover-optimized.webp";

export default function Labs() {
  return (
    <div className="page-content">
      <div>
        {/* <img src={cover} className="cover-image" alt="CS17 Cover" /> */}
        <h2>Welcome to CS17! 🦑</h2>
        <p>
          CS17 (CSCI 0170) is an introductory computer science class at Brown
          University. We aim to create a welcoming environment for everyone who
          wants to learn computer science. If you have any questions on content,
          post on Ed, or come to TA hours or Professor Klein's office hours.
        </p>
      </div>
      <hr></hr>
      <div>
        <h3>Useful Links</h3>
        <div className="useful-links">
          <a
            className="useful-links-btn"
            href="https://drive.google.com/file/d/1pnRgKYtoCXN_TMbuZNwIrH8FHVrpK8qj/view?usp=sharing"
            target="_blank"
          >
            Syllabus
          </a>
          <a
            className="useful-links-btn"
            href="https://edstem.org/us/courses/104072/discussion"
            target="_blank"
          >
            EdStem
          </a>
          <a
            className="useful-links-btn"
            href="https://www.gradescope.com/courses/1386732"
            target="_blank"
          >
            Gradescope
          </a>
          <a
            className="useful-links-btn"
            href="https://cs17-fall2026.github.io/#/hours"
            target="_blank"
          >
            Hours
          </a>
          <a
            className="useful-links-btn"
            href="mailto:cs0170headtas@lists.brown.edu"
          >
            Head TA Email
          </a>
          <a className="useful-links-btn" href="mailto:klein@brown.edu">
            Professor Klein's Email
          </a>
          <a
            className="useful-links-btn"
            href="https://brown.hosted.panopto.com/Panopto/Pages/Sessions/List.aspx?folderID=02a0ca44-40b1-47b0-9997-b4bb0112a572"
          >
            Lecture Recordings
          </a>
        </div>
        <hr></hr>
        <div>
          <h3>Calendar</h3>
          <iframe
            src="https://calendar.google.com/calendar/embed?src=c_55d3459061ed1052a1e63d7dcfa0717e9f68f47758e51a1067f112d183d36df2%40group.calendar.google.com&ctz=America%2FNew_York"
            className="calendar"
            loading="lazy"
          ></iframe>
        </div>
      </div>
    </div>
  );
}
