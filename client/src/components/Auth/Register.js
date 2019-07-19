import React, { Fragment, useState } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { setAlert } from '../../actions/alert';
import { register } from '../../actions/auth';
import PropTypes from 'prop-types';
// import axios from 'axios';

const Register = ({ setAlert, register }) => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    password2: ''
  });

  const { email, password, password2 } = formData;

  const onChange = e =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = async e => {
    e.preventDefault();
    if (password !== password2) {
      setAlert('password not match', 'danger');
    } else {
      register({ email, password });
    }
  };

  return (
    <Fragment>
      <div className="py-5 bg-light">
        <div className="container">
          <div className="row">
            <div className="col-lg-4">
              <div className="p-4 mb-3 bg-white">
                <h3 className="h5 text-black mb-3">Register</h3>
                <p className="mb-0 font-weight-bold">Welcome</p>
                <p className="mb-4">
                  In this platform you can meet Developers and get to know them.
                  exchange your experience with them. You can join on going
                  project or you can find developers for your team.
                </p>
              </div>
            </div>

            <div className="col-md-12 col-lg-8 mb-5">
              <form onSubmit={e => onSubmit(e)} className="p-5 bg-white">
                <div className="row form-group">
                  <div className="col-md-12 mb-3 mb-md-0">
                    <label className="font-weight-bold" htmlFor="email">
                      Email
                    </label>
                    <input
                      type="email"
                      placeholder="Email"
                      name="email"
                      value={email}
                      onChange={e => onChange(e)}
                      // required
                      id="email"
                      className="form-control"
                    />
                  </div>
                </div>
                <div className="row form-group">
                  <div className="col-md-12">
                    <label className="font-weight-bold" htmlFor="password">
                      Password
                    </label>
                    <input
                      name="password"
                      value={password}
                      onChange={e => onChange(e)}
                      minLength="6"
                      type="password"
                      id="password"
                      className="form-control"
                      placeholder="Password"
                    />
                  </div>
                </div>
                <div className="row form-group">
                  <div className="col-md-12">
                    <label className="font-weight-bold" htmlFor="password">
                      Confirm Password
                    </label>
                    <input
                      name="password2"
                      value={password2}
                      onChange={e => onChange(e)}
                      minLength="6"
                      type="password"
                      id="password2"
                      className="form-control"
                      placeholder="Confirm Password"
                    />
                  </div>
                </div>
                <div className="row form-group">
                  <div className="col-md-12">
                    <input
                      type="submit"
                      value="Register"
                      className="btn btn-primary text-white px-4 py-2"
                    />
                  </div>
                </div>
                <p>
                  Already have an account? <Link to="/Login">Login</Link>
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

Register.prototype = {
  setAlert: PropTypes.func.isRequired,
  register: PropTypes.func.isRequired
};

export default connect(
  null,
  { setAlert, register }
)(Register);
