import styled from 'styled-components';
import { device, whiteColor } from 'utils/variables.styled';

const bgImage =
  'https://res.cloudinary.com/daqnavarl/image/upload/v1697055195/rental%20Car/bg-img_k89rv3.jpg';

export const ContainerHome = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  height: 100vh;
  background-image: linear-gradient(
      to bottom,
      rgba(15, 15, 15, 0.7),
      rgba(15, 15, 15, 0.1)
    ),
    url(${bgImage});
  background-size: cover;
  background-position: center;

  & p {
    margin-top: 5px;
    margin-bottom: 30px;
    font-size: 15px;
    font-style: italic;
    font-weight: 500;
    color: ${whiteColor};

    @media ${device.tablet} {
      margin-top: 0;
      margin-bottom: 20px;
      margin-bottom: 40px;
      font-size: 26px;
    }
  }
`;

export const Title = styled.h1`
  font-size: 20px;
  font-weight: 600;
  color: ${whiteColor};

  @media ${device.tablet} {
    font-size: 36px;
  }
`;
