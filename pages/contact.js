import ContactMe from "../components/ContactMe";
import ForDevelopers from "../components/ForDevelopers";
import styled from "styled-components";
import Layout from "../components/Layout";

const Contact = () => {
  return (
    <Layout>
      <Container>
        <ContactMe />
        <ForDevelopers />
      </Container>
    </Layout>
  );
};

export default Contact;

const Container = styled.article`
  height: 95vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  @media screen and (max-height: 570px) {
    height: initial;
  }
`;
