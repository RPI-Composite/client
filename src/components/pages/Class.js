import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../../App.css';
import '../Dorm.css';

function Class() {
  const [catalogInfo, setCatalogInfo] = useState([]);

  useEffect(() => {
    fetchCatalogInfo();
  }, []);

  useEffect(() => {
    console.log(catalogInfo); // Log the updated catalogInfo when it changes
  }, [catalogInfo]);

  const fetchCatalogInfo = async () => {
    try {
      const url = window.location.pathname.replace('/class/', '');
      const response = await axios.get(`${(window.location.href.includes('localhost')) ? 'http://localhost:3000' : 'https://rpi-composite-server-a93993c40133.herokuapp.com'}/searchCourses?query=${url}`);
      const data = response.data;
      // Convert the object data into an array
      const dataArray = Object.values(data);
      setCatalogInfo(dataArray);
    } catch (error) {
      console.error('Error fetching class information:', error);
    }
  };

  // Helper function to format time with a colon (:)
  const formatTimeWithColon = (time) => {
    const timeString = time.toString().padStart(4, '0'); // Ensure it's 4 digits with leading zeros if needed
    if (timeString.replace(/(\d{2})(\d{2})/, '$1:$2') == "00-1") {
        return ("None");
    } else {
        return timeString.replace(/(\d{2})(\d{2})/, '$1:$2');
    }
  };

  // Helper function to format day if there is none
  const formatDay = (day) => {
    if (day.length == 0) {
        return ("None");
    } 
    else {
        return (day.join(', '));
    }
  }

  return (
    <>
      <div className='bodyMainClass'>
        <div className='alignTitle'>
            <h1>Class Page</h1>
        </div>
        {catalogInfo.map((course) => (
          <div key={course.id}>
            <div className='courseDetails'>
                <h2>{course.title}</h2>
                <h4>{course.desc}</h4>
            </div>
            {course.sections.map((courseSection, index) => (
              <div key={index}>
                <p>CRN: {courseSection.crn}</p>
                <p>Location: {courseSection.timeslots[0].location}</p>
                <p>Instructor: {courseSection.timeslots[0].instructor}</p>
                <p>Days: {formatDay(courseSection.timeslots[0].days)}</p>
                <p>
                  Times: {formatTimeWithColon(courseSection.timeslots[0].timeStart)} -{' '}
                  {formatTimeWithColon(courseSection.timeslots[0].timeEnd)}
                </p>
                <br />
              </div>
            ))}
          </div>
        ))}
      </div>
    </>
  );
}

export default Class;
