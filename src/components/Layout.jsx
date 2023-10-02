import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { Header, Nav, NavLinkStyled } from './Layout.styled';

export const Layout = () => {
  return (
    <>
      <Header>
        <Nav>
          <NavLinkStyled to="/">Home</NavLinkStyled>
          <NavLinkStyled to="/catalog">Catalog</NavLinkStyled>
          <NavLinkStyled to="/favorites">Favorites</NavLinkStyled>
        </Nav>
      </Header>

      <main>
        <Suspense fallback={<div>Loading...</div>}>
          <Outlet />
        </Suspense>
      </main>

      <footer></footer>
    </>
  );
};
