import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import Modal from 'react-modal';

class LoginForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      password: '',
      email: '',
      modalIsOpen: false
    };

    this.openModal = this.openModal.bind(this);
    // this.afterOpenModal = this.afterOpenModal.bind(this);
    this.closeModal = this.closeModal.bind(this);

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  openModal() {
    this.setState({modalIsOpen: true});
  }

  // afterOpenModal() {
  //   this.subtitle.style.color = '#f00';
  // }

  closeModal() {
    this.setState({modalIsOpen: false});
  }


  handleSubmit(e) {
    e.preventDefault();
    const user = this.state;
    this.props.login(user);
    this.closeModal();
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
        <button onClick={this.openModal}>Login</button>
        <Modal
          isOpen={this.state.modalIsOpen}
          onAfterOpen={this.afterOpenModal}
          onRequestClose={this.closeModal}
          contentLabel="Login Modal"
        >

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
        </Modal>
      </div>
    );
  }
}

export default withRouter(LoginForm);
