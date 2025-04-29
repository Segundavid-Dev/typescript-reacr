type GreetProps = {
  name: string;
};

export default function Greet({ name }: GreetProps) {
  return (
    <div>
      <h2>Welcome {name}!, you have 10 unread message</h2>
    </div>
  );
}
