import { FC } from "react";
import healthModule from "./assets/styles/health.module.scss";

export const CpuHealth: FC<{ health: number }> = ({ health }) => {
  return (
    <div>
      <div
        className={`bg-primary border-primary border p-1 rounded position-absolute ${
          healthModule[`h${health}`]
        }`}
      />
      <div
        className={`border-primary border py-1 rounded ${healthModule.h100}`}
      />
    </div>
  );
};
