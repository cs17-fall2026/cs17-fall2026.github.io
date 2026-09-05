import React from "react";
export default function Calendar() {
  return (
    <div className="page-content">
      <h1>Calendar</h1>
      <p>Contains info on assignments, office hours, and labs.</p>
      <iframe
        src="https://calendar.google.com/calendar/u/1/embed?src=c_55d3459061ed1052a1e63d7dcfa0717e9f68f47758e51a1067f112d183d36df2@group.calendar.google.com&ctz=America/New_York&csspa=1"
        className="calendar"
      ></iframe>
    </div>
  );
}
