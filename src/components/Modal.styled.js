import styled from 'styled-components';
import { backdropModalBgColor, device } from 'utils/variables.styled';

export const Backdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${backdropModalBgColor};
  z-index: 1200;
`;

export const ModalContent = styled.div`
  width: 100vw;
  height: 100vh;

  @media ${device.tablet} {
    width: min-content;
    height: min-content;
    max-width: calc(100vw - 48px);
    max-height: calc(100vh - 24px);
  }
`;
