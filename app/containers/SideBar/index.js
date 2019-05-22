/**
 *
 * SideBar
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
import makeSelectSideBar from './selectors';
import reducer from './reducer';
import saga from './saga';
import messages from './messages';
import { Sidebar, Menu, Icon, Dropdown, Segment } from 'semantic-ui-react';
import { Route, Link } from 'react-router-dom';

/* eslint-disable react/prefer-stateless-function */
export class SideBar extends React.Component {
  state = {};
  handleItemClick = (e, { name }) => this.setState({ activeItem: name });
  render() {
    const { activeItem } = this.state;
    return (
      <div className="pusher">
        <div className="full height">
          <div className="toc">
            <Menu className="inverted vertical left fixed">
              <Menu.Item
                as={Link}
                to="/admin"
                name="home"
                active={activeItem === 'home'}
              >
                Home
                <Icon name="home" />
                <Menu.Menu />
              </Menu.Item>
              <Menu.Item
                name="browse"
                active={activeItem === 'browse'}
                onClick={this.handleItemClick}
              >
                <Icon name="grid layout" />
                Blog
              </Menu.Item>
              <Menu.Item
                as={Link}
                to="/admin/testimonial"
                name="home"
                name="Testimonial"
                active={activeItem === 'Testimonial'}
              >
                <Icon name="warehouse" />
                Testimonial
              </Menu.Item>

              <Dropdown item text="More">
                <Dropdown.Menu>
                  <Dropdown.Item icon="edit" text="Edit Profile" />
                  <Dropdown.Item icon="globe" text="Choose Language" />
                  <Dropdown.Item icon="settings" text="Account Settings" />
                </Dropdown.Menu>
              </Dropdown>
            </Menu>
          </div>
          <div className="article" />
        </div>
      </div>
    );
  }
}

// SideBar.propTypes = {
//   dispatch: PropTypes.func.isRequired,
// };

const mapStateToProps = createStructuredSelector({
  sideBar: makeSelectSideBar(),
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

const withReducer = injectReducer({ key: 'sideBar', reducer });
const withSaga = injectSaga({ key: 'sideBar', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(SideBar);
