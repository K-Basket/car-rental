import { Btn } from 'components/Btn';
import { Cards } from 'components/Cards';
import { Filter } from 'components/Filter';
import { Modal } from 'components/Modal';
import { ModalCard } from 'components/ModalCard';
import { useState } from 'react';
import { useGetCarsQuery } from 'redux/carSlice';

const Catalog = () => {
  const { data } = useGetCarsQuery();
  const [dataCar, setDataCar] = useState({});
  console.log('dataCar for Modal :>> ', dataCar);
  const [showModal, setShowModal] = useState(false);

  const toggleModal = () => {
    setShowModal(prev => !prev);
    document.body.style.overflow = 'visible'; // re scroll
  };

  const getIdCar = idCard => {
    const dataCar = data.find(({ id }) => id === idCard);
    setDataCar(dataCar);
  };

  return (
    <>
      <Filter />
      <Cards onClose={toggleModal} getIdCar={getIdCar} />

      {showModal && (
        <Modal onClose={toggleModal}>
          <ModalCard onClose={toggleModal} dataCar={dataCar} />
        </Modal>
      )}
    </>
  );
};

export default Catalog;
