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
import { postBlogRequest } from './actions';

/* eslint-disable react/prefer-stateless-function */
export class BlogEditor extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {
        blogCategory: 'Tourist',
        blogTitle: 'Kathmandu',
        blogSummary: 'Blast of Cylinder',
        blogDescription:
          'Near anamnagar 2076-02-12  gas cylinder was blasted and many  people were injured',
        tags: ['nepal', 'kantipur'],
        author: 'om',
        blogStatus: 'Active',
      },
    };
  }

  onInputChange = event => {
    const field = event.target.name;
    const data = this.state.data;
    data[field] = event.target.value;
    return this.setState({
      data: data,
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.postBlogRequest(this.state.data);
  };

  render() {
    return (
      <div>
        <Form onSubmit={this.handleSubmit}>
          <Form.Group>
            <Form.Input
              label="Blog Category"
              placeholder="category name"
              name="blogCategory"
              value={this.state.data.blogCategory}
              onChange={this.onInputChange}
              required
            />
          </Form.Group>
          <Form.Group>
            <Form.Input
              label="Blog Title"
              placeholder="Enter personName"
              name="blogTitle"
              value={this.state.data.blogTitle}
              onChange={this.onInputChange}
              required
            />
          </Form.Group>

          <Form.Group>
            <Form.Input
              label="Blog Summary "
              placeholder="Description"
              name="blogSummary"
              value={this.state.data.blogSummary}
              onChange={this.onInputChange}
              required
            />
          </Form.Group>
          <Form.Field
            control={TextArea}
            name="blogDescription"
            value={this.state.data.blogDescription}
            onChange={this.onInputChange}
            label="Blog Description"
            placeholder="Tell us more about you..."
            required
          />

          <Form.Group>
            <Form.Input
              label="Tags"
              placeholder="enter to tags"
              name="tags"
              value={this.state.data.tags}
              onChange={this.onInputChange}
              required
            />
          </Form.Group>
          <Form.Group>
            <Form.Input
              label="Blog Author Name"
              placeholder="Author Name"
              name="author"
              value={this.state.data.author}
              onChange={this.onInputChange}
              required
            />
          </Form.Group>
          <Form.Group>
            <Form.Input
              label="Status"
              placeholder="Author Name"
              name="blogStatus"
              value={this.state.data.blogStatus}
              onChange={this.onInputChange}
              required
            />
          </Form.Group>

          <Button color="blue" type="Submit">
            Submit
          </Button>
          <Link to="/admin/blog">
            <Button color="red" onClick={this.resetvalue}>
              Cancel
            </Button>
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

// function mapDispatchToProps(dispatch) {
//   return {
//     dispatch,
//   };
// }

const mapDispatchToProps = dispatch => ({
  postBlogRequest: data => dispatch(postBlogRequest(data)),
});

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
