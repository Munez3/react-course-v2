interface IProps {
  firstName: string;
  lastName: string;
}

export default function User({ firstName, lastName }: IProps) {
  // if (!firstName && !lastName) {
  //   return <>Brak</>;
  // }

  return (
    <div>
      {firstName || lastName ? (
        <div>
          Hello {firstName} {lastName}
        </div>
      ) : (
        "Brak"
      )}
    </div>
  );
}
