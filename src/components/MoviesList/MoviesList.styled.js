import styled from 'styled-components';

export const ListField = styled.div`
  margin: 20px 30px;
  display: flex;
`;

export const List = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
`;

export const ListItem = styled.li`
  padding: 10px;
  width: 220px;
  font-size: 18px;
  font-weight: 400;
  line-height: 1.333;
  letter-spacing: -0.16px;
  list-style: none;
  text-decoration: none;

  transition: all 0.3s ease-out;
  text-decoration: none;

  &:hover {
    transform: translateY(-5px) scale(1.105) translateZ(0);
    box-shadow: 0 24px 36px rgba(0, 0, 0, 0.11),
      0 24px 46px var(--box-shadow-color);
  }
`;

export const Title = styled.p`
  font-weight: 700;
  margin: 10px 0;
`;
