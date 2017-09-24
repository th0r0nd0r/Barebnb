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
        <h3 className="spot-title">{spot.title}</h3>
      </div>
    );
  }
}

export default SpotIndexItem;
