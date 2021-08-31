import "./Css/style.scss";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from "./Pages/Home";
import Sports from "./Pages/Sports";
import Location from "./Pages/Location";
import Teams from "./Pages/Teams";
function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/sports">
            <Sports />
          </Route>
          <Route path="/CRICKET">
            <Location />
          </Route>
          <Route path="/FOOTBALL">
            <Location />
          </Route>
          <Route path="/BADMINTON">
            <Location />
          </Route>
          <Route path="/teams">
            <Teams />
          </Route>
          <Route exact path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
