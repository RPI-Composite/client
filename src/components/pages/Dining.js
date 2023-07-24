import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../../App.css'; // If this line is not needed, remove it
import '../Dining.css'; // Add the correct path to the Dining.css file

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
    <div className="bodyMain">
      <h1 className="titleMain">Dining Halls</h1>
      {diningHallInfo ? (
        <div className="diningMain">
          {Object.entries(diningHallInfo).map(([category, halls]) => (
            <div key={category} className="diningSection">
              <h1>{category}</h1>
              {Object.entries(halls).map(([hall, info], index) => (
                <div key={hall} className={`diningHallSection ${index % 2 === 0 ? 'even' : 'odd'}`}>
                  <h3 className="diningHallName">{hall.toUpperCase()}</h3>
                  {info.desc && <p className="diningHallDescription"><span style={{textDecoration: 'underline'}}>Description:</span><br />{info.desc}</p>}
                  {info.phone && <p>Phone: <a href={"tel:+1" + info.phone}>{info.phone}</a></p>}
                  {info.loc && (
                    <p>
                      Location: <span style={{fontFamily: "-moz-initial"}}>Latitude: {info.loc.lat}, Longitude: {info.loc.long}</span>
                    </p>
                  )}
                  {info.reghours && (
                    <div>
                      <p style={{textDecoration: 'underline'}}>Regular Hours:</p>
                      <ul>
                        {Object.entries(info.reghours).map(([days, hours]) => {
                          if (typeof hours === 'object') {
                            return (
                              <li key={days}>
                                {Object.entries(hours).map(([meal, t]) => (
                                  <span className="hoursContainer" key={meal}>
                                    <p style={{display: "inline-block"}}>{meal}</p>
                                    <p style={{display: "inline-block", fontFamily: "-moz-initial"}}>&nbsp;&nbsp;{t}</p>
                                    <br />
                                  </span>
                                ))}
                              </li>
                            )
                          }
                          else if (hall !== "Commons") { // Format regular hours for all halls except "Commons"
                            return (
                              <span className="hoursContainer" key={days}>
                                <p style={{display: "inline-block"}}>{days.replaceAll(',', ', ')}:</p>
                                <p style={{display: "inline-block", fontFamily: "-moz-initial"}}>&nbsp;&nbsp;{hours}</p>
                                <br />
                              </span>
                            );
                          }
                          return null; // Skip displaying regular hours for "Commons"
                        })}
                      </ul>
                    </div>
                  )}
                  {/* Add more information as needed */}
                  {/* ... (existing JSX code) */}
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
