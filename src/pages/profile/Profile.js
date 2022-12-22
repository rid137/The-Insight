import { useEffect, useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../../Firebase-config';
import { UserAuth } from '../../components/context/AuthContext';
import './profile.css'
import pexelpassport from '../../components/asset/pexelpassport.jpg'
import pencils from '../../components/asset/pencils.jpg'

const Profile = ({profileDetails, setProfileDetails}) => {
  const [red, setRed] = useState([])

  const collectionRef = collection(db, 'profile')

  const navigate = useNavigate()

  const { user } = UserAuth()


  useEffect(() => {
    const getNotes = async () => {
      const data = await getDocs(collectionRef)
        setProfileDetails(data.docs.map((doc) => ({...doc.data(), id:doc.id})))
    }

    getNotes()
  },[]);


  return (
    <>
      <div  className='settings' style={backgroundStyle}>
      {console.log(profileDetails)}
        <div className="settingsWrapper">
          <div className="settingsTitle">
              <span className="settingsUpdateTitle">Update Your Account</span>
              <span className="settingsDeleteTitle">Delete Account</span>
          </div>
          {    
            profileDetails.map((item) => (
          <>
          { user && user.uid === item.uid && item.id !== null && <form  className="settingsForm" key={item.id}>
              <label>Profile Picture</label>
              <div className="settingsPP">
                  <img src={pexelpassport} alt="profile" />
                  <label htmlFor="fileInput">
                      <i className="settingsPPIcon fa-regular fa-circle-user"></i>
                  </label>
                  <input type="file" id="fileInput" style={{display: 'none'}} />
              </div>

              <label key={item.id} htmlFor="">Username</label>
              <input cd reac
                type="text" 
                defaultValue={item.fullname}
              />

              <label htmlFor="">Email</label>
              <input 
                type="email" 
                defaultValue={item.email}
              />

              <label htmlFor="">Nationality</label>
              <input 
                type="text" 
                defaultValue={item.nationality}
              />

              <label htmlFor="">Phone Number</label>
              <input 
                type="Number" 
                defaultValue={item.phoneNumber}
              />
              </form>}
              </>
                    ))
              }
              

              <button className="settingsSubmit">Update</button>
        </div>
      </div>
      
    </>
  );
}

const backgroundStyle = {
  backgroundImage: `linear-gradient( rgba(0, 0, 0, .5),rgba(0, 0, 0, .5)),url(${pencils})`,
  backgroundSize: 'cover',
  backgroundRepeat: 'noRepeat'
}

export default Profile;
