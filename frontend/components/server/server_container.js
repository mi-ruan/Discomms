import {connect} from 'react-redux';
import ServerPage from './server_page';
import {fetchServer, updateServer, deleteServer} from '../../actions/server_actions';

const mapStateToProps = (state, ownProps) => {
  return {
    servers: state.entities.servers,
    server: state.entities.servers[ownProps.props] || {name: ""}
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
