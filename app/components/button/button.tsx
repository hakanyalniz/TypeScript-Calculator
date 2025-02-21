import { useState, useEffect } from "react";

// Define prop types for ButtonWithSound component
interface ButtonWithSoundProps {
  text: string;
  className?: string; // className is optional and can be a string
  onClick?: () => void; // Add the onClick handler
  setCalculatorString: React.Dispatch<React.SetStateAction<string>>;
  setCalcResult: React.Dispatch<React.SetStateAction<number | null>>;
  calcResult: number | null;
  calculate: () => void;
}

const ButtonWithSound: React.FC<ButtonWithSoundProps> = ({
  text,
  className,
  setCalculatorString,
  setCalcResult,
  calcResult,
  calculate,
}) => {
  const [audio, setAudio] = useState<HTMLAudioElement | null>(null);

  // Initialize the audio element once the component mounts
  useEffect(() => {
    if (typeof window !== "undefined") {
      const audioElement = new Audio("/button-sound01.mp3");
      setAudio(audioElement);
    }
  }, []); // Re-run if volume changes

  const handleButtonClick = (buttonValue: string) => {
    // Play audio part
    // If the audio is playing, stop and reset it before starting again
    // Also check if audio is loaded
    if (audio && !audio.paused) {
      audio.volume = 0.2;
      audio.currentTime = 0; // Reset to the start
    } else if (audio) {
      audio.volume = 0.2;
      audio.play(); // Play the sound
    }

    // Check number part
    if (buttonValue === "AC") {
      setCalculatorString("");
      setCalcResult(null);
    } else if (buttonValue !== "=") {
      if (
        Number(calcResult) &&
        (buttonValue === "+" ||
          buttonValue === "-" ||
          buttonValue === "/" ||
          buttonValue === "*")
      ) {
        console.log(buttonValue);
        setCalculatorString(() => calcResult + buttonValue);
      } else {
        setCalcResult(null);
        setCalculatorString((prev) => prev + buttonValue);
      }
    } else if (buttonValue === "=") {
      calculate();
      setCalculatorString("");
    }
  };

  return (
    // ${className}: This dynamically inserts whatever additional className string is passed to the component.
    <button onClick={() => handleButtonClick(text)} className={`${className}`}>
      {text}
    </button>
  );
};

export default ButtonWithSound;
