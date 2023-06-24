import React from 'react'
import style from "../Style/Homepage.module.css"
import "../Style/Animated.css"
import { useAuth0 } from "@auth0/auth0-react";
import ReactPlayer from 'react-player'
import { useToast } from '@chakra-ui/react'
import { Link, useNavigate } from 'react-router-dom'

import SignUp from './Signup'
const Homepage = () => {
    const { loginWithRedirect ,isAuthenticated} = useAuth0();
    const { logout } = useAuth0();
    let navigate=useNavigate()
    let toast=useToast()
    if(isAuthenticated){
      toast({
        position: 'top',
        title: 'Login Succesfully😎',
       
        status: 'success',
        duration: 9000,
        isClosable: true,
      })
      navigate("/ask")
    }
  return (
    <div className={style.Homepage}>
     
    <div className="animated-text">
      <span className="letter">W</span>
      <span className="letter">E</span>
      <span className="letter">L</span>
      <span className="letter">C</span>
      <span className="letter">O</span>
      <span className="letter">M</span>
      <span className="letter">E</span>
      <span className="space"></span>
      <span className="letter">T</span>
      <span className="letter">O</span>
      <span className="space"></span>
      <span className="letter">I</span>
      <span className="letter">N</span>
      <span className="letter">T</span>
      <span className="letter">E</span>
      <span className="letter">L</span>
      <span className="letter">L</span>
      <span className="letter">I</span>
      <span className="letter">B</span>
      <span className="letter">O</span>
      <span className="letter">T</span>
    </div>
    <div className={style.btn}>
       {isAuthenticated?(<button style={{padding:"20px"}} onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}>
      Log Out
    </button>):( <button style={{padding:"20px",width:"200px",fontSize:"20px"}} onClick={() => loginWithRedirect()}>Log In</button> )}
        
      
    <Link to="/signup">
   
    </Link>
    </div>
    
    </div>
  )
}

export default Homepage
