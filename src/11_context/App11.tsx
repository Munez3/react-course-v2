import UserList from "./UserList";
import "./index.scss";
import AddUserForm from "./AddUserForm";

export default function App11() {
  return (
    <div className="d-flex">
      <div className="col-6">
        <AddUserForm />
      </div>
      <div className="col-6">
        <UserList />
      </div>
    </div>
  );
}
