import { useState } from "react";

import "./User.css";



function User({ user, setUsers}) {
  //two states, one for the user from the form and one for the edit button toggle
  const [isediting, setIsEditing] = useState(false)
  const [EditUser, setEditUser] = useState(user)
  
  
  //the toggle function that will change the render depending on if the user presses the button
  const toggleEditButton = () => {
    setIsEditing(true);
    }
  
  //handle change function for the edit form
  const handleChange = (event) => {
    const { name, value } = event.target;
      
    setEditUser({
      ...EditUser,
      [name]: value,
    });
  };
  //function that handles editing the user, updates the user and then
  //updates the user state 
  const handleEdit = () => {
   
    //alert to show what you edited
    alert('user edited!' +'\n first name: ' + EditUser.firstname + '\n last name: '
    + EditUser.lastname + '\n country: ' + EditUser.country
    )
    
    //fetch the user api using PUT to update the user 
    fetch("http://localhost:4000/users",{
      method: 'PUT',
      headers:{ 'Content-Type': 'application/json; charset=utf-8' },
      body: JSON.stringify(EditUser)
    }).then((response) => response.json())
      //error and success checking
      .catch(error => console.error('Error: ', error))
      .then(response => console.log('Success:', response))
      //fetch the api again after the PUT is done to update the state after editing
      .then(fetch("http://localhost:4000/users")
        .then(response => response.json())
        .then(result => setUsers(result)));
}
  
  //function to handle the delete functionality
  const handleDelete = (event) => {
    
    //alert to show which user you deleted
    alert('user deleted!' +'\n first name: ' + user.firstname + '\n last name: '
    + user.lastname + '\n country: ' + user.country
    )
    //fetch the users using DELETE method
    fetch("http://localhost:4000/users",{
      method: 'DELETE',
      headers:{ 'Content-Type': 'application/json; charset=utf-8' },
      body: JSON.stringify(user)
    }).then((response) => response.json())
    //error and success checks  
      .catch(error => console.error('Error: ', error))
      .then(response => console.log('Success:', response))

    //fetch the api again after the DELETE is done to update the state after deleting
      .then(fetch("http://localhost:4000/users")
        .then(response => response.json())
        .then(result => setUsers(result)));
        
      
      
      
    
      
    }
  //logic for rendering edit form or not, if isediting is true then
  //the user becomes an edit form that can be saved
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
  //otherwise the user is displayed with delete or edit functionality
  else {

    return(<div className="user">
    <div id="usercontainer">
    <center>
      <span className="label">Firstname </span>
      <p>
      {user.firstname}
      </p>
    </center>
    <center>
      <span className="label">Lastname </span>
      <p>
      {user.lastname}
      </p>
    </center>
    <center>
      <span className="label">Country </span>
      <p>
      {user.country}
      </p>
    </center>
    </div>
    
    
    <div id="container">
      
      <button type= "submit"  onClick={toggleEditButton}>Edit</button>
      
      <button1 type= "submit" onClick={handleDelete}>Delete</button1>

    </div>

      

      
    
    
  
  </div>
);
}



     
  }


    
  
  
  
  
  
  
  
  

export default User;
