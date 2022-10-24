import './category.css'
import { MDBCard,MDBListGroup, MDBListGroupItem } from 'mdb-react-ui-kit';

const Category = ({handleCategory, options}) => {
  return (
    <MDBCard className='category-card-style'>
      <h4>Categories</h4>
      <MDBListGroup flush='true'>
        {options.map((item, index) => (
            <MDBListGroupItem key={index} className='list-style' onClick={() => handleCategory(item)}>
                {item}
            </MDBListGroupItem>
        ))}
      </MDBListGroup>
    </MDBCard>
  );
}

export default Category;
