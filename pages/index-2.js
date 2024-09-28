import Link from "next/link";
import { useState } from "react";
import Slider from "react-slick";
import AccordionV1 from "../src/components/AccordionV1";
import Counter from "../src/components/Counter";
import VideoPopup from "../src/components/VideoPopup";
import Footer2 from "../src/layouts/footer/Footer-2";
import Header2 from "../src/layouts/headers/Header2";
import Layouts from "../src/layouts/Layouts";
import { brandSlider, serviceSliderActive } from "../src/sliderProps";

const Index2 = () => {
  const [video, setVideo] = useState(false);
  return (
    <Layouts noFooter noHeader>
      {video && <VideoPopup close={setVideo} />}
      <Header2 />
      <section className="hero-area-v2">
        <div className="hero-content-wrapper">
          <div className="container-fluid">
            <div className="row align-items-center justify-content-center">
              <div className="col-xl-5 col-lg-6 col-md-8">
                <div className="hero-content">
                  <span
                    className="title-tag wow fadeInDown"
                    data-wow-delay="0.2s"
                  >
                    <span>Save 25%</span> Faster solutions
                  </span>
                  <h1 className="hero-title wow fadeInUp" data-wow-delay="0.3s">
                    Intelligence <span>SEO</span> Agency
                  </h1>
                  <ul className="hero-btns d-flex align-items-center">
                    <li className="wow fadeInUp" data-wow-delay="0.4s">
                      <Link href="/services">
                        <a className="template-btn bordered-btn">
                          Start Free Trial{" "}
                          <i className="fas fa-arrow-right"></i>
                        </a>
                      </Link>
                    </li>
                    <li className="wow fadeInUp" data-wow-delay="0.3s">
                      <a
                        href="#"
                        onClick={() => setVideo(true)}
                        className="play-btn popup-video"
                      >
                        <i className="fas fa-play"></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-xl-7 col-lg-6 col-md-10">
                <div
                  className="hero-img preview-blob-image with-floating-icon text-center wow fadeInUp"
                  data-wow-delay="0.4s"
                >
                  <img src="assets/img/hero/hero-blob.png" alt="Image" />

                  <div className="floating-icons">
                    <img
                      src="assets/img/particle/thumbs-up-white.png"
                      alt="Icon"
                      className="icon-1 animate-float-bob-y"
                    />
                    <img
                      src="assets/img/particle/announcement-mic-white.png"
                      alt="Icon"
                      className="icon-2 animate-float-bob-x"
                    />
                    <img
                      src="assets/img/particle/paper-plane-white.png"
                      alt="Icon"
                      className="icon-3 animate-float-bob-x"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <!-- Info Boxes --> */}
        <div className="container-fluid container-1380">
          <div
            className="info-boxes-wrapper wow fadeInUp"
            data-wow-delay="0.4s"
          >
            <div className="info-boxes">
              <div className="box-item">
                <div className="box-icon">
                  <img
                    src="assets/img/icon/infobox-icon-1.png"
                    alt="info icon one"
                  />
                </div>
                <div className="box-content">
                  <h4 className="box-title">Deserve Your Success</h4>
                  <p>
                    Sed ut perspiciatis unde omnis iste natus error sit
                    voluptatem accusanti doloremque laudantium totam rem
                  </p>
                </div>
              </div>
              <div className="box-item">
                <div className="box-icon">
                  <img
                    src="assets/img/icon/infobox-icon-2.png"
                    alt="info icon two"
                  />
                </div>
                <div className="box-content">
                  <h4 className="box-title">Optimize Your Presence</h4>
                  <p>
                    Quis autem vel eum iure reprehen derit voluptate velit esse
                    quam nihil molestiaey consequatur velillum
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!--====== End Hero Area ======--> */}

      {/* <!--====== Start Brands Slider Area ======--> */}
      <section className="brands-section">
        <div className="container p-t-85 p-b-85 border-bottom-primary">
          <div className="row justify-content-lg-between">
            <div className="col-lg-3 col-md-4">
              <h5 className="brand-sectioin-title text-center text-md-left mb-5 mb-md-0">
                <span>259+</span> Premium Partners
              </h5>
            </div>
            <div className="col-lg-9 col-md-8">
              <Slider
                {...brandSlider}
                className="brand-items brand-effect-one row brand-slider-one-active"
              >
                <div className="col">
                  <div className="brand-item">
                    <a href="#">
                      <img src="assets/img/brands/brand-1.png" alt="Brand" />
                    </a>
                  </div>
                </div>
                <div className="col">
                  <div className="brand-item">
                    <a href="#">
                      <img src="assets/img/brands/brand-2.png" alt="Brand" />
                    </a>
                  </div>
                </div>
                <div className="col">
                  <div className="brand-item">
                    <a href="#">
                      <img src="assets/img/brands/brand-3.png" alt="Brand" />
                    </a>
                  </div>
                </div>
                <div className="col">
                  <div className="brand-item">
                    <a href="#">
                      <img src="assets/img/brands/brand-4.png" alt="Brand" />
                    </a>
                  </div>
                </div>
                <div className="col">
                  <div className="brand-item">
                    <a href="#">
                      <img src="assets/img/brands/brand-5.png" alt="Brand" />
                    </a>
                  </div>
                </div>
                <div className="col">
                  <div className="brand-item">
                    <a href="#">
                      <img src="assets/img/brands/brand-1.png" alt="Brand" />
                    </a>
                  </div>
                </div>
                <div className="col">
                  <div className="brand-item">
                    <a href="#">
                      <img src="assets/img/brands/brand-2.png" alt="Brand" />
                    </a>
                  </div>
                </div>
                <div className="col">
                  <div className="brand-item">
                    <a href="#">
                      <img src="assets/img/brands/brand-3.png" alt="Brand" />
                    </a>
                  </div>
                </div>
                <div className="col">
                  <div className="brand-item">
                    <a href="#">
                      <img src="assets/img/brands/brand-4.png" alt="Brand" />
                    </a>
                  </div>
                </div>
                <div className="col">
                  <div className="brand-item">
                    <a href="#">
                      <img src="assets/img/brands/brand-5.png" alt="Brand" />
                    </a>
                  </div>
                </div>
              </Slider>
            </div>
          </div>
        </div>
      </section>
      {/* <!--====== End Brands Slider Area ======--> */}

      {/* <!--====== Start About Section ======--> */}
      <section className="about-section p-t-130 p-b-130">
        <div className="container">
          <div className="row justify-content-lg-between justify-content-center align-items-center">
            <div className="col-xl-6 col-lg-6 col-md-10">
              <div className="preview-blob-image with-floating-icon m-b-md-100">
                <img src="assets/img/about-img-1.png" alt="Image" />

                <div className="floating-icons">
                  <img
                    src="assets/img/particle/thumbs-up.png"
                    alt="Icon"
                    className="icon-1 animate-float-bob-y"
                  />
                  <img
                    src="assets/img/particle/announcement-mic.png"
                    alt="Icon"
                    className="icon-2 animate-float-bob-x"
                  />
                  <img
                    src="assets/img/particle/paper-plane.png"
                    alt="Icon"
                    className="icon-3 animate-float-bob-x"
                  />
                </div>
              </div>
            </div>
            <div className="col-xl-5 col-lg-6 col-md-10">
              <div className="about-text">
                <div className="common-heading tagline-boxed-two title-line line-less-bottom m-b-40">
                  <span className="tagline">About Landio</span>
                  <h2 className="title">
                    Marketing Intelligence{" "}
                    <span>
                      SEO{" "}
                      <img
                        src="assets/img/particle/title-line.png"
                        alt="Line"
                      />
                    </span>{" "}
                    and Content
                  </h2>
                </div>
                <p className="text-pullquote pullquote-secondary-color m-b-35">
                  Quae abillo inventore veritatis quasi archite beataey vitae
                  dicta sunt explicabo voluptatem
                </p>
                <p>
                  Sed ut perspiciatis unde omnis iste natus error voluptate
                  accusantium doloremque laudantium totam aperiam eaqsy ipsa
                  quae abillo inventore veritatis quasi architecto beatae vitae
                  dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas
                  sit aspernatur aute.
                </p>

                <a href="#" className="template-btn primary-bg-2 m-t-40">
                  Learn More <i className="far fa-arrow-right"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!--====== End About Section ======--> */}

      {/* <!--====== Start Service With counter ======--> */}
      <div className="service-with-counter">
        {/* <!--====== Start Counter Section ======--> */}
        <section className="counter-section counter-section-bordered bordered-secondary-bg">
          <div className="container-fluid container-1420">
            <div className="counter-section-inner">
              <div className="row counter-items-v2">
                <div className="col-lg-3 col-sm-6">
                  <div className="counter-item white-color counter-left">
                    <div className="counter-wrap">
                      <Counter end="35" />
                      <span className="suffix">
                        <i className="far fa-plus"></i>
                      </span>
                    </div>
                    <p className="title">Our Trusted Active Clients</p>
                  </div>
                </div>
                <div className="col-lg-3 col-sm-6">
                  <div className="counter-item white-color counter-left">
                    <div className="counter-wrap">
                      <Counter end="75" />
                      <span className="suffix">
                        <i className="far fa-plus"></i>
                      </span>
                    </div>
                    <p className="title">SEO Project Complate</p>
                  </div>
                </div>
                <div className="col-lg-3 col-sm-6">
                  <div className="counter-item white-color counter-left">
                    <div className="counter-wrap">
                      <Counter end="94" />
                      <span className="suffix">
                        <i className="far fa-plus"></i>
                      </span>
                    </div>
                    <p className="title">Experience Member</p>
                  </div>
                </div>
                <div className="col-lg-3 col-sm-6">
                  <div className="counter-item white-color counter-left">
                    <div className="counter-wrap">
                      <Counter end="28" />
                      <span className="suffix">
                        <i className="far fa-plus"></i>
                      </span>
                    </div>
                    <p className="title">Years Services Provide</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* <!--====== End Counter Section ======--> */}

        {/* <!--====== Service Section Start ======--> */}
        <section className="service-section bg-soft-grey-color">
          <div className="container-fluid fluid-gap-70">
            {/* <!-- Common Heading --> */}
            <div className="row justify-content-center">
              <div className="col-lg-5">
                <div className="common-heading tagline-boxed-two title-line m-b-80 text-center">
                  <span className="tagline">Popular Services</span>
                  <h2 className="title">
                    We Offer Professional SEO{" "}
                    <span>
                      Services{" "}
                      <img
                        src="assets/img/particle/title-line.png"
                        alt="Line"
                      />
                    </span>{" "}
                    Across
                  </h2>
                </div>
              </div>
            </div>
            {/* <!-- Image boxes --> */}
            <Slider
              {...serviceSliderActive}
              className="row image-boxes-v1 image-thumbnail-boxed"
              id="serviceSliderActive"
            >
              <div className="col">
                <div className="image-box">
                  <div className="thumb">
                    <img
                      src="assets/img/services/service-thumbnail-1.png"
                      alt="Image"
                    />
                  </div>
                  <h4 className="title">Content Marketing Solutions</h4>
                  <Link href="/service-details">
                    <a className="box-link">
                      <i className="fas fa-arrow-right"></i>
                    </a>
                  </Link>
                </div>
              </div>
              <div className="col">
                <div className="image-box">
                  <div className="thumb">
                    <img
                      src="assets/img/services/service-thumbnail-2.png"
                      alt="Image"
                    />
                  </div>
                  <h4 className="title">Email, Social Media Marketing</h4>
                  <Link href="/service-details">
                    <a className="box-link">
                      <i className="fas fa-arrow-right"></i>
                    </a>
                  </Link>
                </div>
              </div>
              <div className="col">
                <div className="image-box">
                  <div className="thumb">
                    <img
                      src="assets/img/services/service-thumbnail-3.png"
                      alt="Image"
                    />
                  </div>
                  <h4 className="title">SEO, Web Outrech Solutions</h4>
                  <Link href="/service-details">
                    <a className="box-link">
                      <i className="fas fa-arrow-right"></i>
                    </a>
                  </Link>
                </div>
              </div>
              <div className="col">
                <div className="image-box">
                  <div className="thumb">
                    <img
                      src="assets/img/services/service-thumbnail-4.png"
                      alt="Image"
                    />
                  </div>
                  <h4 className="title">Product & Website Optimization</h4>
                  <Link href="/service-details">
                    <a className="box-link">
                      <i className="fas fa-arrow-right"></i>
                    </a>
                  </Link>
                </div>
              </div>
              <div className="col">
                <div className="image-box">
                  <div className="thumb">
                    <img
                      src="assets/img/services/service-thumbnail-5.png"
                      alt="Image"
                    />
                  </div>
                  <h4 className="title">Landing Pages Optimization</h4>
                  <Link href="/service-details">
                    <a className="box-link">
                      <i className="fas fa-arrow-right"></i>
                    </a>
                  </Link>
                </div>
              </div>
              <div className="col">
                <div className="image-box">
                  <div className="thumb">
                    <img
                      src="assets/img/services/service-thumbnail-6.png"
                      alt="Image"
                    />
                  </div>
                  <h4 className="title">Campaign & Blogging</h4>
                  <Link href="/service-details">
                    <a className="box-link">
                      <i className="fas fa-arrow-right"></i>
                    </a>
                  </Link>
                </div>
              </div>
              <div className="col">
                <div className="image-box">
                  <div className="thumb">
                    <img
                      src="assets/img/services/service-thumbnail-1.png"
                      alt="Image"
                    />
                  </div>
                  <h4 className="title">Content Marketing Solutions</h4>
                  <Link href="/service-details">
                    <a className="box-link">
                      <i className="fas fa-arrow-right"></i>
                    </a>
                  </Link>
                </div>
              </div>
              <div className="col">
                <div className="image-box">
                  <div className="thumb">
                    <img
                      src="assets/img/services/service-thumbnail-2.png"
                      alt="Image"
                    />
                  </div>
                  <h4 className="title">Email, Social Media Marketing</h4>
                  <Link href="/service-details">
                    <a className="box-link">
                      <i className="fas fa-arrow-right"></i>
                    </a>
                  </Link>
                </div>
              </div>
              <div className="col">
                <div className="image-box">
                  <div className="thumb">
                    <img
                      src="assets/img/services/service-thumbnail-3.png"
                      alt="Image"
                    />
                  </div>
                  <h4 className="title">SEO, Web Outrech Solutions</h4>
                  <Link href="/service-details">
                    <a className="box-link">
                      <i className="fas fa-arrow-right"></i>
                    </a>
                  </Link>
                </div>
              </div>
              <div className="col">
                <div className="image-box">
                  <div className="thumb">
                    <img
                      src="assets/img/services/service-thumbnail-4.png"
                      alt="Image"
                    />
                  </div>
                  <h4 className="title">Product & Website Optimization</h4>
                  <Link href="/service-details">
                    <a className="box-link">
                      <i className="fas fa-arrow-right"></i>
                    </a>
                  </Link>
                </div>
              </div>
              <div className="col">
                <div className="image-box">
                  <div className="thumb">
                    <img
                      src="assets/img/services/service-thumbnail-5.png"
                      alt="Image"
                    />
                  </div>
                  <h4 className="title">Landing Pages Optimization</h4>
                  <Link href="/service-details">
                    <a className="box-link">
                      <i className="fas fa-arrow-right"></i>
                    </a>
                  </Link>
                </div>
              </div>
              <div className="col">
                <div className="image-box">
                  <div className="thumb">
                    <img
                      src="assets/img/services/service-thumbnail-6.png"
                      alt="Image"
                    />
                  </div>
                  <h4 className="title">Campaign & Blogging</h4>
                  <Link href="/service-details">
                    <a className="box-link">
                      <i className="fas fa-arrow-right"></i>
                    </a>
                  </Link>
                </div>
              </div>
            </Slider>
          </div>
        </section>
        {/* <!--====== Service Section End ======--> */}
      </div>
      {/* <!--====== End Service With counter ======--> */}

      {/* <!--====== Start Team Section ======--> */}
      <section className="team-section team-masonry-section p-t-150 p-b-130">
        <div className="container">
          <div className="row">
            <div className="col-xl-5 col-lg-6 col-md-6">
              <div className="common-heading tagline-boxed-two title-line">
                <span className="tagline">Creative Team</span>
                <h2 className="title">
                  We Have Professional{" "}
                  <span>
                    Creative{" "}
                    <img src="assets/img/particle/title-line.png" alt="Line" />
                  </span>{" "}
                  Team
                </h2>
              </div>
            </div>
            <div className="col-lg-9 ml-auto">
              <div
                className="team-members team-masonry wow fadeInUp"
                data-wow-delay="0.3s"
              >
                <div className="masonry-item">
                  <div className="member-box">
                    <div className="member-photo">
                      <img
                        src="assets/img/team/member-1.jpg"
                        alt="Member Photo"
                      />
                    </div>
                    <div className="member-info">
                      <h5 className="name">
                        <a href="#">Donald L. Juarez</a>
                      </h5>
                      <p className="title">CEO &amp; Founder</p>
                      <ul className="social-links">
                        <li className="facebook">
                          <a href="#">
                            <i className="fab fa-facebook-f"></i>
                          </a>
                        </li>
                        <li className="twitter">
                          <a href="#">
                            <i className="fab fa-twitter"></i>
                          </a>
                        </li>
                        <li className="youtube">
                          <a href="#">
                            <i className="fab fa-youtube"></i>
                          </a>
                        </li>
                        <li className="behance">
                          <a href="#">
                            <i className="fab fa-behance"></i>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="masonry-item">
                  <div className="member-box">
                    <div className="member-photo">
                      <img
                        src="assets/img/team/member-3.jpg"
                        alt="Member Photo"
                      />
                    </div>
                    <div className="member-info">
                      <h5 className="name">
                        <a href="#">Evan A. Ethridge</a>
                      </h5>
                      <p className="title">Creative Head</p>
                      <ul className="social-links">
                        <li className="facebook">
                          <a href="#">
                            <i className="fab fa-facebook-f"></i>
                          </a>
                        </li>
                        <li className="twitter">
                          <a href="#">
                            <i className="fab fa-twitter"></i>
                          </a>
                        </li>
                        <li className="youtube">
                          <a href="#">
                            <i className="fab fa-youtube"></i>
                          </a>
                        </li>
                        <li className="behance">
                          <a href="#">
                            <i className="fab fa-behance"></i>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="masonry-item">
                  <div className="member-box">
                    <div className="member-photo">
                      <img
                        src="assets/img/team/member-4.jpg"
                        alt="Member Photo"
                      />
                    </div>
                    <div className="member-info">
                      <h5 className="name">
                        <a href="#">Donald T. Lewis</a>
                      </h5>
                      <p className="title">JS Developer</p>
                      <ul className="social-links">
                        <li className="facebook">
                          <a href="#">
                            <i className="fab fa-facebook-f"></i>
                          </a>
                        </li>
                        <li className="twitter">
                          <a href="#">
                            <i className="fab fa-twitter"></i>
                          </a>
                        </li>
                        <li className="youtube">
                          <a href="#">
                            <i className="fab fa-youtube"></i>
                          </a>
                        </li>
                        <li className="behance">
                          <a href="#">
                            <i className="fab fa-behance"></i>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="masonry-item">
                  <div className="member-box">
                    <div className="member-photo">
                      <img
                        src="assets/img/team/member-2.jpg"
                        alt="Member Photo"
                      />
                    </div>
                    <div className="member-info">
                      <h5 className="name">
                        <a href="#">Head of Ideas</a>
                      </h5>
                      <p className="title">CEO &amp; Founder</p>
                      <ul className="social-links">
                        <li className="facebook">
                          <a href="#">
                            <i className="fab fa-facebook-f"></i>
                          </a>
                        </li>
                        <li className="twitter">
                          <a href="#">
                            <i className="fab fa-twitter"></i>
                          </a>
                        </li>
                        <li className="youtube">
                          <a href="#">
                            <i className="fab fa-youtube"></i>
                          </a>
                        </li>
                        <li className="behance">
                          <a href="#">
                            <i className="fab fa-behance"></i>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="masonry-item">
                  <div className="more-btn text-center">
                    <Link href="/team">
                      <a className="template-btn primary-bg-2">
                        View More <i className="far fa-arrow-right"></i>
                      </a>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!--====== End Team Section ======--> */}

      {/* <!--====== Start Faq With SEO score box ======--> */}
      <div className="faq-with-seo-score-box">
        {/* <!--====== Start SEO score box ======--> */}
        <div className="container">
          <div className="seo-score-box wow fadeInDown">
            <div className="row justify-content-center">
              <div className="col-xl-8 col-md-10 col-11">
                <div className="score-box-content">
                  <h2 className="score-box-title">
                    Discover Your <span>SEO</span> Score!
                  </h2>
                  <p>Empower SEO teams to find the best growth opportunities</p>
                </div>
                <form className="score-box-form">
                  <div className="form-group">
                    <input
                      type="text"
                      name="website"
                      id="yourWebsite"
                      placeholder="Your Website URL"
                    />
                    <input
                      type="email"
                      name="email"
                      id="emailAddress"
                      placeholder="Email Address"
                    />
                    <button
                      type="submit"
                      name="submit"
                      className="template-btn secondary-bg"
                    >
                      Search Now <i className="fas fa-arrow-right"></i>
                    </button>
                  </div>
                </form>
              </div>
            </div>
            <div className="seo-images"></div>
          </div>
        </div>
        {/* <!--====== End SEO score box ======--> */}

        {/* <!--====== Start FAQ section ======--> */}
        <section className="faq-section bg-soft-grey-color">
          <div className="container">
            <div className="row align-items-center justify-content-center">
              <div className="col-lg-6 col-md-10">
                <div className="faq-content p-r-60 p-r-lg-30 p-r-md-0">
                  <div className="common-heading tagline-boxed-two title-line m-b-80">
                    <span className="tagline">Our Approach</span>
                    <h2 className="title">
                      Grow Your Business With Our SEO{" "}
                      <span>
                        Agency{" "}
                        <img
                          src="assets/img/particle/title-line.png"
                          alt="Line"
                        />
                      </span>
                    </h2>
                  </div>
                  <div className="landio-accordion-v1">
                    <AccordionV1 />
                  </div>
                </div>
              </div>
              <div className="col-lg-6 col-md-9">
                <div className="faq-image text-lg-right m-t-md-60">
                  <img
                    src="assets/img/faq/faq-image.png"
                    alt="faq image"
                    className="animate-float-bob-y"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* <!--====== End Faq With SEO score box ======--> */}
      </div>
      {/* <!--====== End FAQ section ======--> */}

      {/* <!--====== Start Pricing Section ======--> */}
      <section className="pricing-section p-t-130 p-b-130">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-6">
              <div className="common-heading tagline-boxed-two title-line m-b-70 text-center">
                <span className="tagline">Our Pricing Plan</span>
                <h2 className="title">
                  Choose The Best Package For{" "}
                  <span>
                    Your SEO{" "}
                    <img src="assets/img/particle/title-line.png" alt="Line" />
                  </span>{" "}
                  Marketing
                </h2>
              </div>
            </div>
          </div>

          {/* <!-- Pricing Table --> */}
          <div className="row justify-content-center">
            <div className="col-lg-4 col-md-6 col-sm-8">
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
            <div className="col-lg-4 col-md-6 col-sm-8">
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
            <div className="col-lg-4 col-md-6 col-sm-8">
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
      <Footer2 />
    </Layouts>
  );
};

export default Index2;
