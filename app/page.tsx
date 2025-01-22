"use client";

import { useEffect, useState, useRef } from "react";
import ButtonWithSound from "./components/button/button";

export default function Home() {
  const [calcResult, setCalcResult] = useState<number | null>(null);
  const [calculatorString, setCalculatorString] = useState<string>("");
  const calculatorStringRef = useRef<string>("");
  const buttonPadRef = useRef<HTMLDivElement | null>(null);

  // useEffect is used to make sure the number pad is initialized
  useEffect(() => {
    if (buttonPadRef.current) {
      buttonPadRef.current.addEventListener("click", (event: MouseEvent) => {
        const target = event.target as HTMLElement;

        if (target.tagName === "BUTTON") {
          const buttonValue = target.textContent || "";

          if (buttonValue === "AC") {
            setCalculatorString("");
            setCalcResult(null);
          } else if (buttonValue != "=") {
            setCalcResult(null);
            // If the clicked button is a number or dot, add it
            // Like so: ['87']
            setCalculatorString(
              (calculatorString) => calculatorString + buttonValue
            );
          } else if (buttonValue === "=") {
            setCalcResult(eval(calculatorStringRef.current));

            // Reset after showing the results
            setCalculatorString("");
          }
        }
      });
    }
  }, []);

  useEffect(() => {
    calculatorStringRef.current = calculatorString;
  }, [calculatorString]);

  let screenDisplay;
  if (calcResult === 0) {
    console.log(calcResult);
    screenDisplay = 0;
  } else if (calcResult) {
    screenDisplay = calcResult;
  } else {
    screenDisplay = calculatorString;
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
          >
            Sunlight
          </div>
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
            ref={buttonPadRef}
            style={{ boxShadow: "inset rgba(0, 0, 0, 0.2) 0px 0px 10px 5px" }}
          >
            {/* The className here below belongs to the props passed onto the component and not for tailwind */}
            <ButtonWithSound
              text="AC"
              className="base-button-long py-1 px-10 bg-red-700 hover:bg-[#611818] border-[#3d0d0d]"
            />
            <ButtonWithSound text="/" className="base-button" />
            <ButtonWithSound text="*" className="base-button" />
            <ButtonWithSound text="7" className="base-button" />
            <ButtonWithSound text="8" className="base-button" />
            <ButtonWithSound text="9" className="base-button" />
            <ButtonWithSound text="-" className="base-button" />
            <ButtonWithSound text="4" className="base-button" />
            <ButtonWithSound text="5" className="base-button" />
            <ButtonWithSound text="6" className="base-button" />
            <ButtonWithSound text="+" className="base-button" />
            <ButtonWithSound text="1" className="base-button" />
            <ButtonWithSound text="2" className="base-button" />
            <ButtonWithSound text="3" className="base-button" />
            <ButtonWithSound
              text="="
              className="base-button-long border-[#0f1446] py-[1.8rem] px-4 bg-blue-700 hover:bg-[#17275a] !absolute"
            />
            <ButtonWithSound
              text="0"
              className="base-button-long py-1 px-[2.8rem] border-[#1d1d1d] hover:bg-[#1a1919] bg-[#252525]"
            />
            <ButtonWithSound text="." className="base-button" />
          </div>
        </div>
      </div>
    </div>
  );
}
