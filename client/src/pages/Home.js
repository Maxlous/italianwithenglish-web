import Illustration from "../components/Illustration";
import styled from "styled-components";
import Button from "../components/Button";

const Home = () => {
  return (
    <>
      <Section>
        <Wrapper>
          <h1 style={{ textAlign: "center" }}>Hello learner!</h1>
          <p>
            I assume that you are passionate about{" "}
            <GreenSpan>learning Italian</GreenSpan>. That's awesome!
          </p>
          <p>
            Struggling with your learning process or just would like to increase
            your vocabulary?
          </p>
          <p>Don't worry, you are covered.</p>
          <Button />
        </Wrapper>
        <Illustration
          imageSource="./images/lost.svg"
          imageAlt="A man is looking to a newspaper, seems confused"
        />
        <Illustration
          imageSource="./images/test.svg"
          imageAlt="A man is sitting and looking to his laptop"
        />
        <Wrapper>
          <p>
            Welcome to <GreenSpan>Italian with English</GreenSpan>
          </p>
          <h2>Here, you can learn over 300 words!</h2>
          <p>
            And the best part is you can{" "}
            <GreenSpan>do it with your English!</GreenSpan>
          </p>
          <p>Don't worry, not expecting high level of English.</p>
        </Wrapper>
        <Wrapper>
          <p>Bored from the cold faces of words?</p>
          <h2>
            There is also the expressions path <br /> with over 100 examples.
          </h2>
          <p>
            In this path, you can explore daily used Italian{" "}
            <GreenSpan>expressions and sentences!</GreenSpan>
          </p>
          <p>So come on, start speaking like native!</p>
        </Wrapper>
        <Illustration
          imageSource="./images/expressions.svg"
          imageAlt="A woman is holding a text diagram"
        />
        <Illustration
          imageSource="./images/statistics.svg"
          imageAlt="A man and woman looking to a graph"
        />
        <Wrapper>
          <p>
            When learning a new language, the most frustrating part is your
            perception about your progress.
          </p>
          <h2>You will know if you know!</h2>
          <p>
            While studying your words/expressions you can{" "}
            <GreenSpan>track your progress</GreenSpan>.
          </p>
          <p>And be cool, you will get better!</p>
          <Button />
        </Wrapper>
      </Section>
    </>
  );
};

export default Home;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
`;

const Section = styled.section`
  display: grid;
  grid-template-rows: 1fr 1fr 1fr 1fr;
  grid-template-columns: 1fr 1fr;
  gap: 5rem;
`;

const GreenSpan = styled.span`
  text-decoration: underline var(--caribbeanGreen);
  text-decoration-thickness: 3px;
  text-underline-offset: 3px;
`;
