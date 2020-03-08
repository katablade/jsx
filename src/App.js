import React from 'react';
import imageInSrc from "./katablade.jpg";
import './App.css';

function App() {
  return (
    <div className="app" style={{border:"solid 1px black", maxWidth: "100vw"}}>
	  <h1 className="title red">My title</h1>
    <br />
    <img src={imageInSrc} alt="img" />
    <br />
	  <img src="/katablade.jpg" alt="img" />
    </div>

  );
}

export default App;
