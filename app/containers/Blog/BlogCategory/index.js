/**
 *
 * BlogCategory
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
import makeSelectBlogCategory, {
  createSelectGetBlogCategory,
} from './selectors';
import reducer from './reducer';
import saga from './saga';
import messages from './messages';
import { Button, Divider, Table, Icon } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import { getBlogCategoryRequest } from './actions';

/* eslint-disable react/prefer-stateless-function */
export class BlogCategory extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  componentDidMount() {
    this.props.getBlogCategoryRequest();
  }

  componentWillReceiveProps(nextProps) {
    console.log(nextProps.getBlogCategory.toJS());
    if (nextProps.getBlogCategory !== this.props.getBlogCategory) {
      this.setState({
        getBlogCategory: nextProps.getBlogCategory.toJS(),
      });
    }
  }

  render() {
    const { getBlogCategory } = this.state;
    return (
      <div>
        <h1>Blog Management</h1>

        <Link to="/admin/blog">
          <Button type="button"> Blog</Button>
        </Link>
        <Link to="/admin/blog/blogCategory">
          <Button primary type="button" name="category">
            Blog Category
          </Button>
        </Link>

        <Divider />
        <Link to="/admin/blog/blogCategory/blogcategoryeditor">
          <Button>Add Blog Category</Button>
        </Link>
        <Table celled>
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell>S.N</Table.HeaderCell>
              <Table.HeaderCell>BlogCategory</Table.HeaderCell>
              <Table.HeaderCell>Active</Table.HeaderCell>
              <Table.HeaderCell>Actions</Table.HeaderCell>
            </Table.Row>
          </Table.Header>
          <Table.Body>
            {getBlogCategory &&
              getBlogCategory.length > 0 &&
              getBlogCategory.map((element, index) => (
                <Table.Row key={index}>
                  <Table.Cell>{index + 1}</Table.Cell>
                  <Table.Cell>{element.categoryName}</Table.Cell>
                  <Table.Cell>
                    <div>
                      {element.active === true ? (
                        <Icon color="green" name="check" />
                      ) : (
                        <Icon color="red" name="close" />
                      )}
                    </div>
                  </Table.Cell>
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

// BlogCategory.propTypes = {
//   dispatch: PropTypes.func.isRequired,
// };

const mapStateToProps = createStructuredSelector({
  blogCategory: makeSelectBlogCategory(),
  getBlogCategory: createSelectGetBlogCategory(),
});

// function mapDispatchToProps(dispatch) {
//   return {
//     dispatch,
//   };
// }

const mapDispatchToProps = dispatch => ({
  getBlogCategoryRequest: () => dispatch(getBlogCategoryRequest()),
});

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

const withReducer = injectReducer({ key: 'blogCategory', reducer });
const withSaga = injectSaga({ key: 'blogCategory', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(BlogCategory);
