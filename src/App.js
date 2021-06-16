import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { Home, Modal, Increment, Quis, QuisSummary } from "./pages";
import { NavbarComponent } from "./component";

function App() {
  return (
    <Router>
      <div>
        <NavbarComponent />
        {/* ======================================= */}
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/modal" component={Modal} />
          <Route exact path="/increment" component={Increment} />
          <Route exact path="/quis" component={Quis} />
          <Route exact path="/quissummary" component={QuisSummary} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
