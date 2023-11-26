import {
  SearcInput,
  SearchBtn,
  SearchField,
  SearchForm,
} from './SearchBar.styled';

export const Searchbar = ({ onSubmit }) => {
  return (
    <SearchField>
      <SearchForm
        onSubmit={e => {
          e.preventDefault();
          const searchQuery = e.target.elements.itemToSearch.value;
          onSubmit(searchQuery);
        }}
      >
        <SearcInput
          name="itemToSearch"
          required
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search movies"
        />
        <SearchBtn type="submit">
          <span>Search</span>
        </SearchBtn>
      </SearchForm>
    </SearchField>
  );
};
