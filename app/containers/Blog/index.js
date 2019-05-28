/**
 *
 * Blog
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
import makeSelectBlog from './selectors';
import reducer from './reducer';
import saga from './saga';
import messages from './messages';
import { Button } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

/* eslint-disable react/prefer-stateless-function */
export class Blog extends React.Component {
  render() {
    return (
      <div>
        <Link to="/admin/blog/blogeditor">
          <Button type="button">Add User</Button>
        </Link>
      </div>
    );
  }
}

Blog.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  blog: makeSelectBlog(),
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

const withReducer = injectReducer({ key: 'blog', reducer });
const withSaga = injectSaga({ key: 'blog', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(Blog);
