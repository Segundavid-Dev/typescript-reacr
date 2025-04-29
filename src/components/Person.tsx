type PersonProps = {
  name: {
    first: string;
    last: string;
  };
};

export default function Person({ name }: PersonProps) {
  return (
    <div>
      <p>
        My name is{name.first} {name.last}
      </p>
    </div>
  );
}
