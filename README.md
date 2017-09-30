# README

Barebnb is a peer-to-peer space sharing app that allows users to host and book simple spots: camper vans, hammocks, barns, anywhere you can curl up for the night.

![index-img](https://user-images.githubusercontent.com/29419913/31039056-5a55d904-a52f-11e7-8f90-5bccdad285d3.png)

link to live site: https://barebnb.herokuapp.com/#/

## How To Use

Either follow the link to the live site, or:

- Clone this repository
- Run `npm install`
- Start up your server with `rails s`
- navigate to `localhost:3000` in your browser
- you're in business!

## Technology
Barebnb uses Ruby on Rails for the backend, Postgres for database management, and Reactjs and google maps API on the frontend.

## Features

- Fullstack user authentication
- Users can create, edit, and destroy spots
- Users can leave reviews on spots
- Responsive spot index rendering using google maps API

### Deep Dive

#### Location Update

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

#### Redirecting

Another fun problem to solve was how to keep users from accessing components they aren't supposed to.  
To make sure a user is logged in when accessing a Route, I took the canonical approach of beefing up react's Route:

```javascript
const Auth = ({component: Component, path, loggedIn}) => (
  <Route path={path} render={(props) => (
    !loggedIn ? (
      <Component {...props} />
    ) : (
      <Redirect to="/" />
    )
  )}/>
);

const mapStateToProps = state => {
  return {loggedIn: Boolean(state.session.currentUser)};
};

export const AuthRoute = withRouter(connect(mapStateToProps, null)(Auth));
```

If a user is logged in, the component renders as normal. Otherwise, the user is redirected to the landing page.

Ok, but what if we need to check if a particular user is logged in, for instance to show them buttons to edit and delete a review they've authored.  Easy! Enter conditional rendering:

```javascript
maybeButtons() {
    const {id, body, rating, authorId } = this.props;
    if ( this.props.currentUser && (this.props.authorId === this.props.currentUser.id)) {
      return(
        <div className="edit-delete-review-buttons">
          <ReviewEditFormContainer id={id} body={body} rating={rating} />
          <button
            className="delete-review-button"
            onClick={this.handleClick}
            >Delete Review</button>
        </div>
      );
    }
  }
```

![buttons](https://user-images.githubusercontent.com/29419913/31048266-a1675300-a5ce-11e7-9981-53b0830e1757.png)

Now, the buttons only show up for the review's author.  
But, how do we prevent one user from, say, deleting another user's spot? Couldn't they just enter the url manually?  
We could mess around more with routes, but why bother when we have access to React's awesome History API?
Checkout this code from the Spot Update Form:

```javascript
componentDidMount() {
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
      if (this.props.currentUser.id !== authSpot.spot.host_id) {
        this.props.history.push("/");
      } else {
        return authSpot;
      }
```
Here, as soon as the component mounts, it calls a getSpot action to update it's local state with a specific spot's information.  Then, using Thunk to chain actions together, we can take the return value (newSpot) and make sure it belongs to the current user.  If not, we push the path to home onto history, and bingo! The spot is safe.

![history-redirect-demo](https://user-images.githubusercontent.com/29419913/31048302-43801668-a5cf-11e7-849d-9ebb0054fc15.gif)

Side note: since calling the getSpot action makes an asynchronous ajax request to the database, we have to chain the authentication check onto the action, to make sure we actually have access to the spot we're checking against.

Ok so that's a lot of rerouting.  But there's still one more situation we haven't dealt with yet! There are some components in the app that don't have routes at all.  The login form, for example, is mounted inside a modal.  Normally we would just click the associated button to open it up, but picture this:  

You're a user who hasn't signed in.  You want to host your sweet porch for $10 a night, so you click on create a spot.  But that route is protected, so the page doesn't load.  So you've just clicked a button that's completely useless! Nothing changes on the page and you get so frustrated you move your business over to Sparebnb, or Sharebnb, or Aupairbnb.  

Chilling.

So we have to open up the login modal so our users know what's up!
My solution for this one was pretty sneaky, but I like the way it works:

```javascript
const linkOrModal = (currentUser) => {
  if (currentUser) {
    return(
      <Link to="/spots/new">
        <button className="session-button">
          Create a Spot
        </button>
      </Link>
    );
  } else {
    return (
      <LoginFormContainer buttonText={'Create a Spot'} />
    );
  }
};
```

![login-modal-demo](https://user-images.githubusercontent.com/29419913/31048343-cd8a88ca-a5cf-11e7-8995-91a408fc38bd.gif)

Aha! You thought it was the Create Spot button but it was ME, the LoginFormContainer the whole time!

