import React from 'react';
import { Link } from 'react-router';

// import ReviewShow from './review_show';

// const beds = () => {
//   if
// };

class SpotDetail extends React.Component {
  constructor(props) {
    super(props);

    this.beds = this.beds.bind(this);
    // this.upperCaseTitle = this.upperCaseTitle.bind(this);
  }

  beds() {
    if (this.props.spot.beds === 1) {
      return "bed";
    } else {
      return "beds";
    }
  }

  // upperCaseTitle() {
  //   console.log("spot:", this.props.spot);
  //   if (this.props.spot) {
  //     return this.props.spot.title.toUpperCase();
  //   } else {
  //     return this.props.spot.title;
  //   }
  // }

  render() {
    console.log("host:", this.props.host);
    const spot = this.props.spot;
    const host = this.props.host;
    return(
      <div className="spot-detail">
        <style>
          @import url('https://fonts.googleapis.com/css?family=Open+Sans:300,400,700');
        </style>
        <img className="spot-show-image" src={spot.img_url} />
        <div className="title-and-host-info">
          <h1 className="spot-show-title">{spot.title}</h1>
          <div className="host-info">
            <img className="host-avatar" src={host.img_url} />
            <h4 className="host-name">{host.username}</h4>
          </div>
        </div>
        <hr className="hr" />
        <div className="spot-show-text-container">
          <div className="spot-show-price">${spot.price}</div>
          <div className="spot-show-body">{spot.beds} {this.beds()}</div>
        </div>
        <hr className="hr" />
        <div className="spot-show-text-container">
          <h2 className="spot-show-header">The Space</h2>
          <p className="spot-show-body">{spot.description}</p>
        </div>
      </div>
    );
  }
}

export default SpotDetail;
