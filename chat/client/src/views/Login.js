
import {Link} from 'react-router-dom';
import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import axios from 'axios' ;
import { useNavigate } from 'react-router-dom';



const  Login = () =>{
 
  const [inputusername, setInputUsername] = useState('');
  const [inputpassword, setInputPassword] = useState('');
  const navigate = useNavigate(); // Initialize useNavigate

  const onChnage = (e) => {
      const { name, value } = e.target;
        if (name === 'username') setInputUsername(value);
      else if (name === 'password') setInputPassword(value);
  }
    const onSubmit = async (e) => {
      e.preventDefault();
      try {
        const response = await axios.post('http://localhost:3001/api/auth/login', {
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
    
        setInputUsername('');
        setInputPassword('');
    }
    return (
        <div className="container">
            <div className='auth col-lg-3 colo-sm-6 wid'>
            <form onSubmit={onSubmit}>
                <h5 className="mb-4 text-center">Login in</h5>
 
  <div class="form-group">
    <label for="exampleInputEmail1">Username</label>
    <input type="text" class="form-control mt-2  mb-1" value={inputusername} name="username" onChange={onChnage} id="exampleInputEmail1" autoFocus required aria-describedby="emailHelp" placeholder="Enter Username"/>
  
  </div>
  <div class="form-group">
    <label for="exampleInputPassword1">Password</label>
    <input type="password" class="form-control mt-2  mb-1" value={inputpassword} name="password" onChange={onChnage} id="exampleInputPassword1" required placeholder="Password"/>
  </div>

  <button type="submit" class="btn btn-primary mt-4 ">Sing in</button>
<small > <Link to={"/Register"}>Create Account </Link></small>
  <p className="m-3 text-muted" >&copy; 2024 - 2025</p>
</form>
</div>
        </div>
    )
}

export default Login ;