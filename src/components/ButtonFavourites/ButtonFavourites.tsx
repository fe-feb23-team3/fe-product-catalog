import React, { useCallback } from 'react';
import cn from 'classnames';
import './ButtonFavourites.scss';

interface Props {
  items: string[];
  itemId: string,
  onClick: (productId: string) => void;
}

export const ButtonFavourites: React.FC<Props> = ({
  items,
  itemId,
  onClick,
}) => {
  const handleAddToFavourites = useCallback(
    (event) => {
      event.preventDefault();
      onClick(itemId);
    },
    [itemId, onClick],
  );

  return (
    <button
      type="button"
      onClick={handleAddToFavourites}
      className={cn('button-AddToFavourites', {
        'button-AddToFavourites-default':
          !items.includes(itemId),
        'button-AddToFavourites-checked':
          items.includes(itemId),
      })}
    >
    </button>
  );
};
