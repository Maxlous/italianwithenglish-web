import "../styles/globals.css";
import Italian from "../context/ItalianContext";
import "bootstrap/dist/css/bootstrap.min.css";
import { useEffect } from "react";

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    typeof document !== undefined
      ? require("bootstrap/dist/js/bootstrap.js")
      : null;
  }, []);
  return (
    <Italian>
      <Component {...pageProps} />
    </Italian>
  );
}

export default MyApp;
