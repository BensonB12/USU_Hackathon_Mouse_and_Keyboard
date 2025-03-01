import { useState } from "react";
import { Layout } from "./Layout";
import cpuImage from "./assets/cpu-bolt-svgrepo-com.svg";
import { CpuHealth } from "./CpuHealth";
import { maxHealth } from "./Constants";
import { Bug } from "./Bug";

export const App = () => {
  const [cpuHealth] = useState(maxHealth);
  // four letters per bug
  //
  return (
    <Layout>
      <div className="h-100 d-flex justify-content-center align-items-center">
        <div className="h-25 d-flex flex-column justify-content-center align-items-center">
          <CpuHealth health={cpuHealth} />
          <img className="h-25" src={cpuImage} alt="CPU" />
        </div>
        <Bug initialLetters={"ASTD"} initialNumOfRings={1} />
        <Bug initialLetters={"ASTD"} initialNumOfRings={1} />
        <Bug initialLetters={"ASTD"} initialNumOfRings={2} />
        <Bug initialLetters={"ASTD"} initialNumOfRings={2} />
        <Bug initialLetters={"ASTD"} initialNumOfRings={3} />
        <Bug initialLetters={"ASTD"} initialNumOfRings={3} />
      </div>
    </Layout>
  );
};
