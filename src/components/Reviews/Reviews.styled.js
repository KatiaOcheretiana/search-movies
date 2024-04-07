import styled from 'styled-components';

export const ReviewsList = styled.ul`
  display: grid;
  justify-content: center;
  gap: 25px;
`;

export const Item = styled.li`
  background: linear-gradient(
    rgba(90, 90, 90, 0.2),
    rgba(90, 90, 90, 0.3),
    rgba(90, 90, 90, 0.4)
  );
  padding: 20px;
  border-radius: 10px;
`;

export const Info = styled.h3`
  margin-bottom: 10px;
  font-weight: 700;
`;
