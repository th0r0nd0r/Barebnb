import React from 'react';
import ReactDOM from 'react-dom';
import { withRouter } from 'react-router-dom';
import MarkerManager from '../../util/marker_manager.js';

const getCoordsObj = LatLng => ({
  lat: LatLng.lat(),
  lng: LatLng.lng()
});

const mapOptions = {
  center: { lat: 37.989560, lng: -122.519999 }, // this is SF
  zoom: 9
};

class SpotMap extends React.Component {

  componentDidMount() {

    this.map = new google.maps.Map(this.mapNode, mapOptions);
    this.MarkerManager = new MarkerManager(this.map);

    this.MarkerManager.updateMarkers(this.props.spots);
  }

  componentDidUpdate() {
    this.MarkerManager.updateMarkers(this.props.spots);
  }

  registerListeners() {
    google.maps.event.addListener(this.map, 'idle', () => {
      const { north, south, east, west } = this.map.getBounds().toJSON();
      const bounds = {
        northEast: { lat:north, lng: east },
        southWest: { lat: south, lng: west } };
      this.props.updateFilter('bounds', bounds);
    });
    google.maps.event.addListener(this.map, 'click', (event) => {
      const coords = getCoordsObj(event.latLng);
      this._handleClick(coords);
    });
  }

  _handleClick(coords){
    this.props.history.push({
      search: `lat=${coords.lat}&lng=${coords.lng}`
    });
  }

  render() {
    return (
      <div className="map" ref={ map => this.mapNode = map }>
        something
      </div>
    );
  }
}

export default withRouter(SpotMap);
