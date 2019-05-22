import React from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import jwtDecode from 'jwt-decode';
import { makeSelectUser, makeSelectLocation } from '../App/selectors';
import AdminRoutes from './Routes';
import { push } from 'connected-react-router';
// import {NavBar} from './Navbar';
import NavBar from '../NavBar';
import { Switch, Route } from 'react-router-dom';
import Testimonial from 'containers/Testimonial';
import ListTestimonial from 'containers/ListTestimonial';
import TestimonialEdit from 'containers/TestimonialEdit';
import User from 'containers/User';
import Blog from 'containers/Blog';
import { SideBar } from '../SideBar';

import './App.css';

const mapStateToProps = createStructuredSelector({
  location: makeSelectLocation(),
});

const mapDispatchToProps = dispatch => ({
  redirect: path => dispatch(push(path)),
});

class AdminDashboard extends React.Component {
  componentDidMount() {
    const token = localStorage.getItem('token');
    if (!token) {
      this.props.redirect('/');
    }
  }

  render() {
    return (
      <div className="main">
        <NavBar />
        <SideBar />
        <br />
        <Switch>
          <Route exact path="/admin/testimonial" component={Testimonial} />
          <Route
            exact
            path="/admin/testimonial/listtestimonial"
            component={ListTestimonial}
          />
          <Route
            exact
            path="/admin/testimonial/listtestimonial"
            component={ListTestimonial}
          />
          <Route
            exact
            path="/admin/testimonial/testimonialedit/"
            component={TestimonialEdit}
          />
          <Route
            path="/admin/testimonial/testimonialedit/:id"
            component={TestimonialEdit}
          />
          <Route path="/admin/user" component={User} />
        </Switch>

        <Route path="/admin/blog" component={Blog} />
      </div>
    );
  }
}

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps,
  )(AdminDashboard),
);
