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

import decode from 'jwt-decode';
import { push } from 'connected-react-router';
import './App.css';


export class DashBoardUser extends React.Component {
  debugger;
  state = {};

  componentDidMount() {
    if(!!localStorage.getItem('token')){
    const decoded = decode(localStorage.getItem('token'));
    const role = decoded.user.userRole;
    if (role !== 'student') {
      this.props.redirect('/');
    }
  } else {
    this.props.redirect('/');
  }
  }

  handleLogout = () => {
    localStorage.removeItem('token');
    this.props.dispatch(push('/'));
  };

  handleItemClick = (e, { name }) => this.setState({ activeItem: name });
  render() {
    const { activeItem } = this.state;

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
// function mapDispatchToProps(dispatch) {
//   return {
//     dispatch,

//   };
// }

const mapDispatchToProps = dispatch => ({
  click: () => dispatch(click()),
  redirect: path => dispatch(push(path)),
  dispatch,
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
