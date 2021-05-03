import { IUser } from "./App8";

interface IProps {
  user: IUser;
}

export default function User({ user }: IProps) {
  return (
    <li>
      Hello {user.firstName} {user.lastName} {user.age}
    </li>
  );
}
