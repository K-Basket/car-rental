import styled from 'styled-components';

export const Button = styled.button`
  min-width: ${({ $width }) => $width || '100px'};
  padding: ${({ $paddingTopBott }) => $paddingTopBott || '12px 0'};

  font-family: Manrope;
  font-size: 14px;
  font-weight: 600;
  line-height: calc(20 / 14);

  border: none;
  border-radius: 12px;
  color: #ffffff;
  background-color: #3470ff;
  transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0s;

  &:hover,
  :focus {
    background-color: #0b44cd;
  }
`;
