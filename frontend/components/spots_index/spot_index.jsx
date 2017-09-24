import React from 'react';
import SpotIndexContainer from './spot_index_container';
import SpotIndexItem from './spot_index_item';

class SpotIndex extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.getSpots();
  }

  render () {
    console.log('props:', this.props.spots);
    const spots = this.props.spots;
    // console.log('spots', spots);
    return (
      <div className="below-background">
        <div className="spot-index">
          {spots.map((spot, idx) => (
            <SpotIndexItem class-name="spot-index-item"
              spot={spot}
              key={idx}
              />
          ))}
        </div>
      </div>
    );
  }
}

export default SpotIndex;
