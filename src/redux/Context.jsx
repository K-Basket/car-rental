import { createContext, useContext, useState } from 'react';
import { useGetCarsQuery } from './carSlice';

const CarsContext = createContext();

export const useCarsContext = () => useContext(CarsContext);

export const Context = ({ children }) => {
  const { data } = useGetCarsQuery();
  const [showModal, setShowModal] = useState(false);
  const [dataOneCar, setDataOneCar] = useState({});
  const [idCarsFavorite, setIdCarsFavorite] = useState([]);

  const toggleModal = () => {
    setShowModal(prev => !prev);
    document.body.style.overflow = 'visible'; // re scroll
  };

  const getIdCar = idCard =>
    setDataOneCar(data.find(({ id }) => id === idCard));

  return (
    <CarsContext.Provider
      value={{
        showModal,
        toggleModal,

        dataOneCar,
        getIdCar,

        idCarsFavorite,
        setIdCarsFavorite,
      }}
    >
      {children}
    </CarsContext.Provider>
  );
};
