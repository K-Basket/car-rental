import { Cards } from 'components/Cards';
import { Modal } from 'components/Modal';
import { ModalCard } from 'components/ModalCard';
import { useEffect, useState } from 'react';
import { useCarsContext } from 'redux/Context';
import { useGetCarsQuery } from 'redux/carSlice';

const Favorites = () => {
  const { data } = useGetCarsQuery();
  const { showModal, toggleModal, dataOneCar, idCarsFavorite } =
    useCarsContext();
  const [listFavoriteCars, setListFavoriteCars] = useState(null);

  useEffect(() => {
    if (!data) return;

    let result = data.filter(
      el => el.id === idCarsFavorite.find(id => id === el.id)
    );

    result = [...result].sort((a, b) => (a.make > b.make ? 1 : -1));

    setListFavoriteCars(result);
  }, [data, idCarsFavorite]);

  return (
    <>
      <Cards listCars={listFavoriteCars} />

      {showModal && (
        <Modal onClose={toggleModal}>
          <ModalCard onClose={toggleModal} dataOneCar={dataOneCar} />
        </Modal>
      )}
    </>
  );
};

export default Favorites;
