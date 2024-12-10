import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import CarCalculator from "./Calculator/CarCalculator";
import RetirementCalculator from "./Calculator/RetirementCalculator";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<h1>Welcome to the Dream Planner!</h1>} />
        <Route path="/car-calculator" element={<CarCalculator />} />
        <Route
          path="/retirement-calculator"
          element={<RetirementCalculator />}
        />
      </Routes>
    </Router>
  );
};

export default App;
