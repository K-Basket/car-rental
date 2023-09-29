import { useState } from 'react';
import { Form, InputLeft, InputRight, Label } from './Filter.styled';
import { Btn } from './Btn';
import { addCommaDelimiter } from 'helpers/addCommaDelimiter';
import { removesCommas } from 'helpers/removesCommas';
import { useGetCarsQuery } from 'redux/carSlice';
import { Select } from './Select';

export const Filter = () => {
  const INITIAL_STATE = {
    priceFrom: '',
    priceTo: '',
    Carbrand: '',
    Pricehour: '',
  };

  const { data } = useGetCarsQuery();
  // console.log('data :>> ', data, error, isLoading);

  const [valueForm, setValueForm] = useState(INITIAL_STATE);
  const { priceFrom, priceTo, Carbrand, Pricehour } = valueForm;

  const [dataFilter, setDataFilter] = useState(null);
  // console.log('dataFilter :>> ', dataFilter);
  // console.log('valueForm :>> ', valueForm);

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
    setDataFilter({ ...dataFilter, ...values });
    setValueForm({ ...valueForm, ...values });
  };

  const hanleGhange = evt => {
    const { name, value } = evt.target;
    // записал в форму для отображения в интерфейсе с запятой
    setValueForm({ ...valueForm, [name]: addCommaDelimiter(value) });
    // записал данные для фильтрации
    setDataFilter({
      ...dataFilter,
      ...{ [name]: value },
    });
  };

  const handleSubmit = evt => {
    evt.preventDefault();

    if (priceFrom >= priceTo && priceTo !== '') {
      console.warn('The "From" value must NOT be greater than the "To" value');
      return;
    }

    setDataFilter({
      ...dataFilter,
      ...{
        priceFrom: removesCommas(priceFrom),
        priceTo: removesCommas(priceTo),
      },
    });

    setValueForm(INITIAL_STATE);

    // Filtering Function
    console.warn('Here is the filtering Function', dataFilter);

    setDataFilter(INITIAL_STATE);
  };

  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'end',
        gap: '18px',
      }}
    >
      <Select
        title="Car brand"
        defaultText="Enter the text"
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
              type="text"
              name="priceTo"
              value={priceTo}
              onChange={hanleGhange}
            />
          </div>
        </Label>

        <Btn $width="136px" $paddingTopBott="14px 0" type="submit">
          Search
        </Btn>
      </Form>
    </div>
  );
};
