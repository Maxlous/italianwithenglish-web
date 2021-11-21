import styled from "styled-components";
import WhiteLogo from "@/components/WhiteLogo";
import Button from "@/components/buttons/PushableButton";
import IndicatorArrows from "@/components/IndicatorArrows";
import Layout from "@/components/Layout";
import useAuth from "@/hooks/useAuth";

const Exercises = () => {
  const { user } = useAuth();

  return (
    <Layout>
      <Container>
        <Heading>{`What would you like to study ${
          user ? user.username : ""
        }?`}</Heading>
        <Wrapper>
          <PathContainer>
            <SubHeading>play with awesome words...</SubHeading>
            <IndicatorArrows />
            <Button path="words">GO</Button>
          </PathContainer>
          <PathContainer>
            <SubHeading>tackle with cool expressions..</SubHeading>
            <IndicatorArrows />
            <Button path="expressions">GO</Button>
          </PathContainer>
        </Wrapper>
        <WhiteLogo />
      </Container>
    </Layout>
  );
};

export default Exercises;

const Container = styled.article`
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

const PathContainer = styled.section`
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
