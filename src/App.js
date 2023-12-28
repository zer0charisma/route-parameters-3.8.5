// Q SOLUTION!!!!

import React from "react";
import { Link, Route, Switch } from "react-router-dom";
import UserProfile from "./UserProfile";

function Home() {
  return <p>Home</p>;
}
function NewUser() {
  return <h1>Unable to create a new user</h1>;
}
function NotFound() {
  return <h1>404 Not Found</h1>;
}
function App() {
  return (
    <div className="App">
      <div>
        <Link to="/">Home</Link>
        <br/>
        <Link to="/user/new">New User</Link>
      </div>
      {Array(10)
          .fill()
          .map((ignoredValue, index) => index + 1)
          .map((id) => (
            <div key={id}>
              <Link to={`/user/${id}`} data-testid={`user-${id}`}></Link>
            </div>
          ))}
        <Switch>
          <Route exact={true} path="/">
            <Home />
          </Route>
        <Route path="/user/new"> 
            <NewUser />
          </Route>
        <Route path="/user/:userId">
            <UserProfile />
          </Route>
          <Route path="*">
            <NotFound />
          </Route>
      </Switch>
    </div>
  );
}
export default App;
