import { FC, ReactNode } from "react";

export const Layout: FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <div className="d-flex bg-dark vh-100">
      <div className="flex-grow-1">{children}</div>
    </div>
  );
};
