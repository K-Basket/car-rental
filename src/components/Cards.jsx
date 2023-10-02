import { useGetCarsQuery } from 'redux/carSlice';
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

export const Cards = ({ onClose, getIdCar }) => {
  const { data } = useGetCarsQuery();

  return (
    <section>
      <Container>
        <CardSet>
          {data &&
            data.map(
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
                      if (evt.target.nodeName !== 'svg') {
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
                            fill: false && '#3470ff',
                            stroke: false && 'none',
                          }}
                          onClick={() => {
                            console.log('click icon');
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
