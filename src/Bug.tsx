import { FC, useEffect, useState } from "react";
import bugModule from "./assets/styles/bug.module.scss";
import movementModule from "./assets/styles/movement.module.scss";
import { maxLetters, maxRings } from "./Constants";

export const Bug: FC<{
  initialLetters: string;
  initialNumOfRings: number;
  lettersFirst: boolean;
  hitCPU: (damage: number) => void;
  id: string;
  transformationOption: number;
}> = ({
  initialLetters,
  initialNumOfRings,
  lettersFirst,
  hitCPU,
  id,
  transformationOption,
}) => {
  const [numberOfRings, setNumberOfRings] = useState(initialNumOfRings);
  const [letters, setLetters] = useState(initialLetters);

  const isLettersActive = lettersFirst || numberOfRings === 0;
  const isRingsActive = !lettersFirst || letters.length === 0;

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      e.preventDefault();
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

  useEffect(() => {
    if (!numberOfRings && !letters) return;

    const bugElement = document.querySelector("#" + id);

    if (bugElement) {
      const rect = bugElement.getBoundingClientRect();
      const centerX = window.innerWidth / 2;
      const centerY = window.innerHeight / 2;

      const bugCenterX = rect.left + rect.width / 2;
      const bugCenterY = rect.top + rect.height / 2;

      const tolerance = 20;

      if (
        Math.abs(bugCenterX - centerX) <= tolerance &&
        Math.abs(bugCenterY - centerY) <= tolerance
      ) {
        hitCPU(10);
        setLetters("");
        setNumberOfRings(0);
      }
    }
  }, [numberOfRings, letters, id, hitCPU]);

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
    <div className="position-absolute h-100 w-100 ">
      <div
        id={id}
        className={`${bugModule[`${isRingsActive}${numberOfRings}`]} ${
          movementModule[`option-${transformationOption}`]
        } p-2 position-relative ${bugModule.w}`}
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
          className={`${!numberOfRings && !letters ? "d-none" : ""} ${
            movementModule[`rotate-${transformationOption}`]
          } bi-bug-fill display-4 d-block mx-auto`}
        />
      </div>
    </div>
  );
};
