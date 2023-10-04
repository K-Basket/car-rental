import styled from 'styled-components';

export const CardModal = styled.div`
  position: relative;
  width: 541px;
  min-height: 752px;
  padding: 40px;

  border-radius: 15px;
  background-color: #ffffff;

  & > svg {
    position: absolute;
    top: 16px;
    right: 16px;
    stroke: #121417;
    cursor: pointer;
  }
`;

export const CardThumb = styled.div`
  position: relative;

  & img {
    border-radius: 15px;
    width: 469px;
    height: 314px;
    object-fit: cover;
    border-radius: 10px;
  }
`;

export const Description = styled.div`
  margin-top: 15px;
  margin-bottom: 24px;
`;

export const CardHeading = styled.h2`
  margin-bottom: 8px;

  font-size: 18px;
  font-weight: 500;
  line-height: calc(24 / 16);

  color: #121417;

  & span {
    color: #3470ff;
  }
`;

export const CardText = styled.ul`
  color: rgba(18, 20, 23, 0.5);
  display: flex;
  flex-wrap: wrap;

  & li {
    &:not(:last-child) {
      height: 16px;
      border-right: 1px solid rgba(18, 20, 23, 0.1);
      padding-right: 6px;
      margin-right: 6px;
    }
  }
`;

export const CardTexCondit = styled.li`
  padding: 7px 14px;
  border-radius: 35px;
  color: #363535;
  background-color: #f9f9f9;

  & span {
    color: #3470ff;
  }
`;

export const CardTextDesc = styled.p`
  margin-top: 14px;

  font-size: 14px;
  line-height: calc (20/14);

  color: #121417;
`;

export const CardTitleDescSt = styled.p`
  margin-top: 14px;
  margin-bottom: 8px;

  font-size: 14px;
  font-weight: 500;
  line-height: calc (20/14);

  color: #121417;
`;

export const Link = styled.a`
  width: 168px;
  padding: 12px 50px;

  font-size: 14px;
  font-weight: 600;
  line-height: calc(20 / 14);

  border-radius: 12px;
  color: #ffffff;
  background-color: #3470ff;
  transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0s;

  &:hover,
  :focus {
    background-color: #0b44cd;
  }
`;
