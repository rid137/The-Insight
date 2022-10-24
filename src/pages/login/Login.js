import './login.css'
import { Link } from 'react-router-dom'
import pexelbg4 from '../../components/asset/pexelbg4.jpg'

const Login = () => {
  return (
    <div className='login' style={backgroundStyle}>
        <span className="loginTitle">Login</span>
        <form className="loginForm">
            <label htmlFor="">Email</label>
            <input className='loginInput' type="text" placeholder='Enter your email...' />
            <label htmlFor="">Password</label>
            <input className='loginInput' type="password" placeholder='Enter your password...' />
            <button type='submit' className="loginButton"> Login </button>
        </form>
        <button className="loginRegisterButton"> <Link className='link' to='/register'> Register </Link> </button>
    </div>
  );
}

const backgroundStyle = {
  backgroundImage: `linear-gradient( rgba(0, 0, 0, .03),rgba(0, 0, 0, .03)),url(${pexelbg4})`
}

export default Login;
