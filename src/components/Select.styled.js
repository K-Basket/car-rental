import styled from 'styled-components';
import {
  borderColor,
  highlightBgColor,
  textLabelFilterColor,
  textMainColor,
  textThirdColor,
  whiteColor,
} from 'variables.styled';

export const Title = styled.h3`
  margin-bottom: 8px;
  font-size: 14px;
  font-weight: 500;
  line-height: calc(18 / 14);
  color: ${props => props.$colorValue || `${textLabelFilterColor}`};
`;

export const Container = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: ${props => props.$width || '224px'};
  height: 48px;
  padding: 0 18px 0 18px;
  background-color: ${highlightBgColor};
  border-radius: 14px;
  cursor: pointer;
  z-index: 1;

  & p {
    font-size: 18px;
    font-weight: 500;
    line-height: calc(20 / 18);
    color: ${textMainColor};
  }

  & svg {
    stroke: ${textMainColor};
    fill: none;
  }
`;

export const ListOptions = styled.ul`
  position: absolute;
  top: 50px;
  left: 0;

  padding: 14px 18px;
  margin-top: 4px;

  width: ${props => props.$width || '224px'};
  max-height: ${props => props.$maxHeight || '272px'};
  border-radius: 14px;
  border: 1px solid ${borderColor};
  background-color: ${whiteColor};

  overflow-y: auto;
  scroll-behavior: smooth;

  & li {
    font-size: 16px;
    font-weight: 500;
    line-height: calc(20 / 16);
    color: ${textThirdColor};

    &:not(:last-child) {
      padding-bottom: 8px;

      &:hover {
        color: ${textMainColor};
      }
    }
  }
`;
