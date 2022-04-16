import { useState } from "react";
import Form from "../Form/Form";
import "./User.css";



function User({ user, setUsers }) {
  const initialUser = {
  id: user.id,
  firstname: "",
  lastname: "",
  country: "",
  };
  
  const [isediting, setIsEditing] = useState(null)
  const [EditUser, setEditUser] = useState(user)
  
  const toggleEdit = (event) => {
    console.log("hello")

  }
  
  
  const handleChange = (event) => {
    
    const { name, value } = event.target;

     
    setEditUser({
      ...user,
      [name]: value,
    });
  };
  
  const handleEdit = (event) => {
    
    alert('user edited to:' +'\n first name: ' + EditUser.firstname + '\n last name: '
    + EditUser.lastname + '\n country: ' + EditUser.country
    )
  
    fetch("http://localhost:4000/users/edit",{
      method: 'POST',
      headers:{ 'Content-Type': 'application/json; charset=utf-8' },
      body: JSON.stringify(EditUser)
    }).then((response) => response.json())
      .then(result => setUsers(result))
      .catch(error => console.error('Error: ', error))
      
      .then(response => console.log('Success:', response));

    
    
      
    }
  
  
  const handleDelete = (event) => {
    
    alert('user deleted!' +'\n first name: ' + EditUser.firstname + '\n last name: '
    + EditUser.lastname + '\n country: ' + EditUser.country
    )
  
    fetch("http://localhost:4000/users/delete",{
      method: 'DELETE',
      headers:{ 'Content-Type': 'application/json; charset=utf-8' },
      body: JSON.stringify(EditUser)
    }).then((response) => response.json())
      .then(result => setUsers(result))
      .catch(error => console.error('Error: ', error))
    
      .then(response => console.log('Success:', response));

      const { name, value } = event.target;

     
      setEditUser({
        ...EditUser,
        [name]: value,
      });
    
    
      
    }


  
  
  
  
  
  
  
  return (
    <div className="user">
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
      <button type= "submit"  onClick={toggleEdit}>Edit</button>
      <button type= "submit" onClick={handleDelete}>Delete</button>
    </div>
  );
}

export default User;
