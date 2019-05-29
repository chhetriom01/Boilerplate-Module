/**
 *
 * BlogCategoryEditor
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
import makeSelectBlogCategoryEditor from './selectors';
import reducer from './reducer';
import saga from './saga';
import messages from './messages';

/* eslint-disable react/prefer-stateless-function */
export class BlogCategoryEditor extends React.Component {
  render() {
    return (
      <div>
        <Helmet>
          <title>BlogCategoryEditor</title>
          <meta
            name="description"
            content="Description of BlogCategoryEditor"
          />
        </Helmet>
        <FormattedMessage {...messages.header} />
      </div>
    );
  }
}

BlogCategoryEditor.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  blogCategoryEditor: makeSelectBlogCategoryEditor(),
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

const withReducer = injectReducer({ key: 'blogCategoryEditor', reducer });
const withSaga = injectSaga({ key: 'blogCategoryEditor', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(BlogCategoryEditor);
