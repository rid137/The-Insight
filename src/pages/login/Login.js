import './login.css'
import { useEffect, useState } from 'react';
import { GoogleButton } from 'react-google-button'
import { UserAuth } from '../../components/context/AuthContext';
import { Link, useNavigate } from 'react-router-dom';
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from '../../Firebase-config';
import pexelbg4 from '../../components/asset/pexelbg4.jpg'

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emsg, setEmsg] = useState([])

  const { googleSignIn, user, setUser } = UserAuth()

  const navigate = useNavigate()


  const handleEmailPasswordSignIn = async (e) => {
    e.preventDefault()

    await signInWithEmailAndPassword(auth, email, password)

    .then((userCredential) => {
      const userDetails = userCredential.user;
      setUser(userDetails)
    })
    .catch((error) => {
      const errorMessage = error.message;
      setEmsg(errorMessage)
      console.log(errorMessage)
    });
  }    
       
    

    const handleGoogleSignIn = async () => {
        try {
            await googleSignIn()
        }
        catch(error) {
            console.log(error)
        }
    }


    useEffect(() => {
      if(user != null) {
        navigate('/')
      }
    }, [user]);

 

  return (
    <div className='login' style={backgroundStyle}>
        <span className="loginTitle">Login</span>
        <form className="loginForm">
            <label htmlFor="">Email</label>
            <input onChange={(e) => setEmail(e.target.value)} className='loginInput' type="text" placeholder='Enter your email...' />
            <label htmlFor="">Password</label>
            <input onChange={(e) => setPassword(e.target.value)} className='loginInput' type="password" placeholder='Enter your password...' />
            {emsg && 
              <p>{emsg}</p>
            }
            {/* {auth.currentUser.email} */}
            <button onClick={handleEmailPasswordSignIn} type='submit' className="loginButton"> Login </button>
            <GoogleButton className='googleBtnLogin' onClick={handleGoogleSignIn} />
        </form>
        <button className="loginRegisterButton"> <Link className='link' to='/register'> Register </Link> </button>
    </div>
  );
}

const backgroundStyle = {
  backgroundImage: `linear-gradient( rgba(0, 0, 0, .03),rgba(0, 0, 0, .03)),url(${pexelbg4})`
}

export default Login;
