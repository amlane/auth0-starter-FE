import React from "react";
import NavBar from "./components/NavBar";
import ExternalApi from "./components/ExternalApi";
//import { useAuth0 } from "./react-auth0-spa";
import PrivateRoute from "./components/PrivateRoute";

import { BrowserRouter, Route, Switch } from "react-router-dom";
import Profile from "./components/Profile";

function App() {
  return (
    <div className="App">
      {/* New - use BrowserRouter to provide access to /profile */}
      <BrowserRouter>
        <header>
          <NavBar />
        </header>
        <Switch>
          <Route path="/" exact />
          <PrivateRoute path="/profile" component={Profile} />
          <PrivateRoute path="/external-api" component={ExternalApi} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;