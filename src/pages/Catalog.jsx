import { Cards } from 'components/Cards';
import { Filter } from 'components/Filter';
import { Modal } from 'components/Modal';
import { ModalCard } from 'components/ModalCard';
import { useCarsContext } from 'redux/Context';
import { useGetCarsQuery } from 'redux/carSlice';

const Catalog = () => {
  const { data } = useGetCarsQuery();
  const { showModal, toggleModal, dataOneCar } = useCarsContext();

  return (
    <>
      <Filter />
      <Cards listCars={data} />

      {showModal && (
        <Modal onClose={toggleModal}>
          <ModalCard onClose={toggleModal} dataOneCar={dataOneCar} />
        </Modal>
      )}
    </>
  );
};

export default Catalog;
