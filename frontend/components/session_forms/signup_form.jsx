import React from 'react';
import { Link, withRouter } from 'react-router-dom';

class SignupForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
      email: '',
      img_url: ''
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = this.state;
    this.props.signup(user);
  }

  navLink() {
      return (
        <div>
          <h5>Already have an account?</h5>
          <Link to="/login">Login</Link>
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
          Signup
          <br/>
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
              />
            </label>
            <label>Profile Image:
              <input type="text" value={this.state.img_url}
                onChange={this.update('img_url')}/>
            </label>
            <br />
            {this.navLink()}
            <input type="submit" value="Sign Up" />
        </div>
        </form>
      </div>
    );
  }
}

export default withRouter(SignupForm);
