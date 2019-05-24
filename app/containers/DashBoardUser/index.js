/**
 *
 * DashBoardUser
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { FormattedMessage } from 'react-intl';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';
import makeSelectDashBoardUser from './selectors';
import reducer from './reducer';
import saga from './saga';
import messages from './messages';

import * as jwt from 'jwt-decode';
import { push } from 'connected-react-router';


import './App.css';

// const decoded = jwt(localStorage.getItem('token'));
// const role = decoded.user.userRole;

/* eslint-disable react/prefer-stateless-function */
export class DashBoardUser extends React.Component {
  state = {};

  // componentDidMount() {
  //   if(role !== 'student'){
  //     this.props.redirect('/');
  //   }
  // }

  handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('userRole');
    this.props.dispatch(push('/'));
  };

  handleItemClick = (e, { name }) => this.setState({ activeItem: name });
  render() {
    const { activeItem } = this.state;
    // const decoded = jwt(localStorage.getItem('token'));
    // console.log(decoded.user.userRole, 'from navbar');

    return (
      <div>
        <div className="topnav">
          <a href="#home">About Us</a>
          <a href="#news">Contact</a>
          <div className="topnav-right">
            {/* <a>{decoded.user.userRole} </a> */}
            <a onClick={this.handleLogout}>LogOut</a>
          </div>
        </div>

        <h1> WELCOME TO DASH BOARD USER</h1>
      </div>
    );
  }
}
DashBoardUser.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  dashBoardUser: makeSelectDashBoardUser(),
});

const mapDispatchToProps = dispatch => ({
  redirect: path => dispatch(push(path)),
});

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

const withReducer = injectReducer({ key: 'dashBoardUser', reducer });
const withSaga = injectSaga({ key: 'dashBoardUser', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(DashBoardUser);
