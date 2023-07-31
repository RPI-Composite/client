import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../../App.css';
import '../OtherHelp.css';

function OtherHelp() {
  const disorientation_pdf_path = "./RPI_Disorientation_Guide.pdf";
  return (
    
    <div>
      <h1><u>Other Useful Links</u></h1>
      <div className='usefulLinksContainer'>
        <div className='usefulLinks'> 
          <p><a href="https://lms.rpi.edu/"target="_blank">RPI Learning Management System</a></p>
          <p><a href="https://sis.rpi.edu/"target="_blank">Self-Service Information System</a></p>
          <p><a href="https://info.rpi.edu/bias-assessment-response-team/resources"target="_blank">Student Health Resources</a></p>
          <p><a href="https://hasspathways.com/"target="_blank">Hass Pathways</a></p>
          <p><a href="https://info.rpi.edu/campus-card/"target="_blank">Check your Flex/RAD Balance here</a></p>
          <p><a href="https://dotcio.rpi.edu/services/support-and-training/help-desk"target="_blank">Help Desk</a></p>
          <p><a href="https://itssc.rpi.edu/hc/en-us"target="_blank">IT Services</a></p> 
          <p><a href="https://rpiathletics.com/"target="_blank">Athletics</a></p>
          <p><a href="https://info.rpi.edu/comm-d"target="_blank">The Center for Global Communication + Design</a></p>
        </div>
      </div>
      <div>
        <h1><u>Campus Map and Disorientation Guide</u></h1>
        <div className='pdfs'>
          <object
          data="./PDFs/RPI_Campus_Map.pdf"
          type="application/pdf"
          className='objectDisplayed'
          >
          <p>
            Your browser does not support PDF viewing. You can view the campus map PDF <a href="./PDFs/RPI_Campus_Map.pdf">here</a>.
          </p>
          </object>

          <object
          data="./PDFs/RPI_Disorientation_Guide.pdf"
          type="application/pdf"
          className='objectDisplayed'
          >
          <p>
            Your browser does not support PDF viewing. You can view the disorientation guide PDF <a href="./PDFs/RPI_Disorientation_Guide.pdf">here</a>.
          </p>
          </object>
        </div>
      </div>
    </div>
  );
};

export default OtherHelp;
