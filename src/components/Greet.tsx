type GreetProps = {
  name: string;
  messageCount: number;
  isLoggedIn: boolean;
};

export default function Greet({ name, messageCount, isLoggedIn }: GreetProps) {
  return (
    <div>
      {isLoggedIn ? <p>User is logged in</p> : <p>User is not logged in</p>}
      <h2>
        Welcome {name}!, you have {messageCount} unread message
      </h2>
    </div>
  );
}
