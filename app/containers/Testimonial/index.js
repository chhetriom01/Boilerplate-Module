/**
 *
 * Testimonial
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
import makeSelectTestimonial from './selectors';
import reducer from './reducer';
import saga from './saga';
import messages from './messages';
import NavBar from '../AdminDashboard/navbar';
import { submitTestimonialRequest } from './actions';
import { push } from 'connected-react-router';

import { Button, Checkbox, Form, Modal, Header, Icon } from 'semantic-ui-react';
import { Switch, Route, Link } from 'react-router-dom';
// import { ListTestimonial } from '../ListTestimonial';
import ListTestimonial from '../ListTestimonial';

export class Testimonial extends React.Component {
  render() {
    return (
      <div>
        <Link to="/admin/testimonial/testimonialedit/">
          <Button type="button">Add Testimonial</Button>
        </Link>
        <ListTestimonial />
      </div>
    );
  }
}

Testimonial.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  testimonial: makeSelectTestimonial(),
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

const withReducer = injectReducer({ key: 'testimonial', reducer });
const withSaga = injectSaga({ key: 'testimonial', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(Testimonial);
