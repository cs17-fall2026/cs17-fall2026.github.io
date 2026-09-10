import React from "react";
export default function Resources() {
  return (
    <div className="page-content">
      <h1>Resources</h1>
      <div className="resource-div">
        <div className="resource-column">
          <p>General</p>
          <a
            href="https://drive.google.com/file/d/1pnRgKYtoCXN_TMbuZNwIrH8FHVrpK8qj/view?usp=drive_link"
            target="_blank"
          >
            <div className="resource-box">Syllabus</div>
          </a>
          <a
            href="https://docs.google.com/forms/d/e/1FAIpQLSdChIxovK56djGyp3ObYGQx7IxnotsViKgNnfeLhOHY4jJDGw/viewform"
            target="_blank"
          >
            <div className="resource-box">Extension Form</div>
          </a>

          <a
            href="https://drive.google.com/file/d/1pnRgKYtoCXN_TMbuZNwIrH8FHVrpK8qj/view?usp=sharing"
            target="_blank"
          >
            <div className="resource-box">Common Mistakes</div>
          </a>
          <a
            href="https://drive.google.com/file/d/1r1GGfnqT0AnhRfi7NCNAB7uCxTnvlfpk/view?usp=sharing"
            target="_blank"
          >
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
          {/* <a href="" target="_blank">
            <div className="resource-box">Analysis Table</div>
          </a> */}
        </div>

        <div className="resource-column">
          <p>Racket and ReasonML</p>
          <a
            href="https://drive.google.com/file/d/1lGdCpsd7h5kVqcIZ_iWVRDw8SAH35ZiU/view?usp=sharing"
            target="_blank"
          >
            <div className="resource-box">Style Guide</div>
          </a>
          <a
            href="https://drive.google.com/file/d/1P8UAePqPCldMJTLD5VUiLncH56uYzXng/view?usp=sharing"
            target="_blank"
          >
            <div className="resource-box">Racket Style Guide</div>
          </a>
          <a
            href="https://drive.google.com/file/d/1ed4wKXQ8tQRl9mEa0PoUMfOv0QCBK5EM/view?usp=sharing"
            target="_blank"
          >
            <div className="resource-box">Racket Teachpack</div>
          </a>

          <a href="" target="_blank">
            <div className="resource-box">OCaml Debugging</div>
          </a>
          <a href="" target="_blank">
            <div className="resource-box">OCaml Install</div>
          </a>
          <a href="" target="_blank">
            <div className="resource-box">Racket to OCaml</div>
          </a>
        </div>

        <div className="resource-column">
          <p>Policies and Guides</p>
          <a
            href="https://drive.google.com/file/d/1udkMWX-jjMlAReMzbIpL7DyeWjmnFfOS/view?usp=sharing"
            target="_blank"
          >
            <div className="resource-box">EdStem Policies</div>
          </a>
          <a
            href="https://drive.google.com/file/d/1ecb-Gja8YrrKoUIPwnxJW9zGUUlYtLFn/view?usp=sharing"
            target="_blank"
          >
            <div className="resource-box">Course Policies</div>
          </a>
          <a
            href="https://drive.google.com/file/d/1VFoeF9dixYnzk2Pgs3sidVOiz5t2nfHN/view?usp=sharing"
            target="_blank"
          >
            <div className="resource-box">Hours Policies</div>
          </a>
          <a
            href="https://drive.google.com/file/d/1bLh3WtuJon3_WHtgR2nlJ1IMidYzjRBO/view?usp=sharing"
            target="_blank"
          >
            <div className="resource-box">Pair Programming</div>
          </a>
          {/* <a href="" target="_blank">
            <div className="resource-box">Symbol Guide</div>
          </a> */}
        </div>
      </div>
      <h2>Calendar</h2>
      <p>Contains info on assignments, office hours, and labs.</p>
      <iframe
        src="https://calendar.google.com/calendar/embed?src=c_55d3459061ed1052a1e63d7dcfa0717e9f68f47758e51a1067f112d183d36df2%40group.calendar.google.com&ctz=America%2FNew_York"
        className="calendar"
      ></iframe>
    </div>
  );
}
