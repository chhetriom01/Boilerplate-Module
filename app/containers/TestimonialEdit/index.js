/**
 *
 * TestimonialEdit
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
import makeSelectTestimonialEdit, { makeGetDatById } from './selectors';
import reducer from './reducer';
import saga from './saga';
import messages from './messages';
import { Button, Checkbox, Form, Modal, Header, Icon } from 'semantic-ui-react';
import { getTestimonialByIdRequest } from './actions';
/* eslint-disable react/prefer-stateless-function */
export class TestimonialEdit extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {
        personName: '',
        testimonialContent: '',
        organization: '',
      },
      testomonialGetDatById: null,
    };
  }
  componentDidMount() {
    // console.log(this.props.match.params.id,"from index of edit testimonial")
    this.props.getTestimonialByIdRequest(this.props.match.params.id);
  }
  componentWillReceiveProps(nextProps) {
    if (nextProps.testomonialGetDatById !== this.props.testomonialGetDatById) {
      const {
        personName,
        testimonialContent,
        organization,
      } = nextProps.testomonialGetDatById.toJS();
      this.setState({
        data: {
          personName: personName,
          testimonialContent: testimonialContent,
          organization: organization,
        },
      });
      console.log(
        'this is from component will props',
        this.props.testomonialGetDatById.toJS(),
      );
    }
  }

  render() {
    return (
      <div>
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
          <Form.Field>
            <Form.Group>
              <Form.Input
                disabled
                label="User_id"
                readOnly
                value={this.props.match.params.id}
              />
            </Form.Group>
          </Form.Field>
          <Button type="Submit">Submit</Button>
          <Button onClick={this.resetvalue}>Reset</Button>
        </Form>
      </div>
    );
  }
}

// TestimonialEdit.propTypes = {
//   dispatch: PropTypes.func.isRequired,
// };

const mapStateToProps = createStructuredSelector({
  testimonialEdit: makeSelectTestimonialEdit(),
  testomonialGetDatById: makeGetDatById(),
});

// function mapDispatchToProps(dispatch) {
//   return {
//     dispatch,
//   };
// }

const mapDispatchToProps = dispatch => ({
  getTestimonialByIdRequest: id => dispatch(getTestimonialByIdRequest(id)),
});

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

const withReducer = injectReducer({ key: 'testimonialEdit', reducer });
const withSaga = injectSaga({ key: 'testimonialEdit', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(TestimonialEdit);