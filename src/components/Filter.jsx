import { useEffect, useState } from 'react';
import {
  ContainerFilter,
  Form,
  InputLeft,
  InputRight,
  Label,
  SelectWrapp,
} from './Filter.styled';
import { Btn } from './Btn';
import { addCommaDelimiter } from 'helpers/addCommaDelimiter';
import { removesCommas } from 'helpers/removesCommas';
import { useGetCarsQuery } from 'redux/carSlice';
import { Select } from './Select';
import { useCarsContext } from 'redux/Context';

export const INITIAL_STATE = {
  priceFrom: '',
  priceTo: '',
  Carbrand: '',
  Pricehour: '',
};

export const Filter = () => {
  const { data } = useGetCarsQuery();
  const { setDataFilter, dataFilter } = useCarsContext();
  const {
    Carbrand: brand,
    Pricehour: price,
    priceFrom: from,
    priceTo: to,
  } = dataFilter;
  const [valueForm, setValueForm] = useState(INITIAL_STATE);
  const { priceFrom, priceTo, Carbrand, Pricehour } = valueForm;
  const [isClean, setIsClean] = useState(false);
  const [mileageErr, setMileageErr] = useState(false);

  useEffect(() => {
    if (
      valueForm.Carbrand ||
      valueForm.Pricehour ||
      valueForm.priceFrom ||
      valueForm.priceTo
    ) {
      setIsClean(false);
      setMileageErr(false);
    }
  }, [valueForm]);

  useEffect(() => {
    if (brand || price || from || to) setIsClean(true);
  }, [brand, price, from, to]);

  const handleClickBtn = () => {
    if (isClean) {
      setValueForm(INITIAL_STATE);
      setDataFilter(INITIAL_STATE);
      setIsClean(false);
    }
  };

  const listBrand = data
    ?.map(({ make }) => {
      return make;
    })
    .sort((a, b) => (a > b ? 1 : -1));

  const listPrice = data
    ?.map(({ rentalPrice }) => {
      return rentalPrice.slice(1);
    })
    .sort((a, b) => a - b);

  const handleGetSelected = values => {
    setValueForm({ ...valueForm, ...values });
  };

  const hanleGhange = evt => {
    const { name, value } = evt.target;

    setValueForm({ ...valueForm, [name]: addCommaDelimiter(value) });
  };

  const handleSubmit = evt => {
    evt.preventDefault();

    if (priceFrom >= priceTo && priceTo !== '') return setMileageErr(true);

    setDataFilter({
      ...valueForm,
      ...{
        priceFrom: removesCommas(priceFrom),
        priceTo: removesCommas(priceTo),
      },
    });
  };

  return (
    <section>
      <ContainerFilter>
        <SelectWrapp>
          <Select
            title="Car brand"
            defaultText="Choose a car brand"
            $width="224px"
            $maxHeight="272px"
            list={listBrand}
            onSubmit={handleGetSelected}
            selected={Carbrand}
          />

          <Select
            title="Price/ 1 hour"
            defaultText="To $"
            $width="125px"
            $maxHeight="188px"
            list={listPrice}
            onSubmit={handleGetSelected}
            selected={Pricehour}
          />
        </SelectWrapp>

        <Form onSubmit={handleSubmit} autoComplete="on">
          <Label htmlFor="priceFrom">
            Сar mileage / km
            <div>
              <p>From</p>
              <InputLeft
                type="text"
                name="priceFrom"
                value={priceFrom}
                onChange={hanleGhange}
              />
            </div>
          </Label>

          <Label htmlFor="priceFrom">
            <div>
              <p>To</p>
              <InputRight
                $color={mileageErr}
                type="text"
                name="priceTo"
                value={priceTo}
                onChange={hanleGhange}
              />
            </div>
          </Label>

          <Btn
            $width="136px"
            $paddingTopBott="14px 0"
            type="submit"
            onClick={handleClickBtn}
          >
            {isClean ? 'Clean' : 'Search'}
          </Btn>
        </Form>
      </ContainerFilter>
    </section>
  );
};
