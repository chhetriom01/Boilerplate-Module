import React from 'react';
import { Menu, Segment } from 'semantic-ui-react';
import { push } from 'connected-react-router';
import { connect } from 'react-redux';
import { Redirect, Link } from 'react-router-dom';


class NavBar extends React.Component {
  state = { activeItem: '' };
  handleLogout = () => {
    localStorage.removeItem('token');
    this.props.dispatch(push('/'));
  };
  render() {
    const { activeItem } = this.state;
    return (
      <div>
        <Menu pointing secondary>
          <Menu.Item
            as={Link}
            to="/admin"
            name="home"
            active={activeItem === 'home'}
          />
          <Menu.Item
            as={Link}
            to="/admin/testimonial"
            name="home"
            name="Testimonial"
            active={activeItem === 'Testimonial'}
          />
          <Menu.Item
            as={Link}
            to="/admin/profile"
            name="Profile"
            active={activeItem === 'profile'}
          />
          <Menu.Menu position="right">
            <Menu.Item
              name="logout"
              active={activeItem === 'logout'}
              onClick={this.handleLogout}
            />
          </Menu.Menu>
        </Menu>
      </div>
    );
  }
}

// function mapStateToProps(state){
//   return{
//     weather: state.weather
//   }
// }

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}
export default connect(mapDispatchToProps)(NavBar);
