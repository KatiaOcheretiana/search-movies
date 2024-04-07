import styled from 'styled-components';

export const CommonInfoField = styled.div`
  display: grid;
  justify-items: center;
  padding: 15px 15px;
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

  @media screen and (min-width: 768px) {
    grid-template-columns: 1fr 2fr;
    padding: 50px 50px;
  }
`;

export const CommonInfoContent = styled.div`
  display: grid;
  gap: 14px;
  align-content: start;
  background: linear-gradient(rgba(90, 90, 90, 0.4), rgba(90, 90, 90, 0.6));
  padding: 15px;
  box-shadow: rgba(90, 90, 90, 0.35) 0px 54px 45px,
    rgba(90, 90, 90, 0.32) 0px -12px 20px, rgba(90, 90, 90, 0.22) 0px 4px 6px,
    rgba(90, 90, 90, 0.27) 0px 12px 13px, rgba(90, 90, 90, 0.29) 0px -3px 5px;
`;
