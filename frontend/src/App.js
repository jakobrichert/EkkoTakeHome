import { useState } from "react";
import "./App.css";
import Form from "./components/Form/Form";
import User from "./components/User/User";

const dummyUsers = [
  { firstName: "Jens", lastName: "Jørgensen", country: "Denmark" },
  { firstName: "John", lastName: "Nielsen", country: "Sweden" },
  { firstName: "Lars", lastName: "Godtfred", country: "Poland" },
  { firstName: "Ulrik", lastName: "Martin", country: "Germany" },
  { firstName: "Ulla", lastName: "Sørensen", country: "France" },
  { firstName: "Allan", lastName: "Olsen", country: "Norway" },
  { firstName: "Niels", lastName: "Protius", country: "Latvia" },
  { firstName: "Søren", lastName: "Absteius", country: "Ukraine" },
  { firstName: "Julie", lastName: "Pularis", country: "Finland" },
  { firstName: "Elin", lastName: "Sereus", country: "Spain" },
  { firstName: "Pia", lastName: "Solous", country: "Bulgaria" },
  { firstName: "Ursula", lastName: "Sidius", country: "Poland" },
  { firstName: "Poul", lastName: "Bramsen", country: "Russia" },
];

function App() {
  const [users, setUsers] = useState(dummyUsers);

  return (
    <div className="app">
      {/* Form */}
      <Form />

      {/* Users */}
      {users.map((user) => (
        <User user={user} />
      ))}
    </div>
  );
}

export default App;
