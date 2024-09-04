// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
      
//     </div>
//   );
// }

// export default App;
// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import Login from './components/Login';
// import Signup from './components/Signup';
// import MainPage from './components/MainPage';
// import Homepage from './components/Home';
import './App.css'
// import ToggleMessage from './components/exampler';
import Goku from './components/exampler';

function App() {
  return (
    // <goku />
    <Goku />
    // <Router>
    //   <Routes>
    //     <Route path="/" element={<Login />} />
    //     <Route path="/signup" element={<Signup />} />
    //     <Route path="/mainpage" element={<MainPage />} />
    //     <Route path="/Homepage" element={<Homepage />} />
         
    //   </Routes>
    // </Router>
  );
}

export default App;
