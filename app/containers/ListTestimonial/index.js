/**
 *
 * ListTestimonial
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
import makeSelectListTestimonial, { makeSelectTestimonial } from './selectors';
import reducer from './reducer';
import saga from './saga';
import messages from './messages';
import { fetchTestimonialRequest } from './actions';
import {
  Card,
  Button,
  Icon,
  Label,
  Menu,
  Table,
  TableRow,
} from 'semantic-ui-react';

/* eslint-disable react/prefer-stateless-function */
export class ListTestimonial extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      listTestimonialFromReducer: null,
    };
  }

  componentDidMount() {
    this.props.fetchTestimonialRequest();
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      listTestimonialFromReducer: nextProps.listTestimonialFromReducer.toJS(),
    });
  }

  render() {
    return (
      <div>
        {this.state.listTestimonialFromReducer &&
          this.state.listTestimonialFromReducer.length > 0 &&
          this.state.listTestimonialFromReducer.map((element, index) => (
            <div key={index}>
              <Table celled>
                <Table.Header>
                  <Table.Row>
                    <Table.HeaderCell>Name</Table.HeaderCell>
                    <Table.HeaderCell>Status</Table.HeaderCell>
                    <Table.HeaderCell>Notes</Table.HeaderCell>
                  </Table.Row>
                </Table.Header>

                <Table.Body>
                  <Table.Row>
                    <Table.Cell>No Name Specified</Table.Cell>
                    <Table.Cell>Approved</Table.Cell>
                    <Table.Cell>None</Table.Cell>
                  </Table.Row>
                </Table.Body>
              </Table>
            </div>
          ))}
        {this.state.listTestimonialFromReducer &&
          this.state.listTestimonialFromReducer.length > 0 &&
          this.state.listTestimonialFromReducer.map((element, index) => (
            <div key={index} className="Card">
              <Card>
                <Card.Content>
                  <Card.Header>{element.personName}</Card.Header>
                  <Card.Meta>{element.testimonialContent}</Card.Meta>
                  <Card.Meta>{element.organization}</Card.Meta>
                  <Card.Description>{element._id}</Card.Description>
                </Card.Content>
                <Card.Content extra>
                  <div className="ui two buttons">
                    <Button basic color="green">
                      Edit
                    </Button>
                    <Button basic color="red" onClick={this.handleClick}>
                      Delete
                    </Button>
                  </div>
                </Card.Content>
              </Card>
            </div>
          ))}
      </div>
    );
  }
}

// ListTestimonial.propTypes = {
//   dispatch: PropTypes.func.isRequired,
// };

const mapStateToProps = createStructuredSelector({
  listTestimonial: makeSelectListTestimonial(),
  listTestimonialFromReducer: makeSelectTestimonial(),
});

const mapDispatchToProps = dispatch => ({
  fetchTestimonialRequest: () => dispatch(fetchTestimonialRequest()),
});

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

const withReducer = injectReducer({ key: 'listTestimonial', reducer });
const withSaga = injectSaga({ key: 'listTestimonial', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(ListTestimonial);
