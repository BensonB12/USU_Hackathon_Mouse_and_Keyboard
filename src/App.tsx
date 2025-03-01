import { useEffect, useState } from "react";
import { Layout } from "./Layout";
import cpuImage from "./assets/cpu-bolt-svgrepo-com.svg";
import { CpuHealth } from "./CpuHealth";
import { maxHealth } from "./Constants";
import { BugHandler } from "./BugHandler";
import { GameState } from "./GameState";

export const App = () => {
  const [cpuHealth, setCpuHealth] = useState(maxHealth);
  const [gameState, setGameState] = useState<GameState>(GameState.BeforeGame);

  const hitCPU = (damage: number) => {
    setCpuHealth((oldHealth) => Math.max(oldHealth - damage, 0));
  };

  useEffect(() => {
    if (cpuHealth <= 0) {
      setGameState(GameState.GameOver);
    }
  }, [cpuHealth]);

  // four letters per bug
  // three rings per bug
  // const lettersFirst: boolean = Math.random() < 0.5;
  // Add title
  // Add Timer
  // Bug Controller

  return (
    <Layout>
      <div className="h-100 d-flex justify-content-center align-items-center">
        <div className="h-25 d-flex flex-column justify-content-center align-items-center">
          <CpuHealth health={cpuHealth} />
          <img className="h-25" src={cpuImage} alt="CPU" />
        </div>
        <BugHandler hitCpu={hitCPU} gameState={gameState} />
      </div>
    </Layout>
  );
};
