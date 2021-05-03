import { IUser } from "./App10";

interface IProps {
  user: IUser;
  deleteUser: (id: number) => void;
}

export default function User({ user, deleteUser }: IProps) {
  return (
    <li>
      Hello {user.firstName} {user.lastName} {user.age}{" "}
      <button className="btn" onClick={() => deleteUser(user.id)}>
        usuń
      </button>
    </li>
  );
}
