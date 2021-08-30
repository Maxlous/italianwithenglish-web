import Layout from "@/components/Layout";
import styled from "styled-components";
import dynamic from "next/dynamic";
const RegisterForm = dynamic(() => import("@/components/forms/Register"), {
  ssr: false,
});

const Register = () => {
  return (
    <Layout title="Register Page">
      <Container>
        <RegisterForm />
      </Container>
    </Layout>
  );
};

export default Register;

const Container = styled.article`
  display: flex;
  justify-content: center;
  margin-top: 10vh;
`;
