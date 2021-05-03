import { memo } from "react";
import User from "./User";
import { useUserContext } from "./UserContext";

export default memo(function UserList() {
  const { userList } = useUserContext();

  if (!userList.length) {
    return <>Brak</>;
  }

  return (
    <ul>
      {userList.map((user) => (
        <User key={user.id} user={user} />
      ))}
    </ul>
  );
});
