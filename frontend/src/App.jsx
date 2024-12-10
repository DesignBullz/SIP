// import React, { useState, useEffect } from "react";
// import { FaCar } from "react-icons/fa";
// import car from "./assets/c.jpg";

// const CarCalculator = () => {
//   const [years, setYears] = useState(5); // Default years set to 5
//   const [currentCost, setCurrentCost] = useState(1000000);
//   const [amountInvestedToday, setAmountInvestedToday] = useState(100000);
//   const [disclaimerReturns, setDisclaimerReturns] = useState(12); // Default return rate 12%
//   const [disclaimerInflation, setDisclaimerInflation] = useState(7); // Default inflation rate 7%
//   const [isFullDisclaimer, setIsFullDisclaimer] = useState(false);

//   const [futureCost, setFutureCost] = useState(0);
//   const [sipAmount, setSIPAmount] = useState(0);
//   const [additionalAmount, setAdditionalAmount] = useState(0);

//   const calculate = () => {
//     // Adjusted return and inflation rates
//     const expectedReturns = disclaimerReturns;
//     const inflationRate = disclaimerInflation;

//     // Calculate the future cost of the car after inflation
//     const futureCostValue =
//       currentCost * Math.pow(1 + inflationRate / 100, years);

//     // Calculate the future value of the current investment at 13% return
//     const lumpSumValue =
//       amountInvestedToday * Math.pow(1 + expectedReturns / 100, years);

//     // Calculate the SIP required to meet the future cost
//     const monthlyRate = expectedReturns / 12 / 100;
//     const months = years * 12;

//     // Adjusted SIP calculation
//     const sipValue =
//       (futureCostValue - lumpSumValue) *
//       (monthlyRate / (Math.pow(1 + monthlyRate, months) - 1));

//     // Calculate the additional amount needed
//     const additionalNeeded = futureCostValue - lumpSumValue;

//     // Update state with the calculated values and rounding for formatting
//     setFutureCost(Math.round(futureCostValue)); // Rounded to nearest integer
//     setSIPAmount(Math.round(sipValue)); // Rounded SIP to nearest integer
//     setAdditionalAmount(Math.round(additionalNeeded)); // Rounded additional amount
//   };

//   useEffect(() => {
//     calculate();
//   }, [
//     years,
//     currentCost,
//     amountInvestedToday,
//     disclaimerReturns,
//     disclaimerInflation,
//   ]);

//   const renderInputBox = (label, value, onChange, min, max, step = 1) => (
//     <div className="bg-gray-300 px-4 py-2 space-y-2 shadow-sm rounded-xl">
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

//       <input
//         type="range"
//         min={min}
//         max={max}
//         step={step}
//         value={value}
//         onChange={onChange}
//         className="w-full bg-white rounded-full appearance-none cursor-pointer"
//         style={{
//           accentColor: "#014a94",
//           height: "3px",
//           borderRadius: "15px",
//         }}
//       />
//     </div>
//   );

//   const renderDisclaimer = () => {
//     const disclaimerStyle = "text-xs text-gray-600"; // Smaller text style

//     const shortDisclaimer = (
//       <div className={`w-full text-left ${disclaimerStyle}`}>
//         <p className="mb-2">
//           The above investment simulation, based on assumed rate of return(s) of{" "}
//           <select
//             value={disclaimerReturns}
//             onChange={(e) => setDisclaimerReturns(Number(e.target.value))}
//             className="mx-1 text-xs p-1 border rounded"
//           >
//             {Array.from({ length: 12 }, (_, index) => index + 2).map((rate) => (
//               <option key={rate} value={rate}>
//                 {rate}%
//               </option>
//             ))}
//           </select>{" "}
//           and inflation rate of{" "}
//           <select
//             value={disclaimerInflation}
//             onChange={(e) => setDisclaimerInflation(Number(e.target.value))}
//             className="mx-1 text-xs p-1 border rounded"
//           >
//             {Array.from({ length: 25 }, (_, index) => index + 1).map((rate) => (
//               <option key={rate} value={rate}>
//                 {rate}%
//               </option>
//             ))}
//           </select>
//           , is for illustration purpose only and should not be construed as a
//           promise on minimum returns and safeguard of capital. SIP does not
//           assure a profit or guarantee protection against loss in a declining
//           market.{" "}
//           <span
//             onClick={() => setIsFullDisclaimer(true)}
//             className=" underline cursor-pointer font-semibold"
//             style={{ color: "#014a94" }}
//           >
//             Read More
//           </span>
//         </p>
//       </div>
//     );

//     const fullDisclaimer = (
//       <div className={`w-full text-left space-y-2 ${disclaimerStyle}`}>
//         <p className="mb-2">
//           The above investment simulation, based on assumed rate of return(s) of{" "}
//           <select
//             value={disclaimerReturns}
//             onChange={(e) => setDisclaimerReturns(Number(e.target.value))}
//             className="mx-1 text-xs p-1 border rounded"
//           >
//             {Array.from({ length: 12 }, (_, index) => index + 2).map((rate) => (
//               <option key={rate} value={rate}>
//                 {rate}%
//               </option>
//             ))}
//           </select>{" "}
//           and inflation rate of{" "}
//           <select
//             value={disclaimerInflation}
//             onChange={(e) => setDisclaimerInflation(Number(e.target.value))}
//             className="mx-1 text-xs p-1 border rounded"
//           >
//             {Array.from({ length: 25 }, (_, index) => index + 1).map((rate) => (
//               <option key={rate} value={rate}>
//                 {rate}%
//               </option>
//             ))}
//           </select>
//           , is for illustration purpose only and should not be construed as a
//           promise on minimum returns and safeguard of capital.SIP Calculator is
//           designed to assist you in determining the appropriate amount. SIP
//           calculator alone are not sufficient and shouldn't be used for the
//           development or implementation of an investment strategy. KMAMC makes
//           no warranty about the accuracy of the calculators/reckoners. The
//           examples do not purport to represent the performance of any security
//           or Investments. In view of Individual nature of tax consequences, each
//           Investor is advised to consult his her own professional tax advisor.
//         </p>
//         <div className="text-right">
//           <span
//             onClick={() => setIsFullDisclaimer(false)}
//             className=" underline cursor-pointer font-semibold"
//             style={{ color: "#014a94" }}
//           >
//             Read Less
//           </span>
//         </div>
//       </div>
//     );

//     return isFullDisclaimer ? fullDisclaimer : shortDisclaimer;
//   };

//   const statement = (
//     <div className="bg-white p-4 space-y-4 text-center">
//       <div className="text-body text-sm text-gray-700">
//         <p>
//           For your dream car, you may need{" "}
//           <span className="font-bold text-base" style={{ color: "#014a94" }}>
//             ₹{Number(futureCost).toLocaleString()}
//           </span>{" "}
//           in {years} years. Your current investment of{" "}
//           <span className="font-bold text-base" style={{ color: "#014a94" }}>
//             ₹{Number(amountInvestedToday).toLocaleString()}
//           </span>{" "}
//           may grow to{" "}
//           <span className="font-bold text-base" style={{ color: "#014a94" }}>
//             ₹
//             {Number(
//               (amountInvestedToday * Math.pow(1 + 0.12, years)).toFixed(2)
//             )}
//           </span>
//           . You may need to accumulate an additional{" "}
//           <span className="font-bold text-base" style={{ color: "#014a94" }}>
//             ₹{Number(additionalAmount).toLocaleString()}
//           </span>{" "}
//           to fund your dream car.
//         </p>
//       </div>
//       <div className="text-body text-gray-800 font-semibold">
//         To reach your goal, you will need to start an SIP of{" "}
//         <span className="font-bold text-base" style={{ color: "#014a94" }}>
//           ₹{Number(sipAmount).toLocaleString()}
//         </span>
//       </div>
//       {/* New Line */}
//       <div className="text-body font-semibold text-gray-800 mt-4">
//         Dream car ka sapna skip nahi, SIP karo.
//       </div>
//       {/* Callback Button */}
//       <div className="mt-4">
//         <button
//           onClick={() => alert("Request for Callback")}
//           className="px-5 py-1  text-white text-body rounded-md "
//           style={{ backgroundColor: "#014a94" }}
//         >
//           REQUEST A CALL BACK
//         </button>
//       </div>
//     </div>
//   );

//   return (
//     <div
//       className="min-h-screen flex items-center justify-center p-4 sm:p-6"
//       style={{ backgroundColor: "#014a94" }}
//     >
//       <div className="bg-white w-full max-w-7xl rounded-2xl shadow-2xl overflow-hidden grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-8 p-4 sm:p-8">
//         <div className="flex items-center justify-center mb-4 md:mb-0">
//           <div className="w-full max-w-md rounded-xl overflow-hidden shadow-lg">
//             <img
//               src={car}
//               alt="Dream Car"
//               className="w-full h-auto object-cover"
//             />
//           </div>
//         </div>

//         <div className="md:col-span-2 space-y-4 sm:space-y-6">
//           <div className="flex items-center justify-center space-x-3 mb-4">
//             <FaCar
//               className="font-bold text-2xl sm:text-4xl"
//               style={{ color: "#014a94" }}
//             />
//             <h1 className="text-2xl sm:text-4xl font-bold text-gray-800">
//               Dream Car Planner
//             </h1>
//           </div>
//           <div className="space-y-4 sm:space-y-6">
//             <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
//               {renderInputBox(
//                 "Current Cost of your dream car? (₹)",
//                 currentCost,
//                 (e) => setCurrentCost(Number(e.target.value)),
//                 100000,
//                 5000000,
//                 10000
//               )}
//               {renderInputBox(
//                 "You want to buy in? (years)",
//                 years,
//                 (e) => setYears(Number(e.target.value)),
//                 1,
//                 100
//               )}
//             </div>
//             <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
//               {renderInputBox(
//                 "Amount you can invest today (₹)",
//                 amountInvestedToday,
//                 (e) => setAmountInvestedToday(Number(e.target.value)),
//                 0,
//                 currentCost,
//                 1000
//               )}
//             </div>
//           </div>
//           {statement}
//           {renderDisclaimer()}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default CarCalculator;

import React, { useState, useEffect } from "react";
import { FaCar } from "react-icons/fa";
import car from "./assets/c.jpg";

const CarCalculator = () => {
  const [years, setYears] = useState(5); // Default years set to 5
  const [currentCost, setCurrentCost] = useState(1000000);
  const [amountInvestedToday, setAmountInvestedToday] = useState(100000);
  const [disclaimerReturns, setDisclaimerReturns] = useState(12); // Default return rate 12%
  const [disclaimerInflation, setDisclaimerInflation] = useState(7); // Default inflation rate 7%
  const [isFullDisclaimer, setIsFullDisclaimer] = useState(false);

  const [futureCost, setFutureCost] = useState(0);
  const [sipAmount, setSIPAmount] = useState(0);
  const [additionalAmount, setAdditionalAmount] = useState(0);

  const calculate = () => {
    // Adjusted return and inflation rates
    const expectedReturns = disclaimerReturns;
    const inflationRate = disclaimerInflation;

    // Calculate the future cost of the car after inflation
    const futureCostValue =
      currentCost * Math.pow(1 + inflationRate / 100, years);

    // Calculate the future value of the current investment at 13% return
    const lumpSumValue =
      amountInvestedToday * Math.pow(1 + expectedReturns / 100, years);

    // Calculate the SIP required to meet the future cost
    const monthlyRate = expectedReturns / 12 / 100;
    const months = years * 12;

    // Adjusted SIP calculation
    const sipValue =
      (futureCostValue - lumpSumValue) *
      (monthlyRate / (Math.pow(1 + monthlyRate, months) - 1));

    // Calculate the additional amount needed
    const additionalNeeded = futureCostValue - lumpSumValue;

    // Update state with the calculated values and rounding for formatting
    setFutureCost(Math.round(futureCostValue)); // Rounded to nearest integer
    setSIPAmount(Math.round(sipValue)); // Rounded SIP to nearest integer
    setAdditionalAmount(Math.round(additionalNeeded)); // Rounded additional amount
  };

  useEffect(() => {
    calculate();
  }, [
    years,
    currentCost,
    amountInvestedToday,
    disclaimerReturns,
    disclaimerInflation,
  ]);

  const renderInputBox = (label, value, onChange, min, max, step = 1) => (
    <div className="bg-gray-300 px-4 py-2 space-y-2 shadow-sm rounded-xl">
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

      <input
        type="range"
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={onChange}
        className="w-full bg-white rounded-full appearance-none cursor-pointer"
        style={{
          accentColor: "#014a94",
          height: "3px",
          borderRadius: "15px",
        }}
      />
    </div>
  );

  const renderDisclaimer = () => {
    const disclaimerStyle = "text-xs text-gray-600"; // Smaller text style

    const shortDisclaimer = (
      <div className={`w-full text-left ${disclaimerStyle}`}>
        <p className="mb-2">
          The above investment simulation, based on assumed rate of return(s) of{" "}
          <select
            value={disclaimerReturns}
            onChange={(e) => setDisclaimerReturns(Number(e.target.value))}
            className="mx-1 text-xs p-1 border rounded"
          >
            {Array.from({ length: 20 }, (_, index) => index + 6).map((rate) => (
              <option key={rate} value={rate}>
                {rate}%
              </option>
            ))}
          </select>{" "}
          and inflation rate of{" "}
          <select
            value={disclaimerInflation}
            onChange={(e) => setDisclaimerInflation(Number(e.target.value))}
            className="mx-1 text-xs p-1 border rounded"
          >
            {Array.from({ length: 7 }, (_, index) => index + 4).map((rate) => (
              <option key={rate} value={rate}>
                {rate}%
              </option>
            ))}
          </select>
          , is for illustration purpose only and should not be construed as a
          promise on minimum returns and safeguard of capital. SIP does not
          assure a profit or guarantee protection against loss in a declining
          market.{" "}
          <span
            onClick={() => setIsFullDisclaimer(true)}
            className=" underline cursor-pointer font-semibold"
            style={{ color: "#014a94" }}
          >
            Read More
          </span>
        </p>
      </div>
    );

    const fullDisclaimer = (
      <div className={`w-full text-left space-y-2 ${disclaimerStyle}`}>
        <p className="mb-2">
          The above investment simulation, based on assumed rate of return(s) of{" "}
          <select
            value={disclaimerReturns}
            onChange={(e) => setDisclaimerReturns(Number(e.target.value))}
            className="mx-1 text-xs p-1 border rounded"
          >
            {Array.from({ length: 12 }, (_, index) => index + 2).map((rate) => (
              <option key={rate} value={rate}>
                {rate}%
              </option>
            ))}
          </select>{" "}
          and inflation rate of{" "}
          <select
            value={disclaimerInflation}
            onChange={(e) => setDisclaimerInflation(Number(e.target.value))}
            className="mx-1 text-xs p-1 border rounded"
          >
            {Array.from({ length: 25 }, (_, index) => index + 1).map((rate) => (
              <option key={rate} value={rate}>
                {rate}%
              </option>
            ))}
          </select>
          , is for illustration purpose only and should not be construed as a
          promise on minimum returns and safeguard of capital.SIP Calculator is
          designed to assist you in determining the appropriate amount. SIP
          calculator alone are not sufficient and shouldn't be used for the
          development or implementation of an investment strategy. KMAMC makes
          no warranty about the accuracy of the calculators/reckoners. The
          examples do not purport to represent the performance of any security
          or Investments. In view of Individual nature of tax consequences, each
          Investor is advised to consult his her own professional tax advisor.
        </p>
        <div className="text-right">
          <span
            onClick={() => setIsFullDisclaimer(false)}
            className=" underline cursor-pointer font-semibold"
            style={{ color: "#014a94" }}
          >
            Read Less
          </span>
        </div>
      </div>
    );

    return isFullDisclaimer ? fullDisclaimer : shortDisclaimer;
  };

  const statement = (
    <div className="bg-white p-4 space-y-4 text-center">
      <div className="text-body text-sm text-gray-700">
        <p>
          For your dream car, you may need{" "}
          <span className="font-bold text-base" style={{ color: "#014a94" }}>
            ₹{Number(futureCost).toLocaleString()}
          </span>{" "}
          in {years} years. Your current investment of{" "}
          <span className="font-bold text-base" style={{ color: "#014a94" }}>
            ₹{Number(amountInvestedToday).toLocaleString()}
          </span>{" "}
          may grow to{" "}
          <span className="font-bold text-base" style={{ color: "#014a94" }}>
            ₹{Number((futureCost - additionalAmount).toFixed(2))}
          </span>
          . You may need to accumulate an additional{" "}
          <span className="font-bold text-base" style={{ color: "#014a94" }}>
            ₹{Number(additionalAmount).toLocaleString()}
          </span>{" "}
          to fund your dream car.
        </p>
      </div>
      <div className="text-body text-gray-800 font-semibold">
        To reach your goal, you will need to start an SIP of{" "}
        <span className="font-bold text-base" style={{ color: "#014a94" }}>
          ₹{Number(sipAmount).toLocaleString()}
        </span>
      </div>
      {/* New Line */}
      <div className="text-body font-semibold text-gray-800 mt-4">
        Dream car ka sapna skip nahi, SIP karo.
      </div>
      {/* Callback Button */}
      <div className="mt-4">
        <button
          onClick={() => alert("Request for Callback")}
          className="px-5 py-1  text-white text-body rounded-md "
          style={{ backgroundColor: "#014a94" }}
        >
          REQUEST A CALL BACK
        </button>
      </div>
    </div>
  );

  return (
    <div
      className="min-h-screen flex items-center justify-center p-4 sm:p-6"
      style={{ backgroundColor: "#014a94" }}
    >
      <div className="bg-white w-full max-w-7xl rounded-2xl shadow-2xl overflow-hidden grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-8 p-4 sm:p-8">
        <div className="flex items-center justify-center mb-4 md:mb-0">
          <div className="w-full max-w-md rounded-xl overflow-hidden shadow-lg">
            <img
              src={car}
              alt="Dream Car"
              className="w-full h-auto object-cover"
            />
          </div>
        </div>

        <div className="md:col-span-2 space-y-4 sm:space-y-6">
          <div className="flex items-center justify-center space-x-3 mb-4">
            <FaCar
              className="font-bold text-2xl sm:text-4xl"
              style={{ color: "#014a94" }}
            />
            <h1 className="text-2xl sm:text-4xl font-bold text-gray-800">
              Dream Car Planner
            </h1>
          </div>
          <div className="space-y-4 sm:space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
              {renderInputBox(
                "Current Cost of your dream car? (₹)",
                currentCost,
                (e) => setCurrentCost(Number(e.target.value)),
                100000,
                5000000,
                10000
              )}
              {renderInputBox(
                "You want to buy in? (years)",
                years,
                (e) => setYears(Number(e.target.value)),
                1,
                100
              )}
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
              {renderInputBox(
                "Amount you can invest today (₹)",
                amountInvestedToday,
                (e) => setAmountInvestedToday(Number(e.target.value)),
                0,
                currentCost,
                1000
              )}
            </div>
          </div>
          {statement}
          {renderDisclaimer()}
        </div>
      </div>
    </div>
  );
};

export default CarCalculator;
