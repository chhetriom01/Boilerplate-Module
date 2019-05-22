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
import { Button, Form, Grid, Header, Segment } from 'semantic-ui-react';

import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';
import makeSelectUser from './selectors';
import reducer from './reducer';
import saga from './saga';
import messages from './messages';

/* eslint-disable react/prefer-stateless-function */
export class User extends React.Component {
  render() {
    return (
      <div>

<div className="login-form">
          <Grid
            textAlign="center"
            style={{ height: '100%' }}
            verticalAlign="middle"
          >
            <Grid.Column style={{ maxWidth: 450 }}>
              <Header as="h2" color="teal" textAlign="center">
                Add Testimonial
              </Header>
              <Form size="large" onSubmit={this.handleSubmit}>
                <Segment stacked>
                  <Form.Input
                    fluid
                    required
                    type="text"
                    name="personName"
                    placeholder="Name"
                    onChange={this.handleChange}
                    // value={this.state.data.personName}
                  />
                  <Form.TextArea
                    required
                    placeholder="Testimonial Content"
                    type="text"
                    name="testimonialContent"
                    onChange={this.handleChange}
                    // value={this.state.data.testimonialContent}
                  />
                  <Form.Input
                    fluid
                    required
                    placeholder="Organization"
                    type="text"
                    name="organization"
                    onChange={this.handleChange}
                    // value={this.state.data.organization}
                  />
                  <Button
                    color="teal"
                    fluid
                    size="large"
                    onSubmit={this.handleSubmit}
                  >
                    Post
                  </Button>
                </Segment>
              </Form>
            </Grid.Column>
          </Grid>
        </div>
              <FormattedMessage {...messages.header} />
      </div>
    );
  }
}

User.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  user: makeSelectUser(),
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

const withReducer = injectReducer({ key: 'user', reducer });
const withSaga = injectSaga({ key: 'user', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(User);
