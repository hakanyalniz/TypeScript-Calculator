"use client";

import { useState } from "react";
import ButtonWithSound from "./components/button/button";

export default function Home() {
  const [calcResult, setCalcResult] = useState<number | null>(null);
  const [calculatorString, setCalculatorString] = useState<string>("");

  // So, 5+-3 is equal to 5-3
  // Except in 5*-2, where in behaves as 5*(-2)
  function normalizeOperators(expression: string) {
    // Replace consecutive operators with the last one, while handling '-' correctly
    expression = expression.replace(/(\+|\*|\/)(?=\+|\*|\/)/g, ""); // Handle +, *, /

    // Handle cases where '-' is involved with other operators
    expression = expression.replace(/(\-)(?=\+|\*|\/)/g, ""); // Remove '-' if followed by +, * or /

    return expression;
  }

  const normalizedString = normalizeOperators(calculatorString);

  const calculate = () => {
    // Extract numbers and operators using regex
    const numbers = normalizedString.match(/(\d+(\.\d+)?)/g)?.map(Number) || []; // Use optional chaining and fallback to an empty array
    const operators = normalizedString.match(/[\+\-\*\/]+(?=\d|\s*\d)/g) || [];

    // Perform the operations respecting precedence
    // Handle *, / first
    if (operators) {
      for (let i = 0; i < operators.length; i++) {
        if (operators[i] === "*-" || operators[i] === "/-") {
          const result =
            operators[i] === "*-"
              ? numbers[i] * -numbers[i + 1]
              : numbers[i] / -numbers[i + 1];
          numbers.splice(i, 2, result); // Replace the two numbers with the result
          operators.splice(i, 1); // Remove the operator
          i--; // Re-check the same index
        } else if (operators[i] === "*" || operators[i] === "/") {
          const result =
            operators[i] === "*"
              ? numbers[i] * numbers[i + 1]
              : numbers[i] / numbers[i + 1];
          numbers.splice(i, 2, result); // Replace the two numbers with the result
          operators.splice(i, 1); // Remove the operator
          i--; // Re-check the same index
        }
      }

      // Handle +, - next
      let result = numbers[0];
      for (let i = 0; i < operators.length; i++) {
        if (
          operators[i] === "+" ||
          operators[i] === "-+" ||
          operators[i] === "*+"
        ) {
          result += numbers[i + 1];
        } else if (operators[i] === "-" || operators[i] === "+-") {
          result -= numbers[i + 1];
        }
      }
      setCalcResult(result);
    }
  };

  // Adjust what gets seen on the display
  let screenDisplay;
  if (calcResult === 0) {
    screenDisplay = 0;
  } else if (calculatorString) {
    screenDisplay = calculatorString;
  } else if (calcResult) {
    screenDisplay = calcResult;
  } else {
    screenDisplay = "0";
  }

  return (
    <div className="flex items-center justify-center min-h-screen font-[family-name:var(--font-geist-sans)]">
      <div
        className="border-8 border-white border-b-slate-400 h-[410px] w-[252px] shadow-inner"
        id="calculator-container"
        style={{ boxShadow: "rgba(0, 0, 0, 0.2) 0px 0px 10px 5px" }}
      >
        <div
          className="border-4 border-gray-800 border-b-black h-full bg-[#1a3942]"
          id="calculator-inner"
          style={{ boxShadow: "rgba(0, 0, 0, 0.3) 0px 0px 10px 5px" }}
        >
          <div
            className="h-10 bg-neutral-900"
            style={{ boxShadow: "inset rgba(0, 0, 0, 0.3) 0px 0px 10px 5px" }}
          ></div>
          <div
            className="border-y-8 border-white h-20 bg-slate-900 pt-8 pr-2 text-right"
            style={{ boxShadow: "inset rgba(0, 0, 0, 0.3) 0px 0px 10px 5px" }}
            id="result-screen"
          >
            {screenDisplay}
          </div>
          <div
            className="font-[family-name:var(--font-nova-mono)] bg-[#407c8f]"
            id="button-pad"
            style={{ boxShadow: "inset rgba(0, 0, 0, 0.2) 0px 0px 10px 5px" }}
          >
            {/* The className here below belongs to the props passed onto the component and not for tailwind */}
            <ButtonWithSound
              text="AC"
              className="base-button-long py-1 px-10 bg-red-700 hover:bg-[#611818] border-[#3d0d0d]"
              setCalculatorString={setCalculatorString}
              setCalcResult={setCalcResult}
              calcResult={calcResult}
              calculate={calculate}
            />
            <ButtonWithSound
              text="/"
              className="base-button"
              setCalculatorString={setCalculatorString}
              setCalcResult={setCalcResult}
              calcResult={calcResult}
              calculate={calculate}
            />
            <ButtonWithSound
              text="*"
              className="base-button"
              setCalculatorString={setCalculatorString}
              setCalcResult={setCalcResult}
              calcResult={calcResult}
              calculate={calculate}
            />
            <ButtonWithSound
              text="7"
              className="base-button"
              setCalculatorString={setCalculatorString}
              setCalcResult={setCalcResult}
              calcResult={calcResult}
              calculate={calculate}
            />
            <ButtonWithSound
              text="8"
              className="base-button"
              setCalculatorString={setCalculatorString}
              setCalcResult={setCalcResult}
              calcResult={calcResult}
              calculate={calculate}
            />
            <ButtonWithSound
              text="9"
              className="base-button"
              setCalculatorString={setCalculatorString}
              setCalcResult={setCalcResult}
              calcResult={calcResult}
              calculate={calculate}
            />
            <ButtonWithSound
              text="-"
              className="base-button"
              setCalculatorString={setCalculatorString}
              setCalcResult={setCalcResult}
              calcResult={calcResult}
              calculate={calculate}
            />
            <ButtonWithSound
              text="4"
              className="base-button"
              setCalculatorString={setCalculatorString}
              setCalcResult={setCalcResult}
              calcResult={calcResult}
              calculate={calculate}
            />
            <ButtonWithSound
              text="5"
              className="base-button"
              setCalculatorString={setCalculatorString}
              setCalcResult={setCalcResult}
              calcResult={calcResult}
              calculate={calculate}
            />
            <ButtonWithSound
              text="6"
              className="base-button"
              setCalculatorString={setCalculatorString}
              setCalcResult={setCalcResult}
              calcResult={calcResult}
              calculate={calculate}
            />
            <ButtonWithSound
              text="+"
              className="base-button"
              setCalculatorString={setCalculatorString}
              setCalcResult={setCalcResult}
              calcResult={calcResult}
              calculate={calculate}
            />
            <ButtonWithSound
              text="1"
              className="base-button"
              setCalculatorString={setCalculatorString}
              setCalcResult={setCalcResult}
              calcResult={calcResult}
              calculate={calculate}
            />
            <ButtonWithSound
              text="2"
              className="base-button"
              setCalculatorString={setCalculatorString}
              setCalcResult={setCalcResult}
              calcResult={calcResult}
              calculate={calculate}
            />
            <ButtonWithSound
              text="3"
              className="base-button"
              setCalculatorString={setCalculatorString}
              setCalcResult={setCalcResult}
              calcResult={calcResult}
              calculate={calculate}
            />
            <ButtonWithSound
              text="="
              className="base-button-long border-[#0f1446] py-[1.8rem] px-4 bg-blue-700 hover:bg-[#17275a] !absolute"
              setCalculatorString={setCalculatorString}
              setCalcResult={setCalcResult}
              calcResult={calcResult}
              calculate={calculate}
            />
            <ButtonWithSound
              text="0"
              className="base-button-long py-1 px-[2.8rem] border-[#1d1d1d] hover:bg-[#1a1919] bg-[#252525]"
              setCalculatorString={setCalculatorString}
              setCalcResult={setCalcResult}
              calcResult={calcResult}
              calculate={calculate}
            />
            <ButtonWithSound
              text="."
              className="base-button"
              setCalculatorString={setCalculatorString}
              setCalcResult={setCalcResult}
              calcResult={calcResult}
              calculate={calculate}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
