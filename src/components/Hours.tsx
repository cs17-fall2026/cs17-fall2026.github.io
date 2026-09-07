import React from "react";
export default function Hours() {
  return (
    <div className="page-content">
      <h1>Office Hours</h1>
      <p>
        Note: specific hours times and locations are subject to change. Check
        the course calendar for up-to-date information.{" "}
      </p>
      <h3>Prof. Klein's Hours:</h3>
      <p>
        Mon 4-5 p.m., Wed 11 a.m. - 12 p.m. and by appointment in room CIT503.
      </p>
      <h3>TA Office Hours</h3>

      <p>Wed 4-6 p.m. Thurs 4-8 p.m. Fri 4-8 p.m. in CIT201.</p>

      <div>
        <h3>Calendar</h3>
        <iframe
          src="https://calendar.google.com/calendar/embed?src=c_55d3459061ed1052a1e63d7dcfa0717e9f68f47758e51a1067f112d183d36df2%40group.calendar.google.com&ctz=America%2FNew_York"
          className="calendar"
          loading="lazy"
        ></iframe>
      </div>
    </div>
  );
}
