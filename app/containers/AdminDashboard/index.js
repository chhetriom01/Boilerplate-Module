import React from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import jwtDecode from 'jwt-decode';
import { makeSelectUser, makeSelectLocation } from '../App/selectors';
import AdminRoutes from './Routes';
import { push } from 'connected-react-router';
import NavBar from './navbar';
import {Switch, Route} from 'react-router-dom';
import Testimonial from 'containers/Testimonial';
import ListTestimonial from '../Testimonial/listTestimonial';

const mapStateToProps = createStructuredSelector({
  location: makeSelectLocation(),
  // user: makeSelectUser()
});

const mapDispatchToProps = dispatch => ({
  // logout: () => dispatch(logoutRequest()),
  // clearDistributorState: () => dispatch(clearAllStates()),
  // navigateToProfilePage: () => dispatch(push('/admin/dashboard/profile')),
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
        <NavBar />
        <Switch>
          <Route path="/admin/testimonial" component={Testimonial} />
          <Route path="/admin/listtestimonial" component={ListTestimonial} />
          {/* <Route path ="/admin/profile" component={Profile} /> */}
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
