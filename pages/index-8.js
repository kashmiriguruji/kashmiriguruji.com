import Link from "next/link";
import Slider from "react-slick";
import Header8 from "../src/layouts/headers/Header8";
import Layouts from "../src/layouts/Layouts";
import { screenshotslider, testimonialActiveSix } from "../src/sliderProps";

const Index8 = () => {
  return (
    <Layouts noFooter noHeader>
      <Header8 />
      <section className="hero-area-v8">
        <div className="container">
          <div className="row align-items-end justify-content-center">
            <div className="col-lg-6 col-md-9">
              <div className="hero-content">
                <h2 className="hero-title wow fadeInDown" data-wow-delay="0.3s">
                  Easy Fast &amp; Secure Digital E-Wallet
                </h2>
                <p className="wow fadeInLeft" data-wow-delay="0.4s">
                  Sed perspicias unde omnis natus error voluptate dolorem
                  laudanme totam aperiam.
                </p>
                <ul
                  className="hero-btns d-flex align-items-center wow fadeInUp"
                  data-wow-delay="0.5"
                >
                  <li>
                    <Link href="/service-details">
                      <a className="template-btn primary-bg-6">
                        Apple Store <i className="fab fa-apple" />
                      </a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/service-details">
                      <a className="template-btn bordered-body-4">
                        Google Play <i className="fab fa-google-play" />
                      </a>
                    </Link>
                  </li>
                </ul>
                <span className="notice wow fadeInUp" data-wow-delay="0.6">
                  <i className="fas fa-cloud-download-alt" /> 523560k Download
                  Apps
                </span>
              </div>
            </div>
            <div className="col-lg-6 col-md-7 d-none d-md-block">
              <div className="hero-img wow fadeInUp" data-wow-delay="0.5">
                <div className="hero-img-inner">
                  <img src="assets/img/hero/hero-8.png" alt="Hero" />
                  <img
                    src="assets/img/hero/hero-8-circle.png"
                    alt="Circle"
                    className="circle-shape"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*====== End Hero Area ======*/}
      {/*====== Section Service Start ======*/}
      <section className="service-section">
        <div className="e-wallet-boxed-container p-t-120 p-b-120">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-10">
                <div className="common-heading text-center heading-white m-b-30">
                  <h2 className="title">
                    {`Don’t Let Your Goals Be Frustrating to Track You'll Waste
                    Effort Working on The Wrong Problems`}
                  </h2>
                </div>
              </div>
            </div>
            <div className="row icon-boxes-v3 justify-content-center">
              <div
                className="col-lg-3 col-sm-6 wow fadeInUp"
                data-wow-delay="0.1s"
              >
                <div className="iconic-box have-icon-overly color-v1 m-t-50">
                  <div className="icon">
                    <i className="far fa-cloud-download" />
                  </div>
                  <h4 className="title">
                    <a href="#">Download Apps</a>
                  </h4>
                  <p>
                    But must explain mistake denouncie pleasure praisin was born
                    complete
                  </p>
                  <a href="#" className="box-btn">
                    Read More <i className="far fa-arrow-right" />
                  </a>
                </div>
              </div>
              <div
                className="col-lg-3 col-sm-6 wow fadeInUp"
                data-wow-delay="0.2s"
              >
                <div className="iconic-box have-icon-overly color-v2 m-t-50">
                  <div className="icon">
                    <i className="far fa-pencil-ruler" />
                  </div>
                  <h4 className="title">
                    <a href="#">Registration Steps</a>
                  </h4>
                  <p>
                    But must explain mistake denouncie pleasure praisin was born
                    complete
                  </p>
                  <a href="#" className="box-btn">
                    Read More <i className="far fa-arrow-right" />
                  </a>
                </div>
              </div>
              <div
                className="col-lg-3 col-sm-6 wow fadeInUp"
                data-wow-delay="0.3s"
              >
                <div className="iconic-box have-icon-overly color-v3 m-t-50">
                  <div className="icon">
                    <i className="far fa-wallet" />
                  </div>
                  <h4 className="title">
                    <a href="#">Load Your Wallet</a>
                  </h4>
                  <p>
                    But must explain mistake denouncie pleasure praisin was born
                    complete
                  </p>
                  <a href="#" className="box-btn">
                    Read More <i className="far fa-arrow-right" />
                  </a>
                </div>
              </div>
              <div
                className="col-lg-3 col-sm-6 wow fadeInUp"
                data-wow-delay="0.4s"
              >
                <div className="iconic-box have-icon-overly color-v4 m-t-50">
                  <div className="icon">
                    <i className="far fa-shield-check" />
                  </div>
                  <h4 className="title">
                    <a href="#">Ready To Go</a>
                  </h4>
                  <p>
                    But must explain mistake denouncie pleasure praisin was born
                    complete
                  </p>
                  <a href="#" className="box-btn">
                    Read More <i className="far fa-arrow-right" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*====== Section Service End ======*/}
      {/*====== Start Payment System Section ======*/}
      <section className="payment-section p-t-150 p-b-150 p-b-md-110">
        <div className="container">
          <div className="row align-items-center justify-content-center">
            <div className="col-lg-6">
              <div className="preview-galley-v9">
                <img
                  src="assets/img/preview-gallery/wallet-payment-01.png"
                  alt="Image"
                  className="image-one"
                />
                <img
                  src="assets/img/preview-gallery/wallet-payment-02.png"
                  alt="Image"
                  className="image-two animate-float-bob-y"
                />
                <div className="icons">
                  <img
                    src="assets/img/particle/wallet-icon.png"
                    alt="icon"
                    className="icon-one animate-float-bob-y"
                  />
                  <img
                    src="assets/img/particle/wallet-icon-2.png"
                    alt="icon"
                    className="icon-two animate-zoominout"
                  />
                  <img
                    src="assets/img/particle/wallet-icon-3.png"
                    alt="icon"
                    className="icon-three animate-rotate-me"
                  />
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-md-8 col-sm-10">
              <div className="payment-content p-l-70 p-l-md-0 m-t-md-100">
                <div className="common-heading m-b-50">
                  <span className="tagline color-primary-6">
                    Payments Systems
                  </span>
                  <h2 className="title">
                    Share Payments With Family &amp; Firends
                  </h2>
                </div>
                <p className="m-b-25">
                  Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                  accusantium doloremque laudane totam rem aperiam eaque ipsa
                  quae abilloe
                </p>
                <p>
                  Boluptatem accusantium doloremque laudane totam rem aperiam
                  eaque ipsa quae abilloe
                </p>
                <Link href="/service-details">
                  <a className="template-btn bordered-body-4 m-t-40">
                    Google Play <i className="fab fa-google-play" />
                  </a>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*====== End Payment System Section ======*/}
      {/*====== Start Benefit Section ======*/}
      <section className="benefit-section">
        <div className="e-wallet-boxed-container">
          <div className="container">
            <div className="row align-items-center justify-content-lg-between justify-content-center">
              <div className="col-lg-5 col-md-8">
                <div className="benefit-content">
                  <div className="common-heading m-b-45">
                    <span className="color-primary-6">Merchant Benefit</span>
                    <h2 className="title">International Money Remittance</h2>
                  </div>
                  <ul
                    className="check-list-3 wow fadeInUp"
                    data-wow-delay="0.2s"
                  >
                    <li>
                      <h4 className="title">High Conversion</h4>
                      <p>On the other hand denounce with righteous</p>
                    </li>
                    <li>
                      <h4 className="title">No Chargeback Risk</h4>
                      <p>Quis autem vel eum iure reprehenderit voluptate</p>
                    </li>
                    <li>
                      <h4 className="title">Recurring Payments</h4>
                      <p>Sed ut perspiciatis unde omnis iste natus</p>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-6 col-md-8">
                <div className="benefit-preview-images">
                  <div className="image-one animate-float-bob-y">
                    <img
                      src="assets/img/preview-gallery/benefit-01.png"
                      alt="Image"
                    />
                  </div>
                  <div className="image-two animate-float-bob-y">
                    <img
                      src="assets/img/preview-gallery/benefit-02.png"
                      alt="Image"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*====== End Benefit Section ======*/}
      {/*====== Start Testimonials Section ======*/}
      <section className="testimonial-section p-t-150 p-t-md-130 p-b-130">
        <div className="container">
          <div className="common-heading text-center m-b-60">
            <span className="tagline color-primary-6">
              Clients Testimonials
            </span>
            <h2 className="title">What our Customers Think</h2>
          </div>
          <Slider
            className="testimonial-slider-v1 testimonial-boxes-v2 testimonial-dots-2 row"
            id="testimonialActiveSix"
            {...testimonialActiveSix}
          >
            <div className="col">
              <div className="testimonial-box">
                <ul className="rating">
                  <li>
                    <i className="fas fa-star" />
                  </li>
                  <li>
                    <i className="fas fa-star" />
                  </li>
                  <li>
                    <i className="fas fa-star" />
                  </li>
                  <li>
                    <i className="fas fa-star" />
                  </li>
                  <li>
                    <i className="fas fa-star-half-alt" />
                  </li>
                </ul>
                <h4 className="title">{`" Unique Design "`}</h4>
                <p>
                  Sed ut perspiciatis omnis natus error sit voluptatem
                  accusantium doloremque laudane totam rem.
                </p>
                <span className="author-name">James R. Kessler</span>
              </div>
            </div>
            <div className="col">
              <div className="testimonial-box">
                <ul className="rating">
                  <li>
                    <i className="fas fa-star" />
                  </li>
                  <li>
                    <i className="fas fa-star" />
                  </li>
                  <li>
                    <i className="fas fa-star" />
                  </li>
                  <li>
                    <i className="fas fa-star" />
                  </li>
                  <li>
                    <i className="fas fa-star-half-alt" />
                  </li>
                </ul>
                <h4 className="title">{`" Clean Code "`}</h4>
                <p>
                  Sed ut perspiciatis omnis natus error sit voluptatem
                  accusantium doloremque laudane totam rem.
                </p>
                <span className="author-name">Lan K. Villeneuve</span>
              </div>
            </div>
            <div className="col">
              <div className="testimonial-box">
                <ul className="rating">
                  <li>
                    <i className="fas fa-star" />
                  </li>
                  <li>
                    <i className="fas fa-star" />
                  </li>
                  <li>
                    <i className="fas fa-star" />
                  </li>
                  <li>
                    <i className="fas fa-star" />
                  </li>
                  <li>
                    <i className="fas fa-star-half-alt" />
                  </li>
                </ul>
                <h4 className="title">{`" Easy Editable "`}</h4>
                <p>
                  Sed ut perspiciatis omnis natus error sit voluptatem
                  accusantium doloremque laudane totam rem.
                </p>
                <span className="author-name">Michael J. Schultz</span>
              </div>
            </div>
            <div className="col">
              <div className="testimonial-box">
                <ul className="rating">
                  <li>
                    <i className="fas fa-star" />
                  </li>
                  <li>
                    <i className="fas fa-star" />
                  </li>
                  <li>
                    <i className="fas fa-star" />
                  </li>
                  <li>
                    <i className="fas fa-star" />
                  </li>
                  <li>
                    <i className="fas fa-star-half-alt" />
                  </li>
                </ul>
                <h4 className="title">{`" Fresh Design "`}</h4>
                <p>
                  Sed ut perspiciatis omnis natus error sit voluptatem
                  accusantium doloremque laudane totam rem.
                </p>
                <span className="author-name">David A. Ames</span>
              </div>
            </div>
            <div className="col">
              <div className="testimonial-box">
                <ul className="rating">
                  <li>
                    <i className="fas fa-star" />
                  </li>
                  <li>
                    <i className="fas fa-star" />
                  </li>
                  <li>
                    <i className="fas fa-star" />
                  </li>
                  <li>
                    <i className="fas fa-star" />
                  </li>
                  <li>
                    <i className="fas fa-star-half-alt" />
                  </li>
                </ul>
                <h4 className="title">{`" Unique Design "`}</h4>
                <p>
                  Sed ut perspiciatis omnis natus error sit voluptatem
                  accusantium doloremque laudane totam rem.
                </p>
                <span className="author-name">James R. Kessler</span>
              </div>
            </div>
          </Slider>
        </div>
      </section>
      {/*====== End Testimonials Section ======*/}
      {/*====== Start Brands Area ======*/}
      <section className="brands-area">
        <div className="e-wallet-boxed-container boxed-bordered p-t-80 p-b-30">
          <div className="container">
            <div className="row brands-item-grid align-items-center">
              <div className="col-lg-3 col-md-4 col-sm-6">
                <div className="brand-item text-lg-left text-center m-b-50">
                  <a href="#">
                    <img src="assets/img/brands/brand-6.png" alt="BrandItem" />
                  </a>
                </div>
              </div>
              <div className="col-lg-3 col-md-4 col-sm-6">
                <div className="brand-item text-center m-b-50">
                  <a href="#">
                    <img src="assets/img/brands/brand-7.png" alt="BrandItem" />
                  </a>
                </div>
              </div>
              <div className="col-lg-3 col-md-4 col-sm-6">
                <div className="brand-item text-center m-b-50">
                  <a href="#">
                    <img src="assets/img/brands/brand-8.png" alt="BrandItem" />
                  </a>
                </div>
              </div>
              <div className="col-lg-3 col-md-4 col-sm-6">
                <div className="brand-item text-lg-right text-center m-b-50">
                  <a href="#">
                    <img src="assets/img/brands/brand-9.png" alt="BrandItem" />
                  </a>
                </div>
              </div>
              <div className="col-lg-3 col-md-4 col-sm-6">
                <div className="brand-item text-lg-left text-center m-b-50">
                  <a href="#">
                    <img src="assets/img/brands/brand-10.png" alt="BrandItem" />
                  </a>
                </div>
              </div>
              <div className="col-lg-3 col-md-4 col-sm-6">
                <div className="brand-item text-center m-b-50">
                  <a href="#">
                    <img src="assets/img/brands/brand-11.png" alt="BrandItem" />
                  </a>
                </div>
              </div>
              <div className="col-lg-3 col-md-4 col-sm-6">
                <div className="brand-item text-center m-b-50">
                  <a href="#">
                    <img src="assets/img/brands/brand-12.png" alt="BrandItem" />
                  </a>
                </div>
              </div>
              <div className="col-lg-3 col-md-4 col-sm-6">
                <div className="brand-item text-lg-right text-center m-b-50">
                  <a href="#">
                    <img src="assets/img/brands/brand-13.png" alt="BrandItem" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*====== End Brands Area ======*/}
      {/*====== Start Screenshot Section ======*/}
      <section className="screenshot-section p-t-130 p-b-130">
        <div className="container">
          <div className="row justify-content-between align-items-center">
            <div className="col-lg-5 col-md-8">
              <div className="common-heading m-b-30">
                <span className="tagline color-primary-6">E-Wallet Screen</span>
                <h2 className="title">Nice Apps Previews</h2>
              </div>
            </div>
            <div className="col-auto">
              <div className="screenshot-arrows m-b-30" />
            </div>
          </div>
          <Slider
            {...screenshotslider}
            className="row screenshot-slider m-t-50 m-t-sm-20"
          >
            <div className="col-12">
              <div className="screenshot-item">
                <img src="assets/img/screenshot-slider/01.png" alt="Image" />
              </div>
            </div>
            <div className="col-12">
              <div className="screenshot-item">
                <img src="assets/img/screenshot-slider/02.png" alt="Image" />
              </div>
            </div>
            <div className="col-12">
              <div className="screenshot-item">
                <img src="assets/img/screenshot-slider/03.png" alt="Image" />
              </div>
            </div>
            <div className="col-12">
              <div className="screenshot-item">
                <img src="assets/img/screenshot-slider/04.png" alt="Image" />
              </div>
            </div>
            <div className="col-12">
              <div className="screenshot-item">
                <img src="assets/img/screenshot-slider/01.png" alt="Image" />
              </div>
            </div>
            <div className="col-12">
              <div className="screenshot-item">
                <img src="assets/img/screenshot-slider/02.png" alt="Image" />
              </div>
            </div>
            <div className="col-12">
              <div className="screenshot-item">
                <img src="assets/img/screenshot-slider/03.png" alt="Image" />
              </div>
            </div>
            <div className="col-12">
              <div className="screenshot-item">
                <img src="assets/img/screenshot-slider/04.png" alt="Image" />
              </div>
            </div>
          </Slider>
        </div>
      </section>
      {/*====== End Screenshot Section ======*/}
      {/*====== Pricing Area Start ======*/}
      <section className="pricing-section p-b-130">
        <div className="container">
          <div className="common-heading text-center m-b-40">
            <span className="tagline color-primary-6">Smart Pricing Plan</span>
            <h2 className="title">Appropriate Pricing Plan</h2>
          </div>
          <div className="row pricing-boxes justify-content-center">
            <div
              className="col-lg-4 col-md-6 col-sm-10 wow fadeInUp"
              data-wow-delay="0.2s"
            >
              <div className="pricing-table-three m-t-30">
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
            <div
              className="col-lg-4 col-md-6 col-sm-10 wow fadeInUp"
              data-wow-delay="0.3s"
            >
              <div className="pricing-table-three featured-plan m-t-30">
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
                <span className="plan-tag">Save 45%</span>
              </div>
            </div>
            <div
              className="col-lg-4 col-md-6 col-sm-10 wow fadeInUp"
              data-wow-delay="0.4s"
            >
              <div className="pricing-table-three m-t-30">
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
      {/*====== CTA Section Start ======*/}
      <section className="cta-section">
        <div className="e-wallet-boxed-container boxed-shape p-t-80 p-b-80">
          <div className="container">
            <div className="row align-items-center justify-content-center">
              <div className="col-xl-7 col-lg-6 col-md-10">
                <div className="cta-img p-r-30 p-r-lg-0 m-b-50">
                  <img
                    src="assets/img/cta/e-wallet.png"
                    alt="Image"
                    className="animate-float-bob-y"
                  />
                </div>
              </div>
              <div className="col-xl-5 col-lg-6 col-md-10">
                <div className="download-text">
                  <div className="common-heading m-b-30">
                    <span className="tagline color-primary-6">
                      Download E-Wallet Apps{" "}
                    </span>
                    <h2 className="title">
                      We Available On Store Download Now
                    </h2>
                  </div>
                  <p className="m-b-40">
                    Sed ut perspiciatis unde omnis natus errors voluptatem
                    accusantium doloremque laudantium, totam rem aperiam eaque
                    ipsa quae ab illo inventore veritatis et quasi archite
                    beatae vitae dicta sunt explicabo.
                  </p>
                  <ul className="cta-btns">
                    <li>
                      <Link href="/services">
                        <a className="template-btn primary-bg-6">
                          Apple Store <i className="fab fa-apple" />
                        </a>
                      </Link>
                    </li>
                    <li>
                      <Link href="/services">
                        <a className="template-btn bordered-body-4">
                          Google Play <i className="fab fa-google-play" />
                        </a>
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*====== CTA Section End ======*/}
      {/*====== Start Scroll To Top ======*/}
      <a href="#" className="back-to-top" id="scroll-top">
        <i className="far fa-angle-up" />
      </a>
      {/*====== End Scroll To Top ======*/}
      {/*====== Start Footer ======*/}
      <footer className="template-footer footer-bordered">
        <div className="container">
          <div className="footer-widgets">
            <div className="row">
              <div className="col-lg-5 col-md-10">
                <div className="footer-widget-left">
                  {/* Single Footer Widget */}
                  <div className="widget text-block-widget">
                    <img src="assets/img/logo-white-4.png" alt="footer logo" />
                    <p>
                      Quis autem vel eum iure reprehenderit qui in ea voluptate
                      velit esse quam nihile consequatur vel illum qui dolorem
                      eum fugiate.
                    </p>
                    <div className="newsletter-form m-t-30">
                      <form action="#">
                        <input type="email" placeholder="Enter Email Address" />
                        <button type="submit">
                          <i className="far fa-arrow-right" />
                        </button>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-7">
                <div className="row footer-widget-right">
                  {/* Single Footer Widget */}
                  <div className="col-lg-4 col-sm-6">
                    <div className="d-lg-flex justify-content-start">
                      <div className="widget nav-widget">
                        <h5 className="widget-title">Resources</h5>
                        <ul>
                          <li>
                            <Link href="/about">
                              <a>Development</a>
                            </Link>
                          </li>
                          <li>
                            <Link href="/about">
                              <a>Our Products</a>
                            </Link>
                          </li>
                          <li>
                            <Link href="/about">
                              <a>User Strategy</a>
                            </Link>
                          </li>
                          <li>
                            <Link href="/about">
                              <a>Blogs &amp; Guides</a>
                            </Link>
                          </li>
                          <li>
                            <Link href="/about">
                              <a>Premium Support</a>
                            </Link>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  {/* Single Footer Widget */}
                  <div className="col-lg-4 col-sm-6">
                    <div className="d-lg-flex justify-content-center">
                      <div className="widget nav-widget">
                        <h5 className="widget-title">Company</h5>
                        <ul>
                          <li>
                            <Link href="/about">
                              <a>About Landio</a>
                            </Link>
                          </li>
                          <li>
                            <Link href="/about">
                              <a>Contact</a>
                            </Link>
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
                  <div className="col-lg-4 col-sm-6">
                    <div className="d-lg-flex justify-content-end">
                      <div className="widget nav-widget">
                        <h5 className="widget-title">Support</h5>
                        <ul>
                          <li>
                            <a href="#">Privacy Policy</a>
                          </li>
                          <li>
                            <a href="#">Conditions</a>
                          </li>
                          <li>
                            <a href="#">AML Policy</a>
                          </li>
                          <li>
                            <a href="#">Download</a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="footer-copyright">
          <div className="container">
            <div className="row align-items-center justify-content-between">
              <div className="col-sm-auto col-12 order-lg-last">
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

export default Index8;
