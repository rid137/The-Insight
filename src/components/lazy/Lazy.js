import { MDBCol, MDBCard, MDBCardBody, MDBCardTitle, MDBCardImage, MDBCardText } from 'mdb-react-ui-kit'
import './lazy.css'

const Lazy = () => {
  return (
    <div className='containers'>
        <MDBCard className='cards'>
            <p className='moving-bg cards-img'></p>
                
            <MDBCardBody>
                <MDBCardTitle className='moving-bg cards-title'></MDBCardTitle>
                <MDBCardText className='moving-bg cards-text'></MDBCardText>

                {/* <Badge className='moving-bg'></Badge> */}
                <span className='moving-bg cards-span'>&nbsp;</span>
                <span className='moving-bg cards-span'>&nbsp;</span>
                <span className='moving-bg cards-span'>&nbsp;</span>
            </MDBCardBody>
        </MDBCard>

        <MDBCard className='cards'>
            <p className='moving-bg cards-img'></p>
                
            <MDBCardBody>
                <MDBCardTitle className='moving-bg cards-title'></MDBCardTitle>
                <MDBCardText className='moving-bg cards-text'></MDBCardText>

                {/* <Badge className='moving-bg'></Badge> */}
                <span className='moving-bg cards-span'>&nbsp;</span>
                <span className='moving-bg cards-span'>&nbsp;</span>
                <span className='moving-bg cards-span'>&nbsp;</span>
            </MDBCardBody>
        </MDBCard>

        <MDBCard className='cards'>
            <p className='moving-bg cards-img'></p>
                
            <MDBCardBody>
                <MDBCardTitle className='moving-bg cards-title'></MDBCardTitle>
                <MDBCardText className='moving-bg cards-text'></MDBCardText>

                <span className='moving-bg cards-span'>&nbsp;</span>
                <span className='moving-bg cards-span'>&nbsp;</span>
                <span className='moving-bg cards-span'>&nbsp;</span>
            </MDBCardBody>
        </MDBCard>
        
    </div>

        
  );
}

export default Lazy;
