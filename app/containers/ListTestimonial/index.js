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
import makeSelectListTestimonial, {
  makeSelectTestimonial,
  makePatchTestimonial,
} from './selectors';
import reducer from './reducer';
import saga from './saga';
import messages from './messages';
import { fetchTestimonialRequest, patchTestimonialRequest } from './actions';
import { Link } from 'react-router-dom';
import { push } from 'connected-react-router';
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
      deletepatchTestimonial: null,
    };
  }

  componentDidMount() {
    this.props.fetchTestimonialRequest();
  }

  componentWillReceiveProps(nextProps) {
    if (
      nextProps.listTestimonialFromReducer !==
      this.props.listTestimonialFromReducer
    ) {
      this.setState({
        listTestimonialFromReducer: nextProps.listTestimonialFromReducer.toJS(),
      });
    }
    if (
      nextProps.deletepatchTestimonial !== '' &&
      nextProps.deletepatchTestimonial !== this.props.deletepatchTestimonial
    ) {
      this.props.fetchTestimonialRequest();
    }
  }

  onDelete = id => {
    this.props.patchTestimonialRequest(id);
  };

  onEdit = id => {
    this.props.redirect(
      `/admin/testimonial/listtestimonial/testimonialedit/${id}`,
    );
  };

  render() {
    return (
      <div>
        <Table celled>
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell>S.N</Table.HeaderCell>
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
                    {/* <Link to="/admin/testimonial/listtestimonial/testimonialedit/${id}"> */}
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

// ListTestimonial.propTypes = {
//   dispatch: PropTypes.func.isRequired,
// };

const mapStateToProps = createStructuredSelector({
  listTestimonial: makeSelectListTestimonial(),
  listTestimonialFromReducer: makeSelectTestimonial(),
  deletepatchTestimonial: makePatchTestimonial(),
});

const mapDispatchToProps = dispatch => ({
  fetchTestimonialRequest: () => dispatch(fetchTestimonialRequest()),
  patchTestimonialRequest: id => dispatch(patchTestimonialRequest(id)),
  redirect: path => dispatch(push(path)),
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
