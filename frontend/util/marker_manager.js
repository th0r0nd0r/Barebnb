export default class MarkerManager {
  constructor(map, handleClick) {
    this.map = map;
    this.markers = {};
    this.handleClick = handleClick;
  }

  updateMarkers(spots) {
    const visibleSpots = {};
    spots.forEach(spot => visibleSpots[spot.id] = spot);

    spots
      .filter(spot => !this.markers[spot.id])
      .forEach(newSpot => this.createMarkerFromSpot(newSpot, this.handleClick));

    Object.keys(this.markers)
      .filter(spotId => !visibleSpots[spotId])
      .forEach((spotId) => this.removeMarker(this.markers[spotId]));
  }

  createMarkerFromSpot(spot) {
    const position = new google.maps.LatLng(spot.lat, spot.lng);
    const marker = new google.maps.Marker({
      position,
      map: this.map,
      spotId: spot.id
    });

    marker.addListener('click', () => this.handleClick(spot));
    this.markers[marker.spotId] = marker;
  }

  removeMarker(marker) {
    this.markers[marker.spotId].setMap(null);
    delete this.markers[marker.spotId];
  }
}
