import React, { useState } from 'react';
import { useNavigate, Link } from "react-router-dom";

const Register = () => {

  const navigate = useNavigate();
  const [input, setInput] = useState({
    name: "",
    email: "",
    password: "",
  });

  // To store value in local storage
  const handleRegister = (e) => {
    e.preventDefault();
    localStorage.setItem("user", JSON.stringify(input));
    navigate("/login");
  };

  return (
    <section>
      <div className='card'>
        <h2>Register</h2>
        <form onSubmit={handleRegister}>
        <div className='row'>
          <label>Name:</label>
          <input 
            type='text' 
            name="name" 
            value={input.name} 
            onChange={(e) => setInput({...input, [e.target.name] : e.target.value})}
            placeholder='Enter Name'/>
        </div>
        <div className='row'>
          <label>Email:</label>
          <input 
            type='text' 
            name="email" 
            value={input.email} 
            onChange={(e) => setInput({...input, [e.target.name] : e.target.value})}
            placeholder='Enter Email'/>
        </div>
        <div className='row'>
          <label>Password:</label>
          <input 
            type='password'
            name="password" 
            value={input.password} 
            onChange={(e) => setInput({...input, [e.target.name] : e.target.value})}
            placeholder='Password...'/>
        </div>
        <button type="submit">Sign Up</button>
        </form>
        <p>Have already an account <Link to={"/login"}>Login here</Link></p>
      </div>
    </section>
  )
}

export default Register
