import { Navigate, Route, Routes } from 'react-router-dom';
import { Layout } from './Layout/Layout';

import Home from 'pages/Home/Home';
import Favorite from 'pages/Favorite/Favorite';
import Catalog from 'pages/Catalog/Catalog';

// import { lazy } from 'react';
// const Home = lazy(() => import('../pages/Home/Home'));

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="catalog" element={<Catalog />} />
        <Route path="favorites" element={<Favorite />} />

        <Route path="*" element={<Navigate to="/" replace />} />
      </Route>
    </Routes>
  );
};
