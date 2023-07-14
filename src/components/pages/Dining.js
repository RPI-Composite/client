import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../../App.css';

const diningHallStyles = {
  textAlign: 'center',
  fontFamily: 'Arial, sans-serif',
};

function Dining() {
  const [diningHallInfo, setDiningHallInfo] = useState(null);
  const [mealPrices, setMealPrices] = useState(null);
  const [diningPlans, setDiningPlans] = useState(null);

  useEffect(() => {
    fetchDiningHallInfo();
    fetchMealPrices();
    fetchDiningPlans();
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

  const fetchMealPrices = async () => {
    try {
      const response = await axios.get('http://localhost:3000/diningprices');
      const data = response.data;
      setMealPrices(data);
    } catch (error) {
      console.error('Error fetching meal prices:', error);
    }
  };

  const fetchDiningPlans = async () => {
    try {
      const response = await axios.get('http://localhost:3000/diningplans');
      const data = response.data;
      setDiningPlans(data);
    } catch (error) {
      console.error('Error fetching dining plans:', error);
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
                  {mealPrices && mealPrices[hall] && (
                    <div>
                      <p>Meal Prices:</p>
                      <ul>
                        <li>Flex: {mealPrices[hall].flex}</li>
                        <li>Other: {mealPrices[hall].other}</li>
                      </ul>
                    </div>
                  )}
                </div>
              ))}
            </div>
          ))}
        </div>
      ) : (
        <p>Loading dining hall information...</p>
      )}
      {diningPlans && (
        <div>
          <h2>Dining Plans</h2>
          {Object.entries(diningPlans).map(([title, plans]) => (
            <div key={title}>
              <h3>{title}</h3>
              <ul>
                {Object.entries(plans).map(([plan, description]) => (
                  <li key={plan}>
                    {plan}: {description}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Dining;
