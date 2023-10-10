import {
  CardSet,
  Item,
  Card,
  CardThumb,
  CardText,
  CardContent,
  WrapCardHeading,
  CardHeading,
} from './Cards.styled';
import { useCarsContext } from 'redux/Context';
import { Favorite } from './Favorite';
import { Container } from 'utils/container.styled';

export const Cards = ({ listCars }) => {
  const { getIdCar, toggleModal } = useCarsContext();

  return (
    <section>
      <Container style={{ marginBottom: '50px' }}>
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

                const handleLearnMore = evt => {
                  if (
                    evt.target.nodeName !== 'svg' &&
                    evt.target.nodeName !== 'use'
                  ) {
                    getIdCar(evt.currentTarget.dataset.card);
                    toggleModal();
                  }
                };

                return (
                  <Item key={id} data-card={id} onClick={handleLearnMore}>
                    <Card>
                      <CardThumb>
                        <img src={img} alt={make} />
                        <Favorite id={id} $top="14px" $right="14px" />
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
