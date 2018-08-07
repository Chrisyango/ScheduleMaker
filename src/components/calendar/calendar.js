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
          title: 'Gym',
          start: '2018-08-02T10:00:00',
          end: '2018-08-02T12:00:00',
          description: 'Running, lifting, stretching'
        },
        {
          title: 'Meeting with team-members',
          start: '2018-08-02T14:00:00',
          end: '2018-08-02T15:00:00',
          description: 'Something here.'
        }
      ],
      mouseCoord: {
        x: null,
        y: null
      }
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
      // },
      events: this.state.events,
      // eventRender: function(event, element) {
      //   element.find('.fc-title').append('<br/>' + event.description);
      // },
      eventMouseover: function(data, event, view) {
        $('<div/>', {
          class: 'description-popup',
          text: `Event: ${data.title}`
        }).appendTo(this);
        view.el.find('.description-popup').append('<br/>' + data.description)
        $('.description-popup').css({
          'left': event.pageX,
          'top': event.pageY
        })
      },
      eventMouseout: function(data, event, view) {
        view.el.find('.description-popup').remove();
      }
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