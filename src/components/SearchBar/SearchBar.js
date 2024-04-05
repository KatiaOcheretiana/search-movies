import { useState } from 'react';
import {
  SearcInput,
  SearchBtn,
  SearchField,
  SearchForm,
} from './SearchBar.styled';
import { BiSearch } from 'react-icons/bi';

export const Searchbar = ({ onSubmit }) => {
  const [query, setQuery] = useState('');

  return (
    <SearchField>
      <SearchForm
        onSubmit={e => {
          e.preventDefault();
          onSubmit(query);
        }}
      >
        <SearcInput
          onChange={e => setQuery(e.target.value)}
          name="itemToSearch"
          value={query}
          required
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search movies"
        />
        <SearchBtn type="submit">
          <span>Search</span> <BiSearch />
        </SearchBtn>
      </SearchForm>
    </SearchField>
  );
};
