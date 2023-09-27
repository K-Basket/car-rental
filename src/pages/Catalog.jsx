import { InputForm } from 'components/InputForm';

const Catalog = () => {
  const handleGet = values => {
    console.log('Sent to Backend :>> ', values);
  };

  return (
    <>
      <h1>Catalog Pages</h1>

      <InputForm onSubmit={handleGet} />
    </>
  );
};

export default Catalog;
