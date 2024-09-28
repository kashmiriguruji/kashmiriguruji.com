import Link from "next/link";
import Slider from "react-slick";
import Header7 from "../src/layouts/headers/Header7";
import Layouts from "../src/layouts/Layouts";
import { testimonialActiveFive } from "../src/sliderProps";
const Index7 = () => {
  return (
    <Layouts noFooter noHeader>
      <Header7 />
      <section className="hero-area-v7">
        <div className="container-fluid">
          <div className="hero-content">
            <h2 className="hero-title wow fadeInLeft" data-wow-delay="0.2s">
              Simple Goal Tracking For Software
            </h2>
            <p className="wow fadeInUp" data-wow-delay="0.3s">
              Sed perspicias unde omnis natus error voluptate dolorem laudanme
              totam aperiam.
            </p>
            <a
              href="#"
              className="template-btn primary-bg-5 wow fadeInUp"
              data-wow-delay="0.4s"
            >
              Download Free Trial <i className="fas fa-arrow-right" />
            </a>
            <span className="notice wow fadeInUp" data-wow-delay="0.5s">
              <img src="assets/img/hero/notice-icon.png" alt="Image" /> No Extra
              Charge &amp; We’ve a Pricing Plan
            </span>
          </div>
          <div
            className="hero-img d-none d-lg-block wow fadeInUp"
            data-wow-delay="0.2s"
          >
            <img src="assets/img/hero/home-software.png" alt="Image" />
          </div>
        </div>
      </section>
      {/*====== End Hero Area ======*/}
      {/*====== Section Service Start ======*/}
      <section className="service-section p-t-130 p-b-130 bg-secondary-color-5">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-10">
              <div className="common-heading text-center heading-white m-b-30">
                <h2 className="title">
                  {` Don’t Let Your Goals Be Frustrating to Track You'll Waste
                  Effort Working on The Wrong Problems`}
                </h2>
              </div>
            </div>
          </div>
          <div className="row no-gutters justify-content-lg-between justify-content-md-start justify-content-center icon-boxes-v3">
            <div
              className="col-lg-3 col-md-6 col-sm-10 wow fadeInUp"
              data-wow-delay="0.2s"
            >
              <div className="iconic-box box-version-white color-v1 m-t-50">
                <div className="icon">
                  <i className="far fa-code" />
                </div>
                <h4 className="title">
                  <a href="#">Open Source Platform</a>
                </h4>
                <p>
                  But I must explain to how mistaken denouncing pleasures
                  praisinge pain was born and complete
                </p>
                <a href="#" className="box-btn">
                  Learn More <i className="far fa-arrow-right" />
                </a>
              </div>
            </div>
            <div
              className="col-lg-3 col-md-6 col-sm-10 wow fadeInUp"
              data-wow-delay="0.3s"
            >
              <div className="iconic-box box-version-white color-v2 m-t-50">
                <div className="icon">
                  <i className="far fa-cloud-upload" />
                </div>
                <h4 className="title">
                  <a href="#">On-Demand Cloud</a>
                </h4>
                <p>
                  To take a trivial example which of ever undertakes laborious
                  physicals exercise except obtain some
                </p>
                <a href="#" className="box-btn">
                  Learn More <i className="far fa-arrow-right" />
                </a>
              </div>
            </div>
            <div
              className="col-lg-3 col-md-6 col-sm-10 wow fadeInUp"
              data-wow-delay="0.4s"
            >
              <div className="iconic-box box-version-white color-v3 m-t-50">
                <div className="icon">
                  <i className="far fa-gamepad" />
                </div>
                <h4 className="title">
                  <a href="#">Real Time Dashboard</a>
                </h4>
                <p>
                  Quis autem veleum reprehenderit quin voluptate velit esse quam
                  nihile molestiae consequatur vel
                </p>
                <a href="#" className="box-btn">
                  Learn More <i className="far fa-arrow-right" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*====== Section Service End ======*/}
      {/*====== Start Design & Layout Section ======*/}
      <section className="sof-design-layout p-t-130 p-b-130">
        <div className="container">
          <div className="row align-items-center justify-content-center no-gutters">
            <div className="col-lg-7">
              <div className="software-preview m-b-md-80 animate-float-bob-y">
                <img
                  src="assets/img/preview-gallery/design-layout.png"
                  alt="Image"
                />
              </div>
            </div>
            <div className="col-lg-5 col-md-10">
              <div className="software-text-block p-l-50 p-l-lg-30 p-l-md-0">
                <div className="common-heading m-b-40">
                  <span className="tagline color-primary-5">
                    Design &amp; Layouts
                  </span>
                  <h2 className="title">Keep Things Simple With Ability</h2>
                </div>
                <p>
                  Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                  accusantium doloremque laudane totam rem aperiam eaque ipsa
                  quae abilloe
                </p>
                <div
                  className="icon-bordered-box icon-left m-t-30 wow fadeInLeft"
                  data-wow-delay="0.3s"
                >
                  <div className="icon">
                    <i className="far fa-gem" />
                  </div>
                  <div className="box-content">
                    <h4 className="title">Build With Animations</h4>
                    <p>
                      Quis autem vel eum iure reprehenderit quin voluptate velit
                      esse quam
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row align-items-center justify-content-center p-t-130">
            <div
              className="col-lg-7 col-md-10 order-lg-last order-first wow fadeInUp"
              data-wow-delay="0.3s"
            >
              <div className="preview-galley-v8 text-right m-b-md-80">
                <img
                  src="assets/img/preview-gallery/sof-analysis-01.jpg"
                  className="preview-one"
                  alt="Image"
                />
                <img
                  src="assets/img/preview-gallery/sof-analysis-02.jpg"
                  className="preview-two animate-float-bob-x"
                  alt="Image"
                />
                <img
                  src="assets/img/preview-gallery/sof-analysis-03.jpg"
                  className="preview-three animate-float-bob-y"
                  alt="Image"
                />
              </div>
            </div>
            <div className="col-lg-5 col-md-10 order-lg-first">
              <div className="software-text-block">
                <div className="common-heading m-b-25">
                  <span className="tagline color-primary-5">
                    System Analysis
                  </span>
                  <h2 className="title">Track Goals All In One Place</h2>
                </div>
                <p className="m-b-25">
                  Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                  accusantium doloremque laudane totam rem aperiam eaque ipsa
                  quae abilloe
                </p>
                <p>
                  But I must explain to you how all this mistaken idea of
                  denouncing pleasure and praising
                </p>
                <Link href="/about">
                  <a className="template-btn primary-bg-5 m-t-40">
                    Learn More <i className="fas fa-arrow-right" />
                  </a>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*====== End Design & Layout Section ======*/}
      {/*====== Start Service Section ======*/}
      <section className="service-tab-section p-t-130">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-6">
              <div className="common-heading text-center m-b-65">
                <span className="tagline color-primary-5">
                  Service We Provide
                </span>
                <h2 className="title">
                  Better Smart Solutions For Your Better Software
                </h2>
              </div>
            </div>
          </div>
        </div>
        <div className="service-tab">
          <div className="container">
            <div className="service-tab-nav">
              <ul
                className="nav nav-tabs service-tab-nav"
                id="myTab"
                role="tablist"
              >
                <li className="nav-item" role="presentation">
                  <a
                    className="nav-link active"
                    data-toggle="tab"
                    href="#tabItem1"
                    role="tab"
                  >
                    <i className="far fa-browser" /> Apply To Template
                  </a>
                </li>
                <li className="nav-item" role="presentation">
                  <a
                    className="nav-link"
                    data-toggle="tab"
                    href="#tabItem2"
                    role="tab"
                  >
                    <i className="far fa-bullseye-arrow" /> Build Your Promotos
                  </a>
                </li>
                <li className="nav-item" role="presentation">
                  <a
                    className="nav-link"
                    data-toggle="tab"
                    href="#tabItem3"
                    role="tab"
                  >
                    <i className="far fa-coins" /> Data Organizations
                  </a>
                </li>
                <li className="nav-item" role="presentation">
                  <a
                    className="nav-link"
                    data-toggle="tab"
                    href="#tabItem4"
                    role="tab"
                  >
                    <i className="far fa-coins" /> Assing Action Data
                  </a>
                </li>
                <li className="nav-item" role="presentation">
                  <a
                    className="nav-link"
                    data-toggle="tab"
                    href="#tabItem5"
                    role="tab"
                  >
                    <i className="far fa-book" /> Rich Documentation
                  </a>
                </li>
                <li className="nav-item" role="presentation">
                  <a
                    className="nav-link"
                    data-toggle="tab"
                    href="#tabItem6"
                    role="tab"
                  >
                    <i className="far fa-phone-plus" /> 100% Responsive
                  </a>
                </li>
                <li className="nav-item" role="presentation">
                  <a
                    className="nav-link"
                    data-toggle="tab"
                    href="#tabItem7"
                    role="tab"
                  >
                    <i className="far fa-calendar-check" /> Useablity Easy
                  </a>
                </li>
                <li className="nav-item" role="presentation">
                  <a
                    className="nav-link"
                    data-toggle="tab"
                    href="#tabItem8"
                    role="tab"
                  >
                    <i className="far fa-tools" /> Easy Installations
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="service-tab-content container-fluid">
            <div className="tab-content" id="myTabContent">
              <div
                className="tab-pane fade show active"
                id="tabItem1"
                role="tabpanel"
              >
                <div className="service-tab-ime text-center">
                  <img src="assets/img/service-tab-img.jpg" alt="Image" />
                </div>
              </div>
              <div className="tab-pane fade" id="tabItem2" role="tabpanel">
                <div className="service-tab-ime text-center">
                  <img src="assets/img/service-tab-img.jpg" alt="Image" />
                </div>
              </div>
              <div className="tab-pane fade" id="tabItem3" role="tabpanel">
                <div className="service-tab-ime text-center">
                  <img src="assets/img/service-tab-img.jpg" alt="Image" />
                </div>
              </div>
              <div className="tab-pane fade" id="tabItem4" role="tabpanel">
                <div className="service-tab-ime text-center">
                  <img src="assets/img/service-tab-img.jpg" alt="Image" />
                </div>
              </div>
              <div className="tab-pane fade" id="tabItem5" role="tabpanel">
                <div className="service-tab-ime text-center">
                  <img src="assets/img/service-tab-img.jpg" alt="Image" />
                </div>
              </div>
              <div className="tab-pane fade" id="tabItem6" role="tabpanel">
                <div className="service-tab-ime text-center">
                  <img src="assets/img/service-tab-img.jpg" alt="Image" />
                </div>
              </div>
              <div className="tab-pane fade" id="tabItem7" role="tabpanel">
                <div className="service-tab-ime text-center">
                  <img src="assets/img/service-tab-img.jpg" alt="Image" />
                </div>
              </div>
              <div className="tab-pane fade" id="tabItem8" role="tabpanel">
                <div className="service-tab-ime text-center">
                  <img src="assets/img/service-tab-img.jpg" alt="Image" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*====== End Service Section ======*/}
      {/*====== Start Testimonial Area ======*/}
      <section className="testimonial-area-two p-t-130 p-b-130">
        <div className="container">
          <div className="row align-items-center justify-content-center">
            <div className="col-lg-6 col-md-8 col-sm-9">
              <div
                className="preview-image-v5 m-r-45 m-r-lg-0 m-b-md-80 wow fadeInLeft animate-float-bob-y"
                data-wow-delay="0.3s"
              >
                <img
                  src="assets/img/preview-gallery/sof-testimonial.jpg"
                  alt="Image"
                />
              </div>
            </div>
            <div className="col-lg-6 col-md-10">
              <div className="testimonial-slider-wrapper p-l-40 p-l-lg-0">
                <div className="common-heading m-b-65">
                  <span className="tagline color-primary-5">
                    Customer Reviews
                  </span>
                  <h2 className="title">
                    What our clients say about solutions
                  </h2>
                </div>
                <Slider
                  {...testimonialActiveFive}
                  className="testimonial-slider-v1 quote-left-bordered"
                  id="testimonialActiveFive"
                >
                  <div className="testimonial-item">
                    <div className="quote-icon">
                      <i className="flaticon-right-quote" />
                    </div>
                    <p>
                      Sed ut perspicia unde omnis natus error sit volupt
                      accusantium doloremque laudantium totam rem aperiam eaque
                      quae
                    </p>
                    <div className="author-info">
                      <img
                        src="assets/img/testimonial/author-1.png"
                        alt="testimonial author"
                      />
                      <h6 className="name">
                        Michael W. Kirwan{" "}
                        <span className="title">CEO &amp; Founder</span>
                      </h6>
                    </div>
                  </div>
                  <div className="testimonial-item">
                    <div className="quote-icon">
                      <i className="flaticon-right-quote" />
                    </div>
                    <p>
                      Sed ut perspicia unde omnis natus error sit volupt
                      accusantium doloremque laudantium totam rem aperiam eaque
                      quae
                    </p>
                    <div className="author-info">
                      <img
                        src="assets/img/testimonial/author-2.png"
                        alt="testimonial author"
                      />
                      <h6 className="name">
                        Michael W. Kirwan{" "}
                        <span className="title">CEO &amp; Founder</span>
                      </h6>
                    </div>
                  </div>
                  <div className="testimonial-item">
                    <div className="quote-icon">
                      <i className="flaticon-right-quote" />
                    </div>
                    <p>
                      Sed ut perspicia unde omnis natus error sit volupt
                      accusantium doloremque laudantium totam rem aperiam eaque
                      quae
                    </p>
                    <div className="author-info">
                      <img
                        src="assets/img/testimonial/author-3.png"
                        alt="testimonial author"
                      />
                      <h6 className="name">
                        Michael W. Kirwan{" "}
                        <span className="title">CEO &amp; Founder</span>
                      </h6>
                    </div>
                  </div>
                </Slider>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*====== End Testimonial Area ======*/}
      {/*====== Start Call To Action ======*/}
      <section
        className="cta-section bg-cover-center p-t-90 p-b-90"
        style={{ backgroundImage: "url(assets/img/cta/cta-bg-2.jpg)" }}
      >
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-6 col-lg-7 col-md-10">
              <div className="cta-content text-center">
                <div className="common-heading heading-white m-b-65">
                  <span className="tagline">Download Free Trial</span>
                  <h2 className="title">
                    Get Our Software Very Easily Download Free Trial
                  </h2>
                </div>
                <a href="#" className="template-btn white-bg bordered-btn">
                  Download Free Trial <i className="far fa-arrow-right" />
                </a>
              </div>
            </div>
          </div>
        </div>
        <div
          className="cta-absolute-image d-none d-lg-block wow fadeInUp"
          data-wow-delay="0.3s"
        >
          <img src="assets/img/cta//cta-absolute-img.png" alt />
        </div>
      </section>
      {/*====== End Call To Action ======*/}
      {/*====== Start Scroll To Top ======*/}
      <a href="#" className="back-to-top" id="scroll-top">
        <i className="far fa-angle-up" />
      </a>
      {/*====== End Scroll To Top ======*/}
      {/*====== Start Footer ======*/}
      <footer className="template-footer">
        <div className="container">
          <div className="footer-widgets p-t-80 p-b-30">
            <div className="row">
              {/* Single Footer Widget */}
              <div className="col-lg-3 col-md-6 col-sm-6">
                <div className="widget text-block-widget">
                  <h5 className="widget-title">About Landio</h5>
                  <p>
                    Sed ut perspiciatis undmnis iste natus error sit voluptatem
                    accusantium dolore udantiuy totam rem aperiam.
                  </p>
                  <ul className="download-links">
                    <li>
                      <a href="#">
                        <i className="fab fa-apple" />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fab fa-google-play" />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fab fa-windows" />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              {/* Single Footer Widget */}
              <div className="col-lg-3 col-md-6 col-sm-6">
                <div className="d-lg-flex justify-content-center">
                  <div className="widget nav-widget">
                    <h5 className="widget-title">Resources</h5>
                    <ul>
                      <li>
                        <Link href="/about">Saas Development</Link>
                      </li>
                      <li>
                        <Link href="/about">Our Products</Link>
                      </li>
                      <li>
                        <Link href="/about">User Strategy</Link>
                      </li>
                      <li>
                        <Link href="/about">Blogs &amp; Guides</Link>
                      </li>
                      <li>
                        <Link href="/about">Premium Support</Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              {/* Single Footer Widget */}
              <div className="col-lg-3 col-md-6 col-sm-6">
                <div className="d-lg-flex justify-content-center">
                  <div className="widget nav-widget">
                    <h5 className="widget-title">Company</h5>
                    <ul>
                      <li>
                        <Link href="/about">About Landio</Link>
                      </li>
                      <li>
                        <Link href="/about">Contact &amp; Support</Link>
                      </li>
                      <li>
                        <Link href="/services">
                          <a>Success History</a>
                        </Link>
                      </li>
                      <li>
                        <Link href="/services">
                          <a>Setting &amp; Privacy</a>
                        </Link>
                      </li>
                      <li>
                        <Link href="/services">
                          <a>Company History</a>
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              {/* Single Footer Widget */}
              <div className="col-lg-3 col-md-6 col-sm-6">
                <div className="widget social-widget pl-xl-5">
                  <h5 className="widget-title">Follow On</h5>
                  <ul className="social-links">
                    <li>
                      <a href="#">
                        <i className="fab fa-facebook-f" />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fab fa-twitter" />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fab fa-youtube" />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fab fa-behance" />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fab fa-linkedin" />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="footer-copyright border-top-secondary">
          <div className="container">
            <p className="copyright-text text-center">
              © 2021 <a href="#">Landio</a>. All Rights Reserved
            </p>
          </div>
        </div>
      </footer>
    </Layouts>
  );
};

export default Index7;
