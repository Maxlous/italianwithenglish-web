import styled from "styled-components";

const ResetStats = ({ handleReset }) => {
  return (
    <Container onClick={handleReset}>
      <Text>Reset Stats</Text>
      <StyledSvg
        xmlns="http://www.w3.org/2000/svg"
        width="30"
        height="30"
        fill="#000000"
        viewBox="0 0 256 256"
      >
        <rect width="256" height="256" fill="none"></rect>
        <line
          x1="91.55018"
          y1="99.54921"
          x2="159.43243"
          y2="167.43146"
          fill="none"
          stroke="var(--redSalsa)"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="16"
        ></line>
        <path
          d="M216.00049,215.83348H72.07L34.98164,178.74517a16,16,0,0,1,0-22.62742L148.11873,42.98066a16,16,0,0,1,22.62741,0L216.001,88.2355a16,16,0,0,1,0,22.62742L111.03042,215.83347"
          fill="none"
          stroke="var(--redSalsa)"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="16"
        ></path>
      </StyledSvg>
    </Container>
  );
};

export default ResetStats;

const Container = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
  margin-top: 1rem;
`;

const StyledSvg = styled.svg`
  margin-left: 0.5rem;
`;

const Text = styled.p`
  margin: 0;
`;
