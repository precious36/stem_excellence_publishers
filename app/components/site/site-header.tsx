import { useState } from "react";
import { NavLink } from "react-router";

import { siteNavLinks } from "./nav-links";

export function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="site-header">
      <div className="site-container site-header-inner">
        <NavLink
          to="/"
          end
          aria-label="STEM Excellence Publishers Home"
          onClick={() => setMenuOpen(false)}
        >
          <img src="/stem-logo.jpeg" alt="STEM Excellence Publishers" className="brand-logo" />
        </NavLink>

        <button
          type="button"
          className="nav-toggle"
          data-nav-toggle
          aria-expanded={menuOpen}
          aria-controls="site-nav"
          onClick={() => setMenuOpen((current) => !current)}
        >
          Menu
        </button>

        <nav id="site-nav" className={`site-nav ${menuOpen ? "is-open" : ""}`}>
          {siteNavLinks.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              end={link.end}
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </NavLink>
          ))}
        </nav>
      </div>
    </header>
  );
}
