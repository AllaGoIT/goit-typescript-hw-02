import css from "./SearchBar.module.css";
import { FormEvent } from "react";
import { ChangeEvent } from "react";
import toast from "react-hot-toast";

interface SearchBarProps {
  onSubmit: (value: string) => void;
  // toast: {
  //   error: (error: string) => {};
  // };
}
interface Form extends HTMLFormElement {
  searchValue: HTMLFormElement;
}

const SearchBar: React.FC<SearchBarProps> = ({ onSubmit }) => {
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.target as Form;
    const { searchValue } = form;

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
