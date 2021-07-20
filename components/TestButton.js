import styled from "styled-components";

const TestButton = ({ handleAnswer, value }) => {
  return <Button onClick={handleAnswer}>{value}</Button>;
};

export default TestButton;

const Button = styled.button`
  font-family: "Lato", sans-serif;
  font-weight: 600;
  background-image: linear-gradient(
    to right top,
    #17c390,
    var(--floralWhite),
    #fef9ef,
    var(--floralWhite),
    #fe6d73
  );
  cursor: pointer;
  transition: all 0.3s ease;
  &:focus {
    outline: none;
  }
  &:focus-visible {
    outline: 1px solid black;
  }
  border: none;
  color: black;
  border-radius: 1.5rem;
  padding: 0.5em 2em;
  &:hover {
    color: #000;
    transform: translateY(8%);
    border-radius: 15px;
  }
`;
