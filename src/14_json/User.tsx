import { IUser, useUserContext } from "./UserContext";

interface IProps {
  user: IUser;
}

export default function User({ user }: IProps) {
  const { deleteUser } = useUserContext();
  return (
    <li>
      Hello {user.firstName} {user.lastName} {user.age}{" "}
      <button className="btn" onClick={() => deleteUser(user.id)}>
        usuń
      </button>
    </li>
  );
}
