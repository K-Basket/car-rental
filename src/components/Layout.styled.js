import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { shadow } from './Cards.styled';

export const Header = styled.header`
  padding-top: 10px;
  padding-bottom: 10px;
  margin-bottom: 30px;
  border-bottom: 1px solid rgba(18, 20, 23, 0.5);
`;

export const Nav = styled.nav`
  display: flex;
  gap: 15px;
  justify-content: center;
  align-items: center;
  /* margin-top: 10px; */
`;

export const NavLinkStyled = styled(NavLink)`
  margin-right: 10px;
  padding: 2px 10px;

  font-size: 18px;
  font-weight: 500;
  line-height: calc(24 / 16);
  border-radius: 5px;
  color: black;

  &.active {
    color: #0b44cd;

    /* background-color: rgb(230, 230, 230); */
  }
`;
