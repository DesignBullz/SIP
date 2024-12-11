import React, { useState, useEffect } from "react";
import { FaUmbrellaBeach } from "react-icons/fa"; // Importing an example icon
import retirementPlan from "../assets/r.jpg";

const RetirementCalculator = () => {
  const [currentAge, setCurrentAge] = useState(44);
  const [retirementAge, setRetirementAge] = useState(60);
  const [lifeExpectancy, setLifeExpectancy] = useState(80);
  const [monthlyExpense, setMonthlyExpense] = useState(100000);
  const [amountInvestedToday, setAmountInvestedToday] = useState(150000);
  const [disclaimerReturns, setDisclaimerReturns] = useState(12);
  const [disclaimerInflation, setDisclaimerInflation] = useState(7);
  const [isFullDisclaimer, setIsFullDisclaimer] = useState(false);

  const [requiredCorpus, setRequiredCorpus] = useState(0);
  const [futureValue, setFutureValue] = useState(0);
  const [additionalAmount, setAdditionalAmount] = useState(0);
  const [sipAmount, setSIPAmount] = useState(0);

  useEffect(() => {
    calculateRetirement();
  }, [
    currentAge,
    retirementAge,
    lifeExpectancy,
    monthlyExpense,
    amountInvestedToday,
    disclaimerReturns,
    disclaimerInflation,
  ]);

  // const calculateRetirement = () => {
  //   const yearsToRetirement = retirementAge - currentAge;
  //   const yearsInRetirement = lifeExpectancy - retirementAge;
  //   const corpusNeeded = monthlyExpense * 12 * yearsInRetirement;
  //   const futureValue =
  //     amountInvestedToday *
  //     Math.pow(1 + disclaimerReturns / 100, yearsToRetirement);

  //   const additionalNeeded = corpusNeeded - futureValue;

  //   const monthlyRate = disclaimerReturns / 12 / 100;
  //   const months = yearsToRetirement * 12;

  //   const sipValue =
  //     additionalNeeded *
  //     (monthlyRate / (Math.pow(1 + monthlyRate, months) - 1));

  //   setRequiredCorpus(corpusNeeded);
  //   setFutureValue(futureValue);
  //   setAdditionalAmount(additionalNeeded);
  //   setSIPAmount(sipValue);
  // };

  const calculateRetirement = () => {
    const yearsToRetirement = retirementAge - currentAge;
    const yearsInRetirement = lifeExpectancy - retirementAge;

    // Adjust the monthly expense for inflation over the years to retirement
    const adjustedMonthlyExpense =
      monthlyExpense *
      Math.pow(1 + disclaimerInflation / 100, yearsToRetirement);
    console.log(adjustedMonthlyExpense);

    // Adjusted annual expense
    // const adjustedAnnualExpense = adjustedMonthlyExpense * 12;

    // Total corpus needed for retirement
    const corpusNeeded = adjustedMonthlyExpense / 0.01;

    // Future value of the current investment after growth (disclaimerReturns rate of return)
    const futureValue =
      amountInvestedToday *
      Math.pow(1 + disclaimerReturns / 100, yearsToRetirement);

    // Additional amount needed after considering the future value of the current investment
    const additionalNeeded = corpusNeeded - futureValue;

    // Monthly return rate for SIP calculation
    const monthlyRate = disclaimerReturns / 12 / 100;
    const months = yearsToRetirement * 12;

    // SIP calculation to accumulate the additional amount needed
    const sipValue =
      additionalNeeded *
      (monthlyRate / (Math.pow(1 + monthlyRate, months) - 1));

    // Update the state with the calculated values
    setRequiredCorpus(corpusNeeded);
    setFutureValue(futureValue);
    setAdditionalAmount(additionalNeeded);
    setSIPAmount(sipValue);
  };

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
        style={{ accentColor: "#014a94", height: "3px", borderRadius: "15px" }}
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
          For your dream retirement plan, you may require a corpus of{" "}
          <span className="font-bold text-base" style={{ color: "#014a94" }}>
            ₹{Number(requiredCorpus).toLocaleString()}
          </span>{" "}
          in {retirementAge - currentAge} years. Your current investment of{" "}
          <span className="font-bold text-base" style={{ color: "#014a94" }}>
            ₹{Number(amountInvestedToday).toLocaleString()}
          </span>{" "}
          may grow to{" "}
          <span className="font-bold text-base" style={{ color: "#014a94" }}>
            ₹{Number(futureValue).toLocaleString()}
          </span>
          . You may need to accumulate an additional{" "}
          <span className="font-bold text-base" style={{ color: "#014a94" }}>
            ₹{Number(additionalAmount).toLocaleString()}
          </span>{" "}
          to fund your dream retirement.
        </p>
      </div>
      <div className="text-body text-gray-800 font-semibold">
        To reach your goal, you will need to start an SIP of{" "}
        <span className="font-bold text-base" style={{ color: "#014a94" }}>
          ₹{Number(sipAmount).toLocaleString()}
        </span>
      </div>
      <div className="text-body font-semibold text-gray-800 mt-4">
        Early Retirement ka sapna skip nahi, SIP karo.
      </div>
      <div className="mt-4">
        <button
          onClick={() => alert("Request for Callback")}
          className="px-5 py-1 text-white text-body rounded-md"
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
              src={retirementPlan}
              alt="Retirement Plan"
              className="w-full h-auto object-cover"
            />
          </div>
        </div>

        <div className="md:col-span-2 space-y-4 sm:space-y-6">
          <h1 className="text-2xl sm:text-4xl font-bold text-gray-800 text-center flex items-center justify-center gap-2">
            <FaUmbrellaBeach style={{ color: "#014a94" }} />
            Retirement Planner
          </h1>

          <div className="space-y-4 sm:space-y-6 grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-4">
              {renderInputBox(
                "Your current age",
                currentAge,
                (e) => setCurrentAge(Number(e.target.value)),
                18,
                100
              )}
              {renderInputBox(
                "Your retirement age",
                retirementAge,
                (e) => setRetirementAge(Number(e.target.value)),
                18,
                100
              )}
              {renderInputBox(
                "Your expectancy",
                lifeExpectancy,
                (e) => setLifeExpectancy(Number(e.target.value)),
                18,
                100
              )}
            </div>

            <div className="space-y-4">
              {renderInputBox(
                "Your Monthly expense",
                monthlyExpense,
                (e) => setMonthlyExpense(Number(e.target.value)),
                1000,
                100000
              )}
              {renderInputBox(
                "Amount you can invest today",
                amountInvestedToday,
                (e) => setAmountInvestedToday(Number(e.target.value)),
                0,
                1000000
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

export default RetirementCalculator;
