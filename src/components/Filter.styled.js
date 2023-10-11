import styled from 'styled-components';
import { Container } from 'utils/container.styled';
import {
  borderAccent2Color,
  device,
  highlightBgColor,
  textLabelFilterColor,
  textMainColor,
} from 'utils/variables.styled';

export const ContainerFilter = styled(Container)`
  margin-bottom: 25px;

  @media ${device.tablet} {
    display: flex;
    justify-content: space-between;
    align-items: end;
    margin-bottom: 30px;
  }

  @media ${device.desktop} {
    justify-content: center;
    gap: 18px;
    margin-bottom: 50px;
  }
`;

export const SelectWrapp = styled.div`
  display: flex;
  gap: 9px;
  justify-content: center;

  @media ${device.desktop} {
    gap: 18px;
  }
`;

export const Form = styled.form`
  display: flex;
  align-items: flex-end;
  justify-content: center;

  & div {
    position: relative;

    & p {
      position: absolute;
      top: 10px;
      left: 15px;

      font-size: 15px;
      font-weight: 500;
      line-height: calc(20 / 15);

      color: ${textMainColor};

      @media ${device.desktop} {
        top: 14px;
        left: 24px;
        font-size: 18px;
        line-height: calc(20 / 18);
      }
    }
  }
`;

export const Label = styled.label`
  font-size: 12px;
  font-weight: 500;
  line-height: calc(18 / 12);
  color: ${textLabelFilterColor};

  @media ${device.desktop} {
    font-size: 14px;
    font-weight: 500;
    line-height: calc(18 / 14);
  }
`;

export const InputLeft = styled.input`
  display: block;
  max-width: 105px;
  padding: 10px 0 10px 57px;
  margin-top: 4px;
  border: none;
  border-radius: 10px 0px 0px 10px;
  border-right: 1px solid ${borderAccent2Color};

  color: ${textMainColor};
  background-color: ${highlightBgColor};

  font-size: 14px;
  font-weight: 500;
  line-height: calc(20 / 14);

  @media ${device.desktop} {
    max-width: min-content;
    width: 160px;
    padding: 14px 0 14px 70px;
    margin-top: 8px;
    font-size: 18px;
    line-height: calc(20 / 18);
    border-radius: 14px 0px 0px 14px;
  }
`;

export const InputRight = styled.input`
  display: block;
  max-width: 105px;
  padding: 10px 0 10px 40px;
  margin-top: 26px;
  margin-right: 9px;
  border: none;
  border-radius: 0px 10px 10px 0px;

  color: ${({ $color }) => ($color ? '#ff0000' : `${textMainColor}`)};
  background-color: ${highlightBgColor};

  font-size: 14px;
  font-weight: 500;
  line-height: calc(20 / 14);

  @media ${device.desktop} {
    max-width: min-content;
    width: 160px;
    padding: 14px 0 14px 48px;
    margin-right: 18px;
    font-size: 18px;
    line-height: calc(20 / 18);
    border-radius: 0px 14px 14px 0px;
  }
`;
