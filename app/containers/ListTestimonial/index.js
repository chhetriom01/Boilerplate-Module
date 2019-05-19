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

  handleClick = (id) => {
    console.log("from delete console", id)


  }

  render() {
    return (
      <div>
        <Table celled>
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell>S</Table.HeaderCell>
              <Table.HeaderCell>Name</Table.HeaderCell>
              <Table.HeaderCell>Organization</Table.HeaderCell>
              <Table.HeaderCell>Content</Table.HeaderCell>
              <Table.HeaderCell>Action</Table.HeaderCell>
            </Table.Row>
          </Table.Header>
          <Table.Body>
            {this.state.listTestimonialFromReducer &&
              this.state.listTestimonialFromReducer.length > 0 &&
              this.state.listTestimonialFromReducer.map((element, index) => (
                <Table.Row key={index}>
                  <Table.Cell>{index + 1}</Table.Cell>
                  <Table.Cell>{element.personName}</Table.Cell>
                  <Table.Cell>{element.organization}</Table.Cell>
                  <Table.Cell>{element.testimonialContent}</Table.Cell>
                  <Table.Cell className="ui two buttons">
                    <Button basic color="green">
                      Edit
                    </Button>
                    <Button basic color="red" onClick={this.handleClick(element._id)}>
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
