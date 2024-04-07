import styled from 'styled-components';

export const CastList = styled.ul`
  display: grid;
  justify-content: center;
  grid-template-columns: repeat(auto-fit, minmax(150px, 240px));
  gap: 20px;
`;

export const Card = styled.li`
  display: grid;
  justify-items: center;
  align-items: end;

  gap: 14px;

  background: linear-gradient(
    rgba(90, 90, 90, 0.2),
    rgba(90, 90, 90, 0.1),
    rgba(90, 90, 90, 0.2),
    rgba(90, 90, 90, 0.5),
    rgba(90, 90, 90, 0.7),
    rgba(90, 90, 90, 0.5)
  );
  padding: 15px;
  border-radius: 10px;
`;

export const Info = styled.p`
  font-weight: 500;
`;

export const Image = styled.img`
  object-fit: cover;
  width: 100%;
`;
