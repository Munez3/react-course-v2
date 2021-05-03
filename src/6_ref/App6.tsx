import React, { useRef, useState } from "react";
import User from "./User";

export default function App6() {
  const [user, setUser] = useState<{ firstName: string; lastName: string }>({
    firstName: "",
    lastName: "",
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
    setUser({ firstName: "", lastName: "" });
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
        <button type="submit">Zapisz</button>
      </form>

      <User {...user} />
    </div>
  );
}
