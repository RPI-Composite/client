import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../../App.css';

const diningHallStyles = {
  textAlign: 'center',
  fontFamily: 'Arial, sans-serif',
};

function Dining() {
  const [diningHallInfo, setDiningHallInfo] = useState(null);

  useEffect(() => {
    fetchDiningHallInfo();
  }, []);

  const fetchDiningHallInfo = async () => {
    try {
      const response = await axios.get('http://localhost:3000/dininghallinfo');
      const data = response.data;
      setDiningHallInfo(data);
    } catch (error) {
      console.error('Error fetching dining hall information:', error);
    }
  };

  return (
    <div style={diningHallStyles}>
      <h1>Your Dining Hall</h1>
      {diningHallInfo ? (
        <div>
          {Object.entries(diningHallInfo).map(([category, halls]) => (
            <div key={category}>
              <h2>{category}</h2>
              {Object.entries(halls).map(([hall, info]) => (
                <div key={hall}>
                  <h3>{hall}</h3>
                  <p>Regular Hours:</p>
                  <ul>
                    {Object.entries(info.reghours).map(([days, hours]) => (
                      <li key={days}>
                        {days}: {hours}
                      </li>
                    ))}
                  </ul>
                  {info.spechours && (
                    <div>
                      <p>Special Hours:</p>
                      <ul>
                        {Object.entries(info.spechours).map(([days, hours]) => (
                          <li key={days}>
                            {days}: {hours}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                  {info.desc && <p>Description: {info.desc}</p>}
                  {info.phone && <p>Phone: {info.phone}</p>}
                  {info.loc && (
                    <p>
                      Location: Latitude: {info.loc.lat}, Longitude: {info.loc.long}
                    </p>
                  )}
                </div>
              ))}
            </div>
          ))}
        </div>
      ) : (
        <p>Loading dining hall information...</p>
      )}
    </div>
  );
}

export default Dining;
