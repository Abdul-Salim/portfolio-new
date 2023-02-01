import React from "react";
import Image from "next/image";
import ReactSkillbar from "react-skillbars";

const About = () => {
  const skills = [
    { type: "React.js", level: 90 },
    { type: "Next.js", level: 80 },
    { type: "Node.js", level: 80 },
    { type: "Express", level: 80 },
    { type: "MongoDB", level: 75 },
    { type: "MySql", level: 75 },
  ];
  const colors = {
    bar: "#ffcc00",
    title: {
      text: "#fff",
      background: "#999999",
    },
  };
  return (
    <>
      <div id="about" class="about p-5">
        <div class="container p-5">
          <div className="row mb-5">
            <div className="col-md-12 wow bounce">
              <h2 className="text-center">About</h2>
            </div>
          </div>
          <div class="row">
            <div
              class="col-md-6 col-xs-11 wow fadeInLeft d-flex"
              data-wow-delay="0.9s"
            >
              <div className="col-md-6">
                <div className="img-container d-flex justify-content-center mb-4">
                  <Image
                    src="/images/profile.jpg"
                    alt="Picture of the author"
                    className="img-responsive rounded"
                    height={250}
                    width={200}
                  />
                </div>
              </div>
              <div className="col-md-6">
                <p className="text-white">
                  My name is Abdul Salim and I'm a Full Stack Developer for{" "}
                  <a className="link d-inline" href="https://www.byjus.com/">
                    <strong className="text-white">Byju's</strong>{" "}
                  </a>
                  in Bangalore, India
                </p>
                <p className="text-white">
                  I'm a passionate Software Engineer with over 1.5 years of
                  experience in full-stack web development, release management,
                  and code debugging.
                </p>
              </div>
            </div>
            <div class="col-md-6 col-xs-11 wow fadeInRight">
              <h4 className="pt-0 mt-0">SKILLS</h4>
              <ReactSkillbar colors={colors} skills={skills} />
            </div>
          </div>
          <div className="row">
            <div className="col-md-6 col-xs-12">
              <h4>Experience</h4>
            </div>
            <div className="col-md-6 col-xs-12">
              <h4>Education</h4>
            </div>
          </div>
          <div className="row mt-5">
            <div className="col-12 d-flex justify-content-evenly">
              <div className="">
                <div className="icon-container">
                  <img className="icon" src="/images/responsive.png" />
                </div>
                <p className="text-center mt-2">Responsive</p>
              </div>
              <div className="">
                <div className="icon-container">
                  <img className="icon" src="/images/rocket.png" />
                </div>
                <p className="text-center mt-2">Dynamic</p>
              </div>
              <div className="">
                <div className="icon-container">
                  <img className="icon" src="/images/dashboard.png" />
                </div>
                <p className="text-center mt-2">Fast</p>
              </div>
              <div className="">
                <div className="icon-container">
                  <img className="icon" src="/images/security.png" />
                </div>
                <p className="text-center mt-2">Secure</p>
              </div>
              <div className="">
                <div className="icon-container">
                  <img className="icon" src="/images/seo.png" />
                </div>
                <p className="text-center mt-2">SEO Friendly</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
