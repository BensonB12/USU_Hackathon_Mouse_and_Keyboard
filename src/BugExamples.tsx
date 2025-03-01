import { FC } from "react";
import { StillBug } from "./StillBug";

export const BugExamples: FC<{
  startGame: () => void;
}> = ({ startGame: setGameState }) => {
  return (
    <div className="position-absolute w-100 pt-5 mt-5">
      <div className="row pt-5 mt-5">
        <div className="col ps-4 pt-5 mt-5">
          <StillBug letters={"abc"} rings={1} lettersFirst={false} />
          <div className="text-white">
            This bug only has one layer of a 'click' shield
          </div>
          <br />
          <div className="text-white">
            The keyboard cannot type attack this guy until the shield is taken
            down
          </div>
        </div>
        <div className="col pt-5 mt-5">
          <StillBug letters={"d"} rings={2} lettersFirst={true} />
          <div className="text-white">This bug has a two 'click' shield</div>
          <br />
          <div className="text-white">
            This bug has to have 'd' typed out before the mouse player can
            finish him off
          </div>
        </div>
        <div className="col pt-5 mt-5 pe-4">
          <StillBug letters={"ef"} rings={3} lettersFirst={false} />
          <div className="text-white">This bug has a three 'click' shield</div>
          <br />
          <button
            onClick={() => setGameState()}
            className="btn w-100 text-center btn-lg btn-outline-primary"
          >
            Start Defending your CPU!
          </button>
        </div>
      </div>
    </div>
  );
};
