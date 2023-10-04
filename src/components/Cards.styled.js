import styled from 'styled-components';

const gapGridLeft = 29;
const gapGridTop = 50;
const numberOfCards = 4;
export const shadow =
  '0px 2px 1px -1px rgba(0, 0, 0, 0.2), 0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 1px 3px 0px rgba(0, 0, 0, 0.12)';

export const Container = styled.div`
  /* outline: 1px solid salmon; */
  margin-bottom: 50px;
`;

export const CardSet = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;

  list-style: none;
  margin-top: -${gapGridTop}px;
  margin-left: -${gapGridLeft}px;
`;

export const Item = styled.li`
  flex-basis: calc(100% / ${numberOfCards} - ${gapGridLeft}px);
  margin-top: ${gapGridTop}px;
  margin-left: ${gapGridLeft}px;
  transition: scale 250ms cubic-bezier(0.4, 0, 0.2, 1) 0s;
  cursor: pointer;

  &:hover {
    scale: 1.007;
  }

  /* & * {
    outline: 1px solid blueviolet;
  } */
`;

export const Card = styled.article`
  display: flex;
  flex-direction: column;
  height: 100%;

  box-shadow: ${shadow};
  border-radius: 10px;
  overflow: hidden;
`;

export const CardThumb = styled.div`
  position: relative;
  height: 268px;

  & img {
    height: 100%;
    object-fit: cover;
  }
`;

export const CardContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  flex-grow: 1;
  padding: 10px;
`;

export const WrapCardHeading = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 8px;
`;

export const CardHeading = styled.h2`
  font-size: 16px;
  font-weight: 500;
  line-height: calc(24 / 16);

  color: #121417;

  & span {
    color: #3470ff;
  }
`;

export const CardTitle = styled.h2`
  font-size: 18px;
  margin-bottom: 10px;
`;

export const CardText = styled.div`
  color: rgba(18, 20, 23, 0.5);

  & ul {
    display: flex;
    gap: 6px;
    flex-wrap: wrap;

    & li {
      &:not(:last-child) {
        height: 16px;
        border-right: 1px solid rgba(18, 20, 23, 0.1);
        padding-right: 6px;
      }
    }
  }
`;
