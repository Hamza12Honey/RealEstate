import React, { useState } from 'react';

const Search = () => {
  const [formData, setFormData] = useState({
    keyword: '',
    type: 'All Type',
    city: 'All City',
    bedrooms: 'Any',
    garages: 'Any',
    bathrooms: 'Any',
    price: 'Unlimite',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Implement your search functionality here
    console.log(formData);
  };

  return (
    <div>
      {/* Property Search Section */}
      <div className="click-closed"></div>
      {/* Form Search Start */}
      <div className="box-collapse">
        <div className="title-box-d">
          <h3 className="title-d">Search Property</h3>
        </div>
        <span className="close-box-collapse right-boxed bi bi-x"></span>
        <div className="box-collapse-wrap form">
          <form className="form-a" onSubmit={handleSubmit}>
            <div className="row">
              <div className="col-md-12 mb-2">
                <div className="form-group">
                  <label className="pb-2" htmlFor="keyword">Keyword</label>
                  <input
                    type="text"
                    className="form-control form-control-lg form-control-a"
                    placeholder="Keyword"
                    name="keyword"
                    value={formData.keyword}
                    onChange={handleChange}
                  />
                </div>
              </div>
              <div className="col-md-6 mb-2">
                <div className="form-group mt-3">
                  <label className="pb-2" htmlFor="type">Type</label>
                  <select
                    className="form-control form-select form-control-a"
                    id="type"
                    name="type"
                    value={formData.type}
                    onChange={handleChange}
                  >
                    <option>All Type</option>
                    <option>For Rent</option>
                    <option>For Sale</option>
                    <option>Open House</option>
                  </select>
                </div>
              </div>
              <div className="col-md-6 mb-2">
                <div className="form-group mt-3">
                  <label className="pb-2" htmlFor="city">City</label>
                  <select
                    className="form-control form-select form-control-a"
                    id="city"
                    name="city"
                    value={formData.city}
                    onChange={handleChange}
                  >
                    <option>All City</option>
                    <option>Alabama</option>
                    <option>Arizona</option>
                    <option>California</option>
                    <option>Colorado</option>
                  </select>
                </div>
              </div>
              <div className="col-md-6 mb-2">
                <div className="form-group mt-3">
                  <label className="pb-2" htmlFor="bedrooms">Bedrooms</label>
                  <select
                    className="form-control form-select form-control-a"
                    id="bedrooms"
                    name="bedrooms"
                    value={formData.bedrooms}
                    onChange={handleChange}
                  >
                    <option>Any</option>
                    <option>01</option>
                    <option>02</option>
                    <option>03</option>
                  </select>
                </div>
              </div>
              <div className="col-md-6 mb-2">
                <div className="form-group mt-3">
                  <label className="pb-2" htmlFor="garages">Garages</label>
                  <select
                    className="form-control form-select form-control-a"
                    id="garages"
                    name="garages"
                    value={formData.garages}
                    onChange={handleChange}
                  >
                    <option>Any</option>
                    <option>01</option>
                    <option>02</option>
                    <option>03</option>
                    <option>04</option>
                  </select>
                </div>
              </div>
              <div className="col-md-6 mb-2">
                <div className="form-group mt-3">
                  <label className="pb-2" htmlFor="bathrooms">Bathrooms</label>
                  <select
                    className="form-control form-select form-control-a"
                    id="bathrooms"
                    name="bathrooms"
                    value={formData.bathrooms}
                    onChange={handleChange}
                  >
                    <option>Any</option>
                    <option>01</option>
                    <option>02</option>
                    <option>03</option>
                  </select>
                </div>
              </div>
              <div className="col-md-6 mb-2">
                <div className="form-group mt-3">
                  <label className="pb-2" htmlFor="price">Min Price</label>
                  <select
                    className="form-control form-select form-control-a"
                    id="price"
                    name="price"
                    value={formData.price}
                    onChange={handleChange}
                  >
                    <option>Unlimite</option>
                    <option>$50,000</option>
                    <option>$100,000</option>
                    <option>$150,000</option>
                    <option>$200,000</option>
                  </select>
                </div>
              </div>
              <div className="col-md-12">
                <button type="submit" className="btn btn-b">Search Property</button>
              </div>
            </div>
          </form>
        </div>
      </div>
      {/* End Property Search Section */}
    </div>
  );
};

export default Search;
