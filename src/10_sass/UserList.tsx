import { memo } from "react";
import { IUser } from "./App10";
import User from "./User";

interface IProps {
  userList: IUser[];
  deleteUser: (id: number) => void;
}
export default memo(function UserList({ userList, deleteUser }: IProps) {
  if (!userList.length) {
    return <>Brak</>;
  }

  return (
    <ul>
      {userList.map((user) => (
        <User key={user.id} user={user} deleteUser={deleteUser} />
      ))}
    </ul>
  );
});
