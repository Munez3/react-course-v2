interface IProps {
  name: string;
}

export default function User({ name }: IProps) {
  return <div>Hello {name}</div>;
}
