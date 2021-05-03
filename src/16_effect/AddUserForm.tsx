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

  const [success, setSuccess] = useState(false);

  const inputRef = useRef<HTMLInputElement>(null);

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    setUser((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  }

  async function handleSubmit(e: React.SyntheticEvent) {
    e.preventDefault();
    await addUser(user);
    setSuccess(true);
    setUser({ firstName: "", lastName: "", age: "" });
    inputRef.current?.focus();

    setTimeout(() => {
      setSuccess(false);
    }, 2000);
  }

  return (
    <>
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
      {success && <div className="text-center">Dodano nowego uzytkownika</div>}
    </>
  );
}
