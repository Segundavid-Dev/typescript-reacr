// define types for the individual structure

type Name = {
  first: string;
  last: string;
};

type NameList = {
  name: Name[];
};

export default function PersonList({ name }: NameList) {
  return (
    <ul style={{ listStyle: "none" }}>
      {name.map((iname, index) => (
        <li key={index}>{iname.first}</li>
      ))}
    </ul>
  );
}
