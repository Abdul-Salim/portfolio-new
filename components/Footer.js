import React from "react";

const Footer = () => {
  return (
    <footer className="p-5">
      <div className="container-fluid pt-3 border-top border-secondary">
        <div className="row">
          <div
            className="col-md-12 wow fadeIn d-flex flex-column align-items-center"
            data-wow-delay="0.9s"
          >
            <p>Copyright &copy; 2022 Abdul Salim P S.</p>
            {/* <hr /> */}
            <ul className="social-icon">
              <li>
                <a href="#" className="fa fa-facebook"></a>
              </li>
              <li>
                <a href="#" className="fa fa-twitter"></a>
              </li>
              <li>
                <a href="#" className="fa fa-instagram"></a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
