export default function Home() {
  return (
    <div className="flex items-center justify-center min-h-screen font-[family-name:var(--font-geist-sans)]">
      <div
        className="border-2 border-white h-[375px] w-[244px]"
        id="calculator-container"
      >
        <div className="border-2 border-red-400 h-full" id="calculator-inner">
          <div className="border border-white h-10">Sunlight</div>
          <div className="border-y-8 border-white h-20 bg-black pt-8 pr-2 text-right">
            Screen
          </div>
          <div className="button-pad font-[family-name:var(--font-nova-mono)]">
            <button className="border rounded m-2 py-1 px-10 bg-red-700">
              AC
            </button>
            <button className="border rounded m-2 py-1 px-4 bg-black">/</button>
            <button className="border rounded m-2 py-1 px-4 bg-black">x</button>
            <button className="border rounded m-2 py-1 px-4 bg-black">7</button>
            <button className="border rounded m-2 py-1 px-4 bg-black">8</button>
            <button className="border rounded m-2 py-1 px-4 bg-black">9</button>
            <button className="border rounded m-2 py-1 px-4 bg-black">-</button>
            <button className="border rounded m-2 py-1 px-4 bg-black">4</button>
            <button className="border rounded m-2 py-1 px-4 bg-black">5</button>
            <button className="border rounded m-2 py-1 px-4 bg-black">6</button>
            <button className="border rounded m-2 py-1 px-4 bg-black">+</button>
            <button className="border rounded m-2 py-1 px-4 bg-black">1</button>
            <button className="border rounded m-2 py-1 px-4 bg-black">2</button>
            <button className="border rounded m-2 py-1 px-4 bg-black">3</button>
            <button className="border rounded m-2 py-[1.8rem] px-4 bg-blue-700 absolute">
              =
            </button>
            <button className="border rounded m-2 py-1 px-[2.8rem] bg-black">
              0
            </button>
            <button className="border rounded m-2 py-1 px-4 bg-black">.</button>
          </div>
        </div>
      </div>
    </div>
  );
}
