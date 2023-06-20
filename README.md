# RPI Composite

RPI Composite is a web application built with React that provides a platform for managing composite materials. It includes features such as a calendar for scheduling material production, options for customization, and user authentication.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Configuration](#configuration)
- [File Structure](#file-structure)
- [Dependencies](#dependencies)
- [Contributing](#contributing)
- [License](#license)

## Installation

Follow these steps to set up and run the project locally:

1. Clone the repository:

   ```shell
   git clone https://github.com/Software-Design-and-Documentation/client.git

2. Navigate to the project directory:

   ```shell
   cd rpi-composite
3. Install the dependencies:

   ```shell

   npm install
4. To start the project, use the following command:

   ```shell

   npm start
   This command will run the application in development mode. Open http://localhost:3000 in your web browser to view it.


 ## File Structure
    - src/
    - components/
        - Button/
        - Button.js
        - Button.css
        - Navbar/
        - Navbar.js
        - Navbar.css
        - ...
    - pages/
        - Home/
        - Home.js
        - Home.css
        - CalPage/
        - CalPage.js
        - CalPage.css
        - ...
    - App.js
    - index.js
    - ...
    - public/
    - index.html
    - ...
    - package.json
    - README.md

    The src directory contains the source code of the application. The components directory includes reusable UI components such as Button and Navbar. The pages directory contains different pages of the application, including Home and CalPage. The main entry point of the application is App.js, and the React rendering happens in index.js. The public directory includes the static assets and the index.html file.

## Dependencies

The project relies on the following dependencies:

    - [@testing-library/jest-dom](https://www.npmjs.com/package/@testing-library/jest-dom) (version ^5.16.5): Provides custom Jest matchers for DOM elements.
    - [@testing-library/react](https://www.npmjs.com/package/@testing-library/react) (version ^13.4.0): Provides utilities for testing React components.
    - [@testing-library/user-event](https://www.npmjs.com/package/@testing-library/user-event) (version ^13.5.0): Simulates user events for testing React components.
    - [react](https://www.npmjs.com/package/react) (version ^18.2.0): JavaScript library for building user interfaces.
    - [react-dom](https://www.npmjs.com/package/react-dom) (version ^18.2.0): Provides DOM-specific methods for React.
    - [react-router-dom](https://www.npmjs.com/package/react-router-dom) (version ^6.12.1): DOM bindings for React Router.
    - [react-scripts](https://www.npmjs.com/package/react-scripts) (version 5.0.1): Configuration and scripts for Create React App.
    - [web-vitals](https://www.npmjs.com/package/web-vitals) (version ^2.1.4): Library for measuring web vitals metrics.

    You can find the latest versions of these dependencies on [npm](https://www.npmjs.com/). The versions specified above are minimum requirements, and the project may work with newer versions as well.

