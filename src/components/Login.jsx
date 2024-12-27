import React, { useState } from 'react';
import { useNavigate, Link } from "react-router-dom";

const Login = () => {

  const navigate = useNavigate();
  const [input, setInput] = useState({
    email: "",
    password: "",
  });

  const handleLogin = (e) => {
    e.preventDefault();
    const loggedUser = JSON.parse(localStorage.getItem("user"));
    if (input.email === loggedUser.email && input.password === loggedUser.password){
        localStorage.setItem("loggedin", true);
        navigate("/");
    } else {
      alert("Not Register...")
    }
  };

  return (
    <section>
      <div className='card'>
        <h2>Login</h2>
        <form onSubmit={handleLogin}>
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
            placeholder='Enter Email'/>
        </div>
        <div className="buttondiv">
          <button>Sign In</button>
        </div>
        </form>
        <p>New in this Site <Link to={"/register"}>Register here</Link></p>
      </div>
    </section>
  )
}

export default Login
