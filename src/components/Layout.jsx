import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { Header, Nav, NavLinkStyled } from './Layout.styled';
import { Container } from 'utils/container.styled';

export const Layout = () => {
  return (
    <>
      <Header>
        <Container>
          <Nav>
            <NavLinkStyled to="/">Home</NavLinkStyled>
            <NavLinkStyled to="/catalog">Catalog</NavLinkStyled>
            <NavLinkStyled to="/favorites">Favorites</NavLinkStyled>
          </Nav>
        </Container>
      </Header>

      <main>
        <Suspense fallback={null}>
          <Outlet />
        </Suspense>
      </main>

      <footer></footer>
    </>
  );
};
