import React from 'react';
import Modal from 'react-responsive-modal';
import {withRouter} from 'react-router-dom';
import Dropdown, {DropdownTrigger, DropdownContent} from 'react-simple-dropdown';

class ServerSearchPage extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      open: false,
      serverName: '',
      selectedServerId: null,
    }
    this.onOpenModal = this.onOpenModal.bind(this);
    this.onCloseModal = this.onCloseModal.bind(this);
    this.handleKeyPress = this.handleKeyPress.bind(this);
    this.handleDropdown = this.handleDropdown.bind(this);
    this.matches = this.matches.bind(this);
    this.updateName = this.updateName.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }
  onOpenModal() {
    this.setState({open: true});
    this.props.fetchServers();
  }

  onCloseModal() {
    this.setState({open: false});
  }

  matches() {
    const matches= [];
    if (this.state.serverName.length === 0) return matches;
    const servers = this.props.servers;
    servers.forEach( server => {
      if (server.name.toLowerCase().includes(this.state.serverName.toLowerCase())){
        matches.push(server);
      }
    })
    if (matches.length === 0) {matches.push({name: 'No Results'})};
    return matches;
  }

  handleKeyPress(e) {
    if (e.key === "Enter"){
      e.preventDefault();
      const matchers = this.matches();
      if (matchers.length === 0 || matchers[0].name === "No Results"){
        this.setState({serverName: '',
                      selectedServerId: null});
      } else {
        this.setState({serverName: matchers[0].name,
                        selectedServerId: matchers[0].id});
      }
    }
  }

  handleDropdown() {
    let results = this.matches().map((result, key) => {
      if (result.id) {
        return (<li key={key}>{result.name}</li>);
      } else {
        return <li key="result"
        className="search-no-result"
        >{result.name}</li>;
      }
    });
    return (
      <ul>
        {results}
      </ul>
    )
  }

  handleClick(result){
    this.setState({serverName: result.name,
                  selectedServerId: result.id});
  }

  handleSubmit(e) {
    e.preventDefault();
    this.setState({selectedServerId: this.matches()[0].id}, () => {
      if (this.state.selectedServerId == null ||
        this.props.currentUser.serverIds.includes(this.state.selectedServerId)) {
        this.onCloseModal();
      } else {
        this.props.createSubscription(this.state.selectedServerId)
        .then(this.onCloseModal())
        .then(this.props.history.push(`/server/${this.state.selectedServerId}`))
      }
    })
  }

  updateName(e) {
    this.setState({serverName: e.target.value});
  }

  render() {
    return (
      <div>
        <h6 className="server-search"
        onClick={this.onOpenModal}>search here</h6>
        <Modal open={this.state.open} onClose={this.onCloseModal}
        classNames={{modal: "server-search-modal",
                    closeIcon: "create-server-close"}}>
        <form onKeyPress={this.handleKeyPress}>
        <Dropdown className="server-search-dropdown" ref="dropdown">
          <DropdownTrigger className="server-search-trigger">
          <input type="text" className="server-search"
            placeholder="enter server here"
            onChange={this.updateName}
            value = {this.state.serverName} />
          </DropdownTrigger>
            <DropdownContent>
              {this.handleDropdown()}
            </DropdownContent>
            <button onClick={this.handleSubmit} className="join-server">Join Server</button>
        </Dropdown>
        </form>
        </Modal>
      </div>
    )
  }
}

export default withRouter(ServerSearchPage);
