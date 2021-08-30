import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import Button from "@/components/PushableButton";

const Register = () => {
  const handleRegister = () => {};
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
            "Password should contain 8 characters, one uppercase and lowercase character, a number and a special character"
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
      <Form>
        <label htmlFor="username">Username</label>
        <Field type="text" name="username" />
        <ErrorMessage name="username" />

        <label htmlFor="email">Email</label>
        <Field type="email" name="email" />
        <ErrorMessage name="email" />

        <label htmlFor="password">Password</label>
        <Field type="password" name="password" />
        <ErrorMessage name="password" />

        <label htmlFor="passwordConfirmation">Password Confirmation</label>
        <Field type="password" name="passwordConfirmation" />
        <ErrorMessage name="passwordConfirmation" />

        <Button type="submit">register</Button>
      </Form>
    </Formik>
  );
};

export default Register;
