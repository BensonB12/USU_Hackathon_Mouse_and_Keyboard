import { useState } from "react";
import { Layout } from "./Layout";
import cpuImage from "./assets/cpu-bolt-svgrepo-com.svg";
import { CpuHealth } from "./CpuHealth";
import { maxHealth } from "./Constants";
import { Bug } from "./Bug";

export const App = () => {
  const [cpuHealth] = useState(maxHealth);

  // four letters per bug
  // three rings per bug
  // const lettersFirst: boolean = Math.random() < 0.5;
  // Add title
  // Add Timer
  return (
    <Layout>
      <div className="h-100 d-flex justify-content-center align-items-center">
        <div className="h-25 d-flex flex-column justify-content-center align-items-center">
          <CpuHealth health={cpuHealth} />
          <img className="h-25" src={cpuImage} alt="CPU" />
        </div>
        <Bug initialLetters={"atd"} initialNumOfRings={1} lettersFirst={true} />
        <Bug initialLetters={"atd"} initialNumOfRings={1} lettersFirst={true} />
        <Bug
          initialLetters={"atd"}
          initialNumOfRings={2}
          lettersFirst={false}
        />
        <Bug
          initialLetters={"astd"}
          initialNumOfRings={2}
          lettersFirst={false}
        />
        <Bug
          initialLetters={"astd"}
          initialNumOfRings={3}
          lettersFirst={false}
        />
        <Bug
          initialLetters={"astd"}
          initialNumOfRings={3}
          lettersFirst={false}
        />
      </div>
    </Layout>
  );
};
