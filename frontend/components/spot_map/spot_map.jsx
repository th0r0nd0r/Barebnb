import React from 'react';
import ReactDOM from 'react-dom';
import { withRouter } from 'react-router-dom';
import MarkerManager from '../../util/marker_manager.js';

class SpotMap extends React.Component {

  componentDidMount() {
    const mapOptions = {
      center: { lat: 37.989560, lng: -122.519999 }, // this is SF
      zoom: 9
    };

    this.map = new google.maps.Map(this.mapNode, mapOptions);
    this.MarkerManager = new MarkerManager(this.map);

    this.MarkerManager.updateMarkers(this.props.benches);
  }

  componentDidUpdate() {
    this.MarkerManager.updateMarkers(this.props.benches);
  }

  render() {
    return (
      <div className="map" ref={ map => this.mapNode = map }>
        something
      </div>
    );
  }
}

export default SpotMap;
