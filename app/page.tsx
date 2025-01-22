"use client";

import ButtonWithSound from "./components/button/button";

export default function Home() {
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
          >
            Screen
          </div>
          <div
            className="button-pad font-[family-name:var(--font-nova-mono)] bg-[#407c8f]"
            style={{ boxShadow: "inset rgba(0, 0, 0, 0.2) 0px 0px 10px 5px" }}
          >
            {/* The className here below belongs to the props passed onto the component and not for tailwind */}
            <ButtonWithSound
              text="AC"
              className="base-button-long py-1 px-10 bg-red-700 hover:bg-[#611818] border-[#3d0d0d]"
            />
            <ButtonWithSound text="/" className="base-button" />
            <ButtonWithSound text="x" className="base-button" />
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
