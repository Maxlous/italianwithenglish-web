import Layout from "@/components/Layout";
import styled from "styled-components";
import dynamic from "next/dynamic";
const LoginForm = dynamic(() => import("@/components/forms/Login"), {
  ssr: false,
});

const Login = () => {
  return (
    <Layout title="Login Page">
      <Container>
        <LoginForm />
      </Container>
    </Layout>
  );
};

export default Login;

const Container = styled.article`
  display: flex;
  justify-content: center;
  margin-top: 10vh;
`;
