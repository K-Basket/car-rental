import { Home } from 'components/Home';
import { Loader } from 'components/Loader';
import { useEffect } from 'react';
import { Navigate } from 'react-router-dom';
import { useGetCarsQuery } from 'redux/carSlice';

const HomePage = () => {
  const { error, isLoading } = useGetCarsQuery();

  useEffect(() => {
    <Navigate to="/catalog" />;
  }, []);

  return (
    <>
      {isLoading && !error && <Loader />}

      <Home />
    </>
  );
};

export default HomePage;
