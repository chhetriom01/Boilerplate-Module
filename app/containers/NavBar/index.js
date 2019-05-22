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
import { Route,Link } from 'react-router-dom';
import AdminDashboard from '../AdminDashboard';
import {push} from "connected-react-router"
/* eslint-disable react/prefer-stateless-function */

const divStyle = {
  flex: 1,
};

export class NavBar extends React.Component {
  state = {};
  handleLogout = () => {
    localStorage.removeItem('token');
    this.props.dispatch(push('/'));
  };

  handleItemClick = (e, { name }) => this.setState({ activeItem: name });
  render() {
    const { activeItem } = this.state;
    return (
      <div >
      <div className="pusher" >
        <Menu pointing secondary>
          <Menu.Item
            as={Link}
            to="/admin"
            name="home"
            active={activeItem === 'home'}
          />
          <Menu.Item
            as={Link}
            to="/admin/testimonial"
            name="home"
            name="Testimonial"
            active={activeItem === 'Testimonial'}
          />
          <Menu.Item
            as={Link}
            to="/admin/profile"
            name="Profile"
            active={activeItem === 'profile'}
          />
          <Menu.Menu position="right">
            <Menu.Item
              name="logout"
              active={activeItem === 'logout'}
              onClick={this.handleLogout}
            />
          </Menu.Menu>
        </Menu>
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
