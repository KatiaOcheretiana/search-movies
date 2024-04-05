import styled from 'styled-components';

export const Title = styled.h1`
  font-size: 28px;
  margin-bottom: 60px;

  position: relative;

  &::after {
    content: '';
    position: absolute;
    left: 0;
    bottom: -18px;
    width: 100%;
    height: 5px;
    background-color: rgba(106, 90, 255, 0.5);
    border-radius: 100%;
  }

  @media screen and (min-width: 768px) {
    font-size: 40px;
  }
`;
