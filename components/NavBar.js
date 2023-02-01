import React, { useLayoutEffect, useState } from "react";
import { Link, Events, scroll } from "react-scroll";

import NavLink from "./NavLink";

const NavBar = () => {
  const [show, handleShow] = useState(false);
  useLayoutEffect(() => {
    window?.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        handleShow(true);
      } else handleShow(false);
    });
    return () => {
      window.removeEventListener("scroll", () => console.log("first"));
    };
  }, []);

  return (
    <nav className={show ? "scrolled" : ""}>
      <ul className="p-0 m-0">
        <li>
          <Link to="home" smooth={true} activeClass="active" spy={true}>
            Home
          </Link>
        </li>
        <li>
          <Link to="about" smooth={true} activeClass="active" spy={true}>
            About
          </Link>
        </li>
        <li>
          <Link to="myWorks" smooth={true} activeClass="active" spy={true}>
            My Works
          </Link>
        </li>
        <li>
          <Link to="contact" smooth={true} activeClass="active" spy={true}>
            Contact
          </Link>
        </li>
      </ul>
    </nav>

    // <nav className="navbar-container">
    //   <div className="container d-flex flex-column flex-md-row w-md-100 justify-content-around py-2">
    //     <span
    //       className={inHome ? "active" : ""}
    //       onClick={() => handleClick(homeRef)}
    //       href="#"
    //     >
    //       <p>Home</p>
    //     </span>
    //     <span
    //       className={inWhat ? "active" : ""}
    //       onClick={() => handleClick(whatRef)}
    //       href="#"
    //     >
    //       <p>What I do</p>
    //     </span>
    //     <span
    //       className={inAbout ? "active" : ""}
    //       onClick={() => handleClick(aboutRef)}
    //       href="#"
    //     >
    //       <p>About</p>
    //     </span>
    //     <span
    //       className={inWork ? "active" : ""}
    //       onClick={() => handleClick(workRef)}
    //       href="#"
    //     >
    //       <p>My Works</p>
    //     </span>
    //     <span
    //       className={inContact ? "active" : ""}
    //       onClick={() => handleClick(contactRef)}
    //       href="#"
    //     >
    //       <p>Contact Me</p>
    //     </span>
    //   </div>
    // </nav>
  );
};

export default NavBar;
