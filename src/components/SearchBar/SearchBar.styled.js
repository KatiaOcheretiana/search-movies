import styled from 'styled-components';

export const SearchField = styled.div`
  display: grid;
  width: 100%;
  align-items: center;
  align-content: center;

  margin-bottom: 50px;
`;

export const SearchForm = styled.form`
  display: grid;

  gap: 10px;

  max-width: 600px;
  border-radius: 3px;
  overflow: hidden;

  @media screen and (min-width: 768px) {
    grid-template-columns: 3fr 1fr;

    gap: 20px;
  }
`;

export const SearchBtn = styled.button`
  display: flex;
  gap: 5px;
  color: white;

  border: 0;
  background-size: 40%;
  background-repeat: no-repeat;
  background-color: rgba(106, 90, 255, 0.7);
  border-radius: 200px;
  padding: 15px 20px;

  align-items: center;
  justify-content: center;

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

  color: white;
  background-color: black;

  font-size: 20px;
  border: 2px solid rgba(3, 102, 214);
  outline: none;
  padding: 10px 15px;

  border: 4px solid rgba(106, 90, 255, 0.7);
  border-radius: 20px;

  &::placeholder {
    font-size: 16px;
  }
`;
