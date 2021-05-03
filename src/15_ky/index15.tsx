import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import AddUserForm from "./AddUserForm";
import App from "./App";
import { UserProvider } from "./UserContext";
import UserList from "./UserList";
import "./index.scss";
import { Nav, Navbar, NavItem, ScLink } from "./styled";
import api from "./api";

api.post("users", {
  json: { firstName: "Marek", lastName: "Nowak", age: "33" },
});

export default function Index15() {
  api
    .get("users")
    .json()
    .then((response) => console.log(response));

  return (
    <Router>
      <Navbar>
        <Nav>
          <NavItem>
            <ScLink to="/" home>
              Home
            </ScLink>
          </NavItem>
          <NavItem>
            <ScLink to="/users">Uzytkownicy</ScLink>
          </NavItem>
          <NavItem>
            <ScLink to="/user/add">Dodaj uzytkownika</ScLink>
          </NavItem>
        </Nav>
      </Navbar>

      <UserProvider>
        <Switch>
          <Route path="/user/add">
            <AddUserForm />
          </Route>
          {/* <Route path="/user/:id">
            <User />
          </Route> */}
          <Route path="/users">
            <UserList />
          </Route>
          <Route path="/">
            <App />
          </Route>
        </Switch>
      </UserProvider>
    </Router>
  );
}
