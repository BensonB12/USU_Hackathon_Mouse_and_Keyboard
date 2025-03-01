import { FC } from "react";
import bugModule from "./assets/styles/bug.module.scss";

export const StillBug: FC<{
  letters: string;
  rings: number;
  lettersFirst: boolean;
}> = ({ letters, rings, lettersFirst }) => {
  return (
    <div className="mb-2 pt-5 mt-5 w-100 text-center">
      <div
        className={`${
          bugModule[`${!lettersFirst}${rings}`]
        } mx-auto p-2 position-relative ${bugModule.w}`}
      >
        <i className={`bi-bug-fill display-4 d-block mx-auto`} />
        <div className="position-absolute top-50 start-50 translate-middle d-flex justify-content-center align-items-center w-100 h-100">
          <button
            className={`btn btn-lg ${bugModule.no_focus} ${
              lettersFirst ? "text-danger" : "text-light"
            }`}
            tabIndex={-1}
          >
            {letters}
          </button>
        </div>
      </div>
    </div>
  );
};
