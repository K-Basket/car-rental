import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import {
  hoverAccentColor,
  textMainColor,
  textSecondColor,
} from 'variables.styled';

export const Header = styled.header`
  padding-top: 10px;
  padding-bottom: 10px;
  margin-bottom: 30px;
  border-bottom: 1px solid ${textSecondColor};
`;

export const Nav = styled.nav`
  display: flex;
  gap: 15px;
  justify-content: center;
  align-items: center;
`;

export const NavLinkStyled = styled(NavLink)`
  margin-right: 10px;
  padding: 2px 10px;

  font-size: 18px;
  font-weight: 500;
  line-height: calc(24 / 16);
  border-radius: 5px;
  color: ${textMainColor};

  &.active {
    color: ${hoverAccentColor};
  }
`;
