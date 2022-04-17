import { useState, useEffect } from "react";
import "./App.css";
import Form from "./components/Form/Form";
import User from "./components/User/User";
import React from "react"








function App() {
  const [users, setUsers] = useState([]);

  //fetch the users for the mainpage inital state
  useEffect(() => {
    fetch("http://localhost:4000/users")
      .then(response => response.json())
      .then(result => setUsers(result))
    }, [])
    
    
    
    return (
      <div className="app">
      
      {/* Form */}
      
        <Form 
        
        //send the ability to update state through form component
        setUsers = {setUsers} 
        
        
        
        
        />
        

        {/* Users */}

        {users.map((user) => (
          //send the various states to the user component
          //also send the ability to update the userlist state
          <User user={user} setUsers={setUsers} users={users} />
        ))}
      </div>
      );
    
    
    }

  
export default App;
