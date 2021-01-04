import React from "react";
import './App.scss';
import sampleImg from './sample.jpg';

function App() {
  return (
    <div className="App">
      <h3>Add sass or scss in React - <a href="https://www.cluemediator.com" target="_blank">Clue Meditor</a></h3>
      <div className="img-card">
        <img className="img" src={sampleImg} />
        <div className="card-body">
          <div className="card-title">Lorem ipsum</div>
          <div className="card-text">Lorem ipsum dolor sit amet elit.</div>
        </div>
      </div>
    </div>
  );
}

export default App;
