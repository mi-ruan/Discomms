import {connect} from 'react-redux';
import ServerSearchPage from './server_search_page';

const mapStateToProps = state => {
  return {
    servers: Object.values(state.entities.servers),
    currentUser: state.entities.users[state.session.id]
  }
}

const mapDispatchToProps = dispatch => {

}

export default connect(mapStateToProps, null)(ServerSearchPage);
