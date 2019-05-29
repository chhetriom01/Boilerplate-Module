/**
 *
 * BlogCategory
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
import makeSelectBlogCategory from './selectors';
import reducer from './reducer';
import saga from './saga';
import messages from './messages';
import { Button, Divider } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

/* eslint-disable react/prefer-stateless-function */
export class BlogCategory extends React.Component {
  state = {};
  // handleItemClick = (e, { name }) => this.setState({ activeItem: name });
  render() {
    // const { activeItem } = this.state;
    return (
      <div>
        <h1>Blog Management</h1>

        <Link to="/admin/blog">
          <Button type="button"> Blog</Button>
        </Link>
        <Link to="/admin/blog/blogCategory">
          <Button
            primary
            type="button"
            name="category"
            // active={activeItem === 'category'}
            // onClick={this.handleItemClick}
          >
            Blog Category
          </Button>
        </Link>

        <Divider />
        <Link to="/admin/blog/blogCategory/blogcategoryeditor">
          <Button>Add Blog Category</Button>
        </Link>
      </div>
    );
  }
}

BlogCategory.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  blogCategory: makeSelectBlogCategory(),
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

const withReducer = injectReducer({ key: 'blogCategory', reducer });
const withSaga = injectSaga({ key: 'blogCategory', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(BlogCategory);
