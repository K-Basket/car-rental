import styled from 'styled-components';

export const Form = styled.form`
  display: flex;
  align-items: flex-end;

  & div {
    position: relative;

    & p {
      position: absolute;
      top: 14px;
      left: 24px;

      font-size: 18px;
      font-weight: 500;
      line-height: calc(20 / 18);

      color: #121417;
    }
  }
`;

export const Label = styled.label`
  font-size: 14px;
  font-weight: 500;
  line-height: calc(18 / 14);
  color: #8a8a89;
`;

export const InputLeft = styled.input`
  display: block;
  width: 160px;
  padding: 14px 0 14px 70px;
  margin-top: 8px;
  border: none;
  border-radius: 14px 0px 0px 14px;
  border-right: 1px solid rgba(138, 138, 137, 0.2);

  color: #121417;
  background-color: #f7f7fb;
  background-color: yellowgreen;

  font-size: 18px;
  font-weight: 500;
  line-height: calc(20 / 18);
`;

export const InputRight = styled.input`
  display: block;
  width: 160px;
  padding: 14px 0 14px 48px;
  margin-top: 26px;
  margin-right: 18px;
  border: none;
  border-radius: 0px 14px 14px 0px;

  color: #121417;
  background-color: #f7f7fb;
  background-color: yellowgreen;

  font-size: 18px;
  font-weight: 500;
  line-height: calc(20 / 18);
`;

export const ErrorText = styled.p`
  display: inline;
  color: blueviolet;
`;
