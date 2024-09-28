import Link from "next/link";
import { useState } from "react";
import Slider from "react-slick";
import Counter from "../src/components/Counter";
import VideoPopup from "../src/components/VideoPopup";
import Footer2 from "../src/layouts/footer/Footer-2";
import Header3 from "../src/layouts/headers/Header3";
import Layouts from "../src/layouts/Layouts";
import { testimonialActiveTwo } from "../src/sliderProps";

const Index3 = () => {
  const [video, setVideo] = useState(false);
  return (
    <Layouts noFooter noHeader>
      {video && <VideoPopup close={setVideo} />}
      {/* <!--====== Start Hero Area ======--> */}
      <Header3 />
      <section className="hero-area-v3">
        <div className="container">
          <div className="row align-items-end justify-content-lg-between justify-content-center">
            <div className="col-lg-6 col-md-8">
              <div className="hero-content">
                <h1 className="hero-title wow fadeInLeft" data-wow-delay="0.3s">
                  Solutions <br /> Your Problem <br /> <span>In One</span> Hand
                </h1>
                <p className="wow fadeInLeft" data-wow-delay="0.4s">
                  Sed ut perspiciatis unde omnis iste natus error voluptate
                  accus antium doloremque laudantium totam aperiam
                </p>
                <ul
                  className="hero-btns d-flex align-items-center wow fadeInLeft"
                  data-wow-delay="0.5s"
                >
                  <li>
                    <Link href="/services">
                      <a className="template-btn secondary-2-bg shadow-none">
                        Apple Store <i className="fab fa-apple"></i>
                      </a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/services">
                      <a className="template-btn white-bg bordered-btn shadow-none">
                        Google Play <i className="fab fa-google-play"></i>
                      </a>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-6 col-md-8 d-none d-sm-block">
              <div className="hero-img wow fadeInUp" data-wow-delay="0.5s">
                <img src="assets/img/hero/hero-mobile-on-hand.png" alt="Hero" />
              </div>
            </div>
          </div>
        </div>
        <div className="hero-particle">
          <img
            src="assets/img/particle/particle-8.png"
            alt="#"
            className="particle-1 animate-rotate-me"
          />
          <img
            src="assets/img/particle/particle-9.png"
            alt="#"
            className="particle-2 animate-zoom-fade"
          />
        </div>
      </section>
      {/* <!--====== End Hero Area ======--> */}

      {/* <!--====== Feature Section Start ======--> */}
      <section className="feature-section p-t-130 p-b-130">
        <div className="container">
          <div className="row justify-content-between">
            <div className="col-xl-4 col-lg-5 col-md-6">
              <div className="common-heading title-line-bottom m-b-50">
                <span className="tagline">How Can Help You</span>
                <h2 className="title">Build an Awesome Apps With Us</h2>
                <img
                  src="assets/img/particle/title-line-2.png"
                  alt="Image"
                  className="Line"
                />
              </div>
            </div>
            <div className="col-lg-7">
              {/* <!-- Feature Boxes --> */}
              <div className="row justify-content-between iconic-boxes-v1">
                <div className="col-xl-5 col-lg-6 col-md-5 col-sm-6">
                  <div className="iconic-box no-shadow">
                    <div className="icon icon-gradient-1">
                      <i className="far fa-cog"></i>
                    </div>
                    <h4 className="title">Easy to Manage Data</h4>
                    <p>
                      Sed ut perspiciatis unde omnis este error voluptate
                      accusantium doloremque.
                    </p>
                    <a href="#" className="box-link">
                      Read More <i className="fas fa-arrow-right"></i>
                    </a>
                  </div>
                </div>
                <div className="col-xl-5 col-lg-6 col-md-5 col-sm-6">
                  <div className="iconic-box no-shadow">
                    <div className="icon icon-gradient-2">
                      <i className="far fa-cog"></i>
                    </div>
                    <h4 className="title">Device Quality Design</h4>
                    <p>
                      Quis autem veleure prehender quinea voluptate velit esse
                      quam molestiae consequatur
                    </p>
                    <a href="#" className="box-link">
                      Read More <i className="fas fa-arrow-right"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="section-inner-line m-t-100 m-b-130"></div>
          <div className="row align-items-center justify-content-center">
            <div className="col-lg-7 col-md-10">
              <div className="preview-image-v1 m-r-60">
                <img
                  src="assets/img/preview-gallery/manage-data.png"
                  alt="Image"
                  className="animate-float-bob-y"
                />
              </div>
            </div>
            <div className="col-lg-5 col-md-8 col-sm-11">
              <div className="feature-text-block p-l-30 p-l-lg-0">
                <div className="common-heading title-line-bottom m-b-30">
                  <h2 className="title">Manage Your Mobile Data Very Easily</h2>
                  <img
                    src="assets/img/particle/title-line-2.png"
                    alt="Image"
                    className="Line"
                  />
                </div>
                <p>
                  Nentore veritatis quasi architecto beatae vitae dicta sunt
                  explicabo. Nemo enim ipsam voluptatem voluptas sit aspernatur
                  aut quia consequuntur
                </p>

                {/* <!-- Fancy Check List v1 --> */}
                <ul className="fancy-check-list-v1 m-t-50">
                  <li className="wow fadeInUp" data-wow-delay="0.3s">
                    <h5 className="title">Innovative Solution</h5>
                    <p>
                      On the other hand denounce with righteous indignation and
                      dislike beguiled
                    </p>
                  </li>
                  <li className="wow fadeInUp" data-wow-delay="0.4s">
                    <h5 className="title">Devices With Quality</h5>
                    <p>
                      But I must explain to you how all mistaken denouncing
                      pleasure and praising
                    </p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!--====== Feature Section End ======--> */}

      {/* <!--====== Collaborate Section Start ======--> */}
      <section className="collaborate-section bg-grey-color section-one-third-right-map">
        <div className="container">
          <div className="row align-items-end justify-content-lg-between justify-content-center">
            <div className="col-xl-5 col-lg-6 col-md-9 col-sm-11 offset-xl-1">
              <div className="collaborate-text-block">
                <div className="common-heading title-line-bottom m-b-60">
                  <h2 className="title">
                    Collaborate With Real Team & Users.​​
                  </h2>
                  <img
                    src="assets/img/particle/title-line-2.png"
                    alt="Image"
                    className="Line"
                  />
                </div>
                <p>
                  Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                  accusantium doloremque laudante totam rem aperiam, eaque ipsa
                  quae abillo inventore veritatis et quasi architecto beatae
                  vitae dicta sunt explicabo. nemo enim ipsam voluptatem
                </p>

                {/* <!-- Fancy Check List v1 --> */}
                <ul className="fancy-check-list-v2 color-heading-3 m-t-40">
                  <li className="wow fadeInUp">
                    <span className="list-inner">
                      Easy To Collaborate With User
                    </span>
                  </li>
                  <li className="wow fadeInUp">
                    <span className="list-inner">Manage Team & Users Flow</span>
                  </li>
                  <li className="wow fadeInUp">
                    <span className="list-inner">
                      Market Participant Perspective
                    </span>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-5 col-md-9">
              <div className="preview-image-v2 text-center">
                <img
                  src="assets/img/preview-gallery/collaboration-screenshot.png"
                  alt="Image"
                  className="animate-float-bob-y"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!--====== Collaborate Section End ======--> */}

      {/* <!--====== Service Section Start ======--> */}
      <section className="service-section p-t-130 p-b-130">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-7">
              <div className="common-heading title-line-bottom text-center m-b-80">
                <h2 className="title">
                  Made Amazing Mobile Application With Our Solutions​​
                </h2>
                <img
                  src="assets/img/particle/title-line-2.png"
                  alt="Image"
                  className="Line"
                />
              </div>
            </div>
          </div>
          <div className="row align-items-end justify-content-lg-between justify-content-center">
            <div className="col-lg-5 col-md-8">
              <div className="service-img text-center text-lg-center">
                <img
                  src="assets/img/services/service-image.png"
                  alt="Image"
                  className="animate-float-bob-y"
                />
              </div>
            </div>

            <div className="col-xl-6 col-lg-7">
              <div className="row no-gutters iconic-boxes-v1 icon-boxes-square-bordered">
                <div className="col-sm-6 col-12">
                  <div className="iconic-box">
                    <div className="icon icon-gradient-3">
                      <i className="far fa-user-chart"></i>
                    </div>
                    <h4 className="title">Team Management</h4>
                    <p>
                      Sed ut perspiciatis unde este error voluptate accus antium
                      doloremque
                    </p>
                  </div>
                </div>
                <div className="col-sm-6 col-12">
                  <div className="iconic-box">
                    <div className="icon icon-gradient-4">
                      <i className="far fa-compass"></i>
                    </div>
                    <h4 className="title">Time Tracking</h4>
                    <p>
                      But I must explain to you how all this mistaken idea
                      denouncing pleasure
                    </p>
                  </div>
                </div>
                <div className="col-sm-6 col-12">
                  <div className="iconic-box">
                    <div className="icon icon-gradient-5">
                      <i className="far fa-squirrel"></i>
                    </div>
                    <h4 className="title">Payment System</h4>
                    <p>
                      Quis autem vel eum iure reprehe deritea voluptate velit
                      esse quam
                    </p>
                  </div>
                </div>
                <div className="col-sm-6 col-12">
                  <div className="iconic-box">
                    <div className="icon icon-gradient-6">
                      <i className="far fa-fingerprint"></i>
                    </div>
                    <h4 className="title">High Security</h4>
                    <p>
                      At vero eoset accusame et iusto odio dignissimosy ducimus
                      qui bland
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!--====== Service Section End ======--> */}

      {/* <!--====== Start Testimonial With Video ======--> */}
      <div className="testimonial-with-video">
        <div className="container">
          <div
            className="landio-video"
            style={{
              backgroundImage: "url(assets/img/video/featured-video-cover.jpg)",
            }}
          >
            <a
              href="#"
              onClick={() => setVideo(true)}
              className="play-btn popup-video color-heading-3"
            >
              <i className="fas fa-play" />
            </a>
          </div>
        </div>

        {/* <!--====== Start Testimonials ======--> */}
        <section className="testimonials-section bg-heading-color-3 section-line-dots">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-xl-9">
                <Slider
                  {...testimonialActiveTwo}
                  className="row testimonial-slider-v1 testimonial-v1-boxed px-lg-3"
                  id="testimonialActiveTwo"
                >
                  <div className="col-12">
                    <div className="testimonial-item m-t-30">
                      <div className="quote-icon">
                        <i className="flaticon-right-quote"></i>
                      </div>
                      <p>
                        Sed ut perspicia unde omnis natus error sit volupt
                        accusantium doloremque laudantium totam rem aperiam
                        eaque quae
                      </p>
                      <div className="author-info">
                        <img
                          src="assets/img/testimonial/author-1.png"
                          alt="testimonial author"
                        />
                        <h6 className="name">Michael W. Kirwan</h6>
                        <span className="title">CEO &amp; Founder</span>
                      </div>
                    </div>
                  </div>
                  <div className="col-12">
                    <div className="testimonial-item m-t-30">
                      <div className="quote-icon">
                        <i className="flaticon-right-quote"></i>
                      </div>
                      <p>
                        Sed ut perspicia unde omnis natus error sit volupt
                        accusantium doloremque laudantium totam rem aperiam
                        eaque quae
                      </p>
                      <div className="author-info">
                        <img
                          src="assets/img/testimonial/author-2.png"
                          alt="testimonial author"
                        />
                        <h6 className="name">Ricky L. Simpson </h6>
                        <span className="title">Web Designer</span>
                      </div>
                    </div>
                  </div>
                  <div className="col-12">
                    <div className="testimonial-item m-t-30">
                      <div className="quote-icon">
                        <i className="flaticon-right-quote"></i>
                      </div>
                      <p>
                        Sed ut perspicia unde omnis natus error sit volupt
                        accusantium doloremque laudantium totam rem aperiam
                        eaque quae
                      </p>
                      <div className="author-info">
                        <img
                          src="assets/img/testimonial/author-1.png"
                          alt="testimonial author"
                        />
                        <h6 className="name">Michael W. Kirwan</h6>
                        <span className="title">CEO &amp; Founder</span>
                      </div>
                    </div>
                  </div>
                  <div className="col-12">
                    <div className="testimonial-item m-t-30">
                      <div className="quote-icon">
                        <i className="flaticon-right-quote"></i>
                      </div>
                      <p>
                        Sed ut perspicia unde omnis natus error sit volupt
                        accusantium doloremque laudantium totam rem aperiam
                        eaque quae
                      </p>
                      <div className="author-info">
                        <img
                          src="assets/img/testimonial/author-2.png"
                          alt="testimonial author"
                        />
                        <h6 className="name">Ricky L. Simpson </h6>
                        <span className="title">Web Designer</span>
                      </div>
                    </div>
                  </div>
                </Slider>
              </div>
            </div>
          </div>
        </section>
        {/* <!--====== End Testimonials ======--> */}
      </div>
      {/* <!--====== End Testimonial With Video ======--> */}

      {/* <!--====== Start Pricing Area ======--> */}
      <section className="pricing-area p-t-130 p-b-130">
        <div className="container">
          <div className="row justify-content-lg-between justify-content-center">
            <div className="col-xl-4 col-lg-5 col-md-8">
              <div className="common-heading m-b-30">
                <h2 className="title">
                  Choose The Best Package For Your Applications
                </h2>
                <img
                  src="assets/img/particle/title-line-2.png"
                  alt="Image"
                  className="Line"
                />
              </div>

              <p>
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                accusantium doloremq ue laudante totam rem aperiam
              </p>

              <div className="row counter-items-v2 m-b-md-60">
                <div className="col-md-6">
                  <div
                    className="counter-item m-t-60 wow fadeInUp"
                    data-wow-delay="0.3s"
                  >
                    <div className="counter-wrap">
                      <Counter end={35} />
                      <span className="suffix">
                        <i className="far fa-plus"></i>
                      </span>
                    </div>
                    <p className="title">Download Apps</p>
                  </div>
                </div>
                <div className="col-md-6">
                  <div
                    className="counter-item m-t-60 wow fadeInUp"
                    data-wow-delay="0.3s"
                  >
                    <div className="counter-wrap">
                      <Counter end={75} />
                      <span className="suffix">
                        <i className="far fa-plus"></i>
                      </span>
                    </div>
                    <p className="title">Project Complete</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-7">
              <div
                className="pricing-table-two m-b-30 wow fadeInUp"
                data-wow-delay="0.3s"
              >
                <div className="left-content">
                  <h5 className="plan-name">Single Team</h5>
                  <ul className="plan-feature">
                    <li>Social Media Marketing</li>
                    <li>2.100 Keywords</li>
                    <li>One Way Link Building</li>
                  </ul>
                </div>
                <div className="right-content">
                  <div className="plan-cost">
                    <span className="currency">$</span>
                    <span className="price">99.25</span>
                    <span className="plan-type">/ Monthly</span>
                  </div>
                  <a href="#" className="template-btn secondary-2-bg">
                    Select Plan <i className="fas fa-arrow-right"></i>
                  </a>
                </div>
              </div>
              <div
                className="pricing-table-two wow fadeInDown"
                data-wow-delay="0.3s"
              >
                <div className="left-content">
                  <h5 className="plan-name">Professional</h5>
                  <ul className="plan-feature">
                    <li>Social Media Marketing</li>
                    <li>2.100 Keywords</li>
                    <li>One Way Link Building</li>
                  </ul>
                </div>
                <div className="right-content">
                  <div className="plan-cost">
                    <span className="currency">$</span>
                    <span className="price">99.25</span>
                    <span className="plan-type">/ Monthly</span>
                  </div>
                  <a href="#" className="template-btn heading-3-bg">
                    Select Plan <i className="fas fa-arrow-right"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!--====== End Pricing Area ======--> */}

      {/* <!--====== Start Call to Action ======--> */}
      <section className="cta-section">
        <div className="container">
          <div className="row align-items-end justify-content-between">
            <div className="col-xl-5 col-lg-6">
              <div className="cta-text p-r-50 p-b-130">
                <div className="common-heading m-b-30">
                  <h2 className="title">Download Our Apps Available Now</h2>
                  <img
                    src="assets/img/particle/title-line-2.png"
                    alt="Image"
                    className="Line"
                  />
                </div>

                <p className="m-b-10">
                  Sed ut perspiciatis unde omnis iste natus errors voluptatem
                  accusantium doloremque laudantium totam rem aperiam eaqpsae.
                </p>
                <p className="m-b-30">
                  Quae abillo inventore veritatis quasi architecto beatae vitae
                  dicta sunt explicabe.
                </p>

                <ul className="cta-btns">
                  <li>
                    <Link href="/services">
                      <a className="template-btn secondary-2-bg shadow-none">
                        App Store <i className="fab fa-apple"></i>
                      </a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/services">
                      <a className="template-btn heading-3-bg shadow-none">
                        Google Play <i className="fab fa-google-play"></i>
                      </a>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-6 order-lg-first">
              <div className="cta-image">
                <img
                  src="assets/img/cta/download-app-cta-thumbnail.png"
                  alt="Image"
                  className="animate-float-bob-x"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!--====== End Call to Action ======--> */}
      <Footer2 extraClass="template-footer bg-heading-color-3 footer-white-color" />
    </Layouts>
  );
};

export default Index3;
