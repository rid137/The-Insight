import './App.css';
import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Write from './pages/write/Write';
import Home from './pages/home/Home';
import SingleBlog from './pages/single/SingleBlog';
import About from './pages/about/About';
import Login from './pages/login/Login';
import Register from './pages/register/Register';
import Profile from './pages/profile/Profile';
import NotFound from './pages/notfound/NotFound';
import Contact from './pages/contact/Contact';
import Footer from './components/footer/Footer';
import Navbar from './components/navbar/Navbar';
import { AuthContextProvider } from './components/context/AuthContext';
import ProtectedPage from './components/protectedPage/ProtectedPage';
import ProfileForm from './components/profileForm/ProfileForm';


function App() {
  // FOR THE PROFILE FORM MODAL
  const [show, setShow] = useState(false);

  // FOR THE PROFILE PAGE
  const [profileDetails, setProfileDetails] = useState([]);

  // FOR GETTING PROFILE CREATION STATUS
  const [info, setInfo] = useState(false);



  return (
    <BrowserRouter>
      <div className="app">
      <AuthContextProvider>
      <Navbar setShow={setShow} />
      <ToastContainer />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/Register" element={<Register />} />
          <Route path="/ProfileForm" element={<ProfileForm show={show} setShow={setShow} setInfo={setInfo} />} />
          <Route path="/Profile" element={<Profile profileDetails={profileDetails} setProfileDetails={setProfileDetails} />} />
          <Route path="/addBlog" element={<ProtectedPage> <Write /> </ProtectedPage>} />
          <Route path="/editBlog/:id" element={<ProtectedPage> <Write /> </ProtectedPage>}  />
          <Route path="/blog/:id" element={<SingleBlog />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<ProtectedPage> <Contact /> </ProtectedPage>} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
        </AuthContextProvider>
      </div>
    </BrowserRouter>
  );
}

export default App;
