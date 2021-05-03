import App11 from "./App11";
import { UserProvider } from "./UserContext";

export default function Index11() {
  return (
    <UserProvider>
      <App11 />
    </UserProvider>
  );
}
