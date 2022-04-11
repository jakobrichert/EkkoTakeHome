import { useState, useEffect } from "react";
import "./App.css";
import Form from "./components/Form/Form";
import User from "./components/User/User";
import React from "react"








function App() {
  const [users, setUsers] = useState([]);

  // Note: the empty deps array [] means
  // this useEffect will run once
  // similar to componentDidMount()
  useEffect(() => {
    fetch("http://localhost:4000/users")
      .then(response => response.json())
      .then(result => setUsers(result))
    }, [])
    
    
    
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
