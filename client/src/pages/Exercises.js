import styled from "styled-components";
import WhiteLogo from "../components/WhiteLogo";
import Button from "../components/PathsButton";
import IndicatorArrows from "../components/IndicatorArrows";

const Exercises = () => {
  return (
    <Main>
      <Heading>What would you like to study?</Heading>
      <Wrapper>
        <PathContainer>
          <SubHeading>play with awesome words...</SubHeading>
          <IndicatorArrows />
          <Button path="words" />
        </PathContainer>
        <PathContainer>
          <SubHeading>tackle with cool expressions..</SubHeading>
          <IndicatorArrows />
          <Button path="expressions" />
        </PathContainer>
      </Wrapper>
      <WhiteLogo />
    </Main>
  );
};

export default Exercises;

const Main = styled.main`
  margin-top: 20vh;
  @media screen and (max-width: 640px) {
    margin-top: 5vh;
  }
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: space-evenly;
  margin-bottom: 1rem;
  @media screen and (max-width: 640px) {
    flex-direction: column;
    align-items: center;
    margin-bottom: 2rem;
  }
`;

const PathContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  width: 30rem;
  height: 20rem;
`;

const Heading = styled.h1`
  text-align: center;
`;

const SubHeading = styled.h2`
  margin-top: 2.5rem;
  text-decoration: underline var(--caribbeanGreen);
  text-decoration-thickness: 8px;
  text-underline-offset: 10px;
  @media screen and (max-width: 370px) {
    font-size: 20px;
  }
`;
