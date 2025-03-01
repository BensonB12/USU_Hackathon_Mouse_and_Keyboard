import { maxLetters, maxRings } from "./Constants";
import { GenerateId, GenerateRandomLetter } from "./Utils";
import { Bug } from "./Bug";
import { FC, useCallback, useEffect, useRef, useState } from "react";
import { GameState } from "./GameState";

export const BugHandler: FC<{
  hitCpu: (damage: number) => void;
  gameState: GameState;
}> = ({ hitCpu, gameState }) => {
  console.log("BugHandler");
  const [bugs, setBugs] = useState<string[]>([]);
  const bugsRef = useRef<string[]>([]);

  const generateBug = useCallback(() => {
    bugsRef.current = [...bugsRef.current, GenerateId(), GenerateId()];
    setBugs([...bugsRef.current]);
  }, []);

  useEffect(() => {
    console.log("Go generate a bug");
    if (gameState !== GameState.Playing) return;

    generateBug();

    const interval = setInterval(() => {
      generateBug();
    }, 7000);

    return () => clearInterval(interval);
  }, [gameState, generateBug]);

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
