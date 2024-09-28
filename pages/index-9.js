import Link from "next/link";
import { useState } from "react";
import { Nav, Tab } from "react-bootstrap";
import Slider from "react-slick";
import AccordionV2 from "../src/components/AccordionV2";
import Counter from "../src/components/Counter";
import VideoPopup from "../src/components/VideoPopup";
import Header9 from "../src/layouts/headers/Header9";
import Layouts from "../src/layouts/Layouts";
import { teamSliderOne, testimonialActiveOne } from "../src/sliderProps";

const Index9 = () => {
  const [video, setVideo] = useState(false);
  return (
    <Layouts noFooter noHeader>
      {video && <VideoPopup close={setVideo} />}
      <Header9 />
      <section className="hero-area-v9">
        <div className="container">
          <div className="row no-gutters">
            <div className="col-xl-6 col-lg-6 col-md-5">
              <div className="hero-content">
                <h1 className="hero-title wow fadeInDown" data-wow-delay="0.3s">
                  Webinar 2021
                </h1>
                <p className="wow fadeInLeft" data-wow-delay="0.4s">
                  Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                  accusantium doloremque laudantium, totam rem aperiam, eaque
                  ipsa quae ab illo inventore veritatis
                </p>
                <a
                  href="#"
                  className="template-btn template-btn-3 wow fadeInUp"
                  data-wow-delay="0.5s"
                >
                  BOOK YOUR SEAT
                </a>
              </div>
            </div>
            <div className="col-xl-6 col-lg-6 col-md-7">
              <div className="hero-images wow fadeInUp" data-wow-delay="0.3s">
                <div className="image-one">
                  <div className="image-inner">
                    <img
                      src="assets/img/webinar/webinar-hero-1.jpg"
                      alt="HeroImage"
                    />
                  </div>
                </div>
                <div className="image-two">
                  <div className="image-inner">
                    <img
                      src="assets/img/webinar/webinar-hero-2.jpg"
                      alt="HeroImage"
                    />
                  </div>
                </div>
                <div className="image-three">
                  <div className="image-inner">
                    <img
                      src="assets/img/webinar/webinar-hero-3.jpg"
                      alt="HeroImage"
                    />
                  </div>
                </div>
                <div className="image-four">
                  <div className="image-inner">
                    <img
                      src="assets/img/webinar/webinar-hero-4.jpg"
                      alt="HeroImage"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*====== End Hero Area ======*/}
      {/*====== Learning Process Start ======*/}
      <section className="learning-process p-t-150 p-b-130">
        <div className="container">
          <div className="common-heading-2 text-center m-b-40">
            <span className="tagline">How to Learn</span>
            <h2 className="title">What You’ll Learn From Webinar 2021</h2>
          </div>
          <div className="row justify-content-center">
            <div
              className="col-lg-3 col-md-6 col-sm-6 col-10 wow fadeInUp"
              data-wow-delay="0.2s"
            >
              <div className="icon-boxes-v4 m-t-30">
                <div className="icon">
                  <img src="assets/img/webinar/icon-1.png" alt="Icon" />
                </div>
                <h5 className="title">
                  <a href="#">Establishing Ideal Resources</a>
                </h5>
                <p>Sed ut perspiciatis undes natus error voliey</p>
              </div>
            </div>
            <div
              className="col-lg-3 col-md-6 col-sm-6 col-10 wow fadeInUp"
              data-wow-delay="0.3s"
            >
              <div className="icon-boxes-v4 m-t-30">
                <div className="icon">
                  <img src="assets/img/webinar/icon-2.png" alt="Icon" />
                </div>
                <h5 className="title">
                  <a href="#">Best Synchronizing Workflows</a>
                </h5>
                <p>Quis autere prehe nderit suin easy voluptate</p>
              </div>
            </div>
            <div
              className="col-lg-3 col-md-6 col-sm-6 col-10 wow fadeInUp"
              data-wow-delay="0.4s"
            >
              <div className="icon-boxes-v4 m-t-30">
                <div className="icon">
                  <img src="assets/img/webinar/icon-3.png" alt="Icon" />
                </div>
                <h5 className="title">
                  <a href="#">Effective Resource Allocation</a>
                </h5>
                <p>On the other hand denoun with righteous nation</p>
              </div>
            </div>
            <div
              className="col-lg-3 col-md-6 col-sm-6 col-10 wow fadeInUp"
              data-wow-delay="0.5s"
            >
              <div className="icon-boxes-v4 m-t-30">
                <div className="icon">
                  <img src="assets/img/webinar/icon-4.png" alt="Icon" />
                </div>
                <h5 className="title">
                  <a href="#">Professional Support For Business</a>
                </h5>
                <p>Sed ut perspiciatis undes natus error voliey</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*====== Learning Process End ======*/}
      {/*====== About Section Start ======*/}
      <section className="about-section">
        <div className="container">
          <div className="row justify-content-lg-between justify-content-center align-items-center">
            <div className="col-lg-7 col-md-10">
              <div className="preview-image-v6 m-b-md-50">
                <div className="image-one wow fadeInLeft" data-wow-delay="0.3s">
                  <img
                    src="assets/img/webinar/preview-gallery-01.jpg"
                    alt="Image"
                  />
                </div>
                <div className="image-two">
                  <img
                    src="assets/img/webinar/preview-gallery-02.jpg"
                    alt="Image"
                  />
                </div>
                <div
                  className="video-wrap wow fadeInUp"
                  data-wow-delay="0.4s"
                  style={{
                    backgroundImage:
                      "url(assets/img/webinar/preview-gallery-03.jpg)",
                  }}
                >
                  <a
                    href="#"
                    onClick={() => setVideo(true)}
                    className="popup-video"
                  >
                    <i className="fas fa-play" />
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-5 col-md-8">
              <div className="about-text pl-xl-5">
                <div className="common-heading-2 m-b-20">
                  <span className="tagline">About us</span>
                  <h2 className="title">The Webinar 2021 Experience</h2>
                </div>
                <p>
                  Sed ut perspiciatis unde omnis iste natus error voluptatem
                  accusantium doloremque laudantium totam rem aperiam eaque quae
                  abillo inventore veritatis quasi architecto beatae vitae.
                </p>
                <a href="#" className="template-btn template-btn-3 m-t-30">
                  Learn More
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*====== About Section End ======*/}
      {/*====== Team Member Start ======*/}
      <section className="team-section p-t-130 p-b-70">
        <div className="container-fluid fluid-gap-70">
          <div className="common-heading-2 text-center m-b-70">
            <span className="tagline">Meet the team</span>
            <h2 className="title">Our Exclusive Speakers</h2>
          </div>
          <Slider
            {...teamSliderOne}
            className="row team-members-two"
            id="teamSliderOne"
          >
            <div className="col">
              <div className="member-box m-b-60">
                <div className="member-photo">
                  <img
                    src="assets/img/webinar/team-05.jpg"
                    alt="Member Image"
                  />
                </div>
                <div className="member-info">
                  <h4>John T. Johnson</h4>
                  <p>Web Developer</p>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="member-box m-b-60">
                <div className="member-photo">
                  <img
                    src="assets/img/webinar/team-04.jpg"
                    alt="Member Image"
                  />
                </div>
                <div className="member-info">
                  <h4>Russell M. Bucher</h4>
                  <p>Web Developer</p>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="member-box m-b-60">
                <div className="member-photo">
                  <img
                    src="assets/img/webinar/team-03.jpg"
                    alt="Member Image"
                  />
                </div>
                <div className="member-info">
                  <h4>Patrick R. Aleshire</h4>
                  <p>Web Developer</p>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="member-box m-b-60">
                <div className="member-photo">
                  <img
                    src="assets/img/webinar/team-02.jpg"
                    alt="Member Image"
                  />
                </div>
                <div className="member-info">
                  <h4>Rafael E. Kennison</h4>
                  <p>Web Developer</p>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="member-box m-b-60">
                <div className="member-photo">
                  <img
                    src="assets/img/webinar/team-01.jpg"
                    alt="Member Image"
                  />
                </div>
                <div className="member-info">
                  <h4>William P. Britton</h4>
                  <p>Web Developer</p>
                </div>
              </div>
            </div>
          </Slider>
        </div>
      </section>
      {/*====== Team Member End ======*/}
      {/*====== Counter Section Start ======*/}
      <section className="counter-section p-t-80 p-b-40 border-top-secondary">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-10 col-lg-11">
              <div className="row justify-content-lg-between justify-content-center counter-items-v2">
                <div className="col-lg-4 col-sm-6">
                  <div className="counter-item counter-left m-b-40">
                    <div className="counter-wrap">
                      <Counter end={35} />
                    </div>
                    <p className="title">Our Trusted Active Clients</p>
                  </div>
                </div>
                <div className="col-lg-3 col-sm-6">
                  <div className="counter-item counter-left m-b-40">
                    <div className="counter-wrap">
                      <Counter end={94} />
                    </div>
                    <p className="title">Experience Members</p>
                  </div>
                </div>
                <div className="col-lg-4 col-sm-6">
                  <div className="counter-item counter-left m-b-40">
                    <div className="counter-wrap">
                      <Counter end={28} />
                    </div>
                    <p className="title">
                      Years Provide <br /> Service
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*====== Counter Section End ======*/}
      {/*====== Start Testimonial With Video ======*/}
      <div className="testimonial-with-video">
        <div className="container">
          <div
            className="landio-video"
            style={{
              backgroundImage: "url(assets/img/webinar/webinar-video.jpg)",
            }}
          >
            <a
              href="#"
              onClick={() => setVideo(true)}
              className="play-btn popup-video color-primary-7"
            >
              <i className="fas fa-play" />
            </a>
          </div>
        </div>
        {/*====== Start Testimonials ======*/}
        <section className="testimonials-section bg-secondary-color-7 section-dots-pattern">
          <div className="container">
            <Slider
              {...testimonialActiveOne}
              className="row testimonial-boxes-v1 testimonial-dots-3"
              id="testimonialActiveOne"
            >
              <div className="col">
                <div className="testimonial-box m-t-30">
                  <div className="author-rating">
                    <ul className="rating-review">
                      <li>
                        <i className="fa fa-star" />
                      </li>
                      <li>
                        <i className="fa fa-star" />
                      </li>
                      <li>
                        <i className="fa fa-star" />
                      </li>
                      <li>
                        <i className="fa fa-star" />
                      </li>
                      <li>
                        <i className="fa fa-star" />
                      </li>
                    </ul>
                    <div className="author-brand">
                      <img
                        src="assets/img/testimonial/author-brand-1.png"
                        alt="Brand"
                      />
                    </div>
                  </div>
                  <p className="author-comments">
                    Sed perspicia unde omnis natuscis error sit volupt accusa
                    doloremquey laudantium totam rem aperiam ses eaque quae
                    denouncing
                  </p>
                  <div className="author-info">
                    <img
                      src="assets/img/testimonial/author-small-1.png"
                      alt="testimonial author"
                    />
                    <h6 className="name">
                      Michael W. Kirwan{" "}
                      <span className="title">CEO &amp; founder</span>
                    </h6>
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="testimonial-box m-t-30">
                  <div className="author-rating">
                    <ul className="rating-review">
                      <li>
                        <i className="fa fa-star" />
                      </li>
                      <li>
                        <i className="fa fa-star" />
                      </li>
                      <li>
                        <i className="fa fa-star" />
                      </li>
                      <li>
                        <i className="fa fa-star" />
                      </li>
                      <li>
                        <i className="fa fa-star" />
                      </li>
                    </ul>
                    <div className="author-brand">
                      <img
                        src="assets/img/testimonial/author-brand-2.png"
                        alt="Brand"
                      />
                    </div>
                  </div>
                  <p className="author-comments">
                    At vero eos et accusamus et iustoy dignissimos ducimus quies
                    blanditiis praesentium voluptatum.
                  </p>
                  <div className="author-info">
                    <img
                      src="assets/img/testimonial/author-small-2.png"
                      alt="testimonial author"
                    />
                    <h6 className="name">
                      Eugene S. Smith{" "}
                      <span className="title">Senior Manager</span>
                    </h6>
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="testimonial-box m-t-30">
                  <div className="author-rating">
                    <ul className="rating-review">
                      <li>
                        <i className="fa fa-star" />
                      </li>
                      <li>
                        <i className="fa fa-star" />
                      </li>
                      <li>
                        <i className="fa fa-star" />
                      </li>
                      <li>
                        <i className="fa fa-star" />
                      </li>
                      <li>
                        <i className="fa fa-star" />
                      </li>
                    </ul>
                    <div className="author-brand">
                      <img
                        src="assets/img/testimonial/author-brand-4.png"
                        alt="Brand"
                      />
                    </div>
                  </div>
                  <p className="author-comments">
                    Nam libero tempore cum sole nobis eligendi cumque impedite
                  </p>
                  <div className="author-info">
                    <img
                      src="assets/img/testimonial/author-small-4.png"
                      alt="testimonial author"
                    />
                    <h6 className="name">
                      Ronald A. Kawakami{" "}
                      <span className="title">Web Developer</span>
                    </h6>
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="testimonial-box m-t-30">
                  <div className="author-rating">
                    <ul className="rating-review">
                      <li>
                        <i className="fa fa-star" />
                      </li>
                      <li>
                        <i className="fa fa-star" />
                      </li>
                      <li>
                        <i className="fa fa-star" />
                      </li>
                      <li>
                        <i className="fa fa-star" />
                      </li>
                      <li>
                        <i className="fa fa-star" />
                      </li>
                    </ul>
                    <div className="author-brand">
                      <img
                        src="assets/img/testimonial/author-brand-6.png"
                        alt="Brand"
                      />
                    </div>
                  </div>
                  <p className="author-comments">
                    Quis autem vel eumr eprehenderit quinea voluptate.
                  </p>
                  <div className="author-info">
                    <img
                      src="assets/img/testimonial/author-small-6.png"
                      alt="testimonial author"
                    />
                    <h6 className="name">
                      Ronald A. Kawakami{" "}
                      <span className="title">Web Developer</span>
                    </h6>
                  </div>
                </div>
              </div>
            </Slider>
          </div>
        </section>
        {/*====== End Testimonials ======*/}
      </div>
      {/*====== End Testimonial With Video ======*/}
      {/*====== Start FAQ section ======*/}
      <section className="fag-section p-t-130 p-b-130">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <div className="common-heading-2 text-center m-b-50">
                <span className="tagline">Have Any Question</span>
                <h2 className="title">Frequently Asked Questions</h2>
              </div>
              <Tab.Container defaultActiveKey="general">
                <div className="accordion-tab">
                  <Nav
                    as="ul"
                    className="nav nav-tabs"
                    id="accordionFAQTab"
                    role="tablist"
                  >
                    <Nav.Item as="li">
                      <Nav.Link as="a" href="#general" eventKey="general">
                        General
                      </Nav.Link>
                    </Nav.Item>
                    <Nav.Item as="li">
                      <Nav.Link as="a" href="#speakers" eventKey="speakers">
                        Speakers
                      </Nav.Link>
                    </Nav.Item>
                    <Nav.Item as="li">
                      <Nav.Link as="a" href="#pricing" eventKey="pricing">
                        Pricing
                      </Nav.Link>
                    </Nav.Item>
                    <Nav.Item as="li">
                      <Nav.Link as="a" href="#support" eventKey="support">
                        Support
                      </Nav.Link>
                    </Nav.Item>
                    <Nav.Item as="li">
                      <Nav.Link as="a" href="#history" eventKey="history">
                        History
                      </Nav.Link>
                    </Nav.Item>
                    <Nav.Item as="li">
                      <Nav.Link as="a" href="#customers" eventKey="customers">
                        Customers
                      </Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content>
                    <Tab.Pane eventKey="general">
                      <div className="landio-accordion-v2">
                        <AccordionV2 />
                      </div>
                    </Tab.Pane>
                    <Tab.Pane eventKey="speakers">
                      <div className="landio-accordion-v2">
                        <AccordionV2 />
                      </div>
                    </Tab.Pane>
                    <Tab.Pane eventKey="pricing">
                      <div className="landio-accordion-v2">
                        <AccordionV2 />
                      </div>
                    </Tab.Pane>
                    <Tab.Pane eventKey="support">
                      <div className="landio-accordion-v2">
                        <AccordionV2 />
                      </div>
                    </Tab.Pane>
                    <Tab.Pane eventKey="history">
                      <div className="landio-accordion-v2">
                        <AccordionV2 />
                      </div>
                    </Tab.Pane>
                    <Tab.Pane eventKey="customers">
                      <div className="landio-accordion-v2">
                        <AccordionV2 />
                      </div>
                    </Tab.Pane>
                  </Tab.Content>
                </div>
              </Tab.Container>
            </div>
          </div>
        </div>
      </section>
      {/*====== End FAQ section ======*/}
      {/*====== Pricing Area Start ======*/}
      <section className="pricing-section bg-heading-color-5 p-t-130 p-b-130">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div className="common-heading-2 heading-white m-b-40">
                <span className="tagline color-primary-6">
                  Smart Pricing Plan
                </span>
                <h2 className="title">Appropriate Pricing Plan</h2>
              </div>
            </div>
          </div>
          <div className="row pricing-boxes justify-content-center">
            <div className="col-lg-4 col-md-6 col-sm-10">
              <div className="pricing-table-three style-two m-t-30">
                <h6 className="plan-name">Basic Plan</h6>
                <div className="price">
                  <span className="currency">$</span>
                  <span>29.67</span>
                </div>
                <span className="plan-subtitle">
                  Suitable For Any IT Solutions
                </span>
                <ul className="plan-feature">
                  <li>
                    <i className="fas fa-check" /> Resposive Design
                  </li>
                  <li>
                    <i className="fas fa-check" /> Unlimited Entities
                  </li>
                  <li className="hidden-feature">
                    <i className="fas fa-check" /> Premium Quality Support
                  </li>
                  <li className="hidden-feature">
                    <i className="fas fa-check" /> Hosted In The Cloud
                  </li>
                </ul>
                <a href="#" className="pricing-btn">
                  Select Plan <i className="fas fa-arrow-right" />
                </a>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-10">
              <div className="pricing-table-three style-two featured-plan m-t-30">
                <h6 className="plan-name">popular Plan</h6>
                <div className="price">
                  <span className="currency">$</span>
                  <span>35.92</span>
                </div>
                <span className="plan-subtitle">
                  Suitable For Any IT Solutions
                </span>
                <ul className="plan-feature">
                  <li>
                    <i className="fas fa-check" /> Resposive Design
                  </li>
                  <li>
                    <i className="fas fa-check" /> Unlimited Entities
                  </li>
                  <li>
                    <i className="fas fa-check" /> Premium Quality Support
                  </li>
                  <li className="hidden-feature">
                    <i className="fas fa-check" /> Hosted In The Cloud
                  </li>
                </ul>
                <a href="#" className="pricing-btn">
                  Select Plan <i className="fas fa-arrow-right" />
                </a>
                <span className="plan-tag">Popular</span>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-10">
              <div className="pricing-table-three style-two m-t-30">
                <h6 className="plan-name">premium Plan</h6>
                <div className="price">
                  <span className="currency">$</span>
                  <span>85.39</span>
                </div>
                <span className="plan-subtitle">
                  Suitable For Any IT Solutions
                </span>
                <ul className="plan-feature">
                  <li>
                    <i className="fas fa-check" /> Resposive Design
                  </li>
                  <li>
                    <i className="fas fa-check" /> Unlimited Entities
                  </li>
                  <li>
                    <i className="fas fa-check" /> Premium Quality Support
                  </li>
                  <li>
                    <i className="fas fa-check" /> Hosted In The Cloud
                  </li>
                </ul>
                <a href="#" className="pricing-btn">
                  Select Plan <i className="fas fa-arrow-right" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*====== Pricing Area End ======*/}
      {/*====== Booking Form Start ======*/}
      <section className="booking-section p-t-125 p-b-125">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-10">
              <div className="row align-items-center justify-content-center">
                <div className="col-lg-6 col-md-10">
                  <div className="booking-text pr-xl-3 p-b-md-50">
                    <div className="common-heading-2 m-b-30">
                      <span className="tagline">Book Your Ticket</span>
                      <h2 className="title">
                        {`Don't Miss The Best Webinar 2022`}
                      </h2>
                    </div>
                    <p>
                      Sed ut perspiciatis unde omnis natus voluptatem
                      accusantium doloremque laudantium totam aperis inventore
                      veritatis quasi architecto.
                    </p>
                    <div className="row m-t-20">
                      <div className="col-md-4 col-sm-5 col-6">
                        <div className="icon-box m-t-30">
                          <div className="icon">
                            <i className="fal fa-chair-office" />
                          </div>
                          <div>
                            <h5>40</h5>
                            <span>Seat</span>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-4 col-sm-5 col-6">
                        <div className="icon-box m-t-30">
                          <div className="icon">
                            <i className="fal fa-clock" />
                          </div>
                          <div>
                            <h5>08</h5>
                            <span>Am</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6 col-md-10">
                  <div className="booking-form wow fadeInUp ml-xl-3">
                    <h4 className="form-title">Booking Now</h4>
                    <form action="#">
                      <div className="input-field">
                        <label htmlFor="userName">Full Name</label>
                        <input
                          type="text"
                          placeholder="Enter Your Name"
                          id="userName"
                        />
                      </div>
                      <div className="input-field">
                        <label htmlFor="userEmail">Email Address</label>
                        <input
                          type="email"
                          placeholder="Enter Your Email"
                          id="userEmail"
                        />
                      </div>
                      <div className="input-field">
                        <label htmlFor="userPhone">Phone Number</label>
                        <input
                          type="tel"
                          placeholder="Enter Your Phone No"
                          id="userPhone"
                          pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"
                        />
                      </div>
                      <div className="input-field">
                        <button type="submit">
                          Book Your Seat <i className="far fa-arrow-right" />
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
      {/*====== Booking Form End ======*/}
      {/*====== Partner Section Start ======*/}
      <section className="partner-section bg-secondary-color-7 p-t-125 p-b-65">
        <div className="container">
          <div className="row partner-logos justify-content-center">
            <div className="col-lg-3 col-md-4 col-sm-6 col-10">
              <div className="partner-logo m-b-60 text-center">
                <a href="#">
                  <img src="assets/img/brands/01.png" alt="Image" />
                </a>
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6 col-10">
              <div className="partner-logo m-b-60 text-center">
                <a href="#">
                  <img src="assets/img/brands/02.png" alt="Image" />
                </a>
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6 col-10">
              <div className="partner-logo m-b-60 text-center">
                <a href="#">
                  <img src="assets/img/brands/03.png" alt="Image" />
                </a>
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6 col-10">
              <div className="partner-logo m-b-60 text-center">
                <a href="#">
                  <img src="assets/img/brands/04.png" alt="Image" />
                </a>
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6 col-10">
              <div className="partner-logo m-b-60 text-center">
                <a href="#">
                  <img src="assets/img/brands/05.png" alt="Image" />
                </a>
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6 col-10">
              <div className="partner-logo m-b-60 text-center">
                <a href="#">
                  <img src="assets/img/brands/06.png" alt="Image" />
                </a>
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6 col-10">
              <div className="partner-logo m-b-60 text-center">
                <a href="#">
                  <img src="assets/img/brands/07.png" alt="Image" />
                </a>
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6 col-10">
              <div className="partner-logo m-b-60 text-center">
                <a href="#">
                  <img src="assets/img/brands/08.png" alt="Image" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*====== Partner Section End ======*/}
      {/*====== Start Scroll To Top ======*/}
      <a href="#" className="back-to-top" id="scroll-top">
        <i className="far fa-angle-up" />
      </a>
      {/*====== End Scroll To Top ======*/}
      {/*====== Start Footer ======*/}
      <section className="template-footer webinar-footer">
        <div className="container">
          <div className="footer-newsletters p-t-80 p-b-80">
            <div className="row justify-content-center">
              <div className="col-lg-6 col-md-10">
                <div className="newsletters-title m-b-md-50">
                  <h4>Subscribe Our Newsletter To Get More Update</h4>
                </div>
              </div>
              <div className="col-lg-6 col-md-10">
                <div className="newsletters-form">
                  <p>On the other hand we denounce with righteous</p>
                  <form action="#">
                    <input type="email" placeholder="Enter Your Email" />
                    <button type="submit">
                      Subscribe Now <i className="fa fa-arrow-right" />
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
          <div className="copyright-area">
            <div className="row">
              <div className="col-md-7">
                <ul className="footer-nav text-md-left text-center m-b-sm-15">
                  <li>
                    <a href="#">Privacy &amp; Policy</a>
                  </li>
                  <li>
                    <a href="#">Conditions</a>
                  </li>
                  <li>
                    <a href="#">AML Policy</a>
                  </li>
                </ul>
              </div>
              <div className="col-md-5">
                <div className="copyright-text text-md-right text-center">
                  <p>
                    © 2021{" "}
                    <Link href="/index">
                      <a>Landio</a>
                    </Link>
                    . All Rights Reserved
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layouts>
  );
};

export default Index9;
