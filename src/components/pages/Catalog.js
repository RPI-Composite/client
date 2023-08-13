import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../../App.css';
import '../Catalog.css'


function Catalog() {
  const [catalogInfo, setCatalogInfo] = useState([]);
  useEffect(() => {
    fetchCatalogInfo();
  }, []);

  const fetchCatalogInfo = async () => {
    try {
      const url = (window.location.href.includes('localhost')) ? 'http://localhost:3000' : 'https://rpi-composite-server-a93993c40133.herokuapp.com';
      const response = await axios.get(`${url}/schools`);
      const data = response.data;
      setCatalogInfo(data);
    }
    catch (error) {
      console.error('Error fetching catalog information:', error);
    }
  }

  return (
    <div className='bodyMain'>
      <div className='catalogHeader'>
        <h1>Welcome to the RPI Catalog Page</h1>
        <h2>Below you view a list of schools from the RPI catalog</h2>
      </div>
      <div className='tableAlign'>
        <table>
          <tbody>
            {catalogInfo.map((school, index) => {
              return (
                <tr>
                  <th>{school.name}</th>
                  <th>
                  {school.depts.map((dept, index) => {
                    return (
                      <li><a className='catalogURL' href={"/class/" + (dept.code).toLowerCase()}>{dept.code + " " + dept.name}</a></li>
                    );
                  })}
                  </th>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Catalog;
