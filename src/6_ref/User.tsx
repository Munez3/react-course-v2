interface IProps {
  firstName: string;
  lastName: string;
}

export default function User({ firstName, lastName }: IProps) {
  return (
    <div>
      Hello {firstName} {lastName}
    </div>
  );
}
