import './search.css'

const Search = ({searchValue, onInputChange}) => {
  return (
    <div className='searchForm'>
      <form className='d-flex'>
        <input 
          type="search" 
          className='form-control'
          placeholder='Search Blog ...'
          value={searchValue}
          onChange={onInputChange}
        />
      </form>
    </div>
  );
}

export default Search;
