import React from 'react';
import img_1 from '../../images/img_1.jpg';
import img_2 from '../../images/img_2.jpg';
import img_3 from '../../images/img_3.jpg';
import img_4 from '../../images/img_4.jpg';
import img_5 from '../../images/img_5.jpg';
import img_6 from '../../images/img_6.jpg';
import person_1 from '../../images/person_1.jpg';
import person_2 from '../../images/person_2.jpg';
import person_3 from '../../images/person_3.jpg';
import person_4 from '../../images/person_4.jpg';

var hero_b1_1 = require('../../images/hero_b1_1.jpg');
var hero_bg_2 = require('../../images/hero_bg_2.jpg');
var bg_2 = require('../../images/bg_2.jpg');

const Landing = () => {
  return (
    <div>
      <div className="slide-one-item home-slider owl-carousel">
        <div
          className="site-blocks-cover inner-page"
          style={{ backgroundImage: 'url(' + hero_b1_1 + ')' }}
          data-aos="fade"
          data-stellar-background-ratio="0.5"
        >
          {/* <!-- <div className="container"> --> */}
          <div className="row align-items-center justify-content-center">
            <div className="col-md-7 text-center" data-aos="fade">
              <h1>Welcome To Crossfits</h1>
              <span className="caption d-block text-white">
                Find The Healthy Way
              </span>
            </div>
          </div>
          {/* <!-- </div> --> */}
        </div>

        <div
          className="site-blocks-cover inner-page"
          style={{ backgroundImage: 'url(' + hero_bg_2 + ')' }}
          data-aos="fade"
          data-stellar-background-ratio="0.5"
        >
          {/* <!-- <div className="container"> --> */}
          <div className="row align-items-center justify-content-center">
            <div className="col-md-7 text-center" data-aos="fade">
              <h1>Optimize Your Health</h1>
              <span className="caption d-block text-white">
                Effective Program
              </span>
            </div>
          </div>
          {/* <!-- </div> --> */}
        </div>
      </div>

      <div className="site-section">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <h2 className="site-section-heading text-center">
                Popular Program
              </h2>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12 block-13 nav-direction-white">
              <div className="nonloop-block-13 owl-carousel">
                <div className="media-image">
                  <img src={img_1} alt="Image" className="img-fluid" />
                  <div className="media-image-body">
                    <h2>Body Building</h2>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Fuga, voluptate.
                    </p>
                    <p>
                      <a href="#" className="btn btn-primary text-white px-4">
                        <span className="caption">Learn More</span>
                      </a>
                    </p>
                  </div>
                </div>
                <div className="media-image">
                  <img src={img_2} alt="Image" className="img-fluid" />
                  <div className="media-image-body">
                    <h2>Body Combat</h2>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Fuga, voluptate.
                    </p>
                    <p>
                      <a href="#" className="btn btn-primary text-white px-4">
                        <span className="caption">Learn More</span>
                      </a>
                    </p>
                  </div>
                </div>
                <div className="media-image">
                  <img src={img_3} alt="Image" className="img-fluid" />
                  <div className="media-image-body">
                    <h2>Push Up</h2>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Fuga, voluptate.
                    </p>
                    <p>
                      <a href="#" className="btn btn-primary text-white px-4">
                        <span className="caption">Learn More</span>
                      </a>
                    </p>
                  </div>
                </div>
                <div className="media-image">
                  <img src={img_4} alt="Image" className="img-fluid" />
                  <div className="media-image-body">
                    <h2>Weight Lifting</h2>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Fuga, voluptate.
                    </p>
                    <p>
                      <a href="#" className="btn btn-primary text-white px-4">
                        <span className="caption">Learn More</span>
                      </a>
                    </p>
                  </div>
                </div>
                <div className="media-image">
                  <img src={img_5} alt="Image" className="img-fluid" />
                  <div className="media-image-body">
                    <h2>Body Combat</h2>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Fuga, voluptate.
                    </p>
                    <p>
                      <a href="#" className="btn btn-primary text-white px-4">
                        <span className="caption">Learn More</span>
                      </a>
                    </p>
                  </div>
                </div>
                <div className="media-image">
                  <img src={img_6} alt="Image" className="img-fluid" />
                  <div className="media-image-body">
                    <h2>Body Combat</h2>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Fuga, voluptate.
                    </p>
                    <p>
                      <a href="#" className="btn btn-primary text-white px-4">
                        <span className="caption">Learn More</span>
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="site-section">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <p className="mb-5">
                <img src={img_1} alt="Image" className="img-fluid" />
              </p>
            </div>
            <div className="col-lg-5 ml-auto">
              <h2 className="site-section-heading mb-3">The Club</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim
                ad, tempora incidunt accusantium. Similique magni quaerat beatae
                illo aliquid. Libero non ipsa nisi, corporis architecto incidunt
                rem repellendus asperiores numquam!
              </p>
              <p className="mb-4">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Impedit explicabo odio officiis autem minima quibusdam.
              </p>
              <p>
                <a href="#" className="btn btn-outline-primary py-2 px-4">
                  Join Our Club
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>

      <div
        className="site-section bg-image"
        style={{
          backgroundImage: 'url(' + bg_2 + ')',
          backgroundAttachment: 'fixed'
        }}
      >
        <div className="container">
          <div className="row mb-5">
            <div className="col-md-12">
              <h2 className="site-section-heading text-center text-white">
                Featured Trainer
              </h2>
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col-md-7 text-center">
              <img
                src={person_3}
                alt="Image"
                className="img-fluid rounded-circle w-25 mb-4"
              />
              <h2 className="h5 mb-4 text-white">Shane Green</h2>
              <p className="text-white mb-5 lead">
                &ldquo;Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Expedita et aliquam fuga dicta amet ad laborum error recusandae,
                voluptatibus quam minima sed, saepe odio voluptatem. Sed unde
                hic, vitae fugiat.&rdquo;
              </p>
              <p>
                <a href="#" className="btn btn-primary text-white">
                  Make Me Your Trainer
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="site-section">
        <div className="container">
          <div className="row mb-5">
            <div className="col-md-12">
              <h2 className="site-section-heading text-center">
                Crossfit Exercises
              </h2>
            </div>
          </div>
          <div className="row">
            <div className="col-md-4 text-center mb-4">
              <div className="border p-4 text-with-icon">
                <span className="flaticon-weightlifting icon display-4 mb-4 d-block text-primary" />
                <h2 className="h5">Weight Lifting</h2>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam
                  sapiente libero
                </p>
                <p>
                  <a href="#">Learn More</a>
                </p>
              </div>
            </div>
            <div className="col-md-4 text-center mb-4">
              <div className="border p-4 text-with-icon">
                <span className="flaticon-exercise-1 icon display-4 mb-4 d-block text-primary" />
                <h2 className="h5">Walking Exercise</h2>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam
                  sapiente libero
                </p>
                <p>
                  <a href="#">Learn More</a>
                </p>
              </div>
            </div>
            <div className="col-md-4 text-center mb-4">
              <div className="border p-4 text-with-icon">
                <span className="flaticon-exercise-2 icon display-4 mb-4 d-block text-primary" />
                <h2 className="h5">Belly Crunches</h2>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam
                  sapiente libero
                </p>
                <p>
                  <a href="#">Learn More</a>
                </p>
              </div>
            </div>
            <div className="col-md-4 text-center mb-4">
              <div className="border p-4 text-with-icon">
                <span className="flaticon-weightlifting-1 icon display-4 mb-4 d-block text-primary" />
                <h2 className="h5">Weight Lifting Partner</h2>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam
                  sapiente libero
                </p>
                <p>
                  <a href="#">Learn More</a>
                </p>
              </div>
            </div>
            <div className="col-md-4 text-center mb-4">
              <div className="border p-4 text-with-icon">
                <span className="flaticon-exercise-3 icon display-4 mb-4 d-block text-primary" />
                <h2 className="h5">Exercise Rolling</h2>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam
                  sapiente libero
                </p>
                <p>
                  <a href="#">Learn More</a>
                </p>
              </div>
            </div>
            <div className="col-md-4 text-center mb-4">
              <div className="border p-4 text-with-icon">
                <span className="flaticon-exercise icon display-4 mb-4 d-block text-primary" />
                <h2 className="h5">Lunge Plunk</h2>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam
                  sapiente libero
                </p>
                <p>
                  <a href="#">Learn More</a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="site-section block-14 bg-light nav-direction-white">
        <div className="container">
          <div className="row mb-5">
            <div className="col-md-12">
              <h2 className="site-section-heading text-center">Testimonies</h2>
            </div>
          </div>

          <div className="nonloop-block-14 owl-carousel">
            <div className="p-5">
              <div className="d-flex block-testimony">
                <div className="person mr-3">
                  <img
                    src={person_1}
                    alt="Image"
                    className="img-fluid rounded-circle"
                  />
                </div>
                <div>
                  <h2 className="h5">Katie Johnson</h2>
                  <blockquote>
                    &ldquo;Lorem ipsum dolor sit amet, consectetur adipisicing
                    elit. Alias accusantium qui optio, possimus necessitatibus
                    voluptate aliquam velit nostrum tempora ipsam!&rdquo;
                  </blockquote>
                </div>
              </div>
            </div>
            <div className="p-5">
              <div className="d-flex block-testimony">
                <div className="person mr-3">
                  <img
                    src={person_2}
                    alt="Image"
                    className="img-fluid rounded-circle"
                  />
                </div>
                <div>
                  <h2 className="h5">Jane Mars</h2>
                  <blockquote>
                    &ldquo;Lorem ipsum dolor sit amet, consectetur adipisicing
                    elit. Alias accusantium qui optio, possimus necessitatibus
                    voluptate aliquam velit nostrum tempora ipsam!&rdquo;
                  </blockquote>
                </div>
              </div>
            </div>
            <div className="p-5">
              <div className="d-flex block-testimony">
                <div className="person mr-3">
                  <img
                    src={person_3}
                    alt="Image"
                    className="img-fluid rounded-circle"
                  />
                </div>
                <div>
                  <h2 className="h5">Shane Holmes</h2>
                  <blockquote>
                    &ldquo;Lorem ipsum dolor sit amet, consectetur adipisicing
                    elit. Alias accusantium qui optio, possimus necessitatibus
                    voluptate aliquam velit nostrum tempora ipsam!&rdquo;
                  </blockquote>
                </div>
              </div>
            </div>
            <div className="p-5">
              <div className="d-flex block-testimony">
                <div className="person mr-3">
                  <img
                    src={person_4}
                    alt="Image"
                    className="img-fluid rounded-circle"
                  />
                </div>
                <div>
                  <h2 className="h5">Mark Johnson</h2>
                  <blockquote>
                    &ldquo;Lorem ipsum dolor sit amet, consectetur adipisicing
                    elit. Alias accusantium qui optio, possimus necessitatibus
                    voluptate aliquam velit nostrum tempora ipsam!&rdquo;
                  </blockquote>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Landing;
