import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className="site-navbar-wrap js-site-navbar bg-white">
      <div className="container">
        <div className="site-navbar bg-light">
          <div className="py-1">
            <div className="row align-items-center">
              <div className="col-2">
                <h2 className="mb-0 site-logo">
                  <Link to="/">
                    Dev<strong>Hub</strong>
                  </Link>
                </h2>
              </div>
              <div className="col-10">
                <nav className="site-navigation text-right" role="navigation">
                  <div className="container">
                    <div className="d-inline-block d-lg-none ml-md-0 mr-auto py-3">
                      <a
                        href="#"
                        className="site-menu-toggle js-menu-toggle text-black"
                      >
                        <span className="icon-menu h3" />
                      </a>
                    </div>

                    <ul className="site-menu js-clone-nav d-none d-lg-block">
                      <li>
                        <Link to="/trainers">Developer</Link>
                      </li>
                      <li>
                        <Link to="/register">Register</Link>
                      </li>
                      <li>
                        <Link to="/login">Login</Link>
                      </li>
                    </ul>
                  </div>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
