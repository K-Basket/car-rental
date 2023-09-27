import { useState } from 'react';
import { Form, InputLeft, InputRight, Label } from './InputForm.styled';
import { Btn } from './Btn';

export const InputForm = ({ onSubmit }) => {
  const INITIAL_STATE = {
    priceFrom: '',
    priceTo: '',
  };

  const [valueForm, setValueForm] = useState(INITIAL_STATE);
  const { priceFrom, priceTo } = valueForm;

  const addCommaDelimiter = num =>
    num.replace(/[^0-9.]/g, '').replace(/\B(?=(\d{3})+(?!\d))/g, ',');

  const removesCommas = key => key.split(',').join('');

  const hanleGhange = evt => {
    const { name, value } = evt.target;

    setValueForm({ ...valueForm, [name]: addCommaDelimiter(value) });
  };

  const handleSubmit = evt => {
    evt.preventDefault();

    if (priceFrom === '' && priceTo === '') return;

    onSubmit({
      priceFrom: removesCommas(priceFrom),
      priceTo: removesCommas(priceTo),
    });

    setValueForm(INITIAL_STATE);
  };

  return (
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

      <Btn
        $width="136px"
        $paddingTopBott="14px 0"
        type="submit"
        onClick={() => console.log('click Btn search')}
      >
        Search
      </Btn>
    </Form>
  );
};
