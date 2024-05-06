import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom/cjs/react-router-dom.min";

function Navbar() {
  const [isDarkMode, setIsDarkMode] = useState(
    localStorage.getItem("darkMode") === "enabled"
  );

  useEffect(() => {
    if (isDarkMode) {
      document.body.classList.add("dark-mode");
      localStorage.setItem("darkMode", "enabled");
    } else {
      document.body.classList.remove("dark-mode");
      localStorage.setItem("darkMode", "disabled");
    }
  }, [isDarkMode]);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  const handleNavClick = () => {
    if (window.innerWidth <= 768) {
      document.getElementById("click").checked = false;
    }
  };

  return (
    <div>
      <header className="container">
        <div className="page-header">
          <div className="logo">
            <Link to="/" onClick={handleNavClick}>
              Porfolio
            </Link>
          </div>
          <input type="checkbox" id="click" />

          <label htmlFor="click" className="mainicon">
            <div className="menu">
              <i className="bx bx-menu"></i>
            </div>
          </label>
          <ul>
            <li>
              <Link to="/Home" onClick={handleNavClick}>
                Home
              </Link>
            </li>
            <li>
              <Link to="/Projects" onClick={handleNavClick}>
                Projects
              </Link>
            </li>
            <li>
              <Link to="/Skills" onClick={handleNavClick}>
                Skills
              </Link>
            </li>

            <li>
              <Link to="/Contact" onClick={handleNavClick}>
                Contact
              </Link>
            </li>
          </ul>
          <label className="mode">
            <input
              type="checkbox"
              id="darkModeToggle"
              checked={isDarkMode}
              onChange={toggleDarkMode}
            />
            <i className={isDarkMode ? "bx bxs-sun" : "bx bxs-moon"} />
          </label>
        </div>
      </header>
    </div>
  );
}

export default Navbar;
