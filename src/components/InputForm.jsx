import { Formik, ErrorMessage } from 'formik';
import {
  ErrorText,
  FormStyle,
  InputLeft,
  InputRight,
  Label,
} from './InputForm.styled';
import { object, string } from 'yup';
import { Btn } from './Btn';

const schema = object({
  priceFrom: string(),
  priceTo: string(),
});

const initialValues = {
  priceFrom: '',
  priceTo: '',
};

const FormError = ({ name }) => {
  return (
    <ErrorMessage
      name={name}
      render={message => <ErrorText>{message}</ErrorText>}
    />
  );
};

export const InputForm = ({ onSubmit }) => {
  const handleSubmit = (values, { resetForm }) => {
    // onSubmit(values);
    console.log('values :>> ', values);
    resetForm();
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={schema}
      onSubmit={handleSubmit}
    >
      <FormStyle autoComplete="on">
        <Label htmlFor="priceFrom">
          Сar mileage / km
          <div>
            <p>From</p>
            <InputLeft type="text" name="priceFrom" />
            <FormError name="priceFrom" />
          </div>
        </Label>

        <Label htmlFor="priceFrom">
          <div>
            <p>To</p>
            <InputRight type="text" name="priceTo" />
            <FormError name="priceTo" />
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
      </FormStyle>
    </Formik>
  );
};
