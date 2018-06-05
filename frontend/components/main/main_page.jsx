import React from 'react';

class MainPage extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <h6>Hello Body</h6>
        <button className="logout-button"
        onClick={() => this.props.logout()}>Log Out</button>
      </div>
    )
  }
}

export default MainPage;
