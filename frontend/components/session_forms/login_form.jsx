import React from 'react';
import { Link, withRouter } from 'react-router-dom';

class LoginForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      password: '',
      email: ''
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = this.state;
    this.props.login(user);
  }

  navLink() {
      return (
        <div>
          <h5>Don't have an account?</h5>
          <Link to="/signup">Sign Up</Link>
        </div>
      );
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
          Login
          <br/>
          <div>
            <label>Email:
              <input type='text' value={this.state.email}
                onChange={this.update('email')}/>
            </label>
            <br/>
            <label>Password:
              <input type="password"
                value={this.state.password}
                onChange={this.update('password')}
              />
            </label>
            <br />
            {this.navLink()}
            <input type="submit" value="Login" />
        </div>
        </form>
      </div>
    );
  }
}

export default withRouter(LoginForm);
