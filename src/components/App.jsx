import { Routes, Route, Navigate } from 'react-router-dom';
import { lazy, useEffect } from 'react';
import { Layout } from './Layout';
import { loadLocalStorage } from 'helpers/storage';
import { useCarsContext } from 'redux/Context';

const HomePage = lazy(() => import('pages/HomePage'));
const CatalogPage = lazy(() => import('pages/CatalogPage'));
const FavoritesPage = lazy(() => import('pages/FavoritesPage'));

export const App = () => {
  const { setIdCarsFavorite } = useCarsContext();

  useEffect(() => {
    const localState = loadLocalStorage('idCars');

    if (localState) setIdCarsFavorite(localState);
  }, [setIdCarsFavorite]);

  return (
    <Routes>
      <Route path="/" element={<Navigate to="/home" />} />
      <Route path="/home" element={<HomePage />} />

      <Route element={<Layout />}>
        <Route path="catalog" element={<CatalogPage />} />
        <Route path="favorites" element={<FavoritesPage />} />
      </Route>

      <Route path="*" element={<HomePage />} />
    </Routes>
  );
};
