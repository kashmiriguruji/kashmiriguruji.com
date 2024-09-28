import Link from "next/link";
import Header4 from "../src/layouts/headers/Header4";
import Layouts from "../src/layouts/Layouts";

const Index4 = () => {
  return (
    <Layouts noHeader noFooter>
      <Header4 />
      <section className="hero-area-v4">
        <div className="container">
          <div className="row align-items-end justify-content-center">
            <div className="col-lg-6">
              <div className="hero-content wow fadeInUp" data-wow-delay="0.4s">
                <h1 className="hero-title">
                  Connect <span>Anytime</span> Anywhere
                </h1>
                <ul className="hero-btns d-flex align-items-center">
                  <li>
                    <Link href="/services">
                      <a className="template-btn template-btn-2 primary-bg-3">
                        Apple Store <i className="far fa-arrow-right" />
                      </a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/services">
                      <a className="template-btn template-btn-2 secondary-3-bg">
                        Google Play <i className="far fa-arrow-right" />
                      </a>
                    </Link>
                  </li>
                </ul>
                <ul className="user-images">
                  <li
                    data-tooltip="true"
                    data-placement="top"
                    data-original-title="Donald L. Juarez"
                  >
                    <a href="#">
                      <img
                        src="assets/img/hero/author-thumbs/01.jpg"
                        alt="user one"
                      />
                    </a>
                  </li>
                  <li
                    data-tooltip="true"
                    data-placement="top"
                    data-original-title="Evan A. Ethridge"
                  >
                    <a href="#">
                      <img
                        src="assets/img/hero/author-thumbs/02.jpg"
                        alt="user one"
                      />
                    </a>
                  </li>
                  <li
                    data-tooltip="true"
                    data-placement="top"
                    data-original-title="Donald L. Lewis"
                  >
                    <a href="#">
                      <img
                        src="assets/img/hero/author-thumbs/03.jpg"
                        alt="user one"
                      />
                    </a>
                  </li>
                  <li
                    data-tooltip="true"
                    data-placement="top"
                    data-original-title="Marcus L. Duncan"
                  >
                    <a href="#">
                      <img
                        src="assets/img/hero/author-thumbs/04.jpg"
                        alt="user one"
                      />
                    </a>
                  </li>
                  <li
                    data-tooltip="true"
                    data-placement="top"
                    data-original-title="Evan A. Ethridge"
                  >
                    <a href="#">
                      <img
                        src="assets/img/hero/author-thumbs/05.jpg"
                        alt="user one"
                      />
                    </a>
                  </li>
                  <li
                    data-tooltip="true"
                    data-placement="top"
                    data-original-title="M. Jon Doe"
                  >
                    <a href="#">
                      <img
                        src="assets/img/hero/author-thumbs/06.jpg"
                        alt="user one"
                      />
                    </a>
                  </li>
                  <li
                    data-tooltip="true"
                    data-placement="top"
                    data-original-title="More"
                  >
                    <a href="#" className="more-icon">
                      <i className="far fa-plus" />
                    </a>
                  </li>
                  <li className="note">49m+ Profile Done</li>
                </ul>
              </div>
            </div>
            <div className="col-lg-6 col-md-11">
              <div
                className="hero-preview-galley wow fadeInUp"
                data-wow-delay="0.4s"
              >
                <img
                  src="assets/img/hero/chartboard-image-main.png"
                  className="main-image-1 animate-float-bob-x"
                  alt="Image"
                />
                <div className="preview-inner">
                  <img
                    src="assets/img/hero/chartboard-app-preview-1.jpg"
                    className="image-1"
                    alt="Image"
                  />
                  <img
                    src="assets/img/hero/chartboard-app-preview-2.jpg"
                    className="image-2"
                    alt="Image"
                  />
                  <img
                    src="assets/img/hero/chartboard-app-preview-3.jpg"
                    className="image-3 animate-float-bob-y"
                    alt="Image"
                  />
                </div>
                <img
                  src="assets/img/hero/chartboard-image-secondary.png"
                  className="main-image-2 animate-float-bob-y"
                  alt="Image"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*====== End Hero Area ======*/}
      {/*====== Start Features Area ======*/}
      <section className="feature-section p-t-130 p-b-80 border-bottom-primary-3">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-6">
              <div className="common-heading title-line-bottom text-center m-b-70">
                <span className="tagline">How Can Help You</span>
                <h2 className="title">Check Out Exclusive Features</h2>
                <img
                  src="assets/img/particle/title-line-2.png"
                  alt="Image"
                  className="Line"
                />
              </div>
            </div>
          </div>
          <div className="row iconic-boxes-v2">
            <div
              className="col-lg-3 col-sm-6 wow fadeInUp"
              data-wow-delay="0.2s"
            >
              <div className="iconic-box color-1 m-b-50">
                <div className="icon">
                  <img
                    src="assets/img/icon/flaticon-headphones.png"
                    alt="headphones"
                  />
                </div>
                <h5 className="title">
                  <a href="#">Audio &amp; Video Call</a>
                </h5>
                <p>
                  Sed perspiciatis unde omnis este error voluptate accusant
                  doloremque systems.
                </p>
                <a href="#" className="box-link">
                  <i className="fas fa-arrow-right" />
                </a>
              </div>
            </div>
            <div
              className="col-lg-3 col-sm-6 wow fadeInUp"
              data-wow-delay="0.3s"
            >
              <div className="iconic-box color-2 m-b-50">
                <div className="icon">
                  <img
                    src="assets/img/icon/flaticon-share.png"
                    alt="headphones"
                  />
                </div>
                <h5 className="title">
                  <a href="#">Screen Sharing</a>
                </h5>
                <p>
                  Quis autem vel eum iuresc reprehe nderit ea voluptatey velit
                  esse quam nihile
                </p>
                <a href="#" className="box-link">
                  <i className="fas fa-arrow-right" />
                </a>
              </div>
            </div>
            <div
              className="col-lg-3 col-sm-6 wow fadeInUp"
              data-wow-delay="0.4s"
            >
              <div className="iconic-box color-3 m-b-50">
                <div className="icon">
                  <img
                    src="assets/img/icon/flaticon-chatting.png"
                    alt="headphones"
                  />
                </div>
                <h5 className="title">
                  <a href="#">Chat &amp; Message</a>
                </h5>
                <p>
                  On the other hand dennce with righteous indig nations dislike
                  men beguiled
                </p>
                <a href="#" className="box-link">
                  <i className="fas fa-arrow-right" />
                </a>
              </div>
            </div>
            <div
              className="col-lg-3 col-sm-6 wow fadeInUp"
              data-wow-delay="0.5s"
            >
              <div className="iconic-box color-4 m-b-50">
                <div className="icon">
                  <img
                    src="assets/img/icon/flaticon-satisfaction.png"
                    alt="headphones"
                  />
                </div>
                <h5 className="title">
                  <a href="#">Download Apps</a>
                </h5>
                <p>
                  On the other hand dennce with righteous indig nations dislike
                  men beguiled
                </p>
                <a href="#" className="box-link">
                  <i className="fas fa-arrow-right" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*====== End Features Area ======*/}
      {/*====== Collaboration Area Start ======*/}
      <section className="collaboration-section p-t-130 p-b-130 overflow-hidden">
        <div className="container">
          <div className="row justify-content-lg-between justify-content-center align-items-center">
            <div className="col-lg-7 col-md-10">
              <div className="preview-galley-v4 m-r-70 m-b-md-80">
                <img
                  src="assets/img/preview-gallery/live-chat-preview.png"
                  className="preview-image-1"
                  alt="Live collaboration"
                />
                <img
                  src="assets/img/preview-gallery/live-chat-mobile-view.png"
                  className="preview-image-2"
                  alt="Mobile view"
                />
                <img
                  src="assets/img/preview-gallery/live-chat-activity.jpg"
                  className="preview-image-3 animate-float-bob-y"
                  alt="Chat Activity"
                />
                <img
                  src="assets/img/preview-gallery/live-chat-onboard-clients.jpg"
                  className="preview-image-4 animate-float-bob-x"
                  alt="Chat onboard"
                />
              </div>
            </div>
            <div className="col-lg-5 col-md-10">
              <div className="collaboration-text p-l-30 p-l-md-0">
                <div className="common-heading title-line-bottom m-b-40">
                  <span className="tagline">Collaboration With Chat</span>
                  <h2 className="title">
                    Response Chat Videos Anywhere Location ​​
                  </h2>
                  <img
                    src="assets/img/particle/title-line-2.png"
                    alt="Image"
                    className="Line"
                  />
                </div>
                <p className="m-b-15">
                  On the other hand denounce with righteous indignation and
                  dislike men who are beguiled and demoralized by the charms
                  pleasure moment so blinded.
                </p>
                <p>
                  Beguiled and demoralized by charms please moment blinded
                  desire that they cannot foresee.
                </p>
                <a
                  href="#"
                  className="template-btn template-btn-2 primary-bg-3 m-t-40"
                >
                  Get Started Now <i className="far fa-arrow-right" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*====== Collaboration Area End ======*/}
      {/*====== Design Feature Area Start ======*/}
      <section className="design-feature-area bg-soft-grey-color overflow-hidden p-t-130 p-b-130">
        <div className="container">
          <div className="row justify-content-lg-between justify-content-center">
            <div className="col-lg-7 col-md-9 col-sm-10">
              <div className="preview-galley-v5 m-l-50 m-l-md-0 m-b-md-80">
                <div className="preview-image-one">
                  <img
                    src="assets/img/preview-gallery/connect-with-team-1.jpg"
                    alt="connect team one"
                    className="animate-float-bob-x"
                  />
                </div>
                <div className="preview-image-two">
                  <img
                    src="assets/img/preview-gallery/connect-with-team-2.jpg"
                    alt="connect team two"
                    className="animate-float-bob-y"
                  />
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-lg-5 col-md-9 col-sm-11 order-lg-first">
              <div className="design-feature-text">
                <div className="common-heading title-line-bottom m-b-30">
                  <span className="tagline">Easy Chatting UI</span>
                  <h2 className="title">Remote Connection With Teams​​</h2>
                  <img
                    src="assets/img/particle/title-line-2.png"
                    alt="Image"
                    className="Line"
                  />
                </div>
                <p>
                  But I must explain to you how all this mistaken denouncing
                  pleasure and praising pain was born give you a complete
                  account.
                </p>
                <ul className="check-list-2 m-t-40">
                  <li>Easy To Collaborate With User</li>
                  <li>Manage Team &amp; Users Flow</li>
                  <li>Upgrade UI Design</li>
                </ul>
                <a
                  href="#"
                  className="template-btn template-btn-2 secondary-3-bg m-t-40"
                >
                  Learn More <i className="far fa-arrow-right" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*====== Design Feature Area End ======*/}
      {/*====== Service Section Start ======*/}
      <section className="service-section border-bottom-primary-3 p-t-130 p-b-130 ">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-6 col-lg-8">
              <div className="common-heading title-line-bottom text-center m-b-20">
                <span className="tagline">What We Do</span>
                <h2 className="title">
                  We Offer Smart Chat Solutions​​ For Better Collaboration
                </h2>
                <img
                  src="assets/img/particle/title-line-2.png"
                  alt="Image"
                  className="Line"
                />
              </div>
            </div>
            <div className="col-xl-10 col-lg-12">
              <div className="row fancy-icon-boxes-v2">
                <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.2s">
                  <div className="fancy-icon-box color-1 m-t-30">
                    <div className="box-icon">
                      <i className="flaticon-video-player" />
                    </div>
                    <div className="box-content">
                      <h4 className="title">
                        <a href="#">Video Meeting</a>
                      </h4>
                      <p>
                        Quis autem veleum reprende voluptate veesse quam
                        molestic onseq velillum dolorem
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.3s">
                  <div className="fancy-icon-box color-2 m-t-30">
                    <div className="box-icon">
                      <i className="flaticon-volume" />
                    </div>
                    <div className="box-content">
                      <h4 className="title">
                        <a href="#">Enhanced Audio</a>
                      </h4>
                      <p>
                        Sed ut perspiciatis undeonis natus error sit voluacc
                        santium doloremque laudantium
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.4s">
                  <div className="fancy-icon-box color-3 m-t-30">
                    <div className="box-icon">
                      <i className="flaticon-live-chat" />
                    </div>
                    <div className="box-content">
                      <h4 className="title">
                        <a href="#">Live Streaming</a>
                      </h4>
                      <p>
                        But I must explain to you how all this mistaken ideden
                        uncing pleasure and praising
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.5s">
                  <div className="fancy-icon-box color-4 m-t-30">
                    <div className="box-icon">
                      <i className="flaticon-microphone" />
                    </div>
                    <div className="box-content">
                      <h4 className="title">
                        <a href="#">Call Recording</a>
                      </h4>
                      <p>
                        On the other hand denounce with righteous indignation
                        and dislike men beguiled
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*====== Service Section End ======*/}
      {/*====== App Feature Start ======*/}
      <section className="app-feature p-t-130 p-b-130 border-top-primary-3 overflow-hidden">
        <div className="container">
          <div className="row justify-content-lg-between justify-content-center align-items-center">
            <div className="col-lg-7 col-md-10">
              <div className="preview-image-v3 text-center m-r-40 m-b-md-60 wow fadeInLeft">
                <img
                  src="assets/img/preview-gallery/promote-app-preview.png"
                  alt
                />
              </div>
            </div>
            <div className="col-lg-5 col-md-10">
              <div className="collaboration-text p-l-30 p-l-md-0">
                <div className="common-heading title-line-bottom m-b-40">
                  <span className="tagline">Explore Features</span>
                  <h2 className="title">
                    Promote Your App With Landing Pages​​
                  </h2>
                  <img
                    src="assets/img/particle/title-line-2.png"
                    alt="Image"
                    className="Line"
                  />
                </div>
                <p className="m-b-15">
                  On the other hand, we denounce with righteous indignation and
                  dislike men who are beguiled and demoralized the charms of
                  pleasure.
                </p>
                <p>
                  At vero eos et accusamus et iusto odio dignissimos ducimus
                  blanditiis praesentium volupta
                </p>
                <a
                  href="#"
                  className="template-btn template-btn-2 primary-bg-3 m-t-40"
                >
                  Learn More <i className="far fa-arrow-right" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*====== App Feature End ======*/}
      {/*====== Start Testimonials Area ======*/}
      <section className="testimonials-section p-t-130 p-b-130 bg-heading-color">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-5">
              <div className="common-heading text-center title-line-bottom heading-white m-b-30">
                <span className="tagline">Explore Features</span>
                <h2 className="title">Promote Your App With Landing Pages​​</h2>
                <img
                  src="assets/img/particle/title-line-2.png"
                  alt="Image"
                  className="Line"
                />
              </div>
            </div>
          </div>
          <div className="row testimonial-boxes-v1">
            <div className="col-lg-4 col-md-6">
              <div
                className="testimonial-box m-t-80 m-t-md-30 wow fadeInUp"
                data-wow-delay="0.1s"
              >
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
              <div
                className="testimonial-box m-t-30 wow fadeInUp"
                data-wow-delay="0.2s"
              >
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
            <div className="col-lg-4 col-md-6">
              <div
                className="testimonial-box m-t-40 m-t-md-30 wow fadeInUp"
                data-wow-delay="0.3s"
              >
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
              <div
                className="testimonial-box m-t-30 wow fadeInUp"
                data-wow-delay="0.4s"
              >
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
                      src="assets/img/testimonial/author-brand-5.png"
                      alt="Brand"
                    />
                  </div>
                </div>
                <p className="author-comments">
                  Ut enim ad minima veniam nostrum exercitationem corporis
                  laboriosamc aliquid exea commodi conse
                </p>
                <div className="author-info">
                  <img
                    src="assets/img/testimonial/author-small-5.png"
                    alt="testimonial author"
                  />
                  <h6 className="name">
                    Ronald A. Kawakami{" "}
                    <span className="title">Web Developer</span>
                  </h6>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-12">
              <div className="row">
                <div className="col-lg-12 col-md-6">
                  <div
                    className="testimonial-box m-t-30 wow fadeInUp"
                    data-wow-delay="0.5s"
                  >
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
                          src="assets/img/testimonial/author-brand-3.png"
                          alt="Brand"
                        />
                      </div>
                    </div>
                    <p className="author-comments">
                      On the other hand we denounceeys with righteous indignate
                    </p>
                    <div className="author-info">
                      <img
                        src="assets/img/testimonial/author-small-3.png"
                        alt="testimonial author"
                      />
                      <h6 className="name">
                        Ronald A. Kawakami{" "}
                        <span className="title">Web Developer</span>
                      </h6>
                    </div>
                  </div>
                </div>
                <div className="col-lg-12 col-md-6">
                  <div
                    className="testimonial-box m-t-30 wow fadeInUp"
                    data-wow-delay="0.6s"
                  >
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
                      Quis autem vel eumr eprehenderit quinea voluptate velit
                      esse quanihile molestiae consequatur vel illum qui dolorem
                      eum fugiat quo.
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
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*====== End Testimonials Area ======*/}
      {/*====== Start Latest News ======*/}
      <section className="latest-news-section p-t-130 p-b-130">
        <div className="container">
          <div className="row">
            <div className="col-lg-5">
              <div className="common-heading m-b-30">
                <span className="tagline">News &amp; Block</span>
                <h2 className="title">
                  Get Our Every Single Update &amp; Tips
                </h2>
                <img
                  src="assets/img/particle/title-line-2.png"
                  alt="Image"
                  className="Line"
                />
              </div>
            </div>
          </div>
          <div className="row justify-content-center latest-news-v2">
            <div className="col-lg-4 col-md-6 col-sm-9">
              <div className="latest-news-box m-t-30">
                <div className="post-thumbnail">
                  <img
                    src="assets/img/blog/blog-thumbnail-3.jpg"
                    alt="Thumbnail"
                  />
                </div>
                <div className="post-content">
                  <ul className="post-meta">
                    <li>
                      <a href="#">
                        <i className="far fa-calendar-alt" />
                        25 May 2021
                      </a>
                    </li>
                  </ul>
                  <h4 className="title">
                    <Link href="/blog-details">
                      <a>Data Visualization Improve Mobile Experience.</a>
                    </Link>
                  </h4>
                  <div className="post-author">
                    <img
                      src="assets/img/blog/post-author-1.jpg"
                      alt="Post Author"
                    />
                    <a href="#">Edward K. Brown</a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-9">
              <div className="latest-news-box m-t-30">
                <div className="post-thumbnail">
                  <img
                    src="assets/img/blog/blog-thumbnail-4.jpg"
                    alt="Thumbnail"
                  />
                </div>
                <div className="post-content">
                  <ul className="post-meta">
                    <li>
                      <a href="#">
                        <i className="far fa-calendar-alt" />
                        25 May 2021
                      </a>
                    </li>
                  </ul>
                  <h4 className="title">
                    <Link href="/blog-details">
                      <a>Should You Do Whe Web Design Trend Too.</a>
                    </Link>
                  </h4>
                  <div className="post-author">
                    <img
                      src="assets/img/blog/post-author-2.jpg"
                      alt="Post Author"
                    />
                    <a href="#">Edward K. Brown</a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-9">
              <div className="latest-news-box m-t-30">
                <div className="post-thumbnail">
                  <img
                    src="assets/img/blog/blog-thumbnail-5.jpg"
                    alt="Thumbnail"
                  />
                </div>
                <div className="post-content">
                  <ul className="post-meta">
                    <li>
                      <a href="#">
                        <i className="far fa-calendar-alt" />
                        25 May 2021
                      </a>
                    </li>
                  </ul>
                  <h4 className="title">
                    <Link href="/blog-details">
                      <a>Make Honest Design Work For Digital Business.</a>
                    </Link>
                  </h4>
                  <div className="post-author">
                    <img
                      src="assets/img/blog/post-author-3.jpg"
                      alt="Post Author"
                    />
                    <a href="#">Edward K. Brown</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*====== End Latest News ======*/}
      {/*====== Newsletter Area Start ======*/}
      <section
        className="newsletter-area bg-cover-center bg-soft-grey-color p-t-130 p-b-130"
        style={{
          backgroundImage: "url(assets/img/particle/newsletter-bg.png)",
        }}
      >
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-7 col-lg-10 col-md-11">
              <div className="newsletter-text">
                <div className="common-heading text-center m-b-40 p-0 px-lg-5">
                  <span className="tagline">Newsletter Subscribe</span>
                  <h2 className="title">
                    Subscribe Our Newsletter To Get More Update
                  </h2>
                  <img
                    src="assets/img/particle/title-line-2.png"
                    alt="Image"
                    className="Line"
                  />
                </div>
                <form action="#" className="newsletter-form form-two">
                  <div className="input-field">
                    <input
                      type="email"
                      placeholder="Enter Your Email Address"
                    />
                    <button className="template-btn template-btn-2 primary-bg-3">
                      Subscribe Now <i className="far fa-arrow-right" />
                    </button>
                  </div>
                  <p className="text-center m-t-25">
                    On the other hand, we denounce with righteous
                  </p>
                </form>
              </div>
            </div>
          </div>
        </div>
        <div className="newsletter-particle-effect d-none d-md-block">
          <img
            className="particle-1 animate-float-bob-y"
            src="assets/img/particle/particle-2.png"
            alt="particle Two"
          />
          <img
            className="particle-2 animate-zoominout"
            src="assets/img/particle/particle-3.png"
            alt="particle Three"
          />
          <img
            className="particle-3 animate-zoominout"
            src="assets/img/particle/particle-4.png"
            alt="particle Four"
          />
          <img
            className="particle-4 animate-zoominout"
            src="assets/img/particle/particle-5.png"
            alt="particle Five"
          />
        </div>
      </section>
      {/*====== Newsletter Area End ======*/}
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
                  <ul className="social-links primary-color-3 m-t-20">
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
                <div className="widget pl-xl-5">
                  <h5 className="widget-title">Download</h5>
                  <ul>
                    <li className="m-b-10">
                      <Link href="/services">
                        <a className="template-btn template-btn-2 secondary-3-bg shadow-none">
                          Apple Store <i className="fab fa-apple" />
                        </a>
                      </Link>
                    </li>
                    <li>
                      <Link href="/services">
                        <a className="template-btn template-btn-2 bg-soft-grey-color">
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
        <div className="footer-copyright border-top-primary-3">
          <div className="container">
            <div className="row align-items-center justify-content-between">
              <div className="col-sm-auto col-12">
                <div className="copyright-logo text-center text-sm-left">
                  <img src="assets/img/logo-2.png" alt="Landio" />
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

export default Index4;
