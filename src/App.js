import React from 'react';
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import { Navbar }from './components/Navbar';
import Home from './pages/Home';
import Fetch from './components/Fetch';
import Vil from './components/Vil';
const App = () => {
  return (
    <>
    <Router>
     <Navbar/>
      <Routes>
        <Route exact path="/" element={<Home/>} />
        <Route path="/general" element={<Fetch cat="general" />} />
        <Route path="/business" element={<Fetch cat="business" />} />
        <Route path="/entertainment" element={<Fetch cat="entertainment" />} />
        <Route path="/health" element={<Fetch cat="health" />} />
        <Route path="/science" element={<Fetch cat="science" />} />
        <Route path="/sports" element={<Fetch cat="sports" />} />
        <Route path="/technology" element={<Fetch cat="technology" />} />
      </Routes>
      <Vil/>
    </Router>
    </>
  );
};

export default App;
