import { useEffect, useRef, useState } from "react";
import { Layout } from "./Layout";
import cpuImage from "./assets/cpu-bolt-svgrepo-com.svg";
import { CpuHealth } from "./CpuHealth";
import { maxHealth } from "./Constants";
import { BugHandler } from "./BugHandler";
import { GameState } from "./GameState";
import { PlayerDescriptions } from "./PlayerDescriptions";
import { BugExamples } from "./BugExamples";

export const App = () => {
  const [cpuHealth, setCpuHealth] = useState(maxHealth);
  const [gameState, setGameState] = useState<GameState>(GameState.BeforeGame);

  const [time, setTime] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const intervalRef = useRef<number | null>(null);

  useEffect(() => {
    if (isRunning) {
      intervalRef.current = window.setInterval(() => {
        setTime((prevTime) => prevTime + 1);
      }, 1000);
    } else if (intervalRef.current !== null) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }

    return () => {
      if (intervalRef.current !== null) {
        clearInterval(intervalRef.current);
      }
    };
  }, [isRunning]);

  const handleStartPause = () => {
    setIsRunning((prevIsRunning) => !prevIsRunning);
  };

  const handleReset = () => {
    setIsRunning(false);
    setTime(0);
    setIsRunning(true);
  };

  const hitCPU = (damage: number) => {
    setCpuHealth((oldHealth) => Math.max(oldHealth - damage, 0));
  };

  useEffect(() => {
    if (cpuHealth <= 0) {
      handleStartPause();
      setGameState(GameState.GameOver);
    }
  }, [cpuHealth]);

  const startGame = () => {
    handleReset();
    setGameState(GameState.Playing);
    setCpuHealth(maxHealth);
  };

  // four letters per bug
  // three rings per bug
  // const lettersFirst: boolean = Math.random() < 0.5;
  // Add title
  // Add Timer
  // Bug Controller

  return (
    <Layout>
      <div className="h-100 d-flex justify-content-center align-items-center">
        {gameState === GameState.BeforeGame ? (
          <PlayerDescriptions />
        ) : (
          <div className="position-absolute top-0 text-white text-center h2">
            {time}
          </div>
        )}
        <div className="h-25 d-flex flex-column justify-content-center align-items-center">
          {gameState === GameState.BeforeGame && (
            <div className="text-white text-center">
              <div className="h5">Hi! I am your CPU!</div>
              <div className="text-light">I am the heart of the computer</div>
            </div>
          )}
          <CpuHealth health={cpuHealth} />
          <img className="h-25" src={cpuImage} alt="CPU" />
        </div>
        <BugHandler hitCpu={hitCPU} gameState={gameState} />
        {gameState === GameState.BeforeGame && (
          <BugExamples startGame={startGame} />
        )}
        {gameState === GameState.GameOver && (
          <div className="position-absolute w-100 pt-5 mt-5">
            <div className="row pt-5 px-5 mt-5">
              <button
                onClick={() => startGame()}
                className="btn text-center btn-lg btn-outline-primary"
              >
                Play Again
              </button>
            </div>
          </div>
        )}
      </div>
    </Layout>
  );
};
