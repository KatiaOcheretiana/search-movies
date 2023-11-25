import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const StyledLink = styled(NavLink)`
  color: black;
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
  /* box-shadow: rgba(50, 50, 93, 0.25) 0px 30px 60px -12px inset,
    rgba(0, 0, 0, 0.3) 0px 18px 36px -18px inset; */
  box-shadow: rgba(3, 102, 214, 0.4) 0px 5px, rgba(23, 102, 214, 0.3) 0px 5px,
    rgba(3, 102, 214, 0.2) 0px 10px, rgba(3, 102, 214, 0.1) 0px 10px,
    rgba(3, 102, 214, 0.05) 0px 15px;
  /* box-shadow: rgba(3, 102, 214, 0.3) 0px 0px 0px 3px; */
  /* border: 3.5px solid gray; */
`;
