import { MDBCarousel, MDBCarouselItem } from 'mdb-react-ui-kit';
import pexelbg1 from '../asset/pexelbg1.jpg';
import pexelbg2 from '../asset/pexelbg2.jpg';
import pexelbg3 from '../asset/pexelbg3.jpg';
import computer from '../asset/computer.jpg';
import coffee from '../asset/coffee.jpg';
import notepad from '../asset/notepad.jpg';
import notepad2 from '../asset/notepad2.jpg';
import pencils from '../asset/pencils.jpg';


export default function Hero() {
  return (
    <MDBCarousel style={caroStyle} light fade>
      <MDBCarouselItem
        style={imageStyle}
        className='w-100 d-block'
        itemId={1}
        src={pexelbg1}
        alt='...'
      >
        <h5 style={{fontSize: '3rem', fontWeight: 'bold', color: 'rgba(255, 255, 255, 0.9)'}}>Source Information</h5>
        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
      </MDBCarouselItem>
      <MDBCarouselItem
        style={imageStyle}
        className='w-100 d-block'
        itemId={2}
        src={pexelbg2}
        alt='...'
      >
        <h5 style={{fontSize: '3rem', fontWeight: 'bold', color: 'rgba(255, 255, 255, 0.9)'}}>Face Your Fear</h5>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </MDBCarouselItem>

      <MDBCarouselItem
        style={imageStyle}
        className='w-100 d-block'
        itemId={3}
        src={pexelbg3}
        alt='...'
      >
        <h5 style={{fontSize: '3rem', fontWeight: 'bold', color: 'rgba(255, 255, 255, 0.9)'}}>Set Goals</h5>
        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
      </MDBCarouselItem>

      <MDBCarouselItem
        style={imageStyle}
        className='w-100 d-block'
        itemId={3}
        src={computer}
        alt='...'
      >
        <h5 style={{fontSize: '3rem'}}>What Have You Learnt Today?</h5>
        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
      </MDBCarouselItem>

      <MDBCarouselItem
        style={imageStyle}
        className='w-100 d-block'
        itemId={3}
        src={coffee}
        alt='...'
      >
        <h5 style={{fontSize: '3rem', fontWeight: 'bold', color: 'rgba(255, 255, 255, 0.9)'}}>Dream Big</h5>
        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
      </MDBCarouselItem>

      <MDBCarouselItem
        style={imageStyle}
        className='w-100 d-block'
        itemId={3}
        src={notepad}
        alt='...'
      >
        <h5 style={{fontSize: '3rem', fontWeight: 'bold', color: 'rgba(255, 255, 255, 0.9)'}}>Aim Higher</h5>
        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
      </MDBCarouselItem>

      <MDBCarouselItem
        style={imageStyle}
        className='w-100 d-block'
        itemId={3}
        src={notepad2}
        alt='...'
      >
        <h5 style={{fontSize: '3rem', fontWeight: 'bold', color: 'rgba(255, 255, 255, 0.9)'}}>Eat Well</h5>
        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
      </MDBCarouselItem>

      <MDBCarouselItem
        style={imageStyle}
        className='w-100 d-block'
        itemId={3}
        src={pencils}
        alt='...'
      >
        <h5 style={{fontSize: '3rem', fontWeight: 'bold', color: 'rgba(255, 255, 255, 0.9)'}}>Don't Forget To Rest</h5>
        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
      </MDBCarouselItem>
    </MDBCarousel>
  );
}

const imageStyle = {
    width: '100vw',
    height: '60vh',
    objectFit: 'cover',
    textAlign: 'center'
}

const caroStyle = {
    paddingTop: '1px'
}