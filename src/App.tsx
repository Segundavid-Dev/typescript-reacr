import "./App.css";
import Greet from "./components/Greet";
import Person from "./components/Person";
import PersonList from "./components/PersonList";

const name = {
  first: "David",
  last: "Segun",
};

// i have an array of 2 objects inside and i want to pass the value inside the component

const people = [
  {
    first: "John",
    last: "Doe",
  },
  {
    first: "Jane",
    last: "Doest",
  },
];

function App() {
  return (
    <div>
      <p>Hello world</p>
      <h1>REACT + TYPESCRIPT</h1>
      <Greet name="David" messageCount={20} isLoggedIn={false} />
      <Person name={name} />
      <PersonList nameList={people} />
    </div>
  );
}

export default App;
