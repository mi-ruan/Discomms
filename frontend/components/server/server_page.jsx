import React from 'react';

class ServerPage extends React.Component {
  constructor(props){
    super(props);
  }

  render() {
    const {server} = this.props;
    return (
      <div>
        <h2>{server}</h2>
      </div>
    )
  }

}

export default ServerPage;
