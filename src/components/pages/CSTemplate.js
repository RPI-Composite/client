import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../../App.css';
import '../CSTemplate.css'; // Add the correct path to the CSTemplate.css file

// Rest of the component code...



// Declaring Courses Lists
const requiredCourses_id = ["CSCI-1100","CSCI-1200","CSCI-2200","CSCI-2300","CSCI-2500","CSCI-2600",
"CSCI-4210","CSCI-4430","MATH-1010","MATH-1020","PHYS-1100","BIOL-1010","BIOL-1015"];

const mathOptionI_id = ["MATH-2010", "MATH-4030", "MATH-4040", "MATH-4100", "MATP-4600"];


function CSTemplate() {
    const [requiredCourses, setRequiredCourses] = useState([]); // fetch using Query
    const [mathOptionI, setMathOptionI] = useState([]); // fetch using Query
    const [mathOptionII, setMathOptionII] = useState([]);   // ALL MATH/MATP Courses above 2000 level (crse > 2000)
    const [csOption, setCsOption] = useState([]);   // ALL CSCI Courses above 4000 level excluding 4210 and 4430 (crse > 4000 && != 4210 && != 4430)
    const [scienceOption, setScienceOption] = useState([]); // ALL ASTR/BIOL/CHEM/ERTH/ENVE/PHYS courses

    useEffect(() => {
        fetchData();
      }, []);
    
    const fetchData = async () => {
        try {
            const totalQueries = ['ASTR','BIOL','CSCI','CHEM','ERTH','ENVE','MATH','PHYS'];
            const totalCoursesResponse = await fetchCoursesData(totalQueries);

            // Parse and filter courses into corresponding arrays
            const requiredCoursesArray = totalCoursesResponse.filter(course => requiredCourses_id.includes(course["id"]));
            setRequiredCourses(requiredCoursesArray);

            const mathOptionIArray = totalCoursesResponse.filter(course => mathOptionI_id.includes(course["id"]));
            setMathOptionI(mathOptionIArray);

            //Test
            /*
            console.log("TotalCoursesResponse:",totalCoursesResponse);
            console.log("RequiredCourseArray:",requiredCoursesArray);
            console.log("MathOptionIArray:",mathOptionIArray);
            */

            const mathOptionIIArray = totalCoursesResponse.filter(course => {
                const courseCode = course["id"];
                return courseCode.startsWith("MATH") || courseCode.startsWith("MATP");
            });
            setMathOptionII(mathOptionIIArray);
            /*console.log("MathOptionIIArray:",mathOptionIIArray);*/

            const csOptionArray = totalCoursesResponse.filter(course => {
                const courseCode = course["id"];
                return courseCode.startsWith("CSCI") && courseCode !== "CSCI-4210" && courseCode !== "CSCI-4430";
            });
            setCsOption(csOptionArray);
            /*console.log("CSOptionArray",csOptionArray);*/

            const scienceOptionArray = totalCoursesResponse.filter(course => {
                const courseCode = course["id"];
                return courseCode.startsWith("ASTR") || courseCode.startsWith("BIOL") || courseCode.startsWith("CHEM") ||
                    courseCode.startsWith("ERTH") || courseCode.startsWith("ENVE") || courseCode.startsWith("PHYS");
            });
            setScienceOption(scienceOptionArray);
            /*console.log("ScienceOptionArray:",scienceOptionArray);*/
            
            

        } catch (error) {
            console.error(error);
        }
    };

    const fetchCoursesData = async (queries) => {
        try {
            const responseArray = await Promise.all(
                queries.map(async (query) => {
                    const response = await axios.get(`http://localhost:3000/searchCourses?query=${query}`);
                    return response.data;
                })
            );
            // Merge the responses together to one array
            /*console.log("ResponseArray:",responseArray);*/
            const mergedArray = responseArray.flatMap((courseArray) => Object.values(courseArray));

            return mergedArray;
        } catch (error) {
            console.error(error);
            return [];
        }
    };

    console.log("requiredCourses:", requiredCourses);
    console.log("mathOptionI:", mathOptionI);
    console.log("mathOptionII:", mathOptionII);
    console.log("csOption:", csOption);
    console.log("scienceOption:", scienceOption);

    return (
      <div className="container">
        <h1>Rensselaer Course Selection</h1>
  
        {/* Required Courses */}
        <div className="coursesList">
          <h2>Required Courses</h2>
          <ul className="courses">
            {requiredCourses.map((course) => (
              <li key={course.id}>
                <a className="course-link" href={`http://localhost:3001/class/${course.id.toLowerCase()}`}>
                  <span className="course-code">{course.id}</span> - <span className="course-title">{course.title}</span>
                </a>
                <p className="course-desc">{course.desc}</p>
              </li>
            ))}
          </ul>
        </div>
  
        {/* Math Option I */}
        <div className="coursesList">
          <h2>Math Option I</h2>
          <ul className="courses">
            {mathOptionI.map((course) => (
              <li key={course.id}>
                <a className="course-link" href={`http://localhost:3001/class/${course.id.toLowerCase()}`}>
                  <span className="course-code">{course.id}</span> - <span className="course-title">{course.title}</span>
                </a>
                <p className="course-desc">{course.desc}</p>
              </li>
            ))}
          </ul>
        </div>
  
        {/* Math Option II */}
        <div className="coursesList">
          <h2>Math Option II</h2>
          <ul className="courses">
            {mathOptionII.map((course) => (
              <li key={course.id}>
                <a className="course-link" href={`http://localhost:3001/class/${course.id.toLowerCase()}`}>
                  <span className="course-code">{course.id}</span> - <span className="course-title">{course.title}</span>
                </a>
                <p className="course-desc">{course.desc}</p>
              </li>
            ))}
          </ul>
        </div>
  
        {/* CS Option */}
        <div className="coursesList">
          <h2>CS Option</h2>
          <ul className="courses">
            {csOption.map((course) => (
              <li key={course.id}>
                <a className="course-link" href={`http://localhost:3001/class/${course.id.toLowerCase()}`}>
                  <span className="course-code">{course.id}</span> - <span className="course-title">{course.title}</span>
                </a>
                <p className="course-desc">{course.desc}</p>
              </li>
            ))}
          </ul>
        </div>
  
        {/* Science Option */}
        <div className="coursesList">
          <h2>Science Option</h2>
          <ul className="courses">
            {scienceOption.map((course) => (
              <li key={course.id}>
                <a className="course-link" href={`http://localhost:3001/class/${course.id.toLowerCase()}`}>
                  <span className="course-code">{course.id}</span> - <span className="course-title">{course.title}</span>
                </a>
                <p className="course-desc">{course.desc}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    );
  }
  
  export default CSTemplate;


