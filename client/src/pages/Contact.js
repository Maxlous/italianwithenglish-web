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
  position: absolute;
  width: 68%;
  top: 20vh;
`;
