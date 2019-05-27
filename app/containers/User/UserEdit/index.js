/**
 *
 * UserEdit
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
import {
  makeSelectUserEdit,
  makeSelectErrorMessage,
  makeSelectUserDataById,
} from './selectors';
import reducer from './reducer';
import saga from './saga';
import messages from './messages';
import { Button, Form } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import { postUserDataRequest, getUserDataByIdRequest } from './actions';

/* eslint-disable react/prefer-stateless-function */
export class UserEdit extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {
        firstName: 'Manish',
        lastName: 'Chhetri',
        email: 'om@yopmail.com',
        password: 'manish',
        securityQuestion: 'favourite food',
        securityAnswer: 'momo',
        userRole: 'student',
      },
      errorMessage: null,
      getDataById: null,
    };
  }
  componentDidMount() {
    this.props.match.params.id
      ? this.props.getUserDataByIdRequest(this.props.match.params.id)
      : false;
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.getDataById !== this.props.getDataById) {
      // console.log('from next props', nextProps.getDataById.toJS());
      const {
        firstName,
        lastName,
        email,
        userRole,
      } = nextProps.getDataById.toJS();
      this.setState({
        data: {
          firstName: firstName,
          lastName: lastName,
          email: email,
          userRole: userRole,
        },
      });
    }
    if (nextProps.errorMessage !== this.props.errorMessage) {
      let errorMessage = nextProps.errorMessage;
      alert(errorMessage);
      this.setState(
        {
          errorMessage,
        },
        () => {
          setTimeout(() => this.setState({ errorMessage: null }), 3000);
        },
      );
    }
  }

  onInputChange = e => {
    const data = this.state.data;
    const field = e.target.name;
    data[field] = event.target.value;
    return this.setState({
      data: data,
    });
  };

  handleSubmit = event => {
    event.preventDefault();
    this.props.postUserDataRequest(this.state.data);
  };

  resetvalue = () => {
    this.setState({
      data: {
        firstName: '',
        lastName: ' ',
        email: '',
        password: '',
        securityQuestion: '',
        securityAnswer: '',
        userRole: '',
      },
    });
  };

  render() {
    const id = this.props.match.params.id;

    return (
      <div>
        <Form onSubmit={this.handleSubmit}>
          <Form.Group>
            <Form.Input
              label="First Name"
              placeholder="Enter FirstName"
              name="firstName"
              value={this.state.data.firstName}
              onChange={this.onInputChange}
              required
            />
          </Form.Group>
          <Form.Group>
            <Form.Input
              label="Last Name"
              placeholder="LastName"
              name="lastName"
              value={this.state.data.lastName}
              onChange={this.onInputChange}
              required
            />
          </Form.Group>
            <Form.Group>
            <Form.Input
              label="User Role"
              placeholder="Enter the User Role"
              name="userRole"
              value={this.state.data.userRole}
              onChange={this.onInputChange}
              required
            />
          </Form.Group>
          <Form.Group>
            <Form.Input
              label="Email"
              placeholder="Enter the Email"
              name="email"
              value={this.state.data.email}
              onChange={this.onInputChange}
              required
            />
          </Form.Group>
          <Form.Group>
            {!id ? (
              <Form.Input
                label="Password"
                type="password"
                placeholder="Enter the password"
                name="password"
                value={this.state.data.password}
                onChange={this.onInputChange}
                required
              />
            ) : (
              false
            )}
          </Form.Group>
          <Form.Group>
            {!id ? (
              <Form.Input
                label="Security Question"
                placeholder="Security Question"
                name="securityQuestion"
                value={this.state.data.securityQuestion}
                onChange={this.onInputChange}
                required
              />
            ) : (
              false
            )}
          </Form.Group>
          <Form.Group>
            {!id ? (
              <Form.Input
                label="Secuirty Answer"
                placeholder="enter Security answer"
                name="securityAnswer"
                value={this.state.data.securityAnswer}
                onChange={this.onInputChange}
                required
              />
            ) : (
              false
            )}
          </Form.Group>
          <Button type="Submit">Submit</Button>
          <Link to="/admin/user">
            <Button onClick={this.resetvalue}>Cancel</Button>
          </Link>
        </Form>
        {this.state.errorMessage && this.state.errorMessage}
      </div>
    );
  }
}

// UserEdit.propTypes = {
//   dispatch: PropTypes.func.isRequired,
// };

const mapStateToProps = createStructuredSelector({
  userEdit: makeSelectUserEdit(),
  errorMessage: makeSelectErrorMessage(),
  getDataById: makeSelectUserDataById(),
});

const mapDispatchToProps = dispatch => ({
  postUserDataRequest: data => dispatch(postUserDataRequest(data)),
  getUserDataByIdRequest: id => dispatch(getUserDataByIdRequest(id)),
});

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

const withReducer = injectReducer({ key: 'userEdit', reducer });
const withSaga = injectSaga({ key: 'userEdit', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(UserEdit);
