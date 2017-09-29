import React from 'react';
import { withRouter, Route, Redirect } from 'react-router-dom';
import SpotMap from '../spot_map/spot_map';

class SpotForm extends React.Component {
  constructor(props) {
    super(props);
    console.log("lat:", this.props.lat);
    this.coords = {lat: 0, lng: 0};
    this.state = {
      title: '',
      description: '',
      price: 0,
      beds: 1,
      img_url: ''
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.updateCoords = this.updateCoords.bind(this);
  }

  componentDidMount() {
    console.log("mounted");
    this.props.getSpot(this.props.spotId).then((newSpot) => {
      this.setState({
        title: newSpot.spot.title,
        description: newSpot.spot.description,
        price: newSpot.spot.price,
        beds: newSpot.spot.beds,
        img_url: newSpot.spot.img_url
      });
      return newSpot;
    })
    .then((authSpot) => {
      console.log("authSpot", authSpot);
      if (this.props.currentUser.id !== authSpot.spot.host_id) {
        this.props.history.push("/");
      } else {
        return authSpot;
      }
    })
    .then((coordsSpot) => {
      console.log("coordsSpot:", coordsSpot);
      console.log("AAAAAAAAAAAAAAAAAAAAAAAA", "CORDLAT", coordsSpot.spot.lat);
      this.coords = { lat: coordsSpot.spot.lat, lng: coordsSpot.spot.lng};

    });
  }

  // componentWillUnmount() {
  //   window.removeEventListener("hashchange", this.updateCoords);
  // }

  update(property) {
    return e => this.setState({
      [property]: e.target.value
    });
  }

  updateCoords(nextProps) {
    console.log("form history:", nextProps.history);
    console.log("new coords:", this.coords);

    this.coords = {lat: new URLSearchParams(nextProps.history.location.search).get("lat"),
    lng: new URLSearchParams(nextProps.history.location.search).get("lng")};
  }


  componentWillReceiveProps(nextProps) {
    // debugger;
    if (this.props.lat !== nextProps.lat || this.props.lng !== nextProps.lng) {
      this.updateCoords(nextProps);
    }
  }

  componentWillUnmount() {
    // window.removeEventListener("hashchange", this.updateCoords);
    this.props.clearErrors();
  }

  navigateToShow(newSpot) {
    this.props.history.push(`/spots/${newSpot.id}`);
  }


  handleSubmit(e) {
    e.preventDefault();
    const spot = Object.assign({}, this.state, this.coords, {
      host_id: this.props.currentUser.id,
      id: parseInt(this.props.spotId)
    });
    console.log("PAAAAATCH", spot);
    this.props.updateSpot({spot}).then(() => this.navigateToShow(spot));
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

    const { title, description, price, beds, img_url } = this.state;
    const { lat, lng } = this.coords;

    return (
      <div className="form-and-map">
        <div className="spot-form-container-squared">
          <div className="spot-form-container">
            <span className="form-errors">{this.renderErrors()}</span>
            <h1 className="spot-form-title">Update Spot</h1>
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
                <div className="lat-lng-message">Click anywhere on the map to set your spot's Location</div>
                <br/>
                <input className="session-submit-button" type="submit" value="Update Spot" />
              </div>
            </form>
          </div>
        </div>
        <div className="map-stuff">
          <SpotMap  formMounted={true} />
        </div>
      </div>
    );
  }
}

export default SpotForm;
