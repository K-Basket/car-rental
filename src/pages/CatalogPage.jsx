import { Cards } from 'components/Cards';
import { Filter } from 'components/Filter';
import { Modal } from 'components/Modal';
import { ModalCard } from 'components/ModalCard';
import { useEffect, useState } from 'react';
import { useCarsContext } from 'redux/Context';
import { useGetCarsQuery } from 'redux/carSlice';

const CatalogPage = () => {
  const { data } = useGetCarsQuery();
  const { showModal, toggleModal, dataOneCar, dataFilter } = useCarsContext();
  const {
    Carbrand: brand,
    Pricehour: price,
    priceFrom: from,
    priceTo: to,
  } = dataFilter;
  const [listFilteredCars, setListFilteredCars] = useState(null);

  useEffect(() => {
    if (!data) return;

    let result = [...data].sort((a, b) => (a.make > b.make ? 1 : -1));

    if (brand) {
      result = result.filter(({ make }) => make === brand);
    }

    if (price)
      result = result.filter(
        ({ rentalPrice }) => Number(rentalPrice.slice(1)) <= Number(price)
      );

    if (from) {
      result = result.filter(({ mileage }) => {
        return mileage >= from;
      });
    }

    if (to) {
      result = result.filter(({ mileage }) => {
        return mileage <= to;
      });
    }

    setListFilteredCars(result);
  }, [brand, price, from, to, data]);

  return (
    <>
      <Filter />
      <Cards listCars={listFilteredCars} />

      {showModal && (
        <Modal onClose={toggleModal}>
          <ModalCard onClose={toggleModal} dataOneCar={dataOneCar} />
        </Modal>
      )}
    </>
  );
};

export default CatalogPage;
