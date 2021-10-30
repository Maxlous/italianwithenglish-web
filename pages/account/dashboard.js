import Layout from "@/components/Layout";
import styled from "styled-components";

const dashboard = () => {
  return (
    <Layout>
      <Container>
        <h1>this is dashboard</h1>
      </Container>
    </Layout>
  );
};

export default dashboard;

const Container = styled.article`
  display: flex;
  justify-content: center;
  margin-top: 10vh;
`;
