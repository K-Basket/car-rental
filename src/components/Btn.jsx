import { Button } from './Btn.styled';

export const Btn = ({ children, $width, $paddingTopBott, onClick, type }) => {
  return (
    <Button
      type={type}
      $width={$width}
      $paddingTopBott={$paddingTopBott}
      onClick={onClick}
    >
      {children}
    </Button>
  );
};
