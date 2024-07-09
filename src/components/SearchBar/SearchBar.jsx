import css from "./SearchBar.module.css";



const SearchBar = ({ onSubmit, toast }) => { 
  
  const handleSubmit = (event) => { 
    event.preventDefault();
    const form = event.target;
    const { searchValue } = form.elements;
      if (!searchValue.value.trim()) {
    return toast.error("Can not be empty");
  }
    onSubmit(searchValue.value);
    // {searchValue === "" && ErrorMasagge }
    form.reset();
  
  };
  return (  
<header className={css.header}>
  <form className={css.form} onSubmit = {handleSubmit} >
    <input className={css.input}
            type="text"
          //   autocomplete="off"
          // autofocus
            name="searchValue"
            placeholder="Search images and photos"
    />
    <button className={css.btn} type="submit">Search</button>
  </form>
</header>
  
    )
};
export default SearchBar;