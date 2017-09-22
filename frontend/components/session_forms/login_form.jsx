import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import Modal from 'react-modal';

const customStyles = {
overlay : {
  position          : 'fixed',
  display: 'flex',
  top               : 0,
  left              : 0,
  right             : 0,
  bottom            : 0,
  backgroundColor   : 'rgba(255, 255, 255, 0.75)'
},
content : {

  position                   : 'absolute',
  width                      : '450px',
  height                     : 'auto',
  top                        : '200px',
  left                       : '50%',
  transform                  : 'translate(-50%, 0)',
  bottom                     : '200px',
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
      modalIsOpen: false,
      demoUsers: [
      {
        email: 'boldlygo@enterprise.org',
        password: 'captainslog',
      },
      {
        email: 'captain@hotmail.com',
        password: 'whynorum',
    }]};

    this.openModal = this.openModal.bind(this);
    // this.afterOpenModal = this.afterOpenModal.bind(this);
    this.closeModal = this.closeModal.bind(this);

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  openModal() {
    this.setState({modalIsOpen: true});
  }

  // afterOpenModal() {
  //   this.subtitle.style.color = '#f00';
  // }

  closeModal() {
    this.setState({modalIsOpen: false});
    this.props.clearErrors();
  }

  // componentWillUnmount() {
  //
  // }


  handleSubmit(e) {
    e.preventDefault();
    const user = this.state;
    this.props.login(user).then(() => {
      if (this.props.errors.length === 0) {
      this.closeModal();
    }
    });
  }


  update(field) {
    return event => this.setState({
      [field]: event.currentTarget.value
    });
  }

  handleClick(e) {
    e.preventDefault();
    const user =
    this.state.demoUsers[Math.floor(Math.random() * this.state.demoUsers.length)];
    this.props.login(user).then(() => {
      if (this.props.errors.length === 0) {
      this.closeModal();
    }
    });
  }

  renderErrors() {
    return(
      <ul>
        {this.props.errors.map((error, i) => (
          <li key={`error-${i}`}>
            {error}
          </li>
        ))}
      </ul>
    );
  }

  render() {
    return (
      <div className="modal-form">
        <button onClick={this.openModal} className="session-button">Login</button>
        <Modal
          isOpen={this.state.modalIsOpen}
          onAfterOpen={this.afterOpenModal}
          onRequestClose={this.closeModal}
          style={customStyles}
          contentLabel="Login Modal"
        >

          <form className="session-form" onSubmit={this.handleSubmit} id="session-form">
            <span className="session-errors">{this.renderErrors()}</span>
            <h1 className="session-title">Login</h1>
            <br/>
            <div className="session-div">
                <input className="input-field" type='text' placeholder='Email'
                  onChange={this.update('email')}/>
              <br/>
                <input className="input-field" type="password" placeholder="Password" id="password" type="password"
                  value={this.state.password}
                  onChange={this.update('password')}
                />
              <br />
              <input className="session-submit-button" type="submit" value="Login" />
              <button className="session-submit-button"
                onClick={this.handleClick}
                 >Demo Login</button>
            </div>
          </form>
        </Modal>
      </div>
    );
  }
}

export default withRouter(LoginForm);
