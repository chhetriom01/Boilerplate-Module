/**
 *
 * Token
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
import makeSelectToken from './selectors';
import reducer from './reducer';
import saga from './saga';
import messages from './messages';

/* eslint-disable react/prefer-stateless-function */
export class Token extends React.Component {
  render() {
    return (
      <div>
        <Helmet>
          <title>Token</title>
          <meta name="description" content="Description of Token" />
        </Helmet>
        <FormattedMessage {...messages.header} />
      </div>
    );
  }
}

Token.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  token: makeSelectToken(),
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

const withReducer = injectReducer({ key: 'token', reducer });
const withSaga = injectSaga({ key: 'token', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(Token);