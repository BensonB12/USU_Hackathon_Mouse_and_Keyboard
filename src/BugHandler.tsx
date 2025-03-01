import { maxLetters, maxRings } from "./Constants";
import { GenerateId, GenerateRandomLetter } from "./Utils";
import { Bug } from "./Bug";
import { FC, useCallback, useEffect, useState } from "react";
import { GameState } from "./GameState";

export const BugHandler: FC<{
  hitCpu: (damage: number) => void;
  gameState: GameState;
}> = ({ hitCpu, gameState }) => {
  const [bugs, setBugs] = useState<string[]>([]);

  const generateBug = useCallback(() => {
    setBugs((prevBugs) => [...prevBugs, GenerateId(), GenerateId()]);
  }, []);

  useEffect(() => {
    if (gameState !== GameState.Playing) return;

    const interval = setInterval(() => {
      generateBug();
    }, 4000);

    return () => clearInterval(interval);
  }, [generateBug]);
  // Create levels?

  return (
    <>
      {bugs.map((id) => (
        <Bug
          key={id}
          initialLetters={Array.from(
            { length: Math.floor(Math.random() * maxLetters) + 1 },
            GenerateRandomLetter
          ).join("")}
          initialNumOfRings={Math.floor(Math.random() * maxRings) + 1}
          lettersFirst={Math.random() < 0.5}
          id={id}
          hitCPU={hitCpu}
          transformationOption={Math.floor(Math.random() * 8) + 1}
        />
      ))}
    </>
  );
};
