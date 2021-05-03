import { Link } from "react-router-dom";
import { IUser, useUserContext } from "./UserContext";

interface IProps {
  user: IUser;
}

export default function User({ user }: IProps) {
  const { deleteUser } = useUserContext();
  return (
    <li>
      Hello {user.firstName} {user.lastName} {user.age}{" "}
      <Link to={`/user/${user.id}`}>Pokaz szczegóły</Link>
      <button className="btn" onClick={() => deleteUser(user.id)}>
        usuń
      </button>
    </li>
  );
}
