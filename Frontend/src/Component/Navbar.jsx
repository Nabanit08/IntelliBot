import React from 'react';
import "../Style/Navbar.css" // Import the CSS file for styling
import { useAuth0 } from "@auth0/auth0-react";
import { Link } from 'react-router-dom';
const Navbar = () => {
    const { user, isAuthenticated, isLoading } = useAuth0();
  return (
    <nav className="navbar">
      <div className="logo">
        <Link to="/">
        <img src="https://i.imgur.com/byyUuHc.png" alt="Logo" />
        </Link>
      </div>
      <ul className="menu">
        
       { isAuthenticated && (
      <div>
        
       <h1 styel={{marginLeft:"10px"}}>Hello {user.name}</h1>
        
      </div>
    )
       }
      </ul>
    </nav>
  );
};

export default Navbar;
