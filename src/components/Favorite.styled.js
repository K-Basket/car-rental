import styled from 'styled-components';
import { device, normalAccentColor, transition } from 'utils/variables.styled';

export const Svg = styled.svg`
  position: absolute;

  top: 20px;
  right: 20px;

  stroke: ${({ $idInc }) => ($idInc ? 'none' : 'rgba(255, 255, 255, 0.8)')};
  fill: ${({ $idInc }) => ($idInc ? `${normalAccentColor}` : 'none')};

  transition: scale ${transition};

  @media ${device.tablet} {
    top: ${({ $top }) => $top || '0px'};
    right: ${({ $right }) => $right || '0px'};
  }

  &:hover {
    scale: 1.1;
  }
`;
