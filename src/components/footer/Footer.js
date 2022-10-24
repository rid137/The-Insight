import './footer.css'
import { NavLink } from 'react-router-dom';

const Footer = () => {
  return (
    <>
        <div className='footer'>
            <div className="firstPart">
                    <div className="firstColumn">
                        <h2>The Insight</h2>
                        <h4>Download App</h4>
                        <div className='appAndGoogle'>
                            <div className="firstItem"><i class="fa-solid fa-mobile-screen-button"></i></div>
                            <div className="secondItem">
                                <p>Available on the iphone</p>
                                <h2>App Store</h2>
                            </div>
                        </div>
                        <div className='appAndGoogle'>
                            <div className="firstItem"><i class="fa-brands fa-google-play"></i></div>
                            <div className="secondItem">
                                <p>Available on the google</p>
                                <h2 className='googleText'>Google Play</h2>
                            </div>
                        </div>
                    </div>
                    <div className="secondColumn">
                        <div className="sideone">
                            <ul>
                                <h5>Support</h5>
                                <li><NavLink to='/' style={{color: 'rgb(163,207,251)'}}>Contact</NavLink></li>
                                <li><NavLink to='/' style={{color: 'rgb(163,207,251)'}}>Help Center</NavLink></li>
                                <li><NavLink to='/' style={{color: 'rgb(163,207,251)'}}>Site Map</NavLink></li>
                                <li><NavLink to='/' style={{color: 'rgb(163,207,251)'}}>Skills Plans</NavLink></li>                              
                            </ul>
                            <ul>
                                <h5>Community</h5>
                                <li><NavLink to='/' style={{color: 'rgb(163,207,251)'}}>Guides</NavLink></li>
                                <li><NavLink to='/' style={{color: 'rgb(163,207,251)'}}>Teach</NavLink></li>
                                <li><NavLink to='/' style={{color: 'rgb(163,207,251)'}}>Affiliate Partners</NavLink></li>
                                <li><NavLink to='/' style={{color: 'rgb(163,207,251)'}}>Authors</NavLink></li>
                            </ul>
                        </div>
                        
                        <div className="sidetwo">
                            <ul>
                                <h5>Company</h5>
                                <li><NavLink to='/' style={{color: 'rgb(163,207,251)'}}>About Us</NavLink></li>
                                <li><NavLink to='/' style={{color: 'rgb(163,207,251)'}}>Careers</NavLink></li>
                                <li><NavLink to='/' style={{color: 'rgb(163,207,251)'}}>Media</NavLink></li>
                                <li><NavLink to='/' style={{color: 'rgb(163,207,251)'}}>Resources</NavLink></li>
                            </ul>
                            <ul>
                                <h5>Free Tools</h5>
                                <li><NavLink to='/' style={{color: 'rgb(163,207,251)'}}>Blog Ideas Generator</NavLink></li>
                                <li><NavLink to='/' style={{color: 'rgb(163,207,251)'}}>Free Business Templates</NavLink></li>
                                <li><NavLink to='/' style={{color: 'rgb(163,207,251)'}}>Website Templates</NavLink></li>
                                <li><NavLink to='/' style={{color: 'rgb(163,207,251)'}}>Make My Persona</NavLink></li>                              
                            </ul>
                        </div>
                        
                        
                    </div>
            </div>
            <div className="secondPart">
                <p>For More Info: UAE +971 4123 4647</p>
            </div>
        </div>

        <div className="thirdPart">
            <div className='copyright'>Copyright &copy; roycoMedia 2022 </div>
            <div className='social-icons'>
                <small>Follow Us</small>
                <span><i class="fa-brands fa-facebook"></i></span>
                <span><i class="fa-brands fa-instagram"></i></span>
                <span><i class="fa-brands fa-twitter"></i></span>
                <span><i class="fa-brands fa-skype"></i></span>
            </div>
            <div className='terms'>
                <span><NavLink to='/' style={{color: 'rgb(163,207,251)'}}>Terms</NavLink></span>
                <span><NavLink to='/' style={{color: 'rgb(163,207,251)'}}>Privacy Policy</NavLink></span>
            </div>
        </div>

    </>
  );
}

export default Footer;
