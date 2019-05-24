import React from 'react';
import Switch from 'react-router-dom/Switch';
import Route from 'react-router-dom/Route';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { makeSelectLocation } from './selectors';
import HomePage from 'containers/HomePage/Loadable';
import Login from 'containers/Login';
import NotFoundPage from 'containers/NotFoundPage';
import AdminDashboard from 'containers/AdminDashboard/Loadable';
import DashBoadUser from '../DashBoardUser';

import LoginForm from 'containers/LoginForm/';

import GuestRoute from '../../components/Routes/GuestRoute';
import UserRoute from '../../components/Routes/UserRoute';

const mapStateToProps = createStructuredSelector({
  location: makeSelectLocation(),
});

class Routes extends React.Component {
  static propTypes = {
    location: PropTypes.shape({
      pathname: PropTypes.string.isRequired,
      search: PropTypes.string,
      hash: PropTypes.string,
      key: PropTypes.string,
    }).isRequired,
  };

  render() {
   
    return (
      <Switch location={this.props.location}>
        <Route exact path="/" render={props => <HomePage {...props} />} />
        <Route exact path="/login" component={LoginForm} />
        <Route path="/admin" component={AdminDashboard} />
        <Route exact path="/user" component={DashBoadUser} />
        <Route component={NotFoundPage} />
      </Switch>
    );
  }
}

export default connect(mapStateToProps)(Routes);
