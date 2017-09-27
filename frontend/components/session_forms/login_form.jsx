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
  minHeight                  : '350px',
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
          username: 'Captain Kirk',
          email: 'boldlygo@enterprise.org',
          password: 'captainslog',
          img_url: 'http://pixel.nymag.com/imgs/daily/vulture/2015/07/26/26-Kirk.w529.h529.jpg'
        },
        {
          username: 'Jack Sparrow',
          email: 'captain@hotmail.com',
          password: 'whynorum',
          img_url: 'https://lumiere-a.akamaihd.net/v1/images/bluesteel_d0f846ee.jpeg?region=0%2C0%2C1580%2C880'
        },
        {
          username: 'John Madden',
          email: 'mamamia@spcglobal.net',
          password: 'football',
          img_url: 'https://cbssanfran.files.wordpress.com/2010/09/johnmadden01-250.jpg?w=318&h=318&crop=1'
        },
        {
          username: 'Whoopee Goldberg',
          email: 'ihateborg@enterprise.org',
          password: 'crazydrinks',
          img_url: 'http://www.treknews.net/wp-content/uploads/2016/08/whoopi-goldberg-guinan-star-trek-tng.jpg'
        },
        {
          username: 'Hans Florine',
          email: 'boltbanger@gmail.com',
          password: 'gottagofast',
          img_url: 'https://www.outdoorresearch.com/blog/images/athletes/Hans_Florine.jpg'
        },
        {
          username: 'Dan Osmond',
          email: 'speeddemon@aol.com',
          password: 'bearsreach',
          img_url: 'http://www.supertopo.com/photos/10/49/226421_14531_L.jpg'
        },
        {
          username: 'Chris Sharma',
          email: 'oliana@sharma.net',
          password: 'jumbolove',
          img_url: 'http://www.rockandice.com/Article-Images/News-Photos/sharma-1-profile-cropped.jpg'
        },
        {
          username: 'Warren Harding',
          email: 'boltladder@bigwall.net',
          password: 'partyhard',
          img_url: 'http://www.supertopo.com/photos/1/32/134730_11981_L.jpg'
        },
        {
          username: 'Lynn Hill',
          email: 'itgoesboys@elcap.com',
          password: 'freeascent',
          img_url: 'https://cdn.ukc2.com/i/289172.jpg'
        },
        {
          username: 'Royal Robbins',
          email: 'hardman@netscape.com',
          password: 'whysoserious',
          img_url: 'https://sierraclub.org/sites/www.sierraclub.org/files/blog/_planet/Royal%20Robbins%20%28photo%20by%20Tom%20Frost.jpg'
        },
        {
          username: 'Layton Kor',
          email: 'castleton@ogcrusher.org',
          password: 'squeezechimney',
          img_url: 'http://www.elevationoutdoors.com/top-climbers/wp-content/uploads/2015/08/202046_27996_XL.jpg'
        },
        {
          username: 'Yvon Chouinard',
          email: 'patagonia@bd.com',
          password: 'theenvironment',
          img_url: 'https://i.pinimg.com/originals/75/27/e2/7527e207f80f5bd9a7679c0702792600.jpg'
        }
        ]};

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

  // buttonText() {
  //   if (this.props.alternateText) {
  //     return this.props.alternateText;
  //   } else {
  //     return "Login";
  //   }
  // }

  render() {
    return (
      <div className="modal-form">
        <button onClick={this.openModal} className="session-button">{this.props.buttonText}</button>
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
              <input className="session-submit-button login-submit-button" type="submit" value="Login" />
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
