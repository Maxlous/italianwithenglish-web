import './styles/App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { routes } from './config/Router';
import Layout from './components/Layout';

function App() {


  return (
    <Router>
        <Switch>
        {routes.map((route, index) => (
          <Route path={route.path} exact={route.exact} key={index}>
            <Layout>{route.component}</Layout>
          </Route>
        ))}
        </Switch>
    </Router>
  );
}

export default App;