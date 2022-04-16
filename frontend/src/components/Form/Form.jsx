import "./Form.css";
import { useState} from "react";


const initialUser = {
  firstname: "",
  lastname: "",
  country: "",
  };

function Form({setUsers}) {
  
  
  
  
  const [user, setUser] = useState(initialUser)
  
  
  const handleChange = (event) => {
    
    const { name, value } = event.target;
    
    setUser({
      ...user,
      [name]: value,
    });
  };

  
  const handleSubmit = () => {
    
    alert('form submitted!' +'\n first name: ' + user.firstname + '\n last name: '
    + user.lastname + '\n country: ' + user.country
    )
  
    fetch("http://localhost:4000/users",{
      method: 'POST',
      headers:{ 'Content-Type': 'application/json; charset=utf-8' },
      body: JSON.stringify(user)
    }).then((response) => response.json())
      .then(result => setUsers(result))  
    .catch(error => console.error('Error: ', error))
    
      .then(response => console.log('Success:', response));

      
    
      
    }

  return (
    <form onSubmit ={handleSubmit} className="form">
      <label htmlFor="name">Firstname</label>
      <input type="text" name="firstname" 
      value = {user.firstname}
      onChange={handleChange}
      
      />

      <label htmlFor="name">Lastname</label>
      <input type="text" name="lastname" 
      value = {user.lastname}
      onChange={handleChange}
      
      
      />

      <label htmlFor="name">Country</label>
      <input type="text" name="country" 
      value = {user.country}
      onChange={handleChange}
      />

      <button type = "submit">Submit form</button>
    </form>
  );
}

export default Form;
