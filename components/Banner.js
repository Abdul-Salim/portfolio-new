import React from "react";
import { Link } from "react-scroll";
import NavBar from "./NavBar";

const Banner = () => {
  return (
    <div id="home">
      <div className="home section">
        <div className="container">
          <div className="row">
            <div className="col-md-2"></div>
            <div className="col-md-8 wow fadeIn" data-wow-delay="0.9s">
              <h1 className="">Abdul Salim P S</h1>
              <h2 className="">Full Stack Developer | MERN Stack</h2>
              <div>
                <p className="animate__animated animate__zoomIn animate__slow mt-5">
                  I am a Passionate Software Engineer with over 1.5 years of
                  experience and skills in full stack web development, release
                  management and code debugging
                </p>

                <Link to="what" smooth={true}>
                  <button className="btn btn-default smoothScroll">
                    Get started
                  </button>
                </Link>
              </div>
            </div>
            <div className="col-md-2"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
