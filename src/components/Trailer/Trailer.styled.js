import styled from 'styled-components';

export const TrailerWrap = styled.div`
  width: 100%;
  height: 300px;
  margin: 0 auto;
  margin-bottom: 50px;

  iframe {
    border: none;
    border-radius: 30px;
  }

  @media screen and (min-width: 768px) {
    height: 500px;
  }

  @media screen and (min-width: 1440px) {
    width: 900px;
  }
`;
