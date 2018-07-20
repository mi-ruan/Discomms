import React from 'react';
import ServerContainer from '../server/server_container';
import Modal from 'react-responsive-modal';

class MainPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
      name: '',
      server: this.props.servers[0].id;
    }
    this.handleSubmit = this.handleSubmit.bind(this);
    this.onOpenModal = this.onOpenModal.bind(this);
    this.onCloseModal = this.onCloseModal.bind(this);
    this.changeServer = this.changeServer.bind(this);
  }

  componentDidMount() {
    this.props.fetchServers();
  }

  changeServer(e) {
    this.setState({server: e});
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
    .then(() => this.props.fetchServers())
    .then(this.onCloseModal());
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
          <button onClick={this.changeServer(server.id)}
          className="server-list-name">
          {server.name}
          </button>
        </div>
      )
    });
    return (
      <div>
        <nav className="navbar">
          <h6>{`Hello ${this.props.currentUser.username}`}</h6>
          <button onClick={this.onOpenModal}>Create Server</button>
          <Modal open={open} onClose={this.onCloseModal} center
          className="create-server-modal">
            <form onSubmit={this.handleSubmit}>
            <div className ="form-labels">
              <label>
                <input type="text" onChange={this.update("name")}
                  className="server-name"
                  value={this.state.name}/>
              </label>
            </div>
            <input className="server-create" type="submit" value="Create Server" />
            </form>
          </Modal>
          <button className="logout-button"
          onClick={() => this.props.logout()}>Log Out</button>
          <ul>
            {serversMap}
          </ul>
        </nav>
        <main className="server-display">
          <ServerContainer props={this.state.server} />
        </main>
      </div>
    )
  }
}

export default MainPage;
