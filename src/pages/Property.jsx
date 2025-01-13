// src/pages/Property.jsx
import React from "react";
import { Link } from "react-router-dom";
import Header from "../components/Header";  // Import Header
import Footer from "../components/Footer";  // Import Footer

const properties = [
  {
    id: 1,
    title: "204 Mount Olive Road Two",
    price: "$12,000",
    type: "rent",
    area: "340m²",
    beds: 2,
    baths: 4,
    garages: 1,
    img: "/src/assets/img/property-1.jpg",
  },
  {
    id: 3,
    title: "Golden Valley Mansion",
    price: "$15,000",
    type: "rent",
    area: "450m²",
    beds: 4,
    baths: 3,
    garages: 2,
    img: "/src/assets/img/property-3.jpg",
  },
  {
    id: 6,
    title: "Sunset Boulevard Apartment",
    price: "$8,500",
    type: "rent",
    area: "220m²",
    beds: 1,
    baths: 1,
    garages: 1,
    img: "/src/assets/img/property-6.jpg",
  },
  {
    id: 7,
    title: "Bluewater Bay House",
    price: "$20,000",
    type: "rent",
    area: "550m²",
    beds: 5,
    baths: 6,
    garages: 3,
    img: "/src/assets/img/property-7.jpg",
  },
  {
    id: 8,
    title: "Crystal Palace Villa",
    price: "$25,000",
    type: "for sale",
    area: "650m²",
    beds: 6,
    baths: 5,
    garages: 4,
    img: "/src/assets/img/property-8.jpg",
  },
  {
    id: 10,
    title: "Mountain View Estate",
    price: "$30,000",
    type: "for sale",
    area: "800m²",
    beds: 7,
    baths: 6,
    garages: 5,
    img: "/src/assets/img/property-10.jpg",
  },
];

const Property = () => {
  return (
    <main id="main">
      <Header /> {/* Include Header */}

      {/* Intro Section */}
      <section className="intro-single">
        <div className="container">
          <div className="row">
            <div className="col-md-12 col-lg-8">
              <div className="title-single-box">
                <h1 className="title-single">Our Amazing Properties</h1>
                <span className="color-text-a">Grid Properties</span>
              </div>
            </div>
            <div className="col-md-12 col-lg-4">
              <nav aria-label="breadcrumb" className="breadcrumb-box d-flex justify-content-lg-end">
                <ol className="breadcrumb">
                  <li className="breadcrumb-item">
                    <Link to="/">Home</Link>
                  </li>
                  <li className="breadcrumb-item active" aria-current="page">
                    Properties Grid
                  </li>
                </ol>
              </nav>
            </div>
          </div>
        </div>
      </section>

      {/* Property Grid */}
      <section className="property-grid grid">
        <div className="container">
          <div className="row">
            <div className="col-sm-12">
              <div className="grid-option">
                <form>
                  <select className="custom-select">
                    <option selected>All</option>
                    <option value="1">New to Old</option>
                    <option value="2">For Rent</option>
                    <option value="3">For Sale</option>
                  </select>
                </form>
              </div>
            </div>

            {/* Property Cards */}
            {properties.map((property) => (
              <div className="col-md-4" key={property.id}>
                <div className="card-box-a card-shadow">
                  <div className="img-box-a">
                    <img src={property.img} alt={property.title} className="img-a img-fluid" />
                  </div>
                  <div className="card-overlay">
                    <div className="card-overlay-a-content">
                      <div className="card-header-a">
                        <h2 className="card-title-a">
                          <Link to="">{property.title}</Link>
                        </h2>
                      </div>
                      <div className="card-body-a">
                        <div className="price-box d-flex">
                          <span className="price-a">
                            {property.type} | {property.price}
                          </span>
                        </div>
                        <Link to="property-single.html" className="link-a">
                          Click here to view <span className="bi bi-chevron-right"></span>
                        </Link>
                      </div>
                      <div className="card-footer-a">
                        <ul className="card-info d-flex justify-content-around">
                          <li>
                            <h4 className="card-info-title">Area</h4>
                            <span>{property.area}</span>
                          </li>
                          <li>
                            <h4 className="card-info-title">Beds</h4>
                            <span>{property.beds}</span>
                          </li>
                          <li>
                            <h4 className="card-info-title">Baths</h4>
                            <span>{property.baths}</span>
                          </li>
                          <li>
                            <h4 className="card-info-title">Garages</h4>
                            <span>{property.garages}</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Pagination */}
          <div className="row">
            <div className="col-sm-12">
              <nav className="pagination-a">
                <ul className="pagination justify-content-end">
                  <li className="page-item disabled">
                    <a className="page-link" href="" tabIndex="-1">
                      <span className="bi bi-chevron-left"></span>
                    </a>
                  </li>
                  <li className="page-item">
                    <a className="page-link" href="">
                      1
                    </a>
                  </li>
                  <li className="page-item active">
                    <a className="page-link" href="">
                      2
                    </a>
                  </li>
                  <li className="page-item">
                    <a className="page-link" href="">
                      3
                    </a>
                  </li>
                  <li className="page-item next">
                    <a className="page-link" href="">
                      <span className="bi bi-chevron-right"></span>
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </section>

      <Footer /> {/* Include Footer */}
    </main>
  );
};

export default Property;
