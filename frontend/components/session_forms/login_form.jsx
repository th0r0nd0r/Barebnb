import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import Modal from 'react-modal';

const customStyles = {
overlay : {
  position          : 'fixed',
  top               : 0,
  left              : 0,
  right             : 0,
  bottom            : 0,
  backgroundColor   : 'rgba(255, 255, 255, 0.75)'
},
content : {
  position                   : 'absolute',
  top                        : '40px',
  left                       : '40px',
  right                      : '40px',
  bottom                     : '40px',
  border                     : '1px solid #ccc',
  background                 : '#fff',
  overflow                   : 'auto',
  WebkitOverflowScrolling    : 'touch',
  borderRadius               : '4px',
  outline                    : 'none',
  padding                    : '20px'

}
};

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

  // navLink() {
  //     return (
  //       <div>
  //         <h5>Don't have an account?</h5>
  //         <Link to="/signup">Sign Up</Link>
  //       </div>
  //     );
  // }

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
          style={customStyles}
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
              <input type="submit" value="Login" />
            </div>
          </form>
        </Modal>
      </div>
    );
  }
}

export default withRouter(LoginForm);
