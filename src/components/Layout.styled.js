import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import {
  device,
  hoverAccentColor,
  textMainColor,
  textSecondColor,
} from 'utils/variables.styled';

export const Header = styled.header`
  padding-top: 5px;
  padding-bottom: 5px;
  margin-bottom: 15px;
  border-bottom: 1px solid ${textSecondColor};

  @media ${device.tablet} {
    padding-top: 7px;
    padding-bottom: 7px;
    margin-bottom: 18px;
  }

  @media ${device.desktop} {
    padding-top: 10px;
    padding-bottom: 10px;
    margin-bottom: 30px;
  }
`;

export const Nav = styled.nav`
  display: flex;
  gap: 15px;
  justify-content: center;
  align-items: center;
`;

export const NavLinkStyled = styled(NavLink)`
  padding: 2px 10px;

  font-size: 14px;
  font-weight: 500;
  line-height: calc(24 / 14);
  border-radius: 5px;
  color: ${textMainColor};

  @media ${device.tablet} {
    font-size: 16px;
    line-height: calc(24 / 16);
  }

  @media ${device.desktop} {
    font-size: 18px;
    line-height: calc(24 / 18);
  }

  &.active {
    color: ${hoverAccentColor};
  }
`;
