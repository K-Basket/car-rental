import { useEffect, useState } from 'react';
import { ListOptions, SelectList, Title } from './Select.styled';
import sprite from 'images/sprite.svg';

export const Select = ({
  title,
  defaultText,
  $width,
  $colorValue,
  $maxHeight,
  list,
  onSubmit,
  selected,
}) => {
  const [showSelect, setShowSelect] = useState(false);

  useEffect(() => {
    const handleKeyDown = evt => {
      if (evt.code === 'Escape') setShowSelect(false);
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [showSelect]);

  const handleShowList = () => {
    setShowSelect(show => !show);
  };

  const handleGetSelected = evt => {
    const { name } = evt.target.dataset;

    const titleKey = title.split(' ').join('').split('/1').join('');
    onSubmit({ ...{ [titleKey]: name } });
  };

  function getListSelect(data) {
    let result = [];

    data?.forEach(item => {
      if (!result.includes(item)) result.push(item);
    });

    return result;
  }

  return (
    <div>
      <Title $colorValue={$colorValue}>{title}</Title>

      <SelectList $width={$width} onClick={handleShowList}>
        {title === 'Car brand' ? (
          <p>{!selected ? `${defaultText}` : `${selected}`}</p>
        ) : (
          <p>{!selected ? `${defaultText}` : `To ${selected}$`}</p>
        )}

        <svg
          width="16px"
          height="16px"
          style={{ transform: showSelect && `rotate(180deg)` }}
        >
          <use href={`${sprite}#icon-arrow`}></use>
        </svg>

        {showSelect && (
          <ListOptions $width={$width} $maxHeight={$maxHeight}>
            {getListSelect(list).map(item => {
              return (
                <li
                  key={item}
                  data-name={item}
                  onClick={handleGetSelected}
                  style={{ color: selected === item && '#121417' }}
                >
                  {item}
                </li>
              );
            })}
          </ListOptions>
        )}
      </SelectList>
    </div>
  );
};
