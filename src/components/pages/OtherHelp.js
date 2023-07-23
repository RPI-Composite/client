import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../../App.css';

function OtherHelp() {
  const disorientation_pdf_path = "./RPI_Disorientation_Guide.pdf";
  return (
    <div>
      <h1>Campus Map and Disorientation Guide</h1>
      <p><a href="./PDFs/RPI_Campus_Map.pdf">Campus Map</a></p>
      <p><a href="./PDFs/RPI_Disorientation_Guide.pdf">Disorientation Guide</a></p>
      <h1>Other Useful Links:</h1>
      <p><a href="https://hasspathways.com/">Hass Pathways</a></p>
      <p><a href="https://info.rpi.edu/campus-card/">Check your Flex/RAD Balance here</a></p>
      <p><a href="https://dotcio.rpi.edu/services/support-and-training/help-desk">Help Desk</a></p>
      <p><a href="https://itssc.rpi.edu/hc/en-us">IT Services</a></p> 
      <p><a href="https://rpiathletics.com/">Athletics</a></p> 
    </div>
  );
}

export default OtherHelp;
