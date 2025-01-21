import { useState, useRef, useEffect } from "react";

// Define prop types for ButtonWithSound component
interface ButtonWithSoundProps {
  text: string;
  className?: string; // className is optional and can be a string
}

const ButtonWithSound: React.FC<ButtonWithSoundProps> = ({
  text,
  className,
}) => {
  const [audio, setAudio] = useState<HTMLAudioElement | null>(null);

  // Initialize the audio element once the component mounts
  useEffect(() => {
    if (typeof window !== "undefined") {
      const audioElement = new Audio("/button-sound01.mp3");
      setAudio(audioElement);
    }
  }, []); // Re-run if volume changes

  const handleClick = () => {
    // If the audio is playing, stop and reset it before starting again
    // Also check if audio is loaded
    if (audio && !audio.paused) {
      audio.volume = 0.2;
      audio.currentTime = 0; // Reset to the start
    } else if (audio) {
      audio.volume = 0.2;
      audio.play(); // Play the sound
    }
  };

  return (
    // ${className}: This dynamically inserts whatever additional className string is passed to the component.
    <button onClick={handleClick} className={`${className}`}>
      {text}
    </button>
  );
};

export default ButtonWithSound;
