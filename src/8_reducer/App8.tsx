import React, { useReducer, useRef, useState } from "react";
import UserList from "./UserList";

export interface IUser {
  id: number;
  firstName: string;
  lastName: string;
  age: string | number;
}

enum User {
  ADD,
}

function userReducer(
  state: IUser[],
  action: { type: User; payload: Omit<IUser, "id"> }
) {
  switch (action.type) {
    case User.ADD:
      const newId = state.length ? state[state.length - 1].id + 1 : 1;
      return state.concat({ id: newId, ...action.payload });
    default:
      return state;
  }
}

export default function App8() {
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

  return (
    <div>
      <form action="" onSubmit={handleSubmit}>
        <input
          ref={inputRef}
          placeholder="Imię"
          type="text"
          name="firstName"
          value={user.firstName}
          onChange={handleChange}
        />
        <input
          placeholder="Nazwisko"
          type="text"
          name="lastName"
          value={user.lastName}
          onChange={handleChange}
        />
        <input
          placeholder="Wiek"
          type="text"
          name="age"
          value={user.age}
          onChange={handleChange}
        />
        <button type="submit">Zapisz</button>
      </form>

      <UserList userList={userList} />
    </div>
  );
}
