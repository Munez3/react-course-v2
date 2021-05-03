import {
  createContext,
  ReactElement,
  useContext,
  useEffect,
  useReducer,
} from "react";
import api from "./api";

interface IUserContext {
  userList: IUser[];
  addUser: (user: Omit<IUser, "id">) => void;
  deleteUser: (id: number) => void;
}

const UserContext = createContext<IUserContext>({
  userList: [],
  addUser: () => {},
  deleteUser: () => {},
});

export interface IUser {
  id: number;
  firstName: string;
  lastName: string;
  age: string | number;
}

enum User {
  ADD,
  DELETE,
  REPLACE,
}

function userReducer(
  state: IUser[],
  action: { type: User; payload: IUser | { id: number } | IUser[] }
) {
  switch (action.type) {
    case User.ADD:
      return state.concat(action.payload as IUser);
    case User.DELETE:
      if ("id" in action.payload) {
        const { id } = action.payload;
        return state.filter((user) => user.id !== id);
      }
      return state;
    case User.REPLACE:
      if (Array.isArray(action.payload)) {
        return action.payload;
      }
      return state;
    default:
      return state;
  }
}

export function UserProvider({
  children,
}: {
  children: ReactElement[] | ReactElement;
}) {
  const [userList, dispatch] = useReducer(userReducer, []);

  async function handleAdd(user: Omit<IUser, "id">) {
    try {
      const response = await api.post("users", { json: user }).json<IUser>();
      dispatch({ type: User.ADD, payload: response });
    } catch (error) {
      console.error(error);
    }
  }

  async function handleDelete(id: number) {
    try {
      await api.delete(`users/${id}`).json();
      dispatch({ type: User.DELETE, payload: { id } });
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    api
      .get("users")
      .json<IUser[]>()
      .then((response: IUser[]) => {
        dispatch({ type: User.REPLACE, payload: response });
      });
  }, []);

  return (
    <UserContext.Provider
      value={{ userList, deleteUser: handleDelete, addUser: handleAdd }}
    >
      {children}
    </UserContext.Provider>
  );
}

export const useUserContext = (): IUserContext => useContext(UserContext);
