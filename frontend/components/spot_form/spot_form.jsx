import React from 'react';
import { withRouter } from 'react-router';

class SpotForm extends React.Component {
  constructor(props) {
    super(props);
    this.coords = {lat: props.lat, lng: props.lng};
    this.state = {
      title: '',
      description: '',
      price: 50,
      beds: 1,
      img_url: ''
    };

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  update(property) {
    return e => this.setState({
      [property]: e.target.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    const spot = Object.assign({}, this.state, this.coords);
    this.props.createSpot({spot});
    this.navigateToSearch();
  }

  render() {
    const { title, description, price, beds, img_url } = this.state;
    const { lat, lng } = this.coords;

    return (
      <div className="spot-form-container">
        <h1 className="spot-form-title">Create a Spot</h1>
        <br/>
        <form className="spot-form" onSubmit={this.handleSubmit}>
          <div className="spot-form-inputs">
            <input
              className="input-field"
              type="text"
              placeholder="Spot name"
              value={title}
              onChange={this.update('title')}
            />
            <br/>
            <input
              className="input-field"
              type="text"
              placeholder="Description"
              value={description}
              onChange={this.update('description')}
            />
            <br/>
            <input
              className="input-field"
              type="text"
              placeholder="Number of beds (includes hammocks, cots, etc.)"
              value={beds}
              onChange={this.update('beds')}
            />
            <br/>
            <input
              className="input-field"
              type="text"
              placeholder="Price per night"
              value={price}
              onChange={this.update('price')}
            />
            <br/>
            <input
              className="input-field"
              type="text"
              placeholder="Link to an image of your spot!"
              value={img_url}
              onChange={this.update('img_url')}
            />
            <br/>
            <div className="lat-lng-input">
              <input
                className="input-field"
                type="text"
                disabled
                placeholder="Latitude"
                value={lat}
                />
              <input
                className="input-field"
                type="text"
                disabled
                placeholder="Longitude"
                value={lng}
                />
            </div>
            <br/>
            <input className="session-submit-button" type="submit" value="Create Spot" />
          </div>
        </form>
      </div>
    );
  }
}

export default SpotForm;
