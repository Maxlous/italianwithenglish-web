import { useEffect } from "react";
import { ThemeProvider } from "../context/ThemeContext";
import { AuthProvider } from "../context/AuthContext";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "bootstrap/dist/css/bootstrap.min.css";

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    typeof document !== "undefined"
      ? require("bootstrap/dist/js/bootstrap.js")
      : null;
  }, []);
  return (
    <AuthProvider>
      <ThemeProvider>
        <Component {...pageProps} />
        <ToastContainer theme="dark" />
      </ThemeProvider>
    </AuthProvider>
  );
}

export default MyApp;
