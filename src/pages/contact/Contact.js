import './contact.css';
import { MDBContainer, MDBTypography } from 'mdb-react-ui-kit';


const Contact = () => {
  return (
    <div className='contact-wrapper'>
      <div className="contact-message">
        <MDBContainer>
          <MDBTypography note noteColor='primary' >
            We'll be delighted to receive your message. Thank you!
          </MDBTypography>
        </MDBContainer>
      </div>
      <div className='contact'>
        <form  className="contactForm">
            <label htmlFor="">FullName</label>
            <input type="text" placeholder='Enter Your FullName' autoFocus />

            <label htmlFor="">Email</label>
            <input type="email" placeholder='Enter Your Email' />

            <label htmlFor="">Your Message</label>
            <textarea 
            cols="30" 
            rows="10"
            outline 
            placeholder='Type your message...' 
            >

            </textarea>

            <button className="submitBtn"> Send Message</button>
        </form>
      </div>
    </div>
  );
}

export default Contact;
