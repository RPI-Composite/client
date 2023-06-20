import React from 'react';
import '../../App.css';
import Fullcalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";




function CalPage() {
  const eventList = [
    {
      title: 'Event 1',
      start: '2023-06-20T10:00:00',
      end: '2023-06-20T12:00:00',
      description: 'This is Event 1'
    },
    {
      title: 'Event 2',
      start: '2023-06-23T15:00:00',
      end: '2023-06-23T17:00:00',
      description: 'This is Event 2'
    },
    // Add more events as needed
  ];

  return (
    <div>
      {/* Main Calendar */}
      <div>
        <Fullcalendar
          plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
          initialView={"dayGridMonth"}
          headerToolbar={{
            start: "today prev,next", // will normally be on the left. if RTL, will be on the right
            center: "title",
            end: "dayGridMonth,timeGridWeek,timeGridDay", // will normally be on the right. if RTL, will be on the left
          }}
          height={"90vh"}
          events={eventList}
        />
      </div>
      {/* Side Bar */}
      <div>

      </div>
    </div>
  );
}

export default CalPage;
