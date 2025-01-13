// About.js
import React from 'react';
import Header from '../components/Header';  // Import the Header component
import Footer from '../components/Footer';  // Import the Footer component

const About = () => {
  return (
    <>
      <Header />  {/* Include the Header */}
      
      <main id="main">
        {/* ======= Intro Single ======= */}
        <section className="intro-single">
          <div className="container">
            <div className="row">
              <div className="col-md-12 col-lg-8">
                <div className="title-single-box">
                  <h1 className="title-single">We Do Great Design For Creative Folks</h1>
                </div>
              </div>
              <div className="col-md-12 col-lg-4">
                <nav aria-label="breadcrumb" className="breadcrumb-box d-flex justify-content-lg-end">
                  <ol className="breadcrumb">
                    <li className="breadcrumb-item">
                      <a href="#">Home</a>
                    </li>
                    <li className="breadcrumb-item active" aria-current="page">
                      About
                    </li>
                  </ol>
                </nav>
              </div>
            </div>
          </div>
        </section>
        {/* End Intro Single */}

        {/* ======= About Section ======= */}
        <section className="section-about">
          <div className="container">
            <div className="row">
              <div className="col-sm-12 position-relative">
                <div className="about-img-box">
                  <img src="/src/assets/img/slide-about-1.jpg" alt="" className="img-fluid" />
                </div>
                <div className="sinse-box">
                  <h3 className="sinse-title">
                    EstateAgency
                    <span></span>
                    <br /> Since 2017
                  </h3>
                  <p>Art & Creative</p>
                </div>
              </div>
              <div className="col-md-12 section-t8 position-relative">
                <div className="row">
                  <div className="col-md-6 col-lg-5">
                    <img src="/src/assets/img/about-2.jpg" alt="" className="img-fluid" />
                  </div>
                  <div className="col-lg-2 d-none d-lg-block position-relative">
                    <div className="title-vertical d-flex justify-content-start">
                      <span>EstateAgency Exclusive Property</span>
                    </div>
                  </div>
                  <div className="col-md-6 col-lg-5 section-md-t3">
                    <div className="title-box-d">
                      <h3 className="title-d">
                        Sed <span className="color-d">porttitor</span> lectus
                        <br /> nibh.
                      </h3>
                    </div>
                    <p className="color-text-a">
                      Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a. Vivamus magna justo, lacinia
                      eget consectetur sed, convallis at tellus.
                    </p>
                    <p className="color-text-a">
                      Sed porttitor lectus nibh. Vivamus magna justo, lacinia eget consectetur sed, convallis at
                      tellus. Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* End About Section */}

        
      </main>

      <Footer />  {/* Include the Footer */}
    </>
  );
};

export default About;
