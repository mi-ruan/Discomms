import React from 'react';
import Modal from 'react-responsive-modal';

class MainPage extends React.Component {
  constructor(props) {
    super(props);
    state = {
      open: false
    }
  }

  onOpenModal() {
    this.setState({ open: true });
  };

  onCloseModal() {
    this.setState({ open: false });
  };

  render() {
    return (
      <div>
        <h6>Hello Body</h6>
        <button onClick={this.onOpenModal}>Create Server</button>
        <Modal open={open} onClose={this.onCloseModal} center>
          <h2>Simple centered modal</h2>
        </Modal>
        <button className="logout-button"
        onClick={() => this.props.logout()}>Log Out</button>
      </div>
    )
  }
}

export default MainPage;
