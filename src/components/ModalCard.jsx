import sprite from 'images/sprite.svg';
import {
  CardHeading,
  CardModal,
  CardTexCondit,
  CardText,
  CardTextDesc,
  CardThumb,
  CardTitleDescSt,
  Description,
  Link,
} from './ModalCard.styled';
import { addCommaDelimiter } from 'helpers/addCommaDelimiter';
import { Favorite } from './Favorite';

export const ModalCard = ({ onClose, dataOneCar }) => {
  const {
    img,
    make,
    model,
    year,
    address,
    id,
    type,
    fuelConsumption,
    engineSize,
    description,
    accessories,
    functionalities,
    rentalPrice,
    mileage,
    rentalConditions,
  } = dataOneCar;
  const location = address.split(',');
  const rentalCondit = rentalConditions.split('\n');
  const mileageWithComma = addCommaDelimiter(`${mileage}`);

  return (
    <CardModal>
      <svg width="24px" height="24px" onClick={onClose}>
        <use href={`${sprite}#icon-x`}></use>
      </svg>
      <article>
        <CardThumb>
          <img src={img} alt={make} />
          <Favorite id={id} $top="25px" $right="25px" />
        </CardThumb>

        <Description>
          <CardHeading>
            {make}, <span>{model}</span> {year}
          </CardHeading>
          <div>
            <CardText>
              <li>{location[1]}</li>
              <li>{location[2]}</li>
              <li>{`id: ${id}`}</li>
              <li>{`Year: ${year}`}</li>
              <li>{`Type: ${type}`}</li>
            </CardText>

            <CardText>
              <li>{`Fuel Consumption: ${fuelConsumption}`}</li>
              <li>{`Engine Size: ${engineSize}`}</li>
            </CardText>
          </div>

          <CardTextDesc>{description}</CardTextDesc>
        </Description>

        <Description>
          <CardTitleDescSt>Accessories and functionalities:</CardTitleDescSt>
          <CardText>
            {accessories.map(el => (
              <li key={el}>{el}</li>
            ))}
          </CardText>

          <CardText>
            {functionalities.map(el => (
              <li key={el}>{el}</li>
            ))}
          </CardText>
        </Description>

        <Description>
          <CardTitleDescSt>Rental Conditions: </CardTitleDescSt>
          <ul style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
            <CardTexCondit>
              Minimum age: <span>{rentalCondit[0].slice(-2)}</span>
            </CardTexCondit>
            <CardTexCondit>{rentalCondit[1]}</CardTexCondit>
            <CardTexCondit>{rentalCondit[2]}</CardTexCondit>
            <CardTexCondit>
              Mileage: <span>{mileageWithComma}</span>
            </CardTexCondit>
            <CardTexCondit>
              Price: <span>{rentalPrice}</span>
            </CardTexCondit>
          </ul>
        </Description>

        <Link href="tel:+380730000000">Rental car</Link>
      </article>
    </CardModal>
  );
};
