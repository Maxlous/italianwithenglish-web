/* eslint-disable react/no-unescaped-entities */
import Illustration from "@/components/Illustration";
import styled from "styled-components";
import Layout from "@/components/Layout";
import dynamic from "next/dynamic";

const Button = dynamic(() => import("../components/buttons/HomePageButton"), {
  ssr: false,
});

const Home = () => {
  return (
    <Layout>
      <Section>
        <Wrapper className="first">
          <Header>Hello learner!</Header>
          <Paragraph>
            I assume that you are passionate about{" "}
            <GreenSpan>learning Italian</GreenSpan>. That's awesome!
          </Paragraph>
          <Paragraph>
            Struggling with your learning process or just would like to increase
            your vocabulary?
          </Paragraph>
          <Paragraph>Don't worry, you are covered.</Paragraph>
          <Button />
        </Wrapper>
        <Illustration
          imageSource="./images/lost.svg"
          imageAlt="A man is looking to a newspaper, seems confused"
          className="img1"
        />
        <Illustration
          imageSource="./images/test.svg"
          imageAlt="A man is sitting and looking to his laptop"
          className="img2"
        />
        <Wrapper className="second">
          <Paragraph>
            Welcome to <GreenSpan>Italian with English</GreenSpan>
          </Paragraph>
          <SubHeader>Here, you can learn over 300 words!</SubHeader>
          <Paragraph>
            And the best part is you can{" "}
            <GreenSpan>do it with your English!</GreenSpan>
          </Paragraph>
          <Paragraph>
            Don't worry, not expecting high level of English.
          </Paragraph>
        </Wrapper>
        <Wrapper className="third">
          <Paragraph>Bored from the cold faces of words?</Paragraph>
          <SubHeader>
            There is also the expressions path <br /> with over 100 examples.
          </SubHeader>
          <Paragraph>
            In this path, you can explore daily used Italian{" "}
            <GreenSpan>expressions and sentences!</GreenSpan>
          </Paragraph>
          <Paragraph>So come on, start speaking like native!</Paragraph>
        </Wrapper>
        <Illustration
          imageSource="./images/expressions.svg"
          imageAlt="A woman is holding a text diagram"
          className="img3"
        />
        <Illustration
          imageSource="./images/statistics.svg"
          imageAlt="A man and woman looking to a graph"
          className="img4"
        />
        <Wrapper className="fourth">
          <Paragraph>
            When learning a new language, the most frustrating part is your
            perception about your progress.
          </Paragraph>
          <SubHeader>You will know if you know!</SubHeader>
          <Paragraph>
            While studying your words/expressions you can{" "}
            <GreenSpan>track your progress</GreenSpan>.
          </Paragraph>
          <Paragraph>And be cool, you will get better!</Paragraph>
          <Button />
        </Wrapper>
      </Section>
    </Layout>
  );
};

export default Home;

const Section = styled.section`
  display: grid;
  grid-template-rows: 1fr 1fr 1fr 1fr;
  grid-template-columns: 1fr 1fr;
  @media screen and (max-width: 414px) {
    margin-top: 0.8rem;
  }
  @media screen and (max-width: 900px) {
    .first {
      grid-area: firstText;
    }
    .second {
      grid-area: secondText;
    }
    .third {
      grid-area: thirdText;
    }
    .fourth {
      grid-area: fourthText;
    }
    .img1 {
      grid-area: pic1;
    }
    .img2 {
      grid-area: pic2;
    }
    .img3 {
      grid-area: pic3;
    }
    .img4 {
      grid-area: pic4;
    }
    grid-template-rows: repeat(8, 1fr);
    grid-template-columns: 1fr;
    grid-template-areas:
      "firstText"
      "pic1"
      "secondText"
      "pic2"
      "thirdText"
      "pic3"
      "fourthText"
      "pic4";
  }
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-bottom: 0.8rem;
`;

const GreenSpan = styled.span`
  text-decoration: underline var(--caribbeanGreen);
  text-decoration-thickness: 3px;
  text-underline-offset: 5px;
`;

const Header = styled.h1`
  text-align: center;
`;

const SubHeader = styled.h2`
  text-align: center;
`;

const Paragraph = styled.p`
  text-align: center;
  @media screen and (max-width: 640px) {
    font-size: 0.9em;
  }
`;
