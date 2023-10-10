import styled from 'styled-components';
import { normalAccentColor, transition } from 'utils/variables.styled';

export const Svg = styled.svg`
  position: absolute;

  top: ${({ $top }) => $top || '0px'};
  right: ${({ $right }) => $right || '0px'};

  stroke: ${({ $idInc }) => ($idInc ? 'none' : 'rgba(255, 255, 255, 0.8)')};
  fill: ${({ $idInc }) => ($idInc ? `${normalAccentColor}` : 'none')};

  transition: scale ${transition};

  &:hover {
    scale: 1.1;
  }
`;
