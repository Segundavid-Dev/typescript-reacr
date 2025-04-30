import "./App.css";
import Greet from "./components/Greet";
import Person from "./components/Person";
import PersonList from "./components/PersonList";
import Status from "./components/Status";

const name = [
  {
    first: "David",
    last: "Segun",
  },
  {
    first: "Esther",
    last: "Segun",
  },
  {
    first: "Daniel",
    last: "Segun",
  },
];

// i have an array of 2 objects inside and i want to pass the value inside the component

function App() {
  return (
    <div>
      <p>Hello world</p>
      <h1>REACT + TYPESCRIPT</h1>
      <Greet name="David" messageCount={20} isLoggedIn={false} />
      <PersonList name={name} />
      <Status>
        <p>The status is loading...</p>
        <p>Loading state completed!</p>
      </Status>
    </div>
  );
}

export default App;
