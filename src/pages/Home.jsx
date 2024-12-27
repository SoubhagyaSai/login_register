import React from 'react';
import { useNavigate } from "react-router-dom";

const Home = () => {
    const navigate = useNavigate();
    const userName = JSON.parse(localStorage.getItem("user"));

    const handleLogout = () => {
       localStorage.removeItem("loggedin");
       navigate("/login");
    };
  return (
    <section>
      <div className='card'>
        <h2>Home</h2>
        <p>Welcome: {userName.name}</p>
        <button onClick={handleLogout} type="button">Logout</button>
      </div>
    </section>
  )
}

export default Home
