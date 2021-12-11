import { useEffect } from "react";
import { ThemeProvider } from "../context/ThemeContext";
import { AuthProvider } from "../context/AuthContext";
import { ToastContainer } from "react-toastify";
import Script from "next/script";
import { useRouter } from "next/router";
import * as gtag from "../lib/gtag";
import "react-toastify/dist/ReactToastify.css";
import "bootstrap/dist/css/bootstrap.min.css";

function MyApp({ Component, pageProps }) {
  const router = useRouter();

  useEffect(() => {
    const handleRouteChange = (url) => {
      gtag.pageview(url);
    };
    router.events.on("routeChangeComplete", handleRouteChange);
    return () => {
      router.events.off("routeChangeComplete", handleRouteChange);
    };
  }, [router.events]);

  useEffect(() => {
    typeof document !== "undefined"
      ? require("bootstrap/dist/js/bootstrap.js")
      : null;
  }, []);

  return (
    <>
      <Script
        strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtag/js?id=${gtag.GA_TRACKING_ID}`}
      />
      <Script
        id="gtag-init"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${gtag.GA_TRACKING_ID}', {
              page_path: window.location.pathname,
            });
          `,
        }}
      />
      <script
        data-ad-client="ca-pub-6508190625272944"
        async
        src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"
      ></script>
      <AuthProvider>
        <ThemeProvider>
          <Component {...pageProps} />
          <ToastContainer
            theme="colored"
            draggable={true}
            draggablePercent={60}
          />
        </ThemeProvider>
      </AuthProvider>
    </>
  );
}

export default MyApp;
