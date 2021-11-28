import Layout from "@/components/Layout";
import PushableButton from "@/components/buttons/PushableButton";
import Illustration from "@/components/Illustration";
import styled from "styled-components";

function Custom404() {
  return (
    <Layout>
      <Illustration
        imageSource="./images/not_found.svg"
        imageAlt="404 Page Not Found"
        style={{ marginTop: 50 }}
      />
      <Text>Page Not Found</Text>
      <ButtonWrapper>
        <PushableButton path="/">Return Home</PushableButton>
      </ButtonWrapper>
    </Layout>
  );
}

export default Custom404;

const Text = styled.h1`
  text-align: center;
  margin-top: 15px;
`;

const ButtonWrapper = styled.div`
  margin: auto;
  margin-top: 25px;
  width: 150px;
`;
