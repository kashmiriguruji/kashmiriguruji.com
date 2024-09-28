import Link from "next/link";
import { useState } from "react";
import Slider from "react-slick";
import Counter from "../src/components/Counter";
import VideoPopup from "../src/components/VideoPopup";
import Header5 from "../src/layouts/headers/Header5";
import Layouts from "../src/layouts/Layouts";
import { testimonialActiveThree } from "../src/sliderProps";

const Index5 = () => {
  const [video, setVideo] = useState(false);
  return (
    <Layouts noHeader noFooter>
      {video && <VideoPopup close={setVideo} />}
      <Header5 />
      <section className="hero-area-v5">
        <div className="container">
          <div className="row align-items-center justify-content-between">
            <div className="col-lg-8">
              <div className="hero-content wow fadeInUp" data-wow-delay="0.3s">
                <h1 className="hero-title">
                  Get Solutions to Expert Consultant
                </h1>
                <p>
                  Sed ut perspiciatis unde omnis iste natus error voluptatem
                  accusanti doloremque laudantium totam rem aperiam
                </p>
                <ul className="hero-btns d-flex align-items-center">
                  <li>
                    <Link href="/services">
                      <a className="template-btn shadow-none">
                        Discover More <i className="fas fa-arrow-right" />
                      </a>
                    </Link>
                  </li>
                  <li>
                    <a
                      href="#"
                      onClick={() => setVideo(true)}
                      className="play-btn popup-video"
                    >
                      <i className="fas fa-play" />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div
            className="hero-thumbnail-wrap wow fadeInUp"
            data-wow-delay="0.3s"
          >
            <div
              className="hero-thumbnail"
              style={{
                backgroundImage: "url(assets/img/hero/hero-5-thumbnail.jpg)",
              }}
            />
          </div>
        </div>
      </section>
      {/*====== End Hero Area ======*/}
      {/*====== Statistics Area Start ======*/}
      <section className="statistics-section p-t-130 p-b-100">
        <div className="container">
          <div className="row justify-content-lg-between justify-content-center">
            <div className="col-xl-4 col-lg-5 col-md-8">
              <div className="common-heading m-b-md-80">
                <h2 className="title m-b-20">Company Statistics</h2>
                <p>
                  Sed perspicias unde omnis iste natus error voluptatem
                  accusantium dolorem laudanme totam rem aperiam eaque quae.
                </p>
                <a href="#" className="template-btn bordered-btn m-t-35">
                  Learn More <i className="far fa-arrow-right" />
                </a>
              </div>
            </div>
            <div className="col-lg-6 col-md-10">
              <div className="row counter-items-v2">
                <div
                  className="col-md-6 col-sm-6 wow fadeInUp"
                  data-wow-delay="0.1s"
                >
                  <div className="counter-item counter-left m-b-60">
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
                  className="col-md-6 col-sm-6 wow fadeInUp"
                  data-wow-delay="0.2s"
                >
                  <div className="counter-item counter-left m-b-60">
                    <div className="counter-wrap">
                      <Counter end={75} />
                      <span className="suffix">
                        <i className="far fa-plus" />
                      </span>
                    </div>
                    <p className="title">SEO Project Complete</p>
                  </div>
                </div>
                <div
                  className="col-md-6 col-sm-6 wow fadeInUp"
                  data-wow-delay="0.3s"
                >
                  <div className="counter-item counter-left m-b-60">
                    <div className="counter-wrap">
                      <Counter end={94} />
                      <span className="suffix">
                        <i className="far fa-plus" />
                      </span>
                    </div>
                    <p className="title">Experience Members</p>
                  </div>
                </div>
                <div
                  className="col-md-6 col-sm-6 wow fadeInUp"
                  data-wow-delay="0.4s"
                >
                  <div className="counter-item counter-left m-b-60">
                    <div className="counter-wrap">
                      <Counter end={28} />
                      <span className="suffix">
                        <i className="far fa-plus" />
                      </span>
                    </div>
                    <p className="title">Years Provide services</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*====== Statistics Area End ======*/}
      {/*====== Services Section Start ======*/}
      <section className="service-section bg-soft-grey-color p-t-130 p-b-130">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-6 col-md-10">
              <div className="common-heading text-center m-b-50">
                <h2 className="title m-b-20">Popular Services</h2>
                <p>
                  Sed perspicias unde omnis iste natus error voluptatem
                  accusantium dolorem laudanme totam rem aperiam eaque quae.
                </p>
              </div>
            </div>
          </div>
          <div className="row image-boxes-v2">
            <div
              className="col-lg-3 col-sm-6 wow fadeInUp"
              data-wow-delay="0.2s"
            >
              <div className="image-box m-t-30">
                <div className="box-image hover-overly-zoom">
                  <img
                    src="assets/img/services/service-img-1.jpg"
                    alt="Image"
                  />
                </div>
                <div className="box-content">
                  <h5 className="title">
                    <Link href="/service-details">Digital Marketing</Link>
                  </h5>
                  <p>Reduce your time - market and create capitalize</p>
                  <Link href="/service-details">
                    <a className="box-link">
                      Read More <i className="fas fa-arrow-right" />
                    </a>
                  </Link>
                </div>
              </div>
            </div>
            <div
              className="col-lg-3 col-sm-6 wow fadeInUp"
              data-wow-delay="0.3s"
            >
              <div className="image-box m-t-30">
                <div className="box-image hover-overly-zoom">
                  <img
                    src="assets/img/services/service-img-2.jpg"
                    alt="Image"
                  />
                </div>
                <div className="box-content">
                  <h5 className="title">
                    <Link href="/service-details">Email Marketing</Link>
                  </h5>
                  <p>Reduce your time - market and create capitalize</p>
                  <Link href="/service-details">
                    <a className="box-link">
                      Read More <i className="fas fa-arrow-right" />
                    </a>
                  </Link>
                </div>
              </div>
            </div>
            <div
              className="col-lg-3 col-sm-6 wow fadeInUp"
              data-wow-delay="0.4s"
            >
              <div className="image-box m-t-30">
                <div className="box-image hover-overly-zoom">
                  <img
                    src="assets/img/services/service-img-3.jpg"
                    alt="Image"
                  />
                </div>
                <div className="box-content">
                  <h5 className="title">
                    <Link href="/service-details">Marketing Strategy</Link>
                  </h5>
                  <p>Reduce your time - market and create capitalize</p>
                  <Link href="/service-details">
                    <a className="box-link">
                      Read More <i className="fas fa-arrow-right" />
                    </a>
                  </Link>
                </div>
              </div>
            </div>
            <div
              className="col-lg-3 col-sm-6 wow fadeInUp"
              data-wow-delay="0.5s"
            >
              <div className="image-box m-t-30">
                <div className="box-image hover-overly-zoom">
                  <img
                    src="assets/img/services/service-img-4.jpg"
                    alt="Image"
                  />
                </div>
                <div className="box-content">
                  <h5 className="title">
                    <Link href="/service-details">Web Development</Link>
                  </h5>
                  <p>Reduce your time - market and create capitalize</p>
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
      {/*====== Services Section End ======*/}
      {/*====== Simple Call To Action Start ======*/}
      <section className="simple-cta">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-8 col-lg-10">
              <div className="row align-items-center justify-content-lg-between justify-content-center">
                <div className="col-lg-8 col-md-auto">
                  <h4 className="cta-title m-b-md-30 text-center text-lg-left">
                    Organize Your Business, Your Way, All In One Place
                  </h4>
                </div>
                <div className="col-auto">
                  <a href="#" className="template-btn white-bg bordered-btn">
                    Contact Us <i className="far fa-arrow-right" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*====== Simple Call To Action End ======*/}
      {/*====== Start Why Choose Us Section ======*/}
      <section className="wcu-section p-t-130 p-b-130">
        <div className="container">
          <div className="row justify-content-lg-between justify-content-center align-items-center">
            <div className="col-lg-6 col-md-10">
              <div className="preview-square-oval-image m-b-md-60">
                <div className="square-image hover-overly-left-to-right">
                  <img
                    src="assets/img/preview-gallery/why-choose-us-1.jpg"
                    alt="Image"
                  />
                </div>
                <div className="oval-image animate-float-bob-y hover-overly-zoom">
                  <img
                    src="assets/img/preview-gallery/why-choose-us-2.jpg"
                    alt="Image"
                  />
                </div>
              </div>
            </div>
            <div className="col-xl-5 col-lg-6 col-md-9">
              <div className="common-heading m-b-50">
                <h2 className="title m-b-20">Why Choose Us</h2>
                <p>
                  Sed ut perspiciatis unde omnis iste natus error sity
                  voluptatem accusantium doloremque laudantie totam rem aperiam
                  eaque quae abillo inventore.
                </p>
              </div>
              <ul className="fancy-check-list-v2">
                <li className="wow fadeInUp" data-wow-delay="0.2s">
                  <span className="list-inner">
                    Easy To Collaborate With User
                  </span>
                </li>
                <li className="wow fadeInUp" data-wow-delay="0.3s">
                  <span className="list-inner">
                    Manage Team &amp; Users Flow
                  </span>
                </li>
                <li className="wow fadeInUp" data-wow-delay="0.4s">
                  <span className="list-inner">
                    Market Participant Perspective
                  </span>
                </li>
                <li className="wow fadeInUp" data-wow-delay="0.5s">
                  <span className="list-inner">Upgrade Dashboard Systems</span>
                </li>
                <li className="wow fadeInUp" data-wow-delay="0.6s">
                  <span className="list-inner">
                    Institutional Grade Solutions
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      {/*====== End Why Choose Us Section ======*/}
      {/*====== Start Testimonial Section ======*/}
      <section className="testimonials-section bg-soft-grey-color p-t-130 p-b-130">
        <div className="container">
          <div className="row align-items-center justify-content-lg-between justify-content-center">
            <div className="col-lg-6 col-md-9 col-sm-11 order-lg-last">
              <div className="preview-square-oval-image with-counter-box m-b-md-60">
                <div className="counter-item animate-float-bob-x">
                  <div className="count-icon">
                    <i className="fas fa-star" />
                  </div>
                  <div className="count-details">
                    <span className="counter">23684</span>
                    <p>Clients Say Us</p>
                  </div>
                </div>
                <div className="square-image hover-overly-left-to-right">
                  <img
                    src="assets/img/preview-gallery/testimonial-right-thumbnail-1.jpg"
                    alt="Image"
                  />
                </div>
                <div className="oval-image animate-float-bob-y hover-overly-zoom">
                  <img
                    src="assets/img/preview-gallery/testimonial-right-thumbnail-2.jpg"
                    alt="Image"
                  />
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-md-10 order-lg-first">
              <div className="common-heading m-b-60 m-b-md-0">
                <h2 className="title">
                  What Our Clients <br /> Say About us
                </h2>
              </div>
              <Slider
                {...testimonialActiveThree}
                className="testimonial-slider-v1 testimonial-v1-fancy-boxed testimonial-extra-margin"
                id="testimonialActiveThree"
              >
                <div className="testimonial-item">
                  <div className="quote-icon">
                    <i className="flaticon-right-quote" />
                  </div>
                  <p>
                    Quis autem vel eum iure reprehenderit qui in ea voluptate
                    velit esse quam nihil molestiae conse quatur vellum rem
                  </p>
                  <div className="author-info">
                    <img
                      src="assets/img/testimonial/author-2.png"
                      alt="testimonial author"
                    />
                    <h6 className="name">Ricky L. Simpson</h6>
                    <span className="title">Web Designer</span>
                  </div>
                </div>
                <div className="testimonial-item">
                  <div className="quote-icon">
                    <i className="flaticon-right-quote" />
                  </div>
                  <p>
                    Quis autem vel eum iure reprehenderit qui in ea voluptate
                    velit esse quam nihil molestiae conse quatur vellum rem
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
              </Slider>
            </div>
          </div>
        </div>
      </section>
      {/*====== End Testimonial Section ======*/}
      {/*====== Start Contact Section ======*/}
      <section className="contact-section p-t-130 p-b-130">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-5 col-lg-8 col-md-9 col-sm-11">
              <div className="common-heading text-center m-b-60">
                <h2 className="title">
                  Need Free Consultation to Your Next Project
                </h2>
              </div>
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col-xl-10 col-lg-12">
              <div className="row justify-content-lg-between justify-content-center align-items-center">
                <div className="col-lg-5 col-md-8 col-sm-11">
                  <div className="contact-info-boxes-v1">
                    <div
                      className="contact-info-box wow fadeInUp"
                      data-wow-delay="0.3s"
                    >
                      <h4 className="title">
                        Ready to Work Together For Better Solutions{" "}
                      </h4>
                      <Link href="/team">
                        <a className="template-btn bordered-btn">
                          Join with us <i className="far fa-arrow-right" />
                        </a>
                      </Link>
                    </div>
                    <div
                      className="contact-info-box wow fadeInUp"
                      data-wow-delay="0.4s"
                    >
                      <h4 className="title">
                        Build A Better Career With <span>Landio</span>
                      </h4>
                      <Link href="/about">
                        <a className="template-btn bordered-btn">
                          View Our Jobs <i className="far fa-arrow-right" />
                        </a>
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6 col-md-10">
                  <div className="contact-form-v1 m-t-md-50">
                    <form action="#">
                      <div className="input-field">
                        <input
                          type="text"
                          id="fullName"
                          placeholder="Your Full Name"
                          name="name"
                          required
                        />
                      </div>
                      <div className="input-field">
                        <input
                          type="email"
                          id="yourEmail"
                          placeholder="Email Address"
                          name="email"
                          required
                        />
                      </div>
                      <div className="input-field">
                        <select name="subject">
                          <option>Subject You Like</option>
                          <option value="knowsomething">About Us</option>
                          <option value="sayhello">Say Hello</option>
                          <option value="askme">Ask Me</option>
                        </select>
                      </div>
                      <div className="input-field">
                        <textarea
                          id="message"
                          placeholder="Write Message"
                          name="message"
                          defaultValue={""}
                        />
                      </div>
                      <div className="input-field">
                        <button type="submit" className="template-btn">
                          Get Free Quote <i className="far fa-arrow-right" />
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*====== End Contact Section ======*/}
      {/*====== Start Latest Blog With SEO score box ======*/}
      <section className="latest-news-with-seo-box">
        {/*====== Start SEO score box ======*/}
        <div className="container">
          <div
            className="seo-score-box newsletters-form particle-image-two wow fadeInDown"
            data-wow-delay="0.3s"
          >
            <div className="row justify-content-center">
              <div className="col-xl-8 col-md-10 col-11">
                <div className="score-box-content">
                  <h2 className="score-box-title">Subscribe Newsletters</h2>
                  <p>Empower SEO teams to find the best growth opportunities</p>
                </div>
                <form className="score-box-form">
                  <div className="form-group">
                    <input
                      type="text"
                      name="website"
                      id="yourWebsite"
                      placeholder="Your Name"
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
                      Subscribe Now <i className="fas fa-arrow-right" />
                    </button>
                  </div>
                </form>
              </div>
            </div>
            <div className="seo-images d-none d-xl-block" />
          </div>
        </div>
        {/*====== End SEO score box ======*/}
        {/*====== Start Latest News ======*/}
        <div className="latest-news-section bg-dark-color">
          <div className="container">
            <div className="row align-items-center justify-content-between">
              <div className="col-lg-5">
                <div className="common-heading heading-white m-b-30">
                  <h2 className="title m-b-15">News &amp; Blog</h2>
                  <p className="text-white">
                    Sed ut perspiciatis unde omnis iste natus error sity
                    voluptatem accusantium doloremque
                  </p>
                </div>
              </div>
              <div className="col-auto">
                <Link href="/blog-standard">
                  <a className="template-btn white-bg bordered-btn m-b-30">
                    View More News <i className="far fa-arrow-right" />
                  </a>
                </Link>
              </div>
            </div>
            <div className="row justify-content-center latest-news-v1">
              <div
                className="col-lg-4 col-md-6 col-sm-10 wow fadeInUp"
                data-wow-delay="0.2s"
              >
                <div className="latest-news-box m-t-30">
                  <div className="post-thumbnail hover-overly-zoom">
                    <img
                      src="assets/img/blog/blog-thumbnail-1.jpg"
                      alt="Thumbnail"
                    />
                    <div className="post-tag">
                      <a href="#">SEO</a>
                    </div>
                  </div>
                  <div className="post-content">
                    <ul className="post-meta">
                      <li>
                        <a href="#">
                          <i className="far fa-calendar-alt" />
                          25 May 2021
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fas fa-comment-dots" />
                          Com (05)
                        </a>
                      </li>
                    </ul>
                    <h4 className="title">
                      <Link href="/blog-details">
                        Data Visualization Improve Mobile Experience.
                      </Link>
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
                <div className="latest-news-box m-t-30">
                  <div className="post-thumbnail hover-overly-zoom">
                    <img
                      src="assets/img/blog/blog-thumbnail-2.jpg"
                      alt="Thumbnail"
                    />
                    <div className="post-tag">
                      <a href="#">SEO</a>
                    </div>
                  </div>
                  <div className="post-content">
                    <ul className="post-meta">
                      <li>
                        <a href="#">
                          <i className="far fa-calendar-alt" />
                          25 May 2021
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fas fa-comment-dots" />
                          Com (05)
                        </a>
                      </li>
                    </ul>
                    <h4 className="title">
                      <Link href="/blog-details">
                        Make Honest Design Work Digital Business Ways.
                      </Link>
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
                <div className="latest-news-box m-t-30">
                  <div className="post-thumbnail hover-overly-zoom">
                    <img
                      src="assets/img/blog/blog-thumbnail-7.jpg"
                      alt="Thumbnail"
                    />
                    <div className="post-tag">
                      <a href="#">SEO</a>
                    </div>
                  </div>
                  <div className="post-content">
                    <ul className="post-meta">
                      <li>
                        <a href="#">
                          <i className="far fa-calendar-alt" />
                          25 May 2021
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fas fa-comment-dots" />
                          Com (05)
                        </a>
                      </li>
                    </ul>
                    <h4 className="title">
                      <Link href="/blog-details">
                        Should You Do When Web Design Trend Becomes
                      </Link>
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
        </div>
        {/*====== End Latest News ======*/}
      </section>
      {/*====== End Latest Blog With SEO score box ======*/}
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
                        <Link href="/services">Success History</Link>
                      </li>
                      <li>
                        <Link href="/services">Setting &amp; Privacy</Link>
                      </li>
                      <li>
                        <Link href="/services">Company History</Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              {/* Single Footer Widget */}
              <div className="col-lg-3 col-md-6 col-sm-6">
                <div className="widget contact-widget pl-xl-5">
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
            </div>
          </div>
        </div>
        <div className="footer-copyright border-top-primary">
          <div className="container">
            <div className="row align-items-center justify-content-between">
              <div className="col-sm-auto col-12">
                <div className="copyright-logo text-center text-sm-left">
                  <img src="assets/img/logo-1.png" alt="Landio" />
                </div>
              </div>
              <div className="col-sm-auto col-12">
                <p className="copyright-text text-center text-sm-right pt-4 pt-sm-0">
                  © 2021 <a href="#">Landio</a>. All Rights Reserved
                </p>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </Layouts>
  );
};

export default Index5;
