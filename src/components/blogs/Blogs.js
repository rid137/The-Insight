import { MDBCol, MDBCard, MDBCardBody, MDBCardTitle, MDBCardImage, MDBCardText, MDBBtn, MDBIcon, MDBRow } from 'mdb-react-ui-kit'
import { Link } from 'react-router-dom'
import Badge from '../badge/Badge';
import './blogs.css';


const Blogs = ({ title, category, description, id, imageUrl, excerpt, handleDelete }) => {


  return (
    <MDBCol md='4' className='mb-4 blogs'>
      <MDBCard className='h-100 mt-2 ' style={{maxWidth: '100%'}}>
        <MDBCardImage src={imageUrl} alt={title} className='card-image' />
              
        <MDBCardBody>
          <MDBCardTitle >{title}</MDBCardTitle>
          <MDBCardText >{excerpt(description)} <Link to={`/blog/${id}`}>Read More</Link> </MDBCardText>

          <Badge >{category}</Badge>
          <span>
            <MDBBtn tag='a' color='none' onClick={() => handleDelete(id)} >
              <MDBIcon fas icon='trash' style={{color: '#dd4b39'}} size='lg' />
            </MDBBtn>
            
            <Link to={`/editblog/${id}`} >
              <MDBIcon  fas icon='edit' style={{color: '#55acaa', marginLeft: '10px'}} size='lg' />
            </Link>
          </span>
        </MDBCardBody>
      </MDBCard>
    </MDBCol>
      
    
  );
}

export default Blogs;
