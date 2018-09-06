import {connect} from 'react-redux';
import ServerPage from './server_page';
import {fetchServer, updateServer, deleteServer} from '../../actions/server_actions';

const mapStateToProps = (state, ownProps) => {
  return {
    servers: Object.values(state.entities.servers),
    subscribers: Object.values(state.entities.users),
    currentUser: state.entities.users[state.session.id],
    server: state.entities.servers[parseInt(ownProps.match.params.serverId)]
    || {name: "", subscriberIds: []}
  }
}
const mapDispatchToProps = dispatch => {
  return {
    fetchServer: id => dispatch(fetchServer(id)),
    updateServer: server => dispatch(updateServer(server)),
    deleteServer: id => dispatch(deleteServer(id))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ServerPage);
