import { NavMenu } from 'components/Header/NavMenu/NavMenu';
import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { Header } from './Layout.styled';

export const Layout = () => {
  return (
    <>
      <Header>

        <h1>LOGO</h1>
        <NavMenu />

      </Header>
      <main>
        <Suspense
        // fallback={<Loader />}
        >
          <Outlet />
        </Suspense>
      </main>
    </>
  );
};
