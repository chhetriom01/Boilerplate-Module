/**
 *
 * NavBar
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
import makeSelectNavBar from './selectors';
import reducer from './reducer';
import saga from './saga';
import messages from './messages';
import { Menu, Segment } from 'semantic-ui-react';
import { Route, Link } from 'react-router-dom';
import AdminDashboard from '../AdminDashboard';
import { push } from 'connected-react-router';
import './App.css';
import * as jwt from 'jwt-decode';
/* eslint-disable react/prefer-stateless-function */

const divStyle = {
  flex: 1,
};

export class NavBar extends React.Component {
  state = {};
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
      </div>
    );
  }
}

NavBar.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  navBar: makeSelectNavBar(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

const withReducer = injectReducer({ key: 'navBar', reducer });
const withSaga = injectSaga({ key: 'navBar', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(NavBar);
