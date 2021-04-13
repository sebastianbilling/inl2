import {
    BrowserRouter as Router,
    Switch,
    Route,
  } from "react-router-dom";
  import Home from "../views/HomeView/Home";
  import Login from "../views/LoginView/Login";
  
  const Routing = () => {
    return (
      <Router>
          <Switch>
            <Route path="/Home">
              <Home />
            </Route>
            <Route path="/">
              <Login />
            </Route>
          </Switch>
      </Router>
    );
  }
  
  export default Routing