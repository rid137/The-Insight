import './profile.css'
import pexelpassport from '../../components/asset/pexelpassport.jpg'
import pencils from '../../components/asset/pencils.jpg'

const Settings = () => {
  return (
    <div className='settings' style={backgroundStyle}>
      <div className="settingsWrapper">
        <div className="settingsTitle">
            <span className="settingsUpdateTitle">Update Your Account</span>
            <span className="settingsDeleteTitle">Delete Account</span>
        </div>
        <form  className="settingsForm">
            <label>Profile Picture</label>
            <div className="settingsPP">
                <img src={pexelpassport} alt="profile" />
                <label htmlFor="fileInput">
                    <i className="settingsPPIcon fa-regular fa-circle-user"></i>
                </label>
                <input type="file" id="fileInput" style={{display: 'none'}} />
            </div>
            <label htmlFor="">Username</label>
            <input type="text" placeholder='Dare' />

            <label htmlFor="">Email</label>
            <input type="email" placeholder='Enter Your Email' />

            <label htmlFor="">Password</label>
            <input type="password" />

            <button className="settingsSubmit">Update</button>
        </form>
      </div>
    </div>
  );
}

const backgroundStyle = {
  backgroundImage: `linear-gradient( rgba(0, 0, 0, .5),rgba(0, 0, 0, .5)),url(${pencils})`,
  backgroundSize: 'cover',
  backgroundRepeat: 'noRepeat'
}

export default Settings;
