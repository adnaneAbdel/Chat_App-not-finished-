
import {Link} from 'react-router-dom';
import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import axios from 'axios' ;
import { useNavigate } from 'react-router-dom';



const  Register = () =>{
  const [inputname, setInputName] = useState('');
  const [inputusername, setInputUsername] = useState('');
  const [inputpassword, setInputPassword] = useState('');
  const navigate = useNavigate(); // Initialize useNavigate

  const onChnage = (e) => {
      const { name, value } = e.target;
      if (name === 'name') setInputName(value);
      else if (name === 'username') setInputUsername(value);
      else if (name === 'password') setInputPassword(value);
  }
    const onSubmit = async (e) => {
      e.preventDefault();
      try {
        const response = await axios.post('http://localhost:3001/api/auth/register', {
            name: inputname,
            username: inputusername,
            password: inputpassword
        });
        navigate('/');
        console.log('Server Response:', response.data);
        // Handle success, e.g., show a success message to the user
    } catch (error) {
        console.error('Error:', error);
        // Handle error, e.g., show an error message to the user
    }
        setInputName('');
        setInputUsername('');
        setInputPassword('');
    }
    return (
        <div className="container">
            <div className='auth col-lg-3 colo-sm-6 wid'>
            <form onSubmit={onSubmit}>
                <h5 className="mb-4 text-center">Create Now Account</h5>
  <div class="form-group">
    <label for="exampleInputEmail1" >Name</label>
    <input type="text" class="form-control mt-2 mb-1" value={inputname} name="name" onChange={onChnage} id="exampleInputEmail1" autoFocus required aria-describedby="emailHelp" placeholder="Enter Name"/>
  
  </div>
  <div class="form-group">
    <label for="exampleInputEmail1">Username</label>
    <input type="text" class="form-control mt-2  mb-1" value={inputusername} name="username" onChange={onChnage} id="exampleInputEmail1" required aria-describedby="emailHelp" placeholder="Enter Username"/>
  
  </div>
  <div class="form-group">
    <label for="exampleInputPassword1">Password</label>
    <input type="password" class="form-control mt-2  mb-1" value={inputpassword} name="password" onChange={onChnage} id="exampleInputPassword1" required placeholder="Password"/>
  </div>

  <button type="submit" class="btn btn-primary mt-4 ">Resgiter</button>
<small > <Link to={"/Login"}>sing in </Link></small>
  <p className="m-3 text-muted" >&copy; 2024 - 2025</p>
</form>
</div>
        </div>
    )
}

export default Register ;