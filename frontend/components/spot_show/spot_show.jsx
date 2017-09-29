import React from 'react';
import { Link, Route } from 'react-router-dom';

import SpotDetail from './spot_detail';
import SpotMap from '../spot_map/spot_map';
import ReviewFormContainer from './review_form_container';
import LoginFormContainer from '../session_forms/login_form_container';
import SpotUpdateFormContainer from '../spot_form/spot_update_form_container';


import { ProtectedRoute } from '../../util/route_util';
import { ReviewLink } from '../../util/link_util';


class SpotShow extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      host: {}
    };

    this.delete = this.delete.bind(this);
  }

  componentWillMount() {
    // console.log("premount props:", this.props);
    this.props.getSpot(this.props.match.params.spotId).then((action) => {
      this.props.getUser(action.spot.host_id)
      .then((user) => this.setState({host: user}));
    }
  );
  }

  componentDidMount() {
    // console.log("pprops:", this.props);
    // console.log("sspot:", this.props.spot);
    // console.log("host_id", this.props.spot.host_id);
    // console.log("postmount host:", this.state.host);
    window.scrollTo(0,0);
    // this.props.getSpot().then((spot) => this.state.host = this.props.getUser(spot.host_id))
    //   .then(console.log("propsafterdispatch:", this.props, "host:", this.state.host));
  }

  linkOrModal(currentUser, spotId) {
    if (currentUser) {
      return(
        <div >
          <ReviewLink
            component={ReviewFormContainer}
            to={`/spots/${spotId}/review`}
            label="Leave a Review"
            />
          <Route
            path="/spots/:spotId/review"
            component={ReviewFormContainer}
            />
        </div>
      );
    } else {
      return (
        <LoginFormContainer className="leave-review-button" buttonText={'Leave a Review'} />
      );
    }
  }

  delete(e) {
    e.preventDefault();
    this.props.deleteSpot(this.props.spotId)
    .then(() => this.props.history.push("/"));
  }

  render() {
    const { spotId, spot, getSpot, getUser } = this.props;
    const spots = {
      [spotId]: spot
    };
    return(
      <div className="spot-show">
        <div className="single-spot-map">
          <SpotMap
            spots={spots}
            spotId={spotId}
            singleSpot={true}
            getSpot={getSpot}
          />
        </div>

        <div className="spot-details">
          <SpotDetail
            spot={spot}
            host={this.state.host}
            currentUser={this.props.currentUser}
            getSpot={this.props.getSpot}
            deleteReview={this.props.deleteReview}
            />
          {this.linkOrModal(this.props.currentUser, spotId)}
        </div>

        <div className="spot-buttons">
          <Link to={`/spots/${spotId}/update`}>
            <button className="session-submit-button">
              Update Spot
            </button>
          </Link>
          <button className="session-submit-button" onClick={this.delete}>
            Delete Spot
          </button>
        </div>
      </div>
    );
  }
}

export default SpotShow;
