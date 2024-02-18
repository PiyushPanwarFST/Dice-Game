import styled from "styled-components";

const NumberSelector = ({
  error,
  setError,
  selectedNumber,
  setSelectedNumber,
}) => {
  const arrNum = [1, 2, 3, 4, 5, 6];

  const numberSelectorHandler = (i) => {
    setSelectedNumber(i);
    setError("");
  };

  return (
    <NumberSelectorContainer>
      <p className="error">{error}</p>

      <div className="flex">
        {arrNum.map((i) => (
          <Box
            isSelected={i == selectedNumber}
            key={i}
            onClick={() => numberSelectorHandler(i)}
          >
            {i}
          </Box>
        ))}
      </div>
      <p>Select Number</p>
    </NumberSelectorContainer>
  );
};

const NumberSelectorContainer = styled.div`
  display: flex;
  align-items: end;
  flex-direction: column;

  .flex {
    display: flex;
    gap: 24px;
  }
  p {
    font-size: 24px;
    font-weight: 700;
  }
  .error {
    color: red;
  }
`;

const Box = styled.div`
  height: 72px;
  width: 72px;
  border: 1px solid black;
  display: grid;
  place-items: center;
  font-size: 24px;
  font-weight: 700;
  cursor: pointer;
  background-color: ${(props) => (props.isSelected ? "black" : "white")};
  color: ${(props) => (props.isSelected ? "white" : "black")};
`;

export default NumberSelector;
