import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../../App.css';

function Catalog() {
  const [schoolsData, setSchoolsData] = useState([]);

  useEffect(() => {
    fetchSchoolsData();
  }, []);

  const fetchSchoolsData = async () => {
    try {
      const response = await axios.get('http://localhost:3000/schools');
      const data = response.data;
      setSchoolsData(data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <h1>Hello World</h1>
      <h2>Schools:</h2>
      {schoolsData.map((school, index) => (
        <div key={index}>
          <h3>{school.name}</h3>
          <ul>
            {school.depts.map((dept, index) => (
              <li key={index}>{dept.name}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}

export default Catalog;
