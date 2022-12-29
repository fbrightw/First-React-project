import React from 'react';
import FullCalendar from '@fullcalendar/react'
import TimeGrid from '@fullcalendar/timegrid'

const events = [
  { title: 'Meeting', start: new Date() }
]

export default  function PersonalCalendar() {
  return (
        <FullCalendar
            plugins={[TimeGrid]}
            initialView='timeGridWeek'
            weekends={false}
            events={events}
            eventContent={renderEventContent}
        />
  )
}

// a custom render function
function renderEventContent(eventInfo) {
  return (
      <>
        <b>{eventInfo.timeText}</b>
        <i>{eventInfo.event.title}</i>
      </>
  )
}
