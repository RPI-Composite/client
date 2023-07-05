import React, { useState, useEffect } from 'react';
import '../../App.css';
import axios from 'axios';
import Fullcalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";

const convertMonthToDigit = monthName => {
  const months = {
    January: '01',
    February: '02',
    March: '03',
    April: '04',
    May: '05',
    June: '06',
    July: '07',
    August: '08',
    September: '09',
    October: '10',
    November: '11',
    December: '12'
  };

  return months[monthName];
};


function CalPage() {
  const [events, setEvents] = useState([]);

useEffect(() => {
  fetchEvents();
}, []);

const fetchEvents = () => {
  axios
    .get('http://localhost:3000/acalRaw')
    .then(response => {
      const eventData = response.data;

      const parsedEvents = [];

      for (const monthYear in eventData) {
        if (eventData.hasOwnProperty(monthYear)) {
          const eventsForMonth = eventData[monthYear];

          for (const date in eventsForMonth) {
            if (eventsForMonth.hasOwnProperty(date)) {
              const event = eventsForMonth[date];

              console.log(date);

              let [monthName, day, year] = date.split(' ');

              day = day.slice(0,-1);

              const month = convertMonthToDigit(monthName);

              const formattedDate = `${year}-${month}-${day}`;

              const eventObj = {
                title: event.txt,
                start: formattedDate,
                // Add other properties like 'end' if applicable
                // end: '...',
                // ...
              };

              parsedEvents.push(eventObj);
            }
          }
        }
      }

      setEvents(parsedEvents);
    })
    .catch(error => {
      console.error(error);
    });
};


  

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
          events={events}
        />
      </div>
      {/* Side Bar */}
      <div>

      </div>
    </div>
  );
}

export default CalPage;
