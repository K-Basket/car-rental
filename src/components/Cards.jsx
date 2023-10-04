import {
  CardSet,
  Container,
  Item,
  Card,
  CardThumb,
  CardText,
  CardContent,
  WrapCardHeading,
  CardHeading,
} from './Cards.styled';
import sprite from 'images/sprite.svg';
import {
  loadLocalStorage,
  removeLocalStorage,
  saveLocalStorage,
} from 'helpers/storage';
import { useCarsContext } from 'redux/Context';
import { useEffect } from 'react';

export const Cards = ({ listCars }) => {
  const { getIdCar, toggleModal, idCarsFavorite, setIdCarsFavorite } =
    useCarsContext();

  console.log('idCarsFavorite :>> ', idCarsFavorite);

  useEffect(() => {
    const localState = loadLocalStorage('idCars');

    if (localState) setIdCarsFavorite(localState);
  }, [setIdCarsFavorite]);

  const addFavorite = id => {
    if (!idCarsFavorite.includes(id)) {
      setIdCarsFavorite(prev => [...prev, id]);

      saveLocalStorage('idCars', [...idCarsFavorite, id]);

      return;
    }

    if (idCarsFavorite.includes(id)) {
      const res = [...idCarsFavorite];
      res.splice(idCarsFavorite.indexOf(id), 1);
      setIdCarsFavorite(res);

      saveLocalStorage('idCars', res);
    }

    if (idCarsFavorite.length === 1) removeLocalStorage('idCars');
  };

  return (
    <section>
      <Container>
        <CardSet>
          {listCars &&
            listCars.map(
              ({
                id,
                img,
                make,
                model,
                year,
                rentalPrice,
                type,
                rentalCompany,
                address,
                mileage,
                fuelConsumption,
              }) => {
                const location = address.split(',');

                return (
                  <Item
                    key={id}
                    data-card={id}
                    onClick={evt => {
                      if (
                        evt.target.nodeName !== 'svg' &&
                        evt.target.nodeName !== 'use'
                      ) {
                        getIdCar(evt.currentTarget.dataset.card);
                        toggleModal();
                      }
                    }}
                  >
                    <Card>
                      <CardThumb>
                        <img src={img} alt={make} />
                        <svg
                          width="20px"
                          height="20px"
                          data-card={id}
                          style={{
                            fill: idCarsFavorite.includes(id) && '#3470ff',
                            stroke: idCarsFavorite.includes(id) && 'none',
                          }}
                          onClick={() => {
                            addFavorite(id);
                          }}
                        >
                          <use href={`${sprite}#icon-like-active`}></use>
                        </svg>
                      </CardThumb>

                      <CardContent>
                        <WrapCardHeading>
                          <CardHeading>
                            {make}, <span>{model}</span> {year}
                          </CardHeading>
                          <CardHeading>{rentalPrice}</CardHeading>
                        </WrapCardHeading>

                        <CardText>
                          <ul>
                            <li>{location[1]}</li>
                            <li>{location[2]}</li>
                            <li>{rentalCompany}</li>
                          </ul>

                          <ul>
                            <li>{type}</li>
                            <li>{model}</li>
                            <li>{mileage}</li>
                            <li>{`Fuel: ${fuelConsumption}`}</li>
                          </ul>
                        </CardText>
                      </CardContent>
                    </Card>
                  </Item>
                );
              }
            )}
        </CardSet>
      </Container>
    </section>
  );
};
