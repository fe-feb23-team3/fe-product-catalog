import React, { useCallback } from 'react';
import cn from 'classnames';
import './ButtonAddToCart.scss';

interface Props {
  items: { id: string, count: number }[];
  itemId: string,
  onClick: (productId: string) => void;
}

export const ButtonAddToCart: React.FC<Props> = ({
  items,
  itemId,
  onClick,
}) => {
  const handleAddToCart = useCallback(
    (event) => {
      event.preventDefault();
      onClick(itemId);
    },
    [itemId, onClick],
  );

  return (
    <button
      type="button"
      onClick={handleAddToCart}
      className={cn('button-addToCart', {
        'button-addToCart-checked': items.some((item) => item.id === itemId),
      })}
    >
      {items.some((item) => item.id === itemId) ? 'Added to cart' : 'Add to cart'}
    </button>
  );
};
