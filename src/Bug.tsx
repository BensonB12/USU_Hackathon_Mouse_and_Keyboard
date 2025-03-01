import { FC, useState } from "react";
import bugModule from "./assets/styles/bug.module.scss";

export const Bug: FC<{ initialLetters: string; initialNumOfRings: number }> = ({
  initialLetters,
  initialNumOfRings,
}) => {
  const [numberOfRings] = useState(initialNumOfRings);
  const [letters] = useState(initialLetters);

  const lettersFirst: boolean = Math.random() < 0.5;

  const ActivePart = (isLetters: boolean) => {
    if (isLetters) return lettersFirst || !numberOfRings;
    return !lettersFirst || !letters;
  };
  console.log(`${ActivePart(false)}${numberOfRings}`);

  return (
    <div
      className={`${
        bugModule[`${ActivePart(false)}${numberOfRings}`]
      } p-2 position-relative`}
    >
      <div className="position-absolute top-50 start-50 translate-middle d-flex justify-content-center align-items-center w-100 h-100">
        <div
          className={`${ActivePart(true) ? "text-danger" : "text-light"} h2`}
        >
          {initialLetters}
        </div>
      </div>
      <i className="bi-bug-fill display-4 d-block mx-auto" />
    </div>
  );
};
