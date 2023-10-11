import { Btn } from './Btn';
import { ContainerHome, Title } from './Home.styled';
import { useNavigate } from 'react-router-dom';

export const Home = () => {
  const navigate = useNavigate();
  return (
    <ContainerHome>
      <Title>Welcome to the car rental website</Title>
      <p>choose your car and travel</p>
      <Btn
        $width="150px"
        onClick={() => {
          navigate('/catalog');
        }}
      >
        Get Started
      </Btn>
    </ContainerHome>
  );
};
