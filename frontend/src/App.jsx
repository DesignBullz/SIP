// import React, { useState, useEffect } from "react";
// import {
//   FaCar,
//   FaCalculator,
//   FaClock,
//   FaPercentage,
//   FaMoneyBillWave,
//   FaChartLine,
// } from "react-icons/fa";
// import car from "./assets/c.jpg";

// const CarCalculator = () => {
//   const [years, setYears] = useState(2);
//   const [currentCost, setCurrentCost] = useState(1000000);
//   const [inflationRate, setInflationRate] = useState(2);
//   const [expectedReturns, setExpectedReturns] = useState(10);

//   const [futureCost, setFutureCost] = useState(0);
//   const [sipAmount, setSIPAmount] = useState(0);
//   const [lumpSumAmount, setLumpSumAmount] = useState(0);
//   const [additionalAmount, setAdditionalAmount] = useState(0);

//   const calculate = () => {
//     const futureCostValue =
//       currentCost * Math.pow(1 + inflationRate / 100, years);

//     const monthlyRate = expectedReturns / 12 / 100;
//     const months = years * 12;
//     const sipValue =
//       (futureCostValue * monthlyRate) / (Math.pow(1 + monthlyRate, months) - 1);

//     const lumpSumValue =
//       futureCostValue / Math.pow(1 + expectedReturns / 100, years);

//     const additionalNeeded = futureCostValue - lumpSumValue;

//     setFutureCost(futureCostValue.toFixed(2));
//     setSIPAmount(sipValue.toFixed(2));
//     setLumpSumAmount(lumpSumValue.toFixed(2));
//     setAdditionalAmount(additionalNeeded.toFixed(2));
//   };

//   const handleCurrentCostChange = (e) => {
//     const value = Math.max(100000, Math.min(5000000, e.target.value));
//     setCurrentCost(value);
//   };

//   useEffect(() => {
//     calculate();
//   }, [years, currentCost, inflationRate, expectedReturns]);

//   const renderInputBox = (icon, label, value, onChange, min, max, step = 1) => (
//     <div className="bg-gray-300 px-4 py-2 space-y-2 shadow-sm rounded-xl">
//       {/* Label and Value */}
//       <div className="flex items-center justify-between">
//         <label
//           className="text-xs font-medium text-gray-700 truncate"
//           style={{ maxWidth: "60%" }}
//         >
//           {label}
//         </label>
//         <input
//           type="number"
//           value={value}
//           onChange={onChange}
//           min={min}
//           max={max}
//           step={step}
//           className="w-24 p-1 text-right bg-gray-300 focus:ring-red-500 focus:outline-none text-sm"
//         />
//       </div>

//       {/* Range Slider */}
//       <input
//         type="range"
//         min={min}
//         max={max}
//         step={step}
//         value={value}
//         onChange={onChange}
//         className="w-full bg-white rounded-full appearance-none cursor-pointer"
//         style={{
//           accentColor: "#a91527",
//           height: "3px",
//           borderRadius: "15px",
//         }}
//       />
//     </div>
//   );

//   const statement = (
//     <div className="bg-white p-4 space-y-4 text-center">
//       <div className="text-body text-sm text-gray-700">
//         <p>
//           For your dream car, you may need{" "}
//           <span className="font-bold text-base" style={{ color: "#a91527" }}>
//             ₹{Number(futureCost).toLocaleString()}
//           </span>{" "}
//           in {years} years. Your current investment of{" "}
//           <span className="font-bold text-base" style={{ color: "#a91527" }}>
//             ₹{Number(currentCost).toLocaleString()}
//           </span>{" "}
//           may appreciate to{" "}
//           <span className="font-bold text-base" style={{ color: "#a91527" }}>
//             ₹{Number(lumpSumAmount).toLocaleString()}
//           </span>
//           . You may need to accumulate an additional{" "}
//           <span className="font-bold text-base" style={{ color: "#a91527" }}>
//             ₹{Number(additionalAmount).toLocaleString()}
//           </span>{" "}
//           to fund your dream car.
//         </p>
//       </div>
//       <div className="text-body text-gray-800 font-semibold">
//         To reach your goal, you will need to start an SIP of{" "}
//         <span className="font-bold text-2xl" style={{ color: "#a91527" }}>
//           ₹{Number(sipAmount).toLocaleString()}
//         </span>
//       </div>
//       <div className="text-body text-gray-800 font-semibold">
//         Dream car ka sapna skip nahi, SIP karo.
//       </div>
//     </div>
//   );

//   return (
//     <div
//       className="min-h-screen flex items-center justify-center p-4 sm:p-6"
//       style={{ backgroundColor: "#a91527" }}
//     >
//       <div className="bg-white w-full max-w-7xl rounded-2xl shadow-2xl overflow-hidden grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-8 p-4 sm:p-8">
//         {/* Image Section */}
//         <div className="flex items-center justify-center mb-4 md:mb-0">
//           <div className="w-full max-w-md rounded-xl overflow-hidden shadow-lg">
//             <img
//               src={car}
//               alt="Dream Car"
//               className="w-full h-auto object-cover"
//             />
//           </div>
//         </div>

//         {/* Calculator Section */}
//         <div className="md:col-span-2 space-y-4 sm:space-y-6">
//           {/* Title */}
//           <div className="flex items-center justify-center space-x-3 mb-4">
//             <FaCar
//               className="font-bold text-2xl sm:text-4xl"
//               style={{ color: "#a91527" }}
//             />
//             <h1 className="text-2xl sm:text-4xl font-bold text-gray-800">
//               Dream Car Planner
//             </h1>
//           </div>

//           {/* Input Sections */}
//           <div className="space-y-4 sm:space-y-6">
//             <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
//               {renderInputBox(
//                 <FaClock
//                   className="font-bold text-xl"
//                   style={{ color: "#a91527" }}
//                 />,
//                 "You want to buy in? (years)",
//                 years,
//                 (e) => setYears(Number(e.target.value)),
//                 1,
//                 100
//               )}
//               {renderInputBox(
//                 <FaMoneyBillWave
//                   className="font-bold text-xl"
//                   style={{ color: "#a91527" }}
//                 />,
//                 "Current Cost of your dream car ? (₹)",
//                 currentCost,
//                 handleCurrentCostChange,
//                 100000,
//                 5000000,
//                 10000
//               )}
//             </div>
//             <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
//               {renderInputBox(
//                 <FaPercentage
//                   className="font-bold text-xl"
//                   style={{ color: "#a91527" }}
//                 />,
//                 "Expected Inflation Rate (%)",
//                 inflationRate,
//                 (e) => setInflationRate(Number(e.target.value)),
//                 0,
//                 100
//               )}
//               {renderInputBox(
//                 <FaChartLine
//                   className="font-bold text-xl"
//                   style={{ color: "#a91527" }}
//                 />,
//                 "Expected Returns (%)",
//                 expectedReturns,
//                 (e) => setExpectedReturns(Number(e.target.value)),
//                 1,
//                 100
//               )}
//             </div>
//           </div>

//           {/* Statement Section */}
//           <div className="mt-4 sm:mt-8">{statement}</div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default CarCalculator;

import React, { useState, useEffect } from "react";
import {
  FaCar,
  FaCalculator,
  FaClock,
  FaPercentage,
  FaMoneyBillWave,
  FaChartLine,
} from "react-icons/fa";
import car from "./assets/c.jpg";

const CarCalculator = () => {
  const [years, setYears] = useState(2);
  const [currentCost, setCurrentCost] = useState(1000000);
  const [inflationRate, setInflationRate] = useState(2);
  const [expectedReturns, setExpectedReturns] = useState(10);

  const [futureCost, setFutureCost] = useState(0);
  const [sipAmount, setSIPAmount] = useState(0);
  const [lumpSumAmount, setLumpSumAmount] = useState(0);
  const [additionalAmount, setAdditionalAmount] = useState(0);

  const calculate = () => {
    // Calculate future cost of the car with inflation
    const futureCostValue =
      currentCost * Math.pow(1 + inflationRate / 100, years);

    // Calculate monthly SIP amount
    const monthlyRate = expectedReturns / 12 / 100;
    const months = years * 12;
    const sipValue =
      (futureCostValue * monthlyRate) / (Math.pow(1 + monthlyRate, months) - 1);

    // Correctly calculate appreciated current investment
    const lumpSumValue =
      currentCost * Math.pow(1 + expectedReturns / 100, years);

    // Calculate additional amount needed
    const additionalNeeded = futureCostValue - lumpSumValue;

    // Update state with calculated values
    setFutureCost(futureCostValue.toFixed(2));
    setSIPAmount(sipValue.toFixed(2));
    setLumpSumAmount(lumpSumValue.toFixed(2));
    setAdditionalAmount(additionalNeeded.toFixed(2));
  };

  const handleCurrentCostChange = (e) => {
    const value = Math.max(100000, Math.min(5000000, e.target.value));
    setCurrentCost(value);
  };

  useEffect(() => {
    calculate();
  }, [years, currentCost, inflationRate, expectedReturns]);

  const renderInputBox = (icon, label, value, onChange, min, max, step = 1) => (
    <div className="bg-gray-300 px-4 py-2 space-y-2 shadow-sm rounded-xl">
      {/* Label and Value */}
      <div className="flex items-center justify-between">
        <label
          className="text-xs font-medium text-gray-700 truncate"
          style={{ maxWidth: "60%" }}
        >
          {label}
        </label>
        <input
          type="number"
          value={value}
          onChange={onChange}
          min={min}
          max={max}
          step={step}
          className="w-24 p-1 text-right bg-gray-300 focus:ring-red-500 focus:outline-none text-sm"
        />
      </div>

      {/* Range Slider */}
      <input
        type="range"
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={onChange}
        className="w-full bg-white rounded-full appearance-none cursor-pointer"
        style={{
          accentColor: "#a91527",
          height: "3px",
          borderRadius: "15px",
        }}
      />
    </div>
  );

  const statement = (
    <div className="bg-white p-4 space-y-4 text-center">
      <div className="text-body text-sm text-gray-700">
        <p>
          For your dream car, you may need{" "}
          <span className="font-bold text-base" style={{ color: "#a91527" }}>
            ₹{Number(futureCost).toLocaleString()}
          </span>{" "}
          in {years} years. Your current investment of{" "}
          <span className="font-bold text-base" style={{ color: "#a91527" }}>
            ₹{Number(currentCost).toLocaleString()}
          </span>{" "}
          may appreciate to{" "}
          <span className="font-bold text-base" style={{ color: "#a91527" }}>
            ₹{Number(lumpSumAmount).toLocaleString()}
          </span>
          . You may need to accumulate an additional{" "}
          <span className="font-bold text-base" style={{ color: "#a91527" }}>
            ₹{Number(additionalAmount).toLocaleString()}
          </span>{" "}
          to fund your dream car.
        </p>
      </div>
      <div className="text-body text-gray-800 font-semibold">
        To reach your goal, you will need to start an SIP of{" "}
        <span className="font-bold text-2xl" style={{ color: "#a91527" }}>
          ₹{Number(sipAmount).toLocaleString()}
        </span>
      </div>
      <div className="text-body text-gray-800 font-semibold">
        Dream car ka sapna skip nahi, SIP karo.
      </div>
    </div>
  );

  return (
    <div
      className="min-h-screen flex items-center justify-center p-4 sm:p-6"
      style={{ backgroundColor: "#a91527" }}
    >
      <div className="bg-white w-full max-w-7xl rounded-2xl shadow-2xl overflow-hidden grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-8 p-4 sm:p-8">
        {/* Image Section */}
        <div className="flex items-center justify-center mb-4 md:mb-0">
          <div className="w-full max-w-md rounded-xl overflow-hidden shadow-lg">
            <img
              src={car}
              alt="Dream Car"
              className="w-full h-auto object-cover"
            />
          </div>
        </div>

        {/* Calculator Section */}
        <div className="md:col-span-2 space-y-4 sm:space-y-6">
          {/* Title */}
          <div className="flex items-center justify-center space-x-3 mb-4">
            <FaCar
              className="font-bold text-2xl sm:text-4xl"
              style={{ color: "#a91527" }}
            />
            <h1 className="text-2xl sm:text-4xl font-bold text-gray-800">
              Dream Car Planner
            </h1>
          </div>

          {/* Input Sections */}
          <div className="space-y-4 sm:space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
              {renderInputBox(
                <FaClock
                  className="font-bold text-xl"
                  style={{ color: "#a91527" }}
                />,
                "You want to buy in? (years)",
                years,
                (e) => setYears(Number(e.target.value)),
                1,
                100
              )}
              {renderInputBox(
                <FaMoneyBillWave
                  className="font-bold text-xl"
                  style={{ color: "#a91527" }}
                />,
                "Current Cost of your dream car ? (₹)",
                currentCost,
                handleCurrentCostChange,
                100000,
                5000000,
                10000
              )}
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
              {renderInputBox(
                <FaPercentage
                  className="font-bold text-xl"
                  style={{ color: "#a91527" }}
                />,
                "Expected Inflation Rate (%)",
                inflationRate,
                (e) => setInflationRate(Number(e.target.value)),
                0,
                100
              )}
              {renderInputBox(
                <FaChartLine
                  className="font-bold text-xl"
                  style={{ color: "#a91527" }}
                />,
                "Expected Returns (%)",
                expectedReturns,
                (e) => setExpectedReturns(Number(e.target.value)),
                1,
                100
              )}
            </div>
          </div>

          {/* Statement Section */}
          <div className="mt-4 sm:mt-8">{statement}</div>
        </div>
      </div>
    </div>
  );
};

export default CarCalculator;
