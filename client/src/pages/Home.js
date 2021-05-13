import Illustration from "../components/Illustration";
import styled from "styled-components";

const Home = () => {
  return (
    <>
      <Section>
        <Wrapper>
          <h1>Hello learner!</h1>
          <p>
            I assume that you are passionate about learning <span>Italian</span>
            . That's awesome!
          </p>
          <p>But struggling with your learning process? </p>
          <p>Or maybe just would like to increase your vocabulary?</p>
          <h3>Don't worry, you are covered.</h3>
        </Wrapper>
        <Illustration
          imageSource="./images/lost.svg"
          imageAlt="A man is looking to a newspaper, seems confused"
        />
        <Wrapper>
          <p>
            Welcome to <span>Italian with English</span>
          </p>
          <h3>Here, you can learn over 300 words!</h3>
          <p>
            And the best part is you can do it with your <span>English!</span>
          </p>
          <p>Don't worry, not expecting high level of English.</p>
        </Wrapper>
        <Illustration
          imageSource="./images/test.svg"
          imageAlt="A man is sitting and looking to his laptop"
        />
        <Wrapper>
          <p>Bored from the cold faces of words?</p>
          <h3>
            There is also the expressions path <br /> with over 100 examples.
          </h3>
          <p>
            In this path, you can explore daily used Italian
            <span>expressions and sentences!</span>
          </p>
          <p>Start speaking like native!</p>
        </Wrapper>
        <Illustration
          imageSource="./images/expressions.svg"
          imageAlt="A woman is holding a text diagram"
        />
        <Wrapper>
          <p>
            When learning a new language, the most frustrating part is your
            perception about your progress.
          </p>
          <h3>You will know if you know!</h3>
          <p>
            While studying your words/expressions you can track your
            <span>progress</span>. <br /> And be cool, you will get better!
          </p>
        </Wrapper>
        <Illustration
          imageSource="./images/statistics.svg"
          imageAlt="A man and woman looking to a graph"
        />
      </Section>
    </>
  );
};

export default Home;

const Wrapper = styled.div``;
const Section = styled.section`
  display: flex;
  flex-wrap: wrap;
`;
