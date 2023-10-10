import styled from 'styled-components';
import {
  borderAccentColor,
  device,
  normalAccentColor,
  shadow,
  textMainColor,
  textSecondColor,
  transition,
} from 'utils/variables.styled';

const gapGridLeft = 20;
const gapGridTop = 30;
const numberOfCards = 2;

const gapGridLeftDesktop = 29;
const gapGridTopDesktop = 50;
const numberOfCardsDesktop = 4;

export const CardSet = styled.ul`
  @media ${device.tablet} {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;

    list-style: none;
    margin-top: -${gapGridTop}px;
    margin-left: -${gapGridLeft}px;
  }

  @media ${device.desktop} {
    margin-top: -${gapGridTopDesktop}px;
    margin-left: -${gapGridLeftDesktop}px;
  }
`;

export const Item = styled.li`
  margin-bottom: 20px;

  @media ${device.tablet} {
    flex-basis: calc(100% / ${numberOfCards} - ${gapGridLeft}px);
    margin-top: ${gapGridTop}px;
    margin-left: ${gapGridLeft}px;
    transition: scale ${transition};
    cursor: pointer;
  }

  @media ${device.desktop} {
    flex-basis: calc(100% / ${numberOfCardsDesktop} - ${gapGridLeftDesktop}px);
    margin-top: ${gapGridTopDesktop}px;
    margin-left: ${gapGridLeftDesktop}px;

    &:hover {
      scale: 1.007;
    }
  }

  /* & * {
    outline: 1px solid blueviolet;
  } */
`;

export const Card = styled.article`
  display: flex;
  flex-direction: column;
  height: 100%;

  box-shadow: ${shadow};
  border-radius: 10px;
  overflow: hidden;
`;

export const CardThumb = styled.div`
  position: relative;
  height: 268px;

  & img {
    height: 100%;
    object-fit: cover;
  }
`;

export const CardContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  flex-grow: 1;
  padding: 10px;
`;

export const WrapCardHeading = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 8px;
`;

export const CardHeading = styled.h2`
  font-size: 16px;
  font-weight: 500;
  line-height: calc(24 / 16);

  color: ${textMainColor};

  & span {
    color: ${normalAccentColor};
  }
`;

export const CardTitle = styled.h2`
  font-size: 18px;
  margin-bottom: 10px;
`;

export const CardText = styled.div`
  color: ${textSecondColor};

  & ul {
    display: flex;
    gap: 6px;
    flex-wrap: wrap;

    & li {
      &:not(:last-child) {
        height: 16px;
        border-right: 1px solid ${borderAccentColor};
        padding-right: 6px;
      }
    }
  }
`;
