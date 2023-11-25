import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const StyledLink = styled(NavLink)`
  color: black;
  text-decoration: none;

  &.active {
    color: blue;
  }
`;

export const List = styled.ul`
  list-style: none;
  display: flex;
  gap: 30px;
  font-size: 22px;
  font-weight: bold;
  text-decoration: none;
`;

export const HeaderField = styled.header`
  width: 100%;
  border-radius: 0px 0px 8px 8px;
  border: 3.5px solid gray;
`;
