import React, {useState, useEffect} from 'react';
import axios from 'axios';
import '../../App.css';
import AboutUs from '../AboutUs';

function Housing() {
  const [dormInfo,setDormInfo] = useState([]);
  useEffect(() => {
    fetchDormInfo();
  }, []);

  const fetchDormInfo = async () => {
    try{
      const response = await axios.get('http://localhost:3000/dorms');
      const data = response.data;
      setDormInfo(data);
      console.log(data);
    }
    catch(error){
      console.error('Error fetching dorm information:', error);
    }
  }


  return (
    <>
      <h1>Housing Page</h1>
      <div>
        <h2>Dorm Information</h2>
        {Object.keys(dormInfo).map((dormKey) => (
          <div key={dormKey}>
            <h3>{dormInfo[dormKey].name}</h3>
            <p>Cohort: {dormInfo[dormKey].cohort}</p>
            <p>URL: {dormInfo[dormKey].url}</p>
          </div>
        ))}
      </div>
    </>
  );
}

export default Housing;
