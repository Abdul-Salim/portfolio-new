import React from "react";

const WhatIDo = () => {
  return (
    <>
      <div id="what" className="work p-5">
        <div className="container p-5">
          <div className="row">
            <div className="col-md-12 wow bounce">
              <h2>WHAT I DO</h2>
            </div>
          </div>

          <div className="row">
            <div
              className="col-md-4 col-xs-11 animate__animated animate__zoomIn animate__slow"
              data-wow-delay="0.6s"
            >
              <div className="media">
                <div className="media-object media-left">
                  <i className="fa fa-laptop"></i>
                </div>
                <div className="media-body">
                  <h3 className="media-heading">Front End Development</h3>
                  <p>
                    My core area of expertise is in front end development using
                    latest web frameworks like <a href="/">React.js</a> and{" "}
                    <a href="/">Next.js</a> along with CSS frameworks like{" "}
                    <a href="/">Bootstrap</a>, <a href="/">Tailwind</a>,{" "}
                    <a href="/">Material UI</a> etc.
                  </p>
                </div>
              </div>
            </div>

            <div
              className="col-md-4 col-xs-11 wow fadeInUp"
              data-wow-delay="0.6s"
            >
              <div className="media">
                <div className="media-object media-left">
                  <i className="fa fa-link"></i>
                </div>
                <div className="media-body">
                  <h3 className="media-heading">Back end Development</h3>
                  <p>
                    We provide a wide range of HTML5 templates for free. Please
                    spread a word about us on social media.
                  </p>
                </div>
              </div>
            </div>

            <div
              className="col-md-4 col-xs-11 wow fadeInUp"
              data-wow-delay="0.6s"
            >
              <div className="media">
                <div className="media-object media-left">
                  <i className="fa fa-paper-plane"></i>
                </div>
                <div className="media-body">
                  <h3 className="media-heading">UI &amp; UX Design</h3>
                  <p>
                    Credits go to for images used in this free CSS website
                    template.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default WhatIDo;
