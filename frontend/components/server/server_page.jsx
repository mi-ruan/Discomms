import React from 'react';

class ServerPage extends React.Component {
  constructor(props){
    super(props);
  }

  componentDidMount() {
    const {fetchServer, props} = this.props;
    fetchServer(props);
  }

  render() {
    const {server} = this.props;
    return (
      <div>
        <h2>{server.name}</h2>
      </div>
    )
  }

}

export default ServerPage;
