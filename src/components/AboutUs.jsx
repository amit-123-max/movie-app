import React from 'react';
import './AboutUs.css';

export default function AboutUs() {
  return (
    <>
      {/* Navbar */}
      <nav className="navbar navbar-expand-lg bg-body-tertiary" data-bs-theme="dark">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">BINGE WATCH</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item"><a className="nav-link active" href="#">Home</a></li>
              <li className="nav-item"><a className="nav-link" href="#">Contact</a></li>
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#" data-bs-toggle="dropdown">More</a>
                <ul className="dropdown-menu">
                  <li><a className="dropdown-item text-white" href="#">Action</a></li>
                  <li><a className="dropdown-item" href="#">Complaint</a></li>
                  <li><hr className="dropdown-divider" /></li>
                  <li><a className="dropdown-item" href="#">Help</a></li>
                </ul>
              </li>
              <li className="nav-item"><a className="nav-link disabled">log in</a></li>
            </ul>
            <form className="d-flex" role="search">
              <input className="form-control me-2" type="search" placeholder="Search" />
              <button className="btn btn-outline-success" type="submit">Search</button>
            </form>
          </div>
        </div>
      </nav>

      {/* Carousel */}
      <div id="carouselExampleCaptions" className="carousel slide">
        <div className="carousel-indicators">
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" />
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" />
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" />
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img
              src="https://images.unsplash.com/photo-1471341971476-ae15ff5dd4ea?q=80&w=1932&auto=format&fit=crop"
              className="d-block w-100"
              alt="Movie marathon"
            />
            <div className="carousel-caption d-none d-md-block caption-dark">
              <h2>BINGE WATCH!!!!</h2>
              <p>YOUR NEXT MOVIE MARATHON AWAITS!!!</p>
            </div>
          </div>
          <div className="carousel-item">
            <img
              src="https://media.istockphoto.com/id/1192632558/photo/whats-your-story-world-title-on-film-slate.jpg?s=1024x1024&w=is&k=20&c=9XjUjtuNkXRTpclwk3hHNDLbCwcXNS6YH71404e7uXE="
              className="d-block w-100"
              alt="Film slate"
            />
            <div className="carousel-caption d-none d-md-block caption-dark">
              <h5>BINGE WATCH!!!!</h5>
              <p>YOUR NEXT MOVIE MARATHON AWAITS!!!</p>
            </div>
          </div>
          <div className="carousel-item">
            <img
              src="https://media.istockphoto.com/id/1271522553/photo/a-young-woman-is-watching-a-movie-and-is-eating-popcorn-at-the-cinema.jpg?s=1024x1024&w=is&k=20&c=1eofjqHECPhki_a4BXgU7Uhk8bKdHUalNifGTqwIunk="
              className="d-block w-100"
              alt="Woman with popcorn"
            />
            <div className="carousel-caption d-none d-md-block caption-dark">
              <h5>BINGE WATCH!!!!</h5>
              <p>YOUR NEXT MOVIE MARATHON AWAITS!!!</p>
            </div>
          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true" />
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true" />
          <span className="visually-hidden">Next</span>
        </button>
      </div>

      {/* About & Mission Cards */}
      <div className="container about-section">
        <div className="card origin-card mb-4">
          <div className="row g-0">
            <div className="col-md-4">
              <img
                src="https://img.freepik.com/free-vector/cinema-room-background_1017-8728.jpg"
                className="img-fluid"
                alt="Origin"
              />
            </div>
            <div className="col-md-8">
              <div className="card-body">
                <h5>Origin</h5>
                <p>
                  We are a group of 10 students from Indian Institute Of Information Technology,
                  making entertainment and fun more accessible and affordable. Join us to explore
                  Romance, Thriller and Horror worlds with BINGE WATCH.
                </p>
                <small className="text-muted">explore more about us!!!</small>
              </div>
            </div>
          </div>
        </div>
        <div className="card mission-card">
          <div className="row g-0">
            <div className="col-md-4">
              <img
                src="https://i.pinimg.com/originals/db/33/b2/db33b2828637785912f98408df3c139d.jpg"
                className="img-fluid"
                alt="Mission"
              />
            </div>
            <div className="col-md-8">
              <div className="card-body">
                <h5>MISSION</h5>
                <p>
                  At BINGE WATCH, we believe in the power of storytelling. We promote diverse
                  voices, uplift underrepresented filmmakers, and inspire conversations through film.
                </p>
                <small className="text-muted">JOIN THE MISSION!!!</small>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Info Cards */}
      <div className="container info-section">
        <div className="row row-cols-1 row-cols-md-2 g-4">
          <div className="col">
            <div className="card info-card">
              <img
                src="https://c4.wallpaperflare.com/wallpaper/22/762/507/film-movie-filmmaker-movie-director-wallpaper-preview.jpg"
                className="card-img-top"
                alt="Origin info"
              />
              <div className="card-body">
                <h5 className="card-title">ORIGIN</h5>
                <p className="card-text">
                  Welcome to BINGE WATCH! Our journey began with a shared passion for film and storytelling.
                </p>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card info-card">
              <img
                src="https://image.shutterstock.com/image-photo/group-cheerful-people-laughing-while-260nw-2060023217.jpg"
                className="card-img-top"
                alt="Values"
              />
              <div className="card-body">
                <h5 className="card-title">VALUES</h5>
                <p className="card-text">
                  Take a pause to celebrate you and your loved ones. Plan a special movie night!
                </p>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card info-card">
              <img
                src="https://open-stand.org/wp-content/uploads/2016/04/International-Union-of-Cinemas-Calls-for-Open-Standards-in-the-Cinema-Industry.jpg"
                className="card-img-top"
                alt="Your prime time"
              />
              <div className="card-body">
                <h5 className="card-title">YOUR PRIME TIME</h5>
                <p className="card-text">
                  Your one stop solution: BINGE WATCH provides the ultimate platform to explore cinema.
                </p>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card info-card">
              <img
                src="https://c8.alamy.com/comp/2BDTP3B/career-typographic-concept-2BDTP3B.jpg"
                className="card-img-top"
                alt="Work with us"
              />
              <div className="card-body">
                <h5 className="card-title">WORK WITH US</h5>
                <p className="card-text">
                  Join the BINGE WATCH team! As a writer, reviewer, or content creator… let’s create amazing things!
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="footer-section">
        <div className="container text-center">
          <h1>Thank you for visiting us!!!</h1>
          <div className="row footer-content">
            <div className="col-md-4">
              <h5>About Us</h5>
              <p>We celebrate cinema. One-stop solution for your cinema quest!</p>
            </div>
            <div className="col-md-4">
              <h5>Quick Links</h5>
              <ul className="list-unstyled">
                <li>Home</li>
                <li>Services</li>
                <li>About</li>
                <li>Contact</li>
              </ul>
            </div>
            <div className="col-md-4">
              <h5>Contact Us</h5>
              <p>Email: bingehelp@gmail.com</p>
              <p>Phone: +1 234 567 89</p>
            </div>
          </div>
          <small>&copy; 2024 BINGE WATCH. All rights reserved.</small>
        </div>
      </footer>
    </>
  );
}