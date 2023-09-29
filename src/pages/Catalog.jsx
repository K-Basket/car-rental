import { Cards } from 'components/Cards';
import { Filter } from 'components/Filter';
import { useState } from 'react';
import { useGetCarsQuery } from 'redux/carSlice';

const Catalog = () => {
  const { data } = useGetCarsQuery();
  const [dataCar, setDataCar] = useState({});
  console.log('dataCar for Modal :>> ', dataCar);

  const getIdCar = idCard => {
    const dataCar = data.find(el => el.id === idCard);
    setDataCar(dataCar);
  };

  return (
    <>
      <h1>Catalog Pages</h1>

      <Filter />
      <Cards getIdCar={getIdCar} />
    </>
  );
};

export default Catalog;
