import React from 'react';
import ReactDOM from 'react-dom';
import { withRouter } from 'react-router-dom';
import MarkerManager from '../../util/marker_manager.js';

const getCoordsObj = LatLng => ({
  lat: LatLng.lat(),
  lng: LatLng.lng()
});

const mapOptions = {
  center: { lat: 37.989560, lng: -122.519999 },
  zoom: 9
};

class SpotMap extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      spot: {}
    };
  }

  componentDidMount() {
    console.log("props:", this.props);
    const map = this.refs.map;
    if (this.props.singleSpot) {
      this.props.getSpot(this.props.spotId);
    } else {
      this.map = new google.maps.Map(this.mapNode, mapOptions);
      this.registerListeners();
      this.MarkerManager = new MarkerManager(this.map, this.handleMarkerClick.bind(this));
    }
  }

  componentDidUpdate() {
    if (this.props.singleSpot) {
      console.log("propspots:", this.props.spots);
      const targetSpotKey = Object.keys(this.props.spots)[0];
      const targetSpot = this.props.spots[targetSpotKey];

      const singleSpotOptions = {
        center: {lat: targetSpot.lat, lng: targetSpot.lng},
        zoom: 12
      };
      // console.log("spotfromstate:", this.state.spot);
      // console.log("spot:", this.props.getSpot(this.props.spotId));
      // console.log("targetSpotKey:", targetSpotKey);
      console.log("targetSpot:", targetSpot);
      // console.log(targetSpot);
      // console.log("lat:", targetSpot.lat);
      // console.log("lng:", targetSpot.lng);
      console.log(mapOptions);
      this.map = new google.maps.Map(this.mapNode, singleSpotOptions);
      console.log(this.map);
      this.MarkerManager = new MarkerManager(this.map, this.handleMarkerClick.bind(this));
      this.MarkerManager.updateMarkers([targetSpot]);
    } else {
      this.MarkerManager.updateMarkers(this.props.spots);
    }
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
