import styled from 'styled-components';
import {
  device,
  hoverAccentColor,
  normalAccentColor,
  transition,
  whiteColor,
} from 'utils/variables.styled';

export const Button = styled.button`
  min-width: ${({ $width }) => $width || '100px'};
  padding: 10px 0px;

  font-family: Manrope;
  font-size: 12px;
  font-weight: 600;
  line-height: calc(20 / 12);

  border: none;
  border-radius: 10px;
  color: ${whiteColor};
  background-color: ${normalAccentColor};
  transition: background-color ${transition};

  @media ${device.desktop} {
    padding: ${({ $paddingTopBott }) => $paddingTopBott || '12px 0'};
    font-size: 14px;
    line-height: calc(20 / 14);
    border-radius: 12px;
  }

  &:hover,
  :focus {
    background-color: ${hoverAccentColor};
  }
`;
