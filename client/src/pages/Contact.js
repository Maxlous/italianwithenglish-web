import ContactMe from "../components/ContactMe";
import ForDevelopers from "../components/ForDevelopers";
import styled from "styled-components";

const Contact = () => {
  return (
    <Main>
      <ContactMe />
      <ForDevelopers />
    </Main>
  );
};

export default Contact;

const Main = styled.main`
  height: 95vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  @media screen and (max-height: 570px) {
    height: initial;
  }
`;
