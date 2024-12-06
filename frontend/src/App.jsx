// // // // import { useState } from 'react'
// // // // import reactLogo from './assets/react.svg'
// // // // import viteLogo from '/vite.svg'
// // // // import './App.css'

// // // // function App() {
// // // //   const [count, setCount] = useState(0)

// // // //   return (
// // // //     <>
// // // //       <div>
// // // //         <a href="https://vite.dev" target="_blank">
// // // //           <img src={viteLogo} className="logo" alt="Vite logo" />
// // // //         </a>
// // // //         <a href="https://react.dev" target="_blank">
// // // //           <img src={reactLogo} className="logo react" alt="React logo" />
// // // //         </a>
// // // //       </div>
// // // //       <h1>Vite + React</h1>
// // // //       <div className="card">
// // // //         <button onClick={() => setCount((count) => count + 1)}>
// // // //           count is {count}
// // // //         </button>
// // // //         <p>
// // // //           Edit <code>src/App.jsx</code> and save to test HMR
// // // //         </p>
// // // //       </div>
// // // //       <p className="read-the-docs">
// // // //         Click on the Vite and React logos to learn more
// // // //       </p>
// // // //     </>
// // // //   )
// // // // }

// // // // export default App

// // // import React, { useState } from "react";

// // // function App() {
// // //   const [amountRequired, setAmountRequired] = useState(""); // ₹10,00,000
// // //   const [years, setYears] = useState(""); // 1 Year
// // //   const [currentInvestment, setCurrentInvestment] = useState(""); // ₹1,00,000
// // //   const [sipAmount, setSipAmount] = useState(null);
// // //   const [futureValue, setFutureValue] = useState(null);
// // //   const [additionalAmount, setAdditionalAmount] = useState(null);
// // //   const [adjustedAmountRequired, setAdjustedAmountRequired] = useState(null); // Store adjusted amount

// // //   // SIP Calculation
// // //   const calculateSIP = () => {
// // //     const r = 0.01; // Monthly return rate (1% per month, equivalent to 12% annual return)
// // //     const n = years * 12; // Convert years to months

// // //     const adjustmentRate = 0.07; // 7% increase in required amount
// // //     const adjustedAmount = amountRequired * (1 + adjustmentRate); // Increase the required amount by 7%
// // //     setAdjustedAmountRequired(adjustedAmount); // Store the adjusted amount in the state

// // //     // Calculate future value of the current investment with fixed return rate (12% annual or 1% monthly)
// // //     const futureValueOfInvestment = currentInvestment * (1 + r) ** n;

// // //     // Calculate remaining amount after future value of investment
// // //     const remainingAmount = adjustedAmount - futureValueOfInvestment;

// // //     // SIP formula to accumulate remaining amount
// // //     const sip = (remainingAmount * r) / ((1 + r) ** n - 1);

// // //     // Setting the state for displaying the results
// // //     setFutureValue(futureValueOfInvestment.toFixed(2));
// // //     setAdditionalAmount(remainingAmount.toFixed(2));
// // //     setSipAmount(sip.toFixed(2));
// // //   };

// // //   return (
// // //     <div className="App">
// // //       <h1>Dream Car SIP Calculator</h1>
// // //       <div>
// // //         <label>Money required for your dream car (₹):</label>
// // //         <input
// // //           type="number"
// // //           value={amountRequired}
// // //           onChange={(e) => setAmountRequired(e.target.value)}
// // //         />
// // //       </div>
// // //       <div>
// // //         <label>You want to buy in (Years):</label>
// // //         <input
// // //           type="number"
// // //           value={years}
// // //           onChange={(e) => setYears(e.target.value)}
// // //         />
// // //       </div>
// // //       <div>
// // //         <label>Amount you can invest today (₹):</label>
// // //         <input
// // //           type="number"
// // //           value={currentInvestment}
// // //           onChange={(e) => setCurrentInvestment(e.target.value)}
// // //         />
// // //       </div>
// // //       <button onClick={calculateSIP}>Calculate</button>

// // //       {sipAmount && adjustedAmountRequired && (
// // //         <div>
// // //           <h2>Result:</h2>
// // //           <p>
// // //             For your dream car, you may need ₹{adjustedAmountRequired} in{" "}
// // //             {years} years.
// // //           </p>
// // //           <p>
// // //             Your current investment of ₹{currentInvestment} may appreciate to ₹
// // //             {futureValue}.
// // //           </p>
// // //           <p>
// // //             You may need to accumulate an additional ₹{additionalAmount} to fund
// // //             your dream car.
// // //           </p>
// // //           <p>
// // //             To reach your goal, you will need to start an SIP of ₹{sipAmount}.
// // //           </p>
// // //           <p>Dream car ka sapna skip nahi, SIP karo.</p>
// // //         </div>
// // //       )}
// // //     </div>
// // //   );
// // // }

// // // export default App;

// import React, { useState } from "react";

// const CarCalculator = () => {
//   const [years, setYears] = useState(2);
//   const [currentCost, setCurrentCost] = useState(1000000); // Default 1,000,000
//   const [inflationRate, setInflationRate] = useState(2);
//   const [expectedReturns, setExpectedReturns] = useState(10);

//   const [futureCost, setFutureCost] = useState(0);
//   const [sipAmount, setSIPAmount] = useState(0);
//   const [lumpSumAmount, setLumpSumAmount] = useState(0);

//   // Function to calculate results
//   const calculate = () => {
//     // Future Cost Calculation
//     const futureCostValue =
//       currentCost * Math.pow(1 + inflationRate / 100, years);

//     // SIP Calculation (Monthly SIP)
//     const monthlyRate = expectedReturns / 12 / 100;
//     const months = years * 12;
//     const sipValue =
//       (futureCostValue * monthlyRate) / (Math.pow(1 + monthlyRate, months) - 1);

//     // Lump Sum Calculation (Lumpsum investment today)
//     const lumpSumValue =
//       futureCostValue / Math.pow(1 + expectedReturns / 100, years);

//     setFutureCost(futureCostValue.toFixed(2));
//     setSIPAmount(sipValue.toFixed(2));
//     setLumpSumAmount(lumpSumValue.toFixed(2));
//   };

//   // Handle input change for Current Cost
//   const handleCurrentCostChange = (e) => {
//     const value = Math.max(100000, Math.min(5000000, e.target.value)); // Restrict between ₹1,00,000 and ₹50,00,000
//     setCurrentCost(value);
//   };

//   return (
//     <div className="p-6 space-y-6">
//       <h1 className="text-4xl font-semibold text-center mb-6">
//         Car Planning Calculator
//       </h1>

//       {/* Main Form */}
//       <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
//         {/* Slider & Input for Years */}
//         <div className="space-y-4">
//           <label className="block text-lg">
//             After how many years do you wish to buy your dream car?
//           </label>
//           <input
//             type="range"
//             min="1"
//             max="50"
//             value={years}
//             onChange={(e) => setYears(e.target.value)}
//             className="w-full"
//           />
//           <input
//             type="number"
//             value={years}
//             onChange={(e) => setYears(Number(e.target.value))}
//             className="w-full p-2 border rounded"
//           />
//         </div>

//         {/* Slider & Input for Current Cost */}
//         <div className="space-y-4">
//           <label className="block text-lg">
//             Current Cost of your dream car (in ₹)
//           </label>
//           <input
//             type="range"
//             min="100000"
//             max="5000000"
//             value={currentCost}
//             onChange={(e) => setCurrentCost(e.target.value)}
//             className="w-full"
//           />
//           <input
//             type="number"
//             value={currentCost}
//             onChange={handleCurrentCostChange}
//             className="w-full p-2 border rounded"
//           />
//         </div>

//         {/* Slider & Input for Inflation Rate */}
//         <div className="space-y-4">
//           <label className="block text-lg">Expected Inflation Rate (%)</label>
//           <input
//             type="range"
//             min="0"
//             max="20"
//             value={inflationRate}
//             onChange={(e) => setInflationRate(e.target.value)}
//             className="w-full"
//           />
//           <input
//             type="number"
//             value={inflationRate}
//             onChange={(e) => setInflationRate(Number(e.target.value))}
//             className="w-full p-2 border rounded"
//           />
//         </div>

//         {/* Slider & Input for Expected Returns */}
//         <div className="space-y-4">
//           <label className="block text-lg">Expected Returns (%)</label>
//           <input
//             type="range"
//             min="1"
//             max="20"
//             value={expectedReturns}
//             onChange={(e) => setExpectedReturns(e.target.value)}
//             className="w-full"
//           />
//           <input
//             type="number"
//             value={expectedReturns}
//             onChange={(e) => setExpectedReturns(Number(e.target.value))}
//             className="w-full p-2 border rounded"
//           />
//         </div>
//       </div>

//       {/* Calculate Button */}
//       <div className="text-center">
//         <button
//           onClick={calculate}
//           className="px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition"
//         >
//           Calculate
//         </button>
//       </div>

//       {/* Results */}
//       <div className="mt-6 space-y-4">
//         <h2 className="text-2xl font-semibold">Car Planning Calculation</h2>
//         <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
//           <div className="text-center">
//             <p>After Years, Your dream Car cost would be</p>
//             <p className="text-xl font-bold">₹ {futureCost}</p>
//           </div>
//           <div className="text-center">
//             <p>Planning Through SIP</p>
//             <p className="text-xl font-bold">₹ {sipAmount}</p>
//           </div>
//           <div className="text-center">
//             <p>Planning Through Lump Sum</p>
//             <p className="text-xl font-bold">₹ {lumpSumAmount}</p>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default CarCalculator;

import React, { useState } from "react";

const CarCalculator = () => {
  const [years, setYears] = useState(2);
  const [currentCost, setCurrentCost] = useState(1000000); // Default 1,000,000
  const [inflationRate, setInflationRate] = useState(2);
  const [expectedReturns, setExpectedReturns] = useState(10);

  const [futureCost, setFutureCost] = useState(0);
  const [sipAmount, setSIPAmount] = useState(0);
  const [lumpSumAmount, setLumpSumAmount] = useState(0);
  const [additionalAmount, setAdditionalAmount] = useState(0); // To store additional amount needed for the goal

  // Function to calculate results
  const calculate = () => {
    // Future Cost Calculation
    const futureCostValue =
      currentCost * Math.pow(1 + inflationRate / 100, years);

    // SIP Calculation (Monthly SIP)
    const monthlyRate = expectedReturns / 12 / 100;
    const months = years * 12;
    const sipValue =
      (futureCostValue * monthlyRate) / (Math.pow(1 + monthlyRate, months) - 1);

    // Lump Sum Calculation (Lumpsum investment today)
    const lumpSumValue =
      futureCostValue / Math.pow(1 + expectedReturns / 100, years);

    // Calculate additional amount needed if the user already has an amount to invest
    const additionalNeeded = futureCostValue - lumpSumValue;

    setFutureCost(futureCostValue.toFixed(2));
    setSIPAmount(sipValue.toFixed(2));
    setLumpSumAmount(lumpSumValue.toFixed(2));
    setAdditionalAmount(additionalNeeded.toFixed(2));
  };

  // Handle input change for Current Cost
  const handleCurrentCostChange = (e) => {
    const value = Math.max(100000, Math.min(5000000, e.target.value)); // Restrict between ₹1,00,000 and ₹50,00,000
    setCurrentCost(value);
  };

  // Creating the statement for output
  const statement = `For your dream car, you may need ₹${futureCost} in ${years} years. Your current investment of ₹${lumpSumAmount} may appreciate to ₹${sipAmount}. You may need to accumulate an additional ₹${additionalAmount} to fund your dream car. To reach your goal, you will need to start an SIP of ₹${sipAmount}. Dream car ka sapna skip nahi, SIP karo.`;

  return (
    <div className="container mx-auto px-6 py-12">
      <div className="flex flex-col sm:flex-row justify-center items-center space-y-6 sm:space-y-0 sm:space-x-6">
        {/* Left Section - Image */}
        <div className="flex-1 flex justify-center items-center">
          <img
            src="https://via.placeholder.com/400" // Replace with your own image
            alt="Dream Car"
            className="rounded-lg shadow-xl w-full sm:w-[400px]"
          />
        </div>

        {/* Right Section - Car Planning Calculator */}
        <div className="flex-1 space-y-6 max-w-lg mx-auto">
          <h1 className="text-4xl font-semibold text-center mb-6">
            Car Planning Calculator
          </h1>

          {/* Main Form */}
          <div className="space-y-6">
            {/* Row for Two Sliders and Two Inputs */}
            <div className="flex space-x-6">
              {/* Slider & Input for Years */}
              <div className="flex-1">
                <label className="block text-lg">
                  After how many years do you wish to buy your dream car?
                </label>
                <input
                  type="range"
                  min="1"
                  max="50"
                  value={years}
                  onChange={(e) => setYears(e.target.value)}
                  className="w-full"
                />
                <input
                  type="number"
                  value={years}
                  onChange={(e) => setYears(Number(e.target.value))}
                  className="w-full p-2 border rounded mt-2"
                />
              </div>

              {/* Slider & Input for Current Cost */}
              <div className="flex-1">
                <label className="block text-lg">
                  Current Cost of your dream car (in ₹)
                </label>
                <input
                  type="range"
                  min="100000"
                  max="5000000"
                  value={currentCost}
                  onChange={(e) => setCurrentCost(e.target.value)}
                  className="w-full"
                />
                <input
                  type="number"
                  value={currentCost}
                  onChange={handleCurrentCostChange}
                  className="w-full p-2 border rounded mt-2"
                />
              </div>
            </div>

            {/* Row for Inflation Rate and Expected Returns */}
            <div className="flex space-x-6">
              {/* Slider & Input for Inflation Rate */}
              <div className="flex-1">
                <label className="block text-lg">
                  Expected Inflation Rate (%)
                </label>
                <input
                  type="range"
                  min="0"
                  max="20"
                  value={inflationRate}
                  onChange={(e) => setInflationRate(e.target.value)}
                  className="w-full"
                />
                <input
                  type="number"
                  value={inflationRate}
                  onChange={(e) => setInflationRate(Number(e.target.value))}
                  className="w-full p-2 border rounded mt-2"
                />
              </div>

              {/* Slider & Input for Expected Returns */}
              <div className="flex-1">
                <label className="block text-lg">Expected Returns (%)</label>
                <input
                  type="range"
                  min="1"
                  max="20"
                  value={expectedReturns}
                  onChange={(e) => setExpectedReturns(e.target.value)}
                  className="w-full"
                />
                <input
                  type="number"
                  value={expectedReturns}
                  onChange={(e) => setExpectedReturns(Number(e.target.value))}
                  className="w-full p-2 border rounded mt-2"
                />
              </div>
            </div>
          </div>

          {/* Calculate Button */}
          <div className="text-center">
            <button
              onClick={calculate}
              className="px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition"
            >
              Calculate
            </button>
          </div>

          {/* Display the Statement */}
          <div className="mt-6">
            <p className="text-xl font-semibold text-center">{statement}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CarCalculator;
