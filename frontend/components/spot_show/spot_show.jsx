import React from 'react';
import { Link } from 'react-router-dom';

import SpotDetail from './spot_detail';
import SpotMap from '../spot_map/spot_map';

import { ProtectedRoute } from '../../util/route_util';

class SpotShow extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      host: {}
    };
  }

  componentWillMount() {
    console.log("premount spot:", this.props.spot);
    this.props.getUser(this.props.spot.host_id)
      .then((user) => this.state.host = user)
      .then(console.log("premount host:", this.state.host));
  }

  componentDidMount() {
    console.log("pprops:", this.props);
    console.log("sspot:", this.props.spot);
    console.log("host_id", this.props.spot.host_id);
    console.log("postmount host:", this.state.host);
    window.scrollTo(0,0);
    // this.props.getSpot().then((spot) => this.state.host = this.props.getUser(spot.host_id))
    //   .then(console.log("propsafterdispatch:", this.props, "host:", this.state.host));
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
          <SpotDetail spot={spot} host={this.state.host}/>
        </div>
      </div>
    );
  }
}

export default SpotShow;
