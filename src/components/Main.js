import React from 'react';

import '../index.css';
import './Main.css';
import placeholderImg from '../assets/img-placeholder.png';

const Main = () => {
  return (
    <main className="main border-img">
      <div className="container">
        <section className="section-intro">
          <div className="row">
            <div className="col-3">
              <div className="intro-item hover-effect">
                <div className="intro-item__icon mb-1">
                  <i className="fas fa-mobile-alt fa-icon"></i>
                </div>

                <h3 className="intro-item__header mb-1">
                  <b className="h3-highlight">Superly</b>
                   responsive
                </h3>

                <p className="intro-item__text mb-1">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua...
                </p>

                <a className="anchor btn btn-blue btn-sm mb-1" href="https://reactjs.org/">Read more</a>
              </div>
            </div>
          
            <div className="col-3">
              <div className="intro-item hover-effect">
                <div className="intro-item__icon mb-1">
                  <i className="fas fa-tv fa-icon"></i>
                </div>

                <h3 className="intro-item__header mb-1">
                  <b className="h3-highlight">Squeeky</b>
                   clean
                </h3>

                <p className="intro-item__text mb-1">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua...
                </p>

                <a className="anchor btn btn-blue btn-sm mb-1" href="https://reactjs.org/">Read more</a>
              </div>
            </div>

            <div className="col-3">
              <div className="intro-item hover-effect">
                <div className="intro-item__icon mb-1">
                  <i className="fas fa-laptop fa-icon"></i>
                </div>

                <h3 className="intro-item__header mb-1">
                  <b className="h3-highlight">Multi</b>
                   purpose
                </h3>

                <p className="intro-item__text mb-1">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua...
                </p>

                <a className="anchor btn btn-blue btn-sm mb-1" href="https://reactjs.org/">Read more</a>
              </div>
            </div>

            <div className="col-3">
              <div className="intro-item hover-effect">
                <div className="intro-item__icon mb-1">
                  <i className="fas fa-recycle fa-icon"></i>
                </div>

                <h3 className="intro-item__header mb-1">
                  <b className="h3-highlight">Highly</b> 
                  flexible
                </h3>

                <p className="intro-item__text mb-1">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua...
                </p>

                <a className="anchor btn btn-blue btn-sm mb-1" href="https://reactjs.org/">Read more</a>
              </div>
            </div>
          </div>
        </section>

        <section className="section-work border-img">
          <h4 className="absolut-heading">Recent work</h4>

          <div className="row">
            <div className="col-4">
              <div className="blog-item arrow-after shadow-effect">
                <div className="blog-item__image">
                  <img src={placeholderImg} alt="Blog" className="img-responsive" />
                </div>

                <h5 className="blog-item__title">Blog title</h5>

                <p className="blog-item__text">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
              </div>
            </div>

            <div className="col-4">
              <div className="blog-item arrow-after shadow-effect">
                <div className="blog-item__image">
                  <img src={placeholderImg} alt="Blog" className="img-responsive" />
                </div>

                <h5 className="blog-item__title">Blog title</h5>

                <p className="blog-item__text">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
              </div>
            </div>
      
            <div className="col-4">
              <div className="blog-item arrow-after shadow-effect">
                <div className="blog-item__image">
                  <img src={placeholderImg} alt="Blog" className="img-responsive" />
                </div>

                <h5 className="blog-item__title">Blog title</h5>

                <p className="blog-item__text">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Section testimonials and development */}
        <div className="row">
          <div className="col-8">
            <div className="section-testimonial border-img">
              <h4 className="absolut-heading">Testimonials</h4>
              <div className="row">
                {/* Testimonial 1 */}
                <div className="col-6">
                  <div className="testimonial-item arrow-after shadow-effect">
                    <h5 className="testimonial-item__title">John Smith</h5>

                    <q className="testimonial-item__quote">
                      <i>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                      </i>
                    </q>
                  </div>
                </div>
      
                {/* Testimonial 2 */}
                <div className="col-6">
                  <div className="testimonial-item arrow-after shadow-effect">
                    <h5 className="testimonial-item__title">Jessica Johnson</h5>

                    <q className="testimonial-item__quote">
                      <i>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                      </i>
                    </q>
                  </div>
                </div>
    
                {/* Testimonial 3 */}
                <div className="col-6">
                  <div className="testimonial-item arrow-after shadow-effect">
                    <h5 className="testimonial-item__title">James Parker</h5>

                    <q className="testimonial-item__quote">
                      <i>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                      </i>
                        </q>
                      </div>
                    </div>
      
                {/* Testimonial 4 */}
                <div className="col-6">
                  <div className="testimonial-item arrow-after shadow-effect">
                    <h5 className="testimonial-item__title">Mike Schumacher</h5>

                    <q className="testimonial-item__quote">
                      <i>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                      </i>
                    </q>
                  </div>
                </div>
              </div>
            </div>
          </div>
        
          <aside className="col-4">
            <div className="section-development border-img">
              <h4 className="absolut-heading">Development</h4>

              <div className="tabs">
                {/* Tab 1 */}
                <input type="radio" id="tab-1" name="tab-group-1" checked />
                <label className="tab__label btn btn-gray200" for="tab-1">Design</label>

                <div className="tab__content">
                  <h5 className="content-title">The design</h5>

                  <p className="content-text">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  </p>

                  <div className="content-quote">
                    <q>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    </q>
                  </div>

                  <a className=" anchor btn-sm btn-blue tab-btn" href="https://reactjs.org/">Read more</a>
                </div>

                {/* Tab 2 */}
                <input type="radio" id="tab-2" name="tab-group-1" />
                <label className="tab__label btn btn-gray200" for="tab-2">Production</label>

                <div className="tab__content">
                  <h5 className="content-title">The production</h5>

                  <p className="content-text">
                    Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam.
                  </p>

                  <div className="content-quote">
                    <q>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    </q>
                  </div>

                  <a className=" anchor btn-sm btn-blue tab-btn" href="https://reactjs.org/">Read more</a>
                </div>
              </div>
            </div>
          </aside>
        </div>

        <div className="banner">
          <h5 className="h2 banner-title">
            Get in touch with us
            <span className="h1-highlight"><i>now </i></span>
          </h5>
          
          <a className="anchor btn btn-gray200" href="https://reactjs.org/">Contact us</a>
        </div>
      </div>
    </main>
  );
};

export default Main;
