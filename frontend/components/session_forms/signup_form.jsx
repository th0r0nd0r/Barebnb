import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import Modal from 'react-modal';

class SignupForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
      email: '',
      img_url: '',
      modalIsOpen: false
    };
    this.handleSubmit = this.handleSubmit.bind(this);

    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }

  openModal() {
    this.setState({modalIsOpen: true});
  }

  closeModal() {
    this.setState({modalIsOpen: false});
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = this.state;
    this.props.signup(user);
    this.closeModal();
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
        <button onClick={this.openModal}>Signup</button>
        <Modal
          isOpen={this.state.modalIsOpen}
          onAfterOpen={this.afterOpenModal}
          onRequestClose={this.closeModal}
          contentLabel="Signup Modal"
        >
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
        </Modal>
      </div>
    );
  }
}

export default withRouter(SignupForm);
