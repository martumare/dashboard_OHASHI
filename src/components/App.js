import React from 'react';
import '../assets/css/app.css';
import SideBar from './SideBar';
import ContentWrapper from './ContentWrapper';
function App() {
  return (
    <React.Fragment>
      	<div id="wrapper">
          <SideBar/>
          <ContentWrapper />
        </div>
    </React.Fragment>
  );
}

export default App;
