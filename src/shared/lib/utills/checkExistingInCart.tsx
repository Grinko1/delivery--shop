import { getIdsInCart } from 'features/Cart';
import { useSelector } from 'react-redux';

export const CheckExistingInCart = (id: number) => {
  const ids = useSelector(getIdsInCart);
  const index = ids.findIndex((item) => item === id);
  return index > -1;
};
