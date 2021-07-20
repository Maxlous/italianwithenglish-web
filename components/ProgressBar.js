import styled from "styled-components";

const ProgressBar = ({ pbColor, averageSuccess }) => {
  let progressbarBackground = {};

  if (pbColor === "correct-answer") {
    progressbarBackground = "#17C390";
  }

  if (pbColor === "wrong-answer") {
    progressbarBackground = "#FE4D53";
  }
  return (
    <Container className="progress">
      <div
        className="progress-bar progress-bar-striped"
        role="progressbar"
        style={{
          width: `${averageSuccess}%`,
          backgroundColor: `${progressbarBackground}`,
        }}
        aria-valuenow={averageSuccess}
        aria-valuemin="0"
        aria-valuemax="100"
      >
        {averageSuccess} %
      </div>
    </Container>
  );
};

export default ProgressBar;

const Container = styled.div`
  width: 60em;
  align-self: center;
  @media screen and (max-width: 760px) {
    width: 90%;
  }
`;
