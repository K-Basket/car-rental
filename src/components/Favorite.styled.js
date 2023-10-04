import styled from 'styled-components';

export const Svg = styled.svg`
  position: absolute;

  top: ${({ $top }) => $top || '0px'};
  right: ${({ $right }) => $right || '0px'};

  stroke: ${({ $idInc }) => ($idInc ? 'none' : '#ffffffcc')};
  fill: ${({ $idInc }) => ($idInc ? '#3470ff' : 'none')};

  transition: scale 250ms cubic-bezier(0.4, 0, 0.2, 1) 0s;

  &:hover {
    scale: 1.1;
  }
`;
