import { VscGithubAlt } from "react-icons/vsc";
import styled from "styled-components";

const ForDevelopers = () => {
  return (
    <Article>
      <Wrapper>
        <h3 style={{ textAlign: "center" }}>Are you a developer?</h3>
        <p style={{ textAlign: "center" }}>
          <strong>
            Join me on Github to contribute this project to help people learning
            Italian!
          </strong>
        </p>
        <div>
          <a
            rel="noreferrer"
            href="https://github.com/Maxlous/learnItalian"
            target="_blank"
          >
            <VscGithubAlt size="3em" style={{ cursor: "pointer" }} />
          </a>
        </div>
      </Wrapper>
    </Article>
  );
};

export default ForDevelopers;

const Article = styled.article`
  display: flex;
  flex-direction: column;
  padding-top: 5em;
  padding-bottom: 5em;
  border-bottom: 3px solid var(--redSalsa);
  align-items: flex-end;
  margin-right: 10%;
  margin-left: 10%;
  @media screen and (max-width: 640px) {
    padding: 2em 0;
  }
  @media screen and (max-height: 570px) {
    padding: 0.5em 0;
  }
  @media screen and (max-height: 970px) {
    padding: 1.5em 0;
  }
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 50%;
  align-items: center;
  @media screen and (max-width: 1024px) {
    align-self: center;
  }
  @media screen and (max-width: 640px) {
    max-width: 100%;
  }
`;
