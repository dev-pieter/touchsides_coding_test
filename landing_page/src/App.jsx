import Home from './lib/components/Home'
import Nav from './lib/components/Nav'
import Contact from './lib/components/Contact'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

function App() {
  return (
    <>
    <Router>
    <Nav></Nav>
      <Switch>
            <Route path="/about">
              THERE
            </Route>
            <Route path="/contact">
              <Contact/>
            </Route>
            <Route path="/">
              <Home/>
            </Route>
      </Switch>
    </Router>
    </>
  );
}

export default App;
