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
            <button className="base-button-long py-1 px-10 bg-red-700 hover:bg-[#611818] border-[#3d0d0d] ">
              AC
            </button>
            <button className="base-button bg-black">/</button>
            <button className="base-button bg-black">x</button>
            <button className="base-button bg-black">7</button>
            <button className="base-button bg-black">8</button>
            <button className="base-button bg-black">9</button>
            <button className="base-button bg-black">-</button>
            <button className="base-button bg-black">4</button>
            <button className="base-button bg-black">5</button>
            <button className="base-button bg-black">6</button>
            <button className="base-button bg-black">+</button>
            <button className="base-button bg-black">1</button>
            <button className="base-button bg-black">2</button>
            <button className="base-button bg-black">3</button>
            <button className="base-button-long border-[#0f1446] py-[1.8rem] px-4 bg-blue-700 hover:bg-[#17275a] !absolute">
              =
            </button>
            <button className="base-button-long border-[#1d1d1d] py-1 px-[2.8rem] bg-black ">
              0
            </button>
            <button className="base-button bg-black">.</button>
          </div>
        </div>
      </div>
    </div>
  );
}
