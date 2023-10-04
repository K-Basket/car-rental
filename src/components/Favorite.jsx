import { useCarsContext } from 'redux/Context';
import { Svg } from './Favorite.styled';
import sprite from 'images/sprite.svg';
import { removeLocalStorage, saveLocalStorage } from 'helpers/storage';

export const Favorite = ({ id, $top, $right }) => {
  const { idCarsFavorite, setIdCarsFavorite } = useCarsContext();

  const addFavorite = () => {
    if (!idCarsFavorite.includes(id)) {
      setIdCarsFavorite(prev => [...prev, id]);
      saveLocalStorage('idCars', [...idCarsFavorite, id]);

      return;
    }

    if (idCarsFavorite.includes(id)) {
      const res = [...idCarsFavorite];
      res.splice(idCarsFavorite.indexOf(id), 1);
      setIdCarsFavorite(res);
      saveLocalStorage('idCars', res);
    }

    if (idCarsFavorite.length === 1) removeLocalStorage('idCars');
  };

  return (
    <Svg
      $top={$top}
      $right={$right}
      $idInc={idCarsFavorite.includes(id)}
      width="20px"
      height="20px"
      data-card={id}
      onClick={addFavorite}
    >
      <use href={`${sprite}#icon-like-active`}></use>
    </Svg>
  );
};
