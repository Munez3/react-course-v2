import { useEffect, useState } from "react";
import { useParams } from "react-router";
import api from "./api";
import { IUser } from "./UserContext";

export default function ChoosenUser() {
  const { id } = useParams<{ id: string | undefined }>();
  const [user, setUser] = useState<IUser | undefined>(undefined);

  useEffect(() => {
    api
      .get(`users/${id}`)
      .json<IUser>()
      .then((response) => setUser(response))
      .catch((error) => console.error(error));
  }, [id]);

  if (!user) {
    return null;
  }

  return (
    <div>
      <h1>
        {user.firstName} {user.lastName}
      </h1>
      wiek: {user.age}
    </div>
  );
}
