import React from 'react';
import { withRouter } from 'react-router';
import SpotMap from '../spot_map/spot_map';


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
    this.updateCoords = this.updateCoords.bind(this);
  }

  update(property) {
    return e => this.setState({
      [property]: e.target.value
    });
  }

  updateCoords() {
    console.log("form history:", this.props.history);
    console.log("new coords:", this.coords);
    this.coords = {lat: new URLSearchParams(this.props.history.location.search).get("lat"),
    lng: new URLSearchParams(this.props.history.location.search).get("lng")};
  }

  componentDidMount() {
    window.addEventListener("hashchange", this.updateCoords);
  }

  componentWillUnmount() {
    window.removeEventListener("hashchange", this.updateCoords);
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
      <div className="form-and-map">
        <div className="spot-form-container-squared">
          <div className="spot-form-container">
            <h1 className="spot-form-title">Create a Spot</h1>
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
                  onChange={this.update('beds')}
                  />
                <br/>
                <input
                  className="input-field"
                  type="text"
                  placeholder="Price per night"
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
                <div className="lat-lng-input-container">
                  <input
                    className="lat-lng-input"
                    type="text"
                    placeholder="Latitude"
                    value={lat}
                    />
                  <input
                    className="lat-lng-input"
                    type="text"
                    placeholder="Longitude"
                    value={lng}
                    />
                </div>
                <br/>
                <input className="session-submit-button" type="submit" value="Create Spot" />
              </div>
            </form>
          </div>
        </div>
        <div className="map-stuff">
          <SpotMap spots={ this.props.spots } />
        </div>
      </div>
    );
  }
}

export default SpotForm;
