import Switch from 'react-router-dom/Switch';
import Route from 'react-router-dom/Route';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { makeSelectLocation } from 'containers/App/selectors';
// import Testimonial from 'containers/Testimonial';
import Testimonial from '../../Testimonial';

function AdminRoutes({ location }) {
  return (
    <Switch>
      <Route exact path="/admin" component={AdminDashboard} />
      <Route path="/admin/testimonial" component={Testimonial} />
    </Switch>
  );
}

const mapStateToProps = createStructuredSelector({
  location: makeSelectLocation(),
});

export default connect(mapStateToProps)(AdminRoutes);
