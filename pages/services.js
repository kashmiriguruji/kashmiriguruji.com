import Link from "next/link";
import AccordionV1 from "../src/components/AccordionV1";
import Subscribe from "../src/components/Subscribe";
import Layouts from "../src/layouts/Layouts";

const Services = () => {
  return (
    <Layouts pageTitle="Our Services">
      {/* <!--====== Service Section Start ======--> */}
      <section className="service-section p-t-130 p-b-100">
        <div className="container">
          {/* <!-- Icon Box One --> */}
          <div className="row fancy-icon-boxes-v1">
            <div className="col-md-6 wow fadeInUp" data-wow-delay="0.2s">
              <div className="fancy-icon-box m-b-30">
                <div className="box-icon">
                  <i className="flaticon-goal-1"></i>
                </div>
                <div className="box-content">
                  <h4 className="title">
                    <Link href="/service-details">
                      <a>Easy editable</a>
                    </Link>
                  </h4>
                  <p>
                    Quis autem veleum iure reprehende quin voluptate velit esse
                    quam molesti conseqtur velillum dolorem eum fugiate
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-6 wow fadeInUp" data-wow-delay="0.3s">
              <div className="fancy-icon-box m-b-30">
                <div className="box-icon">
                  <i className="flaticon-talk-show-1"></i>
                </div>
                <div className="box-content">
                  <h4 className="title">
                    <Link href="/service-details">
                      <a>Fully Responsive</a>
                    </Link>
                  </h4>
                  <p>
                    Again is there anyone who loves pursues or desires to obtain
                    pain of itself because it is pain but because occasionally
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-6 wow fadeInUp" data-wow-delay="0.4s">
              <div className="fancy-icon-box m-b-30">
                <div className="box-icon">
                  <i className="flaticon-layers-2"></i>
                </div>
                <div className="box-content">
                  <h4 className="title">
                    <Link href="/service-details">
                      <a>Server Solutions</a>
                    </Link>
                  </h4>
                  <p>
                    Quis autem veleum iure reprehende quin voluptate velit esse
                    quam molesti conseqtur velillum dolorem eum fugiate
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-6 wow fadeInUp" data-wow-delay="0.5s">
              <div className="fancy-icon-box m-b-30">
                <div className="box-icon">
                  <i className="flaticon-diamond-1"></i>
                </div>
                <div className="box-content">
                  <h4 className="title">
                    <Link href="/service-details">
                      <a>Creative Design</a>
                    </Link>
                  </h4>
                  <p>
                    Again is there anyone who loves pursues or desires to obtain
                    pain of itself because it is pain but because occasionally
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-6 wow fadeInUp" data-wow-delay="0.6s">
              <div className="fancy-icon-box m-b-30">
                <div className="box-icon">
                  <i className="flaticon-certificate-1"></i>
                </div>
                <div className="box-content">
                  <h4 className="title">
                    <Link href="/service-details">
                      <a>Well Documentation</a>
                    </Link>
                  </h4>
                  <p>
                    Quis autem veleum iure reprehende quin voluptate velit esse
                    quam molesti conseqtur velillum dolorem eum fugiate
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-6 wow fadeInUp" data-wow-delay="0.7s">
              <div className="fancy-icon-box m-b-30">
                <div className="box-icon">
                  <i className="flaticon-rss-1"></i>
                </div>
                <div className="box-content">
                  <h4 className="title">
                    <Link href="/service-details">
                      <a>Quick Linkup</a>
                    </Link>
                  </h4>
                  <p>
                    Again is there anyone who loves pursues or desires to obtain
                    pain of itself because it is pain but because occasionally
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!--====== Service Section End ======--> */}

      {/* <!--====== Start FAQ section ======--> */}
      <section className="faq-section p-t-130 p-b-130 bg-soft-grey-color">
        <div className="container">
          <div className="row align-items-center justify-content-center">
            <div className="col-lg-6 col-md-10">
              <div className="faq-content p-r-60 p-r-lg-30 p-r-md-0">
                <div className="common-heading tagline-boxed m-b-80">
                  <span className="tagline">Our Approach</span>
                  <h2 className="title">Grow Your Business With Our Seo</h2>
                </div>
                <div className="landio-accordion-v1">
                  <AccordionV1 />
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-md-9">
              <div className="faq-image text-lg-right m-t-md-60">
                <img src="assets/img/faq/faq-image.png" alt="faq image" />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!--====== End Faq With SEO score box ======--> */}

      {/* <!--====== Start Pricing Section ======--> */}
      <section className="pricing-section p-t-130 p-b-130">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-6">
              <div className="common-heading tagline-boxed m-b-70 text-center">
                <span className="tagline">Our Pricing Plan</span>
                <h2 className="title">
                  Choose The Best Package For Your SEO Marketing
                </h2>
              </div>
            </div>
          </div>

          {/* <!-- Pricing Table --> */}
          <div className="row justify-content-center">
            <div
              className="col-lg-4 col-md-6 col-sm-8 wow fadeInUp"
              data-wow-delay="0.3s"
            >
              <div className="pricing-table pricing-secondary-1 m-t-30">
                <div className="plan-title-area">
                  <h5 className="plan-name">Single Team</h5>
                  <img
                    src="assets/img/pricing/plan-icon.png"
                    alt="Plan icon"
                    className="plan-icon"
                  />
                  <svg className="plan-shape">
                    <path
                      className="blob"
                      d="M675.762,6280.79c27.519-33.95,38.271-67.86,19.8-107.55-44.452-95.53-192.815-73.8-213.55-32.81-19.531,38.6,77.819,48.49,80.344,152.05C563.555,6341.55,636.194,6329.6,675.762,6280.79Z"
                      transform="translate(-479.406 -6105.56)"
                    />
                  </svg>
                </div>
                <div className="plan-cost">
                  <span className="currency">$</span>
                  <span className="price">29.24</span>
                  <span className="plan-type">/ Monthly</span>
                </div>
                <ul className="plan-feature">
                  <li>Social Media Marketing</li>
                  <li>2.100 Keywords</li>
                  <li>One Way Link Building</li>
                  <li className="disabled-feature">5 Free Optimization</li>
                  <li className="disabled-feature">3 Press Releases</li>
                </ul>
                <a href="#" className="template-btn">
                  Select Plan <i className="fas fa-arrow-right"></i>
                </a>
              </div>
            </div>
            <div
              className="col-lg-4 col-md-6 col-sm-8 wow fadeInUp"
              data-wow-delay="0.4s"
            >
              <div className="pricing-table m-t-30">
                <div className="plan-title-area">
                  <h5 className="plan-name">Professional</h5>
                  <img
                    src="assets/img/pricing/plan-icon.png"
                    alt="Plan icon"
                    className="plan-icon"
                  />
                  <svg className="plan-shape">
                    <path
                      className="blob"
                      d="M675.762,6280.79c27.519-33.95,38.271-67.86,19.8-107.55-44.452-95.53-192.815-73.8-213.55-32.81-19.531,38.6,77.819,48.49,80.344,152.05C563.555,6341.55,636.194,6329.6,675.762,6280.79Z"
                      transform="translate(-479.406 -6105.56)"
                    />
                  </svg>
                </div>
                <div className="plan-cost">
                  <span className="currency">$</span>
                  <span className="price">57.68</span>
                  <span className="plan-type">/ Monthly</span>
                </div>
                <ul className="plan-feature">
                  <li>Social Media Marketing</li>
                  <li>2.100 Keywords</li>
                  <li>One Way Link Building</li>
                  <li className="disabled-feature">5 Free Optimization</li>
                  <li className="disabled-feature">3 Press Releases</li>
                </ul>
                <a href="#" className="template-btn">
                  Select Plan <i className="fas fa-arrow-right"></i>
                </a>
              </div>
            </div>
            <div
              className="col-lg-4 col-md-6 col-sm-8 wow fadeInUp"
              data-wow-delay="0.5s"
            >
              <div className="pricing-table pricing-secondary-1 m-t-30">
                <div className="plan-title-area">
                  <h5 className="plan-name">Pro - Premium</h5>
                  <img
                    src="assets/img/pricing/plan-icon.png"
                    alt="Plan icon"
                    className="plan-icon"
                  />
                  <svg className="plan-shape">
                    <path
                      className="blob"
                      d="M675.762,6280.79c27.519-33.95,38.271-67.86,19.8-107.55-44.452-95.53-192.815-73.8-213.55-32.81-19.531,38.6,77.819,48.49,80.344,152.05C563.555,6341.55,636.194,6329.6,675.762,6280.79Z"
                      transform="translate(-479.406 -6105.56)"
                    />
                  </svg>
                </div>
                <div className="plan-cost">
                  <span className="currency">$</span>
                  <span className="price">99.25</span>
                  <span className="plan-type">/ Monthly</span>
                </div>
                <ul className="plan-feature">
                  <li>Social Media Marketing</li>
                  <li>2.100 Keywords</li>
                  <li>One Way Link Building</li>
                  <li className="disabled-feature">5 Free Optimization</li>
                  <li className="disabled-feature">3 Press Releases</li>
                </ul>
                <a href="#" className="template-btn">
                  Select Plan <i className="fas fa-arrow-right"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!--====== End Pricing Section ======--> */}

      <Subscribe />
    </Layouts>
  );
};

export default Services;
