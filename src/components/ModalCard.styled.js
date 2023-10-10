import styled from 'styled-components';
import {
  borderAccentColor,
  highlightBgColor,
  hoverAccentColor,
  normalAccentColor,
  textFourthColor,
  textMainColor,
  textSecondColor,
  transition,
  whiteColor,
} from 'utils/variables.styled';

export const CardModal = styled.div`
  position: relative;
  width: 541px;
  min-height: 752px;
  padding: 40px;

  border-radius: 15px;
  background-color: ${whiteColor};

  & > svg {
    position: absolute;
    top: 16px;
    right: 16px;
    stroke: ${textMainColor};
    cursor: pointer;
  }
`;

export const CardThumb = styled.div`
  position: relative;

  & img {
    border-radius: 15px;
    width: 469px;
    height: 314px;
    object-fit: cover;
    border-radius: 10px;
  }
`;

export const Description = styled.div`
  margin-top: 15px;
  margin-bottom: 24px;
`;

export const CardHeading = styled.h2`
  margin-bottom: 8px;

  font-size: 18px;
  font-weight: 500;
  line-height: calc(24 / 16);

  color: ${textMainColor};

  & span {
    color: ${normalAccentColor};
  }
`;

export const CardText = styled.ul`
  color: ${textSecondColor};
  display: flex;
  flex-wrap: wrap;

  & li {
    &:not(:last-child) {
      height: 16px;
      border-right: 1px solid ${borderAccentColor};
      padding-right: 6px;
      margin-right: 6px;
    }
  }
`;

export const CardTexCondit = styled.li`
  padding: 7px 14px;
  border-radius: 35px;
  color: ${textFourthColor};
  background-color: ${highlightBgColor};

  & span {
    color: ${normalAccentColor};
  }
`;

export const CardTextDesc = styled.p`
  margin-top: 14px;

  font-size: 14px;
  line-height: calc (20/14);

  color: ${textMainColor};
`;

export const CardTitleDescSt = styled.p`
  margin-top: 14px;
  margin-bottom: 8px;

  font-size: 14px;
  font-weight: 500;
  line-height: calc (20/14);

  color: ${textMainColor};
`;

export const Link = styled.a`
  width: 168px;
  padding: 12px 50px;

  font-size: 14px;
  font-weight: 600;
  line-height: calc(20 / 14);

  border-radius: 12px;
  color: ${whiteColor};
  background-color: ${normalAccentColor};
  transition: background-color ${transition};

  &:hover,
  :focus {
    background-color: ${hoverAccentColor};
  }
`;
