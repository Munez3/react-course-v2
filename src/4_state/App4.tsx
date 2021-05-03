import { useState } from "react";
import User from "./User";

export default function App4() {
  const [name, setName] = useState("");
  const [counter, setCounter] = useState(0);

  return (
    <div>
      <div>{counter}</div>
      <input
        type="text"
        name="name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <button onClick={() => setCounter((prev) => prev + 1)}>Click me</button>

      <User name={name} />
    </div>
  );
}
