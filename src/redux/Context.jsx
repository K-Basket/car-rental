import { createContext, useContext, useState } from 'react';
import { useGetCarsQuery } from './carSlice';
import { INITIAL_STATE } from 'components/Filter';

const CarsContext = createContext();

export const useCarsContext = () => useContext(CarsContext);

export const Context = ({ children }) => {
  const { data } = useGetCarsQuery();

  const [showModal, setShowModal] = useState(false);
  const [dataOneCar, setDataOneCar] = useState({});
  const [idCarsFavorite, setIdCarsFavorite] = useState([]);
  const [dataFilter, setDataFilter] = useState(INITIAL_STATE);

  const toggleModal = () => {
    setShowModal(prev => !prev);
    document.body.style.overflow = 'visible'; // re scroll
  };

  const getIdCar = idCar => setDataOneCar(data.find(({ id }) => id === idCar));

  return (
    <CarsContext.Provider
      value={{
        showModal,
        toggleModal,

        dataOneCar,
        getIdCar,

        idCarsFavorite,
        setIdCarsFavorite,

        dataFilter,
        setDataFilter,
      }}
    >
      {children}
    </CarsContext.Provider>
  );
};
