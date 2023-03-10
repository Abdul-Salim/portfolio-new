import React from "react";

const MyWorks = () => {
  return (
    <>
      <div id="myWorks" class="portfolio p-5">
        <div class="container p-5">
          <div class="row">
            <div class="col-md-12">
              <h2 class="wow bounce">PORTFOLIO</h2>
            </div>
            <div class="col-md-4 col-xs-6 wow fadeIn" data-wow-delay="0.6s">
              <div class="portfolio-thumb">
                <img
                  src="images/portfolio-img1.jpg"
                  class="img-responsive"
                  alt="portfolio img"
                />
                <div class="portfolio-overlay">
                  <h4>Web Design</h4>
                  <h5>Author: Cindy</h5>
                </div>
              </div>
            </div>
            <div class="col-md-4 col-xs-6 wow fadeIn" data-wow-delay="0.6s">
              <div class="portfolio-thumb">
                <img
                  src="images/portfolio-img2.jpg"
                  class="img-responsive"
                  alt="portfolio img"
                />
                <div class="portfolio-overlay">
                  <h4>Web App</h4>
                  <h5>Author: Linda</h5>
                </div>
              </div>
            </div>
            <div class="col-md-4 col-xs-6 wow fadeIn" data-wow-delay="0.6s">
              <div class="portfolio-thumb">
                <img
                  src="images/portfolio-img3.jpg"
                  class="img-responsive"
                  alt="portfolio img"
                />
                <div class="portfolio-overlay">
                  <h4>Mobile App</h4>
                  <h5>Author: Kate</h5>
                </div>
              </div>
            </div>
            <div class="col-md-6 col-xs-6 wow fadeIn" data-wow-delay="0.6s">
              <div class="portfolio-thumb">
                <img
                  src="images/portfolio-img4.jpg"
                  class="img-responsive"
                  alt="portfolio img"
                />
                <div class="portfolio-overlay">
                  <h4>Old Artwork</h4>
                  <h5>Author: Catherine</h5>
                </div>
              </div>
            </div>
            <div class="col-md-6 col-xs-6 wow fadeIn" data-wow-delay="0.6s">
              <div class="portfolio-thumb">
                <img
                  src="images/portfolio-img5.jpg"
                  class="img-responsive"
                  alt="portfolio img"
                />
                <div class="portfolio-overlay">
                  <h4>New Animation</h4>
                  <h5>Author: Kathy</h5>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MyWorks;
