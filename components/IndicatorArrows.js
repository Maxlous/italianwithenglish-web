import styled, { keyframes } from "styled-components";

const IndicatorArrows = () => {
  return (
    <Indicator>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
    </Indicator>
  );
};

export default IndicatorArrows;

/* the arrow effect is belong to ramachandra https://codepen.io/pullagantiramachandra/pen/XxPZZE  */
const animation = keyframes`
  0% {
    border-color: var(--redSalsa);
    transform: translate(0, 0);
  }
  20% {
    border-color: var(--redSalsa);
    transform: translate(15px, 15px);
  }
  100% {
    border-color: var(--redSalsa);
  }`;
const Indicator = styled.div`
  position: relative;
  width: 40px;
  height: 40px;
  transform: rotate(45deg);
  & span {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    box-sizing: border-box;
    border: none;
    border-bottom: 3px solid var(--redSalsa);
    border-right: 3px solid var(--redSalsa);
    animation: 1s ${animation} linear infinite;
  }
  & span:nth-child(1) {
    top: -30px;
    left: -30px;
    animation-delay: 0s;
  }
  & span:nth-child(2) {
    top: -15px;
    left: -15px;
    animation-delay: 0.2s;
  }
  & span:nth-child(3) {
    top: 0;
    left: 0;
    animation-delay: 0.4s;
  }
  & span:nth-child(4) {
    top: 15px;
    left: 15px;
    animation-delay: 0.6s;
  }
  & span:nth-child(5) {
    top: 30px;
    left: 30px;
    animation-delay: 0.8s;
  }
`;
