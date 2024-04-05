import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const StyledLink = styled(NavLink)`
  color: black;
  font-size: 16px;
  text-decoration: none;
  border-radius: 50%;
  border: 2px solid black;
  padding: 8px 10px;

  &.active {
    color: rgba(106, 90, 255, 1);
    border: 2px solid rgba(106, 90, 255, 0.7);
  }

  &:hover {
    color: rgba(99, 190, 255);
    border: 2px solid rgba(99, 190, 255);
  }

  &:focus {
    color: rgba(99, 190, 255);
    border: 2px solid rgba(99, 190, 255);
  }

  @media screen and (min-width: 768px) {
    font-size: 22px;
    padding: 10px 12px;
    border: 2px solid black;
  }
`;

export const List = styled.ul`
  padding: 10px 70px;
  list-style: none;
  display: grid;
  grid-template-columns: auto auto;
  justify-content: start;

  gap: 40px;
  font-size: 22px;
  font-weight: bold;
  text-decoration: none;
  margin: 0 auto;
  width: 100%;

  @media screen and (min-width: 768px) {
    max-width: 1440px;
  }
`;

export const HeaderField = styled.header`
  width: 100%;
  background: rgba(90, 90, 90, 0.8);
  position: fixed;
  z-index: 3;
  top: 0;
  padding-top: 5px;
  padding-bottom: 5px;

  @media screen and (min-width: 768px) {
    padding-top: 15px;
    padding-bottom: 15px;
  }
`;
