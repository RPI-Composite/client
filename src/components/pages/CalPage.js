import React, { useState, useEffect } from 'react';
import '../../App.css';
import axios from 'axios';
import Fullcalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";





function CalPage() {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    fetchEvents();
  }, []);

  const fetchEvents = () => {
    axios.get('/api/events')
      .then(response => {
        const eventData = response.data;

        const parsedEvents = [];

        for (const key in eventData) {
          if (eventData.hasOwnProperty(key)) {
            const monthYear = key;
            const eventsForMonth = eventData[key];

            for (const date in eventsForMonth) {
              if (eventsForMonth.hasOwnProperty(date)) {
                const event = eventsForMonth[date];

                const eventObj = {
                  monthYear: monthYear,
                  date: date,
                  txt: event.txt,
                  href: event.href
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
