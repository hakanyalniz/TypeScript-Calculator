"use client";

import ButtonWithSound from "./components/button/button";

export default function Home() {
  return (
    <div className="flex items-center justify-center min-h-screen font-[family-name:var(--font-geist-sans)]">
      <div
        className="border-2 border-white h-[395px] w-[244px]"
        id="calculator-container"
      >
        <div
          className="border-2 border-red-400 h-full bg-[#1a3942]"
          id="calculator-inner"
        >
          <div className="border border-white h-10">Sunlight</div>
          <div className="border-y-8 border-white h-20 bg-black pt-8 pr-2 text-right">
            Screen
          </div>
          <div className="button-pad font-[family-name:var(--font-nova-mono)] bg-[#407c8f]">
            {/* The className here below belongs to the props passed onto the component and not for tailwind */}
            <ButtonWithSound
              text="AC"
              className="base-button-long py-1 px-10 bg-red-700 hover:bg-[#611818] border-[#3d0d0d] "
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
              className="base-button-long border-[#1d1d1d] py-1 px-[2.8rem] bg-black"
            />
            <ButtonWithSound text="." className="base-button" />
          </div>
        </div>
      </div>
    </div>
  );
}
