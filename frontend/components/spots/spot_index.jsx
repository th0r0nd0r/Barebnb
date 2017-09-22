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
      <div>
        <h1>Spots: </h1>
        {spots.map((spot, idx) => (
          <SpotIndexItem
            spot={spot}
            key={idx}
            />
        ))}
      </div>
    );
  }
}

export default SpotIndex;
