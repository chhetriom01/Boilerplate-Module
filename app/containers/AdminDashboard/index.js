import React from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { makeSelectUser, makeSelectLocation } from '../App/selectors';
import AdminRoutes from './Routes';
import { push } from 'connected-react-router';
// import {NavBar} from './Navbar';
import NavBar from '../NavBar';
import { Switch, Route } from 'react-router-dom';
import Testimonial from 'containers/Testimonial';
import ListTestimonial from 'containers/Testimonial/TestimonialList';
import TestimonialEdit from 'containers/Testimonial/TestimonialEdit';
import BlogEditor from 'containers/Blog/BlogEditor';
import User from 'containers/User';
import Token from 'containers/Token';
import Blog from 'containers/Blog';
import { SideBar } from '../SideBar';
import * as jwt from 'jwt-decode';
import './App.css';
import UserEdit from '../User/UserEdit';

const mapStateToProps = createStructuredSelector({
  location: makeSelectLocation(),
});

const mapDispatchToProps = dispatch => ({
  redirect: path => dispatch(push(path)),
});

class AdminDashboard extends React.Component {
  componentDidMount() {
    const decoded = jwt(localStorage.getItem('token'));
    const role = decoded.user.userRole;
    // console.log("from admin dashboard",decoded)
    if (role !== 'superadmin') {
      this.props.redirect('/');
    }
  }

  render() {
    return (
      <div className="main">
        <NavBar />
        <SideBar />
        <br />
        <div className="main_data">
          <Switch>
            <Route exact path="/admin/blog" component={Blog} />
            <Route exact path="/admin/blog/blogeditor" component={BlogEditor} />

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
            <Route exact path="/admin/user" component={User} />
            <Route exact path="/admin/user/useredit/" component={UserEdit} />
            <Route path="/admin/user/useredit/:id" component={UserEdit} />

            <Route path="/admin/token" component={Token} />
          </Switch>
        </div>
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
