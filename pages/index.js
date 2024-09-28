import Link from "next/link";
import Slider from "react-slick";
import Counter from "../src/components/Counter";
import Layouts from "../src/layouts/Layouts";
import { testimonialActiveOne } from "../src/sliderProps";

const Index = () => {
  return (
    <Layouts>
      <section className="hero-area-v1">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-10 col-xl-11">
              <div className="hero-content">
                <span className="title-tag wow fadeInUp" data-wow-delay="0.2s">
                  <span>Save 25%</span> Faster solutions
                </span>
                <h1 className="hero-title wow fadeInUp" data-wow-delay="0.3s">
                  Build your <span>saas</span> landing pages with us
                </h1>
                <ul className="hero-btns d-flex justify-content-center">
                  <li className="wow fadeInUp" data-wow-delay="0.4s">
                    <Link href="/services">
                      <a className="template-btn">
                        Saas Solutions <i className="fas fa-arrow-right"></i>
                      </a>
                    </Link>
                  </li>
                  <li className="wow fadeInUp" data-wow-delay="0.4s">
                    <Link href="/services">
                      <a className="template-btn bordered-btn">
                        Learn More <i className="fas fa-arrow-right"></i>
                      </a>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="hero-particle-effect d-none d-md-block">
            <img
              className="particle-1 animate-zoom-fade"
              src="assets/img/particle/particle-1.png"
              alt="particle One"
            />
            <img
              className="particle-2 animate-float-bob-y"
              src="assets/img/particle/particle-2.png"
              alt="particle Two"
            />
            <img
              className="particle-3 animate-zoominout"
              src="assets/img/particle/particle-3.png"
              alt="particle Three"
            />
            <img
              className="particle-4 animate-zoominout"
              src="assets/img/particle/particle-4.png"
              alt="particle Four"
            />
            <img
              className="particle-5 animate-zoominout"
              src="assets/img/particle/particle-5.png"
              alt="particle Five"
            />
          </div>
        </div>
        <div className="container-fluid">
          <div className="hero-img text-center animate-float-bob-y">
            <img src="assets/img/hero/app-dashboard.jpg" alt="image" />
          </div>
        </div>
      </section>
      {/* <!--====== End Hero Area ======--> */}

      {/* <!--====== Start Feature Area ======--> */}
      <section className="core-feature">
        <div className="container">
          <div className="row no-gutters justify-content-center">
            <div className="col-lg-4 col-md-10 col-sm-9">
              <div className="core-feature-text p-r-40 p-r-lg-30 m-b-md-80">
                <div className="common-heading tagline-boxed m-b-30">
                  <span className="tagline">Core Features</span>
                  <h2 className="title">How can we help your problems</h2>
                </div>
                <p>
                  Sed perspicias unde omnis iste natus error voluptatem
                  accusantium dolorem laudanme totam rem aperiam eaque quae.
                </p>
                <a href="#" className="template-btn m-t-40">
                  Learn More <i className="far fa-arrow-right"></i>
                </a>
              </div>
            </div>
            <div className="col-lg-8">
              {/* <!-- Feature Box One --> */}
              <div className="row justify-content-center image-boxes-v1 p-l-40 p-l-lg-0">
                <div
                  className="col-md-6 col-sm-9 wow fadeInUp"
                  data-wow-delay="0.2s"
                >
                  <div className="image-box active m-b-sm-30">
                    <div className="thumb">
                      <img src="assets/img/feature/01.png" alt="Image" />
                    </div>
                    <h4 className="title">Faster and trusted grow solutions</h4>
                    <Link href="/about">
                      <a className="box-link">
                        <i className="fas fa-arrow-right"></i>
                      </a>
                    </Link>
                  </div>
                </div>
                <div
                  className="col-md-6 col-sm-9 wow fadeInUp"
                  data-wow-delay="0.2s"
                >
                  <div className="image-box">
                    <div className="thumb">
                      <img src="assets/img/feature/02.png" alt="Image" />
                    </div>
                    <h4 className="title">Strategy buildup for web software</h4>
                    <Link href="/about">
                      <a className="box-link">
                        <i className="fas fa-arrow-right"></i>
                      </a>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!--====== Start Feature End ======--> */}

      {/* <!--====== Start Data Analysis Area ======--> */}
      <section className="data-analysis-section p-t-125 p-b-125">
        <div className="container">
          <div className="row align-items-center justify-content-center">
            <div className="col-lg-7 col-md-10 d-sm-block d-none">
              {/* <!-- Preview Gallery One --> */}
              <div className="preview-galley-v1 m-b-md-70">
                <img
                  className="preview-image-1 wow fadeInUp"
                  src="assets/img/preview-gallery/manage-data-1.jpg"
                  alt="data analysis One"
                />
                <img
                  className="preview-image-2 animate-float-bob-x wow fadeInUp"
                  data-wow-delay="0.2s"
                  src="assets/img/preview-gallery/manage-data-2.jpg"
                  alt="data analysis Two"
                />
                <img
                  className="preview-image-3 wow fadeInUp"
                  data-wow-delay="0.3s"
                  src="assets/img/preview-gallery/manage-data-3.jpg"
                  alt="data analysis Three"
                />
                <img
                  className="preview-image-4 wow fadeInUp"
                  data-wow-delay="0.4s"
                  src="assets/img/preview-gallery/manage-data-4.jpg"
                  alt="data analysis Four"
                />
                <img
                  className="preview-image-5 animate-float-bob-y"
                  data-wow-delay="0.5s"
                  src="assets/img/preview-gallery/manage-data-5.jpg"
                  alt="data analysis Five"
                />
                <img
                  className="preview-image-6 wow fadeInUp"
                  data-wow-delay="0.6s"
                  src="assets/img/preview-gallery/manage-data-6.jpg"
                  alt="data analysis Six"
                />
              </div>
            </div>
            <div className="col-lg-5 col-md-8">
              <div className="analysis-text-block p-l-50 p-l-md-0">
                <div className="common-heading tagline-boxed m-b-30">
                  <span className="tagline">Data Analysis</span>
                  <h2 className="title">Manage your data analysis easily</h2>
                </div>
                <p>
                  Quis autem vel eum iure reprehenderit quin voluptate velit
                  esse quam molesti consequatur velillum qui dolorem eum fugiate
                </p>
                <ul className="check-list m-t-30">
                  <li>Unlimited Design Possibility</li>
                  <li>Beautiful Mobile Apps</li>
                  <li>Easy Project Management</li>
                </ul>
                <a href="#" className="template-btn bordered-btn m-t-40">
                  Learn More <i className="far fa-arrow-right"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!--====== End Data Analysis Area ======--> */}

      {/* <!--====== Service Section Start ======--> */}
      <section className="service-section bg-heading-color p-t-125 p-b-125">
        <div className="container">
          {/* <!-- Common Heading --> */}
          <div className="row justify-content-center">
            <div className="col-lg-6">
              <div className="common-heading tagline-boxed heading-white m-b-50 text-center">
                <span className="tagline">What We Do</span>
                <h2 className="title">
                  We offer smart saas solutions for better business
                </h2>
              </div>
            </div>
          </div>

          {/* <!-- Icon Box One --> */}
          <div className="row justify-content-center fancy-icon-boxes-v1 boxes-white-version">
            <div
              className="col-md-6 col-sm-10 wow fadeInUp"
              data-wow-delay="0.2s"
            >
              <div className="fancy-icon-box m-t-30">
                <div className="box-icon">
                  <img
                    src="assets/img/fancy-icon-box/01.png"
                    alt="service icon one"
                  />
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
            <div
              className="col-md-6 col-sm-10 wow fadeInUp"
              data-wow-delay="0.3s"
            >
              <div className="fancy-icon-box m-t-30">
                <div className="box-icon">
                  <img
                    src="assets/img/fancy-icon-box/02.png"
                    alt="service icon one"
                  />
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
            <div
              className="col-md-6 col-sm-10 wow fadeInUp"
              data-wow-delay="0.4s"
            >
              <div className="fancy-icon-box m-t-30">
                <div className="box-icon">
                  <img
                    src="assets/img/fancy-icon-box/03.png"
                    alt="service icon one"
                  />
                </div>
                <div className="box-content">
                  <h4 className="title">
                    <Link href="/service-details">
                      <a>Server Solutions</a>
                    </Link>
                  </h4>
                  <p>
                    Again is there anyone who loves pursues or desires to obtain
                    pain of itself because it is pain but because occasionally
                  </p>
                </div>
              </div>
            </div>
            <div
              className="col-md-6 col-sm-10 wow fadeInUp"
              data-wow-delay="0.5s"
            >
              <div className="fancy-icon-box m-t-30">
                <div className="box-icon">
                  <img
                    src="assets/img/fancy-icon-box/04.png"
                    alt="service icon one"
                  />
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
            <div
              className="col-md-6 col-sm-10 wow fadeInUp"
              data-wow-delay="0.6s"
            >
              <div className="fancy-icon-box m-t-30">
                <div className="box-icon">
                  <img
                    src="assets/img/fancy-icon-box/05.png"
                    alt="service icon one"
                  />
                </div>
                <div className="box-content">
                  <h4 className="title">
                    <Link href="/service-details">
                      <a>Well Documentation</a>
                    </Link>
                  </h4>
                  <p>
                    Again is there anyone who loves pursues or desires to obtain
                    pain of itself because it is pain but because occasionally
                  </p>
                </div>
              </div>
            </div>
            <div
              className="col-md-6 col-sm-10 wow fadeInUp"
              data-wow-delay="0.7s"
            >
              <div className="fancy-icon-box m-t-30">
                <div className="box-icon">
                  <img
                    src="assets/img/fancy-icon-box/06.png"
                    alt="service icon one"
                  />
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

      {/* <!--====== Statices Section Start ======--> */}
      <section className="statices-section p-t-125 p-b-125 border-bottom-primary">
        <div className="container">
          <div className="row align-items-center justify-content-lg-between justify-content-center">
            <div className="col-lg-4 col-md-10">
              <div className="statices-text-block m-b-md-60">
                <div className="common-heading tagline-boxed m-b-30">
                  <span className="tagline">Core Statices</span>
                  <h2 className="title">Get instant growth result for saas</h2>
                </div>
                <p>
                  Sed ut perspiciatis unde omnis natus error sit voluptatem
                  accusantium doloremque udantium, totam rem aperiam eaque
                </p>

                <div className="simple-icon-boxes row m-t-40">
                  <div className="col-sm-6">
                    <div className="simple-icon-box m-b-40">
                      <div className="icon">
                        <i className="fal fa-users"></i>
                      </div>
                      <h5 className="title">Build for Real Saas Users</h5>
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="simple-icon-box m-b-40">
                      <div className="icon">
                        <i className="fal fa-users"></i>
                      </div>
                      <h5 className="title">Process Setup Easily</h5>
                    </div>
                  </div>
                </div>

                <a href="#" className="template-btn">
                  Learn More <i className="far fa-arrow-right"></i>
                </a>
              </div>
            </div>
            <div className="col-lg-7 col-md-11">
              <div className="preview-galley-v2 m-l-25">
                <div className="row">
                  <div
                    className="col-6 image-1 wow fadeInUp"
                    data-wow-delay="0.1s"
                  >
                    <img
                      src="assets/img/preview-gallery/core-statistic-1.jpg"
                      className="animate-float-bob-y"
                      alt="Image"
                    />
                  </div>
                  <div
                    className="col-6 image-2 wow fadeInUp"
                    data-wow-delay="0.2s"
                  >
                    <img
                      src="assets/img/preview-gallery/core-statistic-2.jpg"
                      alt="Image"
                    />
                  </div>
                  <div
                    className="col-6 image-3 wow fadeInUp"
                    data-wow-delay="0.3s"
                  >
                    <img
                      src="assets/img/preview-gallery/core-statistic-4.jpg"
                      alt="Image"
                    />
                  </div>
                  <div
                    className="col-6 image-4 wow fadeInUp"
                    data-wow-delay="0.4s"
                  >
                    <img
                      src="assets/img/preview-gallery/core-statistic-3.jpg"
                      alt="Image"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!--====== Statices Section End ======--> */}

      {/* <!--====== Start Testimonials ======--> */}
      <section className="testimonials-section p-t-130 p-b-130">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-4 col-lg-6">
              <div className="common-heading tagline-boxed text-center m-b-60">
                <span className="tagline">Our Testimonials</span>
                <h2 className="title">What our clients say about solutions</h2>
              </div>
            </div>
          </div>
          <Slider
            {...testimonialActiveOne}
            className="row testimonial-slider-v1 testimonial-slider-extra-gap"
            id="testimonialActiveOne"
          >
            <div className="col">
              <div className="testimonial-item">
                <div className="quote-icon">
                  <i className="flaticon-right-quote"></i>
                </div>
                <p>
                  Sed ut perspicia unde omnis natus error sit volupt accusantium
                  doloremque laudantium totam rem aperiam eaque quae
                </p>
                <div className="author-info">
                  <img
                    src="assets/img/testimonial/author-1.png"
                    alt="testimonial author"
                  />
                  <h6 className="name">Michael W. Kirwan</h6>
                  <span className="title">CEO & Founder</span>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="testimonial-item">
                <div className="quote-icon">
                  <i className="flaticon-right-quote"></i>
                </div>
                <p>
                  Quis autem vel eum iure reprehenderit qui in ea voluptate
                  velit esse quam nihil molestiae conse quatur vellum rem Quis
                  autem
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
            <div className="col">
              <div className="testimonial-item">
                <div className="quote-icon">
                  <i className="flaticon-right-quote"></i>
                </div>
                <p>
                  On the other hand denounce with righteous indignation dislike
                  men who are so beguiled and demoralized by charms
                </p>
                <div className="author-info">
                  <img
                    src="assets/img/testimonial/author-3.png"
                    alt="testimonial author"
                  />
                  <h6 className="name">Harold S. Richardson</h6>
                  <span className="title">App Developer</span>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="testimonial-item">
                <div className="quote-icon">
                  <i className="flaticon-right-quote"></i>
                </div>
                <p>
                  Sed ut perspicia unde omnis natus error sit volupt accusantium
                  On the other hand denounce with righteous indignation disli
                </p>
                <div className="author-info">
                  <img
                    src="assets/img/testimonial/author-small-6.png"
                    alt="testimonial author"
                  />
                  <h6 className="name">Michael W. Kirwan</h6>
                  <span className="title">CEO & Founder</span>
                </div>
              </div>
            </div>
          </Slider>
        </div>
      </section>
      {/* <!--====== End Testimonials ======--> */}

      {/* <!--====== Start Counter Section ======--> */}
      <section className="counter-section section-with-map-bg bg-primary-color p-t-80 p-b-80 p-t-md-160">
        <div className="container">
          <div className="row align-items-center justify-content-center">
            <div className="col-lg-6 col-md-9">
              {/* <!-- Preview Gallery Two --> */}
              <div className="preview-galley-v3 m-b-md-100">
                <img
                  className="preview-image-1"
                  src="assets/img/preview-gallery/count-down.png"
                  alt="Preview Image"
                />
                <img
                  className="preview-image-2 animate-float-bob-y"
                  src="assets/img/preview-gallery/count-down-top.png"
                  alt="Preview Image"
                />
                <img
                  className="preview-image-3 animate-float-bob-y"
                  src="assets/img/preview-gallery/count-down-bottom.png"
                  alt="Preview Image"
                />
              </div>
            </div>
            <div className="col-lg-6 col-md-10">
              {/* <!-- Counter Item --> */}
              <div className="row counter-items-v1 p-xl-5">
                <div className="col-6">
                  <div className="counter-item m-b-60">
                    <div className="icon">
                      <i className="fal fa-users"></i>
                    </div>
                    <div className="counter-wrap">
                      <Counter end="96327" />
                      <span className="suffix">+</span>
                    </div>
                    <p className="title">Daily Active Users</p>
                  </div>
                </div>
                <div className="col-6">
                  <div className="counter-item m-b-60">
                    <div className="icon">
                      <i className="fal fa-file-alt"></i>
                    </div>
                    <div className="counter-wrap">
                      <Counter end="78630" />
                      <span className="suffix">+</span>
                    </div>
                    <p className="title">Project Complate</p>
                  </div>
                </div>
                <div className="col-6">
                  <div className="counter-item">
                    <div className="icon">
                      <i className="fal fa-cloud-download"></i>
                    </div>
                    <div className="counter-wrap">
                      <Counter end="56326" />
                      <span className="suffix">+</span>
                    </div>
                    <p className="title">Download Software</p>
                  </div>
                </div>
                <div className="col-6">
                  <div className="counter-item">
                    <div className="icon">
                      <i className="fal fa-gem"></i>
                    </div>
                    <div className="counter-wrap">
                      <Counter end="63020" />
                      <span className="suffix">+</span>
                    </div>
                    <p className="title">5 Star Rating Reviews</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!--====== End Counter Section ======--> */}

      {/* <!--====== Start CTA Section ======--> */}
      <section className="cta-section cta-with-particle border-bottom-primary p-t-130 p-b-130">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-6">
              <div className="cta-content wow fadeInUp">
                <div className="common-heading tagline-boxed m-b-50 text-center">
                  <span className="tagline">Download Apps</span>
                  <h2 className="title">
                    Get our apps very easily, we’re available on store
                  </h2>
                </div>

                <ul className="cta-btns justify-content-center">
                  <li>
                    <Link href="/services">
                      <a className="template-btn">
                        Apple Store <i className="fab fa-apple"></i>
                      </a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/services">
                      <a className="template-btn bordered-btn">
                        Google Play <i className="fab fa-google-play"></i>
                      </a>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="cta-particle d-none d-md-block">
            <img
              className="particle-left"
              src="assets/img/particle/cta-left-particle-1.png"
              alt="cta particle 1"
            />
            <img
              className="particle-right"
              src="assets/img/particle/cta-right-particle-1.png"
              alt="cta particle 2"
            />
          </div>
        </div>
      </section>
    </Layouts>
  );
};

export default Index;
