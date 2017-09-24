import React from 'react';
import { withRouter } from 'react-router-dom';

class SpotIndexItem extends React.Component {
  constructor(props) {
    super(props);
  }

  beds() {
    if (this.props.spot.beds === 1) {
      return "bed";
    } else {
      return "beds";
    }
  }

  render() {
    const spot = this.props.spot;
    return (
      <div className="spot-index-item">
        <img className="spot-image" src={spot.img_url}/>
        <br />
        <div className="spot-info">
          <h3 className="title-price">{spot.title}</h3>
          <h3 className="title-price">${spot.price}</h3>
        </div>
        <h3 className="beds">{spot.beds} {this.beds()}</h3>
      </div>
    );
  }
}

export default SpotIndexItem;
