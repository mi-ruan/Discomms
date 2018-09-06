import React from 'react';
import Modal from 'react-responsive-modal';
import {withRouter} from 'react-router-dom';
class ServerPage extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      open: false,
      name: '',
    }
    this.onOpenModal = this.onOpenModal.bind(this);
    this.onCloseModal = this.onCloseModal.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.removeServer = this.removeServer.bind(this);
    this.editDeleteServer = this.editDeleteServer.bind(this);
  }

  componentDidMount() {
    if (this.props.server.name !== "") {
      this.props.fetchServer(this.props.server.id)};
  }

  handleSubmit(e){
    e.preventDefault();
    const server = this.props.server;
    server.name = this.state.name;
    this.props.updateServer(server)
    .then(this.state.name = '')
    .then(this.onCloseModal());
  }

  onOpenModal() {
    this.setState({ open: true });
  };

  onCloseModal() {
    this.setState({ open: false });
  };

  editDeleteServer() {
    if (this.props.server.owner_id === this.props.currentUser.id) {
      return (
        <div className="edit-delete-buttons">
          <button className="edit-server"
          onClick={this.onOpenModal}>Edit Server</button>
          <button className="delete-server"
          onClick={this.removeServer}>
          Delete Server</button>
          <Modal open={this.state.open} onClose={this.onCloseModal} center
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
            <input className="server-modi" type="submit" value="Edit Server" />
            </form>
          </Modal>
        </div>
    )}
  }

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  removeServer() {
    this.props.deleteServer(this.props.server.id)
    .then(() => this.props.history.push('/'))
  }

  render() {
    const {server} = this.props;
    const subscribers = Object.values(this.props.subscribers);
    const subscriberList = subscribers.map((subs) => {
      return (<li key={subs.id} className="sub-list">{subs.username}</li>);
    })
    return (
      <div className="server-page">
        <main className="server-page-main">
          <h2 className="server-page-title">{server.name}</h2>
          {this.editDeleteServer()}
        </main>
        <nav className="server-page-subs">
          <h2 className="server-page-sub-title">Subscribers</h2>
          {subscriberList}
        </nav>
      </div>
    )
  }
}

export default withRouter(ServerPage);
