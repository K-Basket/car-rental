import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { Nav, NavLinkStyled } from './Layout.styled';

export const Layout = () => {
  return (
    <>
      <header>
        <Nav>
          <NavLinkStyled to="/">Home</NavLinkStyled>
          <NavLinkStyled to="/catalog">Catalog</NavLinkStyled>
          <NavLinkStyled to="/favorites">Favorites</NavLinkStyled>
        </Nav>
      </header>

      <main>
        <Suspense fallback={<div>Loading...</div>}>
          <Outlet />
        </Suspense>
      </main>

      <footer></footer>
    </>
  );
};
