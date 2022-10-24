export default function Pagination({ postPerPage, totalPosts, paginate }) {
    console.log(totalPosts)
    const pageNumbers = [];

    // Get The Total Number Of Pages
    for (let i = 1; i <= Math.ceil(totalPosts / postPerPage); i++) {
        pageNumbers.push(i)
        console.log(pageNumbers)
    }

  return (
    <nav style={navStyle}>
      <ul className='pagination'>
        {pageNumbers.map(pageNumber => 
            <li key={pageNumber} className='page-item'>
              <a onClick={() => paginate(pageNumber)} href="#" className='page-link'>{pageNumber}</a>
            </li>
        )}
      </ul>
    </nav>
  );
}

const navStyle = {
  display: 'flex',
  justifyContent: 'center'
}