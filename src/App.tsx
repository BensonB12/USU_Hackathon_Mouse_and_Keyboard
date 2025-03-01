import { useEffect, useState } from "react";
import { Layout } from "./Layout";
import cpuImage from "./assets/cpu-bolt-svgrepo-com.svg";
import { CpuHealth } from "./CpuHealth";
import { maxHealth } from "./Constants";
import { BugHandler } from "./BugHandler";
import { GameState } from "./GameState";
import { StillBug } from "./StillBug";

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
        {gameState === GameState.BeforeGame && (
          <div className="position-absolute w-100 top-0">
            <div className="row text-center h1">
              <div className="col">
                <div className="text-white">
                  Player One - You are the Keyboard
                </div>
              </div>
              <div className="col">
                <div className="text-white">Player Two - You are the Mouse</div>
              </div>
            </div>
            <br />
            <br />
            <div className="text-center h3">
              <div className="text-white">
                You are both apart of the computer!
              </div>
              <div className="text-white">Defend your CPU from the Bugs!</div>
            </div>
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
          <div className="position-absolute w-100 pt-5 mt-5">
            <div className="row pt-5 mt-5">
              <div className="col ps-4 pt-5 mt-5">
                <StillBug letters={"abc"} rings={1} lettersFirst={false} />
                <div className="text-white">
                  This bug only has one layer of a 'click' shield
                </div>
                <br />
                <div className="text-white">
                  The keyboard cannot type attack this guy until the shield is
                  taken down
                </div>
              </div>
              <div className="col pt-5 mt-5">
                <StillBug letters={"d"} rings={2} lettersFirst={true} />
                <div className="text-white">
                  This bug has a two 'click' shield
                </div>
                <br />
                <div className="text-white">
                  This bug has to have 'd' typed out before the mouse player can
                  finish him off
                </div>
              </div>
              <div className="col pt-5 mt-5 pe-4">
                <StillBug letters={"ef"} rings={3} lettersFirst={false} />
                <div className="text-white">
                  This bug has a three 'click' shield
                </div>
                <br />
                <button
                  onClick={() => setGameState(GameState.Playing)}
                  className="btn w-100 text-center btn-lg btn-outline-primary"
                >
                  Start Defending your CPU!
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </Layout>
  );
};
