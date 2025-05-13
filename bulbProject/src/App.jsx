import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import Bulb from "./Bulb";


function App() { //intsall tha package of react-router-dom
  return (
    <div className="p-4">
      <nav className="mb-4">
        <Link to="/bulb" className="mr-4 text-blue-600 underline">Bulb</Link>
       
      </nav>
      <Routes>
        <Route path="/bulb" element={<Bulb />} />
       
      </Routes>
    </div>
  );
}

export default App;
