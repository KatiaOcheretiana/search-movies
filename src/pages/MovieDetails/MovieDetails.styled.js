import { Link, NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const AdditionalField = styled.div`
  margin-top: 30px;
  margin-bottom: 30px;
  width: 100%;
`;

export const LinkList = styled.ul`
  display: grid;
  grid-template-columns: repeat(auto-fit, 120px);
  gap: 20px;
  justify-content: start;
  width: 100%;
`;

export const AdditionalItem = styled.li`
  margin-top: 15px;
  text-decoration: none;
  border-radius: 100px;
  padding: 12px 18px 12px 12px;
  background-color: rgba(90, 90, 90, 0.2);
  width: 100px;
  font-size: 12px;

  &:hover {
    background-color: rgba(90, 90, 90, 0.6);
  }

  &:focus {
    background-color: rgba(90, 90, 90, 0.6);
  }

  @media screen and (min-width: 768px) {
    width: 120px;
    font-size: 16px;
  }
`;

export const LinkNav = styled(NavLink)`
  color: white;
  text-decoration: none;

  display: grid;
  grid-template-columns: 10px auto;
  gap: 15px;
`;

export const BackLink = styled(Link)`
  display: grid;
  grid-template-columns: auto auto;
  width: 140px;

  text-decoration: none;
  border-radius: 100px;
  padding: 12px 18px 12px 12px;
  background-color: rgba(90, 90, 90, 0.2);

  &:hover {
    background-color: rgba(90, 90, 90, 0.6);
  }

  &:focus {
    background-color: rgba(90, 90, 90, 0.6);
  }
`;

export const LinkText = styled.b`
  font-size: medium;
  color: white;
`;
