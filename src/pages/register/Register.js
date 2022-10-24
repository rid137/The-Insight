import './register.css'
import { NavLink } from 'react-router-dom'
import pexelbg3 from '../../components/asset/pexelbg3.jpg'

const Register = () => {
  return (
    <div className='register' style={backgroundStyle}>
        <span className="registerTitle">Register</span>
        <form className="registerForm">
            <label htmlFor="">Username</label>
            <input 
                className='registerInput' 
                type="text" 
                placeholder='Enter your username...'
            />
            <label htmlFor="">Email</label>
            <input 
                className='registerInput' 
                type="text" 
                placeholder='Enter your email...'
            />
            <label htmlFor="">Password</label>
            <input 
                className='registerInput' 
                type="password" 
                placeholder='Enter your password...' 
            />
            <button className="registerButton">Register</button>
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
