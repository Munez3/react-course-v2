import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import AddUserForm from "./AddUserForm";
import App from "./App";
import { UserProvider } from "./UserContext";
import UserList from "./UserList";
import "./index.scss";

export default function Index12() {
  return (
    <Router>
      <nav>
        <ul className="nav">
          <li className="nav__item">
            <Link to="/">Home</Link>
          </li>
          <li className="nav__item">
            <Link to="/users">Uzytkownicy</Link>
          </li>
          <li className="nav__item">
            <Link to="/user/add">Dodaj uzytkownika</Link>
          </li>
        </ul>
      </nav>

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
