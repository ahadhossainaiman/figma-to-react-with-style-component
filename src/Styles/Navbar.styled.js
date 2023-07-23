import styled from "styled-components";

export const Navigation = styled.nav`
  min-height: 12vh;
  display: flex;
  gap: 2rem;
  justify-content: space-between;
  align-items: center;
  margin: 0 5rem;

  img {
    width: 7rem;
    height: 7rem;
  }

  ul {
    list-style: none;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 2rem;
  }
  ul > li {
    text-decoration: none;
    font-size: 1.8rem;
  }

  @media (max-width: ${({ theme }) => theme.mobile}) {
    flex-direction: column;
    padding: 2rem;
  }
`;
