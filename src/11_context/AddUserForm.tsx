import { useRef, useState } from "react";
import "./index.scss";
import { useUserContext } from "./UserContext";

export default function AddUserForm() {
  const { addUser } = useUserContext();

  const [user, setUser] = useState<{
    firstName: string;
    lastName: string;
    age: number | string;
  }>({
    firstName: "",
    lastName: "",
    age: "",
  });

  const inputRef = useRef<HTMLInputElement>(null);

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    setUser((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  }

  function handleSubmit(e: React.SyntheticEvent) {
    e.preventDefault();
    addUser(user);
    setUser({ firstName: "", lastName: "", age: "" });
    inputRef.current?.focus();
  }

  return (
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
  );
}
