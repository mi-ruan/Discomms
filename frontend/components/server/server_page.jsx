import React from 'react';

const ServerPage extends React.Component {
  constructor(props){
    super(props);
  }

  render() {
    const {server} = this.props
    return (
      <div>
        <h2>{server.name}</h2>
      </div>
    )
  }

}

export default ServerPage;
