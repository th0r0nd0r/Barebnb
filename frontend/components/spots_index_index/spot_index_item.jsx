import React from 'react';
import { withRouter } from 'react-router-dom';

class SpotIndexItem extends React.Component {
  constructor(props) {
    super(props);
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
      </div>
    );
  }
}

export default SpotIndexItem;
