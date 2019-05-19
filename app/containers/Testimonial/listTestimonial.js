import React from 'react';
import NavBar from '../../containers/AdminDashboard/navbar';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import makeSelectTestimonial, {makeSelectKiran} from './selectors';
import { Card , Button} from 'semantic-ui-react'
import { fetchTestimonialRequest} from './actions'
class ListTestimonial extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: '5cd70d24208e8c0a284b5db4',
    };
  }

  handleClick = e => {
    this.props.dispatch(deleteRequesting(this.state.id));
  };
  componentDidMount() {
    this.props.fetchTestimonialRequests();
  }

  componentWillReceiveProps(nextProps) {
    console.log(nextProps, "next props")
  }
  render() {
    // const decoded = jwt(localStorage.getItem('token'));
    // console.log(decoded, 'tokenagaldfaldfja;');
    return (
      <div style={{ padding: '30px' }}>
        {/* this.props.fetch.Testimonial.om &&
              this.props.fetch.Testimonial.om.length > 0 &&
            List of Data */}
        <br />
        {/* {this.props.loginForm.fetchResponse.map((element, index) => (
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
            </Card> */}
          {/* </div>
        // ))} */}
        <div />
      </div>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  loginForm: makeSelectTestimonial(),
  Kiran: makeSelectKiran()
});

const maptDipatchToProps = (dispatch) => {
  return {
    fetchTestimonialRequests:  () => dispatch(fetchTestimonialRequest())
  }
}

export default connect(mapStateToProps, maptDipatchToProps)(ListTestimonial);


<Paper className={classes.root}>
      <Table className={classes.table}>
        <TableHead>
          <TableRow>
            <CustomTableCell>Dessert (100g serving)</CustomTableCell>
            <CustomTableCell align="right">Calories</CustomTableCell>
            <CustomTableCell align="right">Fat (g)</CustomTableCell>
            <CustomTableCell align="right">Carbs (g)</CustomTableCell>
            <CustomTableCell align="right">Protein (g)</CustomTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map(row => (
            <TableRow className={classes.row} key={row.id}>
              <CustomTableCell component="th" scope="row">
                {row.name}
              </CustomTableCell>
              <CustomTableCell align="right">{row.calories}</CustomTableCell>
              <CustomTableCell align="right">{row.fat}</CustomTableCell>
              <CustomTableCell align="right">{row.carbs}</CustomTableCell>
              <CustomTableCell align="right">{row.protein}</CustomTableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Paper>