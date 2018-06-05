import React from 'react';
import {withRouter} from 'react-router-dom';

class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      username: '',
      password: ''
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.addUsername = this.addUsername.bind(this);
  }

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  handleSubmit(e){
    e.preventDefault();
    const user = Object.assign({}, this.state);
    this.props.processForm(user);
  }

  addUsername() {
    if(this.props.formType === "Signup"){
      return (
        <label> USERNAME
          <input type="text" onChange={this.update("username")}
            className="username"
            value={this.state.username} />
        </label>
      )
    };
  }

  header() {
    if(this.props.formType === "SignUp"){
      return (
        <h6 className="session-header">Create an account</h6>
      )
    } else {
      return (
        <div className="session-header-div">
          <h6 className="session-header">Welcome back!</h6>
          <h6 className="session-subheader">
            We're so excited to see you again!
          </h6>
        </div>
      )
    };
  }

  footer() {
    if (this.props.formType === "Signup"){
      return (
        <div className="session-footer-div">
          {this.props.navLink}
        </div>
        );
    } else {
      return (
        <div className="session-footer-div">
          <h6 className="session-footer">Need an account?</h6>
          {this.props.navLink}
        </div>
      )
    }
  }

  renderErrors() {
    return (
      <ul>
        {this.props.errors.map((err, i) => {
          return (
            <li key={`error-${i}`}>
              {err}
            </li>
          )
        })}
      </ul>
    );
  }

  render() {
    return(
      <div className = "session-form">
        <form onSubmit={this.handleSubmit}>
        {this.header()}
        {this.renderErrors()}
        <div className = "form-labels">
          <label>EMAIL
            <input type="text" onChange={this.update("email")}
              className="email"
              value={this.state.email}/>
          </label>
          {this.addUsername()}
          <label>PASSWORD
            <input type="password" onChange={this.update("password")}
              className="password"
              value={this.state.password}/>
          </label>
        </div>
        <input className="session-submit" type="submit" value={this.props.formType} />
        </form>
        {this.footer()}
      </div>
    )
  }
}

export default withRouter(SessionForm);

//build out splash page class
// need a div and a logo
