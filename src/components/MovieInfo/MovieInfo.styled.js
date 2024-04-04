import styled from 'styled-components';

export const CommonInfoField = styled.div`
  padding: 50px 50px;
  display: grid;
  grid-template-columns: 1fr 2fr;
  gap: 20px;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;

  margin-top: 40px;
  position: relative;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(rgba(4, 4, 4, 0.4), rgba(4, 4, 4, 0.4))
        no-repeat center/cover,
      url(${props => props.$backdropSrc}) no-repeat center/cover;
    filter: blur(15px);
    z-index: -1;
  }
`;

export const CommonInfoContent = styled.div`
  display: grid;
  gap: 25px;
`;
