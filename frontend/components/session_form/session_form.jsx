import React from 'react';
import { Link, withRouter } from 'react-router-dom';

class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
      email: ''
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = this.state;
    this.props.processForm(user);
  }

  navLink() {
    if (this.props.formType === 'login') {
      return <Link to="/signup">sign up instead</Link>;
    } else {
      return <Link to="/login">log in instead</Link>;
    }
  }

  message() {
    if (this.props.formType === 'login') {
      return <h3 className="login-message">Hey there you can login with either your email or password</h3>;
    } else {
      return <h3 className="signup-message">Gimme that sweet info</h3>;
    }
  }

  update(field) {
    return event => this.setState({
      [field]: event.currentTarget.value
    });
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit} id="session-form">
          Yo we got vans on vans out here come on check it out
          <br/>
          How about you {this.props.formType} or {this.navLink()}
          {this.message()}
          <div>
            <label>Username:
              <input type="text" value={this.state.username}
                onChange={this.update('username')}/>
            </label>
            <label>Email:
              <input type='text' value={this.state.email}
                onChange={this.update('email')}/>
            </label>
            <br/>
            <label>Password:
              <input type="password"
                value={this.state.password}
                onChange={this.update('password')}
                className="login-input"
              />
            </label>
            <br />
            <input type="submit" value="Submit" />
        </div>
        </form>
      </div>
    );
  }
}

export default withRouter(SessionForm);
