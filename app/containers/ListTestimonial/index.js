/**
 *
 * ListTestimonial
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
import makeSelectListTestimonial from './selectors';
import reducer from './reducer';
import saga from './saga';
import messages from './messages';

/* eslint-disable react/prefer-stateless-function */
export class ListTestimonial extends React.Component {
  render() {
    return (
      <div>
        <h1> Hello Om Bahadur Chhteri</h1>
      </div>
    );
  }
}

ListTestimonial.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  listTestimonial: makeSelectListTestimonial(),
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

const withReducer = injectReducer({ key: 'listTestimonial', reducer });
const withSaga = injectSaga({ key: 'listTestimonial', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(ListTestimonial);
