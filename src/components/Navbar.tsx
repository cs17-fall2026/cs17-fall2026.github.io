import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../index.css";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  // handles closing menu
  const handleLinkClick = () => setOpen(false);

  return (
    <nav className="navbar">
      <button
        className="hamburger"
        onClick={() => setOpen(!open)}
        aria-label="Toggle navigation"
      >
        &#9776;
      </button>
      <ul className={`nav-links${open ? " open" : ""}`}>
        <li>
          <Link to="/" onClick={handleLinkClick}>
            Home
          </Link>
        </li>
        <li>
          <Link to="/assignments" onClick={handleLinkClick}>
            Assignments
          </Link>
        </li>
        <li>
          <Link to="/notes" onClick={handleLinkClick}>
            Notes
          </Link>
        </li>
        <li>
          <Link to="/resources" onClick={handleLinkClick}>
            Resources
          </Link>
        </li>
        <li>
          <Link to="/staff" onClick={handleLinkClick}>
            Staff
          </Link>
        </li>
        <li>
          <Link to="/calendar" onClick={handleLinkClick}>
            Calendar
          </Link>
        </li>
      </ul>
    </nav>
  );
}
