import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../Catalog.css';

function Catalog() {
  const [schoolsData, setSchoolsData] = useState([]);
  const [coursesData, setCoursesData] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const schoolsResponse = await axios.get('http://localhost:3000/schools');
      const coursesResponse = await axios.get('http://localhost:3000/coursesCurrent');

      setSchoolsData(schoolsResponse.data);
      setCoursesData(coursesResponse.data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <h1>Catalog</h1>
      <div className='schoolsSection'>
        <h2>Schools:</h2>
        {schoolsData.length > 0 ? (
          schoolsData.map((school, index) => (
            <div key={index}>
              <h3>{school.name}</h3>
              {school.depts && school.depts.length > 0 ? (
                <ul>
                  {school.depts.map((dept, index) => (
                    <li key={index}>{dept.name}</li>
                  ))}
                </ul>
              ) : (
                <p>No departments found for this school</p>
              )}
            </div>
          ))
        ) : (
          <p>Loading schools data...</p>
        )}
      </div>
      <div className='coursesSection'>
        <h2>Courses:</h2>
        {coursesData.length > 0 ? (
          coursesData.map((course, index) => (
            <div key={index}>
              {/* <h3>{course.title}</h3> */}
              <h2>Course Code: {course.code}</h2>
              {course.courses && course.courses.length > 0 ? (
                <ul>
                  {course.courses.map((courseThing, index) => (
                    <li key={index}>
                      <h3>Title: {courseThing.title}</h3>
                      <p>ID: {courseThing.id}</p>
                      {courseThing.sections && courseThing.sections.length > 0 ? (
                      <ul>
                        {courseThing.sections.map((section, index) => (
                          <li key={index}>
                            <p>CRN: {section.crn}</p>
                            <ul>
                              {section.timeslots.map((timeslot, index) => (
                                <li key={index}>
                                  <p>Instructor: {timeslot.instructor}</p>
                                </li>
                              ))}
                            </ul>
                          </li>
                        ))}
                      </ul>
                    ) : (
                      <p>Cannot get CRN data</p>
                    )}
                    <p>CRSE: {courseThing.crse}</p>
                    <br></br>
                    </li>
                  ))}
                </ul>
              ) : (
                <p>Loading more course data</p>
              )}
            </div>
          ))
        ) : (
          <p>Loading courses data...</p>
        )}
      </div>
    </div>
  );
}

export default Catalog;
