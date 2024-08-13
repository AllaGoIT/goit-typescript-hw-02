import css from "./SearchBar.module.css";
import { FormEvent } from "react";

interface SearchBarProps {
  onSubmit: (value: string) => void;
  toast: {
    error: (error: string) => {};
  };
}

const SearchBar: React.FC<SearchBarProps> = ({ onSubmit, toast }) => {
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.target;
    const { searchValue } = form.elements;
    if (!searchValue.value.trim()) {
      return toast.error("Can not be empty");
    }
    onSubmit(searchValue.value);
    form.reset();
  };
  return (
    <header className={css.header}>
      <form className={css.form} onSubmit={handleSubmit}>
        <input
          className={css.input}
          type="text"
          name="searchValue"
          placeholder="Search images and photos"
        />
        <button className={css.btn} type="submit">
          Search
        </button>
      </form>
    </header>
  );
};
export default SearchBar;
