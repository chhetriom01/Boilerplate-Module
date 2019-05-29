/**
 *
 * Blog
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
import makeSelectBlog, { makeSelectFetchBlog } from './selectors';
import reducer from './reducer';
import saga from './saga';
import messages from './messages';
import { Button, Table, Divider } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import { fetchBlogRequest } from './actions';

/* eslint-disable react/prefer-stateless-function */
export class Blog extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      fetchBlog: null,
    };
  }

  componentDidMount() {
    this.props.fetchBlogRequest();
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.fetchBlog !== this.props.fetchBlog) {
      // console.log('from Recieve props', nextProps.fetchBlog.toJS());
      // console.log("from props recieve",nextProps.fetchBlog.get('dataList')[1]);
      this.setState({
        fetchBlog: nextProps.fetchBlog.toJS(),
      });
    }
  }

  render() {
    const { fetchBlog } = this.state;
    return (
      <div>
        <h1>Blog Management</h1>

        <Link to="/admin/blog">
          <Button primary type="button">
            Blog
          </Button>
        </Link>
        <Link to="/admin/blog/blogCategory">
          <Button type="button">Blog Category</Button>
        </Link>

        <Divider />

        <Link to="/admin/blog/blogeditor">
          <Button type="button"> Add Blog</Button>
        </Link>

        <Table celled>
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell>S.N</Table.HeaderCell>
              <Table.HeaderCell>Blog Title</Table.HeaderCell>
              <Table.HeaderCell>Blog Author</Table.HeaderCell>
              <Table.HeaderCell>Active</Table.HeaderCell>
              <Table.HeaderCell>Action</Table.HeaderCell>
            </Table.Row>
          </Table.Header>
          <Table.Body>
            {fetchBlog &&
              fetchBlog.length > 0 &&
              fetchBlog.map((element, index) => (
                <Table.Row key={index}>
                  <Table.Cell>{index + 1}</Table.Cell>
                  <Table.Cell>{element.blogTitle}</Table.Cell>
                  <Table.Cell>{element.author}</Table.Cell>
                  <Table.Cell>{element.status}</Table.Cell>
                  <Table.Cell>
                    <Button
                      basic
                      color="green"
                      onClick={() => this.onEdit(element._id)}
                    >
                      Edit
                    </Button>
                    {/* </Link> */}

                    <Button
                      basic
                      color="red"
                      onClick={() => this.onDelete(element._id)}
                    >
                      Delete
                    </Button>
                  </Table.Cell>
                </Table.Row>
              ))}
          </Table.Body>
        </Table>
      </div>
    );
  }
}

// Blog.propTypes = {
//   dispatch: PropTypes.func.isRequired,
// };

const mapStateToProps = createStructuredSelector({
  blog: makeSelectBlog(),
  fetchBlog: makeSelectFetchBlog(),
});

// function mapDispatchToProps(dispatch) {
//   return {
//     dispatch,
//   };
// }

const mapDispatchToProps = dispatch => ({
  fetchBlogRequest: () => dispatch(fetchBlogRequest()),
});

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

const withReducer = injectReducer({ key: 'blog', reducer });
const withSaga = injectSaga({ key: 'blog', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(Blog);
