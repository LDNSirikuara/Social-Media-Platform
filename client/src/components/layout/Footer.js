import React from 'react';

function Footer() {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <h3 className="footer-heading mb-4 text-white">About</h3>
            <p>
              In this platform you can meet Developers and get to know them.
              exchange your experience with them. You can join on going project
              or you can find developers for your team.
            </p>
            <p>
              <a href="" className="btn btn-primary rounded text-white px-4">
                Read More
              </a>
            </p>
          </div>
          <div className="col-md-5 ml-auto">
            <div className="row">
              <div className="col-md-6">
                <h3 className="footer-heading mb-4 text-white">Quick Menu</h3>
                <ul className="list-unstyled">
                  <li>
                    <a href="#">Home</a>
                  </li>
                  <li>
                    <a href="#">About</a>
                  </li>
                  <li>
                    <a href="#">Our Trainers</a>
                  </li>
                  <li>
                    <a href="#">News</a>
                  </li>
                  <li>
                    <a href="#">Contacts</a>
                  </li>
                  <li>
                    <a href="#">The Club</a>
                  </li>
                  <li>
                    <a href="#">Privacy</a>
                  </li>
                </ul>
              </div>
              <div className="col-md-6">
                <h3 className="footer-heading mb-4 text-white">Program</h3>
                <ul className="list-unstyled">
                  <li>
                    <a href="#">Body Building</a>
                  </li>
                  <li>
                    <a href="#">Morning Energy</a>
                  </li>
                  <li>
                    <a href="#">Stretching</a>
                  </li>
                  <li>
                    <a href="#">Weight Lifting</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="col-md-2">
            <div className="col-md-12">
              <h3 className="footer-heading mb-4 text-white">Social Icons</h3>
            </div>
            <div className="col-md-12">
              <p>
                <a href="#" className="pb-2 pr-2 pl-0">
                  <span className="icon-facebook" />
                </a>
                <a href="#" className="p-2">
                  <span className="icon-twitter" />
                </a>
                <a href="#" className="p-2">
                  <span className="icon-instagram" />
                </a>
                <a href="#" className="p-2">
                  <span className="icon-vimeo" />
                </a>
              </p>
            </div>
          </div>
        </div>
        <div className="row pt-5 mt-5 text-center">
          <div className="col-md-12">
            <p>Copyright &copy; Rights Reserved | NextDevelopers</p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
