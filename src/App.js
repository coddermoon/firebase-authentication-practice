
import './App.css';
import app from './firebase/firebase.init';
import { FacebookAuthProvider, getAuth, GithubAuthProvider, GoogleAuthProvider, signInWithPopup, signOut } from 'firebase/auth'
import {FaFacebook, FaGithub, FaGoogle, FaTwitter } from "react-icons/fa";

import { useState } from 'react';




const auth = getAuth(app)
const googleProvider = new GoogleAuthProvider()
const githubProvider = new GithubAuthProvider()
const facebookProvider = new FacebookAuthProvider()


function App() {
  const [user,setUser]= useState({})
const {uid,displayName,email,photoURL}= user

 
const handleSignIn = (provider)=>{
  signInWithPopup(auth,provider)
  .then(result=>{
    const user = result.user
    setUser(user)
  })
  .catch(error=> console.error("error",error))
}



// signout function

const signOutDevice = ()=>{
  signOut(auth)
  .then(()=>{
    setUser({})
  })
  .catch(error=>console.error(error))
}



  return (
    <div className="App">
      <h2>Containue to Sign In</h2>
    { 
    
    uid ? <div className="signOut">
    <button onClick={signOutDevice}>Sign Out</button>
   </div>
    :
    <div className="signin">
      <div>
        <form >
          <input type="email" name="email"  placeholder='email'/><br />
          <input type="password" name="pass" placeholder='password' /><br />
          <input type="submit" value="Register now" />
        </form>
      </div>
      <h3>Alternative Options</h3>
     <button onClick={()=>handleSignIn(googleProvider)}>
     <FaGoogle/> 
      </button>
      <button onClick={()=>handleSignIn(facebookProvider)}><FaFacebook/></button>
      <button onClick={()=>handleSignIn(githubProvider)}><FaGithub/></button>
      <button><FaTwitter/></button>
     </div>
    
    }

     {uid && <div>
      <h2>Authentication information</h2>
      <h4>Hi!  {displayName}</h4>
      <h4>Email:{email}</h4>
      <img src={photoURL} alt="" />
     </div>}
    </div>
  );
}

export default App;
