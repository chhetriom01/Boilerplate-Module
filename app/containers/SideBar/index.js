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
import {
  Menu,
  Icon,
  Item,
  Dropdown,
  Accordion,
  Form,
  Button,
} from 'semantic-ui-react';
import { Rote, Link } from 'react-router-dom';

const DropForm = (
  <div>
    <Menu.Item as={Link} to="/admin/blog">
      Add Blog
    </Menu.Item>
    <Menu.Item as={Link} to="/admin/blog/blogcategory">
      Blog Category
    </Menu.Item>
  </div>
);

/* eslint-disable react/prefer-stateless-function */
export class SideBar extends React.Component {
  state = { activeIndex: 0 };

  handleItemClick = (e, { name }) => this.setState({ activeItem: name });

  handleClick = (e, titleProps) => {
    const { index } = titleProps;
    const { activeIndex } = this.state;
    const newIndex = activeIndex === index ? -1 : index;

    this.setState({ activeIndex: newIndex });
  };

  render() {
    const { activeItem } = this.state;
    const { activeIndex } = this.state;

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
                onClick={this.handleItemClick}
              >
                Home
                <Icon name="home" />
                <Menu.Menu />
              </Menu.Item>
              <Menu.Item
                as={Link}
                to="/admin/blog"
                name="blog"
                active={activeItem === 'blog'}
                onClick={this.handleItemClick}
              >
                <Icon name="grid layout" />
                Blog
              </Menu.Item>
              <Menu.Item
                as={Link}
                to="/admin/testimonial"
                name="-"
                name="Testimonial"
                active={activeItem === 'Testimonial'}
                onClick={this.handleItemClick}
              >
                <Icon name="warehouse" />
                Testimonial
              </Menu.Item>
              <Menu.Item
                as={Link}
                to="/admin/user"
                name="User"
                active={activeItem === 'User'}
                onClick={this.handleItemClick}
              >
                <Icon name="user plus" />
                User
              </Menu.Item>

              <Menu.Item
                as={Link}
                to="/admin/token"
                name="Token"
                active={activeItem === 'Token'}
                onClick={this.handleItemClick}
              >
                <Icon name="ticket" />
                Token
              </Menu.Item>
              <i class="button primary ui">Test</i>

              <Menu.Item>
                <Accordion >
                  <Accordion.Title
                    active={activeIndex === 1}
                    style={{color: "#ffffff"}}
                    content="Test Accordion"
                    index={1}
                    onClick={this.handleClick}
                  />
                  <Accordion.Content
                    active={activeIndex === 1}
                    content={DropForm}
                  />
                </Accordion>
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
