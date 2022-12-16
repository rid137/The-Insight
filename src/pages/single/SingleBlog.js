import { useEffect, useState } from 'react';
import { MDBIcon, MDBContainer, MDBRow, MDBCol, MDBCard, MDBCardText, MDBCardImage, MDBCardTitle, MDBCardBody, MDBTypography } from 'mdb-react-ui-kit';
import { useParams, Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import moment from 'moment/moment';
import axios  from 'axios';
import './singleBlog.css';
import Badge from '../../components/badge/Badge';


const Blog = () => {
  const [blog, setblog] = useState()
  const [relatedPost, setrelatedPost] = useState([])
  const { id } = useParams()


  // For Getting Blog Based On ID
  useEffect(() => {
    if(id) {
      getSingleBlog()
    }
  }, [id])


  // Function For Getting Blog Based On Id
  const getSingleBlog = async () => {
    const response = await axios.get(`https://the-insight-api.onrender.com/Blog/${id}`)
    const relatedPostData = await axios.get(`https://the-insight-api.onrender.com/Blog?category=${response.data.category}&_start=0&_end=3`) // Fetch Only 3 Related Posts

    if(response.status === 200 || relatedPostData.status === 200) {
      setblog(response.data)
    
      setrelatedPost(relatedPostData.data)
      
    }
    else {
      toast.error('Something Went Wrong')
    }
  }
  
  // For The 3Dots To Wrap Blog Description *Or You Can Use CSS As Well
  const excerpt = (str) => {
    if(str.length > 60) {
        str = str.substring(0, 60) + '...'
    }
    return str
  }


  return (
    <MDBContainer style={{border: '1px solid #d1ebe8'}}>
      <Link to='/'><strong className='mt-3' style={{float: 'left', color: '#000'}}>Go Back</strong></Link>

      <MDBTypography tag='h2' className='text-muted mt-2' style={{display: 'inline-block'}}>{blog && blog.title}</MDBTypography>
      <img 
        src={blog && blog.imageUrl} 
        alt={blog && blog.title} 
        className='img-fluid rounded'
        style={{width: '100%', maxHeight: '600px'}}
      />

      <div style={{marginTop: '20px'}}>
        <div style={{height: '43px', backgroung: '#f6f6f6'}}>
            <MDBIcon 
              style={{float: 'left'}}
              className='mt-4'
              far
              icon='calendar-alt'
              size='lg'
            />
            <strong style={{float: 'left', marginTop: '12px', marginLeft: '2px'}}>{blog && moment(blog.date).fromNow()}</strong>
            <Badge styleInfo={styleInfo}>{blog && blog.category}</Badge>
        </div>

        <MDBTypography className='lead md-0'>
            {blog && blog.description}
        </MDBTypography>

      </div>

      {relatedPost && relatedPost.length > 0 && (
        <>
          {relatedPost.length > 1 && <h1>Related Posts</h1>}
  
          <MDBRow className="row-cols-1 row-cols-md-3 g-4">
              {relatedPost.filter((item) => item.id !== +id).map((item) => ( // To Convert ID To Number
                <MDBCol key={item.id}>
                  <MDBCard>
                    <Link to={`/blog/${item.id}`}>
                      <MDBCardImage 
                        src={item.imageUrl} 
                        alt={item.title}
                        position='top'
                      />
                    </Link>

                    

                    <MDBCardBody>
                      <MDBCardTitle>{item.title}</MDBCardTitle>
                      <MDBCardText>{excerpt(item.description)}</MDBCardText>
                    </MDBCardBody>
                  </MDBCard>
                </MDBCol>
              ))}
              
          </MDBRow>
        </>
      )}
    </MDBContainer>
  );
}

const styleInfo = {
  display: 'inline',
  marginLeft: '5px',
  float: 'right',
  marginTop: '7px'
}

export default Blog;
