import { useEffect, useState } from "react";
import { Layout } from "./Layout";
import cpuImage from "./assets/cpu-bolt-svgrepo-com.svg";
import { CpuHealth } from "./CpuHealth";
import { maxHealth } from "./Constants";
import { Bug } from "./Bug";
import { GenerateId } from "./Utils";

export const App = () => {
  const [cpuHealth, setCpuHealth] = useState(maxHealth);

  const hitCPU = (damage: number) => {
    setCpuHealth((oldHealth) => Math.max(oldHealth - damage, 0));
  };

  useEffect(() => {
    if (cpuHealth <= 0) {
      console.log("Game Over");
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
        <Bug
          initialLetters="abc"
          initialNumOfRings={3}
          lettersFirst={true}
          hitCPU={hitCPU}
          id={GenerateId()}
        />
      </div>
    </Layout>
  );
};
