const SearchBar = ({ onSubmit }) => { 
  
  const handleSubmit = (event) => { 
    event.preventDefault();
    const form = event.target;
    const { searchValue} = form.elements;
    console.log(searchValue.value);
    form.reset();
  
  };
  return (  
<header>
  <form onSubmit = {handleSubmit} >
    <input
            type="text"
          //   autocomplete="off"
          // autofocus
            name="searchValue"
            placeholder="Search images and photos"
    />
    <button type="submit" onClick ={onSubmit}>Search</button>
  </form>
</header>
  
    )
};
export default SearchBar;