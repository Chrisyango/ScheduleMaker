import React, { Component } from 'react';
import Calendar from '../calendar/calendar';

class Dashboard extends Component {
  render() {
    return (
      <div className="dashboard">
        <ul>
          <li>Need a way to add events.</li>
          <li>Need a way to add events for a whole week.</li>
          <li></li>
        </ul>
        <Calendar/>
      </div>
    );
  }
}

export default Dashboard;