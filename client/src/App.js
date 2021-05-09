import { useContext } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { routes } from "./config/Router";
import Layout from "./components/Layout";
import { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme } from "./styles/themes.js";
import { ItalianContext } from "./context/ItalianContext";
import { GlobalStyles } from "./styles/GlobalStyles.js";

function App() {
  const { theme } = useContext(ItalianContext);

  return (
    <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
      <GlobalStyles />
      <Router>
        <Switch>
          {routes.map((route, index) => (
            <Route path={route.path} exact={route.exact} key={index}>
              <Layout>{route.component}</Layout>
            </Route>
          ))}
        </Switch>
      </Router>
    </ThemeProvider>
  );
}

export default App;
