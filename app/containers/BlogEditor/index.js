/**
 *
 * BlogEditor
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
import makeSelectBlogEditor from './selectors';
import reducer from './reducer';
import saga from './saga';
import messages from './messages';

/* eslint-disable react/prefer-stateless-function */
export class BlogEditor extends React.Component {
  render() {
    return (
      <div>
        <Helmet>
          <title>BlogEditor</title>
          <meta name="description" content="Description of BlogEditor" />
        </Helmet>
        <FormattedMessage {...messages.header} />
      </div>
    );
  }
}

BlogEditor.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  blogEditor: makeSelectBlogEditor(),
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

const withReducer = injectReducer({ key: 'blogEditor', reducer });
const withSaga = injectSaga({ key: 'blogEditor', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(BlogEditor);
