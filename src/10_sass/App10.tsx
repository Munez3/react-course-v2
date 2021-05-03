import { useReducer, useRef, useState } from "react";
import UserList from "./UserList";
import "./index.scss";

export interface IUser {
  id: number;
  firstName: string;
  lastName: string;
  age: string | number;
}

enum User {
  ADD,
  DELETE,
}

function userReducer(
  state: IUser[],
  action: { type: User; payload: Omit<IUser, "id"> | { id: number } }
) {
  switch (action.type) {
    case User.ADD:
      if (!("id" in action.payload)) {
        const newId = state.length ? state[state.length - 1].id + 1 : 1;
        return state.concat({ id: newId, ...action.payload });
      }
      return state;
    case User.DELETE:
      if ("id" in action.payload) {
        const { id } = action.payload;
        return state.filter((user) => user.id !== id);
      }
      return state;
    default:
      return state;
  }
}

export default function App10() {
  const [user, setUser] = useState<{
    firstName: string;
    lastName: string;
    age: number | string;
  }>({
    firstName: "",
    lastName: "",
    age: "",
  });
  const [userList, dispatch] = useReducer(userReducer, []);

  const inputRef = useRef<HTMLInputElement>(null);

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    setUser((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  }

  function handleSubmit(e: React.SyntheticEvent) {
    e.preventDefault();
    dispatch({ type: User.ADD, payload: user });
    setUser({ firstName: "", lastName: "", age: "" });
    inputRef.current?.focus();
  }

  function handleDelete(id: number) {
    dispatch({ type: User.DELETE, payload: { id } });
  }

  return (
    <div className="d-flex">
      <div className="col-6">
        <form action="" onSubmit={handleSubmit} className="form">
          <input
            className="form__input"
            ref={inputRef}
            placeholder="Imię"
            type="text"
            name="firstName"
            value={user.firstName}
            onChange={handleChange}
          />
          <input
            className="form__input"
            placeholder="Nazwisko"
            type="text"
            name="lastName"
            value={user.lastName}
            onChange={handleChange}
          />
          <input
            className="form__input"
            placeholder="Wiek"
            type="text"
            name="age"
            value={user.age}
            onChange={handleChange}
          />
          <button className="btn" type="submit">
            Zapisz
          </button>
        </form>
      </div>
      <div className="col-6">
        <UserList userList={userList} deleteUser={handleDelete} />
      </div>
    </div>
  );
}
