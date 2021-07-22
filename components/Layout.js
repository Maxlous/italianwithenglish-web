import Header from "./Header";
import Head from "next/head";

const Layout = ({ title, keywords, description, children }) => {
  return (
    <div>
      <Head>
        <title>{title}</title>
        <meta
          name="keywords"
          content={`italian, english, learn, test, language, ${keywords}`}
        />
        <meta name="description" content={description} />
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/logo.ico" />
      </Head>
      <Header />
      <main>{children}</main>
    </div>
  );
};

Layout.defaultProps = {
  title: "Italian with English",
  keywords: "",
  description: "Learn Italian words and expressions with your English!",
};

export default Layout;
