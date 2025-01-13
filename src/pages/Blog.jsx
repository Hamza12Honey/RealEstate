import React from 'react';
import Header from '../components/Header'; // import Header
import Footer from '../components/Footer'; // import Footer

const Blog = () => {
  // Sample data for the blog posts, you can replace this with actual data
  const posts = [
    { id: 1, imgSrc: '/src/assets/img/post-1.jpg', category: 'Travel', title: 'Travel is coming new', date: '18 Sep. 2017', link: 'blog-single.html' },
    { id: 2, imgSrc: '/src/assets/img/post-2.jpg', category: 'Travel', title: 'Travel is coming new', date: '18 Sep. 2017', link: 'blog-single.html' },
    { id: 3, imgSrc: '/src/assets/img/post-3.jpg', category: 'Travel', title: 'Travel is coming new', date: '18 Sep. 2017', link: 'blog-single.html' },
    { id: 4, imgSrc: '/src/assets/img/post-4.jpg', category: 'Travel', title: 'Travel is coming new', date: '18 Sep. 2017', link: 'blog-single.html' },
    { id: 5, imgSrc: '/src/assets/img/post-5.jpg', category: 'Travel', title: 'Travel is coming new', date: '18 Sep. 2017', link: 'blog-single.html' },
    { id: 6, imgSrc: '/src/assets/img/post-6.jpg', category: 'Travel', title: 'Travel is coming new', date: '18 Sep. 2017', link: 'blog-single.html' }
  ];

  return (
    <div>
      {/* Include Header */}
      <Header />

      <main id="main">
        {/* Intro Single */}
        <section className="intro-single">
          <div className="container">
            <div className="row">
              <div className="col-md-12 col-lg-8">
                <div className="title-single-box">
                  <h1 className="title-single">Our Amazing Posts</h1>
                  <span className="color-text-a">Grid News</span>
                </div>
              </div>
              <div className="col-md-12 col-lg-4">
                <nav aria-label="breadcrumb" className="breadcrumb-box d-flex justify-content-lg-end">
                  <ol className="breadcrumb">
                    <li className="breadcrumb-item">
                      <a href="/">Home</a>
                    </li>
                    <li className="breadcrumb-item active" aria-current="page">
                      News Grid
                    </li>
                  </ol>
                </nav>
              </div>
            </div>
          </div>
        </section>

        {/* Blog Grid */}
        <section className="news-grid grid">
          <div className="container">
            <div className="row">
              {posts.map((post) => (
                <div className="col-md-4" key={post.id}>
                  <div className="card-box-b card-shadow news-box">
                    <div className="img-box-b">
                      <img src={post.imgSrc} alt={post.title} className="img-b img-fluid" />
                    </div>
                    <div className="card-overlay">
                      <div className="card-header-b">
                        <div className="card-category-b">
                          <a href="" className="category-b">{post.category}</a>
                        </div>
                        <div className="card-title-b">
                          <h2 className="title-2">
                            <a href={post.link}>{post.title}</a>
                          </h2>
                        </div>
                        <div className="card-date">
                          <span className="date-b">{post.date}</span>
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
                      <a className="page-link" href="">1</a>
                    </li>
                    <li className="page-item active">
                      <a className="page-link" href="">2</a>
                    </li>
                    <li className="page-item">
                      <a className="page-link" href="">3</a>
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
      </main>

      {/* Include Footer */}
      <Footer />
    </div>
  );
};

export default Blog;
