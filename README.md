# README

Barebnb is a peer-to-peer space sharing app that allows users to host and book simple spots: camper vans, hammocks, barns, anywhere you can curl up for the night.

![index-img](https://user-images.githubusercontent.com/29419913/31039056-5a55d904-a52f-11e7-8f90-5bccdad285d3.png)

## Technology
Barebnb uses Ruby on Rails for the backend, Postgres for database management, and Reactjs and google maps API on the frontend.

## Features

- Fullstack user authentication
- Users can create, edit, and destroy spots
- Users can leave reviews on spots
- Responsive spot index rendering using google maps API

### Deep Dive

One unique feature of the app is the ability to update a spot's location by clicking on the map.

![map-demo](https://user-images.githubusercontent.com/29419913/31047981-6e5b0f4c-a5c9-11e7-8f75-463fe3616cdd.gif)

This is accomplished by first setting a click-handleer on the Map component that updates the url's search query string with latitude and longitude information:

```javascript
handleClick(coords){
    if (this.props.formMounted) {
      this.props.history.push({
        search: `lat=${coords.lat}&lng=${coords.lng}`
      });
    }
  }
```


That information is then picked up by the Spot Form's Container, and passed down to the Form as a prop:

```javascript
const mapStateToProps = (state, { location }) => ({
  lat: new URLSearchParams(location.search).get("lat"),
  lng: new URLSearchParams(location.search).get("lng"),
```
the Form then updates its coordinates whenever it will receive new props:

```javascript
updateCoords(nextProps) {
    this.coords = {lat: nextProps.lat, lng: nextProps.lng};
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.lat !== nextProps.lat || this.props.lng !== nextProps.lng) {
      this.updateCoords(nextProps);
    }
  }
```
