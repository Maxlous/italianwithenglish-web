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
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 50%;
  align-items: center;
`;
