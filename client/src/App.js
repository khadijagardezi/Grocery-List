import "./App.css";
import { Switch, Route } from "react-router-dom";

import Signup from "./components/Signup";
import Login from "./components/Login";
import Home from "./components/Home";

function App() {
  return (
    <div className="App">
      {/* switching pages */}

      <Switch>
        <Route path="/Signup">
          <Signup />
        </Route>

        <Route path="/Login">
          <Login />
        </Route>

        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
