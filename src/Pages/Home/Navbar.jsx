import { useState, useEffect } from "react";
import { Link } from "react-scroll";
import ScrollReveal from "scrollreveal";


function Navbar() {
  const [navActive, setNavActive] = useState(false);

  const toggleNav = () => {
    setNavActive(!navActive);
  };

  const closeMenu = () => {
    setNavActive(false);
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 500) {
        closeMenu;
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  useEffect(() => {
    // Initialize Scroll Reveal
    const sr = ScrollReveal();
    
    // Configure the animation for the navbar content
    sr.reveal(".navbar--content", {
      duration: 1000, // Animation duration in milliseconds
      origin: "top", // Starting point of the animation
      distance: "20px", // Distance the element moves during the animation
      delay: 200, // Delay before the animation starts
    });
  }, []);

  useEffect(() => {
    if (window.innerWidth <= 1200) {
      closeMenu();
    }
  }, []);

  return (
    <nav className={`navbar ${navActive ? "active" : ""}`}>
      <div className="nav-title">
  <h1>
    <span className="first-tone">Take</span>
    <span className="second-tone">Novak</span>
  </h1>
</div>

      <a
        className={`nav__hamburger ${navActive ? "active" : ""}`}
        onClick={toggleNav}
      >
        <span className="nav__hamburger__line"></span>
        <span className="nav__hamburger__line"></span>
        <span className="nav__hamburger__line"></span>
      </a>
      <div className={`navbar--items ${navActive ? "active" : ""}`}>
        <ul>
        <li>
            <Link
              onClick={closeMenu}
              activeClass="navbar--active-content"
              spy={true}
              smooth={true}
              offset={-70}
              duration={1000}
              to="heroSection"
              className="navbar--content"
            >
              Rat Park
            </Link>
          </li>
          <li>
            <Link
              onClick={closeMenu}
              activeClass="navbar--active-content"
              spy={true}
              smooth={true}
              offset={-70}
              duration={1000}
              to="Nonpro"
              className="navbar--content"
            >
              The Non-Pro
            </Link>
          </li>
          <li>
            <Link
              onClick={closeMenu}
              activeClass="navbar--active-content"
              spy={true}
              smooth={true}
              offset={-70}
              duration={1000}
              to="Fountain"
              className="navbar--content"
            >
              Take Fountain
            </Link>
          </li>
          <li>
            <Link
              onClick={closeMenu}
              activeClass="navbar--active-content"
              spy={true}
              smooth={true}
              offset={-70}
              duration={1000}
              to="Industry"
              className="navbar--content"
            >
              Freaks Of the Industry
            </Link>
          </li>
          <li>
            <Link
              onClick={closeMenu}
              activeClass="navbar--active-content"
              spy={true}
              smooth={true}
              offset={-70}
              duration={1000}
              to="Audio"
              className="navbar--content"
            >
              Audio
            </Link>
          </li>
          <li>
            <Link
              onClick={closeMenu}
              activeClass="navbar--active-content"
              spy={true}
              smooth={true}
              offset={-70}
              duration={1000}
              to="Excerpts"
              className="navbar--content"
            >
              Excerpts
            </Link>
          </li>
          <li>
            <Link
              onClick={closeMenu}
              activeClass="navbar--active-content"
              spy={true}
              smooth={true}
              offset={-70}
              duration={1000}
              to="Podcast"
              className="navbar--content"
            >
              Podcasts
            </Link>
          </li>
          <li>
            <Link
              onClick={closeMenu}
              activeClass="navbar--active-content"
              spy={true}
              smooth={true}
              offset={-70}
              duration={1000}
              to="TShirt"
              className="navbar--content"
            >
            Swag
            </Link>
          </li>
          <li>
            <Link
              onClick={closeMenu}
              activeClass="navbar--active-content"
              spy={true}
              smooth={true}
              offset={-70}
              duration={1000}
              to="Adam"
              className="navbar--content"
            >
              Contact
            </Link>         
          </li>
        </ul>
      </div>
   
    </nav>
  );
}

export default Navbar;
