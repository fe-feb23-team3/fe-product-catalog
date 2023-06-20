/* eslint-disable @typescript-eslint/no-non-null-assertion */
import React, { useRef, useEffect, useState } from 'react';
import cn from 'classnames';
import './CartGame.scss';

export const CartGame: React.FC = () => {
  const boberPosition = useRef<HTMLDivElement>(null!);
  const cactusPosition = useRef<HTMLDivElement>(null!);
  const [isJump, setIsJump] = useState(false);
  const [gameOver, setGameOver] = useState(false);

  useEffect(() => {
    const intervalId = setInterval(() => {
      const boberComputedStyle = window.getComputedStyle(boberPosition.current);
      const top = boberComputedStyle.getPropertyValue('top');
      const cactusComputedStyle = window.getComputedStyle(
        cactusPosition.current,
      );
      const left = cactusComputedStyle.getPropertyValue('left');

      const boberTop = parseInt(top, 10);
      const cactusLeft = parseInt(left, 10);

      if (cactusLeft < 50 && cactusLeft > 0 && boberTop >= 140) {
        // eslint-disable-next-line no-console
        console.log('Game over!');
        clearInterval(intervalId);
        setGameOver(true);
      }
    }, 100);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  useEffect(() => {
    const handleKeyDown = () => {
      setIsJump(true);

      setTimeout(() => {
        setIsJump(false);
      }, 550);
    };

    document.addEventListener('mousedown', handleKeyDown);

    return () => {
      document.removeEventListener('mousedown', handleKeyDown);
    };
  }, []);

  return (
    <div className="game">
      <div className="scene">
        <div className="terrain" />
        <div
          ref={boberPosition}
          className={cn('boberPos', {
            jump: isJump,
            gameOver,
          })}
        >
          <div
            className={cn('bober', {
              gameOver,
            })}
          />
        </div>
        <div
          ref={cactusPosition}
          className={cn('cactus', {
            gameOver,
          })}
        />
      </div>
    </div>
  );
};
