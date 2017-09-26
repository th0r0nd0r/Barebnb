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
    const spot = this.props.spot;
    return(
      <div className="spot-detail">
        <style>
          @import url('https://fonts.googleapis.com/css?family=Open+Sans:300,400,700');
        </style>
        <img className="spot-show-image" src={spot.img_url} />
        <h1 className="spot-show-title">{spot.title}</h1>
        <p className="spot-show-description">{spot.description}</p>
        <div className="spot-show-price">${spot.price}</div>
        <div className="spot-show-beds">{spot.beds} {this.beds()}</div>
      </div>
    );
  }
}

export default SpotDetail;
