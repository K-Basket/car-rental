import { Routes, Route } from 'react-router-dom';
import { lazy, useEffect } from 'react';
import { Layout } from './Layout';
import { loadLocalStorage } from 'helpers/storage';
import { useCarsContext } from 'redux/Context';

const HomePage = lazy(() => import('pages/HomePage'));
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
      <Route path="/" element={<HomePage />} />
      <Route element={<Layout />}>
        <Route path="/catalog" element={<Catalog />} />
        <Route path="/favorites" element={<Favorites />} />
      </Route>
      <Route path="*" element={<HomePage />} />
    </Routes>
  );

  // return (
  //   <Routes>
  //     <Route path="/" element={<Layout />}>
  //       <Route index element={<HomePage />} />
  //       <Route path="catalog" element={<Catalog />} />
  //       <Route path="favorites" element={<Favorites />} />
  //       <Route path="*" element={<HomePage />} />
  //     </Route>
  //   </Routes>
  // );
};
