import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../../App.css';
import '../FloorPlan.css';



function constructPage(key, val) {
    const getValOrPlaceHolder = (obj, k1, k2, isPrice = false) => {
        return (obj[k1][k2]) ? (isPrice ? "$" : "") + obj[k1][k2] : '-';
    }


    const boolInp = (val, retVal = false) => {
        if (retVal) return (val == 'No') ? '❌' : (val == 'yes' ? '✅' : val);
        return (val == 'Yes') ? '✅' : '❌';
    }


    if (key == 'title') {
        return (
            <h1 className='dormName'>{val}</h1>
        );
    }
    else if (key == 'cohort') {
        return (
            <h1 className='dormCohort'>{val}</h1>
        );
    }
    else if (key == 'roomtypes') {
        return (
            <div id="roomtypes">
                <h1 className='sectTitle'>Room Types</h1>
                <table>
                    <tbody>
                        <tr>
                            <th>Single</th>
                            <th>{getValOrPlaceHolder(val, 'Single', 'size')}</th>
                            <th>{getValOrPlaceHolder(val, 'Single', 'cost', true)}</th>
                        </tr>
                        <tr>
                            <th>Double</th>
                            <th>{getValOrPlaceHolder(val, 'Double', 'size')}</th>
                            <th>{getValOrPlaceHolder(val, 'Double', 'cost', true)}</th>
                        </tr>
                        <tr>
                            <th>Triple</th>
                            <th>{getValOrPlaceHolder(val, 'Triple', 'size')}</th>
                            <th>{getValOrPlaceHolder(val, 'Triple', 'cost', true)}</th>
                        </tr>
                    </tbody>
                </table>
            </div>
        );
    }
    else if (key == 'communityinfo') {
        return (
            <div id="comminfo">
                <h1 className='sectTitle'>Room Types</h1>
                <table>
                    <tbody>
                        <tr>
                            <th>Number of Floors</th>
                            <th>{val['# of Floors']}</th>
                        </tr>
                        <tr>
                            <th>Number of Occupants</th>
                            <th>{val['# of Occupants']}</th>
                        </tr>
                        <tr>
                            <th>Number of Student Staff per building</th>
                            <th>{val['# of Student Staff per building']}</th>
                        </tr>
                        <tr>
                            <th>Building Type</th>
                            <th>{val['Building Type']}</th>
                        </tr>
                        <tr>
                            <th>Co-Ed Building (Rooms are single gender)</th>
                            <th>{boolInp(val['Co-Ed Building (Rooms are single gender)'])}</th>
                        </tr>
                        <tr>
                            <th>Gender Breakdown</th>
                            <th>{val['Gender Breakdown']}</th>
                        </tr>
                        <tr>
                            <th>Gender Inclusive Housing Available</th>
                            <th>{boolInp(val['Gender Inclusive Housing Available'])}</th>
                        </tr>
                        <tr>
                            <th>Students per suite/apartment</th>
                            <th>{val['Students per suite/apartment']}</th>
                        </tr>
                        <tr>
                            <th>Theme Community Available</th>
                            <th>{boolInp(val['Theme Community Available'])}</th>
                        </tr>
                    </tbody>
                </table>
            </div>
        );
    }
    else if (key == 'restroominfo') {
        return (
            <div id="restroominfo">
                <h1 className='sectTitle'>Restroom Information</h1>
                <table>
                    <tbody>
                        <tr>
                            <th>All-Gender Restroom Available</th>
                            <th>{boolInp(val['All-Gender Restroom Available'])}</th>
                        </tr>
                        <tr>
                            <th>Cleaning Available</th>
                            <th>{boolInp(val['Cleaning Available'])}</th>
                        </tr>
                        <tr>
                            <th>Cleaning Schedule</th>
                            <th>{val['Cleaning Schedule']}</th>
                        </tr>
                        <tr>
                            <th>In Room</th>
                            <th>{boolInp(val['In Room'])}</th>
                        </tr>
                        <tr>
                            <th>On Floor</th>
                            <th>{boolInp(val['On Floor'])}</th>
                        </tr>
                    </tbody>
                </table>
            </div>
        );
    }
    else if (key == 'furnitureinfo') {
        return (
            <div id="furnitureinfo">
                <h1 className='sectTitle'>Furniture</h1>
                <table>
                    <tbody>
                        <tr>
                            <th>Bookcase (above desk)</th>
                            <th>{boolInp(val['Bookcase (above desk)'], true)}</th>
                        </tr>
                        <tr>
                            <th>Built in Closet</th>
                            <th>{boolInp(val['Built in Closet'], true)}</th>
                        </tr>
                        <tr>
                            <th>Desk and Chair</th>
                            <th>{boolInp(val['Desk and Chair'], true)}</th>
                        </tr>
                        <tr>
                            <th>Dresser (Three Drawer)</th>
                            <th>{boolInp(val['Dresser (Three Drawer)'], true)}</th>
                        </tr>
                        <tr>
                            <th>Loftable/Bunkable Bed</th>
                            <th>{boolInp(val['Loftable/Bunkable Bed'])}</th>
                        </tr>
                        <tr>
                            <th>Mattress Size</th>
                            <th>{boolInp(val['Mattress Size'], true)}</th>
                        </tr>
                        <tr>
                            <th>Underbed Height (typical unlofted)</th>
                            <th>{boolInp(val['Underbed Height (typical unlofted)'], true)}</th>
                        </tr>
                        <tr>
                            <th>Wardrobe</th>
                            <th>{boolInp(val['Wardrobe'], true)}</th>
                        </tr>
                    </tbody>
                </table>
            </div>
        );
    }
    else if (key == 'amentitiesinfo') {
        return (
            <div id="amentitiesinfo">
                <h1 className='sectTitle'>Room Types</h1>
                <table>
                    <tbody>
                        <tr>
                            <th>Air Conditioning</th>
                            <th>{boolInp(val['Air Conditioning'])}</th>
                        </tr>
                        <tr>
                            <th>Blinds</th>
                            <th>{boolInp(val['Blinds'])}</th>
                        </tr>
                        <tr>
                            <th>Building Lounge</th>
                            <th>{boolInp(val['Building Lounge'])}</th>
                        </tr>
                        <tr>
                            <th>Cable TV</th>
                            <th>{boolInp(val['Cable TV'])}</th>
                        </tr>
                        <tr>
                            <th>Card Access Required for Entry</th>
                            <th>{boolInp(val['Card Access Required for Entry'])}</th>
                        </tr>
                        <tr>
                            <th>Card Access Required for Entry</th>
                            <th>{boolInp(val['Card Access Required for Entry'], true)}</th>
                        </tr>
                        <tr>
                            <th>Carpet</th>
                            <th>{boolInp(val['Carpet'], true)}</th>
                        </tr>
                        <tr>
                            <th>Classroom</th>
                            <th>{boolInp(val['Classroom'])}</th>
                        </tr>
                        <tr>
                            <th>Elevator</th>
                            <th>{boolInp(val['Elevator'])}</th>
                        </tr>
                        <tr>
                            <th>Ethernet</th>
                            <th>{boolInp(val['Ethernet'])}</th>
                        </tr>
                        <tr>
                            <th>Floor Lounge</th>
                            <th>{boolInp(val['Floor Lounge'])}</th>
                        </tr>
                        <tr>
                            <th>Indoor Bicycle Storage</th>
                            <th>{boolInp(val['Indoor Bicycle Storage'])}</th>
                        </tr>
                        <tr>
                            <th>Kitchen/Kitchenette</th>
                            <th>{boolInp(val['Kitchen/Kitchenette'], true)}</th>
                        </tr>
                        <tr>
                            <th>Laundry</th>
                            <th>{boolInp(val['Laundry'], true)}</th>
                        </tr>
                        <tr>
                            <th>Printer in Building</th>
                            <th>{boolInp(val['Printer in Building'], true)}</th>
                        </tr>
                        <tr>
                            <th>Study Room(s)</th>
                            <th>{boolInp(val['Study Room(s)'])}</th>
                        </tr>
                        <tr>
                            <th>Wireless</th>
                            <th>{boolInp(val['Wireless'])}</th>
                        </tr>
                    </tbody>
                </table>
            </div>
        );
    }
    else if (key == 'nearestdininghall') {
        return (
            <div id="nearestdininghall">
                <h1 className='sectTitle'>Other Information</h1>
                <table>
                    <tbody>
                        <tr>
                            <th>Nearest Dining Hall</th>
                            <th>{val}</th>
                        </tr>
                    </tbody>
                </table>
            </div>
        )
    }
}



function Housing() {
    const [dormInfo, setDormInfo] = useState([]);
    useEffect(() => {
        fetchDormInfo();
    }, []);

    const fetchDormInfo = async () => {
        try {
            // const response = await axios.get('http://localhost:3000/dorms');
            const url = window.location.pathname.replace('/housing/', '');
            const response = await axios.get(`http://localhost:3000/dorm/${url}`);
            const data = response.data;
            setDormInfo(data);
        }
        catch (error) {
            console.error('Error fetching dorm information:', error);
        }
    }

    const openFloorPlan = () => {
        window.open(dormInfo['floorplan']);
    }

    return (
        <>
            <div className='bodyMain'>
                <h1>Housing Page</h1>
                <button className='floorPlanBtn' onClick={openFloorPlan}>Floor Plans</button>
                {Object.keys(dormInfo).map((dormKey) => {
                    return constructPage(dormKey, dormInfo[dormKey]);
                })}
            </div>
        </>
    );
}

export default Housing;