import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../../App.css';
import '../Dorm.css';


function Housing() {
  const [dormInfo, setDormInfo] = useState([]);
  useEffect(() => {
    fetchDormInfo();
  }, []);

  const fetchDormInfo = async () => {
    try {
      const response = await axios.get(`${(window.location.href.includes('localhost')) ? 'http://localhost:3000' : 'https://rpi-composite-server-a93993c40133.herokuapp.com'}/dorms`);
      const data = response.data;
      setDormInfo(data);
    }
    catch (error) {
      console.error('Error fetching dorm information:', error);
    }
  }

{/* <h3>{dormInfo[dormKey].name}</h3>
            <p>Cohort: {dormInfo[dormKey].cohort}</p>
            <p>
              URL: <a href={"http://localhost:3001/housing/" + dormKey}>site URL</a>
            </p> */}
  return (
    <div className='bodyMain'>
      <h1>Housing Page</h1>
      <div className='housingPageAlign'>
        <h2>Dorms</h2>
        <div className='tableAlign'>
          <table>
            <tbody>
              {Object.keys(dormInfo).map((dormKey) => {
                return (
                  <tr>
                    <th>{dormInfo[dormKey]['cohort']}</th>
                    <th><a className='housingURL' href={"/housing/" + dormKey}>{dormInfo[dormKey].name}</a></th>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default Housing;