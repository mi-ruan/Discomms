import {connect} from 'react-redux';
import ServerSearchPage from './server_search_page';
import {fetchAllServers} from '../../actions/server_actions';
import {createSubscription} from '../../actions/subscription_actions';

const mapStateToProps = state => {
  return {
    servers: Object.values(state.entities.servers),
    currentUser: state.entities.users[state.session.id]
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchServers: () => dispatch(fetchAllServers()),
    createSubscription: serverId => dispatch(createSubscription(serverId))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ServerSearchPage);
