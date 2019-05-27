/**
 *
 * User
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { FormattedMessage } from 'react-intl';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';
import { Button, Table } from 'semantic-ui-react';

import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';
import {
  makeSelectUser,
  makeSelectGetResponse,
  makePatchResponse,
} from './selectors';
import reducer from './reducer';
import saga from './saga';
import messages from './messages';
import { Link } from 'react-router-dom';
import { getUserDataRequest, patchUserDataRequest } from './actions';
import { push } from 'connected-react-router';

/* eslint-disable react/prefer-stateless-function */
export class User extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      getUserData: null,
      deleteUserData: null,
    };
  }

  componentDidMount() {
    this.props.getUserDataRequest();
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.getUserData !== '' && nextProps.getUserData !== this.props.getUserData) {
      this.setState({
        getUserData: nextProps.getUserData.toJS(),
      });
    }
    if (nextProps.deleteUserData !== this.props.deleteUserData) {
      this.props.getUserDataRequest();
    }
  }

  onEdit = id => {
    this.props.redirect(`/admin/user/useredit/${id}`);
  };

  onDelete = id => {
    this.props.patchUserDataRequest(id);
  };

  render() {
    return (
      <div>
        <Link to="/admin/user/useredit/">
          <Button type="button">Add User</Button>
        </Link>
        {this.props.errorMessage && this.props.errorMessage}
        <Table celled>
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell>S.N</Table.HeaderCell>
              <Table.HeaderCell>First Name</Table.HeaderCell>
              <Table.HeaderCell>Last Name</Table.HeaderCell>
              <Table.HeaderCell>User Name</Table.HeaderCell>
              <Table.HeaderCell>User Role</Table.HeaderCell>
              <Table.HeaderCell>Action</Table.HeaderCell>
            </Table.Row>
          </Table.Header>

          <Table.Body>
            {this.state.getUserData &&
              this.state.getUserData.length > 0 &&
              this.state.getUserData.map((value, index) => (
                <Table.Row key={index}>
                  <Table.Cell>{index + 1}</Table.Cell>
                  <Table.Cell>{value.firstName}</Table.Cell>
                  <Table.Cell>{value.lastName}</Table.Cell>
                  <Table.Cell>{value.username}</Table.Cell>
                  <Table.Cell>{value.userRole}</Table.Cell>
                  <Table.Cell className="ui two buttons">
                    {/* <Link to="/admin/testimonial/listtestimonial/testimonialedit/${id}"> */}
                    <Button
                      basic
                      color="green"
                      onClick={() => this.onEdit(value._id)}
                    >
                      Edit
                    </Button>
                    {/* </Link> */}

                    <Button
                      basic
                      color="red"
                      onClick={() => this.onDelete(value._id)}
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

// User.propTypes = {
//   dispatch: PropTypes.func.isRequired,
// };

const mapStateToProps = createStructuredSelector({
  user: makeSelectUser(),
  getUserData: makeSelectGetResponse(),
  deleteUserData: makePatchResponse(),
});

const mapDispatchToProps = dispatch => ({
  getUserDataRequest: () => dispatch(getUserDataRequest()),
  patchUserDataRequest: id => dispatch(patchUserDataRequest(id)),
  redirect: path => dispatch(push(path)),
});

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

const withReducer = injectReducer({ key: 'user', reducer });
const withSaga = injectSaga({ key: 'user', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(User);
