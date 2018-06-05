import {connect} from 'react-redux';
import MainPage from './main_page';
import {logout} from '../../actions/session_actions';

const mapDispatchToProps = dispatch => {
  return {
    logout: (() => dispatch(logout()))
  }
}

export default connect(null, mapDispatchToProps)(MainPage);
