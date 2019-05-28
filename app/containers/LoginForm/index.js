/**
 *
 * LoginForm
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { FormattedMessage } from 'react-intl';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';
import { push } from 'connected-react-router';
import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';
import makeSelectLoginForm, {
  makeSelectUserRole,
  makeSelectErrorMessage,
} from './selectors';
import reducer from './reducer';
import saga from './saga';
import messages from './messages';
import { submitLoginInfoRequest } from './actions';
import { Link } from 'react-router-dom';
import { Route, Redirect } from 'react-router';

import {
  Button,
  Form,
  Grid,
  Header,
  Image,
  Message,
  Segment,
} from 'semantic-ui-react';

/* eslint-disable react/prefer-stateless-function */
export class LoginForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      errors: '',
      errorMessage: null,
      loginData: {},
      userRole: null,
      credentials: {
        username: 'superadmin',
        password: 'superadmin@123',
      },
    };
  }

  componentWillReceiveProps(nextProps) {
    // console.log(nextProps.userRole,"Message from login form next props");
    if (nextProps.userRole !== this.props.userRole) {
      const role = nextProps.userRole;      
      role === 'superadmin'
        ? this.props.redirect('/admin')
        : this.props.redirect('/user');
    }
    if (nextProps.errorMessage !== this.props.errorMessage) {
      let errorMessage = nextProps.errorMessage;
      alert(nextProps.errorMessage);
    }
  }

  validate = () => {
    const { credentials } = this.state;
    let errors = {};
    if (!credentials.username) errors.username = "Can't be blank";
    if (!credentials.password) errors.password = "Can't be blank";
    return errors;
  };

  handleSubmit = e => {
    e.preventDefault();
    let errors = this.validate();
    // console.log(errors);
    this.setState({
      errors,
    });
    if (Object.keys(errors).length < 1) {
      this.props.submitLoginInfoRequest(this.state.credentials);
    }

    // this.props.dispatch(submitLoginInfoRequest(this.state.credentials));
  };
  onInputChange = e => {
    const { credentials, errors } = this.state;
    if (errors[e.target.name]) delete errors[e.target.name];
    const field = event.target.name;
    credentials[field] = event.target.value;
    return this.setState({ credentials: credentials });
  };

  resetvalue = () => {
    this.setState({
      credentials: {
        username: '',
        password: '',
      },
    });
  };
  render() {
    const { loginData, errors } = this.state;
    // console.log(loginData, '');
    return (
      <div className="login-form">
        <Grid
          textAlign="center"
          style={{ height: '100%' }}
          verticalAlign="middle"
        >
          <Grid.Column style={{ maxWidth: 450 }}>
            <Header as="h2" color="teal" textAlign="center">
              Log-in to your account
            </Header>

            <Form size="large" onSubmit={this.handleSubmit}>
              <Segment stacked>
                <Form.Input
                  fluid
                  icon="user"
                  iconPosition="left"
                  type="text"
                  name="username"
                  value={this.state.credentials.username}
                  onChange={this.onInputChange}
                  placeholder="Enter the username"
                />
                <span>{errors.username && errors.username}</span>
                <Form.Input
                  fluid
                  icon="lock"
                  iconPosition="left"
                  type="password"
                  name="password"
                  value={this.state.credentials.password}
                  onChange={this.onInputChange}
                  placeholder="Enter the password"
                />
                <span>{errors.password && errors.password}</span>
                <Button color="teal" fluid size="large">
                  Login
                </Button>
                <br />
                <Button
                  color="green"
                  fluid
                  size="large" 
                  onClick={this.resetvalue}
                >
                  Reset
                </Button>
              </Segment>
            </Form>

            <Message>
              New to us? <a href="#">Sign Up</a>
            </Message>
          </Grid.Column>
        </Grid>
      </div>
    );
  }
}

// LoginForm.propTypes = {
//   dispatch: PropTypes.func.isRequired,
// };

const mapStateToProps = createStructuredSelector({
  loginForm: makeSelectLoginForm(),
  userRole: makeSelectUserRole(),
  errorMessage: makeSelectErrorMessage(),
});

// function mapDispatchToProps(dispatch) {
//   return {
//     dispatch,
//   };
// }

const mapDispatchToProps = dispatch => ({
  submitLoginInfoRequest: data => dispatch(submitLoginInfoRequest(data)),
  redirect: path => dispatch(push(path)),
});

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

const withReducer = injectReducer({ key: 'loginForm', reducer });
const withSaga = injectSaga({ key: 'loginForm', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(LoginForm);
