import {connect} from 'react-redux';
import ServerPage from './server_page';

const mapStateToProps = (state, ownProps) => {
  return {
    server: state.entities.servers[ownProps] || null
  }
}

export default connect(mapStateToProps, null)(ServerPage);
