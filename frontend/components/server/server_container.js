import {connect} from 'react-redux';
import ServerPage from './server_page';
import {fetchServer, updateServer, deleteServer} from '../../actions/server_actions';
import {deleteSubscription} from '../../actions/subscription_actions';

const mapStateToProps = (state, ownProps) => {
  return {
    servers: Object.values(state.entities.servers),
    subscribers: Object.values(state.entities.users),
    currentUser: state.entities.users[state.session.id],
    server: state.entities.servers[parseInt(ownProps.match.params.serverId)]
  }
}
const mapDispatchToProps = dispatch => {
  return {
    fetchServer: id => dispatch(fetchServer(id)),
    updateServer: server => dispatch(updateServer(server)),
    deleteServer: id => dispatch(deleteServer(id)),
    deleteSubscription: (serverId, userId) => dispatch(deleteSubscription(serverId, userId))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ServerPage);
