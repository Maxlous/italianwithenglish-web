import { MdContactMail } from "react-icons/md";
import styled from "styled-components";

const ContactMe = () => {
  return (
    <Article>
      <Wrapper>
        <Heading3>Would you like to say something?</Heading3>
        <Paragraph>
          <strong>
            {
              "If you find any bug/inconvenience or wish to see a new feature please let me know!"
            }
            <br />
            {"Of course, you can also just write to say thanks or hello :)"}
          </strong>
        </Paragraph>
        <div>
          <a
            rel="noreferrer"
            href="mailto: byburock34@gmail.com"
            target="_blank"
          >
            <MdContactMail size="3em" style={{ cursor: "pointer" }} />
          </a>
        </div>
      </Wrapper>
    </Article>
  );
};

export default ContactMe;

const Article = styled.article`
  display: flex;
  flex-direction: column;
  padding-top: 5em;
  padding-bottom: 5em;
  border-top: 3px solid var(--caribbeanGreen);
  border-bottom: 3px solid var(--floralWhite);
  align-items: flex-start;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 50%;
  align-items: center;
`;

const Paragraph = styled.p`
  text-align: center;
`;

const Heading3 = styled.h3`
  text-align: center;
`;
