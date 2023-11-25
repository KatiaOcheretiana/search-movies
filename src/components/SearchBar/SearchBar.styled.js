import styled from 'styled-components';

export const SearchField = styled.div`
  justify-content: left;
  align-items: center;
  height: 70px;
  padding: 22px 34px;
`;

export const SearchForm = styled.form`
  display: flex;
  gap: 10px;
  align-items: center;
  width: 100%;
  max-width: 600px;
  border-radius: 3px;
  overflow: hidden;
`;

export const SearchBtn = styled.button`
  display: inline-block;
  width: 80px;
  height: 36.2px;
  border: 0;
  background-size: 40%;
  background-repeat: no-repeat;
  background-position: center;
  opacity: 0.6;
  transition: opacity 250ms cubic-bezier(0.4, 0, 0.2, 1);
  cursor: pointer;
  outline: none;

  &:hover {
    opacity: 1;
    background-color: rgba(10, 102, 202);
  }
`;

export const SearcInput = styled.input`
  display: inline-block;
  width: 100%;
  font: inherit;
  font-size: 20px;
  border: 2px solid rgba(3, 102, 214);
  outline: none;
  padding: 5px 10px;

  &::placeholder {
    font: inherit;
    font-size: 16px;
  }
`;
