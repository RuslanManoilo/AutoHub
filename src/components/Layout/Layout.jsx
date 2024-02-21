import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';

export const Layout = () => {
  return (
    <>
      <header>
        <h1>Layout</h1>
        <p>Home</p>
        <p>Catalog</p>
        <p>Favorite</p>
      </header>
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
