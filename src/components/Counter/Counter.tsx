import React from 'react';
import './Counter.scss';

interface Props {
  count: number;
}

export const Counter: React.FC<Props> = ({ count }) => {
  return (
    <>
      {
        count && (
          <div className="counter">
            <div className="counter__circle">
              <div className="counter__count">
                {count}
              </div>
            </div>
          </div>
        )
      }
    </>
  );
};
