import { memo } from "react";
import { IUser } from "./App8";
import User from "./User";

interface IProps {
  userList: IUser[];
}
export default memo(function UserList({ userList }: IProps) {
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
