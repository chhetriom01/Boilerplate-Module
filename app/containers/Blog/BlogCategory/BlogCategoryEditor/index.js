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
import { Link } from 'react-router-dom';
import { Form, Button, Checkbox } from 'semantic-ui-react';

/* eslint-disable react/prefer-stateless-function */
export class BlogCategoryEditor extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {
        categoryName: 'FoosBall',
        categoryDescription: 'Indoor Game, popular in BitsBeat Office',
        active: false,
      },
    };
  }

  onInputChange = e => {
    const field = e.target.name;
    const data = this.state.data;
    data[field] = e.target.value;
    return this.setState({
      data: data,
    });
  };

  handleCheck = e => {
    this.setState(prevState => ({
      ...prevState,
      data: {
        ...prevState.data,
        active: !prevState.data.active,
      },
    }));
  };
  handleSubmit = e => {
    e.preventDefault();
    console.log(this.state);
  };
  render() {
    return (
      <div>
        <Form onSubmit={this.handleSubmit}>
          <Form.Input
            label="Blog Category"
            placeholder="category name"
            name="categoryName"
            value={this.state.data.categoryName}
            onChange={this.onInputChange}
            required
          />

          <Form.Input
            label="Blog Title"
            placeholder="Enter personName"
            name="categoryDescription"
            value={this.state.data.categoryDescription}
            onChange={this.onInputChange}
            required
          />
          <Form.Input>
            <Checkbox
              checked={this.state.data.active}
              onChange={this.handleCheck}
              label="Active"
              toggle
            />
          </Form.Input>

          <Button color="blue" type="Submit">
            Submit
          </Button>
          <Link to="/admin/blog/blogcategory">
            <Button color="red" onClick={this.resetvalue}>
              Cancel
            </Button>
          </Link>
        </Form>
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
