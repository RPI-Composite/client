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
    fetchDiningData();
  }, []);

  const fetchDiningData = async () => {
    try {
      const diningHallInfoResponse = await axios.get('http://localhost:3000/dininghallinfo', {
        params: {
          alldata: true,
        },
      });
      setDiningHallInfo(diningHallInfoResponse.data);

      const mealPricesResponse = await axios.get('http://localhost:3000/diningprices');
      setMealPrices(mealPricesResponse.data);

      const diningPlansResponse = await axios.get('http://localhost:3000/diningplans');
      setDiningPlans(diningPlansResponse.data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };
    const convertMealPricesToArray = (mealPrices) => {
      if (!mealPrices) return [];
      return Object.entries(mealPrices).map(([hall, prices]) => {
        return {
          hall: hall,
          prices: prices,
        };
      });
    };
  
    return (
      <div>
        <h1>Dining Halls</h1>
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
                          {days}: {hours.open} - {hours.close}
                        </li>
                      ))}
                    </ul>
                    {info.spechours && (
                      <div>
                        <p>Special Hours:</p>
                        <ul>
                          {Object.entries(info.spechours).map(([days, hours]) => (
                            <li key={days}>
                              {days}: {hours.open} - {hours.close}
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
                          {convertMealPricesToArray(mealPrices[hall]).map(({ hall, prices }) => (
                            <li key={hall}>
                              {hall}: {prices}
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            ))}
          </div>
        ) : (
          <p>Loading dining hall info...</p>
        )}
      </div>
    );
  };
  
  export default Dining;