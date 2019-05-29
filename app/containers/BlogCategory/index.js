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

/* eslint-disable react/prefer-stateless-function */
export class BlogCategory extends React.Component {
  render() {
    return (
      <div>
        <Helmet>
          <title>BlogCategory</title>
          <meta name="description" content="Description of BlogCategory" />
        </Helmet>
        <FormattedMessage {...messages.header} />
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
