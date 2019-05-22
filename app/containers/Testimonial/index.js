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
  constructor(props) {
    super(props);
    this.state = {
      data: {
        personName: 'Om Bahadur Chhetri ',
        testimonialContent: 'Article',
        organization: 'BitsBeat',
        // message: 'this is the message',
      },
      open: false,
    };
  }
  handleSubmit = e => {
    e.preventDefault();
    this.props.submitTestimonialRequest(this.state.data);
    // this.props.dispatch(submitTestimonialRequest(this.state.data));
  };

  onInputChange = event => {
    const field = event.target.name;
    const data = this.state.data;
    data[field] = event.target.value;
    return this.setState({
      data: data,
    });
  };
  resetvalue = () => {
    this.setState({
      data: {
        personName: '',
        testimonialContent: '',
        organization: '',
        message: '',
      },
    });
  };

  show = dimmer => () => this.setState({ dimmer, open: true });
  close = () => this.setState({ open: false });

  render() {
    // const { token } = this.props.data.manish.value;
    const { open, dimmer } = this.state;
    return (
      <div>
        <Link to="/admin/testimonial/testimonialedit/">
          <Button type="button">Add Testimonial</Button>
        </Link>
        {/* <Link to="/admin/testimonial/listtestimonial">
          <Button type="button">ListTestimonial</Button>
        </Link> */}
        <ListTestimonial />
      </div>
    );
  }
}

// Testimonial.propTypes = {
//   dispatch: PropTypes.func.isRequired,
// };

const mapStateToProps = createStructuredSelector({
  testimonial: makeSelectTestimonial(),
});

// function mapDispatchToProps(dispatch) {
//   return {
//     dispatch,
//   };
// }

const mapDispatchToProps = dispatch => ({
  submitTestimonialRequest: data => dispatch(submitTestimonialRequest(data)),
  fetchTestimonialRequest: () => dispatch(fetchTestimonialRequest()),
  redirect: path => dispatch(push(path)),
});

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
