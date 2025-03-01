import { FC, useEffect, useState } from "react";
import bugModule from "./assets/styles/bug.module.scss";
import { maxLetters, maxRings } from "./Constants";

export const Bug: FC<{
  initialLetters: string;
  initialNumOfRings: number;
  lettersFirst: boolean;
}> = ({ initialLetters, initialNumOfRings, lettersFirst }) => {
  const [numberOfRings, setNumberOfRings] = useState(initialNumOfRings);
  const [letters, setLetters] = useState(initialLetters);

  const isLettersActive = lettersFirst || numberOfRings === 0;
  const isRingsActive = !lettersFirst || letters.length === 0;

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (isLettersActive && letters) {
        setLetters((oldLetters) => oldLetters.replace(e.key, ""));
      } else if (!letters && !numberOfRings && numberOfRings < maxRings) {
        // Add another ring
      } else {
        // Enlarge the circles to show they have to do the other one first
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [letters, numberOfRings, isLettersActive, isRingsActive]);

  // const GenerateRandomLetter = () => {
  //   return String.fromCharCode(97 + Math.floor(Math.random() * 26)); // Generates a random letter from a-z
  // };

  // Handle click event
  const handleClick = () => {
    if (isRingsActive && numberOfRings > 0) {
      setNumberOfRings((oldNumberOfRings) => oldNumberOfRings - 1);
    } else if (
      !letters.length &&
      !numberOfRings &&
      letters.length < maxLetters
    ) {
      // Add another Letter to punish multi clicks
      // setLetters((oldLetters) => oldLetters + GenerateRandomLetter());
    } else {
      // Enlarge the letters to show the other ones have to be fixed first
    }
  };

  return (
    <div
      className={`${
        bugModule[`${isRingsActive}${numberOfRings}`]
      } p-2 position-relative`}
      onClick={handleClick}
    >
      <div className="position-absolute top-50 start-50 translate-middle d-flex justify-content-center align-items-center w-100 h-100">
        <button
          className={`btn btn-lg ${bugModule.no_focus} ${
            isLettersActive ? "text-danger" : "text-light"
          }`}
          tabIndex={-1}
        >
          {letters}
        </button>
      </div>
      <i
        className={`${
          !numberOfRings && !letters ? "d-none" : ""
        } bi-bug-fill display-4 d-block mx-auto`}
      />
    </div>
  );
};
