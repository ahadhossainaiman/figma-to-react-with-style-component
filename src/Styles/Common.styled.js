import styled from "styled-components";

export const Container = styled.div`
  max-width: 140rem;
  margin: 0 auto;
`;

export const GridThree = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 4rem;
  @media (max-width: ${({ theme }) => theme.mobile}) {
    grid-template-columns: 1fr;
  }
`;
