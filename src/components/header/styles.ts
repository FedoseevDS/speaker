import styled from 'styled-components';

export const Container = styled.div`
  height: 150px;
  border-bottom: 2px solid;
  display: flex;
  gap: 20px;
  padding: 10px;
`;

export const Image = styled.div`
  & img {
    height: 100%;
    border-radius: 10px;
  }
`;

export const Title = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;

  & span {
    font-size: 40px;
    font-weight: 700;
  }
`;
