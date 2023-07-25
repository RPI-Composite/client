import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../../App.css';
import '../OtherHelp.css';

function OtherHelp() {
  const disorientation_pdf_path = "./RPI_Disorientation_Guide.pdf";
  return (
    
    <div>
      <div>
        <h1>Campus Map and Disorientation Guide</h1>
        <div className='pdfs'>
          <object
          data="./PDFs/RPI_Campus_Map.pdf"
          type="application/pdf"
          width="90%"
          height="500px"
          >
          <p>
            Your browser does not support PDF viewing. You can view the campus map PDF <a href="./PDFs/RPI_Campus_Map.pdf">here</a>.
          </p>
          </object>

          <object
          data="./PDFs/RPI_Disorientation_Guide.pdf"
          type="application/pdf"
          width="90%"
          height="500px"
          >
          <p>
            Your browser does not support PDF viewing. You can view the disorientation guide PDF <a href="./PDFs/RPI_Disorientation_Guide.pdf">here</a>.
          </p>
          </object>
        </div>
      </div>

      <div>
      <h1>Other Useful Links:</h1>
        <div className='usefulLinks'> 
          <p><a href="https://hasspathways.com/">Hass Pathways</a></p>
          <p><a href="https://info.rpi.edu/campus-card/">Check your Flex/RAD Balance here</a></p>
          <p><a href="https://dotcio.rpi.edu/services/support-and-training/help-desk">Help Desk</a></p>
          <p><a href="https://itssc.rpi.edu/hc/en-us">IT Services</a></p> 
          <p><a href="https://rpiathletics.com/">Athletics</a></p>
        </div>
      </div>
    </div>
  );
};

export default OtherHelp;
