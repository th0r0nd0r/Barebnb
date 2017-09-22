import React from 'react';
import { withRouter } from 'react-router-dom';

class SpotIndexItem extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const spot = this.props.spot;
    return (
      <div>
        <img src={spot.img_url}/>
        <div>
          {spot.title}
        </div>
      </div>
    );
  }
}

export default SpotIndexItem;
