import React from 'react';
import './AboutUs.css';

function AboutUs() {
  return (
    <section className="main" id="aboutUsSection">
        <div className="headerContainer">
        <h1>About RPI Composite</h1>
            <div className="headerSection">
                <h2>Who developed RPI Composite</h2>
                <p>[About us Section]</p>
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