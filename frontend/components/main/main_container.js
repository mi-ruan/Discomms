import {connect} from 'react-redux';
import MainPage from './main_page';
import {logout} from '../../actions/session_actions';
import {createServer} from '../../actions/server_actions';

const mapStateToProps = state => {
  return {
    userId: state.session.id,
    currentUser: state.entities.users[state.session.id],
    servers: state.entities.servers,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    createServer: (server) => dispatch(createServer(server)),
    logout: (() => dispatch(logout()))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(MainPage);
