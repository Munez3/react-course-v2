import { createContext, ReactElement, useContext, useReducer } from "react";

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
}

function userReducer(
  state: IUser[],
  action: { type: User; payload: Omit<IUser, "id"> | { id: number } }
) {
  switch (action.type) {
    case User.ADD:
      if (!("id" in action.payload)) {
        const newId = state.length ? state[state.length - 1].id + 1 : 1;
        return state.concat({ id: newId, ...action.payload });
      }
      return state;
    case User.DELETE:
      if ("id" in action.payload) {
        const { id } = action.payload;
        return state.filter((user) => user.id !== id);
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

  function handleAdd(user: Omit<IUser, "id">) {
    dispatch({ type: User.ADD, payload: user });
  }

  function handleDelete(id: number) {
    dispatch({ type: User.DELETE, payload: { id } });
  }

  return (
    <UserContext.Provider
      value={{ userList, deleteUser: handleDelete, addUser: handleAdd }}
    >
      {children}
    </UserContext.Provider>
  );
}

export const useUserContext = (): IUserContext => useContext(UserContext);
