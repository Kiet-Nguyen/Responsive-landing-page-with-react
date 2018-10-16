import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowAltCircleUp, faPiggyBank } from '@fortawesome/free-solid-svg-icons';
import {
  faTwitterSquare,
  faFacebookSquare,
  faVimeoSquare,
  faGooglePlusSquare,
  faPinterestSquare,
} from '@fortawesome/free-brands-svg-icons';

import './Footer.css';

const Footer = () => {
  return (
    <footer>
      <div className="section-footer">
        <div className="container">
          <div className="row">
            {/* About us */}
            <div className="col-3 mx-5 ml-0 py-1">
              <h5 className="h4 text-white mb-2">About us</h5>
      
              <p className="mb-2">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
        
              <p>
                123 Street name
                <br />
                 Road name
                <br />
                 Finland
                <br />
                 +358 1234567
              </p>
            </div>
      
            {/* Latest tweets */}
            <div className="col-3 mx-5 py-1">
              <h5 className="h4 text-white mb-2">Latest tweets</h5>
      
              <p className="mb-2">
                <a className="anchor text-white" href="https://twitter.com">@Jaynesh </a>
                Just submitted another great item on
                <a className="anchor text-white" href="https://twitter.com">@themeforest </a>
                <br />
                <span className="text-small">about 3 hours ago.</span>
              </p>
      
              <p>
                <a className="anchor text-white" href="https://twitter.com">@Jaynesh</a>
                Working on an awesome theme for
                <a className="anchor text-white" href="https://twitter.com">@themeforest</a>
                <br />
                <span className="text-small">about 3 hours ago.</span>
              </p>
            </div>
      
            {/* Latest posts */}
            <div className="col-3 mx-5 py-1">
              <h5 className="h4 text-white mb-2">Latest posts</h5>
      
              <p className="mb-2 post-item">
                Lorem ipsum dolor sit amet consec...
              </p>
        
              <p className="mb-2 post-item text-blue">
                Sed do eiusmod tempor incididunt ut labore et...
              </p>
        
              <p className="mb-2 post-item">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt...
              </p>
      
              <p className="mb-2 post-item">
                Lorem ipsum dolor sit amet,...
              </p>
            </div>
      
            {/* Flickr */}
            <div className="col-3 mx-5 py-1 mr-0 over-flow-y">
              <h5 className="h4 text-white mb-2">Flickr</h5>
        
              <div className="flex-container">
                <div className="col-3 flex-item"><span className="text-transparent">.</span></div>
                <div className="col-3 flex-item"><span className="text-transparent">.</span></div>
                <div className="col-3 flex-item"><span className="text-transparent">.</span></div>
                <div className="col-3 flex-item"><span className="text-transparent">.</span></div>
                <div className="col-3 flex-item"><span className="text-transparent">.</span></div>
                <div className="col-3 flex-item"><span className="text-transparent">.</span></div>
                <div className="col-3 flex-item"><span className="text-transparent">.</span></div>
                <div className="col-3 flex-item"><span className="text-transparent">.</span></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    
      <div className="copyright py-2 pr-6">
        {/* <div className="pr-2"> */}
        <div className="container">
          <div className="row">
            <div className="col-6">
              <p className="copyright__text">
                Copyright @ 2017-2018 Ventus Inc. All right reserved.
              </p>
            </div>
        
            <div className="col-6">
              <div className="copyright__media float">
                <div className="media-item">
                  <FontAwesomeIcon className="fab media-icon" icon={faTwitterSquare} />
                  <span className="icon-name-hover">Twitter</span>
                </div>

                <div className="media-item">
                  <FontAwesomeIcon className="fab media-icon" icon={faFacebookSquare} />
                  <span className="icon-name-hover">Facebook</span>
                </div>

                <div className="media-item">
                  <FontAwesomeIcon className="fab media-icon" icon={faVimeoSquare} />
                  <span className="icon-name-hover">Vimeo</span>
                </div>

                <div className="media-item">
                  <FontAwesomeIcon className="fab media-icon" icon={faPiggyBank} />
                  <span className="icon-name-hover">Piggy</span>
                </div>

                <div className="media-item">
                  <FontAwesomeIcon className="fab media-icon" icon={faGooglePlusSquare} />
                  <span className="icon-name-hover">Goggle+</span>
                </div>

                <div className="media-item">
                  <FontAwesomeIcon className="fab media-icon" icon={faPinterestSquare} />
                  <span className="icon-name-hover">Pinterest</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div>
          <a className="anchor scroll-top-btn" href="#top">
            <FontAwesomeIcon className="fas" icon={faArrowAltCircleUp} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
