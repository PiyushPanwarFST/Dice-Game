import { useState } from "react";
import styled from "styled-components";
import { Button, OutlineButton } from "../styled/Button";
import NumberSelector from "./NumberSelector";
import RoleDice from "./RoleDice";
import TotalScore from "./TotalScore";
import Rules from "./Rules";

const GamePlay = () => {
  const [score, setScore] = useState(0);
  const [selectedNumber, setSelectedNumber] = useState();
  const [currentDice, setCurrentDice] = useState(1);
  const [error, setError] = useState("");
  const [showRules , setShowRules] = useState(false);

  const genrateRondomNumber = (min, max) => {
    return Math.floor(Math.random() * (max - min) + min);
  };

  const roleDice = () => {
    if (!selectedNumber) {
      setError("You have not selected any number");
      return;
    }

    const rondomNumber = genrateRondomNumber(1, 7);
    setCurrentDice((prev) => rondomNumber);

    if (selectedNumber === rondomNumber) {
      setScore((prev) => prev + rondomNumber);
    } else {
      setScore((prev) => prev - 2);
    }

    setSelectedNumber(undefined);
  };

  const resetScore = () => {
    setScore(0);
  };

  return (
    <MainContainer>
      <div className="top_section">
        <TotalScore score={score}></TotalScore>
        <NumberSelector
          error={error}
          setError={setError}
          selectedNumber={selectedNumber}
          setSelectedNumber={setSelectedNumber}
        ></NumberSelector>
      </div>
      <RoleDice currentDice={currentDice} roleDice={roleDice}></RoleDice>
      <div className="btn">
        <OutlineButton onClick={resetScore}>Reset Score</OutlineButton>
        <Button 
          onClick={() => setShowRules(prev => !prev)}
        >{showRules ? "Hide" : "Show"} Rules
          </Button>
      </div>
      {showRules && <Rules></Rules>}
    </MainContainer>
  );
};

export default GamePlay;

const MainContainer = styled.main`
  padding-top: 70px;

  .top_section {
    display: flex;
    justify-content: space-around;
    align-items: end;
  }

  .btn {
    margin-top: 40px;
    gap: 10px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 10px;
  }
`;
