import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../../App.css';
import '../Dining.css';

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
      <div class="bodyMain">
        <h1 class="titleMain">Dining Halls</h1>
        {diningHallInfo ? (
          <div class="diningMain">
            {Object.entries(diningHallInfo).map(([category, halls]) => (
              <div key={category}>
                <h1>{category}</h1>
                {Object.entries(halls).map(([hall, info]) => (
                  <div key={hall}>
                    <h3>{hall.toUpperCase()}</h3>
                    <p style={{textDecoration: 'underline'}}>Regular Hours:</p>
                  <ul>
                    {Object.entries(info.reghours).map(([days, hours]) => {
                      if (typeof hours == 'object') {
                        return (
                          <li key={days}>
                            {Object.entries(hours).map(([meal, t]) => (
                                <span class="hoursContainer">
                                  <p style={{display: "inline-block"}}>{meal}</p>
                                  <p style={{display: "inline-block", fontFamily: "-moz-initial"}}>&nbsp;&nbsp;{t}</p>
                                  <br></br>
                                </span>
                              ))}
                          </li>
                        )
                      }
                      else {
                        return (
                          <span class="hoursContainer">
                            <p style={{display: "inline-block"}}>{days.replaceAll(',', ', ')}:</p>
                            <p style={{display: "inline-block", fontFamily: "-moz-initial"}}>&nbsp;&nbsp;{hours}</p>
                            <br></br>
                          </span>
                        );
                      }
                      
                    })}
                  </ul>
                    {/* {info.spechours && (
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
                    )} */}
                    {info.desc && <p style={{fontFamily: "-moz-initial", marginTop: '5px'}}><span style={{textDecoration: 'underline'}}>Description:</span><br></br>{info.desc}</p>}
                    {info.phone && <p>Phone: <a href={"tel:+1" + info.phone}>{info.phone}</a></p>}
                    {info.loc && (
                      <p style={{marginTop: '4px;'}}>
                        Location: <span style={{fontFamily: "-moz-initial"}}>Latitude: {info.loc.lat}, Longitude: {info.loc.long}</span>
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