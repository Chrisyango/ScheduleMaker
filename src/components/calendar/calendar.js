import React, { Component } from 'react';

import $ from 'jquery';
import 'fullcalendar';

import '../../styles/calendar.css';

class Calendar extends Component {
  constructor() {
    super()

    this.state = {
      events: [
        {
          title: 'Event 1',
          start: '2018-08-02T10:00:00',
          end: '2018-08-02T12:00:00',
          description: 'Something here'
        },
        {
          title: 'Event 2',
          start: '2018-08-02T14:00:00',
          end: '2018-08-02T15:00:00',
          description: 'Something here'
        }
      ]
    }
  }
  componentDidMount() {
    $('.calendar').fullCalendar({
      header: {
        left: 'month, agendaWeek, agendaDay',
        center: 'title',
        right: 'prev, today, next'
      },
      height: 900,
      fixedWeekCount: false,
      showNonCurrentDates: false,
      // dayClick: function(date) {
      //   console.log(date.format());
      // }
      events: this.state.events
    })
  }

  render() {
    return (
      <div className="calendar">
        
      </div>
    );
  }
}

export default Calendar;