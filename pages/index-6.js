import Link from "next/link";
import { useState } from "react";
import Slider from "react-slick";
import Counter from "../src/components/Counter";
import VideoPopup from "../src/components/VideoPopup";
import Header6 from "../src/layouts/headers/Header6";
import Layouts from "../src/layouts/Layouts";
import {
  brandslidertwoactive,
  heroSlider,
  testimonialActiveFour,
} from "../src/sliderProps";

const Index6 = () => {
  const [video, setVideo] = useState(false);
  return (
    <Layouts noFooter noHeader>
      {video && <VideoPopup close={setVideo} />}
      <Header6 />
      <Slider {...heroSlider} className="hero-area-v6 hero-slider">
        <div>
          <div
            className="single-slider"
            style={{
              backgroundImage: "url(assets/img/hero/home-6-slider-bg-1.jpg)",
            }}
          >
            <div className="container">
              <div className="row no-gutters">
                <div className="col-xl-6 col-lg-7 col-md-10 col-sm-11">
                  <div className="hero-content">
                    <h1
                      className="hero-title"
                      data-animation="fadeInUp"
                      data-delay="0.2s"
                    >
                      We Rebuilding Fintech Solution
                    </h1>
                    <p data-animation="fadeInUp" data-delay="0.4s">
                      Sed ut perspiciatis unde omnis iste natus error sit
                      voluptatem accusantium doloremque laudantium, totam rem
                      aperiam, eaque
                    </p>
                    <ul className="hero-btns d-flex align-items-center">
                      <li data-animation="fadeInUp" data-delay="0.5s">
                        <a
                          href="services.html"
                          className="template-btn primary-bg-4 shadow-none"
                        >
                          Get Started Now <i className="fas fa-arrow-right" />
                        </a>
                      </li>
                      <li data-animation="fadeInUp" data-delay="0.6s">
                        <a
                          href="https://vimeo.com/87110435"
                          className="play-text-btn"
                        >
                          How We Works
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div
            className="single-slider"
            style={{
              backgroundImage: "url(assets/img/hero/home-6-slider-bg-2.jpg)",
            }}
          >
            <div className="container">
              <div className="row no-gutters">
                <div className="col-xl-6 col-lg-7 col-md-10 col-sm-11">
                  <div className="hero-content">
                    <h1 className="hero-title">
                      We Rebuilding Fintech Solution
                    </h1>
                    <p>
                      Sed ut perspiciatis unde omnis iste natus error sit
                      voluptatem accusantium doloremque laudantium, totam rem
                      aperiam, eaque
                    </p>
                    <ul className="hero-btns d-flex align-items-center">
                      <li>
                        <a
                          href="services.html"
                          className="template-btn primary-bg-4 shadow-none"
                        >
                          Get Started Now <i className="fas fa-arrow-right" />
                        </a>
                      </li>
                      <li>
                        <a
                          href="https://vimeo.com/87110435"
                          className="play-text-btn"
                        >
                          How We Works
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div
            className="single-slider"
            style={{
              backgroundImage: "url(assets/img/hero/home-6-slider-bg-3.jpg)",
            }}
          >
            <div className="container">
              <div className="row no-gutters">
                <div className="col-xl-6 col-lg-7 col-md-10 col-sm-11">
                  <div className="hero-content">
                    <h1 className="hero-title">
                      We Rebuilding Fintech Solution
                    </h1>
                    <p>
                      Sed ut perspiciatis unde omnis iste natus error sit
                      voluptatem accusantium doloremque laudantium, totam rem
                      aperiam, eaque
                    </p>
                    <ul className="hero-btns d-flex align-items-center">
                      <li>
                        <a
                          href="services.html"
                          className="template-btn primary-bg-4 shadow-none"
                        >
                          Get Started Now <i className="fas fa-arrow-right" />
                        </a>
                      </li>
                      <li>
                        <a
                          href="https://vimeo.com/87110435"
                          className="play-text-btn"
                        >
                          How We Works
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Slider>

      {/*====== End Hero Area ======*/}
      {/*====== Section Service Start ======*/}
      <section className="service-section p-t-130 p-b-130 bg-soft-grey-color">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-6 col-md-9">
              <div className="common-heading text-center m-b-20">
                <h2 className="title m-b-20">Learn How to Move Faster</h2>
                <p>
                  Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                  accusantium doloremque laudantium totam rem aperiam eaque
                </p>
              </div>
            </div>
          </div>
          <div className="row justify-content-center image-boxes-v3">
            <div
              className="col-lg-6 col-md-10 wow fadeInUp"
              data-wow-delay="0.2s"
            >
              <div className="image-box m-t-30">
                <div className="box-image">
                  <img
                    src="assets/img/services/service-thumbnail-7.jpg"
                    alt="Image"
                  />
                </div>
                <div className="box-content">
                  <h4 className="title">Smart Softwares</h4>
                  <p>
                    Quis autem vel eum iure righteous qui in ea voluptate velit
                    esse.
                  </p>
                  <Link href="/service-details">
                    <a className="box-link">
                      Read More <i className="fas fa-arrow-right" />
                    </a>
                  </Link>
                </div>
              </div>
            </div>
            <div
              className="col-lg-6 col-md-10 wow fadeInUp"
              data-wow-delay="0.3s"
            >
              <div className="image-box m-t-30">
                <div className="box-image">
                  <img
                    src="assets/img/services/service-thumbnail-8.jpg"
                    alt="Image"
                  />
                </div>
                <div className="box-content">
                  <h4 className="title">Trusted Security</h4>
                  <p>
                    Quis autem vel eum iure righteous qui in ea voluptate velit
                    esse.
                  </p>
                  <Link href="/service-details">
                    <a className="box-link">
                      Read More <i className="fas fa-arrow-right" />
                    </a>
                  </Link>
                </div>
              </div>
            </div>
            <div
              className="col-lg-6 col-md-10 wow fadeInUp"
              data-wow-delay="0.4s"
            >
              <div className="image-box m-t-30">
                <div className="box-image">
                  <img
                    src="assets/img/services/service-thumbnail-9.jpg"
                    alt="Image"
                  />
                </div>
                <div className="box-content">
                  <h4 className="title">Awards Winners</h4>
                  <p>
                    Quis autem vel eum iure righteous qui in ea voluptate velit
                    esse.
                  </p>
                  <Link href="/service-details">
                    <a className="box-link">
                      Read More <i className="fas fa-arrow-right" />
                    </a>
                  </Link>
                </div>
              </div>
            </div>
            <div
              className="col-lg-6 col-md-10 wow fadeInUp"
              data-wow-delay="0.5s"
            >
              <div className="image-box m-t-30">
                <div className="box-image">
                  <img
                    src="assets/img/services/service-thumbnail-10.jpg"
                    alt="Image"
                  />
                </div>
                <div className="box-content">
                  <h4 className="title">Great Experience</h4>
                  <p>
                    Quis autem vel eum iure righteous qui in ea voluptate velit
                    esse.
                  </p>
                  <Link href="/service-details">
                    <a className="box-link">
                      Read More <i className="fas fa-arrow-right" />
                    </a>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*====== Section Service End ======*/}
      {/*====== Statices Section Start ======*/}
      <section className="statistic-section p-t-130 p-b-130">
        <div className="container">
          <div className="row justify-content-lg-between justify-content-center">
            <div className="col-lg-6 col-md-9 order-lg-last">
              <div className="preview-galley-v6 m-l-40 m-l-lg-0 m-b-md-80">
                <div className="main-img">
                  <img
                    src="assets/img/preview-gallery/statistic-image-main.png"
                    alt="Image"
                  />
                </div>
                <div className="preview-image-top animate-float-bob-x">
                  <img
                    src="assets/img/preview-gallery/statistic-image-top.png"
                    alt="Image"
                  />
                </div>
                <div className="preview-image-bottom animate-float-bob-x">
                  <img
                    src="assets/img/preview-gallery/statistic-image-bottom.png"
                    alt="Image"
                  />
                </div>
              </div>
            </div>
            <div className="col-lg-5 col-md-10 order-lg-first">
              <div className="statistic-text-block">
                <div className="common-heading m-b-30">
                  <span className="tagline color-primary-4">
                    Company Statices
                  </span>
                  <h2 className="title">
                    Our Track Record Of Fearless Ventures
                  </h2>
                </div>
                <p className="m-b-15">
                  Sed ut perspiciatis unde omnis iste natus error voluptate
                  accusantium doloremque laudantium, totam rem aperiam eaque
                  ipsa quae abillo inventore.
                </p>
                <p>
                  Quis autem vel eum iure reprehenderit qui ea voluptate velit
                  esse quam nihil molestiae consequatur
                </p>
                <a
                  href="#"
                  className="template-btn primary-bg-4 shadow-none m-t-35"
                >
                  Learn More <i className="fas fa-arrow-right" />
                </a>
              </div>
            </div>
          </div>
          <div className="row justify-content-lg-between justify-content-center p-t-150">
            <div className="col-lg-6 col-md-9">
              <div className="preview-galley-v7 m-r-60 m-r-lg-0  m-b-md-80">
                <div className="main-img">
                  <img
                    src="assets/img/preview-gallery/service-law-main.jpg"
                    alt="Image"
                  />
                </div>
                <div className="preview-image-top animate-float-bob-x">
                  <img
                    src="assets/img/preview-gallery/service-law-top.png"
                    alt="Image"
                  />
                </div>
                <div className="preview-image-bottom animate-float-bob-x">
                  <img
                    src="assets/img/preview-gallery/service-law-bottom.png"
                    alt="Image"
                  />
                </div>
              </div>
            </div>
            <div className="col-xl-5 col-lg-6 col-md-10">
              <div className="statistic-text-block p-l-30">
                <div className="common-heading m-b-30">
                  <span className="tagline color-primary-4">
                    Services Power Law
                  </span>
                  <h2 className="title">
                    Pace Of Change Is Power Law In Financial Services
                  </h2>
                </div>
                <p className="m-b-15">
                  Sed ut perspiciatis unde omnis iste natus error voluptate
                  accusantium doloremque laudantium, totam rem aperiam eaque
                  ipsa quae abillo inventore.
                </p>
                <p>
                  Quis autem vel eum iure reprehenderit qui ea voluptate velit
                  esse quam nihil molestiae consequatur
                </p>
                <a
                  href="#"
                  className="template-btn primary-bg-4 bordered-btn shadow-none m-t-35"
                >
                  Learn More <i className="fas fa-arrow-right" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*====== Statices Section End ======*/}
      {/*====== Counter With Video End ======*/}
      <div className="counter-with-vide-cta">
        {/*====== Counter Section Start ======*/}
        <section className="counter-section bg-secondary-color-4 section-with-map-bg">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-xl-10 col-lg-11">
                <div className="row justify-content-center counter-items-v2">
                  <div
                    className="col-lg-4 col-sm-6 wow fadeInUp"
                    data-wow-delay="0.2s"
                  >
                    <div className="counter-item counter-left white-color m-b-60">
                      <div className="counter-wrap">
                        <Counter end={35} />
                        <span className="suffix">
                          <i className="far fa-plus" />
                        </span>
                      </div>
                      <p className="title">Our Trusted Active Clients</p>
                    </div>
                  </div>
                  <div
                    className="col-lg-4 col-sm-6 wow fadeInUp"
                    data-wow-delay="0.3s"
                  >
                    <div className="counter-item counter-left white-color m-b-60">
                      <div className="counter-wrap">
                        <Counter end={75} />
                        <span className="suffix">
                          <i className="far fa-plus" />
                        </span>
                      </div>
                      <p className="title">Fintech Project Complate</p>
                    </div>
                  </div>
                  <div
                    className="col-lg-4 col-sm-6 wow fadeInUp"
                    data-wow-delay="0.4s"
                  >
                    <div className="counter-item counter-left white-color m-b-60 pl-xl-5">
                      <div className="counter-wrap">
                        <Counter end={96} />
                        <span className="suffix">
                          <i className="far fa-plus" />
                        </span>
                      </div>
                      <p className="title">Experience Members</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/*====== Counter Section End ======*/}
        {/*====== Video Call To Action End ======*/}
        <div className="container">
          <div className="video-cta">
            <div className="row justify-content-center">
              <div className="col-xl-8 col-lg-7">
                <div
                  className="landio-video"
                  style={{
                    backgroundImage:
                      "url(assets/img/video/featured-video-cover-2.jpg)",
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
              <div
                className="col-xl-4 col-lg-5 col-md-8 wow fadeInUp"
                data-wow-delay="0.3s"
              >
                <div className="video-cta-text-block m-t-md-30">
                  <h3 className="title">Get Free Consultations</h3>
                  <p>
                    Sed ut perspiciatis unde omnis iste voluptate accusan dolore
                  </p>
                  <a href="#" className="template-btn white-bg bordered-btn">
                    Get A Quote <i className="far fa-arrow-right" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/*====== Video Call To Action End ======*/}
      </div>
      {/*====== Counter With Video End ======*/}
      {/*====== Service Section Start ======*/}
      <section className="service-section p-t-130 p-b-130">
        <div className="container">
          <div className="row iconic-boxes-v2">
            <div
              className="col-lg-3 col-sm-6 wow fadeInUp"
              data-wow-delay="0.2s"
            >
              <div className="iconic-box m-b-50">
                <div className="icon">
                  <img
                    src="assets/img/icon/business-analysis.png"
                    alt="Business"
                  />
                </div>
                <h5 className="title">
                  <a href="#">Business Analysis</a>
                </h5>
                <p>
                  Sed perspiciatis unde omnis este error voluptate accusant
                  doloremque systems.
                </p>
              </div>
            </div>
            <div
              className="col-lg-3 col-sm-6 wow fadeInUp"
              data-wow-delay="0.3s"
            >
              <div className="iconic-box m-b-50">
                <div className="icon">
                  <img src="assets/img/icon/consulting.png" alt="Consulting" />
                </div>
                <h5 className="title">
                  <a href="#">Fintech Consulting</a>
                </h5>
                <p>
                  Sed perspiciatis unde omnis este error voluptate accusant
                  doloremque systems.
                </p>
              </div>
            </div>
            <div
              className="col-lg-3 col-sm-6 wow fadeInUp"
              data-wow-delay="0.4s"
            >
              <div className="iconic-box m-b-50">
                <div className="icon">
                  <img src="assets/img/icon/finance.png" alt="Finance" />
                </div>
                <h5 className="title">
                  <a href="#">Finance Platforms</a>
                </h5>
                <p>
                  Sed perspiciatis unde omnis este error voluptate accusant
                  doloremque systems.
                </p>
              </div>
            </div>
            <div
              className="col-lg-3 col-sm-6 wow fadeInUp"
              data-wow-delay="0.5s"
            >
              <div className="iconic-box m-b-50">
                <div className="icon">
                  <img src="assets/img/icon/cog.png" alt="Quality" />
                </div>
                <h5 className="title">
                  <a href="#">Quality Assurance</a>
                </h5>
                <p>
                  Sed perspiciatis unde omnis este error voluptate accusant
                  doloremque systems.
                </p>
              </div>
            </div>
            <div
              className="col-lg-3 col-sm-6 wow fadeInUp"
              data-wow-delay="0.6s"
            >
              <div className="iconic-box m-b-50">
                <div className="icon">
                  <img src="assets/img/icon/research.png" alt="Research" />
                </div>
                <h5 className="title">
                  <a href="#">Focused Research</a>
                </h5>
                <p>
                  Sed perspiciatis unde omnis este error voluptate accusant
                  doloremque systems.
                </p>
              </div>
            </div>
            <div
              className="col-lg-3 col-sm-6 wow fadeInUp"
              data-wow-delay="0.7s"
            >
              <div className="iconic-box m-b-50">
                <div className="icon">
                  <img src="assets/img/icon/expense-report.png" alt="Expense" />
                </div>
                <h5 className="title">
                  <a href="#">Expense Reporting</a>
                </h5>
                <p>
                  Sed perspiciatis unde omnis este error voluptate accusant
                  doloremque systems.
                </p>
              </div>
            </div>
            <div
              className="col-lg-3 col-sm-6 wow fadeInUp"
              data-wow-delay="0.8s"
            >
              <div className="iconic-box m-b-50">
                <div className="icon">
                  <img
                    src="assets/img/icon/data-verification.png"
                    alt="Verification"
                  />
                </div>
                <h5 className="title">
                  <a href="#">Data Verification</a>
                </h5>
                <p>
                  Sed perspiciatis unde omnis este error voluptate accusant
                  doloremque systems.
                </p>
              </div>
            </div>
            <div
              className="col-lg-3 col-sm-6 wow fadeInUp"
              data-wow-delay="0.9s"
            >
              <div className="iconic-box m-b-50">
                <div className="icon">
                  <img src="assets/img/icon/tax.png" alt="Quality" />
                </div>
                <h5 className="title">
                  <a href="#">Tax &amp; Vat Advisory</a>
                </h5>
                <p>
                  Sed perspiciatis unde omnis este error voluptate accusant
                  doloremque systems.
                </p>
              </div>
            </div>
            <div className="col-12 text-center">
              <a
                href="#"
                className="template-btn primary-bg-4 bordered-btn shadow-none m-t-20"
              >
                View All Services <i className="fas fa-arrow-right" />
              </a>
            </div>
          </div>
        </div>
      </section>
      {/*====== Service Section End ======*/}
      {/*====== Call to Action Start ======*/}
      <section
        className="cta-section cta-section-with-bg p-t-120 p-b-120"
        style={{ backgroundImage: "url(assets/img/cta/cta-bg.jpg)" }}
      >
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-7 col-lg-8">
              <div className="cta-content">
                <div className="common-heading heading-white m-b-50 text-center">
                  <span className="tagline">Get Free Consultations</span>
                  <h2 className="title">
                    Want To Know More Informations About Fintech Solutions?
                  </h2>
                </div>
                <ul className="cta-btns justify-content-center">
                  <li className="wow fadeInUp" data-wow-delay="0.2s">
                    <Link href="/contact">
                      <a className="template-btn primary-bg-4 shadow-none">
                        Get Free Quote <i className="fas fa-arrow-right" />
                      </a>
                    </Link>
                  </li>
                  <li className="wow fadeInUp" data-wow-delay="0.3s">
                    <Link href="/services">
                      <a className="template-btn white-bg bordered-btn">
                        How it Work <i className="fas fa-arrow-right" />
                      </a>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*====== Call to Action End ======*/}
      {/*====== Start Brands Slider Area ======*/}
      <section className="brands-section bg-soft-grey-color p-t-80 p-b-80">
        <div className="container">
          <Slider
            {...brandslidertwoactive}
            className="brand-items brand-effect-one row brand-slider-two-active"
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
      </section>
      {/*====== End Brands Slider Area ======*/}
      {/*====== Recent Projects Start ======*/}
      <section className="recent-project-section p-t-130">
        <div className="container">
          <div className="row align-items-center justify-content-between">
            <div className="col-auto">
              <div className="common-heading m-b-40">
                <span className="tagline color-primary-4">Recent Projects</span>
                <h2 className="title">Latest Case Studies</h2>
              </div>
            </div>
            <div className="col-auto">
              <a
                href="#"
                className="template-btn primary-bg-4 bordered-btn shadow-none m-b-40"
              >
                View All Case <i className="fas fa-arrow-right" />
              </a>
            </div>
          </div>
          <div className="row justify-content-center recent-projects">
            <div
              className="col-lg-4 col-md-6 col-sm-10 wow fadeInUp"
              data-wow-delay="0.2s"
            >
              <div className="recent-project-item m-t-30">
                <div className="project-thumbnail hover-overly-zoom">
                  <img
                    src="assets/img/project/project-1.jpg"
                    alt="blog thumbnail one"
                  />
                </div>
                <div className="project-content">
                  <a href="#" className="project-cat">
                    Fintech Solutions
                  </a>
                  <h4 className="title">
                    Micro-Typograph How Space Punctuation Marks Other
                  </h4>
                  <Link href="/blog-details">
                    <a className="read-more-btn">
                      Read more <i className="fas fa-arrow-right" />
                    </a>
                  </Link>
                </div>
              </div>
            </div>
            <div
              className="col-lg-4 col-md-6 col-sm-10 wow fadeInUp"
              data-wow-delay="0.3s"
            >
              <div className="recent-project-item m-t-30">
                <div className="project-thumbnail hover-overly-zoom">
                  <img
                    src="assets/img/project/project-2.jpg"
                    alt="blog thumbnail one"
                  />
                </div>
                <div className="project-content">
                  <a href="#" className="project-cat">
                    Fintech Solutions
                  </a>
                  <h4 className="title">
                    Signs Website Feels Haunted House Than Welcoming
                  </h4>
                  <Link href="/blog-details">
                    <a className="read-more-btn">
                      Read more <i className="fas fa-arrow-right" />
                    </a>
                  </Link>
                </div>
              </div>
            </div>
            <div
              className="col-lg-4 col-md-6 col-sm-10 wow fadeInUp"
              data-wow-delay="0.4s"
            >
              <div className="recent-project-item m-t-30">
                <div className="project-thumbnail hover-overly-zoom">
                  <img
                    src="assets/img/project/project-3.jpg"
                    alt="blog thumbnail one"
                  />
                </div>
                <div className="project-content">
                  <a href="#" className="project-cat">
                    Fintech Solutions
                  </a>
                  <h4 className="title">
                    Great Expectas Using Story Principles Anticipate
                  </h4>
                  <Link href="/blog-details">
                    <a className="read-more-btn">
                      Read more <i className="fas fa-arrow-right" />
                    </a>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*====== Recent Projects End ======*/}
      {/*====== Testimonial Section Start ======*/}
      <section className="testimonial-project-section section-author-particle p-t-130 p-b-130">
        <div className="container">
          <div className="row align-items-center justify-content-center">
            <div className="col-lg-6 col-md-9">
              <div className="common-heading text-center m-b-50">
                <span className="tagline color-primary-4">Clients Reviews</span>
                <h2 className="title">
                  What Our Clients Say About Our Solutions
                </h2>
              </div>
            </div>
          </div>
          <Slider
            {...testimonialActiveFour}
            className="row testimonial-slider-v2"
            id="testimonialActiveFour"
          >
            <div className="col-12">
              <div className="testimonial-item">
                <div className="author-quote">
                  <img
                    src="assets/img/testimonial/author-2.png"
                    alt="testimonial-author"
                  />
                  <i className="flaticon-right-quote" />
                </div>
                <div className="testimonial-content">
                  <p>
                    Quis autem vel eumue reprehende quinea voluptate velit esse
                    quamncy molestiae conse quatur rem
                  </p>
                  <h5 className="author-name">
                    Marlon L. Gordon
                    <span className="author-position">Web Designer</span>
                  </h5>
                </div>
              </div>
            </div>
            <div className="col-12">
              <div className="testimonial-item">
                <div className="author-quote">
                  <img
                    src="assets/img/testimonial/author-2.png"
                    alt="testimonial-author"
                  />
                  <i className="flaticon-right-quote" />
                </div>
                <div className="testimonial-content">
                  <p>
                    Quis autem vel eumue reprehende quinea voluptate velit esse
                    quamncy molestiae conse quatur rem
                  </p>
                  <h5 className="author-name">
                    Richard J. Reinhold
                    <span className="author-position">Web Designer</span>
                  </h5>
                </div>
              </div>
            </div>
            <div className="col-12">
              <div className="testimonial-item">
                <div className="author-quote">
                  <img
                    src="assets/img/testimonial/author-3.png"
                    alt="testimonial-author"
                  />
                  <i className="flaticon-right-quote" />
                </div>
                <div className="testimonial-content">
                  <p>
                    Quis autem vel eumue reprehende quinea voluptate velit esse
                    quamncy molestiae conse quatur rem
                  </p>
                  <h5 className="author-name">
                    Richard J. Reinhold
                    <span className="author-position">Web Designer</span>
                  </h5>
                </div>
              </div>
            </div>
            <div className="col-12">
              <div className="testimonial-item">
                <div className="author-quote">
                  <img
                    src="assets/img/testimonial/author-2.png"
                    alt="testimonial-author"
                  />
                  <i className="flaticon-right-quote" />
                </div>
                <div className="testimonial-content">
                  <p>
                    Quis autem vel eumue reprehende quinea voluptate velit esse
                    quamncy molestiae conse quatur rem
                  </p>
                  <h5 className="author-name">
                    Marlon L. Gordon
                    <span className="author-position">Web Designer</span>
                  </h5>
                </div>
              </div>
            </div>
          </Slider>
        </div>
        <div className="author-particle-image d-none d-lg-block">
          <img
            src="assets/img/testimonial/author-particle-1.jpg"
            alt="Image"
            className="image-1 animate-zoom-fade"
          />
          <img
            src="assets/img/testimonial/author-particle-2.jpg"
            alt="Image"
            className="image-2 animate-float-bob-x"
          />
          <img
            src="assets/img/testimonial/author-particle-3.jpg"
            alt="Image"
            className="image-3 animate-zoom-fade"
          />
          <img
            src="assets/img/testimonial/author-particle-4.jpg"
            alt="Image"
            className="image-4 animate-float-bob-x"
          />
        </div>
      </section>
      {/*====== Testimonial Section Start ======*/}
      {/*====== Newsletter Section Start ======*/}
      <section className="newsletter-section bg-primary-color-4 p-t-70 p-b-75">
        <div className="container">
          <div className="row align-items-center justify-content-center">
            <div className="col-xl-6 col-lg-9">
              <div className="newsletter-content m-b-md-40">
                <div className="common-heading heading-white">
                  <h3 className="title m-b-15">Subscribe Newsletters</h3>
                  <p className="text-white">
                    Empower SEO teams to find the best growth opportunities
                  </p>
                </div>
              </div>
            </div>
            <div className="col-xl-6 col-lg-9">
              <form className="newsletter-form form-two have-form-radius">
                <div className="input-field">
                  <input
                    type="email"
                    id="emailAddress"
                    placeholder="Email Address"
                  />
                  <button
                    type="submit"
                    className="template-btn white-bg bordered-btn"
                  >
                    Subscribe Now <i className="fas fa-arrow-right" />
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
      {/*====== Newsletter Section End ======*/}
      {/*====== Start Scroll To Top ======*/}
      <a href="#" className="back-to-top" id="scroll-top">
        <i className="far fa-angle-up" />
      </a>
      {/*====== End Scroll To Top ======*/}
      {/*====== Start Footer ======*/}
      <footer className="template-footer footer-secondary-4-bg">
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
                  <ul className="social-links m-t-20">
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
                <div className="widget contact-widget pl-xl-4">
                  <h5 className="widget-title">Contact Us</h5>
                  <ul>
                    <li>
                      <a href="#">
                        <i className="fal fa-map-marker-alt" />
                        55 Old Broad Street, London, EC2M
                      </a>
                    </li>
                    <li>
                      <a href="mailto:support@gmail.com">
                        <i className="fal fa-envelope-open-text" />
                        support@gmail.com
                      </a>
                    </li>
                    <li>
                      <a href="tel:+01234567899">
                        <i className="fal fa-phone" />
                        +012 (345) 678 99
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              {/* Single Footer Widget */}
              <div className="col-lg-3 col-md-6 col-sm-6">
                <div className="widget instagram-feed">
                  <h5 className="widget-title">Gallery</h5>
                  <div className="instagram-images">
                    <div className="single-img">
                      <img
                        src="assets/img/instagram-thumb/instagram-image-1.jpg"
                        alt="Image"
                      />
                      <a href="#">
                        <i className="far fa-plus" />
                      </a>
                    </div>
                    <div className="single-img">
                      <img
                        src="assets/img/instagram-thumb/instagram-image-2.jpg"
                        alt="Image"
                      />
                      <a href="#">
                        <i className="far fa-plus" />
                      </a>
                    </div>
                    <div className="single-img">
                      <img
                        src="assets/img/instagram-thumb/instagram-image-3.jpg"
                        alt="Image"
                      />
                      <a href="#">
                        <i className="far fa-plus" />
                      </a>
                    </div>
                    <div className="single-img">
                      <img
                        src="assets/img/instagram-thumb/instagram-image-4.jpg"
                        alt="Image"
                      />
                      <a href="#">
                        <i className="far fa-plus" />
                      </a>
                    </div>
                    <div className="single-img">
                      <img
                        src="assets/img/instagram-thumb/instagram-image-5.jpg"
                        alt="Image"
                      />
                      <a href="#">
                        <i className="far fa-plus" />
                      </a>
                    </div>
                    <div className="single-img">
                      <img
                        src="assets/img/instagram-thumb/instagram-image-6.jpg"
                        alt="Image"
                      />
                      <a href="#">
                        <i className="far fa-plus" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="footer-copyright">
            <p className="copyright-text text-center pt-4 pt-sm-0">
              © 2021 <a href="#">Landio</a>. All Rights Reserved
            </p>
          </div>
        </div>
      </footer>
    </Layouts>
  );
};

export default Index6;
