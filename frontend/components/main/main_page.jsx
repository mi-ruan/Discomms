import React from 'react';
import ServerContainer from '../server/server_container';
import ServerSearchContainer from '../server_search/server_search_container';
import Modal from 'react-responsive-modal';
import {Route, Link, withRouter, Redirect} from 'react-router-dom';

class MainPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
      name: ''
    }
    this.handleSubmit = this.handleSubmit.bind(this);
    this.onOpenModal = this.onOpenModal.bind(this);
    this.onCloseModal = this.onCloseModal.bind(this);
  }

  componentDidMount() {
    this.props.fetchServers();
  }

  onOpenModal() {
    this.setState({ open: true });
  };

  onCloseModal() {
    this.setState({ open: false });
  };

  handleSubmit(e){
    e.preventDefault();
    const createServer = {
      name: this.state.name, ownerId: this.props.userId
    };
    this.props.createServer(createServer)
    .then(this.onCloseModal())
    .then(() => this.props.history.push('/'))
  }

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  render() {
    const { open } = this.state;
    const userServers = this.props.servers;
    const serversMap = userServers.map(server => {
      return (
        <div key={server.id} className="server-list">
          <Link to={`/server/${server.id}`}
          className="server-list-name">
          {server.name}
          </Link>
        </div>
      )
    });
    return (
      <div className="mainview">
        <nav className="navbar">
          <h6 className="main-name">{`Hello ${this.props.currentUser.username}`}</h6>
          <nav className="servercontrol">
            <button className="create-server" onClick={this.onOpenModal}>Create Server</button>
            <button className="logout-button"
            onClick={() => this.props.logout()}>Log Out</button>
          </nav>
          <Modal open={open} onClose={this.onCloseModal} center
          classNames={{modal: "create-server-modal",
                      closeIcon: "create-server-close"}}>
            <form onSubmit={this.handleSubmit}>
            <div className ="form-labels">
              <label>
                <input type="text" onChange={this.update("name")}
                  className="server-name"
                  value={this.state.name}/>
              </label>
            </div>
            <input className="server-modi" type="submit" value="Create Server" />
            </form>
          </Modal>
          <ServerSearchContainer />
          <ul>
            {serversMap}
          </ul>
        </nav>
        <main className="server-display">
          <Route path={`/server/:serverId`}
          component={ServerContainer} />
        </main>
      </div>
    )
  }
}

export default withRouter(MainPage);
