import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css'
import {Chat ,NotFound ,Register,Login}  from './views/index';




function App() {
  return (
    <div id='main-container' className="container-fluid">
    <Router>
      <Routes>
        <Route path="/"  Component={Chat} />
        <Route  Component={NotFound} />
        <Route path="/Register"  Component={Register} />
        <Route path="/Login"  Component={Login} />
     
      </Routes>
    </Router>
    </div>
  );
}

export default App;
