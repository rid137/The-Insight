import './about.css'
import { MDBContainer, MDBTypography } from 'mdb-react-ui-kit';

const About = () => {
  return (
      <div className='about'>
        <MDBContainer>
          <MDBTypography note noteColor='primary'>
            This is a blogging website where you will find posts related to different categories like Travel, Fashion, Sports, Fitness, Tech and many more. 
            You can also create, edit, and delete blogs. 
            As of now, the functionality of some of the features in the website have not been fully implemented. <br />
            The website is built by <a href="#">@roycoMedia</a>. <a href="#">You can check out the source on GitHub!</a>
          </MDBTypography>
        </MDBContainer>
      </div>
  );
}

export default About;
