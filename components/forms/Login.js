import * as Yup from "yup";
import { Formik, Field, Form, ErrorMessage } from "formik";
import Button from "@/components/PushableButton";

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
      <Form>
        <label htmlFor="email">Email</label>
        <Field type="email" name="email" />
        <ErrorMessage name="email" />

        <label htmlFor="password">Password</label>
        <Field type="password" name="password" />
        <ErrorMessage name="password" />

        <Button type="submit">login</Button>
      </Form>
    </Formik>
  );
};

export default LoginForm;
