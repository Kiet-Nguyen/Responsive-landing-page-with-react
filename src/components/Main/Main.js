import React from 'react';

import '../../index.css';
import './Main.css';
import {
  faMobileAlt,
  faTv,
  faLaptop,
  faRecycle,
} from '@fortawesome/free-solid-svg-icons';
import placeholderImg from '../../assets/img-placeholder.png';
import Banner from './Banner/Banner';
import Intro from './Intro/Intro';
import Work from './Work/Work';
import Testimonial from './Testimonial/Testimonial';
import Development from './Development/Development';

const Main = () => (
  <main className="main border-img">
    <div className="container">
      <section className="section-intro">
        <div className="row">
          <Intro
            icon={faMobileAlt}
            highlightText="Superly "
            headingText="responsive"
            descriptionText="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua..."
          />

          <Intro
            icon={faTv}
            highlightText="Squeeky "
            headingText="clean"
            descriptionText="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua..."
          />

          <Intro
            icon={faLaptop}
            highlightText="Multi "
            headingText="purpose"
            descriptionText="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua..."
          />

          <Intro
            icon={faRecycle}
            highlightText="Highly "
            headingText="flexible"
            descriptionText="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua..."
          />
        </div>
      </section>

      <section className="section-work border-img">
        <h4 className="absolut-heading">Recent work</h4>
        <div className="row">
          <Work
            imgSrc={placeholderImg}
            title="Blog title 1"
            content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
          />

          <Work
            imgSrc={placeholderImg}
            title="Blog title 2"
            content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
          />
    
          <Work
            imgSrc={placeholderImg}
            title="Blog title 3"
            content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
          />
        </div>
      </section>

      {/* Section testimonials and development */}
      <section className="section-testimonials">
        <div className="row">
          <div className="col-8">
            <div className="section-testimonial border-img">
              <h4 className="absolut-heading">Testimonials</h4>
              <div className="row">
                <Testimonial
                  name="John Smith"
                  story="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
                />

                <Testimonial
                  name="Jessica Johnson"
                  story="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
                />
                
                <Testimonial
                  name="James Parker"
                  story="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
                />
                
                <Testimonial
                  name="Mike Schumacher"
                  story="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
                />
              </div>
            </div>
          </div>

          <aside className="col-4">
            <div className="section-development border-img">
              <h4 className="absolut-heading">Development</h4>

              <div className="tabs">
                {/* Tab 1 */}
                <input type="radio" id="tab-1" name="tab-group-1" checked />
                <label className="tab__label btn-gray200" for="tab-1">Design</label>

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

                  <a className="anchor btn-sm btn-blue tab-btn btn" href="https://reactjs.org/">Read more</a>
                </div>

                {/* Tab 2 */}
                <input type="radio" id="tab-2" name="tab-group-1" />
                <label className="tab__label btn-gray200" for="tab-2">Production</label>

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
      </section>

      <Banner
        headingPart1="Get in touch with us"
        highlight=" now "
        headingPart2=""
        buttonText="Contact us"
      />
    </div>
  </main>
);

export default Main;
