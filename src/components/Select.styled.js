import styled from 'styled-components';
import {
  borderColor,
  device,
  highlightBgColor,
  textLabelFilterColor,
  textMainColor,
  textThirdColor,
  whiteColor,
} from 'utils/variables.styled';

export const Title = styled.h3`
  margin-bottom: 4px;
  font-size: 12px;
  font-weight: 500;
  line-height: calc(18 / 12);
  color: ${props => props.$colorValue || `${textLabelFilterColor}`};

  @media ${device.desktop} {
    margin-bottom: 8px;
    font-size: 14px;
    line-height: calc(18 / 14);
  }
`;

export const SelectList = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: ${props => props.$width || '224px'};
  height: 40px;
  padding: 0 18px 0 18px;
  background-color: ${highlightBgColor};
  border-radius: 10px;
  cursor: pointer;
  z-index: 1;

  @media ${device.desktop} {
    height: 48px;
    border-radius: 14px;
  }

  & p {
    font-size: 14px;
    font-weight: 500;
    line-height: calc(20 / 18);
    color: ${textMainColor};

    @media ${device.desktop} {
      font-size: 18px;
    }
  }

  & svg {
    stroke: ${textMainColor};
    fill: none;

    @media ${device.desktop} {
      width: 20px;
      height: 20px;
    }
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
    font-size: 13px;
    font-weight: 500;
    line-height: calc(20 / 13);
    color: ${textThirdColor};

    @media ${device.desktop} {
      font-size: 16px;
      line-height: calc(20 / 16);
    }

    &:not(:last-child) {
      padding-bottom: 4px;

      @media ${device.desktop} {
        padding-bottom: 8px;
      }
    }

    &:hover {
      color: ${textMainColor};
    }
  }
`;
