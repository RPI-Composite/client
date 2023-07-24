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

  const formatPhoneNumber = (phoneNumber) => {
    const cleaned = ('' + phoneNumber).replace(/\D/g, '');
    const match = cleaned.match(/^(\d{3})(\d{3})(\d{4})$/);
    if (match) {
      return '(' + match[1] + ') ' + match[2] + '-' + match[3];
    }
    return phoneNumber;
  };

  const getLocationLink = (latitude, longitude) => {
    return `https://www.google.com/maps?q=${latitude},${longitude}`;
  };

  // Additional links for each dining hall
  const diningHallLinks = {
    "Moe's Southwest Grill": 'https://rpi.sodexomyway.com/dining-near-me/moes',
    'DCC Café': 'https://rpi.sodexomyway.com/dining-near-me/dcc-cafe',
    "Evelyn's Cafe": 'https://rpi.sodexomyway.com/dining-near-me/evelyns_cafe',
    'Argo Tea Café': 'https://rpi.sodexomyway.com/dining-near-me/library-cafe',
    "Father's Marketplace": 'https://rpi.sodexomyway.com/dining-near-me/fathers-marketplace',
    'Panera Bread': 'https://rpi.sodexomyway.com/dining-near-me/mcneil-room',
    'Beanery Café': 'https://rpi.sodexomyway.com/dining-near-me/beanery-cafe',
    'Blitman Commons': 'https://rpi.sodexomyway.com/dining-near-me/blitman-dining-hall',
    'BARH Dining Hall': 'https://rpi.sodexomyway.com/dining-near-me/barh-dining-hall',
    'Russell Sage Dining Hall': 'https://rpi.sodexomyway.com/dining-near-me/russell-sage',
    'Commons Dining Hall': 'https://rpi.sodexomyway.com/dining-near-me/commons-dining-hall',
    'RPI McNeil Room': 'https://rpi.sodexomyway.com/dining-near-me/mcneil-room',
    'Wild Blue Sushi': 'https://rpi.sodexomyway.com/dining-near-me/wild_blue_sushi',
    'Center for Biotechnology and Interdisciplinary Studies': 'https://rpi.sodexomyway.com/dining-near-me/CCG',
    'Halal Shack': 'https://rpi.sodexomyway.com/dining-near-me/Halal_shack',
  };

  return (
    <div className="bodyMain">
      <h1 className="titleMain" style={{ fontSize: '36px', fontWeight: 'bold', color: 'blue', textTransform: 'uppercase', textAlign: 'center' }}>Rensselaer Dining</h1>      {diningHallInfo ? (
        <div className="diningMain">
          {Object.entries(diningHallInfo).map(([category, halls]) => (
            <div key={category} className="diningSection">
              <h1>{category}</h1>
              {Object.entries(halls).map(([hall, info], index) => (
                <div key={hall} className={`diningHallSection ${index % 2 === 0 ? 'even' : 'odd'}`}>
                  <h3 className="diningHallName">
                    <a href={diningHallLinks[hall]} style={{ fontFamily: "-moz-initial" }}>
                      {hall.toUpperCase()}
                    </a>
                  </h3>
                  {info.desc && <p className="diningHallDescription"><span style={{textDecoration: 'underline'}}>Description:</span><br />{info.desc}</p>}
                  {info.phone && <p>Phone: <a href={"tel:+1" + info.phone}>{formatPhoneNumber(info.phone)}</a></p>}
                  {info.loc && (
                    <p>
                      <a href={getLocationLink(info.loc.lat, info.loc.long)} style={{fontFamily: "-moz-initial"}}>
                        Location:</a>
                    </p>
                  )}
                  {mealPrices && mealPrices[hall] && (
                    <div>
                      <p>Meal Prices:</p>
                      <ul>
                        {Object.entries(mealPrices[hall]).map(([meal, prices]) => (
                          <li key={meal}>
                            {meal}: {prices}
                          </li>
                        ))}
                      </ul>
                    </div>
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
                          // Display regular hours as a single list item for halls with simple strings for hours
                          return (
                            <li key={days} className="hoursContainer">
                              <p>{days.replaceAll(',', ', ')}:</p>
                              <p style={{ fontFamily: "-moz-initial" }}>{hours}</p>
                            </li>
                          );
                        })}
                      </ul>
                      
                    </div>
                  )}
                  {/* Add more information as needed */}
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