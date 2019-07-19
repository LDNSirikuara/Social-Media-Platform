import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Login from './components/Auth/Login';
import Register from './components/Auth/Register';
import Navbar from './components/layout/Navbar';
import MobileMenu from './components/layout/MobileMenu';
import Landing from './components/layout/Landing';
import Footer from './components/layout/Footer';
import Alert from './components/layout/Alert';

// Redux
import { Provider } from 'react-redux';
import store from './store';

// Fonts
import './fonts/icomoon/style.css';
import './fonts/flaticon/font/flaticon.css';

// Css
import './css/bootstrap.min.css';
import './css/magnific-popup.css';
import './css/jquery-ui.css';
import './css/owl.carousel.min.css';
import './css/owl.theme.default.min.css';
import './css/bootstrap-datepicker.css';
import './css/animate.css';
import './css/aos.css';
import './css/style.css';

// Image
var devBg = require('./images/devBgOld.jpg');

const App = () => (
  <Provider store={store}>
    <Router>
      <Fragment>
        <div
          className="mBody"
          style={{ backgroundImage: ' url(' + devBg + ')' }}
        >
          <div className="site-wrap">
            <MobileMenu />
            <Navbar />
            <Route exact path="/" component={Landing} />
            <Alert />
            <Switch>
              <Route exact path="/register" component={Register} />
              <Route exact pathe="/login" component={Login} />
            </Switch>
            <Footer />
          </div>
        </div>
      </Fragment>
    </Router>
  </Provider>
);

export default App;
