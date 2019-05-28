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
import { Button, Form, TextArea } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

/* eslint-disable react/prefer-stateless-function */
export class BlogEditor extends React.Component {
  render() {
    return (
      <div>
        <Form onSubmit={this.handleSubmit}>
          <Form.Group>
            <Form.Input
              label="Blog Title"
              placeholder="Enter personName"
              name="personName"
              // value={this.state.data.personName}
              // onChange={this.onInputChange}
              required
            />
          </Form.Group>

          <Form.Group>
            <Form.Input
              label="Blog Summary "
              placeholder="Description"
              name="testimonialContent"
              // value={this.state.data.testimonialContent}
              // onChange={this.onInputChange}
              required
            />
          </Form.Group>
          <Form.Field
            control={TextArea}
            label="Blog Description"
            placeholder="Tell us more about you..."
          />

          <Form.Group>
            <Form.Input
              label="Author"
              placeholder="Author Name"
              name="organization"
              // value={this.state.data.organization}
              // onChange={this.onInputChange}
              required
            />
          </Form.Group>

          <Button type="Submit">Submit</Button>
          <Link to="/admin/testimonial">
            <Button onClick={this.resetvalue}>Cancel</Button>
          </Link>
        </Form>
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
