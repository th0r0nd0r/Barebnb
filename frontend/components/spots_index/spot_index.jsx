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

  whichSpots() {
    if (this.props.searchSpots) {
      return this.props.searchSpots;
    } else {
      return this.props.spots;
    }
  }

  render () {
    console.log('spots:', this.props.spots);
    console.log('search spots:', this.props.searchSpots);
    const spots = this.whichSpots();
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
