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
import { Switch, Route } from 'react-router-dom';
import ListTestimonial from '../ListTestimonial'

export class Testimonial extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {
        personName: 'Om Bahadur Chhetri ',
        testimonialContent: 'Article',
        organization: 'BitsBeat',
        message: 'this is the message',
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

  handleButton = e => {
    e.preventDefault();
    console.log('from handle button');
    // this.props.fetchTestimonialRequest();
    // this.props.dispatch(fetchRequesting());
    this.props.redirect('/admin/testimonial/listtestimonial');
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
        <Button onClick={this.show('blurring')}>AddTestimonial</Button>

        <Modal dimmer={dimmer} open={open} onClose={this.close} closeIcon>
          <Modal.Header>Post Testimonial</Modal.Header>

          <Form onSubmit={this.handleSubmit}>
            <Form.Group>
              <Form.Input
                label="Person Name"
                placeholder="Enter personName"
                name="personName"
                value={this.state.data.personName}
                onChange={this.onInputChange}
                required
              />
            </Form.Group>

            <Form.Group>
              <Form.Input
                label="Testimonial Content"
                placeholder="testimonialContent"
                name="testimonialContent"
                value={this.state.data.testimonialContent}
                onChange={this.onInputChange}
                required
              />
            </Form.Group>
            <Form.Group>
              <Form.Input
                label="Organization"
                placeholder="Name of organization"
                name="organization"
                value={this.state.data.organization}
                onChange={this.onInputChange}
                required
              />
            </Form.Group>
            <Form.Group>
              <Form.Input
                label="Message"
                placeholder="enter your message"
                name="message"
                value={this.state.data.message}
                onChange={this.onInputChange}
                required
              />
            </Form.Group>
            <Button type="Submit">Submit</Button>
            <Button onClick={this.resetvalue}>Reset</Button>
          </Form>
        </Modal>
        <Button onClick={this.handleButton}>ListTestimonial</Button>
        <Switch>
          <Route 
            path="/admin/testimonial/listtestimonial"
            component={ListTestimonial}
          />
        </Switch>
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
