import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../../App.css';


function Housing() {
  const [dormInfo, setDormInfo] = useState([]);
  useEffect(() => {
    fetchDormInfo();
  }, []);

  const fetchDormInfo = async () => {
    try {
      const response = await axios.get('http://localhost:3000/dorms');
      const data = response.data;
      setDormInfo(data);
    }
    catch (error) {
      console.error('Error fetching dorm information:', error);
    }
  }


  return (
    <>
      <h1>Housing Page</h1>
      <div>
        <h2>Dorms</h2>
        {Object.keys(dormInfo).map((dormKey) => (
          <div key={dormKey}>
            <h3>{dormInfo[dormKey].name}</h3>
            <p>Cohort: {dormInfo[dormKey].cohort}</p>
            <p>
              URL: <a href={"http://localhost:3001/housing/" + dormKey}>site URL</a>
            </p>
          </div>
        ))}
      </div>
    </>
  );
}

export default Housing;