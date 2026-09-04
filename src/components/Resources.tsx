import React from "react";
export default function Resources() {
  return (
    <div className="page-content">
      <h1>Resources</h1>
      <div className="resource-div">
        <div className="resource-column">
          <p>General</p>
          <a href="" target="_blank">
            <div className="resource-box">Syllabus</div>
          </a>
          <a href="" target="_blank">
            <div className="resource-box">Common Mistakes</div>
          </a>
          <a href="" target="_blank">
            <div className="resource-box">Design Recipe</div>
          </a>
          <a href="" target="_blank">
            <div className="resource-box">
              Allowed Built-In Procedures in Racket{" "}
            </div>
          </a>
          <a href="" target="_blank">
            <div className="resource-box">
              Allowed Built-In Procedures in OCaml{" "}
            </div>
          </a>
          <a href="" target="_blank">
            <div className="resource-box">Anon Feedback Form</div>
          </a>
          <a href="" target="_blank">
            <div className="resource-box">Analysis Table</div>
          </a>
          <a href="https://adamapples.blogspot.com/" target="_blank">
            <div className="resource-box">Apples</div>
          </a>
        </div>

        <div className="resource-column">
          <p>Racket and ReasonML</p>
          <a href="" target="_blank">
            <div className="resource-box">Style Guide</div>
          </a>
          <a href="" target="_blank">
            <div className="resource-box">Racket Style Guide</div>
          </a>
          <a href="" target="_blank">
            <div className="resource-box">Racket Teachpack</div>
          </a>

          <a href="" target="_blank">
            <div className="resource-box">OCaml Debugging</div>
          </a>
          <a href="" target="_blank">
            <div className="resource-box">OCaml Install</div>
          </a>
          <a href="" target="_blank">
            <div className="resource-box">Racket to ReasonML</div>
          </a>
        </div>

        <div className="resource-column">
          <p>Policies and Guides</p>
          <a href="" target="_blank">
            <div className="resource-box">EdStem Policies</div>
          </a>
          <a href="" target="_blank">
            <div className="resource-box">Course Policies</div>
          </a>
          <a href="" target="_blank">
            <div className="resource-box">Hours Policies</div>
          </a>
          <a href="" target="_blank">
            <div className="resource-box">Pair Programming</div>
          </a>
          <a href="" target="_blank">
            <div className="resource-box">Symbol Guide</div>
          </a>
        </div>
      </div>
      <h2>Calendar</h2>
      <p>Contains info on assignments, office hours, and labs.</p>
      <iframe
        src="https://calendar.google.com/calendar/embed?src=c_8b58741d65ed249db50a44814b59495fa392335549c3d6cdca402f9081462fb9%40group.calendar.google.com&ctz=America%2FNew_York"
        className="calendar"
      ></iframe>
    </div>
  );
}
