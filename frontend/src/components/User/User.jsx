import { useState } from "react";
import Form from "../Form/Form";
import "./User.css";



function User({ user, setUsers }) {
  
  
  const [isediting, setIsEditing] = useState(false)
  const [EditUser, setEditUser] = useState(user)
  const [DeleteUser, setDeleteUser] = useState(user)
  
  
  const toggleEditButton = () => {
    setIsEditing(true);
    }
  
  
  const handleChange = (event) => {
    
    const { name, value } = event.target;

     
    setEditUser({
      ...EditUser,
      [name]: value,
    });
  };
  
  const handleEdit = () => {
    alert('user edited!' +'\n first name: ' + EditUser.firstname + '\n last name: '
    + EditUser.lastname + '\n country: ' + EditUser.country
    )
    
  
    fetch("http://localhost:4000/users",{
      method: 'PUT',
      headers:{ 'Content-Type': 'application/json; charset=utf-8' },
      body: JSON.stringify(EditUser)
    }).then((response) => response.json())
      
      .catch(error => console.error('Error: ', error))
      
      .then(response => console.log('Success:', response))

      .then(fetch("http://localhost:4000/users")
        .then(response => response.json())
        .then(result => setUsers(result)));

      
      
        

      
      
    }
  
  
  const handleDelete = () => {
    
    alert('user deleted!' +'\n first name: ' + DeleteUser.firstname + '\n last name: '
    + DeleteUser.lastname + '\n country: ' + DeleteUser.country
    )
  
    fetch("http://localhost:4000/users",{
      method: 'DELETE',
      headers:{ 'Content-Type': 'application/json; charset=utf-8' },
      body: JSON.stringify(DeleteUser)
    }).then((response) => response.json())
      .catch(error => console.error('Error: ', error))
    
      .then(response => console.log('Success:', response))

  
      .then(fetch("http://localhost:4000/users")
        .then(response => response.json())
        .then(result => setUsers(result)));
        
      
      
      
    
      
    }

  if (isediting) {
    return (
    
      <div className="user">
        
        <form onSubmit ={handleEdit} className="form">
        <label htmlFor="name">Firstname</label>
        <input type="text" name="firstname" 
        defaultValue = {EditUser.firstname}
        onChange={handleChange}
        
        />
  
        <label htmlFor="name">Lastname</label>
        <input type="text" name="lastname" 
        defaultValue = {EditUser.lastname}
        onChange={handleChange}
        
        
        />
  
        <label htmlFor="name">Country</label>
        <input type="text" name="country" 
        defaultValue = {EditUser.country}
        onChange={handleChange}
        />
  
        <button type = "submit">Save</button>
      </form>
      </div>
    );
  }

  else {

    return(<div className="user">
    
    <p>
      <span className="label">Firstname: </span>
      {user.firstname}
    </p>
    <p>
      <span className="label">Lastname: </span>
      {user.lastname}
    </p>
    <p>
      <span className="label">Country: </span>
      {user.country}
    </p>
    

    <button type= "submit"  onClick={toggleEditButton}>Edit</button>
    <button type= "submit" onClick={handleDelete}>Delete</button>
  </div>
);
}



     
  }


    
  
  
  
  
  
  
  
  

export default User;
