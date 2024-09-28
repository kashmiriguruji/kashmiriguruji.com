import Link from "next/link";
import Subscribe from "../src/components/Subscribe";
import Layouts from "../src/layouts/Layouts";

const Portfolio2 = () => {
  return (
    <Layouts pageTitle="Portfolio">
      <section className="portfolio-section p-t-130 p-b-100">
        <div className="container">
          <div className="portfolio-items row">
            <div className="col-sm-6">
              <div className="portfolio-box-two m-b-30">
                <div className="portfolio-thumb">
                  <Link href="/portfolio-details">
                    <a
                      style={{
                        backgroundImage: `url(assets/img/portfolio/13.webp)`,
                      }}
                    ></a>
                  </Link>
                </div>
                <h5 className="title">
                  <Link href="/portfolio-details">
                    <a>The Blade’s Illusion</a>
                  </Link>
                </h5>
                <div className="tags">
                  <a href="#">App</a>
                  <a href="#">Design</a>
                </div>
              </div>
            </div>
            <div className="col-sm-6">
              <div className="portfolio-box-two m-b-30">
                <div className="portfolio-thumb">
                  <div className="portfolio-thumb">
                    <Link href="/portfolio-details">
                      <a
                        style={{
                          backgroundImage: `url(assets/img/portfolio/14.webp)`,
                        }}
                      ></a>
                    </Link>
                  </div>
                </div>
                <h5 className="title">
                  <Link href="/portfolio-details">Sparks of Elves</Link>
                </h5>
                <div className="tags">
                  <a href="#">App</a>
                  <a href="#">Design</a>
                </div>
              </div>
            </div>
            <div className="col-sm-6">
              <div className="portfolio-box-two m-b-30">
                <div className="portfolio-thumb">
                  <div className="portfolio-thumb">
                    <Link href="/portfolio-details">
                      <a
                        style={{
                          backgroundImage: `url(assets/img/portfolio/15.webp)`,
                        }}
                      ></a>
                    </Link>
                  </div>
                </div>
                <h5 className="title">
                  <Link href="/portfolio-details">Thoughts of World</Link>
                </h5>
                <div className="tags">
                  <a href="#">App</a>
                  <a href="#">Design</a>
                </div>
              </div>
            </div>
            <div className="col-sm-6">
              <div className="portfolio-box-two m-b-30">
                <div className="portfolio-thumb">
                  <div className="portfolio-thumb">
                    <Link href="/portfolio-details">
                      <a
                        style={{
                          backgroundImage: `url(assets/img/portfolio/16.webp)`,
                        }}
                      ></a>
                    </Link>
                  </div>
                </div>
                <h5 className="title">
                  <Link href="/portfolio-details">The Professional Theft</Link>
                </h5>
                <div className="tags">
                  <a href="#">App</a>
                  <a href="#">Design</a>
                </div>
              </div>
            </div>
            <div className="col-sm-6">
              <div className="portfolio-box-two m-b-30">
                <div className="portfolio-thumb">
                  <div className="portfolio-thumb">
                    <Link href="/portfolio-details">
                      <a
                        style={{
                          backgroundImage: `url(assets/img/portfolio/17.webp)`,
                        }}
                      ></a>
                    </Link>
                  </div>
                </div>
                <h5 className="title">
                  <Link href="/portfolio-details">The Which Waves</Link>
                </h5>
                <div className="tags">
                  <a href="#">App</a>
                  <a href="#">Design</a>
                </div>
              </div>
            </div>
            <div className="col-sm-6">
              <div className="portfolio-box-two m-b-30">
                <div className="portfolio-thumb">
                  <div className="portfolio-thumb">
                    <Link href="/portfolio-details">
                      <a
                        style={{
                          backgroundImage: `url(assets/img/portfolio/18.webp)`,
                        }}
                      ></a>
                    </Link>
                  </div>
                </div>
                <h5 className="title">
                  <Link href="/portfolio-details">Azure Emerald</Link>
                </h5>
                <div className="tags">
                  <a href="#">App</a>
                  <a href="#">Design</a>
                </div>
              </div>
            </div>
            <div className="col-sm-6">
              <div className="portfolio-box-two m-b-30">
                <div className="portfolio-thumb">
                  <div className="portfolio-thumb">
                    <Link href="/portfolio-details">
                      <a
                        style={{
                          backgroundImage: `url(assets/img/portfolio/19.webp)`,
                        }}
                      ></a>
                    </Link>
                  </div>
                </div>
                <h5 className="title">
                  <Link href="/portfolio-details">The Grey Worlds</Link>
                </h5>
                <div className="tags">
                  <a href="#">App</a>
                  <a href="#">Design</a>
                </div>
              </div>
            </div>
            <div className="col-sm-6">
              <div className="portfolio-box-two m-b-30">
                <div className="portfolio-thumb">
                  <div className="portfolio-thumb">
                    <Link href="/portfolio-details">
                      <a
                        style={{
                          backgroundImage: `url(assets/img/portfolio/20.webp)`,
                        }}
                      ></a>
                    </Link>
                  </div>
                </div>
                <h5 className="title">
                  <Link href="/portfolio-details">The Luscious Elves</Link>
                </h5>
                <div className="tags">
                  <a href="#">App</a>
                  <a href="#">Design</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Subscribe />
    </Layouts>
  );
};

export default Portfolio2;
