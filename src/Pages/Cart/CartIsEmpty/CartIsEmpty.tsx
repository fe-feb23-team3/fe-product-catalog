/* eslint-disable react/react-in-jsx-scope */
import { FC } from 'react';
import './CartIsEmpty.scss';

interface Props {
  isPlay: boolean;
  onGame: () => void;
}

export const CartIsEmpty: FC<Props> = ({ isPlay, onGame }) => (
  // eslint-disable-next-line react/react-in-jsx-scope
  <div className="cart-is-empty">
    <span>Cart is empty...</span>

    <button type="button" className="cart-is-empty__button" onClick={onGame}>
      {isPlay ? 'Off' : 'On'}
    </button>
  </div>
);
