
import styled from "styled-components";

const RoleDice = ({roleDice ,currentDice }) => {
    

  return (
    <DiceContainer>
      <div className="dice"
        onClick={roleDice}>
        <img src={`images/dice/dice_${currentDice}.png`}alt="dice_1" />
      </div>
      <p>Click on dice to roll</p>
    </DiceContainer>
  );
};

export default RoleDice;

const DiceContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 48px;
 
    .dice{
        cursor: pointer;
    }

  p {
    font-size: 24px;
  }
`;
