import { useEffect } from "react";
import { toast } from "react-toastify";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import styled from "styled-components";
import Button from "@/components/buttons/PushableButton";
import useAuth from "@/hooks/useAuth";

const Register = () => {
  const { register, error } = useAuth();

  useEffect(() => toast.error(error));

  const handleRegister = (formData) => {
    register(formData);
  };

  return (
    <Formik
      initialValues={{
        username: "",
        email: "",
        password: "",
        passwordConfirmation: "",
      }}
      validationSchema={Yup.object({
        username: Yup.string()
          .min(3, "Not less than 3 characters")
          .max(15, "Must be 15 characters or less")
          .required("How can I call you if I don't know your username??"),
        email: Yup.string()
          .email("Invalid email address")
          .required("Need an email address for authentication thing"),
        password: Yup.string()
          .required("Create a password to enter the world of Italian words")
          .matches(
            /^.*(?=.{8,})((?=.*[!@#$%^&*()\-_=+{};:,<.>]){1})(?=.*\d)((?=.*[a-z]){1})((?=.*[A-Z]){1}).*$/,
            "Password should contain at least 8 characters, one uppercase and lowercase character, a number, and a special character"
          ),
        passwordConfirmation: Yup.string().when("password", {
          is: (val) => (val && val.length > 0 ? true : false),
          then: Yup.string().oneOf(
            [Yup.ref("password")],
            "Both Passwords should be the same!"
          ),
        }),
      })}
      onSubmit={handleRegister}
    >
      <StyledForm>
        <Title>SignUp</Title>
        <Divider>
          <Label htmlFor="username">Username</Label>
          <Input type="text" name="username" />
          <ErrorMessage name="username" />
        </Divider>
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
        <Divider>
          <Label htmlFor="passwordConfirmation">Password Confirmation</Label>
          <Input type="password" name="passwordConfirmation" />
          <ErrorMessage name="passwordConfirmation" />
        </Divider>
        <ButtonWrapper>
          <Button type="submit">register</Button>
        </ButtonWrapper>
      </StyledForm>
    </Formik>
  );
};

export default Register;

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
  margin-bottom: 15px;
  text-decoration: underline var(--caribbeanGreen);
  text-decoration-thickness: 3px;
  text-underline-offset: 4px;
`;
