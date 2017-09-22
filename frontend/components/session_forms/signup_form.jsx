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
  height : 'auto',
  top                        : '200px',
  left : '50%',
  transform: 'translate(-50%, 0)',
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
    this.props.clearErrors();
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = this.state;
    if (user.img_url === '') {
      delete user.img_url;
    }
    this.props.signup(user).then(() => {
      if (this.props.errors.length !== 0) {
        this.closeModal();
      }
    });
  }



  update(field) {
    return event => this.setState({
      [field]: event.currentTarget.value
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
        <button className="session-button" onClick={this.openModal}>Signup</button>
        <Modal
          isOpen={this.state.modalIsOpen}
          onAfterOpen={this.afterOpenModal}
          onRequestClose={this.closeModal}
          style={customStyles}
          contentLabel="Signup Modal"
        >
          <form className="session-form" onSubmit={this.handleSubmit} id="session-form">
            <span className="session-errors">{this.renderErrors()}</span>
            <h1 className="session-title">Welcome to Barebnb!</h1>
            <br/>
            <div className="session-div">
                <input className="input-field" type="text" placeholder="Username" value={this.state.username}
                  onChange={this.update('username')}/>
              <br/>
                <input className="input-field" type='text' placeholder="Email" value={this.state.email}
                  onChange={this.update('email')}/>
              <br/>
                <input className="input-field" placeholder="Password" type="password"
                  value={this.state.password}
                  onChange={this.update('password')}
                />
              <br/>
              <input className="input-field" placeholder="Link to Profile Image (optional)" type="text" value={this.state.img_url}
                  onChange={this.update('img_url')}/>
              <br />
              <input className="session-submit-button" type="submit" value="Sign Up" />
            </div>
          </form>
        </Modal>
      </div>
    );
  }
}

export default withRouter(SignupForm);
