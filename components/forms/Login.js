import * as Yup from "yup";
import { Formik, Field, Form, ErrorMessage } from "formik";
import styled from "styled-components";
import Button from "@/components/buttons/PushableButton";

const LoginForm = () => {
  const handleLogin = () => {
    console.warn("submitted");
  };

  return (
    <Formik
      initialValues={{ email: "", password: "" }}
      validationSchema={Yup.object({
        email: Yup.string()
          .email("Invalid email address")
          .required("You should provide an email address to login"),
        password: Yup.string().required(
          "How can I log you in if you don't enter any password huh?"
        ),
      })}
      onSubmit={handleLogin}
    >
      <StyledForm>
        <Title>SignIn</Title>
        <Divider>
          <Label htmlFor="email">Email</Label>
          <Input type="email" name="email" />
          <ErrorMessage name="email" />
        </Divider>
        <Divider>
          <Label htmlFor="password">Password</Label>
          <Input type="password" name="password" />
          <ErrorMessage name="password" />
        </Divider>
        <ButtonWrapper>
          <Button type="submit">login</Button>
        </ButtonWrapper>
      </StyledForm>
    </Formik>
  );
};

export default LoginForm;

const StyledForm = styled(Form)`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 50%;
`;

const Divider = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
  margin-bottom: 20px;
  color: var(--redSalsa);
`;

const ButtonWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
  margin-top: 20px;
`;

const Title = styled.h2`
  text-align: center;
  margin-bottom: 20px;
  color: ${(props) => props.theme.fontColor};
  text-decoration: underline var(--caribbeanGreen);
  text-decoration-thickness: 5px;
  text-underline-offset: 7px;
`;

const Input = styled(Field)`
  border-radius: 10px;
  outline: none;
  border: none;
  box-shadow: 0 0 0 1pt grey;
  height: 35px;
  color: ${(props) => props.theme.formInput};
  margin-bottom: 8px;
  padding-left: 10px;
  &:focus {
    box-shadow: 0 0 3pt 2pt ${(props) => props.theme.fontColor};
  }
`;

const Label = styled.label`
  margin-bottom: 10px;
`;
