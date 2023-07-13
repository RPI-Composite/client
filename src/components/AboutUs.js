import React from 'react';
import './AboutUs.css';

function AboutUs() {
  return (
    <section className="main" id="aboutUsSection">
        <div className="headerContainer">
        <h1>About RPI Composite</h1>
            <div className="headerSection">
                <h2>Who developed RPI Composite</h2>
                <p><b>Itamar Oren-Naftalovich</b>: Junior Computer Science Student at RPI.</p>
                <p><b>Ben Manicke</b>: Junior Computer Science and Information Technology & Web Science Student at RPI.</p>
                <p><b>Chris Bejasa</b>: Junior Computer Science Student at RPI.</p>
                <p><b>Siddhant Agarwal</b>: Junior Computer Science Student at RPI. Working in Full Stack Development of the website.</p>
                <p><b>Albert Bao</b>: Junior Computer Science Student at RPI.</p>
            </div>
            <div className="headerSection">
                <h2>What Comes Next?</h2>
                <p>[Future goals / projects and what not]</p>
            </div>
            <a id="heroSectionLink" href="#">Back to Top</a>
        </div>
    </section>
  );
}

export default AboutUs;