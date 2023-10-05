import styled from 'styled-components';
import {
  hoverAccentColor,
  normalAccentColor,
  transition,
  whiteColor,
} from 'variables.styled';

export const Button = styled.button`
  min-width: ${({ $width }) => $width || '100px'};
  padding: ${({ $paddingTopBott }) => $paddingTopBott || '12px 0'};

  font-family: Manrope;
  font-size: 14px;
  font-weight: 600;
  line-height: calc(20 / 14);

  border: none;
  border-radius: 12px;
  color: ${whiteColor};
  background-color: ${normalAccentColor};
  transition: background-color ${transition};

  &:hover,
  :focus {
    background-color: ${hoverAccentColor};
  }
`;
