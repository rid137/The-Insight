import './write.css';
import { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { toast }from 'react-toastify';
import ReactTooltip from "react-tooltip";
import axios from 'axios';


const initialState = {
  title: '',
  description: '',
  category: '',
  imageUrl: '',
}

// For The Category
const options = ['Travel', 'Fashion', 'Fitness', 'Sports', 'Food', 'Tech']


const Write = () => {
  const [formValue, setformValue] = useState(initialState)
  const [categoryErrMsg, setcategoryErrMsg] = useState(null)
  const [editMode, seteditMode] = useState(false)
  const { title, description, category, imageUrl } = formValue

  const navigate = useNavigate()

  // Get ID For Updating A Specific Blog
  const {id} = useParams()

  // For Updating 
  useEffect(() => {
    if(id) {
      seteditMode(true)
      getSingleBlog(id)
    }
    else {
      seteditMode(false)
      setformValue({ ...initialState })
    }
  }, [id]);

  // Get Single Blog For Updating 
  const getSingleBlog = async (id) => {
    const singleBlog = await axios.get(`http://localhost:5000/blogs/${id}`)
    if (singleBlog.status === 200) {
      setformValue({...singleBlog.data})
    }
    else {
      toast.error('Something Went Wrong')
    }
  }

  // Input Change
  const onInputChange = (e) => {
    let {name, value} = e.target
    setformValue({...formValue, [name]: value})
  }

  // Upload Image
  const onUploadImage = (file) => {
    // FormData() Is Used To construct Key/Value pair representing form field
    const formData = new FormData()
    formData.append('file', file)
    formData.append('upload_preset', 'byjehcvy')

    axios.post('https://api.cloudinary.com/v1_1/dnkhxafkz/image/upload', formData)
    .then((resp) => {
      // console.log(resp)
      toast.info('Image Uploaded Successfully')
      setformValue({...formValue, imageUrl: resp.data.url})
    })

    .catch((err) => {
      toast.error('Something Went Wrong')
    })
  }

  // Select Change
  const onCategoryChange = (e) => {
      setcategoryErrMsg(null)
      setformValue({...formValue, category: e.target.value})
  }

  // Get Current Date Of Posting The Blog
  const getDate = () => {
    let today = new Date()
    
    let dd = String(today.getDate())
    let mm = String(today.getMonth() + 1) // January is 0
    let yyyy = today.getFullYear()
    // let hr = today.getHours()
    // let mn = today.getMinutes()
    // let sc = today.getSeconds()

    today = mm + '/' + dd + '/' + yyyy
    return today
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    if(!category) {
      setcategoryErrMsg('Please Select a Category')
    }

    if(title && description && imageUrl && category) {
      const currentDate = getDate()

      if(!editMode) {
        const updatedBlogData = {...formValue, date: currentDate}
        const response = await axios.post('http://localhost:5000/blogs', updatedBlogData)

        if (response.status === 201) {
          toast.success('Blog Created Successfully')
        }
        else {
          toast.error('Something Went Wrong')
        }
      }
      else {
        const response = await axios.put(`http://localhost:5000/blogs/${id}`, formValue)

        if (response.status === 200) {
          toast.success('Blog Updated Successfully')
        }
        else {
          toast.error('Something Went Wrong')
        }
      }

      setformValue({ title: '', description: '', imageUrl: '', category: ''})

      navigate('/')
    }
  }


  
  
  return (
    <div className='write'>
      <p className="fs-2 fw-bold">{editMode ? 'Update Blog' : 'Add Blog'}</p>
      <img className='writeImg' src={imageUrl} alt="Blog Image Will Show Here" />
      <form className="writeForm" onSubmit={handleSubmit}>

        <div className="writeFormGroup">
          <label htmlFor="fileInput"><i className="writeIcon fa-solid fa-plus" data-tip data-for="end"></i></label>
          <ReactTooltip id="end" place="top" effect="solid">
            Upload Image
          </ReactTooltip>
          {!editMode && (
            <input 
              type='file'
              id='fileInput' 
              style={{display: 'none'}} 
              onChange={(e) => onUploadImage(e.target.files[0])}
              required
              
            />
          )}

          <input 
            type="text" 
            value={title || ''}
            name='title'
            placeholder='title' 
            className='writeInput' 
            autoFocus={true} 
            onChange={onInputChange}
            required
          />
          
          <select className='writeCat' style={{position: 'absolute', top: '90px', marginBottom: '10px'}} onChange={onCategoryChange} value={category} required >
            <option>please select category</option>
            {options.map((option, index) => <option value={option || ''} key={index}> {option} </option>  )}
          </select>

          {categoryErrMsg && (
            <div style={categoryErrMsgStyle}>{categoryErrMsg}</div>
          )}

        </div>

        <div className="writeFormGroup">
          <textarea 
            value={description || ''}
            name='description'
            onChange={onInputChange}
            required
            cols="30" 
            rows="10" 
            placeholder='tell your story...' 
            className='writeInput writeText'>  
          </textarea>
        </div>

        <button type='submit' className='writeSubmit'>{editMode ? 'Update' : 'Publish'}</button>
      </form>
    </div>
  );
}

const categoryErrMsgStyle = {
    color: 'red',
    textAlign: 'left',
    fontSize: '14px'
}


export default Write;
