import React, { useState, useEffect } from 'react';
import '../../App.css';
import axios from 'axios';
import Fullcalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import { saveAs } from 'file-saver';

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

// Function to customize event content
const renderEventContent = ({ event }) => {
  return (
    <>
      <b>{event.title}</b>
      <br />
      <span style={{ fontSize: '12px' }}>
        {event.start.toLocaleString()}
      </span>
      <br />
      <a href={event.url} target="_blank" rel="noopener noreferrer">View Details</a>
    </>
  );
};






function CalPage() {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    fetchEvents();
  }, []);

  const fetchEvents = () => {
    axios
      .get(`${(window.location.href.includes('localhost')) ? 'http://localhost:3000' : 'https://rpi-composite-server-a93993c40133.herokuapp.com'}/acalRaw`)
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
                  url: event.href,
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

  const handleExportICS = () => {
    fetch(`${(window.location.href.includes('localhost')) ? 'http://localhost:3000' : 'https://rpi-composite-server-a93993c40133.herokuapp.com'}/calics`)
      .then(response => response.blob())
      .then(blob => {
        saveAs(blob, 'calendar.ics');
      })
      .catch(error => {
        console.error('Error fetching ICS file:', error);
      });
  };
  
  return (
    <div>
      <Fullcalendar
        plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
        initialView={"dayGridMonth"}
        eventContent={renderEventContent} // Call renderEventContent function for custom event rendering
        events={events}
        customButtons={{
          exportICS: {
            text: "Export ICS",
            click: handleExportICS,
          },
        }}
        headerToolbar={{
          start: "today prev,next",
          center: "title",
          end: "dayGridMonth,timeGridWeek,timeGridDay",
        }}
        footerToolbar={{
          end: "exportICS",
        }}
        height={"90vh"}
      />
    </div>
  );
}


export default CalPage;
