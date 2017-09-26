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
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.map = new google.maps.Map(this.mapNode, mapOptions);
    this.MarkerManager = new MarkerManager(this.map, this.handleMarkerClick.bind(this));
    this.MarkerManager.updateMarkers(this.props.spots);
    this.registerListeners();
  }

  componentDidUpdate() {
    this.MarkerManager.updateMarkers(this.props.spots);
  }

  registerListeners() {
    this.map.addListener( 'idle', () => {
      const { north, south, east, west } = this.map.getBounds().toJSON();
      const bounds = {
        northEast: { lat:north, lng: east },
        southWest: { lat: south, lng: west } };
      // this.props.updateFilter('bounds', bounds);
    });
    this.map.addListener( 'click', (event) => {
      const coords = getCoordsObj(event.latLng);
      this.handleClick(coords);
    });
  }

  handleMarkerClick(spot) {
    this.props.history.push(`spots/${spot.id}`);
  }

  handleClick(coords){
    this.props.history.push({
      search: `lat=${coords.lat}&lng=${coords.lng}`
    });
  }

  render() {
    return (
      <div className="map" ref={ map => this.mapNode = map }>
      </div>
    );
  }
}

export default withRouter(SpotMap);
