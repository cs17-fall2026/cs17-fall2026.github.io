import React from "react";
import cover from "../assets/cs17cover-optimized.webp";

export default function Labs() {
  return (
    <div className="page-content">
      <div>
        <img src={cover} className="cover-image" alt="CS17 Cover" />
        <h2>Welcome to CS17! 🍎</h2>
        <p>
          <b>
            Note: this website is currently under construction in preparation
            for the Fall 2026 iteration. Information and links may be outdated
            -- please reference CAB!
          </b>
        </p>
        <p>
          CS17 (CSCI 0170) is an intro computer science class at Brown
          University — emphasis on intro! We take your ideas very seriously and
          want to make a welcoming environment for everyone who wants to learn
          CS — fill out our{" "}
          <b>
            <u>
              <a
                href="https://docs.google.com/forms/d/e/1FAIpQLSePgiTgkH0PmWIXtyEvw5_9HSkTFCyuwyAnUhpuI-Pe0EhDZg/viewform"
                target="_blank"
              >
                anonymous feedback form
              </a>
            </u>
          </b>{" "}
          to let us know if we can do anything better! If you have any questions
          on content, post on Ed, come to TA hours or Professor Klein's office
          hours. We're all here to help!
        </p>
      </div>
      <hr></hr>
      <div>
        <h3>Useful Links</h3>
        <div className="useful-links">
          <a className="useful-links-btn" href="" target="_blank">
            Syllabus
          </a>
          <a className="useful-links-btn" href="" target="_blank">
            EdStem
          </a>
          <a className="useful-links-btn" href="" target="_blank">
            Gradescope
          </a>
          <a className="useful-links-btn" href="" target="_blank">
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
          <a className="useful-links-btn" href="">
            Lecture Recordings
          </a>
        </div>
        <hr></hr>
        <div>
          <h3>Calendar</h3>
          <iframe
            src="https://calendar.google.com/calendar/embed?src=c_8b58741d65ed249db50a44814b59495fa392335549c3d6cdca402f9081462fb9%40group.calendar.google.com&ctz=America%2FNew_York"
            className="calendar"
            loading="lazy"
          ></iframe>
        </div>
      </div>
    </div>
  );
}
