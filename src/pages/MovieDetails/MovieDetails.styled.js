import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const AdditionalField = styled.div`
  padding: 10px 20px;
  margin: 20px 70px;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
`;

export const AdditionalItem = styled.li`
  margin-top: 15px;
`;

export const BackLink = styled(Link)`
  text-decoration: none;
  margin-left: 70px;
`;

export const LinkText = styled.b`
  font-size: medium;
  color: white;

  box-shadow: rgba(3, 102, 214, 0.3) 0px 3px, rgba(3, 102, 214, 0.2) 0px 5px,
    rgba(3, 102, 214, 0.1) 0px 7px;
`;
