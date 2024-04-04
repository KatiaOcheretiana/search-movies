import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const StyledLink = styled(NavLink)`
  color: white;
  text-decoration: none;

  &.active {
    color: rgba(3, 102, 214);
  }
`;

export const List = styled.ul`
  padding: 10px 70px;
  list-style: none;
  display: flex;
  gap: 30px;
  font-size: 22px;
  font-weight: bold;
  text-decoration: none;
`;

export const HeaderField = styled.header`
  width: 100%;
`;
