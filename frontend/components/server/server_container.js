import {connect} from 'react-redux';
import ServerPage from './server_page';
import {fetchServer} from '../../actions/server_actions';

const mapStateToProps = (state, ownProps) => {
  return {
    server: state.entities.servers[ownProps.props] || {name: ""}
  }
}

export default connect(mapStateToProps, null)(ServerPage);
