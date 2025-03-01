import { Layout } from "./Layout";
import cpuImage from "./assets/cpu-bolt-svgrepo-com.svg";

export const App = () => {
  return (
    <Layout>
      <div className="h-100 d-flex justify-content-center align-items-center">
        <div className="h-25 d-flex justify-content-center align-items-center">
          <img className="h-25" src={cpuImage} alt="CPU" />
        </div>
      </div>
    </Layout>
  );
};
