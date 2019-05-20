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

import { SideBar } from '../SideBar';

import './App.css';

const mapStateToProps = createStructuredSelector({
  location: makeSelectLocation(),
});

const mapDispatchToProps = dispatch => ({
  redirect: path => dispatch(push(path)),
});

class AdminDashboard extends React.Component {
  componentWillMount() {}

  componentDidMount() {
    const token = localStorage.getItem('token');
    if (!token) {
      this.props.redirect('/');
    }
  }

  componentWillReceiveProps(nextProps) {}

  render() {
    return (
      <div>
        <div className="fp-wrapper">
          <div className="sidebar">
            {/* <SideBar /> */}
          </div>
          <div className="fp-panel-main">
            <NavBar />
          </div>
          </div>
        
        <br />
        <Switch>
          <Route exact path="/admin/testimonial" component={Testimonial} />
          <Route
            path="/admin/testimonial/listtestimonial"
            component={ListTestimonial}
          />
        </Switch>
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
