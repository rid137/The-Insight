import React from 'react';
import { MDBSpinner, MDBBtn } from 'mdb-react-ui-kit';

export default function App() {
  return (
    <>
      <MDBBtn disabled>
        <MDBSpinner grow size='sm' role='status' tag='span' className='me-2' />
        Loading Blogs ...
      </MDBBtn>
    </>
  );
}