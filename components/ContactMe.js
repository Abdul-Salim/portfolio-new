import React from "react";

const ContactMe = () => {
  return (
    <>
      <div id="contact" className="contact p-5">
        <div className="container py-5">
          <div className="row">
            <div
              className="col-lg-5 col-lg-offset-1 col-md-6 wow fadeInUp"
              data-wow-delay="0.6s"
            >
              <address>
                <p className="contact-title">CONTACT ME</p>
                <a href="tel:+917907113794">
                  <p>
                    <i className="fa fa-phone"></i>{" "}
                    <span className="text-secondary">090-080-0760</span>
                  </p>
                </a>
                <a href="mailto:abdulsalimplr@gmail.com">
                  <p>
                    <i className="fa fa-envelope-o"></i>{" "}
                    <span className="text-secondary">
                      abdulsalimplr@gmail.com
                    </span>
                  </p>
                </a>
                <p>
                  <i className="fa fa-map-marker"></i>{" "}
                  <span className="text-secondary">
                    Palakkal House Thrissur, Kerala India
                  </span>
                </p>
              </address>
            </div>
            <div
              className="col-lg-6 col-md-6 col-xs-10 wow fadeInUp"
              data-wow-delay="0.6s"
            >
              <form role="form" method="post" action="#">
                <input
                  name="name"
                  type="text"
                  className="form-control"
                  id="name"
                  placeholder="Your Name"
                />
                <input
                  name="email"
                  type="email"
                  className="form-control"
                  id="email"
                  placeholder="Your Email"
                />
                <textarea
                  name="message"
                  rows="5"
                  className="form-control"
                  id="message"
                  placeholder="Your Message"
                ></textarea>
                <input
                  name="send"
                  type="submit"
                  className="form-control"
                  id="send"
                  value="SEND ME"
                />
              </form>
            </div>
            <div className="col-md-1 col-sm-1"></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactMe;
