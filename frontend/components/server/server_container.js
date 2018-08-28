import {connect} from 'react-redux';
import ServerPage from './server_page';
import {fetchServer} from '../../actions/server_actions';

const mapStateToProps = (state, ownProps) => {
  debugger
  return {
    server: state.entities.servers[ownProps.props] || {name: ""}
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchServer: id => dispatch(fetchServer(id))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ServerPage);
