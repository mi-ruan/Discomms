import React from 'react';
import Modal from 'react-responsive-modal';

class ServerSearchPage extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      open: false
    }
    this.onOpenModal = this.onOpenModal.bind(this);
    this.onCloseModal = this.onCloseModal.bind(this);
    // this.handleSubmit = this.handleSubmit.bind(this);
  }
  onOpenModal() {
    this.setState({open: true});
  }

  onCloseModal() {
    this.setState({open: false});
  }

  render() {
    return (
      <div>
        <input className="server-search"
        placeholder="search here"
        onClick={this.onOpenModal}></input>
        <Modal open={this.state.open} onClose={this.onCloseModal}
        classNames={{modal: "server-search-modal",
                    closeIcon: "create-server-close"}}>
        </Modal>
      </div>                          
    )
  }
}

export default ServerSearchPage;
