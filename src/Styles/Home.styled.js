import styled from "styled-components";

export const HeroSections = styled.div`
  padding: 8rem 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 4rem 10rem;
  > div {
    flex: 1;
  }

  img {
    width: 452px;
    height: 307px;
    flex-shrink: 0;
  }

  @media (max-width: ${({ theme }) => theme.mobile}) {
    img {
      width: 35rem;
      height: auto;
    }
  }
  h2 {
    font-size: 6.4rem;
    font-weight: bold;
    span {
      color: #5156d9;
    }
  }

  @media (max-width: ${({ theme }) => theme.mobile}) {
    flex-direction: column;
    padding: 2rem;
    text-align: center;
    gap: 3rem;
    img {
      size: auto;
      padding: 0 2rem;
    }
    h2 {
      font-size: 4.4rem;
      padding: 0 4rem;
    }
  }
`;
export const TopSection = styled.div`
  background: linear-gradient(
    180deg,
    #d1d2f1 0.55%,
    rgba(217, 217, 217, 0) 100%
  );
`;

export const FeaturesSection = styled.section`
  background: linear-gradient(180deg, #fff 0.09%, #c9eff1 100%);
  padding: 6rem 4rem;
  h2 {
    color: #5156d9;
    font-family: Inter;
    font-size: 36px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    text-align: center;
    margin: 4rem 0;
  }
`;

export const FeatureCart = styled.div`
  img {
    height: 200px;
    width: 100%;
  }
  .caption {
    background-color: ${({ bgColor }) => bgColor};
    color: ${({ color }) => color};
    padding: 3rem 10rem;
    font-size: 2.2rem;
    text-align: center;
    font-weight: 700;
  }
`;
