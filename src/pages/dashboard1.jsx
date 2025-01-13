import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import Header from '../components/Header';  // Import Header component
import Footer from '../components/Footer';  // Import Footer component

const Dashboard = () => {
  return (
    <div>
      {/* Header Component */}
      <Header />

      {/* Carousel Section */}
      <div className="intro intro-carousel swiper position-relative">
        <Swiper spaceBetween={50} slidesPerView={1} pagination={{ clickable: true }} className="swiper-wrapper">

          {/* Slide 1 */}
          <SwiperSlide className="carousel-item-a intro-item bg-image" style={{ backgroundImage: 'url(/src/assets/img/slide-1.jpg)' }}>
            <div className="overlay overlay-a"></div>
            <div className="intro-content display-table">
              <div className="table-cell">
                <div className="container">
                  <div className="row">
                    <div className="col-lg-8">
                      <div className="intro-body">
                        <p className="intro-title-top">
                          Doral, Florida
                          <br /> 78345
                        </p>
                        <h1 className="intro-title mb-4">
                          <span className="color-b">204 </span> Mount
                          <br /> Olive Road Two
                        </h1>
                        <p className="intro-subtitle intro-price">
                          <a href="#">
                            <span className="price-a">rent | $ 12.000</span>
                          </a>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>

          {/* Slide 2 */}
          <SwiperSlide className="carousel-item-a intro-item bg-image" style={{ backgroundImage: 'url(/src/assets/img/slide-2.jpg)' }}>
            <div className="overlay overlay-a"></div>
            <div className="intro-content display-table">
              <div className="table-cell">
                <div className="container">
                  <div className="row">
                    <div className="col-lg-8">
                      <div className="intro-body">
                        <p className="intro-title-top">
                          Doral, Florida
                          <br /> 78345
                        </p>
                        <h1 className="intro-title mb-4">
                          <span className="color-b">204 </span> Rino
                          <br /> Venda Road Five
                        </h1>
                        <p className="intro-subtitle intro-price">
                          <a href="#">
                            <span className="price-a">rent | $ 12.000</span>
                          </a>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>

          {/* Slide 3 */}
          <SwiperSlide className="carousel-item-a intro-item bg-image" style={{ backgroundImage: 'url(/src/assets/img/slide-3.jpg)' }}>
            <div className="overlay overlay-a"></div>
            <div className="intro-content display-table">
              <div className="table-cell">
                <div className="container">
                  <div className="row">
                    <div className="col-lg-8">
                      <div className="intro-body">
                        <p className="intro-title-top">
                          Doral, Florida
                          <br /> 78345
                        </p>
                        <h1 className="intro-title mb-4">
                          <span className="color-b">204 </span> Alira
                          <br /> Roan Road One
                        </h1>
                        <p className="intro-subtitle intro-price">
                          <a href="#">
                            <span className="price-a">rent | $ 12.000</span>
                          </a>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>

        </Swiper>
      </div>

      {/* <!-- ======= Services Section ======= --> */}
    <section className="section-services section-t8">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="title-wrap d-flex justify-content-between">
              <div className="title-box">
                <h2 className="title-a">Our Services</h2>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-4">
            <div className="card-box-c foo">
              <div className="card-header-c d-flex">
                <div className="card-box-ico">
                  <span className="bi bi-cart"></span>
                </div>
                <div className="card-title-c align-self-center">
                  <h2 className="title-c">Lifestyle</h2>
                </div>
              </div>
              <div className="card-body-c">
                <p className="content-c">
                Discover properties that perfectly align with your lifestyle. Whether you’re looking for a peaceful retreat, a vibrant urban living space, 
                or a family-friendly neighborhood, our listings offer diverse options to match your unique preferences and needs.
                </p>
              </div>
              <div className="card-footer-c">
                <a href="" className="link-c link-icon">Read more
                  <span className="bi bi-chevron-right"></span>
                </a>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card-box-c foo">
              <div className="card-header-c d-flex">
                <div className="card-box-ico">
                  <span className="bi bi-calendar4-week"></span>
                </div>
                <div className="card-title-c align-self-center">
                  <h2 className="title-c">Loans</h2>
                </div>
              </div>
              <div className="card-body-c">
                <p className="content-c">
                Get expert advice on securing the best mortgage or financing options for your real estate goals. We work with trusted lenders to guide 
                you through the loan process, ensuring you find competitive rates and flexible terms that suit your budget.
                </p>
              </div>
              <div className="card-footer-c">
                <a href="#" className="link-c link-icon">Read more
                  <span className="bi bi-calendar4-week"></span>
                </a>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card-box-c foo">
              <div className="card-header-c d-flex">
                <div className="card-box-ico">
                  <span className="bi bi-card-checklist"></span>
                </div>
                <div className="card-title-c align-self-center">
                  <h2 className="title-c">Sell</h2>
                </div>
              </div>
              <div className="card-body-c">
                <p className="content-c">
                Ready to sell your property? Our experienced team offers a full-service approach to help you get the best price. From pricing and 
                marketing strategies to negotiations and closing, we ensure a smooth and successful sale every step of the way.
                </p>
              </div>
              <div className="card-footer-c">
                <a href="#" className="link-c link-icon">Read more
                  <span className="bi bi-chevron-right"></span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    {/* <!-- End Services Section --> */}

    {/* <!-- ======= Latest Properties Section ======= --> */}
    <section className="section-property section-t8">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="title-wrap d-flex justify-content-between">
              <div className="title-box">
                <h2 className="title-a">Latest Properties</h2>
              </div>
              <div className="title-link">
                <a href="/property">All Property
                  <span className="bi bi-chevron-right"></span>
                </a>
              </div>
            </div>
          </div>
        </div>

        <div id="property-carousel" className="swiper">
          <div className="swiper-wrapper">

            <div className="carousel-item-b swiper-slide">
              <div className="card-box-a card-shadow">
                <div className="img-box-a">
                  <img src="/src/assets/img/property-6.jpg" alt="" className="img-a img-fluid"/>
                </div>
                <div className="card-overlay">
                  <div className="card-overlay-a-content">
                    <div className="card-header-a">
                      <h2 className="card-title-a">
                        <a href="/property">206 Mount
                          <br /> Olive Road Two</a>
                      </h2>
                    </div>
                    <div className="card-body-a">
                      <div className="price-box d-flex">
                        <span className="price-a">rent | $ 12.000</span>
                      </div>
                      <a href="#" className="link-a">Click here to view
                        <span className="bi bi-chevron-right"></span>
                      </a>
                    </div>
                    <div className="card-footer-a">
                      <ul className="card-info d-flex justify-content-around">
                        <li>
                          <h4 className="card-info-title">Area</h4>
                          <span>340m
                            <sup>2</sup>
                          </span>
                        </li>
                        <li>
                          <h4 className="card-info-title">Beds</h4>
                          <span>2</span>
                        </li>
                        <li>
                          <h4 className="card-info-title">Baths</h4>
                          <span>4</span>
                        </li>
                        <li>
                          <h4 className="card-info-title">Garages</h4>
                          <span>1</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* <!-- End carousel item --> */}

            <div className="carousel-item-b swiper-slide">
              <div className="card-box-a card-shadow">
                <div className="img-box-a">
                  <img src="/src/assets/img/property-3.jpg" alt="" className="img-a img-fluid"/>
                </div>
                <div className="card-overlay">
                  <div className="card-overlay-a-content">
                    <div className="card-header-a">
                      <h2 className="card-title-a">
                        <a href="/property">157 West
                          <br /> Central Park</a>
                      </h2>
                    </div>
                    <div className="card-body-a">
                      <div className="price-box d-flex">
                        <span className="price-a">rent | $ 12.000</span>
                      </div>
                      <a href="/property" className="link-a">Click here to view
                        <span className="bi bi-chevron-right"></span>
                      </a>
                    </div>
                    <div className="card-footer-a">
                      <ul className="card-info d-flex justify-content-around">
                        <li>
                          <h4 className="card-info-title">Area</h4>
                          <span>340m
                            <sup>2</sup>
                          </span>
                        </li>
                        <li>
                          <h4 className="card-info-title">Beds</h4>
                          <span>2</span>
                        </li>
                        <li>
                          <h4 className="card-info-title">Baths</h4>
                          <span>4</span>
                        </li>
                        <li>
                          <h4 className="card-info-title">Garages</h4>
                          <span>1</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* <!-- End carousel item --> */}

            <div className="carousel-item-b swiper-slide">
              <div className="card-box-a card-shadow">
                <div className="img-box-a">
                  <img src="/src/assets/img/property-7.jpg" alt="" className="img-a img-fluid"/>
                </div>
                <div className="card-overlay">
                  <div className="card-overlay-a-content">
                    <div className="card-header-a">
                      <h2 className="card-title-a">
                        <a href="/property">245 Azabu
                          <br /> Nishi Park let</a>
                      </h2>
                    </div>
                    <div className="card-body-a">
                      <div className="price-box d-flex">
                        <span className="price-a">rent | $ 12.000</span>
                      </div>
                      <a href="/property" className="link-a">Click here to view
                        <span className="bi bi-chevron-right"></span>
                      </a>
                    </div>
                    <div className="card-footer-a">
                      <ul className="card-info d-flex justify-content-around">
                        <li>
                          <h4 className="card-info-title">Area</h4>
                          <span>340m
                            <sup>2</sup>
                          </span>
                        </li>
                        <li>
                          <h4 className="card-info-title">Beds</h4>
                          <span>2</span>
                        </li>
                        <li>
                          <h4 className="card-info-title">Baths</h4>
                          <span>4</span>
                        </li>
                        <li>
                          <h4 className="card-info-title">Garages</h4>
                          <span>1</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* <!-- End carousel item --> */}

            <div className="carousel-item-b swiper-slide">
              <div className="card-box-a card-shadow">
                <div className="img-box-a">
                  <img src="/src/assets/img/property-10.jpg" alt="" className="img-a img-fluid"/>
                </div>
                <div className="card-overlay">
                  <div className="card-overlay-a-content">
                    <div className="card-header-a">
                      <h2 className="card-title-a">
                        <a href="/property">204 Montal
                          <br /> South Bela Two</a>
                      </h2>
                    </div>
                    <div className="card-body-a">
                      <div className="price-box d-flex">
                        <span className="price-a">rent | $ 12.000</span>
                      </div>
                      <a href="/property" className="link-a">Click here to view
                        <span className="bi bi-chevron-right"></span>
                      </a>
                    </div>
                    <div className="card-footer-a">
                      <ul className="card-info d-flex justify-content-around">
                        <li>
                          <h4 className="card-info-title">Area</h4>
                          <span>340m
                            <sup>2</sup>
                          </span>
                        </li>
                        <li>
                          <h4 className="card-info-title">Beds</h4>
                          <span>2</span>
                        </li>
                        <li>
                          <h4 className="card-info-title">Baths</h4>
                          <span>4</span>
                        </li>
                        <li>
                          <h4 className="card-info-title">Garages</h4>
                          <span>1</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* <!-- End carousel item --> */}
          </div>
        </div>
        <div className="propery-carousel-pagination carousel-pagination"></div>

      </div>
    </section>
    {/* <!-- End Latest Properties Section --> */}

    {/* <!-- ======= Agents Section ======= --> */}
    <section className="section-agents section-t8">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="title-wrap d-flex justify-content-between">
              <div className="title-box">
                <h2 className="title-a">Best Agents</h2>
              </div>
              <div className="title-link">
                <a href="/">All Agents
                  <span className="bi bi-chevron-right"></span>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-4">
            <div className="card-box-d">
              <div className="card-img-d">
                <img src="src/assets/img/agent-4.jpg" alt="" className="img-d img-fluid"/>
              </div>
              <div className="card-overlay card-overlay-hover">
                <div className="card-header-d">
                  <div className="card-title-d align-self-center">
                    <h3 className="title-d">
                      <a href="agent-single.html" className="link-two">Margaret Sotillo
                        <br/> Escala</a>
                    </h3>
                  </div>
                </div>
                <div className="card-body-d">
                  <p className="content-d color-text-a">
                    
                  </p>
                  <div className="info-agents color-a">
                    <p>
                      <strong>Phone: </strong> +54 356 945234
                    </p>
                    <p>
                      <strong>Email: </strong> agents@example.com
                    </p>
                  </div>
                </div>
                <div className="card-footer-d">
                  <div className="socials-footer d-flex justify-content-center">
                    <ul className="list-inline">
                      <li className="list-inline-item">
                        <a href="#" className="link-one">
                          <i className="bi bi-facebook" aria-hidden="true"></i>
                        </a>
                      </li>
                      <li className="list-inline-item">
                        <a href="#" className="link-one">
                          <i className="bi bi-twitter" aria-hidden="true"></i>
                        </a>
                      </li>
                      <li className="list-inline-item">
                        <a href="#" className="link-one">
                          <i className="bi bi-instagram" aria-hidden="true"></i>
                        </a>
                      </li>
                      <li className="list-inline-item">
                        <a href="#" className="link-one">
                          <i className="bi bi-linkedin" aria-hidden="true"></i>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card-box-d">
              <div className="card-img-d">
                <img src="src/assets/img/agent-1.jpg" alt="" className="img-d img-fluid"/>
              </div>
              <div className="card-overlay card-overlay-hover">
                <div className="card-header-d">
                  <div className="card-title-d align-self-center">
                    <h3 className="title-d">
                      <a href="agent-single.html" className="link-two">Stiven Spilver
                        <br/> Darw</a>
                    </h3>
                  </div>
                </div>
                <div className="card-body-d">
                  <p className="content-d color-text-a">
                    
                  </p>
                  <div className="info-agents color-a">
                    <p>
                      <strong>Phone: </strong> +54 356 945234
                    </p>
                    <p>
                      <strong>Email: </strong> agents@example.com
                    </p>
                  </div>
                </div>
                <div className="card-footer-d">
                  <div className="socials-footer d-flex justify-content-center">
                    <ul className="list-inline">
                      <li className="list-inline-item">
                        <a href="#" className="link-one">
                          <i className="bi bi-facebook" aria-hidden="true"></i>
                        </a>
                      </li>
                      <li className="list-inline-item">
                        <a href="#" className="link-one">
                          <i className="bi bi-twitter" aria-hidden="true"></i>
                        </a>
                      </li>
                      <li className="list-inline-item">
                        <a href="#" className="link-one">
                          <i className="bi bi-instagram" aria-hidden="true"></i>
                        </a>
                      </li>
                      <li className="list-inline-item">
                        <a href="#" className="link-one">
                          <i className="bi bi-linkedin" aria-hidden="true"></i>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card-box-d">
              <div className="card-img-d">
                <img src="src/assets/img/agent-5.jpg" alt="" className="img-d img-fluid"/>
              </div>
              <div className="card-overlay card-overlay-hover">
                <div className="card-header-d">
                  <div className="card-title-d align-self-center">
                    <h3 className="title-d">
                      <a href="agent-single.html" className="link-two">Emma Toledo
                        <br/> Cascada</a>
                    </h3>
                  </div>
                </div>
                <div className="card-body-d">
                  <p className="content-d color-text-a">
                    
                  </p>
                  <div className="info-agents color-a">
                    <p>
                      <strong>Phone: </strong> +54 356 945234
                    </p>
                    <p>
                      <strong>Email: </strong> agents@example.com
                    </p>
                  </div>
                </div>
                <div className="card-footer-d">
                  <div className="socials-footer d-flex justify-content-center">
                    <ul className="list-inline">
                      <li className="list-inline-item">
                        <a href="#" className="link-one">
                          <i className="bi bi-facebook" aria-hidden="true"></i>
                        </a>
                      </li>
                      <li className="list-inline-item">
                        <a href="#" className="link-one">
                          <i className="bi bi-twitter" aria-hidden="true"></i>
                        </a>
                      </li>
                      <li className="list-inline-item">
                        <a href="#" className="link-one">
                          <i className="bi bi-instagram" aria-hidden="true"></i>
                        </a>
                      </li>
                      <li className="list-inline-item">
                        <a href="#" className="link-one">
                          <i className="bi bi-linkedin" aria-hidden="true"></i>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    {/* <!-- End Agents Section --> */}

    {/* <!-- ======= Latest News Section ======= --> */}
    <section className="section-news section-t8">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="title-wrap d-flex justify-content-between">
              <div className="title-box">
                <h2 className="title-a">Latest News</h2>
              </div>
              <div className="title-link">
                <a href="/">All News
                  <span className="bi bi-chevron-right"></span>
                </a>
              </div>
            </div>
          </div>
        </div>

        <div id="news-carousel" className="swiper">
          <div className="swiper-wrapper">

            <div className="carousel-item-c swiper-slide">
              <div className="card-box-b card-shadow news-box">
                <div className="img-box-b">
                  <img src="src/assets/img/post-2.jpg" alt="" className="img-b img-fluid"/>
                </div>
                <div className="card-overlay">
                  <div className="card-header-b">
                    <div className="card-category-b">
                      <a href="#" className="category-b">House</a>
                    </div>
                    <div className="card-title-b">
                      <h2 className="title-2">
                        <a href="blog-single.html">House is comming
                          <br/> new</a>
                      </h2>
                    </div>
                    <div className="card-date">
                      <span className="date-b">18 Sep. 2017</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* <!-- End carousel item --> */}

            <div className="carousel-item-c swiper-slide">
              <div className="card-box-b card-shadow news-box">
                <div className="img-box-b">
                  <img src="src/assets/img/post-5.jpg" alt="" className="img-b img-fluid"/>
                </div>
                <div className="card-overlay">
                  <div className="card-header-b">
                    <div className="card-category-b">
                      <a href="#" className="category-b">Travel</a>
                    </div>
                    <div className="card-title-b">
                      <h2 className="title-2">
                        <a href="blog-single.html">Travel is comming
                          <br/> new</a>
                      </h2>
                    </div>
                    <div className="card-date">
                      <span className="date-b">18 Sep. 2017</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* <!-- End carousel item --> */}

            <div className="carousel-item-c swiper-slide">
              <div className="card-box-b card-shadow news-box">
                <div className="img-box-b">
                  <img src="src/assets/img/post-7.jpg" alt="" className="img-b img-fluid"/>
                </div>
                <div className="card-overlay">
                  <div className="card-header-b">
                    <div className="card-category-b">
                      <a href="#" className="category-b">Park</a>
                    </div>
                    <div className="card-title-b">
                      <h2 className="title-2">
                        <a href="blog-single.html">Park is comming
                          <br/> new</a>
                      </h2>
                    </div>
                    <div className="card-date">
                      <span className="date-b">18 Sep. 2017</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* <!-- End carousel item --> */}

            <div className="carousel-item-c swiper-slide">
              <div className="card-box-b card-shadow news-box">
                <div className="img-box-b">
                  <img src="src/assets/img/post-3.jpg" alt="" className="img-b img-fluid"/>
                </div>
                <div className="card-overlay">
                  <div className="card-header-b">
                    <div className="card-category-b">
                      <a href="#" className="category-b">Travel</a>
                    </div>
                    <div className="card-title-b">
                      <h2 className="title-2">
                        <a href="#">Travel is comming
                          <br/> new</a>
                      </h2>
                    </div>
                    <div className="card-date">
                      <span className="date-b">18 Sep. 2017</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* <!-- End carousel item --> */}

          </div>
        </div>

        <div className="news-carousel-pagination carousel-pagination"></div>
      </div>
    </section>
    {/* <!-- End Latest News Section --> */}

    {/* <!-- ======= Testimonials Section ======= --> */}
    <section className="section-testimonials section-t8 nav-arrow-a">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="title-wrap d-flex justify-content-between">
              <div className="title-box">
                <h2 className="title-a">Testimonials</h2>
              </div>
            </div>
          </div>
        </div>

        <div id="testimonial-carousel" className="swiper">
          <div className="swiper-wrapper">

            <div className="carousel-item-a swiper-slide">
              <div className="testimonials-box">
                <div className="row">
                  <div className="col-sm-12 col-md-6">
                    <div className="testimonial-img">
                      <img src="src/assets/img/testimonial-1.jpg" alt="" className="img-fluid"/>
                    </div>
                  </div>
                  <div className="col-sm-12 col-md-6">
                    <div className="testimonial-ico">
                      <i className="bi bi-chat-quote-fill"></i>
                    </div>
                    <div className="testimonials-content">
                      <p className="testimonial-text">
                      Working with [Your Agency Name] was an absolute pleasure! 
                      From the moment we contacted them, the team was attentive, knowledgeable, 
                      and always ready to answer our questions. They helped us find our dream home within our 
                      budget and made the entire buying process so much easier. 
                      We couldn’t be happier with the service and the results. Highly recommended!
                      </p>
                    </div>
                    <div className="testimonial-author-box">
                      <img src="src/assets/img/mini-testimonial-1.jpg" alt="" className="testimonial-avatar"/>
                      <h5 className="testimonial-author">Albert & Erika</h5>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* <!-- End carousel item --> */}

            <div className="carousel-item-a swiper-slide">
              <div className="testimonials-box">
                <div className="row">
                  <div className="col-sm-12 col-md-6">
                    <div className="testimonial-img">
                      <img src="src/assets/img/testimonial-2.jpg" alt="" className="img-fluid"/>
                    </div>
                  </div>
                  <div className="col-sm-12 col-md-6">
                    <div className="testimonial-ico">
                      <i className="bi bi-chat-quote-fill"></i>
                    </div>
                    <div className="testimonials-content">
                      <p className="testimonial-text">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Omnis, cupiditate ea nam praesentium
                        debitis hic ber quibusdam
                        voluptatibus officia expedita corpori.
                      </p>
                    </div>
                    <div className="testimonial-author-box">
                      <img src="src/assets/img/mini-testimonial-2.jpg" alt="" className="testimonial-avatar"/>
                      <h5 className="testimonial-author">Pablo & Emma</h5>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* <!-- End carousel item --> */}

          </div>
        </div>
        <div className="testimonial-carousel-pagination carousel-pagination"></div>

      </div>
    </section>
    {/* <!-- End Testimonials Section --> */}


      {/* Footer Component */}
      <Footer />
    </div>
  );
};

export default Dashboard;
