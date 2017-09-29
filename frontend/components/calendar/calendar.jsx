import React from 'react';
import DatePicker from 'react-datepicker';
import moment from 'moment';




// CSS Modules, react-datepicker-cssmodules.css
// import 'react-datepicker/dist/react-datepicker-cssmodules.css';

class Calendar extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      startDate: moment(),
      endDate: moment()
    };
    this.handleChangeStart = this.handleChangeStart.bind(this);
    this.handleChangeEnd = this.handleChangeEnd.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChangeStart(date) {
    this.setState({
      startDate: date
    });
  }

  handleChangeEnd(date) {
    this.setState({
      endDate: date
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    const booking = Object.assign({},
    {
      checkin: this.state.startDate,
      checkout: this.state.endDate,
      guest_id: this.props.guestId,
      spot_id: this.props.spotId
    });
    this.props.createBooking(this.props.guestId, booking);
  }

  render() {
    return (
      <div>
        <DatePicker
          selected={this.state.startDate}
          selectsStart
          startDate={this.state.startDate}
          endDate={this.state.endDate}
          onChange={this.handleChangeStart}
          />
        <DatePicker
          selected={this.state.endDate}
          selectsEnd
          startDate={this.state.startDate}
          endDate={this.state.endDate}
          onChange={this.handleChangeEnd}
          />
        <button className="session-submit-button" onClick={this.handleSubmit}>Book Your Stay</button>
      </div>
    );
  }
}

export default Calendar;
