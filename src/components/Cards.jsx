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
import { useEffect, useState } from 'react';
import {
  loadLocalStorage,
  removeLocalStorage,
  saveLocalStorage,
} from 'helpers/storage';

export const Cards = ({ listCars, onClose, getIdCar }) => {
  // const { data } = useGetCarsQuery();
  const [idCardsFavorite, setIdCardsFavorite] = useState([]);

  useEffect(() => {
    const localState = loadLocalStorage('idCars');

    if (localState) setIdCardsFavorite(localState);
  }, []);

  const addFavorite = id => {
    if (!idCardsFavorite.includes(id)) {
      setIdCardsFavorite(prev => [...prev, id]);

      saveLocalStorage('idCars', [...idCardsFavorite, id]);

      return;
    }

    if (idCardsFavorite.includes(id)) {
      const res = [...idCardsFavorite];
      res.splice(idCardsFavorite.indexOf(id), 1);
      setIdCardsFavorite(res);

      saveLocalStorage('idCars', res);
    }

    if (idCardsFavorite.length === 1) removeLocalStorage('idCars');
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
                        onClose();
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
                            fill: idCardsFavorite.includes(id) && '#3470ff',
                            stroke: idCardsFavorite.includes(id) && 'none',
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
