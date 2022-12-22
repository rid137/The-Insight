import { useState, useEffect } from 'react'
import { UserAuth } from '../../components/context/AuthContext';
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from '../../Firebase-config';
import { GoogleButton } from 'react-google-button'
import { NavLink,useNavigate } from 'react-router-dom'
import pexelbg3 from '../../components/asset/pexelbg3.jpg'
import './register.css'


const Register = () => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [confirmPassword, setConfirmPassword] = useState("")
  const [firebaseErrmsg, setFirebaseErrmsg] = useState([])
  const [confirmPasswordErrMsg, setConfirmPasswordErrMsg] = useState(false)

  const { googleSignIn, user, setUser } = UserAuth()

  const navigate = useNavigate()

  // TO HANDLE EMAIL AND PASSWORD SIGN UP
  const handleEmailPasswordSignUp = async (e) => {
    e.preventDefault()
    if(password !== confirmPassword) {
      setConfirmPasswordErrMsg(true)
      return;
    }

    await createUserWithEmailAndPassword(auth, email, password)

    .then((userCredential) => {

      const userDetails = userCredential.user;
      setUser(userDetails)
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      setFirebaseErrmsg(errorMessage)
      console.log(errorMessage)
      // ..
    });
  }    
       
    
  // TO HANDLE GOOGLE SIGN IN
  const handleGoogleSignIn = async () => {
    try {
        await googleSignIn()
    }
    catch(error) {
        console.log(error)
    }
  }


  // FOR NAVIGATING TO HOME PAGE AFTER REGISTERING
  useEffect(() => {
    if(user != null) {
      navigate('/')
    }
  }, [user]);



  return (
    <div className='register' style={backgroundStyle}>
        <span className="registerTitle">Register</span>
        <form className="registerForm">
            <label htmlFor="">Email</label>
            <input 
                className='registerInput' 
                type="text" 
                placeholder='Enter your email...'
                onChange={(e) => setEmail(e.target.value)}
            />

            <label htmlFor="">Password</label>
            <input 
                className='registerInput' 
                type="text" 
                placeholder='Enter your password...' 
                onChange={(e) => setPassword(e.target.value)}
            />

            <label htmlFor="">Confirm Password</label>
            <input 
                className='registerInput' 
                type="text" 
                placeholder='Confirm your username...'
                onChange={(e) => setConfirmPassword(e.target.value)}
            />
            {
              confirmPasswordErrMsg && <p style={{maxWidth: '280px', color: 'red'}}>Password does not match</p>
            }
            {firebaseErrmsg && 
              <p style={{maxWidth: '280px', color: 'red'}}>{firebaseErrmsg}</p>
            }
            <button onClick={handleEmailPasswordSignUp} className="registerButton">Register</button>
            <GoogleButton className='googleBtn' onClick={handleGoogleSignIn} />
        </form>
        <button className="registerLoginButton"> <NavLink className='link' to='/login'> Login </NavLink></button>
    </div>
  );
}

const backgroundStyle = {
    backgroundImage: `linear-gradient( rgba(0, 0, 0, .03),rgba(0, 0, 0, .03)),url(${pexelbg3})`
    // backgroundImage: `url(${pexelbg3})`
}

export default Register;
