// fixing it by adding new props

// Define a type for a single name
type Name = {
  first: string;
  last: string;
};

// Define a type for the array
type NameListProp = {
  nameList: Name[];
};

export default function PersonList({ nameList }: NameListProp) {
  return (
    <ul style={{ listStyle: "none" }}>
      {nameList.map((list, index) => (
        <li key={index}>{list.first}</li>
      ))}
    </ul>
  );
}
