import React from 'react';
import './App.css';
import Login from './components/Login';
import Register from './components/Register';
import 'materialize-css/dist/css/materialize.min.css';


function App() {
  return (
    <div className="App-header">

      <div className="row">
        
        <div className="col s6 login"> <Login /> </div>
        <div className="col s6 reg"><Register /> </div>
      </div>
  
    </div>
  );
}

export default App;
