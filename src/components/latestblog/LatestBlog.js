import './latestBlog.css'
import { MDBCard, MDBRow, MDBCol, MDBCardImage, MDBCardBody } from 'mdb-react-ui-kit';
import { Link } from 'react-router-dom';

const LatestBlog = ({imageUrl, title, id}) => {
  return (
    <div>
      <Link to={`/blog/${id}`}>
        <MDBCard className='card-style'>
          <MDBRow className='g-0'>

            <MDBCol md='3'  >
              <MDBCardImage 
                src={imageUrl}
                alt={title}
                fluid
                className='cardImg'
              />
            </MDBCol>

            <MDBCol md='9'>
              <MDBCardBody >
                <p className="text-start latest-title" style={{marginTop: '-15px'}}>{title}</p>
              </MDBCardBody>
            </MDBCol>
            
          </MDBRow>
        </MDBCard>

      </Link>
    </div>
  );
}

export default LatestBlog;
