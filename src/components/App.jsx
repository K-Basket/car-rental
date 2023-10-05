import { Routes, Route } from 'react-router-dom';
import { lazy, useEffect } from 'react';
import { Layout } from './Layout';
import { loadLocalStorage } from 'helpers/storage';
import { useCarsContext } from 'redux/Context';

const Home = lazy(() => import('pages/Home'));
const Catalog = lazy(() => import('pages/Catalog'));
const Favorites = lazy(() => import('pages/Favorites'));

export const App = () => {
  const { setIdCarsFavorite } = useCarsContext();

  useEffect(() => {
    const localState = loadLocalStorage('idCars');

    if (localState) setIdCarsFavorite(localState);
  }, [setIdCarsFavorite]);

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="catalog" element={<Catalog />} />
        <Route path="favorites" element={<Favorites />} />
        <Route path="*" element={<Home />} />
      </Route>
    </Routes>
  );
};
